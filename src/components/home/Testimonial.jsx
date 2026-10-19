
import React, { useEffect, useRef, useState } from "react";
import ranjanImage from "../../assets/director/ranjan.png";
import prakashImage from "../../assets/director/prakash.png";
import jajatiImage from "../../assets/director/jajati.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Mr. Ranjan Kumar Swain",
    designation: "Director, Jigsan Group",
    image: ranjanImage,
    rating: 5,
    heading: "Trusted Partner In Our Growth Journey",
    quote:
      "Partnering with DQNeX has elevated our technology and operations at Jigsan. Their technical depth, precise execution, and collaborative approach consistently deliver scalable, practical solutions—making DQNeX a trusted partner in our growth and operational efficiency.",
    highlight:
      "Their technical depth, precise execution, and collaborative approach consistently deliver scalable",
  },
  {
    id: 2,
    name: "Mr. A. Prakash Tantri",
    designation: "Director, Ritikam",
    image: prakashImage,
    rating: 5,
    heading: "Expert Support That Accelerates Growth",
    quote:
      "DQNeX has been a transformative partner for Ritikam, strengthening our backend operations, improving service quality, and enabling faster decisions. Their practical, future-ready solutions and deep understanding of our brand make them a trusted contributor to continued growth.",
    highlight:
      "strengthening our backend operations, improving service quality, and enabling faster decisions",
  },
  {
    id: 3,
    name: "Mr. Jajati Behera",
    designation: "Director, Career Builder",
    image: jajatiImage,
    rating: 5,
    heading: "A Reliable Partner for Digital Transformation",
    quote:
      "DQNeX has been a valuable technology partner, helping us streamline our processes and explore new opportunities for growth. Their practical approach, commitment to quality, and understanding of business needs make collaboration seamless. We appreciate their responsiveness on delivering solutions that create meaningful business value.",
    highlight:
      "valuable technology partner, streamline our processes, new opportunities for growth, commitment to quality, meaningful business value",
  },
];

const clamp = (value, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const NORMAL = {
  from: [113, 130, 151],
  to: [226, 232, 240],
};

const GOLD = {
  from: [128, 116, 76],
  to: [226, 190, 110],
};

const mix = (colors, progress) =>
  `rgb(${colors.from
    .map((start, i) =>
      Math.round(start + (colors.to[i] - start) * progress)
    )
    .join(", ")})`;

const Testimonial = () => {
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const paragraphRefs = useRef([]);
  const wordRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll-triggered highlighting, independently for every testimonial.
  useEffect(() => {
    const paint = () => {
      const viewportHeight = window.innerHeight;

      testimonials.forEach((testimonial, cardIndex) => {
        const paragraph = paragraphRefs.current[cardIndex];
        const words = wordRefs.current[cardIndex] || [];

        if (!paragraph || !words.length) return;

        const top = paragraph.getBoundingClientRect().top;
        const progress = clamp(
          (viewportHeight * 0.9 - top) /
          (viewportHeight * 0.6)
        );

        words.forEach((element, wordIndex) => {
          if (!element) return;

          const word = element.dataset.word || "";
          const cleanWord = word.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");

          const highlightedWords = (testimonial.highlight || "")
            .split(/\s+/)
            .map((item) =>
              item.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
            );

          const isHighlighted = highlightedWords.includes(cleanWord);
          const totalWords = words.length;
          const wordProgress = clamp(
            (progress * (totalWords + 1.5) - wordIndex) / 1.5
          );

          element.style.color = mix(
            isHighlighted ? GOLD : NORMAL,
            wordProgress
          );
        });
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wordRefs.current.forEach((cardWords) => {
        (cardWords || []).forEach((word) => {
          if (word) word.style.color = "#e2e8f0";
        });
      });
      return;
    }

    let raf = 0;

    const schedulePaint = () => {
      if (raf) return;

      raf = requestAnimationFrame(() => {
        raf = 0;
        paint();
      });
    };

    paint();
    window.addEventListener("scroll", schedulePaint, {
      passive: true,
    });
    window.addEventListener("resize", schedulePaint);

    return () => {
      window.removeEventListener("scroll", schedulePaint);
      window.removeEventListener("resize", schedulePaint);

      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Keep the active navigation dot in sync with the carousel.
  const updateActiveIndex = () => {
    const carousel = carouselRef.current;
    const firstCard = cardRefs.current[0];

    if (!carousel || !firstCard) return;

    const step =
      firstCard.getBoundingClientRect().width +
      parseFloat(getComputedStyle(carousel).columnGap || 0);

    if (step > 0) {
      setActiveIndex(
        clamp(Math.round(carousel.scrollLeft / step), 0, testimonials.length - 1)
      );
    }
  };

  const goTo = (index) => {
    const carousel = carouselRef.current;
    const card = cardRefs.current[index];

    if (!carousel || !card) return;

    carousel.scrollTo({
      left: card.offsetLeft - carousel.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const move = (direction) => {
    goTo(
      (activeIndex + direction + testimonials.length) %
      testimonials.length
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-transparent py-16 md:py-20">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <span className="mb-5 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-xs font-medium tracking-wide text-blue-200">
            WHAT OUR CUSTOMERS SAY
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Trusted by Our Partners
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Real partnerships. Meaningful outcomes. Lasting business impact.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={updateActiveIndex}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item, index) => {
              const words = item.quote.split(/\s+/);

              return (
                <article
                  key={item.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="relative flex min-w-0 basis-full snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111e32]/95 via-[#0c1728]/95 to-[#080e1a]/95 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition-colors duration-300 hover:border-blue-400/25 sm:p-8 md:basis-[calc(50%-12px)] md:p-8 lg:p-9"
                >
                  {/* Subtle card glow */}
                  <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-blue-500/[0.07] blur-3xl" />

                  {/* Customer details */}
                  <div className="relative flex items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 shrink-0 rounded-full border border-white/10 object-cover sm:h-[76px] sm:w-[76px]"
                      loading="lazy"
                    />

                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                        {item.designation}
                      </p>
                    </div>

                    <div
                      className="flex shrink-0 gap-0.5 pt-1 text-sm text-amber-400 sm:gap-1 sm:text-base"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <span key={i} aria-hidden="true">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial heading */}
                  <h4 className="relative mt-8 text-xl font-medium leading-snug text-white sm:mt-9 sm:text-2xl">
                    {item.heading}
                  </h4>

                  {/* Independently animated testimonial text */}
                  <p
                    ref={(el) => (paragraphRefs.current[index] = el)}
                    className="relative mt-5 text-sm leading-7 sm:text-base sm:leading-[1.85]"
                  >
                    {words.map((word, wordIndex) => (
                      <React.Fragment key={wordIndex}>
                        <span
                          ref={(el) => {
                            if (!wordRefs.current[index]) {
                              wordRefs.current[index] = [];
                            }

                            wordRefs.current[index][wordIndex] = el;
                          }}
                          data-word={word}
                          style={{ color: mix(NORMAL, 0) }}
                          aria-hidden="true"
                        >
                          {word}
                        </span>
                        {wordIndex < words.length - 1 ? " " : ""}
                      </React.Fragment>
                    ))}
                  </p>

                  {/* Bottom accent */}
                  <div className="pointer-events-none mt-auto pt-8">
                    <div className="h-px w-full bg-gradient-to-r from-blue-400/30 via-white/[0.08] to-transparent" />
                  </div>
                </article>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                      ? "w-7 bg-blue-400"
                      : "w-2 bg-slate-600 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-blue-400/40 hover:bg-blue-500/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-blue-400/40 hover:bg-blue-500/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;



