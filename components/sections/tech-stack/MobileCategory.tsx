"use client";

import { useState } from "react";
import getCategoryIcon from "./icons/getCategoryIcon";
import { ChevronDown, ChevronUp } from "lucide-react";
import Icon from "./icons/Icon";

function TechCardMobile({ tech }: { tech: any }) {
  return (
    <div
      className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all duration-150 hover:scale-[1.04] cursor-default
        ${
          tech.active
            ? "bg-[#1a0f3a] border border-purple-500"
            : "bg-[#0d1525] border border-[#1e3a5f]"
        }`}>
      <Icon name={tech.icon} color={tech.color} size={30} />
      <span className="text-[10px] text-gray-300 font-medium text-center leading-tight">
        {tech.name}
      </span>
    </div>
  );
}

export default function MobileCategory({ cat }: { cat: any }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="rounded-2xl border border-[#1e293b] overflow-hidden bg-[#0a1222]">
      <button
        className={`w-full flex items-center justify-between px-4 py-1 ${cat.headerBg} transition-colors`}
        onClick={() => setOpen((v) => !v)}>
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: cat.iconBg }}>
            {getCategoryIcon(cat.id, 16)}
          </div>
          <span className="text-white font-bold text-[15px]">{cat.name}</span>
          <span className="text-gray-400 text-sm">({cat.techs.length})</span>
        </div>
        {open ? (
          <ChevronUp size={18} className="text-gray-400" />
        ) : (
          <ChevronDown size={18} className="text-gray-400" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-4 pt-3 grid grid-cols-4 gap-2.5">
          {cat.techs.map((tech: any) => (
            <TechCardMobile key={tech.name} tech={tech} />
          ))}
        </div>
      )}
    </div>
  );
}
