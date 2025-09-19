type PopupProps = {
  message: string;
  onClose?: () => void;
};

export default function CallPopup({ message, onClose }: PopupProps) {
  return (
    <div
      className="popup-animate"
      style={{
        position: "fixed",
        left: "50%",
        top: "3.5rem", // distância considerável do topo
        transform: "translateX(-50%)",
        padding: "1rem",
        borderRadius: "1rem",
        border: "1px solid #ffffff",
        boxShadow: "0 2px 16px #0004",
        color: "var(--color-text, #f7f7f7)",
        background: "#bdbdbdff",
        maxWidth: "90vw",
        wordBreak: "break-word",
        zIndex: 1000,
        animation: "slideDown 0.6s cubic-bezier(.68,-0.55,.27,1.55)",
      }}
      role="alert"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 12,
          position: "relative",
        }}
      >
        <span>{message}</span>
        {onClose && (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={onClose}
              style={{
                background: "transparent",
                border: "1px solid var(--color-text, #f7f7f7)",
                borderRadius: "20px",
                color: "inherit",
                fontSize: "15px",
                cursor: "pointer",
                height: "32px",
                maxWidth: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              OK
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes slideDown {
          0% {
            top: -6rem;
            opacity: 0;
          }
          100% {
            top: 3.5rem;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
