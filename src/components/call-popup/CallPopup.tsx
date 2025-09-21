import "./callPopup.css";

type PopupProps = {
  message: string;
  onClose?: () => void;
};

export default function CallPopup({ message, onClose }: PopupProps) {
  return (
    <div className="popup-animate" role="alert">
      <div className="popup-animate-content">
        <span>{message}</span>
        {onClose && (
          <div className="popup-animate-actions">
            <button id="ok-button" onClick={onClose}>
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
