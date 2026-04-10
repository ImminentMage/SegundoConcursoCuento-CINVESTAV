export function ContactoTab() {
  return (
    <div className="cr-panel">
      <div className="s-kicker">Contacto</div>
      <h2 className="s-title">Contacto</h2>

      <div className="cr-highlight">
        <p>
          <strong style={{ color: "var(--c-text)" }}>
            Para mayores informes comunicarse con:
          </strong>
        </p>
        <p style={{ marginTop: "0.75rem" }}>Dr. José Matías Alvarado</p>
      </div>

      <div className="cr-highlight">
        <p>
          <strong style={{ color: "var(--c-text)" }}>
            Teléfono de la secretaría en CINVESTAV:
          </strong>
        </p>
        <p style={{ marginTop: "0.75rem" }}>5557473756</p>
      </div>

      <div className="cr-highlight">
        <p>
          <strong style={{ color: "var(--c-text)" }}>
            Correo electrónico institucional:
          </strong>
        </p>
        <p className="contact-inline-value contact-break" style={{ marginTop: "0.75rem" }}>
          matias.alvarado@cinvestav.mx
        </p>
      </div>

      <div className="cr-highlight">
        <p>
          <strong style={{ color: "var(--c-text)" }}>
            Correo electrónico alterno:
          </strong>
        </p>
        <p className="contact-inline-value contact-break" style={{ marginTop: "0.75rem" }}>
          matias@cs.cinvestav.mx
        </p>
      </div>

      <div className="cr-highlight">
        <p>
          <strong style={{ color: "var(--c-text)" }}>Página web:</strong>
        </p>
        <p className="contact-inline-value contact-break" style={{ marginTop: "0.75rem" }}>
          <a href="https://cinvestav.mx/investigacion/directorio-de-investigacion/jose-matias-alvarado-mentado">
            https://cinvestav.mx/investigacion/directorio-de-investigacion/jose-matias-alvarado-mentado
          </a>
        </p>
      </div>
    </div>
  );
}
