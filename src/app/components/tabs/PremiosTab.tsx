export function PremiosTab() {
  return (
    <div className="cr-panel">
      <div className="s-kicker">Premios</div>
      <h2 className="s-title">Ganadores</h2>

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
            <strong style={{ color: "var(--c-text)" }}>
              Mención especial
            </strong>
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
    </div>
  );
}
