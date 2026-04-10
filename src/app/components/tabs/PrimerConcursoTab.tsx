const entidades = [
  ["Distrito Federal", "13"],
  ["Estado de México", "8"],
  ["Jalisco", "4"],
  ["Puebla", "3"],
  ["Querétaro", "3"],
  ["Coahuila", "2"],
  ["Hidalgo", "2"],
  ["Michoacán", "2"],
  ["Colima", "1"],
  ["Chiapas", "1"],
  ["Durango", "1"],
  ["Guerrero", "1"],
  ["Morelos", "1"],
  ["Oaxaca", "1"],
  ["Tamaulipas", "1"],
  ["Veracruz", "1"],
];

const paises = [
  ["Argentina", "1"],
  ["Venezuela", "1"],
];

const jurado = [
  [
    "Ilán Semo Groman",
    "Historiador",
    "Revista Fractal y Universidad Iberoamericana",
  ],
  ["Carlos Miranda Ayala", "Escritor y traductor de poesía inglesa", ""],
  [
    "Adriano De Luca",
    "Investigador en computación",
    "Departamento de Computación, CINVESTAV",
  ],
  [
    "José Rodríguez García",
    "Investigador en computación",
    "Departamento de Computación, CINVESTAV",
  ],
  [
    "Maricela Bravo",
    "Investigadora en computación",
    "Universidad Politécnica del Estado de Morelos",
  ],
];

export function PrimerConcursoTab() {
  return (
    <div className="cr-panel">
      <div className="s-kicker">1er concurso</div>
      <h2 className="s-title">Archivo del primer concurso</h2>

      <div className="s-kicker">Resumen</div>
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

      <div className="s-sep" />

      <div className="s-kicker">Premios</div>
      <h3 className="s-title">Ganadores</h3>

      <div className="cr-highlight">
        <div className="content-stack">
          <p>
            <strong style={{ color: "var(--c-text)" }}>1.º lugar</strong>
          </p>
          <p>Carlos Alvahuante</p>
          <p>Cuento / seudónimo: El inventor / Rossum</p>
          <p>Dedicación / entidad federativa: Escritor / Distrito Federal</p>
        </div>
      </div>

      <div className="cr-highlight">
        <div className="content-stack">
          <p>
            <strong style={{ color: "var(--c-text)" }}>2.º lugar</strong>
          </p>
          <p>Alejandro Archundia</p>
          <p>Cuento / seudónimo: Brain Edition / Alex Bit</p>
          <p>Dedicación / entidad federativa: Psicólogo / Estado de México</p>
        </div>
      </div>

      <div className="cr-highlight">
        <div className="content-stack">
          <p>
            <strong style={{ color: "var(--c-text)" }}>3.º lugar</strong>
          </p>
          <p>Armando Becerra</p>
          <p>Cuento / seudónimo: Bona FIDE / Artell Ferit</p>
          <p>
            Dedicación / entidad federativa: Estudiante Telemática IPN /
            Distrito Federal
          </p>
        </div>
      </div>

      <div className="cr-highlight">
        <div className="content-stack">
          <p>
            <strong style={{ color: "var(--c-text)" }}>Mención especial</strong>
          </p>
          <p>Carlos García Cantú</p>
          <p>Cuento / seudónimo: El chat / Khamazotz</p>
          <p>Entidad federativa: Querétaro</p>
        </div>
      </div>

      <div className="cr-highlight">
        <p>
          La ceremonia de premiación se llevó a cabo el viernes 5 de septiembre
          durante la clausura de la celebración del 25 aniversario del
          Departamento de Computación del CINVESTAV, en el auditorio Arturo
          Rosenblueth.
        </p>
      </div>

      <div className="s-sep" />

      <div className="s-kicker">Estadísticas</div>
      <h3 className="s-title">Algunas estadísticas</h3>

      <div className="content-stack">
        <p>Lanzamiento de convocatoria: 23 de junio de 2026.</p>
        <p>Cierre de convocatoria: 25 de agosto de 2026.</p>
        <p>47 cuentos recibidos.</p>
        <p>16 de mujeres y 31 de hombres.</p>
        <p>Autores de entre 15 a 70 años de edad.</p>
        <p>Alrededor del 65% (unos 33) menores de 35 años.</p>
        <p>
          Procedentes de 16 entidades federativas de la República, y de los
          países de Venezuela y Argentina.
        </p>
      </div>

      <div className="s-kicker">Entidades de procedencia</div>
      <div className="table-wrap">
        <table className="content-table">
          <thead>
            <tr>
              <th>Entidad</th>
              <th>Número</th>
            </tr>
          </thead>
          <tbody>
            {entidades.map(([nombre, numero]) => (
              <tr key={nombre}>
                <td>{nombre}</td>
                <td>{numero}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="s-kicker">País distinto de México</div>
      <div className="table-wrap">
        <table className="content-table">
          <thead>
            <tr>
              <th>País</th>
              <th>Número</th>
            </tr>
          </thead>
          <tbody>
            {paises.map(([nombre, numero]) => (
              <tr key={nombre}>
                <td>{nombre}</td>
                <td>{numero}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="s-kicker">Jurado Calificador</div>
      <div className="table-wrap">
        <table className="content-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Profesión</th>
              <th>Institución</th>
            </tr>
          </thead>
          <tbody>
            {jurado.map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
