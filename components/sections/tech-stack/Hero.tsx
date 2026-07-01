export const Hero3D = () => {
  return (
    <div className="relative w-52 h-44 flex items-center justify-center select-none">
      <div
        className="absolute inset-0 blur-3xl rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.45) 0%, transparent 70%)",
        }}
      />
      {/* Layer 3 (bottom) */}
      <div
        className="absolute w-36 h-14 rounded-2xl border border-purple-700/50"
        style={{
          background: "linear-gradient(135deg, #1a0f3a 0%, #2d1b69 100%)",
          transform:
            "perspective(400px) rotateX(30deg) rotateY(-8deg) translateY(30px)",
          boxShadow: "0 8px 32px rgba(139,92,246,0.2)",
        }}
      />
      {/* Layer 2 */}
      <div
        className="absolute w-36 h-14 rounded-2xl border border-purple-500/60"
        style={{
          background: "linear-gradient(135deg, #2d1b69 0%, #4c1d95 100%)",
          transform:
            "perspective(400px) rotateX(30deg) rotateY(-8deg) translateY(12px)",
          boxShadow: "0 6px 24px rgba(139,92,246,0.3)",
        }}
      />
      {/* Layer 1 (top) */}
      <div
        className="absolute w-36 h-14 rounded-2xl border-2 border-purple-400/80 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)",
          transform:
            "perspective(400px) rotateX(30deg) rotateY(-8deg) translateY(-6px)",
          boxShadow:
            "0 4px 20px rgba(167,139,250,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
        }}>
        <span
          style={{
            transform: "perspective(400px) rotateX(-30deg) rotateY(8deg)",
          }}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e9d5ff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </span>
      </div>
      {/* Sparkles */}
      <div className="absolute top-4 right-8 w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
      <div
        className="absolute top-8 right-4 w-1 h-1 rounded-full bg-purple-400 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"
        style={{ animationDelay: "0.8s" }}
      />
    </div>
  );
};
