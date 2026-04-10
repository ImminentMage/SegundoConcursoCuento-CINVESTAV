export function ResumenTab() {
  return (
    <div className="cr-panel">
      <div className="s-kicker">Resumen</div>
      <h2 className="s-title">Resumen</h2>

      <div className="content-stack">
        <p>
          <strong style={{ color: "var(--c-text)" }}>Fechas importantes:</strong>
        </p>
        <p>Convocatoria: 23 de junio de 2026.</p>
        <p>Cierre: 25 de agosto de 2026.</p>
        <p>Resultados: 03 de septiembre de 2026.</p>
      </div>

      <div className="cr-highlight">
        <p>
          <strong style={{ color: "var(--c-text)" }}>Convoca:</strong>
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          Departamento de Computación del Centro de Investigación y de Estudios
          Avanzados del IPN.
        </p>
      </div>

      <div className="cr-highlight">
        <p>
          <strong style={{ color: "var(--c-text)" }}>Jurado:</strong>
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          El jurado calificador estará integrado por destacados escritores y
          expertos en la disciplina del cómputo. Su fallo será inapelable y
          además está facultado para descalificar cualquier trabajo, otorgar
          menciones honoríficas e incluso declarar desierto el concurso si así
          lo considera. Ante cualquier situación no prevista en la presente
          convocatoria, el jurado calificador tendrá la autoridad suficiente
          para resolverla conjuntamente con los organizadores del concurso.
        </p>
      </div>

      <div className="cr-highlight">
        <p>
          <strong style={{ color: "var(--c-text)" }}>Premios:</strong>
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          Atractivos premios y diploma de reconocimiento, respectivamente, para
          el primer, segundo y tercer lugar. Menciones especiales, si las
          hubiera, con solo diploma de reconocimiento.
        </p>
      </div>

      <div className="cr-highlight">
        <p>
          <strong style={{ color: "var(--c-text)" }}>Resultados:</strong>
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          Los resultados se darán a conocer al triunfador de manera personal y
          serán publicados en el portal del CINVESTAV.
        </p>
      </div>

      <div className="cr-highlight">
        <p>
          <strong style={{ color: "var(--c-text)" }}>Organiza:</strong>
        </p>
        <p style={{ marginTop: "0.75rem" }}>Dr. José Matías Alvarado.</p>
        <p style={{ marginTop: "0.75rem" }}>
          <a href="mailto:matias@cs.cinvestav.mx">matias@cs.cinvestav.mx</a>
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          <a href="http://delta.cs.cinvestav.mx/~matias">
            http://delta.cs.cinvestav.mx/~matias
          </a>
        </p>
      </div>
    </div>
  );
}
