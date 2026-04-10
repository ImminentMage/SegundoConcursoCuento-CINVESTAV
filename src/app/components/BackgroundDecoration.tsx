import robotRight from "../../assets/robots/hero-android-right.png";
import robotBottomLeft from "../../assets/robots/hero-android-bottom-left.png";
import robotLeftPortrait from "../../assets/robots/hero-android-left-portrait.png";
import robotUpperLeftPortrait from "../../assets/robots/hero-android-upper-left-portrait.png";
import robotCat from "../../assets/robots/hero-android-cat.png";
import robotDog from "../../assets/robots/hero-android-dog.png";
import robotFox from "../../assets/robots/hero-android-fox.png";

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

export function BackgroundDecoration() {
  return (
    <div className="cr-bg" aria-hidden="true">
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: "65%",
          height: "80%",
          background:
            "radial-gradient(ellipse at 68% 22%, rgba(190,155,255,0.20) 0%, rgba(88,210,235,0.09) 45%, transparent 68%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-12%",
          left: "-6%",
          width: "55%",
          height: "70%",
          background:
            "radial-gradient(ellipse at 24% 76%, rgba(70,218,192,0.18) 0%, rgba(148,245,200,0.07) 50%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "22%",
          width: "48%",
          height: "52%",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,162,192,0.07) 0%, rgba(255,202,148,0.04) 55%, transparent 72%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "8%",
          width: "42%",
          height: "55%",
          background:
            "radial-gradient(ellipse at 72% 80%, rgba(148,232,196,0.12) 0%, rgba(96,198,255,0.05) 50%, transparent 70%)",
        }}
      />

      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
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

        <path d="M 1100 395 L 978 344 L 895 296" stroke="rgba(190,158,255,0.14)" strokeWidth="1" strokeDasharray="4 8" />
        <path d="M 865 555 L 698 644 L 196 616" stroke="rgba(72,218,200,0.12)" strokeWidth="1" strokeDasharray="4 10" />
        <path d="M 558 174 L 698 214 L 825 244" stroke="rgba(255,192,124,0.13)" strokeWidth="1" strokeDasharray="3 9" />
        <path d="M 395 716 L 276 754 L 118 694" stroke="rgba(132,240,180,0.12)" strokeWidth="1" strokeDasharray="3 8" />

        <circle cx="978" cy="344" r="3.2" fill="rgba(190,158,255,0.45)" />
        <circle cx="698" cy="644" r="2.8" fill="rgba(72,218,200,0.45)" />
        <circle cx="698" cy="214" r="2.8" fill="rgba(255,192,124,0.45)" />
        <circle cx="276" cy="754" r="2.8" fill="rgba(132,240,180,0.45)" />

        {([
          [198, 78, "rgba(200,175,255,0.21)"],
          [558, 398, "rgba(72,218,200,0.21)"],
          [1018, 698, "rgba(255,155,195,0.21)"],
          [738, 818, "rgba(132,240,180,0.20)"],
          [1248, 198, "rgba(255,192,124,0.19)"],
          [98, 318, "rgba(132,198,255,0.21)"],
          [458, 758, "rgba(200,175,255,0.19)"],
        ] as [number, number, string][]).map(([cx, cy, color], i) => {
          const r = 16;
          const pts = [0, 60, 120, 180, 240, 300]
            .map((a) => {
              const rad = (a * Math.PI) / 180;
              return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`;
            })
            .join(" ");
          return (
            <polygon
              key={i}
              points={pts}
              stroke={color}
              strokeWidth="1"
              fill={color.replace(/[\d.]+\)$/, "0.05)")}
            />
          );
        })}

        {([
          [146, 178, "rgba(200,175,255,0.50)"],
          [638, 498, "rgba(72,218,200,0.52)"],
          [1188, 638, "rgba(255,155,195,0.48)"],
          [388, 358, "rgba(255,192,124,0.48)"],
          [948, 818, "rgba(132,240,180,0.48)"],
          [268, 458, "rgba(132,198,255,0.52)"],
          [1378, 348, "rgba(200,175,255,0.44)"],
        ] as [number, number, string][]).map(([x, y, c], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3.2" fill={c} />
            <circle cx={x} cy={y} r="8.5" fill={c.replace(/[\d.]+\)$/, "0.08)")} />
          </g>
        ))}

        {([
          [348, 128, "rgba(200,175,255,0.28)"],
          [878, 138, "rgba(72,218,200,0.26)"],
          [158, 538, "rgba(255,155,195,0.26)"],
          [758, 778, "rgba(255,192,124,0.26)"],
          [1228, 478, "rgba(132,240,180,0.28)"],
          [518, 858, "rgba(132,198,255,0.26)"],
        ] as [number, number, string][]).map(([x, y, c], i) => (
          <g key={i}>
            <line x1={x - 7} y1={y} x2={x + 7} y2={y} stroke={c} strokeWidth="1.1" />
            <line x1={x} y1={y - 7} x2={x} y2={y + 7} stroke={c} strokeWidth="1.1" />
          </g>
        ))}

        <polygon points="718,118 728,108 738,118 728,128" stroke="rgba(255,155,195,0.26)" strokeWidth="1" fill="rgba(255,155,195,0.06)" />
        <polygon points="1138,828 1148,818 1158,828 1148,838" stroke="rgba(200,175,255,0.26)" strokeWidth="1" fill="rgba(200,175,255,0.06)" />
        <polygon points="228,828 238,818 248,828 238,838" stroke="rgba(72,218,200,0.24)" strokeWidth="1" fill="rgba(72,218,200,0.06)" />
        <polygon points="1348,118 1358,108 1368,118 1358,128" stroke="rgba(255,192,124,0.24)" strokeWidth="1" fill="rgba(255,192,124,0.06)" />

        <circle cx="1440" cy="0" r="358" stroke="rgba(190,158,255,0.055)" strokeWidth="0.7" />
        <circle cx="1440" cy="0" r="535" stroke="rgba(88,210,235,0.042)" strokeWidth="0.55" />
        <circle cx="0" cy="900" r="288" stroke="rgba(72,218,200,0.055)" strokeWidth="0.7" />
        <circle cx="0" cy="900" r="458" stroke="rgba(132,240,180,0.038)" strokeWidth="0.5" />
      </svg>

      <img
        src={robotRight}
        alt=""
        style={{
          position: "absolute",
          top: "5%",
          right: "14%",
          width: "19%",
          maxWidth: 360,
          opacity: 0.58,
          filter: "hue-rotate(220deg) saturate(0.92) brightness(1.14) contrast(1.08)",
          mixBlendMode: "normal",
          WebkitMaskImage:
            "radial-gradient(circle at 42% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 54%, rgba(0,0,0,0.84) 76%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(circle at 42% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 54%, rgba(0,0,0,0.84) 76%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <img
        src={robotUpperLeftPortrait}
        alt=""
        style={{
          position: "absolute",
          top: "10%",
          left: "4%",
          width: "13%",
          maxWidth: 220,
          opacity: 0.32,
          filter: "hue-rotate(242deg) saturate(0.96) brightness(1.14) contrast(1.08)",
          mixBlendMode: "normal",
          WebkitMaskImage:
            "radial-gradient(circle at 42% 36%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 54%, rgba(0,0,0,0.54) 80%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(circle at 42% 36%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.96) 54%, rgba(0,0,0,0.54) 80%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <img
        src={robotLeftPortrait}
        alt=""
        style={{
          position: "absolute",
          top: "35%",
          left: "18%",
          width: "11%",
          maxWidth: 185,
          opacity: 0.27,
          filter: "hue-rotate(190deg) saturate(1) brightness(1.12) contrast(1.08)",
          mixBlendMode: "normal",
          WebkitMaskImage:
            "radial-gradient(circle at 46% 34%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 56%, rgba(0,0,0,0.62) 80%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(circle at 46% 34%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 56%, rgba(0,0,0,0.62) 80%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <img
        src={robotBottomLeft}
        alt=""
        style={{
          position: "absolute",
          bottom: "-1%",
          left: "10%",
          width: "15%",
          maxWidth: 245,
          opacity: 0.44,
          filter: "hue-rotate(155deg) saturate(0.96) brightness(1.13) contrast(1.08)",
          mixBlendMode: "normal",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 56%, rgba(0,0,0,0.72) 82%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 56%, rgba(0,0,0,0.72) 82%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <img
        src={robotDog}
        alt=""
        style={{
          position: "absolute",
          right: "39%",
          bottom: "9%",
          width: "17%",
          maxWidth: 265,
          opacity: 0.34,
          filter: "hue-rotate(208deg) saturate(0.92) brightness(1.12) contrast(1.08)",
          mixBlendMode: "normal",
          WebkitMaskImage:
            "radial-gradient(circle at 44% 48%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 58%, rgba(0,0,0,0.44) 82%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(circle at 44% 48%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 58%, rgba(0,0,0,0.44) 82%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <img
        src={robotCat}
        alt=""
        style={{
          position: "absolute",
          right: "12%",
          bottom: "22%",
          width: "14%",
          maxWidth: 220,
          opacity: 0.44,
          filter: "hue-rotate(232deg) saturate(0.98) brightness(1.14) contrast(1.08)",
          mixBlendMode: "normal",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 62%, rgba(0,0,0,0.48) 84%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(circle at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 62%, rgba(0,0,0,0.48) 84%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <img
        src={robotFox}
        alt=""
        style={{
          position: "absolute",
          top: "44%",
          right: "31%",
          width: "13%",
          maxWidth: 200,
          opacity: 0.28,
          filter: "hue-rotate(204deg) saturate(1.02) brightness(1.15) contrast(1.08)",
          mixBlendMode: "normal",
          WebkitMaskImage:
            "radial-gradient(circle at 56% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 60%, rgba(0,0,0,0.4) 84%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(circle at 56% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 60%, rgba(0,0,0,0.4) 84%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </div>
  );
}
