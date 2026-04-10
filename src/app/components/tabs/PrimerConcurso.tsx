const ganadores = [
  {
    place: "Primer lugar",
    title: "La memoria de los circuitos",
    meta: "Seudónimo: Quetzal · Ciudad de México",
  },
  {
    place: "Segundo lugar",
    title: "Cuando el tiempo aprende",
    meta: "Seudónimo: Laplace · Guadalajara, Jalisco",
  },
  {
    place: "Tercer lugar",
    title: "El último algoritmo",
    meta: "Seudónimo: Turing-X · Monterrey, Nuevo León",
  },
  {
    place: "Mención honorífica",
    title: "Raíz de piedra",
    meta: "Seudónimo: Mnemosyne · Buenos Aires, Argentina",
  },
  {
    place: "Mención honorífica",
    title: "Los que sueñan en binario",
    meta: "Seudónimo: Senda · Puebla, Puebla",
  },
];

const procedencias = [
  { lugar: "Ciudad de México", cantidad: 24 },
  { lugar: "Guadalajara, Jalisco", cantidad: 11 },
  { lugar: "Monterrey, Nuevo León", cantidad: 9 },
  { lugar: "Puebla, Puebla", cantidad: 8 },
  { lugar: "Mérida, Yucatán", cantidad: 6 },
  { lugar: "Oaxaca, Oaxaca", cantidad: 5 },
  { lugar: "San Luis Potosí", cantidad: 4 },
  { lugar: "Tijuana, Baja California", cantidad: 4 },
  { lugar: "Otros estados", cantidad: 9 },
  { lugar: "Argentina", cantidad: 4 },
  { lugar: "España", cantidad: 3 },
];

export function PrimerConcurso() {
  const total = procedencias.reduce((a, b) => a + b.cantidad, 0);

  return (
    <div className="cr-panel">
      <p className="s-kicker">Archivo histórico</p>
      <h2 className="s-title">Primer concurso</h2>

      <p className="s-intro">
        El primer concurso de cuento se realizó bajo la misma convocatoria temática y convocó una
        participación significativa desde distintos estados de la República y países de habla hispana.
        A continuación se presenta el registro histórico de resultados y estadísticas.
      </p>

      <div className="archivo-layout">
        {/* Main column */}
        <div>
          {/* Resultados */}
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-text-muted)", marginBottom: "0.875rem" }}>
            Resultados
          </p>

          <div style={{ marginBottom: "2.5rem" }}>
            {ganadores.map((g) => (
              <div key={g.title} className="premio-row">
                <div className="premio-row__place">{g.place}</div>
                <div className="premio-row__detail">
                  <div className="premio-row__title">«{g.title}»</div>
                  <div className="premio-row__meta">{g.meta}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Jurado */}
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-text-muted)", marginBottom: "0.875rem" }}>
            Jurado del primer concurso
          </p>

          <div style={{ border: "1px solid var(--c-border)", background: "var(--c-bg-card)", padding: "1.5rem 1.75rem", marginBottom: "2rem" }}>
            {[
              { nombre: "Dr. Rafael Pérez y Pérez", rol: "Investigador en narrativa y computación, ESCOM-IPN" },
              { nombre: "Dra. Lourdes Aguilar Morales", rol: "Especialista en procesamiento de lenguaje natural, IIMAS-UNAM" },
              { nombre: "Mtro. José Gordon", rol: "Escritor y divulgador científico" },
            ].map((j) => (
              <div key={j.nombre} style={{ padding: "0.875rem 0", borderBottom: "1px solid var(--c-border)" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.9375rem", color: "var(--c-text)", marginBottom: "0.2rem" }}>
                  {j.nombre}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--c-text-sec)" }}>
                  {j.rol}
                </div>
              </div>
            ))}
            <div style={{ paddingTop: "0.875rem" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--c-text-muted)", margin: 0, lineHeight: 1.6 }}>
                El jurado deliberó en sesión privada. El fallo fue anunciado en ceremonia celebrada
                en las instalaciones de CINVESTAV, Unidad Zacatenco.
              </p>
            </div>
          </div>

          {/* Estadísticas */}
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--c-text-muted)", marginBottom: "0.875rem" }}>
            Estadísticas generales
          </p>

          <div className="stats-grid">
            {[
              { num: "87", label: "Cuentos recibidos" },
              { num: "11", label: "Estados participantes" },
              { num: "2", label: "Países extranjeros" },
              { num: "5", label: "Reconocimientos otorgados" },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-item__num">{s.num}</div>
                <div className="stat-item__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar — procedencia */}
        <div>
          <div className="cr-sidebar">
            <div className="cr-sidebar__head">Procedencia de participantes</div>
            {procedencias.map((p) => (
              <div key={p.lugar} className="cr-sidebar__item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                <div className="cr-sidebar__item-value" style={{ fontSize: "0.8125rem" }}>{p.lugar}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 600, color: "var(--c-text)", flexShrink: 0 }}>
                  {p.cantidad}
                </div>
              </div>
            ))}
            <div className="cr-sidebar__item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", background: "var(--c-bg-card-alt)" }}>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--c-text-muted)" }}>
                Total
              </div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--c-text)" }}>
                {total}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "1.5rem", border: "1px solid var(--c-border)", borderLeft: "2px solid var(--c-lila)", background: "var(--c-bg-card)", padding: "1.25rem 1.5rem" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--c-text-muted)", marginBottom: "0.625rem" }}>
              Nota del archivo
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--c-text-sec)", lineHeight: 1.65, margin: 0 }}>
              Los nombres reales de los participantes permanecen reservados conforme al proceso de evaluación
              bajo seudónimo. Los datos de procedencia corresponden a la información proporcionada
              voluntariamente en la hoja de registro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
