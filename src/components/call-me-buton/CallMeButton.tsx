import "./call-me-button.css";
export default function CallMeButton() {
  const handClick = () => {
    window.open("https://wa.me/5513991989011", "_blank");
  };

  return (
    <button className="call-me-btn" onClick={handClick}>
      <img
        src="/icons/whatsapp.png"
        alt="WhatsApp"
        className="call-me-btn-img"
      />
      <span className="callme-text">FALE AGORA</span>
    </button>
  );
}
