const bases = [
  {
    titulo: "Convocatoria abierta",
    texto:
      "El Departamento de Computación del CINVESTAV-IPN invita a escritores, investigadores, estudiantes y público en general a participar en el Concurso de Cuento «La Computación del Siglo 21: entre lo natural y lo artificial de la inteligencia y la vida».",
  },
  {
    titulo: "Temática",
    texto:
      "Los cuentos deberán abordar, desde la ficción literaria, alguno de los siguientes ejes temáticos: inteligencia artificial y vida, relación entre lo humano y lo computacional, sociedad y tecnología, evolución artificial, redes y conciencia, o cualquier intersección creativa entre ciencias de la computación y experiencia humana.",
  },
  {
    titulo: "Idioma",
    texto: "Los textos deberán estar escritos en español. No se aceptarán obras en otros idiomas ni traducciones.",
  },
  {
    titulo: "Originalidad e inédito",
    texto:
      "Las obras presentadas deberán ser originales, inéditas y no haber sido premiadas ni seleccionadas en ningún otro concurso. No podrán participar simultáneamente en otras convocatorias durante el proceso de evaluación.",
  },
  {
    titulo: "Extensión",
    texto:
      "La extensión mínima será de tres cuartillas y la máxima de quince cuartillas. Formato: fuente Times New Roman de 12 puntos, doble espacio, márgenes de 2.5 cm en todos los lados.",
  },
  {
    titulo: "Número de participaciones",
    texto: "Cada participante podrá presentar un máximo de dos cuentos al concurso, con el mismo seudónimo o con seudónimos distintos.",
  },
  {
    titulo: "Envío bajo seudónimo",
    texto:
      "Los trabajos deberán enviarse bajo seudónimo. En ninguna parte del texto ni del archivo que contiene la obra deberá aparecer el nombre real del autor o autora. Los datos personales se enviarán en archivo separado, conforme a las instrucciones de la sección «Enviar cuentos».",
  },
  {
    titulo: "Jurado",
    texto:
      "El jurado estará integrado por académicos, investigadores y escritores de reconocida trayectoria, designados por el Comité Organizador. Su composición se dará a conocer junto con el fallo.",
  },
  {
    titulo: "Evaluación",
    texto:
      "El jurado evaluará los textos con base en calidad literaria, coherencia narrativa, originalidad de la propuesta, pertinencia temática y dominio del lenguaje. Sus decisiones serán inapelables.",
  },
  {
    titulo: "Premios",
    texto:
      "Se otorgarán tres premios en efectivo y hasta dos menciones honoríficas. Los montos se especifican en la sección «Resumen». Los ganadores recibirán además reconocimiento institucional del CINVESTAV-IPN.",
  },
  {
    titulo: "Publicación",
    texto:
      "Los cuentos premiados y los que obtengan mención honorífica podrán ser publicados por el CINVESTAV-IPN en sus medios de difusión institucionales, sin que ello implique retribución económica adicional ni cesión total de derechos al autor.",
  },
  {
    titulo: "Derechos de autor",
    texto:
      "Los participantes conservan la titularidad de sus obras. Al participar autorizan al CINVESTAV-IPN a publicar, difundir y divulgar los textos premiados o con mención honorífica, con atribución al autor bajo el seudónimo registrado o su nombre real, según lo indique el autor.",
  },
  {
    titulo: "Fecha límite de recepción",
    texto:
      "La fecha límite de recepción de trabajos será comunicada mediante la convocatoria oficial publicada en el sitio web del CINVESTAV. Se recomienda consultar periódicamente la página para actualizaciones.",
  },
  {
    titulo: "Fallo y ceremonia",
    texto:
      "El fallo del jurado se dará a conocer en ceremonia pública y se publicará en el sitio web del CINVESTAV. Los ganadores serán notificados previamente por correo electrónico al reportado en sus datos de registro.",
  },
  {
    titulo: "Descalificación",
    texto:
      "Será motivo de descalificación: la presentación de obras no originales o plagiadas, el incumplimiento de alguna de estas bases, la participación simultánea en otros concursos con la misma obra, o la identificación del autor dentro del texto enviado.",
  },
  {
    titulo: "Aceptación de bases",
    texto:
      "La participación en el concurso implica la plena aceptación de todas y cada una de estas bases, así como de las decisiones del jurado y del Comité Organizador.",
  },
];

export function Bases() {
  return (
    <div className="cr-panel">
      <p className="s-kicker">Convocatoria</p>
      <h2 className="s-title">Bases</h2>

      <p className="s-intro">
        El Departamento de Computación del CINVESTAV-IPN convoca al segundo concurso de cuento bajo la
        temática central de la computación, la inteligencia y la vida. A continuación se presentan las bases
        completas de participación.
      </p>

      <ol className="bases-list">
        {bases.map((base, i) => (
          <li key={i}>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--c-text)", display: "block", marginBottom: "0.25rem" }}>
              {base.titulo}
            </span>
            {base.texto}
          </li>
        ))}
      </ol>

      <div className="s-sep" />

      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--c-text-muted)", lineHeight: 1.6 }}>
        Para consultas específicas sobre las bases, diríjase a la sección «Contacto» de este sitio.
        El Comité Organizador podrá emitir aclaraciones o adendas que se publicarán en esta misma página.
      </p>
    </div>
  );
}
