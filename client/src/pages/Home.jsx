import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

const stack = [
  "React.js",
  "Node.js + Express",
  "MongoDB",
  "REST API",
  "JWT",
  "Leaflet Maps",
  "Socket.IO",
];

const pillars = [
  {
    title: "Find",
    text: "Search artisans, crafts, workshops and museums by craft and location.",
  },
  {
    title: "Learn",
    text: "Read artisan stories and follow the step-by-step journey of a craft.",
  },
  {
    title: "Explore",
    text: "Discover historical crafts, museum collections and verified collectors.",
  },
  {
    title: "Connect",
    text: "Message artisans, request workshops and buy handmade products.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="eyebrow">Digital artisan & heritage discovery</span>
            <h1>
              Every craft has a <em>story</em>. Meet the hands behind it.
            </h1>
            <p className="hero__lead">
              Karigar brings together local artisans, traditional crafts,
              museums, historical crafts and collectors — so you can find the
              maker, learn the process and carry the culture forward.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/artisans">
                Discover artisans <ArrowRight size={18} />
              </Link>
              <Link className="btn btn--ghost" to="/crafts">
                Explore crafts
              </Link>
            </div>
            <div className="hero__meta">
              <span>
                <MapPin size={16} /> Location-based discovery
              </span>
              <span>
                <Sparkles size={16} /> Craft journeys & stories
              </span>
            </div>
          </div>

          <div className="hero__panel">
            <div className="hero__seal">K</div>
            <p className="hero__panel-title">
              Crafted by hand.
              <br />
              Carried with story.
            </p>
            <span className="hero__panel-tag">Find · Learn · Explore · Connect</span>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="container pillars__grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="pillar">
              <h2>{pillar.title}</h2>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-strip">
        <div className="container">
          <span className="stack-strip__label">Project stack</span>
          <div className="stack-strip__items">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
