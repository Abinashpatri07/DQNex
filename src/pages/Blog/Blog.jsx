import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Clock,
  Calendar,
  X,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import { submitNewsletter } from "../../utils/contactApi";

import imgAI from "../../assets/HeroScroll1.png";
import imgERP from "../../assets/HeroScroll2.png";
import imgVerify from "../../assets/HeroScroll3.png";
import imgEco1 from "../../assets/Industry/EcommereInsight1.png";
import imgEco2 from "../../assets/Industry/EcommerceInsight2.png";
import imgMfg from "../../assets/Industry/manufactureInsight1.png";
import imgPay from "../../assets/Industry/PaymentInsight1.png";

const CATEGORIES = [
  "All",
  "AI & Automation",
  "ERP & Enterprise",
  "E-Commerce",
  "Payments",
  "Manufacturing",
  "Security & Trust",
];

const BLOG_POSTS = [
  {
    id: "agentic-ai-enterprise-workflows",
    featured: true,
    category: "AI & Automation",
    date: "Nov 18, 2026",
    readTime: "5 min read",
    author: "DQNeX AI Engineering Team",
    image: imgAI,
    title: "How Agentic AI Is Transforming Enterprise Operations in 2026",
    excerpt:
      "Move beyond simple chatbots: discover how autonomous AI agents automate multi-step approvals, data reconciliation, and customer support with human-in-the-loop safety.",
    keyTakeaways: [
      "Agentic workflows cut repetitive back-office processing time by up to 60%.",
      "Guardrails and audit trails ensure compliance before any critical action runs.",
      "Start with high-volume, rule-heavy processes before scaling company-wide.",
    ],
    sections: [
      {
        heading: "From Chatbots to Action-Oriented Agents",
        body: "Traditional automation breaks whenever data formats change or exceptions appear. Modern agentic AI systems combine reasoning models with structured API tools—allowing software to read invoices, verify purchase orders, flag anomalies, and route edge cases to human reviewers.",
      },
      {
        heading: "Designing Reliable Guardrails",
        body: "Enterprise adoption depends on predictability. At DQNeX, every AI workflow is built with deterministic validation layers, role-based permissions, and full observability logs so teams always know why an action was taken.",
      },
      {
        heading: "Where to Begin",
        body: "The fastest ROI comes from pairing AI agents with existing ERP and CRM systems—automating ticket triage, order-to-cash checks, and scheduled executive reporting without replacing core infrastructure.",
      },
    ],
  },
  {
    id: "unified-erp-scaling-operations",
    category: "ERP & Enterprise",
    date: "Nov 12, 2026",
    readTime: "4 min read",
    author: "DQNeX ERPNeX Team",
    image: imgERP,
    title: "Eliminating Data Silos with a Connected ERP Architecture",
    excerpt:
      "Why growing businesses outgrow disconnected spreadsheets—and how real-time inventory, dispatch, and finance sync drives faster decisions.",
    keyTakeaways: [
      "Single source of truth eliminates manual spreadsheet reconciliation errors.",
      "Real-time stock and dispatch tracking improves fulfillment speed.",
      "Role-based dashboards give owners, store managers, and finance live clarity.",
    ],
    sections: [
      {
        heading: "The Hidden Cost of Disconnected Tools",
        body: "When purchasing, warehouse, and accounting teams work in separate tools, small discrepancies compound into delayed dispatches, stockouts, and inaccurate margins.",
      },
      {
        heading: "Connecting Every Department Live",
        body: "With ERPNeX, every purchase order, store transfer, and invoice updates in real time—giving leadership live visibility from procurement to final delivery.",
      },
    ],
  },
  {
    id: "background-verification-hiring-trust",
    category: "Security & Trust",
    date: "Nov 05, 2026",
    readTime: "4 min read",
    author: "DQNeX VerifyNeX Team",
    image: imgVerify,
    title: "Building High-Trust Teams with Automated Candidate Verification",
    excerpt:
      "Manual background checks slow down onboarding by weeks. Learn how unified identity and credential verification reduces hiring risk at scale.",
    keyTakeaways: [
      "Automated checks cut verification turnaround from weeks to days.",
      "Centralized audit trails simplify compliance and enterprise client audits.",
      "Seamless candidate experience improves offer-to-join conversion.",
    ],
    sections: [
      {
        heading: "Speed Without Compromising Compliance",
        body: "Slow verification causes top candidates to drop off. VerifyNeX streamlines identity, employment, and education checks inside a single workspace with live case status tracking.",
      },
      {
        heading: "Audit-Ready Evidence",
        body: "Every verification step is logged with timestamped evidence—helping HR and compliance teams pass enterprise security reviews effortlessly.",
      },
    ],
  },
  {
    id: "high-converting-ecommerce-architecture",
    category: "E-Commerce",
    date: "Oct 28, 2026",
    readTime: "6 min read",
    author: "DQNeX Commerce Practice",
    image: imgEco1,
    title: "Designing High-Converting E-Commerce Experiences for Scale",
    excerpt:
      "Sub-second page loads, frictionless checkout, and omnichannel inventory sync: the engineering pillars behind modern digital commerce.",
    keyTakeaways: [
      "Every 100ms reduction in checkout latency lifts mobile conversion rates.",
      "Unified catalog and inventory APIs prevent overselling during flash sales.",
      "Personalized recommendations boost average order value sustainably.",
    ],
    sections: [
      {
        heading: "Performance Is Revenue",
        body: "Mobile shoppers expect instant interactions. Optimizing asset delivery, edge caching, and lean checkout flows directly translates into higher completed orders.",
      },
      {
        heading: "Resilient Peak-Traffic Scaling",
        body: "Modern commerce platforms must handle 10x traffic spikes during seasonal campaigns without checkout timeouts or inventory drift.",
      },
    ],
  },
  {
    id: "modern-payment-orchestration-security",
    category: "Payments",
    date: "Oct 19, 2026",
    readTime: "5 min read",
    author: "DQNeX FinTech Engineering",
    image: imgPay,
    title: "Reducing Failed Transactions with Smart Payment Orchestration",
    excerpt:
      "How intelligent gateway routing, automated retries, and real-time fraud scoring protect revenue and improve checkout success rates.",
    keyTakeaways: [
      "Multi-gateway fallback routing rescues transactions during bank downtime.",
      "Automated reconciliation saves finance teams hours every week.",
      "Real-time anomaly checks block fraud without adding friction for good users.",
    ],
    sections: [
      {
        heading: "Why Single-Gateway Setups Lose Revenue",
        body: "Relying on a single payment processor exposes your checkout to regional outages and bank-specific declines. Smart routing automatically shifts traffic to the highest-performing gateway.",
      },
      {
        heading: "Clean Settlement & Reconciliation",
        body: "Automated webhook verification and settlement matching ensure every captured payment aligns cleanly with your accounting ledger.",
      },
    ],
  },
  {
    id: "smart-manufacturing-iot-visibility",
    category: "Manufacturing",
    date: "Oct 10, 2026",
    readTime: "5 min read",
    author: "DQNeX Industry Solutions",
    image: imgMfg,
    title: "Real-Time Shop Floor Visibility for Modern Manufacturing",
    excerpt:
      "Connecting production lines, quality checks, and supply chain forecasts to reduce downtime and improve on-time delivery.",
    keyTakeaways: [
      "Live production dashboards expose bottlenecks before delays cascade.",
      "Digital quality logs trace defects back to exact batches and shifts.",
      "Demand-linked material planning reduces excess inventory holding costs.",
    ],
    sections: [
      {
        heading: "Connecting Plant Operations to Business Systems",
        body: "Bridging shop-floor telemetry with ERP planning empowers plant managers to respond to machine downtime and material shortages in minutes rather than days.",
      },
      {
        heading: "Consistent Quality at Scale",
        body: "Standardized digital checklists and automated alerts keep defect rates low across multiple facilities.",
      },
    ],
  },
  {
    id: "omnichannel-commerce-personalization",
    category: "E-Commerce",
    date: "Oct 02, 2026",
    readTime: "4 min read",
    author: "DQNeX Product Strategy",
    image: imgEco2,
    title: "Omnichannel Customer Journeys That Drive Repeat Purchases",
    excerpt:
      "Unifying web, mobile, and post-purchase notifications so customers experience one cohesive brand at every touchpoint.",
    keyTakeaways: [
      "Consistent cart and order history across devices improves retention.",
      "Proactive order tracking updates cut support ticket volume.",
      "First-party customer insights power smarter loyalty campaigns.",
    ],
    sections: [
      {
        heading: "Beyond the First Checkout",
        body: "Retention is built after the order is placed. Real-time order status updates, easy returns, and tailored follow-ups turn first-time buyers into long-term advocates.",
      },
    ],
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState(null);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsStatus, setNewsStatus] = useState("idle");
  const [newsMsg, setNewsMsg] = useState("");

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      const matchesCat =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const showFeaturedBanner =
    selectedCategory === "All" && searchQuery.trim() === "";

  const gridPosts = showFeaturedBanner
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const trimmed = newsletterEmail.trim();
    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!trimmed) {
      setNewsStatus("error");
      setNewsMsg("Please enter your email address.");
      return;
    }
    if (/^\d/.test(trimmed) || !emailRegex.test(trimmed)) {
      setNewsStatus("error");
      setNewsMsg("Email must start with a letter and have a valid format.");
      return;
    }

    setNewsStatus("loading");
    setNewsMsg("");

    try {
      const data = await submitNewsletter(trimmed);
      if (data.success) {
        setNewsStatus("success");
        setNewsMsg(data.message || "Subscribed! Thank you for joining.");
        setNewsletterEmail("");
      } else {
        setNewsStatus("error");
        setNewsMsg(data.message || "Failed to subscribe.");
      }
    } catch (err) {
      setNewsStatus("error");
      setNewsMsg(
        err.message || "Failed to connect to server. Please try again."
      );
    }
  };

  return (
    <div className="w-full bg-transparent font-sans text-white">
      {/* ── HERO + SEARCH + CATEGORY FILTER ──────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-10 pt-[128px] md:px-10 lg:px-14">
        <div className="pointer-events-none absolute left-1/2 top-16 h-[340px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(59,130,246,0.16),rgba(168,85,247,0.08)_45%,transparent_75%)] blur-[55px]" />

        <div className="relative z-10 mx-auto max-w-[1300px]">
          <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-blue-300">
            <Sparkles className="h-3.5 w-3.5" />
            Insights &amp; Trends
          </span>

          <h1 className="mt-4 max-w-[760px] text-[34px] font-semibold leading-[1.15] tracking-tight text-white md:text-[44px] lg:text-[50px]">
            Ideas Shaping the{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Future of Technology.
            </span>
          </h1>

          <p className="mt-4 max-w-[620px] text-[14px] leading-relaxed text-[#c8d1dc] md:text-[15px]">
            Deep dives, engineering playbooks, and industry perspectives from the
            DQNeX team across AI, ERP, commerce, payments, and enterprise
            systems.
          </p>

          {/* Search + Filters */}
          <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-[380px]">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, or keywords..."
                className="w-full rounded-full border border-white/15 bg-[#08172d]/80 py-2.5 pl-11 pr-4 text-xs text-white placeholder:text-white/50 outline-none transition-colors focus:border-blue-400"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                      active
                        ? "border-blue-400/70 bg-[#3b6fb5] text-white shadow-[0_0_16px_rgba(59,130,246,0.3)]"
                        : "border-white/15 bg-white/[0.04] text-white/75 hover:border-white/35 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ─────────────────────────────────────── */}
      {showFeaturedBanner && (
        <section className="px-6 pb-8 pt-2 md:px-10 lg:px-14">
          <div className="mx-auto max-w-[1300px]">
            <div
              onClick={() => setActivePost(featuredPost)}
              className="group grid cursor-pointer grid-cols-1 overflow-hidden rounded-[24px] border border-white/12 bg-[linear-gradient(135deg,rgba(18,40,75,0.72)_0%,rgba(8,20,40,0.9)_100%)] shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-blue-400/45 lg:grid-cols-12"
            >
              <div className="relative h-[240px] overflow-hidden sm:h-[300px] lg:col-span-6 lg:h-auto lg:min-h-[340px]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081428]/75 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#081428]/70" />
                <span className="absolute left-5 top-5 rounded-full border border-blue-400/40 bg-[#071529]/85 px-3.5 py-1 text-[11px] font-medium text-blue-300 backdrop-blur-sm">
                  Featured Article
                </span>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-6 lg:p-10">
                <div className="flex flex-wrap items-center gap-4 text-xs text-blue-300/90">
                  <span className="font-medium">{featuredPost.category}</span>
                  <span className="flex items-center gap-1.5 text-white/60">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/60">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="mt-4 text-[24px] font-semibold leading-snug text-white transition-colors group-hover:text-blue-200 md:text-[30px]">
                  {featuredPost.title}
                </h2>

                <p className="mt-3 text-[13.5px] leading-relaxed text-[#c8d1dc]">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#3b6fb5] px-5 py-2.5 text-xs font-medium text-white transition-colors group-hover:bg-[#4a7fc1]">
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ARTICLES GRID ────────────────────────────────────────── */}
      <section className="px-6 py-8 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1300px]">
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-[20px] border border-white/12 bg-[linear-gradient(145deg,rgba(18,38,70,0.6)_0%,rgba(8,20,40,0.88)_100%)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/45 hover:shadow-[0_18px_45px_rgba(37,99,235,0.18)]"
                >
                  <div className="relative h-[190px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081428]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 rounded-full border border-white/15 bg-[#071529]/85 px-3 py-1 text-[11px] font-medium text-blue-300 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-4 text-[11.5px] text-white/60">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="mt-3 text-[17px] font-semibold leading-snug text-white transition-colors group-hover:text-blue-200">
                        {post.title}
                      </h3>

                      <p className="mt-2.5 text-[12.5px] leading-relaxed text-[#b4c0d0]">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-xs font-medium text-blue-300">
                      <span>Read Article</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[20px] border border-white/10 bg-[#0a182e]/70 p-10 text-center">
              <p className="text-sm text-[#c8d1dc]">
                No articles matched your search. Try another keyword or reset
                filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-full bg-[#3b6fb5] px-5 py-2 text-xs font-medium text-white hover:bg-[#4a7fc1]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER SUBSCRIBE BOX ─────────────────────────────── */}
      <section className="px-6 pb-20 pt-8 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1300px] overflow-hidden rounded-[24px] border border-[#2a62b0]/45 bg-gradient-to-r from-[#10213c] via-[#0c1a33] to-[#061124] p-7 shadow-2xl sm:p-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-[540px]">
              <span className="text-[13px] font-medium tracking-wide text-blue-300">
                Stay Updated
              </span>
              <h2 className="mt-2 text-[24px] font-semibold leading-tight text-white md:text-[30px]">
                Subscribe to{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  DQNeX Insights
                </span>
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-[#b4c0d0]">
                Get our latest engineering guides, product updates, and AI
                insights delivered straight to your inbox.
              </p>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              className="w-full max-w-[440px]"
            >
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsStatus === "error") setNewsStatus("idle");
                  }}
                  placeholder="Enter your work email *"
                  className="flex-1 rounded-full border border-white/15 bg-[#061124] px-5 py-3 text-xs text-white placeholder:text-white/50 outline-none focus:border-blue-400"
                />
                <button
                  type="submit"
                  disabled={newsStatus === "loading"}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#3b6fb5] px-6 py-3 text-xs font-medium text-white transition-colors hover:bg-[#4a7fc1] disabled:opacity-60"
                >
                  {newsStatus === "loading" ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe <ArrowRight className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>

              {newsStatus === "success" && (
                <p className="mt-2.5 flex items-center gap-1.5 text-xs text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>{newsMsg}</span>
                </p>
              )}
              {newsStatus === "error" && (
                <p className="mt-2.5 flex items-center gap-1.5 text-xs text-rose-300">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{newsMsg}</span>
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ── ARTICLE READER MODAL ─────────────────────────────────── */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActivePost(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[760px] overflow-y-auto rounded-2xl border border-white/15 bg-[#08162b] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePost(null)}
              aria-label="Close article"
              className="sticky float-right right-4 top-4 z-20 m-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white/80 backdrop-blur-md transition-colors hover:bg-black/80 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-[220px] w-full overflow-hidden sm:h-[280px]">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08162b] via-[#08162b]/30 to-transparent" />
            </div>

            <div className="px-6 pb-8 pt-2 sm:px-9">
              <div className="flex flex-wrap items-center gap-3 text-xs text-blue-300">
                <span className="rounded-full border border-blue-400/35 bg-blue-500/15 px-3 py-1 font-medium">
                  {activePost.category}
                </span>
                <span className="text-white/60">{activePost.date}</span>
                <span className="text-white/60">&middot;</span>
                <span className="text-white/60">{activePost.readTime}</span>
                <span className="text-white/60">&middot;</span>
                <span className="text-white/75">{activePost.author}</span>
              </div>

              <h2 className="mt-4 text-[24px] font-semibold leading-snug text-white sm:text-[30px]">
                {activePost.title}
              </h2>

              <p className="mt-3 text-[14px] leading-relaxed text-[#c8d1dc]">
                {activePost.excerpt}
              </p>

              {/* Key Takeaways */}
              <div className="mt-6 rounded-xl border border-blue-400/25 bg-[#0d213f]/70 p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                  <BookOpen className="h-3.5 w-3.5" />
                  Key Takeaways
                </p>
                <ul className="mt-3 space-y-2 text-[13px] text-white/85">
                  {activePost.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Body */}
              <div className="mt-6 space-y-5">
                {activePost.sections.map((sec, idx) => (
                  <div key={idx}>
                    <h3 className="text-[17px] font-semibold text-white">
                      {sec.heading}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-[1.75] text-[#c8d1dc]">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer CTA inside Modal */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                <p className="text-xs text-[#b4c0d0]">
                  Want to implement this for your business?
                </p>
                <Link
                  to="/contact#contact-form"
                  onClick={() => setActivePost(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#3b6fb5] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#4a7fc1]"
                >
                  Talk to Our Team <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
