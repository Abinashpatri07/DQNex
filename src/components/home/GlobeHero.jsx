import React, { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

const R = 100; // three-globe ka radius (scene units)

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const CITIES = [
  { name: "Bengaluru", lat: 12.97, lng: 77.59 },
  { name: "Mumbai", lat: 19.07, lng: 72.87 },
  { name: "Delhi", lat: 28.61, lng: 77.2 },
  { name: "Chennai", lat: 13.08, lng: 80.27 },
  { name: "Dubai", lat: 25.2, lng: 55.27 },
  { name: "Riyadh", lat: 24.71, lng: 46.67 },
  { name: "Tel Aviv", lat: 32.08, lng: 34.78 },
  { name: "Istanbul", lat: 41.0, lng: 28.97 },
  { name: "Singapore", lat: 1.35, lng: 103.82 },
  { name: "Jakarta", lat: -6.2, lng: 106.84 },
  { name: "Bangkok", lat: 13.75, lng: 100.5 },
  { name: "Hong Kong", lat: 22.32, lng: 114.17 },
  { name: "Shanghai", lat: 31.23, lng: 121.47 },
  { name: "Beijing", lat: 39.9, lng: 116.4 },
  { name: "Seoul", lat: 37.56, lng: 126.97 },
  { name: "Tokyo", lat: 35.68, lng: 139.69 },
  { name: "London", lat: 51.5, lng: -0.12 },
  { name: "Paris", lat: 48.85, lng: 2.35 },
  { name: "Berlin", lat: 52.52, lng: 13.4 },
  { name: "Amsterdam", lat: 52.37, lng: 4.9 },
  { name: "Madrid", lat: 40.41, lng: -3.7 },
  { name: "Rome", lat: 41.9, lng: 12.49 },
  { name: "Stockholm", lat: 59.33, lng: 18.06 },
  { name: "Moscow", lat: 55.75, lng: 37.61 },
  { name: "Cairo", lat: 30.04, lng: 31.23 },
  { name: "Lagos", lat: 6.52, lng: 3.37 },
  { name: "Nairobi", lat: -1.29, lng: 36.82 },
  { name: "Johannesburg", lat: -26.2, lng: 28.04 },
  { name: "Cape Town", lat: -33.92, lng: 18.42 },
  { name: "Casablanca", lat: 33.57, lng: -7.58 },
  { name: "New York", lat: 40.71, lng: -74.0 },
  { name: "Toronto", lat: 43.65, lng: -79.38 },
  { name: "Chicago", lat: 41.87, lng: -87.62 },
  { name: "Dallas", lat: 32.77, lng: -96.79 },
  { name: "Los Angeles", lat: 34.05, lng: -118.24 },
  { name: "San Francisco", lat: 37.77, lng: -122.41 },
  { name: "Seattle", lat: 47.6, lng: -122.33 },
  { name: "Vancouver", lat: 49.28, lng: -123.12 },
  { name: "Mexico City", lat: 19.43, lng: -99.13 },
  { name: "Miami", lat: 25.76, lng: -80.19 },
  { name: "Sao Paulo", lat: -23.55, lng: -46.63 },
  { name: "Rio de Janeiro", lat: -22.9, lng: -43.17 },
  { name: "Buenos Aires", lat: -34.6, lng: -58.38 },
  { name: "Santiago", lat: -33.45, lng: -70.66 },
  { name: "Lima", lat: -12.04, lng: -77.04 },
  { name: "Bogota", lat: 4.71, lng: -74.07 },
  { name: "Sydney", lat: -33.86, lng: 151.2 },
  { name: "Melbourne", lat: -37.81, lng: 144.96 },
  { name: "Perth", lat: -31.95, lng: 115.86 },
  { name: "Auckland", lat: -36.84, lng: 174.76 },
];

// Bright glowing hub nodes (Bengaluru first = main hub)
const HUBS = new Set([
  "Bengaluru",
  "London",
  "New York",
  "San Francisco",
  "Sao Paulo",
  "Dubai",
  "Singapore",
  "Johannesburg",
  "Tokyo",
]);

const GOLD_ARC = ["rgba(255,241,194,1)", "rgba(255,163,26,0.9)"];
const BLUE_ARC = ["rgba(224,242,254,1)", "rgba(56,189,248,0.8)"];
const SPOKE_ARC = ["rgba(190,230,255,0.95)", "rgba(50,140,255,0.55)"];

const TONES = {
  gold: {
    core: "rgba(255,196,80,0.95)",
    halo: "rgba(255,150,20,0.16)",
    inner: "rgba(255,226,150,0.95)",
    outer: "rgba(255,150,20,0.35)",
  },
  blue: {
    core: "rgba(120,205,255,0.95)",
    halo: "rgba(40,130,255,0.16)",
    inner: "rgba(170,222,255,0.95)",
    outer: "rgba(40,130,255,0.35)",
  },
};

// Orbit rings jo globe ke around ghoomte hain (image jaise).
// a/b = ellipse size (globe radius = 1), rx/ry/rz = tilt, speed = node ki speed
const ORBITS = [
  { tone: "gold", a: 1.48, b: 1.1, rx: 1.25, ry: 0.15, rz: -0.55, speed: 0.2 },
  { tone: "blue", a: 1.45, b: 1.12, rx: 1.0, ry: 0.6, rz: 0.35, speed: -0.17 },
  { tone: "gold", a: 1.38, b: 1.09, rx: 0.55, ry: -0.4, rz: 1.1, speed: 0.15 },
  { tone: "blue", a: 1.35, b: 1.14, rx: 1.45, ry: -0.8, rz: 0.2, speed: 0.22 },
  { tone: "blue", a: 1.5, b: 1.18, rx: 0.3, ry: 0.3, rz: 2.2, speed: -0.12 },
  { tone: "gold", a: 1.42, b: 1.15, rx: 1.7, ry: 0.5, rz: -1.2, speed: 0.18 },
  { tone: "blue", a: 1.3, b: 1.08, rx: 0.9, ry: -1.0, rz: 0.9, speed: -0.2 },
].map((o) => ({ ...o, euler: new THREE.Euler(o.rx, o.ry, o.rz) }));

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const seeded = (seed) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

// lat/lng -> three-globe ke coordinate system me vector
const toVec = (lat, lng, r = 1) => {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((90 - lng) * Math.PI) / 180;
  return new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
};

const toLatLngAlt = (v) => {
  const r = v.length();
  const lat = (Math.asin(v.y / r) * 180) / Math.PI;
  let lng = 90 - (Math.atan2(v.z, v.x) * 180) / Math.PI;
  lng = ((lng + 540) % 360) - 180;
  return [lat, lng, r - 1];
};

const orbitPoint = (o, ang) =>
  new THREE.Vector3(o.a * Math.cos(ang), o.b * Math.sin(ang), 0).applyEuler(
    o.euler
  );

const glowTexture = (inner, outer) => {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.16, inner);
  g.addColorStop(0.45, outer);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
};

const makeSprite = (tex, size) => {
  const s = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  s.scale.set(size, size, 1);
  return s;
};

// Globe ke edge par blue -> gold glowing rim (Fresnel)
const makeRim = () =>
  new THREE.Mesh(
    new THREE.SphereGeometry(R * 1.01, 96, 96),
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        varying vec3 vN;
        varying vec3 vV;
        void main() {
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying vec3 vN;
        varying vec3 vV;
        void main() {
          float f = pow(1.0 - max(dot(normalize(vN), normalize(vV)), 0.0), 2.6);
          float warm = smoothstep(0.1, 0.9, vN.x * 0.7 + vN.y * 0.7);
          vec3 blue = vec3(0.18, 0.62, 1.0);
          vec3 gold = vec3(1.0, 0.62, 0.12);
          vec3 col = mix(blue, gold, warm * 0.85);
          gl_FragColor = vec4(col * f * 1.6, 1.0);
        }`,
    })
  );

/* ------------------------------------------------------------------ */
/* Globe surface texture: blue ocean + dot-matrix land + city lights   */
/* ------------------------------------------------------------------ */

// Land/water mask (white = water, dark = land). Chahein to isse apne
// server par host karke yahan URL badal sakte hain.
const MASK_URL =
  "https://unpkg.com/three-globe/example/img/earth-water.png";
const TEX_W = 4096;
const TEX_H = 2048;

const paintOcean = (ctx) => {
  ctx.fillStyle = "#04153f";
  ctx.fillRect(0, 0, TEX_W, TEX_H);

  // Halka graticule grid (image jaisi patli lines)
  ctx.strokeStyle = "rgba(60,130,255,0.12)";
  ctx.lineWidth = 1.5;
  for (let lat = -75; lat < 90; lat += 15) {
    const y = ((90 - lat) / 180) * TEX_H;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(TEX_W, y);
    ctx.stroke();
  }
  for (let lng = -180; lng <= 180; lng += 15) {
    const x = ((lng + 180) / 360) * TEX_W;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, TEX_H);
    ctx.stroke();
  }
};

const paintLand = (ctx, mask, mw, mh) => {
  const isLand = (lat, lng) => {
    const x = Math.floor((((lng + 180) % 360) + 360) % 360 / 360 * mw) % mw;
    const y = Math.min(mh - 1, Math.max(0, Math.floor(((90 - lat) / 180) * mh)));
    return mask[(y * mw + x) * 4] < 128;
  };

  const cityVecs = CITIES.map((c) => toVec(c.lat, c.lng));
  const rand = seeded(3);
  const step = 0.9; // dots ke beech ka gap (degrees)

  const dot = (x, y, r, rgb, a, haloMul, haloA) => {
    ctx.fillStyle = `rgba(${rgb},${haloA})`;
    ctx.beginPath();
    ctx.arc(x, y, r * haloMul, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `rgba(${rgb},${a})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  };

  for (let lat = -84; lat <= 84; lat += step) {
    const k = Math.max(0.2, Math.cos((lat * Math.PI) / 180));
    const dLng = step / k;
    for (let lng = -180; lng < 180; lng += dLng) {
      if (!isLand(lat, lng)) continue;

      const coastal = !(
        isLand(lat + step, lng) &&
        isLand(lat - step, lng) &&
        isLand(lat, lng + dLng) &&
        isLand(lat, lng - dLng)
      );

      // Nearest city se angular distance (degrees)
      const v = toVec(lat, lng);
      let dmin = 180;
      for (let i = 0; i < cityVecs.length; i++) {
        const d = (Math.acos(Math.min(1, Math.max(-1, v.dot(cityVecs[i])))) * 180) / Math.PI;
        if (d < dmin) dmin = d;
      }

      const x = ((lng + 180) / 360) * TEX_W;
      const y = ((90 - lat) / 180) * TEX_H;
      const lit =
        (coastal && dmin < 11 && rand() < 0.55) || (dmin < 5 && rand() < 0.25);

      if (lit) {
        dot(x, y, 2.6, "255,190,60", 1, 2.4, 0.2);
      } else if (coastal) {
        dot(x, y, 2.1, "120,200,255", 1, 2.2, 0.16);
      } else {
        dot(x, y, 1.9, "47,125,255", 0.9, 2.2, 0.12);
      }
    }
  }
};

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

// Globe ka material: react-globe.gl me globeMaterial ek PROP hai (ref method nahi),
// isliye hum material khud banakar prop se pass karte hain.
const makeSurface = () => {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = TEX_W;
  canvas.height = TEX_H;
  const ctx = canvas.getContext("2d");
  paintOcean(ctx);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Unlit (emissive) taaki lighting se globe kaala/grey na dikhe
  const material = new THREE.MeshPhongMaterial({
    color: 0x000000,
    map: texture,
    emissive: 0xffffff,
    emissiveMap: texture,
    emissiveIntensity: 0.95,
    specular: 0x000000,
    shininess: 0,
  });
  return { canvas, ctx, texture, material };
};

const arcInitialGap = () => Math.random();

const GlobeHero = () => {
  const wrapRef = useRef(null);
  const globeRef = useRef(null);
  const fxRef = useRef(null);
  const surfaceRef = useRef(null);
  if (!surfaceRef.current) surfaceRef.current = makeSurface();
  const [size, setSize] = useState({ w: 0, h: 0 });

  // Container ke size ke hisaab se globe resize
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Surface network: har city apne nearest hub se, aur hubs ke beech long arcs
  const arcs = useMemo(() => {
    const rand = seeded(42);
    const hubs = CITIES.filter((c) => HUBS.has(c.name));
    const hubVecs = hubs.map((h) => toVec(h.lat, h.lng));

    const spokes = CITIES.filter((c) => !HUBS.has(c.name)).map((c) => {
      const v = toVec(c.lat, c.lng);
      let best = 0;
      let bestDot = -2;
      hubVecs.forEach((hv, i) => {
        const d = v.dot(hv);
        if (d > bestDot) {
          bestDot = d;
          best = i;
        }
      });
      const h = hubs[best];
      return {
        startLat: h.lat,
        startLng: h.lng,
        endLat: c.lat,
        endLng: c.lng,
        color: SPOKE_ARC,
        stroke: 0.34,
        dash: 0.7,
        gap: 0.3,
        time: 4000 + rand() * 3000,
      };
    });

    const main = hubs[0];
    const backbone = hubs.slice(1).map((h, i) => ({
      startLat: main.lat,
      startLng: main.lng,
      endLat: h.lat,
      endLng: h.lng,
      color: i % 2 === 0 ? GOLD_ARC : BLUE_ARC,
      stroke: 0.55,
      dash: 0.35,
      gap: 0.65,
      time: 2600 + rand() * 1500,
    }));

    const extra = Array.from({ length: 7 }, (_, i) => {
      const a = hubs[1 + Math.floor(rand() * (hubs.length - 1))];
      let b = hubs[1 + Math.floor(rand() * (hubs.length - 1))];
      if (b === a) b = hubs[(hubs.indexOf(a) % (hubs.length - 1)) + 1];
      return {
        startLat: a.lat,
        startLng: a.lng,
        endLat: b.lat,
        endLng: b.lng,
        color: i % 2 === 0 ? GOLD_ARC : BLUE_ARC,
        stroke: 0.5,
        dash: 0.35,
        gap: 0.65,
        time: 3200 + rand() * 2000,
      };
    });

    return [...spokes, ...backbone, ...extra];
  }, []);

  // Orange "city lights" clusters + bright city points
  const points = useMemo(() => {
    const rand = seeded(11);
    const out = [];
    CITIES.forEach((c) => {
      const hub = HUBS.has(c.name);
      const n = hub ? 26 : 12;
      const spread = hub ? 3.2 : 2.2;
      const k = Math.max(0.35, Math.cos((c.lat * Math.PI) / 180));
      for (let i = 0; i < n; i++) {
        const ang = rand() * Math.PI * 2;
        const d = Math.sqrt(rand()) * spread;
        out.push({
          lat: c.lat + Math.sin(ang) * d,
          lng: c.lng + (Math.cos(ang) * d) / k,
          size: 0.12 + rand() * 0.2,
          color: rand() > 0.25 ? "#ffb020" : "#ffe3a3",
        });
      }
    });
    CITIES.forEach((c) => {
      const hub = HUBS.has(c.name);
      out.push({
        lat: c.lat,
        lng: c.lng,
        size: hub ? 0.6 : 0.4,
        color: hub ? "#ffffff" : "#fff1c2",
      });
    });
    return out;
  }, []);

  // Orbit rings: soft halo + thin bright core
  const orbitPaths = useMemo(
    () =>
      ORBITS.flatMap((o) => {
        const pts = Array.from({ length: 181 }, (_, i) =>
          toLatLngAlt(orbitPoint(o, (i / 180) * Math.PI * 2))
        );
        const t = TONES[o.tone];
        return [
          { pts, color: t.halo, stroke: 1.2 },
          { pts, color: t.core, stroke: 0.3 },
        ];
      }),
    []
  );

  const hubRings = useMemo(
    () =>
      CITIES.filter((c) => HUBS.has(c.name)).map((c, i) => ({
        ...c,
        color: i % 2 === 0 ? "255,176,32" : "56,189,248",
      })),
    []
  );

  // NOTE: Bina globeImageUrl ke react-globe.gl "ready" ref attach hone se
  // pehle hi fire ho jata hai, isliye onGlobeReady par bharosa nahi karte.
  // Setup neeche useEffect se hota hai jab ref sach me available ho.
  const setupFx = (g) => {
    if (fxRef.current) return;

    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const controls = g.controls();
    controls.autoRotate = !reduce;
    controls.autoRotateSpeed = 0.9; // ghumne ki speed
    controls.enableZoom = false; // page scroll na ruke
    controls.enablePan = false;
    // Image jaisa Atlantic view. India par start karna ho: lat 20, lng 78
    g.pointOfView({ lat: 15, lng: -35, altitude: 3 }, 0);

    const scene = g.scene();
    const fx = { scene, objects: [], textures: [], raf: 0, dead: false };
    fxRef.current = fx;

    // Texture sharp rahe isliye max anisotropy (material prop se already laga hai)
    const surface = surfaceRef.current;
    if (surface) {
      surface.texture.anisotropy = g.renderer().capabilities.getMaxAnisotropy();
      surface.texture.needsUpdate = true;
    }

    // Glowing rim
    const rim = makeRim();
    scene.add(rim);
    fx.objects.push(rim);

    // Glow textures
    const tex = {
      gold: glowTexture(TONES.gold.inner, TONES.gold.outer),
      blue: glowTexture(TONES.blue.inner, TONES.blue.outer),
      white: glowTexture("rgba(215,235,255,0.95)", "rgba(80,160,255,0.4)"),
    };
    fx.textures.push(tex.gold, tex.blue, tex.white);

    // Orbit par ghoomte nodes (har ring par 3)
    const orbitNodes = [];
    ORBITS.forEach((o) => {
      for (let k = 0; k < 3; k++) {
        const sprite = makeSprite(tex[o.tone], 24);
        scene.add(sprite);
        fx.objects.push(sprite);
        orbitNodes.push({ sprite, orbit: o, phase: (k / 3) * Math.PI * 2 + o.rx });
      }
    });

    // Hub nodes on surface
    const hubNodes = CITIES.filter((c) => HUBS.has(c.name)).map((c, i) => {
      const main = i === 0;
      const base = main ? 30 : 20;
      const sprite = makeSprite(main ? tex.white : i % 2 ? tex.gold : tex.blue, base);
      sprite.position.copy(toVec(c.lat, c.lng, R * 1.012));
      scene.add(sprite);
      fx.objects.push(sprite);
      return { sprite, base, phase: i * 1.3 };
    });

    const start = performance.now();
    const tick = (now) => {
      const t = (now - start) / 1000;
      orbitNodes.forEach((n) => {
        const ang = n.phase + t * n.orbit.speed;
        n.sprite.position.copy(orbitPoint(n.orbit, ang)).multiplyScalar(R);
      });
      hubNodes.forEach((h) => {
        h.sprite.scale.setScalar(h.base * (1 + 0.18 * Math.sin(t * 2.2 + h.phase)));
      });
      if (!reduce) fx.raf = requestAnimationFrame(tick);
    };
    tick(start);
    if (!reduce) fx.raf = requestAnimationFrame(tick);
  };

  // Land mask load karke dotted continents + city lights texture me paint karo
  useEffect(() => {
    const surface = surfaceRef.current;
    if (!surface) return undefined;
    let dead = false;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (dead) return;
      const mc = document.createElement("canvas");
      mc.width = img.width;
      mc.height = img.height;
      const mctx = mc.getContext("2d", { willReadFrequently: true });
      mctx.drawImage(img, 0, 0);
      const { data } = mctx.getImageData(0, 0, mc.width, mc.height);
      paintLand(surface.ctx, data, mc.width, mc.height);
      surface.texture.needsUpdate = true;
    };
    img.onerror = () =>
      console.warn("GlobeHero: land mask load nahi hua:", MASK_URL);
    img.src = MASK_URL;
    return () => {
      dead = true;
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  // Unmount par texture/material free karo
  useEffect(
    () => () => {
      const surface = surfaceRef.current;
      if (!surface) return;
      surface.texture.dispose();
      surface.material.dispose();
    },
    []
  );

  const hasSize = size.w > 0;

  // Globe mount hone ke baad (ref ready hote hi) saara setup chalao
  useEffect(() => {
    if (!hasSize) return undefined;

    let raf = 0;
    let tries = 0;
    let cancelled = false;

    const attempt = () => {
      if (cancelled) return;
      const g = globeRef.current;
      let ok = false;
      try {
        ok = !!(g && typeof g.scene === "function" && g.scene() && g.controls());
      } catch (e) {
        ok = false;
      }
      if (ok) {
        setupFx(g);
        return;
      }
      if (tries++ < 180) raf = requestAnimationFrame(attempt);
    };
    attempt();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      const fx = fxRef.current;
      if (!fx) return;
      fx.dead = true;
      cancelAnimationFrame(fx.raf);
      fx.objects.forEach((o) => {
        fx.scene.remove(o);
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
      fx.textures.forEach((t) => t.dispose());
      fxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSize]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-full rounded-2xl overflow-hidden bg-[#02081a] cursor-grab active:cursor-grabbing"
    >
      {/* Blue halo behind globe */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.22) 0%, rgba(30,90,220,0.10) 36%, rgba(2,8,26,0) 66%)",
        }}
      />
      {/* Warm gold glow, top-right (reference image jaisa) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          mixBlendMode: "screen",
          background:
            "radial-gradient(circle at 70% 26%, rgba(255,160,30,0.22) 0%, rgba(255,160,30,0.07) 24%, rgba(255,160,30,0) 44%)",
        }}
      />

      {hasSize && (
        <div
          className="relative"
          style={{
            filter:
              "brightness(1.12) saturate(1.2) drop-shadow(0 0 20px rgba(56,150,255,0.45))",
          }}
        >
          <Globe
            ref={globeRef}
            width={size.w}
            height={size.h}
            backgroundColor="rgba(0,0,0,0)"
            globeMaterial={surfaceRef.current ? surfaceRef.current.material : undefined}
            atmosphereColor="#3aa0ff"
            atmosphereAltitude={0.22}
            /* Connections */
            arcsData={arcs}
            arcColor="color"
            arcStroke="stroke"
            arcAltitudeAutoScale={0.35}
            arcDashLength="dash"
            arcDashGap="gap"
            arcDashInitialGap={arcInitialGap}
            arcDashAnimateTime="time"
            /* City lights */
            pointsData={points}
            pointsMerge={true}
            pointColor="color"
            pointRadius="size"
            pointAltitude={0.007}
            pointResolution={6}
            /* Orbit rings */
            pathsData={orbitPaths}
            pathPoints="pts"
            pathPointLat={(p) => p[0]}
            pathPointLng={(p) => p[1]}
            pathPointAlt={(p) => p[2]}
            pathColor="color"
            pathStroke="stroke"
            pathResolution={2}
            pathTransitionDuration={0}
            /* Hub pulses */
            ringsData={hubRings}
            ringColor={(d) => (t) => `rgba(${d.color},${Math.pow(1 - t, 1.5)})`}
            ringMaxRadius={5}
            ringPropagationSpeed={1.6}
            ringRepeatPeriod={2200}
          />
        </div>
      )}
    </div>
  );
};

export default GlobeHero;