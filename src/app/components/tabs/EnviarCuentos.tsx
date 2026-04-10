export function EnviarCuentos() {
  return (
    <div className="cr-panel">
      <p className="s-kicker">Envío digital</p>
      <h2 className="s-title">Enviar cuentos</h2>

      <p className="s-intro">
        El envío de participaciones se realiza exclusivamente en formato digital, por correo electrónico.
        No se aceptan envíos físicos. A continuación se describen los documentos requeridos y el procedimiento.
      </p>

      <div className="envio-layout">
        {/* Main column */}
        <div>
          <div className="envio-email">
            <div className="envio-email__label">Correo de recepción</div>
            <div className="envio-email__address">concurso@cs.cinvestav.mx</div>
            <div className="envio-email__note">
              En el asunto del correo indique: <em style={{ color: "var(--c-text)" }}>Concurso de Cuento 2025 — [Seudónimo]</em>.
              No incluya su nombre real en ninguna parte del mensaje ni de los archivos adjuntos.
            </div>
          </div>

          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--c-text-muted)", marginBottom: "0.875rem" }}>
            Documentos requeridos
          </p>

          <ul className="doc-list">
            <li className="doc-list__item">
              <strong>Archivo del cuento</strong><br />
              El texto literario completo. Formato .doc o .docx, con el seudónimo en el nombre del archivo
              (ej. <em style={{ color: "var(--c-text-sec)" }}>quetzal_cuento.docx</em>). Sin nombre real del autor en el documento.
            </li>
            <li className="doc-list__item">
              <strong>Hoja de datos personales</strong><br />
              Archivo separado en .doc o .docx con: nombre completo, seudónimo utilizado, correo electrónico,
              teléfono de contacto, institución de adscripción (si aplica) y breve semblanza biográfica
              de máximo cien palabras.
            </li>
            <li className="doc-list__item">
              <strong>Declaración de originalidad</strong><br />
              Carta firmada (escaneada en .pdf) en la que el autor declara que la obra es original, inédita,
              de su autoría exclusiva y que no participa simultáneamente en otro concurso. Puede solicitarse
              la plantilla al correo de recepción.
            </li>
          </ul>
        </div>

        {/* Secondary column */}
        <div>
          <div className="cr-sidebar">
            <div className="cr-sidebar__head">Confirmación de recepción</div>
            <div className="cr-sidebar__item">
              <div className="cr-sidebar__item-label">Acuse de recibo</div>
              <div className="cr-sidebar__item-value">
                Se enviará confirmación al correo del participante en un plazo de 5 días hábiles a partir
                de la recepción.
              </div>
            </div>
            <div className="cr-sidebar__item">
              <div className="cr-sidebar__item-label">Sin confirmación</div>
              <div className="cr-sidebar__item-value">
                Si no recibe acuse en ese plazo, comuníquese al correo o teléfono de contacto para verificar
                la recepción de su envío.
              </div>
            </div>
          </div>

          <div className="cr-sidebar" style={{ marginTop: "1.5rem" }}>
            <div className="cr-sidebar__head">Acceso a documentos</div>
            <div className="cr-sidebar__item">
              <div className="cr-sidebar__item-label">Plantilla de declaración</div>
              <div className="cr-sidebar__item-value">
                Solicitarla por correo a: concurso@cs.cinvestav.mx
              </div>
            </div>
            <div className="cr-sidebar__item">
              <div className="cr-sidebar__item-label">Bases completas</div>
              <div className="cr-sidebar__item-value">
                Disponibles en la pestaña «Bases» de este mismo sitio.
              </div>
            </div>
          </div>

          <div className="cr-sidebar" style={{ marginTop: "1.5rem" }}>
            <div className="cr-sidebar__head">Datos del remitente</div>
            <div className="cr-sidebar__item">
              <div className="cr-sidebar__item-label">Organiza</div>
              <div className="cr-sidebar__item-value">
                Departamento de Computación<br />CINVESTAV-IPN
              </div>
            </div>
            <div className="cr-sidebar__item">
              <div className="cr-sidebar__item-label">Responsable</div>
              <div className="cr-sidebar__item-value">
                Dr. José Negrete Martínez
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
