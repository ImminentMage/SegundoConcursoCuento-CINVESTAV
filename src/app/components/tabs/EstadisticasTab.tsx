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

export function EstadisticasTab() {
  return (
    <div className="cr-panel">
      <div className="s-kicker">Estadísticas</div>
      <h2 className="s-title">Algunas estadísticas</h2>

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
