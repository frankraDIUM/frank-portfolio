import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Experience", "Skills", "Projects", "Contact"];

const projects = [
  {
    category: "GeoAI",
    index: "01",
    title: "Chicago Urban Mobility Pattern Analysis",
    subtitle: "Satellite Imagery, Taxi Data & ML",
    description:
      "Integrated Sentinel-2 imagery, OpenStreetMap road data, population density, POI datasets, and ~14 million taxi trips to analyze and predict urban mobility patterns.",
    highlights: ["R² = 0.954 temporal model", "Interactive web dashboard", "GeoAI + mobility intelligence"],
    github: "https://github.com/frankraDIUM/Chicago-Urban-Mobility-Pattern-Analysis-Using-Satellite-Imagery-Taxi-Data-and-ML",
    accent: "#00D4B4",
  },
  {
    category: "GeoAI",
    index: "02",
    title: "Uganda Multi-Disease GeoAI Early Warning System",
    subtitle: "Climate + Spatial ML Forecasting",
    description:
      "GeoAI-powered early warning platform integrating ERA5-Land climate data, spatial features, and machine learning for vector-borne and waterborne disease risk forecasting.",
    highlights: ["Spatiotemporal ML", "ERA5-Land climate integration", "Interactive forecasting dashboard"],
    github: "https://github.com/frankraDIUM/Uganda-Multi-Disease-GeoAI-Early-Warning-System",
    accent: "#00D4B4",
  },
  {
    category: "Spatial Data Science",
    index: "03",
    title: "Transit Accessibility Analysis — New York City",
    subtitle: "Walking Isochrones & Spatial Equity",
    description:
      "Analyzed subway accessibility using walking isochrones and spatial analysis to identify transit deserts, quantifying equity gaps across all five boroughs.",
    highlights: ["Network analysis", "Accessibility modelling", "Spatial equity analysis"],
    github: "https://github.com/frankraDIUM/Transit-Accessibility-Analysis-in-New-York-City",
    accent: "#7B61FF",
  },
  {
    category: "Machine Learning",
    index: "04",
    title: "FraudShield AI",
    subtitle: "Real-Time Financial Fraud Detection",
    description:
      "Real-time fraud detection ecosystem with FastAPI backend, live data streaming, and an interactive financial monitoring dashboard with sub-second inference.",
    highlights: ["Real-time inference", "FastAPI backend", "Interactive analytics"],
    github: "https://github.com/frankraDIUM/FraudShield-AI",
    accent: "#FF6B6B",
  },
  {
    category: "Data Analytics",
    index: "05",
    title: "Supply Chain & Inventory Optimization Dashboard",
    subtitle: "Power BI Operational Intelligence",
    description:
      "End-to-end Power BI solution providing visibility into inventory health, warehouse performance, supplier reliability, and demand forecasting.",
    highlights: ["Power BI", "Demand forecasting", "Operational analytics"],
    github: "https://github.com/frankraDIUM/Supply-Chain-Inventory-Optimization-Dashboard",
    accent: "#F59E0B",
  },
  {
    category: "Data Analytics",
    index: "06",
    title: "Online Retail Sales Performance Dashboard",
    subtitle: "Executive Business Intelligence",
    description:
      "Executive-level analytics dashboard using the UCI Online Retail II dataset to uncover operational and customer insights through advanced BI techniques.",
    highlights: ["Executive dashboarding", "Customer analytics", "Business intelligence"],
    github: "https://github.com/frankraDIUM/Online-Retail-Sales-Performance-Dashboard",
    accent: "#F59E0B",
  },
];

const skills = {
  "Geospatial & GIS": {
    items: ["ArcGIS Pro", "QGIS", "PostGIS", "Leaflet", "Google Earth Engine", "Remote Sensing", "Spatial Modelling"],
    color: "#00D4B4",
    bg: "rgba(0,212,180,0.08)",
  },
  "Data Science & Analytics": {
    items: ["Python", "SQL", "Power BI", "Pandas", "R", "Jupyter Notebook", "SPSS"],
    color: "#7B61FF",
    bg: "rgba(123,97,255,0.08)",
  },
  "Development & Cloud": {
    items: ["Flask", "JavaScript", "TypeScript", "HTML", "CSS", "Git", "AWS", "GCP"],
    color: "#FF6B6B",
    bg: "rgba(255,107,107,0.08)",
  },
};

const experience = [
  {
    role: "Data Analyst",
    company: "Linghong Intelligence Research",
    period: "2025 – Present",
    tag: "Current",
    description:
      "Developing machine learning-driven alpha factors, ESG impact estimation models using Double Machine Learning, and financial forecasting systems for business strategy optimization.",
  },
  {
    role: "Geospatial / Data Analyst",
    company: "Freelance",
    period: "2024 – 2025",
    tag: "Freelance",
    description:
      "Delivered spatial data science projects, flood risk modelling, market opportunity analysis, remote sensing workflows, and location intelligence solutions.",
  },
  {
    role: "Technical Supervisor",
    company: "Keda Ghana Company Limited",
    period: "2021 – 2024",
    tag: "Full-time",
    description:
      "Managed operational datasets, supervised field teams, coordinated raw material spatial mapping, and supported data-driven operational reporting.",
  },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", year: "2025", org: "Amazon Web Services" },
  { name: "Data Science Associate Professional Certificate", year: "2025", org: "DataCamp" },
  { name: "Data Analyst Professional Certificate", year: "2024", org: "DataCamp" },
  { name: "Google IT Support Professional Certificate", year: "2021", org: "Google / Coursera" },
  { name: "Spatial Data Science", year: "2020", org: "ESRI" },
];

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function RevealSection({ children, className = "", delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
        background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px",
        padding: "32px",
        cursor: "pointer",
        transition2: "background 0.3s ease, border 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      className="project-card"
    >
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "2px",
        background: `linear-gradient(90deg, ${project.accent}80, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
      }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{
            fontSize: "11px",
            fontFamily: "'JetBrains Mono', monospace",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.1em",
          }}>
            {project.index}
          </span>
          <span style={{
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: project.accent,
            background: `${project.accent}18`,
            padding: "4px 10px",
            borderRadius: "4px",
            fontWeight: 500,
          }}>
            {project.category}
          </span>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "12px",
            color: hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)",
            textDecoration: "none",
            letterSpacing: "0.05em",
            transition: "color 0.2s ease",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          GitHub
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <h3 style={{
        fontSize: "18px",
        fontWeight: 600,
        color: "#fff",
        lineHeight: 1.35,
        marginBottom: "6px",
        fontFamily: "'Fraunces', Georgia, serif",
      }}>
        {project.title}
      </h3>
      <p style={{
        fontSize: "13px",
        color: "rgba(255,255,255,0.4)",
        marginBottom: "16px",
        letterSpacing: "0.02em",
      }}>
        {project.subtitle}
      </p>

      <p style={{
        fontSize: "14px",
        color: "rgba(255,255,255,0.6)",
        lineHeight: 1.7,
        marginBottom: "20px",
      }}>
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {project.highlights.map((h, i) => (
          <span key={i} style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.5)",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "5px 12px",
            borderRadius: "4px",
            letterSpacing: "0.02em",
          }}>
            {h}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function FrankPortfolio() {
  const [activeNav, setActiveNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080C12",
      color: "#fff",
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,600&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        ::selection { background: rgba(0,212,180,0.3); color: #fff; }

        html { scroll-behavior: smooth; }

        .cursor-glow {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,212,180,0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
        }

        .nav-link {
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }
        .nav-link:hover { color: rgba(255,255,255,0.9); }

        .stat-number {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 52px;
          font-weight: 300;
          font-style: italic;
          color: #fff;
          line-height: 1;
        }

        .skill-tag {
          font-size: 13px;
          padding: 6px 14px;
          border-radius: 4px;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
        }
        .skill-tag:hover { transform: translateY(-1px); }

        .exp-card {
          border-left: 1px solid rgba(255,255,255,0.08);
          padding-left: 28px;
          position: relative;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 6px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #00D4B4;
          box-shadow: 0 0 12px rgba(0,212,180,0.5);
        }

        .project-card {
          transition: background 0.3s ease, border 0.3s ease, transform 0.3s ease !important;
        }
        .project-card:hover { transform: translateY(-3px); }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #00D4B4;
          color: #080C12;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        .cta-btn-primary:hover {
          background: #00EDCA;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0,212,180,0.25);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        .cta-btn-secondary:hover {
          border-color: rgba(255,255,255,0.35);
          color: #fff;
          transform: translateY(-2px);
        }

        .grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #00D4B4;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-label::before {
          content: '';
          width: 24px;
          height: 1px;
          background: #00D4B4;
        }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-animate-1 { animation: fadeInUp 0.8s ease 0.1s both; }
        .hero-animate-2 { animation: fadeInUp 0.8s ease 0.25s both; }
        .hero-animate-3 { animation: fadeInUp 0.8s ease 0.4s both; }
        .hero-animate-4 { animation: fadeInUp 0.8s ease 0.55s both; }
        .hero-animate-5 { animation: fadeInUp 0.8s ease 0.7s both; }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        .pulse-dot { animation: pulse-dot 2.4s ease-in-out infinite; }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .float-badge { animation: float-badge 4s ease-in-out infinite; }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 52px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .edu-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
        }
      `}</style>

      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Navigation */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 40px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,12,18,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>
        <div style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: "18px",
          fontWeight: 600,
          color: "#fff",
          letterSpacing: "-0.01em",
        }}>
          F.G.A
        </div>

        <div className="nav-links" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="mailto:frankradium@gmail.com"
          style={{
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#00D4B4",
            textDecoration: "none",
            padding: "8px 18px",
            border: "1px solid rgba(0,212,180,0.35)",
            borderRadius: "4px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(0,212,180,0.12)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          Hire Me
        </a>
      </nav>

      {/* Hero */}
      <section id="about" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div className="grid-lines" />

        {/* Ambient orbs */}
        <div style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,180,0.08) 0%, transparent 70%)",
          top: "-100px",
          right: "-100px",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,97,255,0.06) 0%, transparent 70%)",
          bottom: "50px",
          left: "-50px",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 40px 80px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            {/* Left */}
            <div>
              <div className="hero-animate-1" style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
                <span className="pulse-dot" style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "#00D4B4", display: "block",
                }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.16em",
                  color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase",
                }}>
                  Available for opportunities
                </span>
              </div>

              <h1 className="hero-animate-2 hero-title" style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "72px",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#fff",
                marginBottom: "8px",
              }}>
                Frank G.
              </h1>
              <h1 className="hero-animate-2 hero-title" style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "72px",
                fontWeight: 600,
                fontStyle: "italic",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #00D4B4 0%, #7B61FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "28px",
              }}>
                Asiamah
              </h1>

              <div className="hero-animate-3" style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "28px",
              }}>
                {["Geospatial AI", "Spatial Data Science", "Machine Learning"].map((tag, i) => (
                  <span key={i} style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.55)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "5px 14px",
                    borderRadius: "3px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className="hero-animate-3" style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                maxWidth: "460px",
                marginBottom: "40px",
              }}>
                Data Analyst, Spatial Data Scientist and GeoAI practitioner transforming complex geospatial, business, and machine learning data into intelligent systems, predictive insights, and impactful visual experiences.
              </p>

              <div className="hero-animate-4" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="mailto:frankradium@gmail.com" className="cta-btn-primary">
                  Get in Touch
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://github.com/frankraDIUM" target="_blank" rel="noopener noreferrer" className="cta-btn-secondary">
                  View GitHub
                </a>
                <a href="https://www.linkedin.com/in/frankgasiamah/" target="_blank" rel="noopener noreferrer" className="cta-btn-secondary">
                  LinkedIn
                </a>
              </div>

              {/* Stats */}
              <div className="hero-animate-5 stats-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                marginTop: "60px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px",
                overflow: "hidden",
              }}>
                {[
                  { n: "5+", label: "Years Experience" },
                  { n: "20+", label: "Major Projects" },
                  { n: "M.Sc.", label: "Cartography & GIS" },
                ].map((stat, i) => (
                  <div key={i} style={{
                    padding: "24px 20px",
                    background: "#080C12",
                    textAlign: "center",
                  }}>
                    <div className="stat-number">{stat.n}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "6px", letterSpacing: "0.04em" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Focus Card */}
            <div style={{ position: "relative" }}>
              <div className="float-badge" style={{
                position: "absolute",
                top: "-20px",
                right: "20px",
                background: "rgba(0,212,180,0.12)",
                border: "1px solid rgba(0,212,180,0.25)",
                borderRadius: "8px",
                padding: "10px 16px",
                zIndex: 2,
              }}>
                <div style={{ fontSize: "11px", color: "#00D4B4", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>
                  R² = 0.954
                </div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
                  Temporal prediction model
                </div>
              </div>

              <div style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "36px",
                backdropFilter: "blur(20px)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
                  <div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                      Core Focus Areas
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: 600, color: "#fff" }}>Spatial AI & Analytics</div>
                  </div>
                  <span className="pulse-dot" style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#00D4B4", display: "block" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { label: "Machine Learning & Predictive Modelling", icon: "⬡" },
                    { label: "Geospatial Intelligence & Spatial Analytics", icon: "⬡" },
                    { label: "Remote Sensing & Satellite Imagery", icon: "⬡" },
                    { label: "Data Visualization & Dashboard Engineering", icon: "⬡" },
                    { label: "Location Intelligence & Spatial Optimization", icon: "⬡" },
                    { label: "Web GIS & Interactive Applications", icon: "⬡" },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "14px 16px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "8px",
                    }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00D4B4", flexShrink: 0, opacity: 0.7 }} />
                      <span style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="float-badge" style={{
                animationDelay: "2s",
                position: "absolute",
                bottom: "-16px",
                left: "20px",
                background: "rgba(123,97,255,0.12)",
                border: "1px solid rgba(123,97,255,0.25)",
                borderRadius: "8px",
                padding: "10px 16px",
                zIndex: 2,
              }}>
                <div style={{ fontSize: "11px", color: "#7B61FF", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>
                  AWS Certified
                </div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
                  Cloud Practitioner 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* About */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 40px" }}>
        <RevealSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}>
            <div>
              <div className="section-label">About Me</div>
              <h2 style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "38px",
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}>
                Building intelligent systems through data, geography & ML.
              </h2>
            </div>
            <div style={{ paddingTop: "4px" }}>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: "20px" }}>
                I am a multidisciplinary data professional with expertise spanning Data Analytics, Spatial Data Science, GeoAI, Remote Sensing, Machine Learning, and Software Development.
              </p>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: "20px" }}>
                My work focuses on leveraging geospatial intelligence, predictive modelling, and interactive technologies to solve real-world problems in mobility, health, business intelligence, infrastructure, and environmental monitoring.
              </p>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.85 }}>
                I hold a <span style={{ color: "#fff", fontWeight: 500 }}>Master of Science in Cartography and GIS</span> from Nanjing Normal University and have delivered projects combining satellite imagery, spatial statistics, web mapping, machine learning, and dashboard engineering.
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      <div className="divider" />

      {/* Experience */}
      <section id="experience" style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 40px" }}>
          <RevealSection>
            <div className="section-label">Experience</div>
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "42px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "60px",
            }}>
              Professional Journey
            </h2>
          </RevealSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {experience.map((job, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="exp-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "10px" }}>
                    <div>
                      <h3 style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "#fff",
                        marginBottom: "4px",
                      }}>
                        {job.role}
                      </h3>
                      <p style={{ fontSize: "14px", color: "#00D4B4", letterSpacing: "0.02em" }}>{job.company}</p>
                    </div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <span style={{
                        fontSize: "11px",
                        color: "#00D4B4",
                        background: "rgba(0,212,180,0.1)",
                        border: "1px solid rgba(0,212,180,0.2)",
                        padding: "3px 10px",
                        borderRadius: "3px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}>
                        {job.tag}
                      </span>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.3)",
                      }}>
                        {job.period}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginTop: "12px" }}>
                    {job.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 40px" }}>
        <RevealSection>
          <div className="section-label">Technical Toolkit</div>
          <h2 style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "42px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: "52px",
          }}>
            Technologies & Expertise
          </h2>
        </RevealSection>

        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {Object.entries(skills).map(([category, { items, color, bg }], i) => (
            <RevealSection key={category} delay={i * 100}>
              <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                padding: "28px",
                height: "100%",
              }}>
                <div style={{
                  width: "32px",
                  height: "3px",
                  background: color,
                  borderRadius: "2px",
                  marginBottom: "16px",
                }} />
                <h3 style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "20px",
                  letterSpacing: "0.01em",
                }}>
                  {category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {items.map((skill, j) => (
                    <span
                      key={j}
                      className="skill-tag"
                      style={{
                        color: color,
                        background: bg,
                        border: `1px solid ${color}22`,
                        fontWeight: 400,
                        fontSize: "13px",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Projects */}
      <section id="projects" style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 40px" }}>
          <RevealSection>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "52px", flexWrap: "wrap", gap: "20px" }}>
              <div>
                <div className="section-label">Featured Projects</div>
                <h2 style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "42px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                }}>
                  Selected Work
                </h2>
              </div>
              <a
                href="https://github.com/frankraDIUM"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
              >
                View all on GitHub
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </RevealSection>

          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 40px" }}>
        <RevealSection>
          <div className="section-label">Background</div>
          <h2 style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "42px",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: "52px",
          }}>
            Education & Certifications
          </h2>
        </RevealSection>

        <div className="edu-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <RevealSection>
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px",
              padding: "32px",
              height: "100%",
            }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#00D4B4", marginBottom: "28px", fontFamily: "'JetBrains Mono', monospace" }}>
                Education
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {[
                  { degree: "M.Sc. Cartography & GIS", school: "Nanjing Normal University", year: "2025" },
                  { degree: "B.A. Geography & Resource Development, Chinese", school: "University of Ghana", year: "2017" },
                ].map((edu, i) => (
                  <div key={i}>
                    <h3 style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: "6px",
                      lineHeight: 1.3,
                    }}>
                      {edu.degree}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#00D4B4", marginBottom: "4px" }}>{edu.school}</p>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px",
              padding: "32px",
              height: "100%",
            }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#7B61FF", marginBottom: "28px", fontFamily: "'JetBrains Mono', monospace" }}>
                Certifications
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {certifications.map((cert, i) => (
                  <div key={i} style={{
                    padding: "16px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}>
                    <div>
                      <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", fontWeight: 500, marginBottom: "3px" }}>
                        {cert.name}
                      </div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>{cert.org}</div>
                    </div>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "#7B61FF",
                      background: "rgba(123,97,255,0.1)",
                      padding: "3px 8px",
                      borderRadius: "3px",
                      flexShrink: 0,
                    }}>
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section id="contact" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(0,212,180,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="grid-lines" style={{ opacity: 0.5 }} />

        <div style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "120px 40px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}>
          <RevealSection>
            <div className="section-label" style={{ justifyContent: "center" }}>Let's Collaborate</div>
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "54px",
              fontWeight: 600,
              fontStyle: "italic",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "24px",
            }}>
              Turning Data Into<br />
              <span style={{
                background: "linear-gradient(135deg, #00D4B4 0%, #7B61FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Spatial Intelligence
              </span>
            </h2>

            <p style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              maxWidth: "520px",
              margin: "0 auto 48px",
            }}>
              Open to opportunities in Data Science, Spatial Data Science, GeoAI, Machine Learning, Geospatial Analytics, and intelligent dashboard development.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <a href="mailto:frankradium@gmail.com" className="cta-btn-primary">
                frankradium@gmail.com
              </a>
              <a href="https://github.com/frankraDIUM" target="_blank" rel="noopener noreferrer" className="cta-btn-secondary">
                Explore Projects
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.04em" }}>
          © 2026 Frank G. Asiamah
        </div>
        <div style={{ display: "flex", gap: "28px" }}>
          {[
            { label: "GitHub", href: "https://github.com/frankraDIUM" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/frankgasiamah/" },
            { label: "Email", href: "mailto:frankradium@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                fontSize: "12px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
            >
              {label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
