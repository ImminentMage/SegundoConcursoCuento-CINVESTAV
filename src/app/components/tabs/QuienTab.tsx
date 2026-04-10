export function QuienTab() {
  const categorias = [
    { cat: "A · Estudiantes de bachillerato", desc: "Jóvenes inscritos en cualquier institución de educación media superior del país." },
    { cat: "B · Estudiantes de licenciatura",  desc: "Alumnos de programas de licenciatura o ingeniería en instituciones nacionales o extranjeras." },
    { cat: "C · Posgrado y comunidad académica", desc: "Estudiantes de maestría, doctorado, investigadores, docentes y personal académico." },
    { cat: "D · Público general",              desc: "Cualquier persona mayor de 18 años, sin restricción de ocupación o nacionalidad." },
  ];

  return (
    <div className="cr-panel">
      <div className="s-kicker">Elegibilidad</div>
      <h2 className="s-title">¿Quién puede participar?</h2>
      <p className="s-intro">
        El concurso está abierto a cuatro categorías. Cada participante puede enviar un máximo de{" "}
        <strong style={{ color: "var(--c-text)", fontWeight: 500 }}>dos cuentos</strong>,
        indicando en su envío la categoría a la que pertenece.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--c-border)", border: "1px solid var(--c-border)" }}>
        {categorias.map((item) => (
          <div key={item.cat} style={{ background: "var(--c-bg-card)", padding: "1.75rem 2rem" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--c-bugambilia)", marginBottom: "0.5rem", opacity: 0.85 }}>
              {item.cat}
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--c-text-sec)", lineHeight: 1.7 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="cr-highlight">
        <p>
          Los trabajos deben ser originales e inéditos, no haber sido publicados
          previamente ni estar en proceso de evaluación en otro concurso.
          El CINVESTAV reserva el derecho de publicar los cuentos ganadores en sus canales institucionales.
        </p>
      </div>
    </div>
  );
}
