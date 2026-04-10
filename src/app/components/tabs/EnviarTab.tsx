const documentos = [
  "1. Documento PDF que incluya el cuento firmado con un seudónimo (sin agregar datos personales). DOCUMENTO 1.",
  "2. Documento PDF que incluya los datos personales (nombre completo, dirección, teléfono, correo electrónico), además del título del cuento y el seudónimo. DOCUMENTO 2.",
  "3. Documento PDF que incluya una copia del documento original que acredite la nacionalidad mexicana (acta de nacimiento, credencial de elector, pasaporte), o de residencia en México, en caso de ser extranjero. DOCUMENTO 3.",
];

export function EnviarTab() {
  return (
    <div className="cr-panel">
      <div className="s-kicker">Enviar cuento y contacto</div>
      <h2 className="s-title">Enviar cuento</h2>

      <div className="envio-layout">
        <div className="envio-main">
          <div className="envio-email">
            <div className="envio-email__label">Correos:</div>
            <div className="envio-email__address envio-break">
              matias.alvarado@cinvestav.mx
            </div>
            <div className="envio-email__address envio-break" style={{ marginTop: "10px" }}>
              matias@cs.cinvestav.mx
            </div>
            <p className="envio-email__note">
              Utilice cualquiera de estos correos para el envío de documentos y
              para solicitar confirmación de recepción.
            </p>
          </div>

          <div className="envio-strip">
            <p className="envio-strip__label">
              <strong>Recepción de trabajos:</strong>
            </p>
            <p className="envio-strip__value">
              del 8 de abril de 2026 al 22 de junio de 2026.
            </p>
          </div>

          <div className="envio-card envio-card--docs">
            <p className="envio-card__lead">
              <strong>Los documentos requeridos son tres:</strong>
            </p>
            <ul className="envio-doc-list">
              {documentos.map((item) => (
                <li key={item} className="envio-doc-list__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="envio-card envio-card--confirmation">
            <div className="envio-confirmation">
              <p>
                Una vez recibidos los documentos solicitados, en un lapso no
                mayor a doce horas, se enviará un correo confirmando la
                recepción de los mismos. En caso de no recibir esta
                confirmación, favor de contactarnos.
              </p>
              <p>
                Al DOCUMENTO 1 tendrán acceso los miembros del jurado. Al
                DOCUMENTO 2 y 3 tendrán acceso los organizadores. Una vez hecho
                el dictamen se empatará la información de los DOCUMENTOS 1 y 2
                y se notificará a los ganadores del concurso.
              </p>
            </div>

            <p className="envio-signoff">
              {"Cordialmente,\nMatías Alvarado\nDepartamento de Computación\nCINVESTAV del IPN."}
            </p>
          </div>
        </div>

        <div className="envio-side">
          <div className="cr-sidebar envio-sidebar">
            <div className="cr-sidebar__head envio-sidebar__head">
              Contacto
            </div>

            <div className="cr-sidebar__item envio-sidebar__item">
              <div className="cr-sidebar__item-label envio-sidebar__label">
                Para mayores informes comunicarse con:
              </div>
              <div className="cr-sidebar__item-value envio-sidebar__value">
                Dr. José Matías Alvarado
              </div>
            </div>

            <div className="cr-sidebar__item envio-sidebar__item">
              <div className="cr-sidebar__item-label envio-sidebar__label">
                Teléfono de la secretaría en CINVESTAV:
              </div>
              <div className="cr-sidebar__item-value envio-sidebar__value">
                5557473756
              </div>
            </div>

            <div className="cr-sidebar__item envio-sidebar__item">
              <div className="cr-sidebar__item-label envio-sidebar__label">
                Correos:
              </div>
              <div className="cr-sidebar__item-value envio-sidebar__value envio-break">
                matias.alvarado@cinvestav.mx
              </div>
              <div
                className="cr-sidebar__item-value envio-sidebar__value envio-break"
                style={{ marginTop: "10px" }}
              >
                matias@cs.cinvestav.mx
              </div>
            </div>

            <div className="cr-sidebar__item envio-sidebar__item">
              <div className="cr-sidebar__item-label envio-sidebar__label">
                Página web:
              </div>
              <div className="cr-sidebar__item-value envio-sidebar__value">
                <a
                  className="envio-break"
                  href="https://cinvestav.mx/investigacion/directorio-de-investigacion/jose-matias-alvarado-mentado"
                >
                  https://cinvestav.mx/investigacion/directorio-de-investigacion/jose-matias-alvarado-mentado
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
