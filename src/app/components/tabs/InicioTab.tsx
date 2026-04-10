export function InicioTab() {
  return (
    <div className="cr-panel">
      <div className="s-kicker">Inicio</div>
      <h2 className="s-title">Convocatoria vigente</h2>

      <div className="cr-highlight">
        <p>
          <strong style={{ color: "var(--c-text)" }}>
            Recepción de trabajos:
          </strong>
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          del 8 de abril de 2026 al 22 de junio de 2026.
        </p>
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
