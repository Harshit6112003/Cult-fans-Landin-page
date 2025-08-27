'use client';
import React, { useEffect, useState, useRef } from "react";
import { color, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { relative } from "path";
import { image } from "framer-motion/client";

// Main timeline data

const timelineSteps = [
  {
    title: "Create Profile",
    desc: "Set up your creator profile with bio, interests, and showcase your best content to attract followers",
    icon: "/Group 1779.png",
    iconAlt: "Create Profile",
    image: "/image.png",
  },
  {
    title: "Share Content",
    desc: "Upload your creative content, engage with your audience, and build your community organically",
    icon: "/Group 1869.png",
    iconAlt: "Share Content",
    image: "/image.png",
  },
  {
    title: "Build Audience",
    desc: "Grow your following through consistent content creation and meaningful interactions with fans",
    icon: "/Group 1870.png",
    iconAlt: "Build Audience",
    image: "/image.png",
  },
  {
    title: "Monetize & Earn",
    desc: "Start earning through various revenue Content while doing what you love most",
    icon: "/Group 1871.png",
    iconAlt: "Monetize & Earn",
    image: "/image.png",
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

// Timeline card
const TimelineCard: React.FC<{ step: typeof timelineSteps[0]; right?: boolean; topSpacing?: number }> = ({
  step, right, topSpacing
}) => {
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

// Timeline icon
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
      style={{
        position: "absolute",
        left: "15%",
        transform: "translateX(-50%)",
        top,
        width: 44,
        height: 44,
        background: "#f8934e",
        borderRadius: 25,
        boxShadow: "0 2px 14px #f8934e44",
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

export default function LandingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
  useEffect(() => {
  
    refs.current.forEach((el, idx) => {
      if (el) {
        if (openIndex === idx) {
          el.style.maxHeight = el.scrollHeight+24+"px"
          el.style.paddingTop = "12px";
          el.style.paddingBottom = "18px";
        } else {
          el.style.maxHeight = "0px";
          el.style.paddingTop = "0px";
          el.style.paddingBottom = "0px";
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
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "28px 62px 18px 62px",
            borderBottom: "1.5px solid #23201e",
            background: "rgba(14,12,13,0.98)",
          }}
        >
          <span style={{ fontSize: "2.2rem", fontWeight: 700, letterSpacing: "2px" }}>
            <span style={{ color: "#fff" }}>CULT</span>
            <span style={{ color: "#f8934e" }}>FANS</span>
          </span>
          <nav style={{ display: "flex", alignItems: "center", gap: "42px" }}>
            <a href="#" style={navLinkStyle}>
              Platform Guidelines
            </a>
            <a href="#" style={navLinkStyle}>
              About Us
            </a>
            <a href="#" style={navLinkStyle}>
              FAQ
            </a>
          </nav>
          <button style={joinNowBtnStyle}>Join Now</button>
        </header>

        {/* Hero Section */}
        <section
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
          <div
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
              <span style={{ color: "#f8934e" }}>Connect.</span>
              <br />
              Earn.
            </h1>
            <p
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
            <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
              <button style={heroPrimaryBtnStyle}>
                <span style={{ marginRight: "8px" }}>👤</span> Join as creator
              </button>
              <button style={heroSecondaryBtnStyle}>
                <span style={{ marginRight: "8px" }}>🌐</span> Explore Creators
              </button>
            </div>
          </div>

          {/* Right side: floating cards with animation */}
          <div
            style={{
              position: "relative",
              width: "520px",
              minWidth: "350px",
              height: "540px",
            }}
          >
            <img
              src="/Group 1774.svg"
              alt="Renu Sharma"
              style={{
                position: "absolute",
                top: "30px",
                left: "68%",
                width: "350px",
                zIndex: 10,
                animation: "floatUpDown 3.5s ease-in-out infinite",
                animationDelay: "0s",
                borderRadius: 24,
              }}
            />
            <img
              src="/Group 1776 (1).svg"
              alt="Neha Rai"
              style={{
                position: "absolute",
                top: "200px",
                left: "20%",
                width: "350px",
                zIndex: 10,
                animation: "floatUpDown 3.5s ease-in-out infinite",
                animationDelay: "1.2s",
                borderRadius: 24,
              }}
            />
            <img
              src="/Group 1775.svg"
              alt="Khushi Patil"
              style={{
                position: "absolute",
                top: "365px",
                left: "69%",
                width: "350px",
                zIndex: 10,
                animation: "floatUpDown 3.5s ease-in-out infinite",
                animationDelay: "2.4s",
                borderRadius: 24,
              }}
            />
            <style>{`
              @keyframes floatUpDown {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `}</style>
          </div>
        </section>
        <section
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
            Explore <span style={{ color: "#f8934e" }}>Creators</span>
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
              style={{ width: 400, height: 400, borderRadius: 24 }}
            />
            <img
              src="/Sanya profile (1).jpg"
              alt="Sanya Kapoor Card"
              style={{
                borderRadius: 32,
                boxShadow: "0 3px 26px #00000089",
                width: 320,
                maxWidth: "95vw",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: 200,
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "wrap",
              marginTop: 120,
            }}
          >
            <img src="/vaishali profile.svg" alt="Vaishali profile" style={{ width: 320, borderRadius: 24 }} />
            <img
              src="/Sia profile.svg"
              alt="Sia Profile"
              style={{
                height: 400,
                width: 400,
                borderRadius: 24,
              }}
            />
          </div>
        </section>

        {/* How to Become a Creator Section (ANIMATED, photo+text cards, PNG icons in timeline) */}
        <section
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
            style={{
              fontSize: "2.1rem",
              fontWeight: "bold",
              color: "#fff",
              letterSpacing: "1.1px",
              marginBottom: "30px"
            }}
          >
            How to Become a <span style={{ color: "#f8934e" }}>Creator</span>
          </h2>
          <div
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
            <div style={{ gridColumn: 3, gridRow: 2, }}>
              <TimelineCard step={timelineSteps[1]} right />
            </div>
            <div style={{ gridColumn: 3, gridRow: 4 }}>
              <TimelineCard step={timelineSteps[3]} right />
            </div>
            {/* Timeline and PNG icon circles */}
            <div style={{ gridColumn: 2, gridRow: "1 / 5", position: "relative", height: "100%" }}>
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
        <section style={{ width: "100%", padding: "40px 0 0 0", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff", marginBottom: "33px" }}>
            Why creators <span style={{ color: "#f8934e" }}>choose us</span>
          </h2>
          <div
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
          style={{
            background: "transparent",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "180px",
            marginBottom: "38px",
            marginTop: "120px",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              width: "200px",
              minWidth: "168px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "4.4em",
                  fontWeight: "bold",
                  color: "#fdd700",
                  position: "relative",
                  lineHeight: "0.8",
                  filter: "drop-shadow(0 0 2px #f8934e)",
                }}
              >
                <img src={"/inr.png"} />
              </span>
              <div
                style={{
                  width: "22px",
                  height: "78px",
                  marginTop: "-63px",
                  marginLeft: "80px",
                  borderRadius: "15px",
                  background: "linear-gradient(120deg, #f8934eaa 40%, #fbbf5933 100%)",
                  boxShadow: "0 0 8px #f8934e77 inset",
                }}
              ></div>
            </div>
          </div>

          <div
            style={{
              background: "#2b1f10",
              borderRadius: "14px",
              
              width: "46%",
              boxShadow: "0 4px 20px #f8934e55",
              padding: "22px 24px",
              border: "1.5px solid #f8934e80",
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
                    padding: "16px 10px",
                    borderBottom: idx < faqList.length - 1 ? "1px solid #603813" : "none",
                    background: openIndex === idx ? "#2b1f10" : "transparent",
                    borderRadius: openIndex === idx ? "14px 14px 0 0" : "14px",
                    cursor: "pointer",
                    userSelect: "none",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    letterSpacing: "0.02em",
                    color: openIndex === idx ?"linear-gradient(120deg, #f8934eaa 40%, #fbbf5933 100%)" : "#ff9148",
                    transition: "background 0.25s, color 0.25s",
                    border:"1px solid #603813"
                   
                  }}
                >
                  {faq.question}
                  <div
                    style={{
                      color: "#f8934e",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      marginLeft: 12,
                      transform: openIndex === idx ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      lineHeight: 1,
                    }}
                    aria-label={openIndex === idx ? "Collapse answer" : "Expand answer"}
                  >
                    +
                  </div>
                </div>

                <div
                  ref={el => {
                    refs.current[idx] = el;
                  }}

                  style={{
                maxHeight: openIndex === idx ? undefined : "px",
                overflow: "hidden",
                background: "#4f320f",
                color: "#e9d8b0",
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.52,
                borderRadius: "0 0 14px 14px",
                transition: "max-height 0.35s cubic-bezier(.37,1,.65,1), padding 0.25s",
                padding:"14px",
                paddingTop:"12px",
                userSelect: "text",
                boxSizing: "border-box",
                marginBottom: openIndex === idx ? 5 : 0,
                // Prevent content cut-off by letting maxHeight be the real content height
              }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Ready to Start Section */}
{/* CTA Footer Top Section */}
<section
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
  <div style={{ display: "flex", gap: "18px", justifyContent: "center" }}>
    <button
      style={{
        background:"#e26918",
        color: "#16110a",
        borderRadius: "32px",
        border: "none",
        padding: "16px 36px",
        fontWeight: 700,
        fontSize: "1.07rem",
        cursor: "pointer",
        boxShadow: "0 2px 12px #f9ae0f20",
        letterSpacing: ".03em",
        transition: "filter 0.2s",
      }}
      onMouseOver={e => (e.currentTarget.style.filter = "brightness(0.92)")}
      onMouseOut={e => (e.currentTarget.style.filter = "none")}
    >
      Join as Creator
    </button>
    <button
      style={{
        background: "transparent",
        color: "#e26918",
        borderRadius: "32px",
        border: "2px solid #e26918",
        padding: "16px 36px",
        fontWeight: 700,
        fontSize: "1.07rem",
        cursor: "pointer",
        boxShadow: "0 2px 10px #f9ae0f15",
        letterSpacing: ".03em",
        transition: "background 0.2s, color 0.2s",
        marginLeft: 0,
      }}
     
    >
      Explore Creators
    </button>
  </div>
</section>

{/* Footer Bottom Section */}
<footer
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
    style={{
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      padding: " 28px",
      paddingLeft:"120px",
      gap: "200px",
    }}
  >
    {/* Branding & Description */}
    <div style={{ minWidth: 250, flex: 1 }}>
    <div
  style={{
    fontWeight: 900,
    fontSize: "1.35rem",
    letterSpacing: "2px",
    cursor: "default",
    userSelect: "none",
  }}
>
  {/* CULT - solid white */}
  <span style={{ color: "#ffffff" }}>CULT</span>
  {/* FANS - gradient orange text */}
  <span
    style={{
      background: "linear-gradient(90deg, #f8934e 30%, #fdd700 99%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: 900,
      letterSpacing: "2px",
    }}
  >
    FANS
  </span>
</div>
      <div style={{ color: "#e0e0e0", fontSize: "1rem" }}>
        The ultimate platform where creators showcase their talent, build engaged communities, and turn their passion into profit.
      </div>
    </div>
    {/* Quick Links */}
    <div style={{ minWidth: 160, flex: 1 }}>
      <div style={{ fontWeight: 700, marginBottom: 15 }}>QUICK LINKS</div>
      <div>
        <a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: 11, fontSize: "1rem", opacity: 0.89 }}>Platform Guidelines</a>
        <a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: 11, fontSize: "1rem", opacity: 0.89 }}>About Us</a>
        <a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", fontSize: "1rem", opacity: 0.89 }}>FAQ</a>
      </div>
    </div>
    {/* Policy Links */}
    <div style={{ minWidth: 160, flex: 1 }}>
      <div style={{ fontWeight: 700, marginBottom: 15 }}>POLICIES</div>
      <div>
        <a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: 11, fontSize: "1rem", opacity: 0.89 }}>Terms & Conditions</a>
        <a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", fontSize: "1rem", opacity: 0.89 }}>Privacy Policy</a>
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
    </>
  );
}

// Your global styles (do not remove or duplicate)
const whyCards = [
  {
    icon: "/in1.png", // proper leading slash for image
    title: "Direct Fan Connection",
    desc: "Build meaningful relationships with your audience without intermediaries",
  },
  {
    icon: "/Group 1873.png", // added missing leading slash
    title: "Creative Freedom",
    desc: "Express yourself authentically without platform restrictions or algorithms",
  },
  {
    icon: "/Group 1874.png", // added missing leading slash
    title: "Growth Tools",
    desc: "Access powerful analytics and promotion tools to accelerate your growth",
  },
  {
    icon: "/Group 1875.png", // added missing leading slash
    title: "Recognition System",
    desc: "Get featured and recognized for outstanding contributions",
  },
];
const navLinkStyle = {
  color: "#dedccd",
  fontWeight: 500,
  fontSize: "1.13rem",
  textDecoration: "none",
  letterSpacing: ".025em",
  padding: "4px 9px",
  transition: "color 0.2s",
};
const joinNowBtnStyle = {
  background: "#f8934e",
  color: "#fff",
  borderRadius: 24,
  border: "none",
  padding: "10px 32px",
  fontWeight: 700,
  fontSize: "1.09rem",
  letterSpacing: ".5px",
  boxShadow: "0 0 14px #f8934e38",
  cursor: "pointer",
};
const heroPrimaryBtnStyle = {
  background: "#f8934e",
  color: "#fff",
  borderRadius: 28,
  border: "none",
  fontWeight: 600,
  fontSize: "1.17rem",
  padding: "13px 36px",
  minWidth: 180,
  boxShadow: "0 1px 14px #f8934e40",
  cursor: "pointer",
};
const heroSecondaryBtnStyle = {
  background: "transparent",
  color: "#f8934e",
  borderRadius: 28,
  border: "2px solid #f8934e",
  fontWeight: 600,
  fontSize: "1.17rem",
  padding: "13px 36px",
  minWidth: 180,
  boxShadow: "0 1px 14px #f8934e40",
  cursor: "pointer",
};
