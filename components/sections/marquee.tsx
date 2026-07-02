"use client";

/* ─── Tech Icon SVGs ─────────────────────────────────────────────────────── */
const NodejsIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <polygon
      points="24,4 44,16 44,32 24,44 4,32 4,16"
      fill="rgba(68,136,62,0.15)"
      stroke="none"
    />
    <text
      x="24"
      y="28"
      textAnchor="middle"
      fontSize="11"
      fontWeight="700"
      fill="#74b741"
      fontFamily="monospace">
      Node
    </text>
    <text
      x="24"
      y="38"
      textAnchor="middle"
      fontSize="8"
      fill="#74b741"
      fontFamily="monospace">
      .js
    </text>
    <polygon
      points="24,4 44,16 44,32 24,44 4,32 4,16"
      fill="none"
      stroke="#74b741"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

const GraphQLIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const a = ((i * 60 - 90) * Math.PI) / 180;
      const x = 24 + 16 * Math.cos(a);
      const y = 24 + 16 * Math.sin(a);
      const nx = 24 + 16 * Math.cos(a + Math.PI / 3);
      const ny = 24 + 16 * Math.sin(a + Math.PI / 3);
      return (
        <line
          key={i}
          x1={x}
          y1={y}
          x2={nx}
          y2={ny}
          stroke="#e535ab"
          strokeWidth="2.2"
        />
      );
    })}
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const a = ((i * 60 - 90) * Math.PI) / 180;
      const x = 24 + 16 * Math.cos(a);
      const y = 24 + 16 * Math.sin(a);
      const ox = 24 + 16 * Math.cos(a + (3 * Math.PI) / 3);
      const oy = 24 + 16 * Math.sin(a + (3 * Math.PI) / 3);
      return (
        <line
          key={i}
          x1={x}
          y1={y}
          x2={ox}
          y2={oy}
          stroke="#e535ab"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
      );
    })}
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const a = ((i * 60 - 90) * Math.PI) / 180;
      const x = 24 + 16 * Math.cos(a);
      const y = 24 + 16 * Math.sin(a);
      return <circle key={i} cx={x} cy={y} r="2.8" fill="#e535ab" />;
    })}
    <circle cx="24" cy="24" r="3" fill="#e535ab" />
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <ellipse
      cx="24"
      cy="16"
      rx="14"
      ry="7"
      fill="rgba(49,99,156,0.2)"
      stroke="#336791"
      strokeWidth="2"
    />
    <path
      d="M10 16 Q10 36 24 36 Q38 36 38 16"
      fill="rgba(49,99,156,0.15)"
      stroke="#336791"
      strokeWidth="2"
    />
    <path
      d="M10 22 Q24 29 38 22"
      stroke="#336791"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M32 14 Q36 10 38 16 L38 28"
      stroke="#6ca0dc"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <path
      d="M24 6 C24 6 36 16 36 26 C36 36 30 40 24 42 C18 40 12 36 12 26 C12 16 24 6 24 6Z"
      fill="rgba(0,128,0,0.15)"
      stroke="#4db33d"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <line
      x1="24"
      y1="40"
      x2="24"
      y2="46"
      stroke="#4db33d"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line
      x1="24"
      y1="26"
      x2="27"
      y2="20"
      stroke="#4db33d"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.6"
    />
  </svg>
);

const RedisIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    {[0, 1, 2].map((i) => (
      <g key={i} transform={`translate(0, ${i * 7})`}>
        <ellipse
          cx="24"
          cy="18"
          rx="14"
          ry="5"
          fill={i === 0 ? "rgba(196,20,20,0.25)" : "rgba(196,20,20,0.15)"}
          stroke="#dc143c"
          strokeWidth="1.8"
        />
      </g>
    ))}
    <line x1="10" y1="18" x2="10" y2="32" stroke="#dc143c" strokeWidth="1.8" />
    <line x1="38" y1="18" x2="38" y2="32" stroke="#dc143c" strokeWidth="1.8" />
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <path
      d="M8 8 C8 8 10 20 10 28 C10 34 14 40 14 40"
      stroke="#00758f"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M14 40 C14 40 16 34 24 34 C32 34 34 40 34 40"
      stroke="#00758f"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M34 40 C34 40 36 34 38 28 C40 22 40 8 40 8"
      stroke="#00758f"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M34 40 L42 30"
      stroke="#f29111"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <text
      x="24"
      y="22"
      textAnchor="middle"
      fontSize="11"
      fontWeight="900"
      fill="#FF9900"
      fontFamily="Arial, sans-serif">
      aws
    </text>
    <path
      d="M13 30 Q24 38 35 30"
      stroke="#FF9900"
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M35 30 L38 27"
      stroke="#FF9900"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13 30 L10 27"
      stroke="#FF9900"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <polygon points="24,10 40,38 8,38" fill="white" opacity="0.9" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <rect
      x="8"
      y="20"
      width="7"
      height="6"
      rx="1.5"
      fill="#2496ed"
      opacity="0.9"
    />
    <rect
      x="17"
      y="14"
      width="7"
      height="6"
      rx="1.5"
      fill="#2496ed"
      opacity="0.9"
    />
    <rect
      x="17"
      y="20"
      width="7"
      height="6"
      rx="1.5"
      fill="#2496ed"
      opacity="0.9"
    />
    <rect
      x="26"
      y="14"
      width="7"
      height="6"
      rx="1.5"
      fill="#2496ed"
      opacity="0.9"
    />
    <rect
      x="26"
      y="20"
      width="7"
      height="6"
      rx="1.5"
      fill="#2496ed"
      opacity="0.9"
    />
    <rect
      x="35"
      y="20"
      width="5"
      height="6"
      rx="1.5"
      fill="#2496ed"
      opacity="0.6"
    />
    <path
      d="M8 28 C8 28 9 34 18 34 L36 34 C42 34 42 28 42 28"
      stroke="#2496ed"
      strokeWidth="1.8"
      fill="none"
    />
    <path
      d="M38 24 C42 22 44 25 44 25"
      stroke="#2496ed"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const KubernetesIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    {[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const a = (((i * 360) / 7 - 90) * Math.PI) / 180;
      return (
        <circle
          key={i}
          cx={24 + 16 * Math.cos(a)}
          cy={24 + 16 * Math.sin(a)}
          r="2.5"
          fill="#326ce5"
        />
      );
    })}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const a = (((i * 360) / 7 - 90) * Math.PI) / 180;
      return (
        <line
          key={i}
          x1="24"
          y1="24"
          x2={24 + 16 * Math.cos(a)}
          y2={24 + 16 * Math.sin(a)}
          stroke="#326ce5"
          strokeWidth="1.8"
          strokeOpacity="0.6"
        />
      );
    })}
    <circle cx="24" cy="24" r="4" fill="#326ce5" />
    <circle
      cx="24"
      cy="24"
      r="16"
      fill="none"
      stroke="#326ce5"
      strokeWidth="1.5"
      strokeOpacity="0.35"
    />
  </svg>
);

const OpenAIIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const a1 = (i * 60 * Math.PI) / 180;
      const a2 = ((i * 60 + 60) * Math.PI) / 180;
      const x1 = 24 + 17 * Math.cos(a1);
      const y1 = 24 + 17 * Math.sin(a1);
      const x2 = 24 + 17 * Math.cos(a2);
      const y2 = 24 + 17 * Math.sin(a2);
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.8"
        />
      );
    })}
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const a = ((i * 60 + 30) * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={24 + 17 * Math.cos((i * 60 * Math.PI) / 180)}
          y1={24 + 17 * Math.sin((i * 60 * Math.PI) / 180)}
          x2={24 + 8 * Math.cos(a)}
          y2={24 + 8 * Math.sin(a)}
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
      );
    })}
    <circle
      cx="24"
      cy="24"
      r="5"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeOpacity="0.85"
    />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <ellipse
      cx="24"
      cy="24"
      rx="18"
      ry="7"
      fill="none"
      stroke="#61dafb"
      strokeWidth="2"
    />
    <ellipse
      cx="24"
      cy="24"
      rx="18"
      ry="7"
      fill="none"
      stroke="#61dafb"
      strokeWidth="2"
      transform="rotate(60 24 24)"
    />
    <ellipse
      cx="24"
      cy="24"
      rx="18"
      ry="7"
      fill="none"
      stroke="#61dafb"
      strokeWidth="2"
      transform="rotate(120 24 24)"
    />
    <circle cx="24" cy="24" r="3" fill="#61dafb" />
  </svg>
);

const NextjsIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <circle
      cx="24"
      cy="24"
      r="18"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeOpacity="0.7"
    />
    <text
      x="24"
      y="29"
      textAnchor="middle"
      fontSize="13"
      fontWeight="800"
      fill="white"
      fontFamily="Arial, sans-serif">
      N
    </text>
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <rect
      x="8"
      y="8"
      width="32"
      height="32"
      rx="4"
      fill="#3178c6"
      opacity="0.25"
    />
    <text
      x="24"
      y="30"
      textAnchor="middle"
      fontSize="16"
      fontWeight="900"
      fill="#3178c6"
      fontFamily="Arial, sans-serif">
      TS
    </text>
  </svg>
);

const StripeIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <path
      d="M22 16 C22 14 24 12 28 12 C32 12 34 14 34 17 C34 20 32 22 28 22 L20 22 C16 22 14 24 14 27 C14 32 18 36 26 36 C30 36 34 34 36 31"
      stroke="#635bff"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const LangChainIcon = () => (
  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
    <path
      d="M10 24 L14 18 L18 24 L14 30 Z"
      fill="none"
      stroke="#10b981"
      strokeWidth="2"
    />
    <path
      d="M22 24 L26 18 L30 24 L26 30 Z"
      fill="none"
      stroke="#10b981"
      strokeWidth="2"
    />
    <path
      d="M34 24 L38 18 L42 24 L38 30 Z"
      fill="none"
      stroke="#10b981"
      strokeWidth="2"
    />
    <line x1="18" y1="24" x2="22" y2="24" stroke="#10b981" strokeWidth="2" />
    <line x1="30" y1="24" x2="34" y2="24" stroke="#10b981" strokeWidth="2" />
  </svg>
);

/* ─── Tech Items ─────────────────────────────────────────────────────────── */
const techItems = [
  { name: "Node.js", icon: NodejsIcon },
  { name: "GraphQL", icon: GraphQLIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "Redis", icon: RedisIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "AWS", icon: AWSIcon },
  { name: "Vercel", icon: VercelIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Kubernetes", icon: KubernetesIcon },
  { name: "OpenAI", icon: OpenAIIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Stripe", icon: StripeIcon },
  { name: "LangChain", icon: LangChainIcon },
];

/* ─── Dot Separator ─────────────────────────────────────────────────────── */
function Dot() {
  return (
    <span className="flex items-center justify-center shrink-0 w-6">
      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
    </span>
  );
}

/* ─── Single Tech Card ───────────────────────────────────────────────────── */
function TechCard({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ComponentType;
}) {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0 select-none">
      {/* Icon box */}
      <div
        className="flex h-[88px] w-[88px] items-center justify-center rounded-[22px]"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 2px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}>
        <Icon />
      </div>
      {/* Label */}
      <span className="text-[13px] font-medium text-white/75 tracking-wide whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

/* ─── Component ─────────────────────────────────────────────────────────── */
export function Marquee() {
  const doubled = [...techItems, ...techItems];

  return (
    <section
      className="relative overflow-hidden py-14 mt-6"
      style={{ background: "#0f0f1a63" }}>
      {/* Subtle top + bottom border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Scroll track */}
      <div className="mask-fade-x overflow-hidden">
        <div
          className="flex w-max items-end gap-0"
          style={{ animation: "marquee 55s linear infinite" }}>
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center">
              <TechCard name={item.name} icon={item.icon} />
              <Dot />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient pill bar */}
      <div className="mt-8 flex justify-center">
        <div
          className="h-1 w-40 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #7c3aed 0%, #a855f7 30%, #ec4899 65%, #f97316 100%)",
            boxShadow: "0 0 16px rgba(168,85,247,0.55)",
          }}
        />
      </div>
    </section>
  );
}
