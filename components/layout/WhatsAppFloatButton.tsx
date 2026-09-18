import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function WhatsAppFloatButton() {
  return (
    <a
      href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hi Novyra, I'd like to talk about a project.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Novyra on WhatsApp"
      className="whatsapp-float md:hidden"
    >
      <MessageCircle aria-hidden />
    </a>
  );
}
