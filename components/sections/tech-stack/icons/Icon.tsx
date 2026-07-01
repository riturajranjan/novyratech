export default function Icon({
  name,
  color,
  size = 40,
}: {
  name: string;
  color: string;
  size?: number;
}) {
  const s = size;
  switch (name) {
    case "react":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2.2" fill={color} />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="3.8"
            stroke={color}
            strokeWidth="1.1"
            fill="none"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="3.8"
            stroke={color}
            strokeWidth="1.1"
            fill="none"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="3.8"
            stroke={color}
            strokeWidth="1.1"
            fill="none"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case "nextjs":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <rect
            x="1"
            y="1"
            width="22"
            height="22"
            rx="5"
            fill="#111827"
            stroke={color}
            strokeWidth="0.8"
          />
          <text
            x="4.5"
            y="17.5"
            fontSize="13"
            fontWeight="900"
            fill={color}
            fontFamily="Arial, sans-serif">
            N
          </text>
        </svg>
      );
    case "typescript":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <rect x="1" y="1" width="22" height="22" rx="4" fill={color} />
          <text
            x="3"
            y="16.5"
            fontSize="10.5"
            fontWeight="900"
            fill="white"
            fontFamily="Arial, sans-serif">
            TS
          </text>
        </svg>
      );
    case "tailwind":
      return (
        <svg width={s} height={s} viewBox="0 0 54 33">
          <path
            d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 12.685 33.808 15.8 40.5 15.8c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C37.256 3.115 34.192 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C16.744 28.885 19.808 32 26.5 32c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.756 19.315 20.692 16.2 13.5 16.2z"
            fill={color}
          />
        </svg>
      );
    case "framer":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <path d="M5 2h14v8h-7zM5 10h7l7 7H5zM5 17h7v7z" fill={color} />
        </svg>
      );
    case "materialui":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <path
            d="M2 15.5V8l5 3V8l5 3V8l5 5-5 3v-3l-5 3v-3l-5 3V8z"
            fill={color}
            opacity="0.8"
          />
          <path d="M17 8l5 3-5 3V8z" fill={color} />
          <path
            d="M2 15.5l5 3v-3l5 3v-3l5 3-5 3-5-3-5-3z"
            fill={color}
            opacity="0.5"
          />
        </svg>
      );
    case "antdesign":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10.5"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M8 16l4-8 4 8M9.5 13.5h5"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );
    case "nodejs":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <path
            d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <text
            x="7.5"
            y="16"
            fontSize="7"
            fontWeight="900"
            fill={color}
            fontFamily="Arial, sans-serif">
            JS
          </text>
        </svg>
      );
    case "graphql":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <polygon
            points="12,2 20.66,7 20.66,17 12,22 3.34,17 3.34,7"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <circle cx="12" cy="2" r="1.4" fill={color} />
          <circle cx="20.66" cy="7" r="1.4" fill={color} />
          <circle cx="20.66" cy="17" r="1.4" fill={color} />
          <circle cx="12" cy="22" r="1.4" fill={color} />
          <circle cx="3.34" cy="17" r="1.4" fill={color} />
          <circle cx="3.34" cy="7" r="1.4" fill={color} />
          <line
            x1="3.34"
            y1="7"
            x2="20.66"
            y2="7"
            stroke={color}
            strokeWidth="1.1"
          />
          <line
            x1="3.34"
            y1="17"
            x2="20.66"
            y2="17"
            stroke={color}
            strokeWidth="1.1"
          />
          <line
            x1="12"
            y1="2"
            x2="3.34"
            y2="17"
            stroke={color}
            strokeWidth="1.1"
          />
          <line
            x1="12"
            y1="2"
            x2="20.66"
            y2="17"
            stroke={color}
            strokeWidth="1.1"
          />
          <line
            x1="12"
            y1="22"
            x2="3.34"
            y2="7"
            stroke={color}
            strokeWidth="1.1"
          />
          <line
            x1="12"
            y1="22"
            x2="20.66"
            y2="7"
            stroke={color}
            strokeWidth="1.1"
          />
        </svg>
      );
    case "rest":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <rect
            x="3"
            y="3"
            width="6"
            height="6"
            rx="1.5"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <rect
            x="15"
            y="3"
            width="6"
            height="6"
            rx="1.5"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <rect
            x="9"
            y="9"
            width="6"
            height="6"
            rx="1.5"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <rect
            x="3"
            y="15"
            width="6"
            height="6"
            rx="1.5"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <rect
            x="15"
            y="15"
            width="6"
            height="6"
            rx="1.5"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <line x1="9" y1="6" x2="6" y2="6" stroke={color} strokeWidth="1" />
          <line x1="15" y1="6" x2="18" y2="6" stroke={color} strokeWidth="1" />
          <line x1="12" y1="9" x2="12" y2="6" stroke={color} strokeWidth="1" />
          <line x1="6" y1="15" x2="6" y2="12" stroke={color} strokeWidth="1" />
          <line
            x1="18"
            y1="15"
            x2="18"
            y2="12"
            stroke={color}
            strokeWidth="1"
          />
        </svg>
      );
    case "postgresql":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <ellipse
            cx="12"
            cy="6"
            rx="8"
            ry="3"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M19.5 7.5c1.5 0 2.5 1 2.5 2.5v3"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <line
            x1="22"
            y1="10"
            x2="22"
            y2="13"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mongodb":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <path
            d="M12 2C9.5 2 7 5.5 7 9c0 5 4.5 9.5 5 13 .5-3.5 5-8 5-13 0-3.5-2.5-7-5-7z"
            fill={color}
          />
          <line
            x1="12"
            y1="19"
            x2="12"
            y2="22"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "redis":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <ellipse
            cx="12"
            cy="7"
            rx="8.5"
            ry="2.8"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M3.5 7v4.5c0 1.55 3.8 2.8 8.5 2.8s8.5-1.25 8.5-2.8V7"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M3.5 11.5v4.5c0 1.55 3.8 2.8 8.5 2.8s8.5-1.25 8.5-2.8v-4.5"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <line
            x1="7"
            y1="17.5"
            x2="17"
            y2="17.5"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mysql":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <ellipse
            cx="12"
            cy="5.5"
            rx="8.5"
            ry="2.8"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M3.5 5.5v4.5c0 1.55 3.8 2.8 8.5 2.8s8.5-1.25 8.5-2.8V5.5"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M3.5 10v4.5c0 1.55 3.8 2.8 8.5 2.8s8.5-1.25 8.5-2.8V10"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M3.5 14.5v4c0 1.55 3.8 2.8 8.5 2.8s8.5-1.25 8.5-2.8v-4"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      );
    case "aws":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <path
            d="M6.763 10.036c0 .296.032.534.088.71.064.176.144.368.256.576.04.064.056.128.056.184 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.382-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.371.7.371 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.158.167z"
            fill={color}
          />
        </svg>
      );
    case "vercel":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <path d="M12 3L24 21H0L12 3z" fill={color} />
        </svg>
      );
    case "docker":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <path
            d="M13 9h2V7h-2zM10 9h2V7h-2zM7 9h2V7H7zM7 12h2v-2H7zM10 12h2v-2h-2zM13 12h2v-2h-2z"
            fill={color}
          />
          <path
            d="M22 12.5c-.5-.3-1.5-.4-2.3-.3-.1-.9-.7-1.7-1.5-2.2l-.5-.3-.3.5c-.4.6-.5 1.6-.2 2.3-.3.2-.9.4-1.7.4H1.6c-.2 1 0 3.3 1.4 4.7.9 1 2.3 1.4 4.1 1.4 3.8 0 6.6-1.8 8-5h.7c1.3 0 2.1-.5 2.5-1.5l.2-.5-.5-.5z"
            fill={color}
          />
          <circle cx="4" cy="10.5" r="0.8" fill={color} opacity="0.6" />
        </svg>
      );
    case "kubernetes":
      return (
        <svg width={s} height={s} viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
          />
          <circle cx="12" cy="12" r="2" fill={color} />
          <line
            x1="12"
            y1="3"
            x2="12"
            y2="7"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="17"
            x2="12"
            y2="21"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <line
            x1="3"
            y1="12"
            x2="7"
            y2="12"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <line
            x1="17"
            y1="12"
            x2="21"
            y2="12"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <line
            x1="5.6"
            y1="5.6"
            x2="8.5"
            y2="8.5"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <line
            x1="15.5"
            y1="15.5"
            x2="18.4"
            y2="18.4"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <line
            x1="18.4"
            y1="5.6"
            x2="15.5"
            y2="8.5"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <line
            x1="8.5"
            y1="15.5"
            x2="5.6"
            y2="18.4"
            stroke={color}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return <div style={{ width: s, height: s }} />;
  }
}
