const bases = [
  "1. La temática deberá versar sobre el impacto de la computación en la sociedad y la cultura modernas. Actualmente, casi todas las personas interactuamos con dispositivos computacionales y/o robots. Esta práctica ha modificado nuestros hábitos de vida desde el nacimiento hasta la senectud; pero, especialmente, ha modificado nuestras expectativas. En las actividades productivas se han adoptado dispositivos electromecánicos para hacerlas más eficientes; en la vida diaria, para resolver necesidades personales y/o suplir carencias físicas. Sin embargo, el extremo significativo, cada vez más frecuente, es la incorporación de dispositivos electrónicos y animados para la convivencia emocional y afectiva entre las personas: hecho inédito y de profundas consecuencias, aún imprevisibles en la historia humana. El concurso está dirigido a quienes, a través de una historia breve o cuento, narren su reflexión y proyección imaginativa sobre a lo que pudiera conducirnos la actual sinergia humanidad – computadoras/robots; las consecuencias de la irrupción irreversible e intensa del cómputo en la vida y la inteligencia. ¿Hacia dónde vamos?",
  "2. El certamen queda abierto a partir de la publicación de la convocatoria y hasta el 22 de junio de 2026.",
  "3. Los escritores solo podrán participar con un cuento inédito y que no esté participando en algún otro concurso o en proceso de contratación o producción editorial, simultáneamente a este concurso.",
  "4. El cuento deberá estar escrito en español y se entregará por triplicado, a computadora, a doble espacio y en papel tamaño carta por una sola cara, con márgenes de 2.5 Pts.; deberá tener una extensión mínima de cinco cuartillas y máxima de 15, escrito con letra tipo Arial de 11 puntos.",
  "5. Los trabajos deberán entregarse nominados con un seudónimo y título del cuento, por triplicado en un sobre cerrado; en el interior del mismo debe incluirse otro sobre tamaño esquela y cerrado que contenga una ficha con la identidad del autor (nombre, dirección, lugar de procedencia, teléfono de domicilio, correo electrónico), título del cuento y seudónimo. En la parte exterior del sobre tamaño esquela deberá tener rotulado solo el seudónimo y título del cuento.",
  "6. Los trabajos deberán remitirse o entregarse en un sobre rotulado como: Concurso Nacional de Cuento: la Computación del siglo XXI, según el caso, a:",
  "7. De los trabajos enviados por correo solo se aceptarán aquellos en los que la fecha máxima del matasellos de recepción del CINVESTAV sea a más tardar el día 22 de junio de 2026. De los enviados a través del portal electrónico, los cargados previa la hora de cierre de la convocatoria.",
  "8. El jurado calificador estará integrado por destacados escritores y expertos en la disciplina del cómputo, cuyos nombres serán dados a conocer una vez que se haya dictaminado el premio. Su fallo será inapelable y además el jurado está facultado para descalificar cualquier trabajo, otorgar menciones honoríficas e incluso declararlo desierto. Ante cualquier situación no prevista en la presente convocatoria, el jurado calificador tendrá la autoridad suficiente para resolverla conjuntamente con las autoridades organizadoras del concurso.",
  "9. Una vez emitido el fallo del jurado, se procederá a la apertura de la plica de identificación de los ganadores, quienes serán notificados de manera personal.",
  "10. Se premiará al primer, segundo y tercer lugar, además de otorgarles un diploma de reconocimiento. De declararse autores con mención honorífica, estos solo recibirán un diploma de reconocimiento.",
  "11. Los ganadores autorizan al CINVESTAV y le ceden los derechos de autor para la primera edición de la obra por los medios que el Centro considere pertinentes.",
  "12. La ceremonia de premiación se llevará a cabo en el CINVESTAV, unidad Zacatenco.",
  "13. Los originales y plicas de identificación que no resulten premiados serán destruidos.",
];

const entregas = [
  "Foráneos: Departamento de Computación-CINVESTAV, Av. Instituto Politécnico Nacional 2508, Col. San Pedro Zacatenco, CP 07360 México, D.F. Apartado postal 14-740, 07000 México, DF.",
  "Locales: Recepción del Departamento de Computación del CINVESTAV de las 9:00 a las 17:00 hrs., de lunes a viernes en días hábiles.",
  "Electrónicamente: En el portal del Concurso: http://delta.cs.cinvestav.mx/~matias/Copia_de_uno/Enviar_Cuento.html. Seguir las instrucciones.",
];

export function BasesTab() {
  return (
    <div className="cr-panel">
      <div className="s-kicker">Bases del concurso</div>
      <h2 className="s-title">Bases del concurso</h2>

      <ol className="bases-list">
        {bases.map((base) => (
          <li key={base}>{base}</li>
        ))}
      </ol>

      <div className="cr-highlight">
        <ul className="content-list">
          {entregas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
