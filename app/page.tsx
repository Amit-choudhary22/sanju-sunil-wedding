"use client";

import { useEffect, useState } from "react";

const events = [
  { icon: "🌼", name: "पीला चावल", date: "11 नवम्बर 2026", day: "बुधवार", time: "प्रातः 09:15 बजे" },
  { icon: "💛", name: "बान (हल्द हाथ)", date: "18 नवम्बर 2026", day: "बुधवार", time: "सायं 04:15 बजे" },
  { icon: "🎶", name: "महिला संगीत", date: "20 नवम्बर 2026", day: "शुक्रवार", time: "सायंकाल" },
  { icon: "🥁", name: "चाक भात", date: "21 नवम्बर 2026", day: "शनिवार", time: "दोपहर 01:15 बजे" },
  { icon: "🍽️", name: "प्रीतिभोज", date: "21 नवम्बर 2026", day: "शनिवार", time: "सायं 03:15 बजे से" },
  { icon: "🐎", name: "बारात स्वागत", date: "21 नवम्बर 2026", day: "शनिवार", time: "सायं 03:15 बजे" },
  { icon: "💍", name: "पाणिग्रहण संस्कार", date: "21 नवम्बर 2026", day: "शनिवार", time: "रात्रि शुभलग्नानुसार" },
];

const families = [
  {
    title: "बुआजी एवं फूफाजी",
    names: [
      "गंगा देवी – रामचन्द जी फोगावट",
      "स्व. अणची देवी – स्व. भगवान जी काजला",
      "भवणी देवी – कजोड़ जी बाजिया",
      "भगवती देवी – चोथमल जी बाजिया (Ex. RSRTC)",
    ],
  },
  {
    title: "ननिहाल पक्ष",
    names: [
      "श्री घीसाराम जी जाखड़ (Ex. Army) – ग्यारसी देवी",
      "स्व. श्री सुभाष जी (Ex. Army) – सविता देवी",
      "धर्मपाल जी (R.P.) – सुमित्रा देवी",
      "मामाजी – मामीजी",
    ],
    address: "निवासी – उदयपुरिया मोड़, चौमूं",
  },
  {
    title: "जवाई पक्ष",
    names: ["चम्पा देवी – रघुपाल जी धायल"],
    address: "निवासी – कोटड़ी धायलान",
  },
  {
    title: "दादेरा पक्ष",
    names: [
      "श्री कजोड़मल जी",
      "सागरमल जी",
      "लालचन्द जी",
      "देवेंद्र जी (R.P.)",
    ],
    address: "निवासी – कुड़ियों की ढाणी, राणिपुरा",
  },
];

const welcomeParty = [
  "ओमप्रकाश", "देवानन्द", "राजेश (R.P.)",
  "सुरेन्द्र (फार्मासिस्ट)", "मुकेश", "सुनील",
  "मनोज", "अनिल", "पंकज",
];

const specialGuests = [
  "मीनू चांदीवाल (IDFC, श्रीमाधोपुर)",
  "नितेश कुमार",
  "तिरुपति धायल",
];

const wellWishers = [
  "कैप्टन महादेवसिंह",
  "शिवचन्द",
  "हव. नन्दाराम",
  "बनवारीलाल (RSRTC)",
  "रघुमल",
  "कालूराम",
  "सूबेदार धुड़ाराम",
  "फूलसिंह (BSF SI)",
  "तेजपाल",
  "भोमाराम",
  "झाबरमल",
  "भजनलाल",
  "मनलाल (R.P.) चांदीवाल",
];

const invitees = [
  "बिड़ेड़ियर करतारसिंह",
  "करणसिंह",
  "कैलाशचन्द",
  "सुरेन्द्र (R.P.)",
  "सूबेदार मुकेशकुमार",
  "मुकेशकुमार (R.P.)",
  "ओमेनद (R.P.)",
  "जितेन्द्र",
  "महिपाल (SSB)",
  "मदनलाल",
  "कमल",
  "श्रवण (Army)",
  "विकास (Af.)",
  "लोकेश",
  "राहुल",
  "रिंकूश",
  "धीरज",
];

const children = [
  "अनु", "अमित", "मनीष", "निवेदिता", "प्राजल",
  "उपांशु", "मितांश", "प्रत्यय", "मनवित्य",
];

function OrnateHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="section-heading reveal">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      <div className="heading-decoration">
        <span />
        <i>✦</i>
        <span />
      </div>
    </div>
  );
}

function Names({ items }: { items: string[] }) {
  return (
    <div className="names-grid">
      {items.map((name, index) => (
        <div className="name-chip" key={`${name}-${index}`}>
          <span className="chip-flower">✧</span>
          {name}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date("2026-11-21T00:00:00+05:30").getTime();

    const updateCountdown = () => {
      const distance = target - Date.now();

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / 86400000);
      const hours = Math.floor((distance % 86400000) / 3600000);
      const minutes = Math.floor((distance % 3600000) / 60000);
      const seconds = Math.floor((distance % 60000) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="wedding-page">
      <div className="side-ornament left-ornament" aria-hidden="true">
        <span>✦</span><span>❋</span><span>✧</span><span>❋</span><span>✦</span>
      </div>

      <div className="side-ornament right-ornament" aria-hidden="true">
        <span>✦</span><span>❋</span><span>✧</span><span>❋</span><span>✦</span>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="ganesh reveal">॥ श्री गणेशाय नमः ॥</div>
          <div className="hero-top-line reveal">
            <span>AN INVITATION TO CELEBRATE LOVE</span>
          </div>
          <div className="hero-ornament reveal">❖ ❖ ❖</div>
          <p className="hero-subtitle reveal">स्नेह निमंत्रण • शुभ विवाह</p>

          <h1 className="hero-names">
            <span>संजू</span>
            <i>&</i>
            <span>सुनील</span>
          </h1>

          <div className="hero-divider reveal">
            <span /><i>✧</i><span />
          </div>

          <p className="hero-message reveal">
            दो परिवारों के स्नेह और आशीर्वाद से
            <br />
            एक नए जीवन का शुभारंभ
          </p>

          <div className="hero-date reveal">
            <span>21</span>
            <div>
              <strong>नवम्बर</strong>
              <small>2026 • शनिवार</small>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <i>↓</i>
          </div>
        </div>
      </section>

      {/* INVITATION */}
      <section className="section invitation-section" id="invitation">
        <div className="container">
          <OrnateHeading
            eyebrow="WITH LOVE & BLESSINGS"
            title="शुभ विवाह निमंत्रण"
          />

          <div className="invitation-card reveal">
            <div className="card-corner top-left">❧</div>
            <div className="card-corner top-right">❧</div>

            <p className="invitation-sanskrit">॥ वक्रतुण्ड महाकाय ॥</p>

            <p className="invitation-text">
              परमपिता परमेश्वर की असीम कृपा एवं आप सभी के स्नेहाशीष से
              हमारे परिवार में शुभ विवाह का पावन अवसर आया है।
              इस मंगलमय अवसर पर आपकी गरिमामयी उपस्थिति एवं शुभकामनाएँ
              सादर प्रार्थनीय हैं।
            </p>

            {/* ONLY NAMES + CENTRAL WEDDING KNOT */}
            <div className="wedding-union">
              <div className="union-heading">THE WEDDING UNION</div>

              <div className="union-names">
                <div className="union-name bride-name">
                  <h3>संजू</h3>
                </div>

                <div className="union-knot">
                  <div className="knot-glow" />

                  <svg
                    className="knot-svg"
                    viewBox="0 0 240 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Golden wedding knot"
                  >
                    <defs>
                      <linearGradient
                        id="goldThread"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#fff0b4" />
                        <stop offset="50%" stopColor="#c99a43" />
                        <stop offset="100%" stopColor="#f8dfa0" />
                      </linearGradient>
                    </defs>

                    <path
                      className="thread thread-one"
                      d="M8 75 C45 5 85 5 120 75 C155 145 195 145 232 75"
                      stroke="url(#goldThread)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <path
                      className="thread thread-two"
                      d="M8 75 C45 145 85 145 120 75 C155 5 195 5 232 75"
                      stroke="url(#goldThread)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <path
                      className="thread thread-three"
                      d="M10 75 C65 75 70 25 120 75 C170 125 175 75 230 75"
                      stroke="url(#goldThread)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <circle cx="120" cy="75" r="9" fill="#e5c078" />
                    <circle cx="120" cy="75" r="4" fill="#fff5cf" />
                  </svg>

                  <div className="knot-star">✦</div>
                  <span className="knot-caption">शुभ मिलन</span>
                </div>

                <div className="union-name groom-name">
                  <h3>सुनील</h3>
                </div>
              </div>

              <p className="union-blessing">
                दो नाम, एक बंधन, जीवनभर का साथ
              </p>
            </div>

            <p className="invitation-bottom">
              इस शुभ अवसर पर पधारकर वर-वधू को अपना स्नेह एवं आशीर्वाद प्रदान करें।
            </p>

            <div className="card-corner bottom-left">❧</div>
            <div className="card-corner bottom-right">❧</div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="countdown-section">
        <div className="container">
          <div className="countdown-content reveal">
            <span className="eyebrow">THE BIG DAY IS APPROACHING</span>
            <h2>शुभ घड़ी का इंतज़ार</h2>

            <div className="countdown-grid">
              {[
                { label: "दिन", value: timeLeft.days },
                { label: "घंटे", value: timeLeft.hours },
                { label: "मिनट", value: timeLeft.minutes },
                { label: "सेकंड", value: timeLeft.seconds },
              ].map((item) => (
                <div className="countdown-box" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <p>21 नवम्बर 2026 • शनिवार</p>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section events-section" id="events">
        <div className="container">
          <OrnateHeading
            eyebrow="CELEBRATIONS & CEREMONIES"
            title="शुभ मांगलिक कार्यक्रम"
          />

          <div className="events-grid">
            {events.map((event, index) => (
              <div className="event-card reveal" key={event.name}>
                <div className="event-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="event-icon">{event.icon}</div>
                <h3>{event.name}</h3>
                <div className="event-line" />
                <strong>{event.date}</strong>
                <span>{event.day}</span>
                <p>{event.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section className="section family-section" id="family">
        <div className="container">
          <OrnateHeading
            eyebrow="FAMILY & RELATIVES"
            title="परिवार आमंत्रण"
          />

          <div className="family-intro reveal">
            परिवार के सभी स्नेहीजनों एवं आत्मीय संबंधियों का
            हार्दिक स्वागत एवं अभिनंदन।
          </div>

          <div className="family-grid">
            {families.map((family, index) => (
              <div className="family-card reveal" key={family.title}>
                <div className="family-card-top">
                  <span>✧</span>
                  <small>
                    FAMILY INVITATION {String(index + 1).padStart(2, "0")}
                  </small>
                </div>
                <h3>{family.title}</h3>
                <div className="family-divider">❖</div>
                <ul>
                  {family.names.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
                {family.address && (
                  <p className="family-address">{family.address}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME PARTY */}
      <section className="section welcome-section" id="welcome">
        <div className="container">
          <OrnateHeading
            eyebrow="YOUR PRESENCE IS OUR HONOUR"
            title="स्वागतकर्ता"
          />
          <div className="names-panel reveal">
            <p className="panel-intro">आपके आगमन की प्रतीक्षा में</p>
            <Names items={welcomeParty} />
          </div>
        </div>
      </section>

      {/* SPECIAL GUESTS */}
      <section className="section guests-section">
        <div className="container">
          <OrnateHeading
            eyebrow="SPECIAL INVITATION"
            title="विशिष्ट अतिथि"
          />
          <div className="names-panel reveal">
            <Names items={specialGuests} />
          </div>
        </div>
      </section>

      {/* WELL WISHERS */}
      <section className="section wellwishers-section">
        <div className="container">
          <OrnateHeading
            eyebrow="WITH RESPECT & GRATITUDE"
            title="शुभचिंतक"
          />
          <div className="names-panel reveal">
            <Names items={wellWishers} />
          </div>
        </div>
      </section>

      {/* INVITEES */}
      <section className="section invitees-section">
        <div className="container">
          <OrnateHeading
            eyebrow="CORDIAL INVITATION"
            title="आमंत्रित स्नेहीजन"
          />
          <div className="names-panel reveal">
            <Names items={invitees} />
          </div>
        </div>
      </section>

      {/* CHILDREN */}
      <section className="section children-section">
        <div className="container">
          <OrnateHeading
            eyebrow="LITTLE HEARTS"
            title="बाल आमंत्रण"
          />
          <div className="names-panel children-panel reveal">
            <p className="panel-intro">
              नन्हे-मुन्नों की ओर से भी सादर निमंत्रण
            </p>
            <Names items={children} />
          </div>
        </div>
      </section>

      {/* FINAL INVITATION */}
      <section className="final-section">
        <div className="final-overlay" />
        <div className="container final-content reveal">
          <div className="final-symbol">❖</div>
          <p className="final-small">
            YOUR PRESENCE WILL MAKE OUR DAY SPECIAL
          </p>
          <h2>पधारो सा!</h2>
          <p className="final-message">
            आपकी उपस्थिति हमारे लिए सौभाग्य एवं हर्ष का विषय होगी।
            <br />
            सपरिवार पधारकर वर-वधू को आशीर्वाद प्रदान करें।
          </p>

          <div className="final-address">
            <span>आयोजक एवं निवेदक</span>
            <h3>चौ. घासीराम चांदीवाल</h3>
            <h3>सूबेदार मेजर हरिशचन्द्र चांदीवाल</h3>
            <p>निवासी – चक किशनपुरा</p>
            <p>तहसील – खण्डेला, जिला – सीकर (राजस्थान)</p>
          </div>

          <div className="final-divider">✧ ❖ ✧</div>
          <p className="final-thanks">सादर आमंत्रण • सपरिवार</p>
        </div>
      </section>

      {/* WEDDING CARD ATTACHMENT */}
      <section className="section card-attachment-section">
        <div className="container">
          <OrnateHeading
            eyebrow="THE ORIGINAL INVITATION"
            title="विवाह पत्रिका"
          />
          <div className="attachment-card reveal">
            <div className="attachment-icon">✉</div>
            <h3>मूल विवाह पत्रिका</h3>
            <p>
              यहाँ विवाह कार्ड की स्कैन की हुई फोटो या PDF जोड़ी जा सकती है।
            </p>
            <span className="attachment-note">
              ORIGINAL WEDDING INVITATION
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-ornament">❖ ✧ ❖</div>
        <p>संजू & सुनील • शुभ विवाह • 2026</p>
        <small>Made with love & blessings</small>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@400;500;600;700&display=swap");

        :root {
          --wine: #501b2b;
          --wine-dark: #32101d;
          --wine-light: #713348;
          --gold: #c69b53;
          --gold-light: #f1dba8;
          --ivory: #fbf6ec;
          --cream: #f4ead8;
          --text: #4b2930;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--ivory);
          color: var(--text);
          font-family: "Noto Serif Devanagari", serif;
        }

        .wedding-page {
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(circle at 10% 20%, rgba(198, 155, 83, 0.07), transparent 28%),
            radial-gradient(circle at 90% 70%, rgba(80, 27, 43, 0.05), transparent 30%),
            var(--ivory);
        }

        .side-ornament {
          position: fixed;
          top: 0;
          bottom: 0;
          width: 34px;
          z-index: 20;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          color: var(--gold);
          opacity: 0.7;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(198, 155, 83, 0.09),
            transparent
          );
        }

        .side-ornament::before,
        .side-ornament::after {
          content: "";
          position: absolute;
          top: 5%;
          bottom: 5%;
          width: 1px;
          background: linear-gradient(transparent, var(--gold), transparent);
        }

        .side-ornament::before { left: 8px; }
        .side-ornament::after { right: 8px; }
        .left-ornament { left: 0; }
        .right-ornament { right: 0; }

        .side-ornament span {
          font-size: 17px;
          animation: ornamentFloat 4s ease-in-out infinite alternate;
        }

        .hero {
          min-height: 100vh;
          min-height: 100svh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--gold-light);
          padding: 90px 30px;
          background:
            radial-gradient(ellipse at center, rgba(129, 56, 73, 0.55), transparent 55%),
            linear-gradient(135deg, #2c0d19, #5a1e32 50%, #2c0d19);
        }

        .hero::before,
        .hero::after {
          content: "";
          position: absolute;
          inset: 22px;
          border: 1px solid rgba(218, 180, 108, 0.55);
          pointer-events: none;
        }

        .hero::after {
          inset: 30px;
          border-color: rgba(218, 180, 108, 0.2);
        }

        .hero-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(218, 180, 108, 0.08);
          filter: blur(80px);
          animation: glowPulse 5s ease-in-out infinite alternate;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 850px;
        }

        .ganesh {
          font-size: 20px;
          color: #f5d99f;
          margin-bottom: 42px;
          letter-spacing: 3px;
          animation: fadeUp 1s both;
        }

        .hero-top-line {
          font-family: "Cormorant Garamond", serif;
          letter-spacing: 5px;
          font-size: 12px;
          color: #d8b77d;
        }

        .hero-ornament {
          margin: 24px 0;
          color: var(--gold);
          letter-spacing: 14px;
        }

        .hero-subtitle {
          font-size: 17px;
          letter-spacing: 3px;
          color: #f1dba8;
        }

        .hero-names {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
          margin: 25px 0;
          font-size: clamp(48px, 9vw, 90px);
          font-weight: 500;
          line-height: 1.5;
          color: #fff0cf;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
          animation: fadeUp 1.3s both;
        }

        .hero-names i {
          font-family: "Cormorant Garamond", serif;
          color: var(--gold);
          font-size: 0.65em;
          font-weight: 400;
        }

        .hero-divider,
        .heading-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          color: var(--gold);
        }

        .hero-divider span,
        .heading-decoration span {
          width: 75px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold));
        }

        .hero-divider span:last-child,
        .heading-decoration span:last-child {
          transform: rotate(180deg);
        }

        .hero-divider i {
          font-style: normal;
          font-size: 22px;
        }

        .hero-message {
          line-height: 2.1;
          color: #f1dfc0;
          font-size: 16px;
          margin-top: 25px;
        }

        .hero-date {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          border-top: 1px solid rgba(218, 180, 108, 0.55);
          border-bottom: 1px solid rgba(218, 180, 108, 0.55);
          padding: 14px 30px;
          margin-top: 28px;
          text-align: left;
        }

        .hero-date > span {
          font-family: "Cormorant Garamond", serif;
          font-size: 55px;
          color: #f5d99f;
          line-height: 1;
        }

        .hero-date div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .hero-date strong { font-size: 19px; }

        .hero-date small {
          font-family: "Cormorant Garamond", serif;
          letter-spacing: 2px;
        }

        .scroll-indicator {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -95px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #d8b77d;
          font: 10px "Cormorant Garamond", serif;
          letter-spacing: 3px;
        }

        .scroll-indicator i {
          font-size: 20px;
          font-style: normal;
          animation: arrowDown 1.5s infinite;
        }

        .section {
          padding: 105px 25px;
          position: relative;
        }

        .container {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 55px;
        }

        .eyebrow {
          display: block;
          color: #a77a3c;
          font: 12px "Cormorant Garamond", serif;
          letter-spacing: 4px;
          margin-bottom: 14px;
        }

        .section-heading h2 {
          font-size: clamp(27px, 4vw, 40px);
          font-weight: 600;
          color: var(--wine);
          margin: 0 0 18px;
        }

        .heading-decoration i {
          font-style: normal;
          font-size: 17px;
        }

        .invitation-section {
          background:
            radial-gradient(circle at center, rgba(198, 155, 83, 0.08), transparent 55%),
            var(--ivory);
        }

        .invitation-card {
          max-width: 950px;
          margin: 0 auto;
          padding: 65px 55px;
          position: relative;
          text-align: center;
          background: rgba(255, 252, 245, 0.8);
          border: 1px solid rgba(198, 155, 83, 0.6);
          outline: 1px solid rgba(198, 155, 83, 0.2);
          outline-offset: 8px;
          box-shadow: 0 20px 65px rgba(75, 41, 48, 0.07);
        }

        .card-corner {
          position: absolute;
          color: var(--gold);
          font-size: 42px;
        }

        .top-left { top: 8px; left: 15px; }
        .top-right { top: 8px; right: 15px; transform: scaleX(-1); }
        .bottom-left { bottom: 8px; left: 15px; transform: scaleY(-1); }
        .bottom-right { bottom: 8px; right: 15px; transform: scale(-1); }

        .invitation-sanskrit {
          color: #a77a3c;
          font-size: 19px;
          margin-bottom: 28px;
        }

        .invitation-text {
          max-width: 730px;
          margin: 0 auto;
          font-size: 15px;
          line-height: 2.3;
          color: #65434a;
        }

        .invitation-bottom {
          font-size: 14px;
          line-height: 2;
          color: #79505a;
          margin-top: 35px;
        }

        /* WEDDING UNION */

        .wedding-union {
          position: relative;
          margin: 55px auto 25px;
          max-width: 850px;
          padding: 35px 20px 25px;
          border-top: 1px solid rgba(198, 155, 83, 0.35);
          border-bottom: 1px solid rgba(198, 155, 83, 0.35);
          overflow: hidden;
        }

        .union-heading {
          color: #a77a3c;
          font: 11px "Cormorant Garamond", serif;
          letter-spacing: 5px;
          margin-bottom: 28px;
        }

        .union-names {
          display: grid;
          grid-template-columns: 1fr 230px 1fr;
          align-items: center;
          gap: 12px;
        }

        .union-name {
          opacity: 0;
          text-align: center;
          animation-duration: 1.5s;
          animation-fill-mode: forwards;
        }

        .bride-name {
          animation-name: brideEnter;
          animation-delay: 0.2s;
        }

        .groom-name {
          animation-name: groomEnter;
          animation-delay: 0.5s;
        }

        .union-name h3 {
          color: var(--wine);
          font-size: clamp(28px, 4vw, 40px);
          margin: 13px 0;
          font-weight: 600;
        }

        .union-knot {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          min-width: 0;
        }

        .knot-glow {
          position: absolute;
          width: 140px;
          height: 100px;
          background: rgba(198, 155, 83, 0.2);
          filter: blur(30px);
          border-radius: 50%;
          animation: glowPulse 3s infinite alternate;
        }

        .knot-svg {
          position: relative;
          width: 100%;
          overflow: visible;
        }

        .thread {
          stroke-dasharray: 420;
          stroke-dashoffset: 420;
          animation: threadDraw 3s ease forwards;
        }

        .thread-two { animation-delay: 0.6s; }
        .thread-three { animation-delay: 1.1s; }

        .knot-star {
          position: absolute;
          top: 43%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #b98b46;
          font-size: 23px;
          animation: starPulse 2s ease-in-out infinite alternate;
        }

        .knot-caption {
          position: relative;
          color: #a77a3c;
          font-size: 12px;
          letter-spacing: 3px;
          margin-top: -3px;
        }

        .union-blessing {
          color: #a77a3c;
          font-size: 13px;
          margin-top: 28px;
          letter-spacing: 1px;
        }

        /* COUNTDOWN */

        .countdown-section {
          padding: 85px 25px;
          background:
            radial-gradient(ellipse at center, rgba(255, 255, 255, 0.08), transparent 60%),
            var(--wine-dark);
          color: #f4dfb5;
          text-align: center;
        }

        .countdown-content h2 {
          font-size: 34px;
          margin: 10px 0 35px;
          font-weight: 500;
        }

        .countdown-grid {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .countdown-box {
          width: 110px;
          padding: 20px 10px;
          border: 1px solid rgba(218, 180, 108, 0.5);
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .countdown-box strong {
          font: 42px "Cormorant Garamond", serif;
          color: #f5d99f;
        }

        .countdown-box span { font-size: 12px; }

        .countdown-content > p {
          color: #d6b77d;
          font-size: 13px;
          margin-top: 28px;
        }

        /* EVENTS */

        .events-section { background: #f8f0e2; }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .event-card {
          position: relative;
          padding: 32px 20px;
          text-align: center;
          background: rgba(255, 252, 245, 0.9);
          border: 1px solid rgba(198, 155, 83, 0.38);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          overflow: hidden;
        }

        .event-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        .event-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 35px rgba(80, 27, 43, 0.1);
        }

        .event-number {
          position: absolute;
          top: 13px;
          right: 16px;
          color: rgba(198, 155, 83, 0.5);
          font: 15px "Cormorant Garamond", serif;
        }

        .event-icon { font-size: 30px; margin-bottom: 12px; }

        .event-card h3 {
          font-size: 19px;
          color: var(--wine);
          margin: 0;
        }

        .event-line {
          width: 35px;
          height: 1px;
          background: var(--gold);
          margin: 16px auto;
        }

        .event-card strong {
          display: block;
          color: #805632;
          font-size: 14px;
        }

        .event-card > span {
          display: block;
          color: #967b68;
          font-size: 12px;
          margin-top: 5px;
        }

        .event-card p {
          color: var(--wine);
          font-size: 13px;
          margin: 12px 0 0;
        }

        /* FAMILY */

        .family-section { background: var(--ivory); }

        .family-intro {
          max-width: 650px;
          margin: -25px auto 40px;
          text-align: center;
          color: #805d53;
          line-height: 2;
          font-size: 14px;
        }

        .family-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .family-card {
          background: #fffaf0;
          padding: 30px;
          border: 1px solid rgba(198, 155, 83, 0.4);
          box-shadow: 0 12px 35px rgba(80, 27, 43, 0.045);
          transition: transform 0.3s ease;
        }

        .family-card:hover { transform: translateY(-5px); }

        .family-card-top {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #a77a3c;
          font: 10px "Cormorant Garamond", serif;
          letter-spacing: 2px;
        }

        .family-card-top span { font-size: 21px; }

        .family-card h3 {
          color: var(--wine);
          font-size: 23px;
          margin: 15px 0 7px;
        }

        .family-divider {
          color: var(--gold);
          margin-bottom: 16px;
        }

        .family-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .family-card li {
          position: relative;
          padding: 8px 18px 8px 0;
          font-size: 13px;
          line-height: 1.9;
          color: #65434a;
          border-bottom: 1px solid rgba(198, 155, 83, 0.14);
        }

        .family-card li::before {
          content: "✧";
          color: var(--gold);
          position: absolute;
          right: 0;
        }

        .family-address {
          color: #a77a3c;
          font-size: 12px;
          margin: 18px 0 0;
        }

        /* NAME SECTIONS */

        .welcome-section,
        .wellwishers-section,
        .children-section {
          background: #f6ecdc;
        }

        .guests-section,
        .invitees-section {
          background: var(--ivory);
        }

        .names-panel {
          max-width: 950px;
          margin: 0 auto;
          padding: 35px;
          background: rgba(255, 252, 245, 0.8);
          border: 1px solid rgba(198, 155, 83, 0.4);
          box-shadow: 0 12px 35px rgba(80, 27, 43, 0.04);
        }

        .panel-intro {
          text-align: center;
          color: #a77a3c;
          font-size: 14px;
          margin: 0 0 25px;
        }

        .names-grid {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 13px;
        }

        .name-chip {
          padding: 11px 17px;
          border: 1px solid rgba(198, 155, 83, 0.4);
          background: #fffaf1;
          color: #613744;
          font-size: 13px;
          line-height: 1.8;
          transition: all 0.3s ease;
        }

        .name-chip:hover {
          background: var(--wine);
          color: #fff0cf;
          border-color: var(--wine);
          transform: translateY(-3px);
        }

        .chip-flower {
          color: var(--gold);
          margin-left: 8px;
        }

        .children-panel { background: #fffaf1; }

        /* FINAL INVITATION */

        .final-section {
          position: relative;
          padding: 110px 25px;
          color: #f4dfb5;
          text-align: center;
          background:
            radial-gradient(ellipse at center, rgba(139, 69, 83, 0.45), transparent 65%),
            linear-gradient(135deg, #2d0e1a, #581d31, #2d0e1a);
        }

        .final-section::before {
          content: "";
          position: absolute;
          inset: 20px;
          border: 1px solid rgba(218, 180, 108, 0.45);
          pointer-events: none;
        }

        .final-content {
          position: relative;
          z-index: 1;
        }

        .final-symbol {
          font-size: 40px;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .final-small {
          font: 11px "Cormorant Garamond", serif;
          letter-spacing: 4px;
          color: #d6b77d;
        }

        .final-content h2 {
          font-size: clamp(42px, 7vw, 65px);
          color: #f5d99f;
          font-weight: 500;
          margin: 20px 0;
        }

        .final-message {
          font-size: 15px;
          line-height: 2.3;
          color: #f0ddc0;
        }

        .final-address {
          margin: 55px auto 0;
          padding: 30px 20px;
          max-width: 600px;
          border-top: 1px solid rgba(218, 180, 108, 0.4);
          border-bottom: 1px solid rgba(218, 180, 108, 0.4);
        }

        .final-address > span {
          display: block;
          color: #d6b77d;
          font-size: 13px;
          margin-bottom: 18px;
        }

        .final-address h3 {
          font-size: 19px;
          font-weight: 500;
          color: #fff0cf;
          margin: 9px 0;
        }

        .final-address p {
          color: #e0c99f;
          font-size: 13px;
          margin: 8px 0;
        }

        .final-divider {
          color: var(--gold);
          margin: 30px 0;
          letter-spacing: 12px;
        }

        .final-thanks {
          color: #f5d99f;
          font-size: 15px;
        }

        /* WEDDING CARD PLACEHOLDER */

        .card-attachment-section { background: #f8f0e2; }

        .attachment-card {
          max-width: 650px;
          margin: 0 auto;
          padding: 45px 25px;
          text-align: center;
          border: 1px dashed rgba(167, 122, 60, 0.65);
          background: rgba(255, 252, 245, 0.8);
        }

        .attachment-icon {
          color: var(--gold);
          font-size: 45px;
        }

        .attachment-card h3 {
          color: var(--wine);
          font-size: 22px;
          margin: 15px 0;
        }

        .attachment-card p {
          color: #79505a;
          font-size: 13px;
          line-height: 2;
        }

        .attachment-note {
          display: block;
          color: #a77a3c;
          font: 10px "Cormorant Garamond", serif;
          letter-spacing: 3px;
          margin-top: 22px;
        }

        .footer {
          padding: 30px 20px;
          text-align: center;
          background: #210a13;
          color: #d8b77d;
        }

        .footer-ornament {
          color: var(--gold);
          letter-spacing: 9px;
          margin-bottom: 12px;
        }

        .footer p {
          font-size: 13px;
          margin: 8px 0;
        }

        .footer small {
          font: 11px "Cormorant Garamond", serif;
          letter-spacing: 2px;
          color: #ad8c65;
        }

        /* ANIMATIONS */

        .reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes brideEnter {
          from { opacity: 0; transform: translateX(-75px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes groomEnter {
          from { opacity: 0; transform: translateX(75px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes threadDraw {
          to { stroke-dashoffset: 0; }
        }

        @keyframes starPulse {
          from { opacity: 0.65; scale: 0.85; }
          to { opacity: 1; scale: 1.2; }
        }

        @keyframes glowPulse {
          from { opacity: 0.45; transform: scale(0.9); }
          to { opacity: 0.9; transform: scale(1.1); }
        }

        @keyframes ornamentFloat {
          from { transform: translateY(-7px); }
          to { transform: translateY(7px); }
        }

        @keyframes arrowDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(7px); }
        }

        /* TABLET */

        @media (max-width: 850px) {
          .events-grid { grid-template-columns: repeat(2, 1fr); }
          .union-names { grid-template-columns: 1fr 170px 1fr; }
          .family-grid { gap: 17px; }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .side-ornament {
            width: 17px;
            opacity: 0.4;
          }

          .side-ornament::before { left: 3px; }
          .side-ornament::after { right: 3px; }
          .side-ornament span { font-size: 12px; }

          .hero { padding: 70px 25px; }
          .hero::before { inset: 12px; }
          .hero::after { inset: 18px; }

          .ganesh {
            font-size: 16px;
            margin-bottom: 30px;
          }

          .hero-top-line {
            font-size: 9px;
            letter-spacing: 3px;
          }

          .hero-subtitle { font-size: 13px; }

          .hero-names {
            gap: 12px;
            font-size: clamp(42px, 12vw, 65px);
          }

          .hero-message { font-size: 13px; }

          .section { padding: 75px 25px; }

          .section-heading { margin-bottom: 38px; }
          .section-heading h2 { font-size: 27px; }

          .invitation-card { padding: 45px 20px; }
          .invitation-text { font-size: 13px; }

          .wedding-union {
            margin-top: 40px;
            padding: 28px 0;
          }

          .union-names {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .union-name { padding: 10px 5px; }
          .union-name h3 { font-size: 32px; }

          .union-knot {
            width: 210px;
            margin: 0 auto;
            order: 2;
          }

          .bride-name { order: 1; }
          .groom-name { order: 3; }

          .union-blessing {
            font-size: 12px;
            line-height: 2;
          }

          .countdown-section { padding: 65px 20px; }
          .countdown-content h2 { font-size: 27px; }
          .countdown-grid { gap: 9px; }

          .countdown-box {
            width: 69px;
            padding: 15px 5px;
          }

          .countdown-box strong { font-size: 30px; }
          .countdown-box span { font-size: 11px; }

          .events-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .event-card { padding: 25px 15px; }
          .family-grid { grid-template-columns: 1fr; }
          .family-card { padding: 25px 20px; }
          .names-panel { padding: 25px 15px; }

          .name-chip {
            font-size: 12px;
            padding: 9px 12px;
          }

          .final-section { padding: 80px 25px; }
          .final-address h3 { font-size: 16px; }
          .final-message { font-size: 13px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }

          .union-name { opacity: 1; }
          .thread { stroke-dashoffset: 0; }
        }
      `}</style>
    </main>
  );
}