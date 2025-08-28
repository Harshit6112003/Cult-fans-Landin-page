'use client';
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Main timeline data
const timelineSteps = [
  {
    title: "Create Profile",
    desc: "Set up your creator profile with bio, interests, and showcase your best content to attract followers",
    icon: "/Group 1779.png",
    iconAlt: "Create Profile",
    image: "/create profile.jpg",
  },
  {
    title: "Share Content",
    desc: "Upload your creative content, engage with your audience, and build your community organically",
    icon: "/Group 1869.png",
    iconAlt: "Share Content",
    image: "/share.jpg",
  },
  {
    title: "Build Audience",
    desc: "Grow your following through consistent content creation and meaningful interactions with fans",
    icon: "/Group 1870.png",
    iconAlt: "Build Audience",
    image: "/Build Audience.jpg",
  },
  {
    title: "Monetize &amp; Earn",
    desc: "Start earning through various revenue streams while doing what you love most",
    icon: "/Group 1871.png",
    iconAlt: "Monetize &amp; Earn",
    image: "/monetize and earn.jpg",
  },
];

const whyCards = [
  {
    icon: "/in1.png",
    title: "Direct Fan Connection",
    desc: "Build meaningful relationships with your audience without intermediaries",
  },
  {
    icon: "/Group 1873.png",
    title: "Creative Freedom",
    desc: "Express yourself authentically without platform restrictions or algorithms",
  },
  {
    icon: "/Group 1874.png",
    title: "Growth Tools",
    desc: "Access powerful analytics and promotion tools to accelerate your growth",
  },
  {
    icon: "/Group 1875.png",
    title: "Recognition System",
    desc: "Get featured and recognized for outstanding contributions",
  },
];

// Card animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const fadeInIcon = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Timeline card component
const TimelineCard: React.FC<{ 
  step: typeof timelineSteps[0]; 
  right?: boolean; 
  topSpacing?: number 
}> = ({ step, right, topSpacing }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={right ? fadeInRight : fadeInLeft}
      className="timeline-card"
      style={{
        position: "relative",
        left: "20px",
        background: "#191919",
        borderRadius: 16,
        boxShadow: "0 3px 26px #00000089",
        minWidth: 340,
        maxWidth: 400,
        minHeight: 118,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        flexDirection: right ? "row-reverse" : "row",
        marginBottom: "16px",
        marginTop: topSpacing ? topSpacing : 0,
        overflow: "hidden",
        padding: 0,
      }}
    >
      <img
        src={step.image}
        alt={step.title}
        style={{
          width: 105,
          height: 105,
          objectFit: "cover"
        }}
      />
      <div
        style={{
          flex: 1,
          padding: "0 23px",
          textAlign: right ? "right" : "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: 7 }}>
          {step.title}
        </div>
        <div style={{ fontSize: "1rem", color: "#ccc", lineHeight: "1.34" }}>
          {step.desc}
        </div>
      </div>
    </motion.div>
  );
};

// Timeline icon component
const TimelineIcon: React.FC<{ icon: string; top: number; delay: number }> = ({ icon, top, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.18, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: fadeInIcon.hidden,
        visible: {
          ...fadeInIcon.visible,
          transition: { duration: 0.5, delay: delay * 0.15 }
        }
      }}
      className="timeline-icon"
      style={{
        position: "absolute",
        left: "15%",
        transform: "translateX(-50%)",
        top,
        width: 44,
        height: 44,
        background: "linear-gradient(135deg, #D36407, #E49A5C)",
        borderRadius: 25,
        boxShadow: "inset 0 4px 6px rgba(0,0,0,0.4), inset 0 -4px 6px rgba(0,0,0,0.2), 0 2px 14px #E49A5C44",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
        gap: "30px"
      }}
    >
      <img src={icon} alt="" style={{ width: 26, height: 26, objectFit: "contain" }} />
    </motion.div>
  );
};

// Mobile Menu Component
const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(14,12,13,0.98)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px"
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "24px",
          cursor: "pointer"
        }}
      >
        ✕
      </button>
      
      <a href="#" style={{ color: "#dedccd", fontSize: "1.2rem", textDecoration: "none" }}>
        Platform Guidelines
      </a>
      <a href="#" style={{ color: "#dedccd", fontSize: "1.2rem", textDecoration: "none" }}>
        About Us
      </a>
      <a href="#" style={{ color: "#dedccd", fontSize: "1.2rem", textDecoration: "none" }}>
        FAQ
      </a>
      <button
        style={{
          background: "linear-gradient(135deg, #D36407, #E49A5C)",
          color: "#fff",
          borderRadius: 12,
          border: "none",
          padding: "12px 24px",
          fontWeight: 700,
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "20px",
          boxShadow: "inset 0 4px 6px rgba(0,0,0,0.4), inset 0 -4px 6px rgba(0,0,0,0.2)"
        }}
      >
        Join Now
      </button>
    </div>
  );
};

export default function LandingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqList = [
    {
      question: "What is Cult Fans?",
      answer: "Cult Fans is a subscription-based Fan engagement platform where creators can share exclusive photos, videos, and experiences with their fans"
    },
    {
      question: "How do I subscribe to a creator?",
      answer: "Simply sign up for a free account, choose your favorite creator, and subscribe to their page by paying the set subscription fee."
    },
    {
      question: "Can I become a creator on Cult Fans?",
      answer: "Yes! Anyone can apply to become a creator. Once approved, you can upload content, set your subscription price, and earn directly from your fans.",
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely. All payments on Cult Fans are processed through secure, encrypted systems to ensure your privacy and safety.",
    },
    {
      question: "How do creators earn money?",
      answer: "Creators earn through monthly subscriptions, pay-per-view content, and tips from fans. Earnings can be withdrawn securely at any time.",
    },
  ];

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // FIXED FAQ useEffect
  useEffect(() => {
    refs.current.forEach((el, idx) => {
      if (el) {
        if (openIndex === idx) {
          el.style.maxHeight = el.scrollHeight + 40 + "px"; // FIXED
          el.style.paddingTop = "20px";
          el.style.paddingBottom = "20px";
          el.style.opacity = "1";
        } else {
          el.style.maxHeight = "0px";
          el.style.paddingTop = "0px";
          el.style.paddingBottom = "0px";
          el.style.opacity = "0";
        }
      }
    });
  }, [openIndex]);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(ellipse at 36% 30%, #251509 0%, #0e0c0d 60%, #0e0c0d 100%)",
          fontFamily: "'Montserrat', Arial, sans-serif",
          color: "#fff",
          position: "relative",
        }}
      >
        {/* Header */}
        <header
          className="header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "28px 62px 18px 62px",
            borderBottom: "1.5px solid #23201e",
            background: "rgba(14,12,13,0.98)",
          }}
        >
          <span className="logo" style={{ fontSize: "2.2rem", fontWeight: 700, letterSpacing: "2px" }}>
            <span style={{ color: "#fff" }}>CULT</span>
            <span style={{ 
              background: "linear-gradient(135deg, #D36407, #E49A5C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>FANS</span>
          </span>
          
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "42px" }}>
            <a href="#" style={{ color: "#dedccd", fontWeight: 500, fontSize: "1.13rem", textDecoration: "none" }}>
              Platform Guidelines
            </a>
            <a href="#" style={{ color: "#dedccd", fontWeight: 500, fontSize: "1.13rem", textDecoration: "none" }}>
              About Us
            </a>
            <a href="#" style={{ color: "#dedccd", fontWeight: 500, fontSize: "1.13rem", textDecoration: "none" }}>
              FAQ
            </a>
          </nav>
          
          <button className="desktop-join-btn" style={{
            background: "linear-gradient(135deg, #D36407, #E49A5C)",
            color: "#fff",
            borderRadius: 12,
            border: "none",
            padding: "10px 32px",
            fontWeight: 700,
            fontSize: "1.09rem",
            cursor: "pointer",
            boxShadow: "inset 0 4px 6px rgba(0,0,0,0.4), inset 0 -4px 6px rgba(0,0,0,0.2)"
          }}>
            Join Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer"
            }}
          >
            ☰
          </button>
        </header>

        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

        {/* Hero Section */}
        <section
          className="hero"
          style={{
            display: "flex",
            maxWidth: "1250px",
            margin: "0",
            paddingTop: "62px",
            position: "relative",
            paddingLeft: "30px",
          }}
        >
          {/* Left side: text */}
          <div className="hero-text"
            style={{
              width: "53%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "510px",
              paddingLeft: "75px",
            }}
          >
            <div
              className="hero-badge"
              style={{
                background: "#292822e0",
                color: "#e2e2e2",
                padding: "13px 38px",
                borderRadius: "26px",
                fontSize: "1.11rem",
                marginBottom: "38px",
                display: "inline-block",
                boxShadow: "0 0 12px #23180e40",
                fontWeight: "600",
                letterSpacing: ".05em",
              }}
            >
              Join 2M+ creators worldwide
            </div>
            <h1
              className="hero-title"
              style={{
                fontSize: "3.7rem",
                fontWeight: 800,
                margin: 0,
                lineHeight: 1.14,
                letterSpacing: ".02em",
                marginBottom: "15px",
              }}
            >
              Create.
              <br />
              <span style={{ 
                background: "linear-gradient(135deg, #D36407, #E49A5C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>Connect.</span>
              <br />
              Earn.
            </h1>
            <p
              className="hero-desc"
              style={{
                fontSize: "1.19rem",
                margin: "34px 0 32px 0",
                color: "#efece7",
                fontWeight: 400,
                maxWidth: "440px",
                letterSpacing: ".025em",
              }}
            >
              The ultimate platform where creators showcase their talent, build engaged
              communities, and turn their passion into profit.
            </p>
            <div className="hero-buttons" style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
              <button className="hero-primary-btn" style={{
                background: "linear-gradient(135deg, #D36407, #E49A5C)",
                color: "#fff",
                borderRadius: 12,
                border: "none",
                fontWeight: 600,
                fontSize: "1.17rem",
                padding: "13px 36px",
                minWidth: 180,
                boxShadow: "inset 0 4px 6px rgba(0,0,0,0.4), inset 0 -4px 6px rgba(0,0,0,0.2), 0 1px 14px #E49A5C40",
                cursor: "pointer",
              }}>
                <span style={{ marginRight: "8px" }}>👤</span> Join as creator
              </button>
              <button className="hero-secondary-btn" style={{
                background: "transparent",
                color: "#E49A5C",
                borderRadius: 12,
                border: "2px solid #E49A5C",
                fontWeight: 600,
                fontSize: "1.17rem",
                padding: "13px 36px",
                minWidth: 180,
                boxShadow: "0 1px 14px #E49A5C40",
                cursor: "pointer",
              }}>
                <span style={{ marginRight: "8px" }}>🌐</span> Explore Creators
              </button>
            </div>
          </div>

          {/* Right side: floating cards with animation */}
          <div className="hero-images"
            style={{
              position: "relative",
              width: "520px",
              minWidth: "350px",
              height: "540px",
            }}
          >
            <img
              className="floating-card floating-card-1"
              src="/Group 1774.svg"
              alt="Renu Sharma"
              style={{
                position: "absolute",
                top: "30px",
                left: "68%",
                width: "400px",
                zIndex: 10,
                borderRadius: 24,
              }}
            />
            <img
              className="floating-card floating-card-2"
              src="/Group 1776 (1).svg"
              alt="Neha Rai"
              style={{
                position: "absolute",
                top: "200px",
                left: "20%",
                width: "400px",
                zIndex: 10,
                borderRadius: 24,
              }}
            />
            <img
              className="floating-card floating-card-3"
              src="/Group 1775.svg"
              alt="Khushi Patil"
              style={{
                position: "absolute",
                top: "365px",
                left: "69%",
                width: "400px",
                zIndex: 10,
                borderRadius: 24,
              }}
            />
          </div>
        </section>

        {/* Explore Creators Section */}
        <section
          className="explore-creators"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            marginTop: 60,
            padding: "16px 0 54px 0",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.10rem",
              fontWeight: "bold",
              color: "#fff",
              letterSpacing: ".8px",
              marginBottom: 10,
            }}
          >
            Explore <span style={{ 
              background: "linear-gradient(135deg, #D36407, #E49A5C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Creators</span>
          </h2>
          <p
            style={{
              color: "#b6b6b6",
              fontSize: "1rem",
              maxWidth: 480,
              margin: "0 auto 52px",
              fontWeight: 500,
            }}
          >
            Real creators, real stories, real success. See how they're building empires one post at a time.
          </p>
          <div
            className="creators-row"
            style={{
              display: "flex",
              gap: 200,
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <img
              src="/Tia profile.svg"
              alt="Tia mishra"
              style={{ width: 450, height: 450, borderRadius: 24 }}
            />
            <img
              src="/Sanya profile (1).jpg"
              alt="Sanya Kapoor Card"
              style={{
                borderRadius: 32,
                boxShadow: "0 3px 26px #00000089",
                width: 370,
                maxWidth: "95vw",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            className="creators-row"
            style={{
              display: "flex",
              gap: 200,
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginTop: 120,
            }}
          >
            <img 
              src="/vaishali profile.svg" 
              alt="Vaishali profile" 
              style={{ width: 370, borderRadius: 24 }}
            />
            <img
              src="/images/Sia-Profile.svg"
              alt="Sia Profile"
              style={{
                height: 450,
                width: 450,
                borderRadius: 24,
              }}
            />
          </div>
        </section>

        {/* How to Become a Creator Section */}
        <section
          className="timeline-section"
          style={{
            width: "100%",
            margin: "70px auto 36px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "transparent",
            padding: "0px 0 0 0"
          }}
        >
          <h2 
            className="timeline-title"
            style={{
              fontSize: "2.1rem",
              fontWeight: "bold",
              color: "#fff",
              letterSpacing: "1.1px",
              marginBottom: "30px"
            }}
          >
            How to Become a <span style={{ 
              background: "linear-gradient(135deg, #D36407, #E49A5C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Creator</span>
          </h2>
          
          <div
            className="timeline-container"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr 60px 1fr",
              alignItems: "center",
              maxWidth: 950,
              width: "100%",
              minHeight: 500,
              rowGap: 35
            }}
          >
            {/* Left cards */}
            <div style={{ gridColumn: 1, gridRow: 1 }}>
              <TimelineCard step={timelineSteps[0]} />
            </div>
            <div style={{ gridColumn: 1, gridRow: 3 }}>
              <TimelineCard step={timelineSteps[2]} />
            </div>
            
            {/* Right cards */}
            <div style={{ gridColumn: 3, gridRow: 2 }}>
              <TimelineCard step={timelineSteps[1]} right />
            </div>
            <div style={{ gridColumn: 3, gridRow: 4 }}>
              <TimelineCard step={timelineSteps[3]} right />
            </div>
            
            {/* Timeline and PNG icon circles */}
            <div className="timeline-line" style={{ gridColumn: 2, gridRow: "1 / 5", position: "relative", height: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  height: "100%",
                  width: 4,
                  background: "#fff",
                  opacity: 0.33,
                  transform: "translateX(-50%)",
                  borderRadius: 2,
                  zIndex: 1
                }}
              />
              <TimelineIcon icon={timelineSteps[0].icon} top={40} delay={0} />
              <TimelineIcon icon={timelineSteps[1].icon} top={200} delay={1} />
              <TimelineIcon icon={timelineSteps[2].icon} top={370} delay={2} />
              <TimelineIcon icon={timelineSteps[3].icon} top={540} delay={3} />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose" style={{ width: "100%", padding: "40px 0 0 0", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff", marginBottom: "33px" }}>
            Why creators <span style={{ 
              background: "linear-gradient(135deg, #D36407, #E49A5C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>choose us</span>
          </h2>
          <div
            className="why-cards"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "28px",
              marginBottom: "42px",
            }}
          >
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="why-card"
                style={{
                  background: "#191919",
                  borderRadius: "14px",
                  boxShadow: "0 2px 16px #42271033",
                  color: "#fff",
                  minWidth: "230px",
                  maxWidth: "260px",
                  padding: "32px 20px 24px 20px",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  style={{ width: 40, height: 40, marginBottom: 18 }}
                />
                <div style={{ fontWeight: "bold", fontSize: "1.1rem", marginBottom: "8px" }}>
                  {card.title}
                </div>
                <div style={{ color: "#ccc", fontSize: "0.97rem" }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="faq-section"
          style={{
            background: "transparent",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "180px",
            marginBottom: "38px",
            marginTop: "120px",
            padding: "0 16px",
          }}
        >
          <div
            className="faq-icon"
            style={{
              width: "250px",
              minWidth: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "5.5em",
                  fontWeight: "bold",
                  color: "#E49A5C",
                  position: "relative",
                  lineHeight: "0.8",
                  filter: "drop-shadow(0 0 2px #E49A5C)",
                }}
              >
                <img src="/inr.png" alt="INR" style={{ width: "250px", height: "300px" }} />
              </span>
              <div
                style={{
                  width: "28px",
                  height: "100px",
                  marginTop: "-80px",
                  marginLeft: "100px",
                  borderRadius: "20px",
                  boxShadow: "inset 0 4px 6px rgba(0,0,0,0.4), inset 0 -4px 6px rgba(0,0,0,0.2)",
                }}
              ></div>
            </div>
          </div>

          <div
            className="faq-content"
            style={{
              background: "#2b1f10",
              borderRadius: "14px",
              width: "46%",
              maxWidth: "600px",
              boxShadow: "0 4px 20px #E49A5C55",
              padding: "22px 24px",
              border: "1.5px solid #E49A5C80",
              color: "#f8f1e7",
              fontFamily: "'Montserrat', Arial, sans-serif",
            }}
          >
            {faqList.map((faq, idx) => (
              <div key={idx} style={{ marginBottom: openIndex === idx ? 14 : 4 }}>
                <div
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 12px",
                    borderBottom: idx < faqList.length - 1 ? "1px solid #603813" : "none",
                    background: openIndex === idx ? "#2b1f10" : "transparent",
                    borderRadius: openIndex === idx ? "14px 14px 0 0" : "14px",
                    cursor: "pointer",
                    userSelect: "none",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    letterSpacing: "0.02em",
                    color: openIndex === idx ? "#E49A5C" : "#E49A5C",
                    transition: "background 0.25s, color 0.25s",
                    border: "1px solid #603813"
                  }}
                >
                  {faq.question}
                  <div
                    style={{
                      color: "#E49A5C",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      marginLeft: 12,
                      transform: openIndex === idx ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </div>
                </div>

                <div
                  ref={el => {
                    refs.current[idx] = el;
                  }}
                  style={{
                    overflow: "hidden",
                    background: "#4f320f",
                    color: "#e9d8b0",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    borderRadius: "0 0 14px 14px",
                    transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease, opacity 0.3s ease",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    userSelect: "text",
                    boxSizing: "border-box",
                    marginBottom: openIndex === idx ? 8 : 0,
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="cta-section"
          style={{
            width: "100%",
            background: "linear-gradient(90deg, #181618 50%, #23170b 100%)",
            color: "#fff",
            padding: "52px 0 48px 0",
            fontFamily: "'Montserrat', Arial, sans-serif",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontWeight: "bold",
              fontSize: "2.1rem",
              margin: 0,
              marginBottom: "18px",
              letterSpacing: ".01em",
            }}
          >
            Ready to start creating?
          </h2>
          <div
            style={{
              color: "#bfc8d2",
              fontSize: "1.15rem",
              marginBottom: "36px",
              fontWeight: 500,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Join thousands of creators who have transformed their passion into income.
          </div>
          <div className="cta-buttons" style={{ display: "flex", gap: "18px", justifyContent: "center" }}>
            <button
              className="cta-primary"
              style={{
                background: "linear-gradient(135deg, #D36407, #E49A5C)",
                color: "#fff",
                borderRadius: "12px",
                border: "none",
                padding: "16px 36px",
                fontWeight: 700,
                fontSize: "1.07rem",
                cursor: "pointer",
                boxShadow: "inset 0 4px 6px rgba(0,0,0,0.4), inset 0 -4px 6px rgba(0,0,0,0.2), 0 2px 12px #D3640720",
                letterSpacing: ".03em",
                transition: "filter 0.2s",
              }}
              onMouseOver={e => (e.currentTarget.style.filter = "brightness(0.92)")}
              onMouseOut={e => (e.currentTarget.style.filter = "none")}
            >
              Join as Creator
            </button>
            <button
              className="cta-secondary"
              style={{
                background: "transparent",
                color: "#E49A5C",
                borderRadius: "12px",
                border: "2px solid #E49A5C",
                padding: "16px 36px",
                fontWeight: 700,
                fontSize: "1.07rem",
                cursor: "pointer",
                boxShadow: "0 2px 10px #D3640715",
                letterSpacing: ".03em",
                transition: "background 0.2s, color 0.2s",
                marginLeft: 0,
              }}
            >
              Explore Creators
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="footer"
          style={{
            width: "100%",
            background: "#121212",
            color: "#fff",
            padding: "44px 0 18px 0",
            fontFamily: "'Montserrat', Arial, sans-serif",
            borderTop: "1.5px solid #23170b",
          }}
        >
          <div
            className="footer-content"
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              padding: "28px",
              paddingLeft: "120px",
              gap: "200px",
            }}
          >
            {/* Branding & Description */}
            <div className="footer-brand" style={{ minWidth: 250, flex: 1 }}>
              <div
                style={{
                  fontWeight: 900,
                  fontSize: "1.35rem",
                  letterSpacing: "2px",
                  cursor: "default",
                  userSelect: "none",
                  marginBottom: "16px",
                }}
              >
                <span style={{ color: "#ffffff" }}>CULT</span>
                <span
  style={{
    background: "linear-gradient(135deg, #D36407, #E49A5C)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    fontWeight: 900,
    letterSpacing: "2px",
    display: "inline-block"
  }}
>
  FANS
</span>

              </div>
              <div style={{ color: "#e0e0e0", fontSize: "1rem", lineHeight: 1.5 }}>
                The ultimate platform where creators showcase their talent, build engaged communities, and turn their passion into profit.
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links" style={{ minWidth: 160, flex: 1 }}>
              <div style={{ fontWeight: 700, marginBottom: 15, fontSize: "1rem" }}>QUICK LINKS</div>
              <div>
                <a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: 11, fontSize: "1rem", opacity: 0.89, transition: "opacity 0.2s" }}>Platform Guidelines</a>
                <a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: 11, fontSize: "1rem", opacity: 0.89, transition: "opacity 0.2s" }}>About Us</a>
                <a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", fontSize: "1rem", opacity: 0.89, transition: "opacity 0.2s" }}>FAQ</a>
              </div>
            </div>

            {/* Policy Links */}
            <div className="footer-policies" style={{ minWidth: 160, flex: 1 }}>
              <div style={{ fontWeight: 700, marginBottom: 15, fontSize: "1rem" }}>POLICIES</div>
              <div>
                <a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: 11, fontSize: "1rem", opacity: 0.89, transition: "opacity 0.2s" }}>Terms & Conditions</a>
                <a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", fontSize: "1rem", opacity: 0.89, transition: "opacity 0.2s" }}>Privacy Policy</a>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #252525",
              textAlign: "center",
              marginTop: "38px",
              paddingTop: "13px",
              color: "#b1b1b1",
              fontSize: "0.98rem",
              letterSpacing: ".03em",
              opacity: 0.75,
            }}
          >
            © 2025 CULTFANS. All rights reserved.
          </div>
        </footer>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        /* ENHANCED floating animation */
        @keyframes floatUpDown {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-20px); 
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Desktop floating animation - ORIGINAL */
        .floating-card {
          animation: floatUpDown 4s ease-in-out infinite !important;
          will-change: transform;
        }

        .floating-card-1 {
          animation-delay: 0s !important;
        }

        .floating-card-2 {
          animation-delay: 1.3s !important;
        }

        .floating-card-3 {
          animation-delay: 2.6s !important;
        }

        /* Footer hover effects */
        .footer-links a:hover, .footer-policies a:hover {
          opacity: 1 !important;
          color: #E49A5C !important;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          /* Header Mobile */
          .header {
            padding: 16px 20px !important;
            flex-wrap: wrap;
          }

          .logo {
            font-size: 1.8rem !important;
          }

          .desktop-nav {
            display: none !important;
          }

          .desktop-join-btn {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
          }

          /* Hero Mobile */
          .hero {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 20px !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding-left: 0 !important;
          }

          .hero-text {
            width: 100% !important;
            padding: 0 20px !important;
            margin-bottom: 40px;
          }

          .hero-badge {
            font-size: 0.9rem !important;
            padding: 10px 24px !important;
            margin-bottom: 24px !important;
          }

          .hero-title {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
            margin-bottom: 20px !important;
          }

          .hero-desc {
            font-size: 1rem !important;
            max-width: 100% !important;
            margin: 20px 0 !important;
          }

          .hero-buttons {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: center;
          }

          .hero-primary-btn, .hero-secondary-btn {
            width: 100% !important;
            max-width: 280px;
            min-width: auto !important;
            font-size: 1rem !important;
            padding: 14px 24px !important;
          }

          /* Mobile floating cards - NOW SAME AS DESKTOP */
          .hero-images {
            width: 100% !important;
            height: auto !important;
            position: relative !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 40px !important;
            padding: 20px 0;
          }

          /* Mobile floating animation - NOW MATCHES DESKTOP */
          .floating-card {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            width: 90% !important;
            max-width: 320px !important;
            /* SAME AS DESKTOP - only floatUpDown animation */
            animation: floatUpDown 4s ease-in-out infinite !important;
            border-radius: 24px;
            will-change: transform;
          }

          .floating-card-1 {
            animation-delay: 0s !important;
          }

          .floating-card-2 {
            animation-delay: 1.3s !important;
          }

          .floating-card-3 {
            animation-delay: 2.6s !important;
          }

          /* Explore Creators Mobile */
          .explore-creators {
            padding: 40px 20px !important;
            margin-top: 40px !important;
          }

          .explore-creators h2 {
            font-size: 1.8rem !important;
            margin-bottom: 16px !important;
          }

          .explore-creators p {
            font-size: 0.9rem !important;
            margin-bottom: 32px !important;
            padding: 0 10px;
          }

          .creators-row {
            gap: 30px !important;
            margin-top: 40px !important;
          }

          .creators-row img {
            width: 300px !important;
            height: 300px !important;
            max-width: 90vw !important;
          }

          /* Timeline Mobile */
          /* Timeline Mobile - FIXED ORDER */
.timeline-section {
  padding: 20px !important;
  margin: 40px auto 20px auto !important;
}

.timeline-title {
  font-size: 1.8rem !important;
  margin-bottom: 40px !important;
  padding: 0 20px;
  text-align: center;
}

.timeline-container {
  display: flex !important;
  flex-direction: column !important;
  gap: 30px !important;
  max-width: 100% !important;
  align-items: center;
  padding-left:33px;
}

.timeline-line {
  display: none !important;
}

/* FIXED: Proper order for mobile */
.timeline-container > div:nth-child(1) { order: 1; } /* Create Profile */
.timeline-container > div:nth-child(3) { order: 2; } /* Share Content */
.timeline-container > div:nth-child(2) { order: 3; } /* Build Audience */
.timeline-container > div:nth-child(4) { order: 4; } /* Monetize & Earn */

.timeline-card {
  left: 0 !important;
  min-width: 280px !important;
  max-width: 350px !important;
  width: 90% !important;
  margin-bottom: 0px !important;
}

.timeline-card img {
  width: 80px !important;
  height: 80px !important;
}

.timeline-card > div {
  padding: 0 16px !important;
}

.timeline-card > div > div:first-child {
  font-size: 1rem !important;
}

.timeline-card > div > div:last-child {
  font-size: 0.9rem !important;
}

          /* Why Choose Us Mobile */
          .why-choose {
            padding: 40px 20px !important;
          }

          .why-choose h2 {
            font-size: 1.8rem !important;
            margin-bottom: 24px !important;
          }

          .why-cards {
            gap: 16px !important;
          }

          .why-card {
            min-width: 280px !important;
            max-width: 350px !important;
            width: 100% !important;
            padding: 24px 16px !important;
          }

          .why-card img {
            width: 32px !important;
            height: 32px !important;
            margin-bottom: 12px !important;
          }

          .why-card > div:first-of-type {
            font-size: 1rem !important;
          }

          .why-card > div:last-child {
            font-size: 0.9rem !important;
          }

          /* FAQ Mobile */
          .faq-section {
            flex-direction: column !important;
            gap: 40px !important;
            padding: 40px 20px !important;
            margin-top: -10px !important;
            align-items: center !important;
          }

          .faq-icon {
            width: 150px !important;
            min-width: 150px !important;
          }

          .faq-icon img {
            width: 200px !important;
            height: 200px !important;
          }

          .faq-icon > div > div {
            width: 20px !important;
            height: 60px !important;
            margin-top: -45px !important;
            margin-left: 60px !important;
          }

          .faq-content {
            width: 100% !important;
            max-width: 450px;
            padding: 20px !important;
          }

          .faq-content > div > div:first-child {
            padding: 16px 12px !important;
            font-size: 1.1rem !important;
          }

          .faq-content > div > div:last-child {
            padding-left: 16px !important;
            padding-right: 16px !important;
            font-size: 1rem !important;
          }

          /* CTA Mobile */
          .cta-section {
            padding: 40px 20px !important;
          }

          .cta-section h2 {
            font-size: 1.8rem !important;
            margin-bottom: 16px !important;
          }

          .cta-section > div:nth-child(2) {
            font-size: 1rem !important;
            margin-bottom: 32px !important;
            padding: 0 10px;
          }

          .cta-buttons {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: center;
          }

          .cta-primary, .cta-secondary {
            width: 100% !important;
            max-width: 280px;
            font-size: 1rem !important;
            padding: 14px 24px !important;
          }

          /* Footer Mobile - PROPERLY CENTERED */
          .footer-content {
            flex-direction: column !important;
            gap: 40px !important;
            padding: 40px 20px !important;
            padding-left: 20px !important;
            align-items: center !important;
            text-align: center !important;
          }

          .footer-brand {
            text-align: center !important;
            min-width: auto !important;
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }

          .footer-brand > div:first-child {
            font-size: 1.4rem !important;
            margin-bottom: 16px !important;
          }

          .footer-brand > div:last-child {
            font-size: 1rem !important;
            text-align: center !important;
            max-width: 300px;
          }

          .footer-links, .footer-policies {
            text-align: center !important;
            min-width: auto !important;
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }

          .footer-links > div:first-child,
          .footer-policies > div:first-child {
            font-size: 1.1rem !important;
            margin-bottom: 16px !important;
            font-weight: 700 !important;
          }

          .footer-links a, .footer-policies a {
            font-size: 1rem !important;
            margin-bottom: 12px !important;
            display: block !important;
            text-align: center !important;
          }

          .footer-links > div, .footer-policies > div {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
          }
        }

        /* Tablet Styles */
        @media (max-width: 1024px) and (min-width: 769px) {
          .header {
            padding: 20px 40px !important;
          }

          .hero {
            max-width: 100% !important;
            padding-left: 20px !important;
          }

          .hero-text {
            padding-left: 40px !important;
          }

          .hero-title {
            font-size: 3rem !important;
          }

          .timeline-container {
            max-width: 800px !important;
          }

          .timeline-card {
            min-width: 300px !important;
            max-width: 320px !important;
          }

          .faq-section {
            gap: 100px !important;
          }

          .footer-content {
            gap: 80px !important;
            padding-left: 60px !important;
          }
        }
      `}</style>
    </>
  );
}
