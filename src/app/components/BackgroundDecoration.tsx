interface RobotShapeProps {
  stroke: string;
  fill: string;
  eye: string;
  panel: string;
}

function RobotShape({ stroke, fill, eye, panel }: RobotShapeProps) {
  return (
    <>
      <line x1="60" y1="0" x2="60" y2="-28" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="60" cy="-35" r="6.5" fill={eye} stroke={stroke} strokeWidth="1.4" />
      <circle cx="60" cy="-35" r="2.5" fill={stroke} />

      <rect x="10" y="0" width="100" height="80" rx="9" fill={fill} stroke={stroke} strokeWidth="1.6" />

      <rect x="20" y="14" width="23" height="23" rx="5" fill={panel} stroke={stroke} strokeWidth="1.1" />
      <circle cx="29" cy="22" r="5" fill={eye} />
      <circle cx="29" cy="22" r="2" fill={stroke} />

      <rect x="77" y="14" width="23" height="23" rx="5" fill={panel} stroke={stroke} strokeWidth="1.1" />
      <circle cx="86" cy="22" r="5" fill={eye} />
      <circle cx="86" cy="22" r="2" fill={stroke} />

      <rect x="29" y="54" width="62" height="11" rx="5.5" fill={panel} stroke={stroke} strokeWidth="1.1" />
      <circle cx="43" cy="59.5" r="2.5" fill={stroke} opacity="0.6" />
      <circle cx="60" cy="59.5" r="2.5" fill={stroke} opacity="0.6" />
      <circle cx="77" cy="59.5" r="2.5" fill={stroke} opacity="0.6" />

      <rect x="42" y="80" width="36" height="15" rx="4" fill={fill} stroke={stroke} strokeWidth="1.1" />

      <rect x="0" y="95" width="120" height="120" rx="11" fill={fill} stroke={stroke} strokeWidth="1.6" />

      <rect x="13" y="110" width="94" height="55" rx="6" fill={panel} stroke={stroke} strokeWidth="1.1" />

      <line x1="22" y1="124" x2="98" y2="124" stroke={stroke} strokeWidth="0.7" opacity="0.55" />
      <line x1="22" y1="137" x2="74" y2="137" stroke={stroke} strokeWidth="0.7" opacity="0.55" />

      <rect x="18" y="144" width="16" height="9" rx="3" fill={eye} stroke={stroke} strokeWidth="0.65" />
      <rect x="40" y="144" width="16" height="9" rx="3" fill={eye} stroke={stroke} strokeWidth="0.65" />
      <rect x="62" y="144" width="16" height="9" rx="3" fill={eye} stroke={stroke} strokeWidth="0.65" />
      <rect x="84" y="144" width="16" height="9" rx="3" fill={eye} stroke={stroke} strokeWidth="0.65" />

      <circle cx="22" cy="180" r="5" fill={eye} stroke={stroke} strokeWidth="0.9" />
      <circle cx="41" cy="180" r="5" fill={eye} stroke={stroke} strokeWidth="0.9" />
      <circle cx="60" cy="180" r="5" fill={eye} stroke={stroke} strokeWidth="0.9" />
      <circle cx="79" cy="180" r="5" fill={eye} stroke={stroke} strokeWidth="0.9" />
      <circle cx="98" cy="180" r="5" fill={eye} stroke={stroke} strokeWidth="0.9" />

      <rect x="-28" y="100" width="25" height="85" rx="10" fill={fill} stroke={stroke} strokeWidth="1.4" />
      <rect x="-28" y="123" width="25" height="9" fill={panel} />
      <rect x="-30" y="185" width="28" height="21" rx="6" fill={fill} stroke={stroke} strokeWidth="1.4" />

      <rect x="123" y="100" width="25" height="85" rx="10" fill={fill} stroke={stroke} strokeWidth="1.4" />
      <rect x="123" y="123" width="25" height="9" fill={panel} />
      <rect x="122" y="185" width="28" height="21" rx="6" fill={fill} stroke={stroke} strokeWidth="1.4" />

      <rect x="9" y="215" width="44" height="80" rx="11" fill={fill} stroke={stroke} strokeWidth="1.4" />
      <rect x="4" y="291" width="50" height="20" rx="7" fill={fill} stroke={stroke} strokeWidth="1.4" />

      <rect x="67" y="215" width="44" height="80" rx="11" fill={fill} stroke={stroke} strokeWidth="1.4" />
      <rect x="62" y="291" width="50" height="20" rx="7" fill={fill} stroke={stroke} strokeWidth="1.4" />
    </>
  );
}

export function VectorRobotOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(1055, 18) scale(1.82)">
        <RobotShape
          stroke="rgba(200,175,255,0.30)"
          fill="rgba(200,175,255,0.065)"
          eye="rgba(200,175,255,0.36)"
          panel="rgba(200,175,255,0.055)"
        />
      </g>

      <g transform="translate(-42, 438) scale(1.42)">
        <RobotShape
          stroke="rgba(72,218,200,0.28)"
          fill="rgba(72,218,200,0.06)"
          eye="rgba(72,218,200,0.36)"
          panel="rgba(72,218,200,0.052)"
        />
      </g>

      <g transform="translate(784, 205) scale(1.02)">
        <RobotShape
          stroke="rgba(255,155,195,0.26)"
          fill="rgba(255,155,195,0.058)"
          eye="rgba(255,155,195,0.33)"
          panel="rgba(255,155,195,0.050)"
        />
      </g>

      <g transform="translate(295, 596) scale(0.70)">
        <RobotShape
          stroke="rgba(132,240,180,0.26)"
          fill="rgba(132,240,180,0.058)"
          eye="rgba(132,240,180,0.35)"
          panel="rgba(132,240,180,0.050)"
        />
      </g>

      <g transform="translate(464, -58) scale(0.88)">
        <RobotShape
          stroke="rgba(255,192,124,0.24)"
          fill="rgba(255,192,124,0.052)"
          eye="rgba(255,192,124,0.32)"
          panel="rgba(255,192,124,0.046)"
        />
      </g>

      <g transform="translate(1305, 496) scale(0.63)">
        <RobotShape
          stroke="rgba(132,198,255,0.26)"
          fill="rgba(132,198,255,0.058)"
          eye="rgba(132,198,255,0.35)"
          panel="rgba(132,198,255,0.050)"
        />
      </g>
    </svg>
  );
}

export function BackgroundDecoration() {
  return (
    <div className="cr-bg" aria-hidden="true">
      <VectorRobotOverlay />
    </div>
  );
}
