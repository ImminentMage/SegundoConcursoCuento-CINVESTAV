export function PuedeParticipar() {
  return (
    <div className="cr-panel">
      <p className="s-kicker">Participación</p>
      <h2 className="s-title">Puede participar</h2>

      <p className="s-intro">
        El concurso convoca a toda persona que escriba en español y quiera imaginar, narrar y pensar la
        relación entre inteligencia, vida y computación. No se exige afiliación institucional, grado académico
        ni experiencia previa en publicación literaria.
      </p>

      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--c-text-sec)", lineHeight: 1.8, maxWidth: "640px", marginBottom: "1rem" }}>
        El concurso está abierto a narradores, investigadores, estudiantes, artistas y ciudadanos de
        cualquier latitud. La única condición es que el texto esté escrito en español, que sea original e
        inédito y que explore alguno de los temas convocados: la computación, la inteligencia —natural o
        artificial—, la vida, la sociedad y la cultura del siglo&nbsp;XXI.
      </p>

      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--c-text-sec)", lineHeight: 1.8, maxWidth: "640px" }}>
        El cuento debe ser un cuento: una pieza literaria de ficción con estructura narrativa, voz y
        perspectiva propias. No se aceptan ensayos, artículos técnicos ni textos de divulgación científica.
      </p>

      <div className="cr-highlight">
        <p>
          Desde este micrositio es posible consultar la convocatoria completa y sus bases, conocer los datos
          de contacto del responsable del concurso, realizar el envío digital de los textos y acceder al
          archivo histórico del primer concurso, con resultados, estadísticas y reconocimientos otorgados.
          Toda la información necesaria para participar está concentrada en esta misma experiencia.
        </p>
      </div>

      <div className="s-sep" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "var(--c-border)", border: "1px solid var(--c-border)", maxWidth: "680px" }}>
        {[
          { label: "Idioma de participación", val: "Español" },
          { label: "Tipo de texto", val: "Cuento de ficción original" },
          { label: "Afiliación requerida", val: "Ninguna" },
          { label: "Modalidad de envío", val: "Digital · Correo electrónico" },
        ].map((item) => (
          <div key={item.label} style={{ background: "var(--c-bg-card)", padding: "1.5rem 1.75rem" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--c-text-muted)", marginBottom: "0.5rem" }}>
              {item.label}
            </div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.9375rem", color: "var(--c-text)", lineHeight: 1.4 }}>
              {item.val}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
