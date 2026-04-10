const cards = [
  {
    label: "Convocatoria",
    value: "Segundo concurso",
    sub: "Apertura: enero 2025 · Cierre: por confirmar",
  },
  {
    label: "Convoca",
    value: "CINVESTAV-IPN",
    sub: "Departamento de Computación, Unidad Zacatenco",
  },
  {
    label: "Temática central",
    value: "La Computación del Siglo 21",
    sub: "Entre lo natural y lo artificial de la inteligencia y la vida",
  },
  {
    label: "Premios",
    value: "$15,000 · $10,000 · $7,000",
    sub: "Tres lugares + menciones honoríficas · Pesos mexicanos",
  },
  {
    label: "Jurado",
    value: "Por confirmar",
    sub: "Académicos, investigadores y escritores de trayectoria reconocida",
  },
  {
    label: "Resultados",
    value: "Ceremonia pública",
    sub: "Fecha por confirmar · Notificación previa a ganadores",
  },
  {
    label: "Idioma",
    value: "Español",
    sub: "Únicamente se aceptan textos en español",
  },
  {
    label: "Extensión",
    value: "3 a 15 cuartillas",
    sub: "Times New Roman 12 pt · Doble espacio",
  },
  {
    label: "Organiza",
    value: "CINVESTAV-IPN",
    sub: "Av. Instituto Politécnico Nacional 2508, Ciudad de México",
  },
];

export function Resumen() {
  return (
    <div className="cr-panel">
      <p className="s-kicker">Vista general</p>
      <h2 className="s-title">Resumen</h2>

      <p className="s-intro">
        Síntesis de los elementos más relevantes del concurso: fechas, responsables, premios,
        jurado y condiciones generales de participación.
      </p>

      <div className="resumen-grid">
        {cards.map((card) => (
          <div key={card.label} className="resumen-card">
            <div className="resumen-card__label">{card.label}</div>
            <div className="resumen-card__value">
              {card.value}
              <small>{card.sub}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="s-sep" />

      {/* Premio breakdown */}
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-text-muted)", marginBottom: "0.875rem" }}>
        Estructura de premios
      </p>

      <div style={{ maxWidth: "580px" }}>
        {[
          { place: "Primer lugar", amount: "$15,000 MXN", note: "Diploma y reconocimiento institucional" },
          { place: "Segundo lugar", amount: "$10,000 MXN", note: "Diploma y reconocimiento institucional" },
          { place: "Tercer lugar", amount: "$7,000 MXN", note: "Diploma y reconocimiento institucional" },
          { place: "Mención honorífica", amount: "Sin dotación económica", note: "Diploma y reconocimiento institucional · Hasta dos menciones" },
        ].map((p) => (
          <div key={p.place} className="premio-row">
            <div className="premio-row__place">{p.place}</div>
            <div className="premio-row__detail">
              <div className="premio-row__title">{p.amount}</div>
              <div className="premio-row__meta">{p.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
