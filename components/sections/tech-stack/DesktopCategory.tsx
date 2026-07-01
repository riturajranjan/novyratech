import { ArrowRight } from "lucide-react";
import Icon from "./icons/Icon";
import getCategoryIcon from "./icons/getCategoryIcon";

interface Tech {
  name: string;
  category: string;
  icon: string;
  color: string;
  active?: boolean;
}

function TechCardDesktop({ tech }: { tech: Tech }) {
  return (
    <div
      className={`flex flex-col items-center gap-2.5 p-4 rounded-xl transition-all duration-200 hover:scale-[1.05] cursor-default
        ${
          tech.active
            ? "bg-[#1a0f3a] border-2 border-purple-500 shadow-[0_0_24px_rgba(168,85,247,0.3)]"
            : "bg-[#0d1525] border border-[#1e3a5f]"
        }`}
      style={{ minWidth: 108 }}>
      <Icon name={tech.icon} color={tech.color} size={42} />
      <div className="text-center">
        <div className="text-[13px] font-semibold text-white leading-tight">
          {tech.name}
        </div>
        <div className="text-[11px] text-gray-400 mt-0.5">{tech.category}</div>
      </div>
    </div>
  );
}

export const DesktopCategory = ({ cat, last }: { cat: any; last: boolean }) => {
  return (
    <div className="flex items-start gap-0">
      {/* Timeline dot */}
      <div
        className="flex flex-col items-center"
        style={{ width: 32, marginTop: 28 }}>
        <div
          className="w-3.5 h-3.5 rounded-full flex-shrink-0 ring-4 ring-[#07111e] z-10"
          style={{ background: cat.dotColor }}
        />
        {!last && (
          <div
            className="w-px flex-1 mt-1"
            style={{
              background: `linear-gradient(${cat.dotColor}80, transparent)`,
              minHeight: 32,
            }}
          />
        )}
      </div>
      {/* Card */}
      <div className="flex-1 ml-4 mb-6 rounded-2xl border border-[#1e293b] overflow-hidden bg-[#0a1222]">
        {/* Header */}
        <div
          className={`flex items-center justify-between px-6 py-2 border-b border-[#1e293b] ${cat.headerBg}`}>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: cat.iconBg }}>
              {getCategoryIcon(cat.id, 18)}
            </div>
            <h3 className="text-xl font-bold text-white">
              {cat.name}{" "}
              <span className="text-gray-400 font-normal text-lg">
                ({cat.techs.length})
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">{cat.description}</span>
            <ArrowRight size={16} style={{ color: cat.arrowColor }} />
          </div>
        </div>
        {/* Tech grid */}
        <div className="p-6">
          <div className="flex flex-wrap gap-4">
            {cat.techs.map((tech: any) => (
              <TechCardDesktop key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
