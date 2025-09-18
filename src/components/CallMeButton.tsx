import { useState } from "react";
import CallPopup from "./CallPoppup";

export default function CallMeButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#e6f632",
          color: "#34372e",
          border: "none",
          borderRadius: 8,
          padding: "8px 16px",
          cursor: "pointer",
          fontWeight: 600,
        }}
        onClick={() => setShowPopup(true)}
      >
        <img
          src="/icons/whatsapp.png"
          alt="WhatsApp"
          style={{ width: 24, height: 24 }}
        />
        <span className="callme-text" style={{ display: "inline-block" }}>
          FALE AGORA
        </span>
        <style>{`
          @media (max-width: 600px) {
            .callme-text {
              display: none !important;
            }
          }
        `}</style>
      </button>
      {showPopup && (
        <CallPopup
          message="Você clicou no botão FALE AGORA!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
