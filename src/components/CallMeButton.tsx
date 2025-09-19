export default function CallMeButton() {
  const handClick = () => {
    window.open("https://wa.me/5513991989011", "_blank");
  };

  return (
    <>
      <button className="call-me-btn" onClick={handClick}>
        <img
          src="/icons/whatsapp.png"
          alt="WhatsApp"
          style={{ width: 24, height: 24 }}
        />
        <span className="callme-text">FALE AGORA</span>
      </button>
      <style>{`
        .call-me-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #e6f632;
          color: #34372e;
          border: none;
          border-radius: 8px;
          padding: 8px 16px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s;
        }
        .call-me-btn:hover {
          background: #ef233c;
          color: #ffffff;
        }
        .call-me-btn:hover img {
          filter: brightness(0) invert(1);
        }
        .callme-text {
          display: inline-block;
        }
        @media (max-width: 600px) {
          .callme-text {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
