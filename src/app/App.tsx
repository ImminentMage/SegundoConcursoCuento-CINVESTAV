import { useState } from 'react';
import cinvestLogo from '../imports/cinvestavipn-logo-photoroom.png';
import heroUpperLeft from '../imports/hero-android-upper-left-portrait.png';
import heroCat from '../imports/hero-android-cat.png';
import heroDog from '../imports/hero-android-dog.png';
import heroFox from '../imports/hero-android-fox.png';
import heroLeftPortrait from '../imports/hero-android-left-portrait.png';
import heroRight from '../imports/hero-android-right.png';
import androidMature from '../imports/179be9db20b7bc7c29470585bff30a5478da76a3-1.png';
import androidOlder from '../imports/e9f3c63da348f375d756365cd6a90b23000d90bf-1.png';
import { VectorRobotOverlay } from './components/BackgroundDecoration';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const useAlternateVectorRobots = true;

  const tabs = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'participar', label: 'Pueden participar' },
    { id: 'bases', label: 'Bases del concurso' },
    { id: 'primer', label: '1er concurso' },
    { id: 'enviar', label: 'Enviar cuento y contacto' },
  ];

  const inicioCards = [
    {
      title: 'Recepción de trabajos:',
      body: 'del 8 de abril de 2026 al 22 de junio de 2026.',
      accent: 'text-[#00d4ff]',
    },
    {
      title: 'Convoca:',
      body: 'Departamento de Computación del Centro de Investigación y de Estudios Avanzados del IPN.',
      accent: 'text-[#a855f7]',
    },
    {
      title: 'Organiza:',
      body: [
        'Dr. José Matías Alvarado.',
        'matias@cs.cinvestav.mx',
        'http://delta.cs.cinvestav.mx/~matias',
      ],
      accent: 'text-[#ff0066]',
    },
  ];

  const bases = [
    'La temática deberá versar sobre el impacto de la computación en la sociedad y la cultura modernas. Actualmente, casi todas las personas interactuamos con dispositivos computacionales y/o robots. Esta práctica ha modificado nuestros hábitos de vida desde el nacimiento hasta la senectud; pero, especialmente, ha modificado nuestras expectativas. En las actividades productivas se han adoptado dispositivos electromecánicos para hacerlas más eficientes; en la vida diaria, para resolver necesidades personales y/o suplir carencias físicas. Sin embargo, el extremo significativo, cada vez más frecuente, es la incorporación de dispositivos electrónicos y animados para la convivencia emocional y afectiva entre las personas: hecho inédito y de profundas consecuencias, aún imprevisibles en la historia humana. El concurso está dirigido a quienes, a través de una historia breve o cuento, narren su reflexión y proyección imaginativa sobre a lo que pudiera conducirnos la actual sinergia humanidad – computadoras/robots; las consecuencias de la irrupción irreversible e intensa del cómputo en la vida y la inteligencia. ¿Hacia dónde vamos?',
    'El certamen queda abierto a partir de la publicación de la convocatoria y hasta el 22 de junio de 2026.',
    'Los escritores solo podrán participar con un cuento inédito y que no esté participando en algún otro concurso o en proceso de contratación o producción editorial, simultáneamente a este concurso.',
    'El cuento deberá estar escrito en español y se entregará por triplicado, a computadora, a doble espacio y en papel tamaño carta por una sola cara, con márgenes de 2.5 Pts.; deberá tener una extensión mínima de cinco cuartillas y máxima de 15, escrito con letra tipo Arial de 11 puntos.',
    'Los trabajos deberán entregarse nominados con un seudónimo y título del cuento, por triplicado en un sobre cerrado; en el interior del mismo debe incluirse otro sobre tamaño esquela y cerrado que contenga una ficha con la identidad del autor (nombre, dirección, lugar de procedencia, teléfono de domicilio, correo electrónico), título del cuento y seudónimo. En la parte exterior del sobre tamaño esquela deberá tener rotulado solo el seudónimo y título del cuento.',
    'Los trabajos deberán remitirse o entregarse en un sobre rotulado como: Concurso Nacional de Cuento: la Computación del siglo XXI, según el caso, a:',
    'De los trabajos enviados por correo solo se aceptarán aquellos en los que la fecha máxima del matasellos de recepción del CINVESTAV sea a más tardar el día 22 de junio de 2026. De los enviados a través del portal electrónico, los cargados previa la hora de cierre de la convocatoria.',
    'El jurado calificador estará integrado por destacados escritores y expertos en la disciplina del cómputo, cuyos nombres serán dados a conocer una vez que se haya dictaminado el premio. Su fallo será inapelable y además el jurado está facultado para descalificar cualquier trabajo, otorgar menciones honoríficas e incluso declararlo desierto. Ante cualquier situación no prevista en la presente convocatoria, el jurado calificador tendrá la autoridad suficiente para resolverla conjuntamente con las autoridades organizadoras del concurso.',
    'Una vez emitido el fallo del jurado, se procederá a la apertura de la plica de identificación de los ganadores, quienes serán notificados de manera personal.',
    'Se premiará al primer, segundo y tercer lugar, además de otorgarles un diploma de reconocimiento. De declararse autores con mención honorífica, estos solo recibirán un diploma de reconocimiento.',
    'Los ganadores autorizan al CINVESTAV y le ceden los derechos de autor para la primera edición de la obra por los medios que el Centro considere pertinentes.',
    'La ceremonia de premiación se llevará a cabo en el CINVESTAV, unidad Zacatenco.',
    'Los originales y plicas de identificación que no resulten premiados serán destruidos.',
  ];

  const procedenciaRows = [
    ['Distrito Federal', '13'],
    ['Estado de México', '8'],
    ['Jalisco', '4'],
    ['Puebla', '3'],
    ['Querétaro', '3'],
    ['Coahuila', '2'],
    ['Hidalgo', '2'],
    ['Michoacán', '2'],
    ['Colima', '1'],
    ['Chiapas', '1'],
    ['Durango', '1'],
    ['Guerrero', '1'],
    ['Morelos', '1'],
    ['Oaxaca', '1'],
    ['Tamaulipas', '1'],
    ['Veracruz', '1'],
  ];

  const deliveryBlocks = [
    {
      title: 'Foráneos:',
      body: 'Departamento de Computación-CINVESTAV, Av. Instituto Politécnico Nacional 2508, Col. San Pedro Zacatenco, CP 07360 México, D.F. Apartado postal 14-740, 07000 México, DF.',
    },
    {
      title: 'Locales:',
      body: 'Recepción del Departamento de Computación del CINVESTAV de las 9:00 a las 17:00 hrs., de lunes a viernes en días hábiles.',
    },
    {
      title: 'Electrónicamente:',
      body: 'En el portal del Concurso: http://delta.cs.cinvestav.mx/~matias/Copia_de_uno/Enviar_Cuento.html. Seguir las instrucciones.',
    },
  ];

  const primerSummary = [
    'Convocatoria: 23 de junio de 2026.',
    'Cierre: 25 de agosto de 2026.',
    'Resultados: 03 de septiembre de 2026.',
  ];

  const primerBlocks = [
    {
      title: 'Convoca:',
      body: 'Departamento de Computación del Centro de Investigación y de Estudios Avanzados del IPN.',
    },
    {
      title: 'Jurado:',
      body: 'El jurado calificador estará integrado por destacados escritores y expertos en la disciplina del cómputo. Su fallo será inapelable y además está facultado para descalificar cualquier trabajo, otorgar menciones honoríficas e incluso declarar desierto el concurso si así lo considera. Ante cualquier situación no prevista en la presente convocatoria, el jurado calificador tendrá la autoridad suficiente para resolverla conjuntamente con los organizadores del concurso.',
    },
    {
      title: 'Premios:',
      body: 'Atractivos premios y diploma de reconocimiento, respectivamente, para el primer, segundo y tercer lugar. Menciones especiales, si las hubiera, con solo diploma de reconocimiento.',
    },
    {
      title: 'Resultados:',
      body: 'Los resultados se darán a conocer al triunfador de manera personal y serán publicados en el portal del CINVESTAV.',
    },
    {
      title: 'Organiza:',
      body: [
        'Dr. José Matías Alvarado.',
        'matias@cs.cinvestav.mx',
        'http://delta.cs.cinvestav.mx/~matias',
      ],
    },
  ];

  const winners = [
    {
      place: '1.º lugar',
      name: 'Carlos Alvahuante',
      story: 'Cuento / seudónimo: El inventor / Rossum',
      detail: 'Dedicación / entidad federativa: Escritor / Distrito Federal',
      accent: 'text-[#00d4ff]',
    },
    {
      place: '2.º lugar',
      name: 'Alejandro Archundia',
      story: 'Cuento / seudónimo: Brain Edition / Alex Bit',
      detail: 'Dedicación / entidad federativa: Psicólogo / Estado de México',
      accent: 'text-[#a855f7]',
    },
    {
      place: '3.º lugar',
      name: 'Armando Becerra',
      story: 'Cuento / seudónimo: Bona FIDE / Artell Ferit',
      detail: 'Dedicación / entidad federativa: Estudiante Telemática IPN / Distrito Federal',
      accent: 'text-[#ff0066]',
    },
    {
      place: 'Mención especial',
      name: 'Carlos García Cantú',
      story: 'Cuento / seudónimo: El chat / Khamazotz',
      detail: 'Entidad federativa: Querétaro',
      accent: 'text-[#f3f4f6]',
    },
  ];

  const statsLines = [
    'Lanzamiento de convocatoria: 23 de junio de 2026.',
    'Cierre de convocatoria: 25 de agosto de 2026.',
    '47 cuentos recibidos.',
    '16 de mujeres y 31 de hombres.',
    'Autores de entre 15 a 70 años de edad.',
    'Alrededor del 65% (unos 33) menores de 35 años.',
    'Procedentes de 16 entidades federativas de la República, y de los países de Venezuela y Argentina.',
  ];

  const paisRows = [
    ['Argentina', '1'],
    ['Venezuela', '1'],
  ];

  const juradoRows = [
    ['Ilán Semo Groman', 'Historiador', 'Revista Fractal y Universidad Iberoamericana'],
    ['Carlos Miranda Ayala', 'Escritor y traductor de poesía inglesa', ''],
    ['Adriano De Luca', 'Investigador en computación', 'Departamento de Computación, CINVESTAV'],
    ['José Rodríguez García', 'Investigador en computación', 'Departamento de Computación, CINVESTAV'],
    ['Maricela Bravo', 'Investigadora en computación', 'Universidad Politécnica del Estado de Morelos'],
  ];

  const envioDocuments = [
    '1. Documento PDF que incluya el cuento firmado con un seudónimo (sin agregar datos personales). DOCUMENTO 1.',
    '2. Documento PDF que incluya los datos personales (nombre completo, dirección, teléfono, correo electrónico), además del título del cuento y el seudónimo. DOCUMENTO 2.',
    '3. Documento PDF que incluya una copia del documento original que acredite la nacionalidad mexicana (acta de nacimiento, credencial de elector, pasaporte), o de residencia en México, en caso de ser extranjero. DOCUMENTO 3.',
  ];

  const contactEmails = ['matias.alvarado@cinvestav.mx', 'matias@cs.cinvestav.mx'];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1525] to-[#050811]" />

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#ff006618] via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-[#00d4ff12] via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-radial from-[#a855f710] via-transparent to-transparent blur-3xl" />

        {/* Geometric patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-8">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#00d4ff" opacity="0.4" />
              <line x1="0" y1="25" x2="50" y2="25" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" />
              <line x1="25" y1="0" x2="25" y2="50" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {useAlternateVectorRobots ? (
          <VectorRobotOverlay />
        ) : (
          <>
            {/* Large vector robot outlines - original fallback */}
            <svg className="absolute top-[20%] left-[12%] w-[280px] h-[320px] opacity-15">
              <rect x="80" y="30" width="120" height="100" fill="none" stroke="#a855f7" strokeWidth="2.5" />
              <circle cx="110" cy="65" r="12" fill="none" stroke="#00d4ff" strokeWidth="2.5" />
              <circle cx="170" cy="65" r="12" fill="none" stroke="#00d4ff" strokeWidth="2.5" />
              <rect x="95" y="140" width="35" height="70" fill="none" stroke="#a855f7" strokeWidth="2.5" />
              <rect x="150" y="140" width="35" height="70" fill="none" stroke="#a855f7" strokeWidth="2.5" />
              <line x1="140" y1="130" x2="140" y2="140" stroke="#00d4ff" strokeWidth="2.5" />
              <rect x="120" y="85" width="40" height="45" fill="none" stroke="#00d4ff" strokeWidth="2" opacity="0.6" />
              <line x1="80" y1="80" x2="60" y2="80" stroke="#a855f7" strokeWidth="2" />
              <line x1="200" y1="80" x2="220" y2="80" stroke="#a855f7" strokeWidth="2" />
              <circle cx="60" cy="80" r="4" fill="#a855f7" />
              <circle cx="220" cy="80" r="4" fill="#a855f7" />
            </svg>

            <svg className="absolute top-[55%] right-[8%] w-[260px] h-[300px] opacity-18">
              <rect x="60" y="20" width="140" height="110" fill="none" stroke="#00d4ff" strokeWidth="2.5" />
              <circle cx="95" cy="55" r="10" fill="none" stroke="#a855f7" strokeWidth="2.5" />
              <circle cx="165" cy="55" r="10" fill="none" stroke="#a855f7" strokeWidth="2.5" />
              <path d="M 100 90 Q 130 105 160 90" fill="none" stroke="#00d4ff" strokeWidth="2" />
              <rect x="80" y="140" width="40" height="80" fill="none" stroke="#00d4ff" strokeWidth="2.5" />
              <rect x="140" y="140" width="40" height="80" fill="none" stroke="#00d4ff" strokeWidth="2.5" />
              <line x1="130" y1="130" x2="130" y2="140" stroke="#a855f7" strokeWidth="2.5" />
              <polygon points="130,10 145,20 130,30 115,20" fill="none" stroke="#a855f7" strokeWidth="2" />
              <circle cx="50" cy="100" r="3" fill="#00d4ff" />
              <circle cx="210" cy="100" r="3" fill="#00d4ff" />
              <line x1="50" y1="100" x2="60" y2="75" stroke="#00d4ff" strokeWidth="1.5" opacity="0.5" />
              <line x1="210" y1="100" x2="200" y2="75" stroke="#00d4ff" strokeWidth="1.5" opacity="0.5" />
            </svg>

            <svg className="absolute bottom-[25%] left-[18%] w-[220px] h-[250px] opacity-12">
              <rect x="70" y="40" width="80" height="70" fill="none" stroke="#a855f7" strokeWidth="2" />
              <circle cx="90" cy="65" r="8" fill="none" stroke="#00d4ff" strokeWidth="2" />
              <circle cx="130" cy="65" r="8" fill="none" stroke="#00d4ff" strokeWidth="2" />
              <rect x="80" y="120" width="25" height="50" fill="none" stroke="#a855f7" strokeWidth="2" />
              <rect x="115" y="120" width="25" height="50" fill="none" stroke="#a855f7" strokeWidth="2" />
              <line x1="110" y1="110" x2="110" y2="120" stroke="#00d4ff" strokeWidth="2" />
              <polygon points="110,25 120,40 110,35 100,40" fill="none" stroke="#00d4ff" strokeWidth="1.5" />
              <line x1="70" y1="75" x2="40" y2="75" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />
              <line x1="150" y1="75" x2="180" y2="75" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />
              <circle cx="40" cy="75" r="3" fill="#a855f7" opacity="0.8" />
              <circle cx="180" cy="75" r="3" fill="#a855f7" opacity="0.8" />
            </svg>

            {/* Additional smaller robots */}
            <svg className="absolute top-[40%] left-[39%] w-[160px] h-[180px] opacity-10">
              <rect x="50" y="30" width="60" height="50" fill="none" stroke="#00d4ff" strokeWidth="1.5" />
              <circle cx="65" cy="45" r="6" fill="none" stroke="#a855f7" strokeWidth="1.5" />
              <circle cx="95" cy="45" r="6" fill="none" stroke="#a855f7" strokeWidth="1.5" />
              <rect x="60" y="85" width="18" height="35" fill="none" stroke="#00d4ff" strokeWidth="1.5" />
              <rect x="82" y="85" width="18" height="35" fill="none" stroke="#00d4ff" strokeWidth="1.5" />
            </svg>
          </>
        )}

        {/* Floating nodes and connections - more of them */}
        <div className="absolute top-[18%] left-[28%]">
          <div className="w-2 h-2 bg-[#00d4ff] rounded-full shadow-[0_0_20px_#00d4ff]" />
        </div>
        <div className="absolute top-[45%] right-[32%]">
          <div className="w-2 h-2 bg-[#ff0066] rounded-full shadow-[0_0_20px_#ff0066]" />
        </div>
        <div className="absolute bottom-[28%] right-[22%]">
          <div className="w-2 h-2 bg-[#a855f7] rounded-full shadow-[0_0_20px_#a855f7]" />
        </div>
        <div className="absolute top-[35%] left-[15%]">
          <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full shadow-[0_0_15px_#00d4ff]" />
        </div>
        <div className="absolute bottom-[40%] right-[18%]">
          <div className="w-1.5 h-1.5 bg-[#a855f7] rounded-full shadow-[0_0_15px_#a855f7]" />
        </div>
        <div className="absolute top-[62%] left-[40%]">
          <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full shadow-[0_0_15px_#00d4ff]" />
        </div>

        {/* Connecting lines between nodes */}
        <svg className="absolute inset-0 w-full h-full opacity-8">
          <line x1="28%" y1="18%" x2="35%" y2="40%" stroke="#00d4ff" strokeWidth="1" />
          <line x1="68%" y1="45%" x2="78%" y2="28%" stroke="#a855f7" strokeWidth="1" />
          <line x1="15%" y1="35%" x2="40%" y2="62%" stroke="#00d4ff" strokeWidth="0.8" />
        </svg>

        {/* Android/humanoid portraits - better distributed, no visible frames */}
        {/* Upper left - female android with blue hair */}
        <div className="absolute top-[6%] left-[3%] w-[320px] h-[320px] opacity-45 pointer-events-none">
          <img
            src={heroUpperLeft}
            alt=""
            className="w-full h-full object-contain object-center drop-shadow-[0_0_40px_rgba(0,212,255,0.3)]"
            style={{
              filter: 'brightness(0.75) contrast(1.15) saturate(0.85)'
            }}
          />
        </div>

        {/* Upper right - male android with helmet */}
        <div className="absolute top-[4%] right-[5%] w-[300px] h-[300px] opacity-50 pointer-events-none">
          <img
            src={heroRight}
            alt=""
            className="w-full h-full object-contain object-center drop-shadow-[0_0_35px_rgba(168,85,247,0.25)]"
            style={{
              filter: 'brightness(0.8) contrast(1.1) saturate(0.9)'
            }}
          />
        </div>

        {/* Bottom left - female android portrait */}
        <div className="absolute bottom-[12%] left-[2%] w-[280px] h-[280px] opacity-40 pointer-events-none">
          <img
            src={heroLeftPortrait}
            alt=""
            className="w-full h-full object-contain object-center drop-shadow-[0_0_30px_rgba(0,212,255,0.25)]"
            style={{
              filter: 'brightness(0.7) contrast(1.2) saturate(0.85)'
            }}
          />
        </div>

        {/* Mid-left zone - mature male android - moved away from center */}
        <div className="absolute top-[42%] left-[15%] w-[220px] h-[220px] opacity-32 pointer-events-none">
          <img
            src={androidMature}
            alt=""
            className="w-full h-full object-contain object-center drop-shadow-[0_0_28px_rgba(0,212,255,0.18)]"
            style={{
              filter: 'brightness(0.72) contrast(1.18) saturate(0.82)'
            }}
          />
        </div>

        {/* Upper-right interior - older male android with glasses - moved further right */}
        <div className="absolute top-[20%] right-[20%] w-[210px] h-[210px] opacity-35 pointer-events-none">
          <img
            src={androidOlder}
            alt=""
            className="w-full h-full object-contain object-center drop-shadow-[0_0_26px_rgba(168,85,247,0.2)]"
            style={{
              filter: 'brightness(0.75) contrast(1.15) saturate(0.8)'
            }}
          />
        </div>

        {/* Robotic animals - bottom right area, better spaced */}
        {/* Robotic dog - moved further down and right */}
        <div className="absolute bottom-[18%] right-[24%] w-[190px] h-[130px] opacity-40 pointer-events-none">
          <img
            src={heroDog}
            alt=""
            className="w-full h-full object-contain object-center drop-shadow-[0_0_24px_rgba(0,212,255,0.18)]"
            style={{
              filter: 'brightness(0.75) contrast(1.15) saturate(0.8)'
            }}
          />
        </div>

        {/* Robotic cat - moved to extreme right */}
        <div className="absolute bottom-[10%] right-[8%] w-[220px] h-[160px] opacity-45 pointer-events-none">
          <img
            src={heroCat}
            alt=""
            className="w-full h-full object-contain object-center drop-shadow-[0_0_30px_rgba(168,85,247,0.25)]"
            style={{
              filter: 'brightness(0.8) contrast(1.1) saturate(0.85)'
            }}
          />
        </div>

        {/* Robotic fox - mid-right, away from center cluster */}
        <div className="absolute top-[55%] right-[12%] w-[150px] h-[110px] opacity-36 pointer-events-none">
          <img
            src={heroFox}
            alt=""
            className="w-full h-full object-contain object-center drop-shadow-[0_0_20px_rgba(0,212,255,0.16)]"
            style={{
              filter: 'brightness(0.72) contrast(1.15) saturate(0.82)'
            }}
          />
        </div>

        {/* Hexagons and geometric shapes */}
        <svg className="absolute top-[25%] right-[45%] w-[60px] h-[60px] opacity-12">
          <polygon points="30,5 50,17 50,42 30,54 10,42 10,17" fill="none" stroke="#a855f7" strokeWidth="1.5" />
          <circle cx="30" cy="30" r="8" fill="none" stroke="#00d4ff" strokeWidth="1" />
        </svg>

        <svg className="absolute bottom-[35%] left-[45%] w-[50px] h-[50px] opacity-10">
          <polygon points="25,3 43,14 43,36 25,47 7,36 7,14" fill="none" stroke="#00d4ff" strokeWidth="1.5" />
        </svg>

        <svg className="absolute top-[70%] right-[35%] w-[45px] h-[45px] opacity-12">
          <rect x="5" y="5" width="35" height="35" fill="none" stroke="#a855f7" strokeWidth="1.5" transform="rotate(45 22.5 22.5)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="px-16 py-8">
          <div className="flex items-start gap-5 text-white">
            <div className="flex flex-col items-center w-[100px] pt-1">
              <img src={cinvestLogo} alt="CINVESTAV" className="w-14 h-14 mb-2" />
              <div className="text-[1.05rem] tracking-wide opacity-95 font-medium text-center leading-none">CINVESTAV</div>
            </div>
            <div className="flex items-start gap-4 pt-[6px] max-w-[560px]">
              <div className="text-white/80 text-[2rem] leading-none">|</div>
              <div className="text-[0.95rem] opacity-90 tracking-[0.01em] leading-[1.35] font-medium">
                <div>Centro de Investigación y de Estudios</div>
                <div>Avanzados del Instituto Politécnico Nacional</div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-16 pt-16 pb-20 min-h-[82vh] flex flex-col justify-center">
          <div className="max-w-[1580px] w-full mx-auto">
            {/* Hero title block */}
            <div className="mb-16 ml-[7%] max-w-[760px]">
              <h2 className="text-white text-[2.75rem] mb-6 tracking-wide opacity-95 font-light">
                La Computación del Siglo 21
              </h2>

              <h1 className="text-[#ff0066] mb-4" style={{
                fontSize: '3.7rem',
                lineHeight: '1.06',
                fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                fontWeight: 400,
                letterSpacing: '-0.02em'
              }}>
                entre lo natural<br />
                y lo artificial<br />
                <span className="block mt-1">de la inteligencia y la vida</span>
              </h1>

              <p className="text-white uppercase tracking-[0.3em] text-sm mt-5">
                CONCURSO DE CUENTO
              </p>
            </div>

            {/* Navigation centered below the title block */}
            <div className="max-w-[1180px] mx-auto">
              <nav className="border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="flex justify-center gap-12 px-10 h-[78px] items-center">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`h-full flex items-center text-base transition-all relative px-2 ${
                        activeTab === tab.id
                          ? 'text-white'
                          : 'text-white/60 hover:text-white/80'
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#ff0066] to-[#a855f7]" />
                      )}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="px-16 pb-24">
          <div className="max-w-[1400px] mx-auto space-y-32">
            {/* Inicio Section */}
            {activeTab === 'inicio' && (
              <section className="space-y-12">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/55">INICIO</p>
                  <h2 className="text-4xl" style={{
                    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
                  }}>
                    Convocatoria vigente
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {inicioCards.map((card) => (
                    <div key={card.title} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 min-h-[220px]">
                      <h3 className={`text-xl mb-4 ${card.accent}`}>{card.title}</h3>
                      <div className="space-y-2 text-white/75 leading-relaxed break-words">
                        {Array.isArray(card.body)
                          ? card.body.map((line) => (
                              <p key={line} className="break-all">{line}</p>
                            ))
                          : <p>{card.body}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Pueden Participar Section */}
            {activeTab === 'participar' && (
              <section className="space-y-12">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/55">PUEDEN PARTICIPAR</p>
                  <h2 className="text-4xl" style={{
                    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
                  }}>
                    Pueden participar
                  </h2>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
                  <div className="space-y-6 text-white/70 leading-relaxed text-lg max-w-4xl">
                    <p>
                      Escritores residentes en México y mexicanos residentes en el extranjero, mayores de 16 años o por cumplir esta edad en el transcurso de 2026.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Bases del Concurso Section */}
            {activeTab === 'bases' && (
              <section className="space-y-12">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/55">BASES DEL CONCURSO</p>
                  <h2 className="text-4xl" style={{
                    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
                  }}>
                    Bases del concurso
                  </h2>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
                  <div className="space-y-8">
                    {bases.map((base, index) => (
                      <div key={index + 1} className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-gradient-to-br from-[#ff0066] to-[#a855f7] flex items-center justify-center text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-white/70 leading-relaxed">{base}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {deliveryBlocks.map((block) => (
                    <div key={block.title} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                      <h3 className="text-lg mb-4 text-[#00d4ff]">{block.title}</h3>
                      <p className="text-white/70 leading-relaxed break-words">{block.body}</p>
                    </div>
                  ))}
                </div>

              </section>
            )}

            {/* 1er Concurso Section */}
            {activeTab === 'primer' && (
              <section className="space-y-12">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/55">RESUMEN</p>
                  <h2 className="text-4xl" style={{
                    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
                  }}>
                    Archivo del primer concurso
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {primerSummary.map((item, index) => (
                    <div key={item} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                      <div className={`text-sm uppercase tracking-[0.24em] mb-4 ${
                        index === 0 ? 'text-[#00d4ff]' : index === 1 ? 'text-[#a855f7]' : 'text-[#ff0066]'
                      }`}>
                        Fecha
                      </div>
                      <p className="text-white/80 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {primerBlocks.map((block) => (
                    <div key={block.title} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                      <h3 className="text-lg mb-4 text-[#00d4ff]">{block.title}</h3>
                      <div className="space-y-2 text-white/70 leading-relaxed break-words">
                        {Array.isArray(block.body)
                          ? block.body.map((line) => (
                              <p key={line} className="break-all">{line}</p>
                            ))
                          : <p>{block.body}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl" style={{
                    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
                  }}>
                    Ganadores
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {winners.map((winner) => (
                      <div key={winner.place} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                        <div className={`text-xl mb-4 ${winner.accent}`}>{winner.place}</div>
                        <h4 className="text-white text-lg mb-3">{winner.name}</h4>
                        <p className="text-white/70 leading-relaxed mb-3">{winner.story}</p>
                        <p className="text-white/60 leading-relaxed">{winner.detail}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                    <p className="text-white/70 leading-relaxed">
                      La ceremonia de premiación se llevó a cabo el viernes 5 de septiembre durante la clausura de la celebración del 25 aniversario del Departamento de Computación del CINVESTAV, en el auditorio Arturo Rosenblueth.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl" style={{
                    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
                  }}>
                    Algunas estadísticas
                  </h3>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                    <div className="space-y-4 text-white/70 leading-relaxed">
                      {statsLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                    <h3 className="text-2xl mb-6" style={{
                      fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
                    }}>
                      Entidades de procedencia
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="py-3 pr-4 text-white/85 font-medium">Entidad</th>
                            <th className="py-3 text-white/85 font-medium">Número</th>
                          </tr>
                        </thead>
                        <tbody>
                          {procedenciaRows.map(([entity, count]) => (
                            <tr key={entity} className="border-b border-white/5 last:border-b-0">
                              <td className="py-3 pr-4 text-white/70">{entity}</td>
                              <td className="py-3 text-white/70">{count}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                      <h3 className="text-2xl mb-6" style={{
                        fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
                      }}>
                        País distinto de México
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="py-3 pr-4 text-white/85 font-medium">País</th>
                              <th className="py-3 text-white/85 font-medium">Número</th>
                            </tr>
                          </thead>
                          <tbody>
                            {paisRows.map(([country, count]) => (
                              <tr key={country} className="border-b border-white/5 last:border-b-0">
                                <td className="py-3 pr-4 text-white/70">{country}</td>
                                <td className="py-3 text-white/70">{count}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                      <h3 className="text-2xl mb-6" style={{
                        fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
                      }}>
                        Jurado calificador
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="py-3 pr-4 text-white/85 font-medium">Nombre</th>
                              <th className="py-3 pr-4 text-white/85 font-medium">Profesión</th>
                              <th className="py-3 text-white/85 font-medium">Institución</th>
                            </tr>
                          </thead>
                          <tbody>
                            {juradoRows.map(([name, profession, institution]) => (
                              <tr key={name} className="border-b border-white/5 last:border-b-0 align-top">
                                <td className="py-3 pr-4 text-white/70">{name}</td>
                                <td className="py-3 pr-4 text-white/70">{profession}</td>
                                <td className="py-3 text-white/70">{institution}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Enviar Cuento y Contacto Section */}
            {activeTab === 'enviar' && (
              <section className="space-y-12">
                <div className="space-y-3">
                  <h2 className="text-4xl" style={{
                    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif'
                  }}>
                    Enviar cuento
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                    <h3 className="text-2xl mb-6 text-[#00d4ff]">Correos:</h3>

                    <div className="space-y-6">
                      <div>
                        <div className="space-y-2 text-white break-all">
                          {contactEmails.map((email) => (
                            <p key={email}>{email}</p>
                          ))}
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed mt-4">
                          Utilice cualquiera de estos correos para el envío de documentos y para solicitar confirmación de recepción.
                        </p>
                      </div>

                      <div>
                        <label className="text-sm text-white/60 uppercase tracking-wider mb-2 block">
                          Recepción de trabajos:
                        </label>
                        <p className="text-white">
                          del 8 de abril de 2026 al 22 de junio de 2026.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 space-y-4">
                        <h4 className="text-white text-lg">Los documentos requeridos son tres:</h4>
                        <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                          {envioDocuments.map((item) => (
                            <p key={item}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <div className="space-y-4 text-sm text-white/60 leading-relaxed">
                          <p>
                            Una vez recibidos los documentos solicitados, en un lapso no mayor a doce horas, se enviará un correo confirmando la recepción de los mismos. En caso de no recibir esta confirmación, favor de contactarnos.
                          </p>
                          <p>
                            Al DOCUMENTO 1 tendrán acceso los miembros del jurado. Al DOCUMENTO 2 y 3 tendrán acceso los organizadores. Una vez hecho el dictamen se empatará la información de los DOCUMENTOS 1 y 2 y se notificará a los ganadores del concurso.
                          </p>
                          <p>
                            Cordialmente,<br />
                            Matías Alvarado<br />
                            Departamento de Computación<br />
                            CINVESTAV del IPN.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                    <h3 className="text-2xl mb-6 text-[#a855f7]">Contacto</h3>

                    <div className="space-y-6">
                      <div>
                        <label className="text-sm text-white/60 uppercase tracking-wider mb-2 block">
                          Para mayores informes comunicarse con:
                        </label>
                        <p className="text-white">
                          Dr. José Matías Alvarado
                        </p>
                      </div>

                      <div>
                        <label className="text-sm text-white/60 uppercase tracking-wider mb-2 block">
                          Teléfono de la secretaría en CINVESTAV:
                        </label>
                        <p className="text-white">
                          5557473756
                        </p>
                      </div>

                      <div>
                        <label className="text-sm text-white/60 uppercase tracking-wider mb-2 block">
                          Correos:
                        </label>
                        <div className="space-y-2 text-white break-all">
                          {contactEmails.map((email) => (
                            <p key={email}>{email}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-white/60 uppercase tracking-wider mb-2 block">
                          Página web:
                        </label>
                        <p className="text-white break-all">
                          https://cinvestav.mx/investigacion/directorio-de-investigacion/jose-matias-alvarado-mentado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="px-16 py-12 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-center text-sm text-white/40">
              <p>© 2026 CINVESTAV. Todos los derechos reservados.</p>
              <p>Concurso Literario de Cuento · Computación del Siglo 21</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
