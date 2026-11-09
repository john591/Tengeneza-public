/** Decorative city map: streets, water, parks and pothole pins colored by severity.
 *  Pure SVG (no map tiles, no API key). Locations are illustrative. */

const major = [
  "M-20 180 C 300 140, 600 260, 900 210 S 1300 120 1460 160",
  "M-20 560 C 250 600, 520 480, 820 540 S 1250 640 1460 590",
  "M240 -20 C 280 200, 200 420, 330 600 S 380 800 360 840",
  "M780 -20 C 760 200, 900 380, 860 560 S 960 760 1000 840",
  "M1180 -20 C 1200 160, 1120 360, 1240 520 S 1300 760 1280 840",
];
const minorH = [80, 300, 380, 460, 700, 770];
const minorV = [100, 520, 650, 1050, 1350];
const parks = [
  { x: 420, y: 300, w: 170, h: 110 },
  { x: 980, y: 400, w: 150, h: 110 },
  { x: 40, y: 400, w: 130, h: 90 },
];

type Pin = { x: number; y: number; sev: 1 | 2 | 3 | 4 | 5; label?: string };
const pins: Pin[] = [
  { x: 150, y: 120, sev: 3, label: "4.3217° S · 15.3069° E" },
  { x: 470, y: 232, sev: 4 },
  { x: 625, y: 425, sev: 5 },
  { x: 960, y: 122, sev: 4 },
  { x: 1105, y: 305, sev: 5 },
  { x: 1320, y: 238, sev: 3 },
  { x: 720, y: 640, sev: 4 },
  { x: 300, y: 505, sev: 2, label: "4.3351° S · 15.3120° E" },
  { x: 1020, y: 565, sev: 3 },
  { x: 1250, y: 440, sev: 4 },
  { x: 62, y: 305, sev: 2 },
  { x: 560, y: 752, sev: 3, label: "4.3302° S · 15.3188° E" },
];
const color = (s: number) => (s >= 4 ? "#e0482c" : s === 3 ? "#facb3a" : "#03a14a");

export default function ProblemMap() {
  return (
    <svg className="pmap" viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width="1440" height="820" fill="#eaf2ec" />
      {parks.map((p, i) => <rect key={i} x={p.x} y={p.y} width={p.w} height={p.h} rx="18" fill="#d6ecdc" />)}
      <path d="M-20 700 C 300 720, 600 640, 900 700 S 1300 760 1460 720" fill="none" stroke="#c9e3ee" strokeWidth="70" strokeLinecap="round" />
      {/* minor streets */}
      <g stroke="#fff" strokeWidth="5" strokeLinecap="round">
        {minorH.map((y) => <line key={y} x1="-20" x2="1460" y1={y} y2={y + (y % 3) * 6} />)}
        {minorV.map((x) => <line key={x} y1="-20" y2="840" x1={x} x2={x + 14} />)}
      </g>
      {/* major roads: casing then fill */}
      <g fill="none" strokeLinecap="round">
        {major.map((d, i) => <path key={"c" + i} d={d} stroke="#cdd9d1" strokeWidth="20" />)}
        {major.map((d, i) => <path key={"f" + i} d={d} stroke="#fff" strokeWidth="14" />)}
        {major.map((d, i) => <path key={"m" + i} d={d} stroke="#e6ece8" strokeWidth="2" strokeDasharray="14 12" />)}
      </g>
      {/* pins */}
      {pins.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`}>
          <circle className="pin-pulse" r="16" fill={color(p.sev)} style={{ animationDelay: `${(i % 5) * 0.55}s` }} />
          <path d="M0 0 C-9 -13 -14 -20 -14 -28 a14 14 0 1 1 28 0 c0 8 -5 15 -14 28z" fill={color(p.sev)} stroke="#fff" strokeWidth="2.5" />
          <circle cy="-28" r="5.5" fill="#fff" />
          {p.label && (
            <g transform="translate(20 -44)">
              <rect width="152" height="24" rx="12" fill="#fff" stroke="#d6e0d9" />
              <text x="76" y="16" textAnchor="middle" fontFamily="var(--mono)" fontSize="11" fontWeight="600" fill="#0f2a1b">{p.label}</text>
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}
