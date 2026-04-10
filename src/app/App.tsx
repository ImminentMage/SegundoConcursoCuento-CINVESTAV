import { useState } from "react";
import "../styles/fonts.css";
import "../styles/concurso.css";
import { CinvestavLogo } from "./components/CinvestavLogo";
import { BackgroundDecoration } from "./components/BackgroundDecoration";
import { InicioTab } from "./components/tabs/InicioTab";
import { ParticipantesTab } from "./components/tabs/ParticipantesTab";
import { BasesTab } from "./components/tabs/BasesTab";
import { PrimerConcursoTab } from "./components/tabs/PrimerConcursoTab";
import { EnviarTab } from "./components/tabs/EnviarTab";

const TABS = [
  { id: "inicio", label: "Inicio" },
  { id: "participantes", label: "Pueden participar" },
  { id: "bases", label: "Bases del concurso" },
  { id: "primer-concurso", label: "1er concurso" },
  { id: "enviar", label: "Enviar cuento y contacto" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function TabContent({ tab }: { tab: TabId }) {
  switch (tab) {
    case "inicio":
      return <InicioTab />;
    case "participantes":
      return <ParticipantesTab />;
    case "bases":
      return <BasesTab />;
    case "primer-concurso":
      return <PrimerConcursoTab />;
    case "enviar":
      return <EnviarTab />;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("inicio");

  return (
    <div className="cr">
      <BackgroundDecoration />

      <header className="cr-header">
        <CinvestavLogo />
      </header>

      <section className="cr-hero">
        <div className="cr-hero__content">
          <div className="cr-hero__titles">
            <div className="cr-hero__subtitle">La Computación del Siglo 21</div>
            <div className="cr-hero__title-shell">
              <h1 className="cr-hero__title">
                <span className="cr-hero__title-line">entre lo natural</span>
                <span className="cr-hero__title-line">y lo artificial</span>
                <span className="cr-hero__title-line">
                  de la inteligencia y la vida
                </span>
              </h1>
            </div>
            <div className="cr-hero__eyebrow">Concurso de cuento</div>
          </div>
        </div>
      </section>

      <nav
        className="cr-nav-wrapper"
        role="tablist"
        aria-label="Secciones del concurso"
      >
        <div className="cr-nav">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className="cr-nav__btn"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="cr-main" role="tabpanel">
        <TabContent key={activeTab} tab={activeTab} />
      </main>
    </div>
  );
}
