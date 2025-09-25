import "./insightsTab.css";
export default function InsightsTab() {
  return (
    <div className="insights-tab">
      <div className="grid">
        <section className="section2">
          <div className="bg-audio"></div>

          <div className="info-section-insights-tab">
            <h1>Insights em Áudio</h1>
            <p>Podcasts mensais enviados pelos gestores</p>
            <button className="btn" onClick={() => alert("Abrir Podcasts...")}>
              Ouvir Podcasts
            </button>
          </div>
        </section>

        <section className="section-insights-tab">
          <div className="bg-video"></div>

          <div className="info-section-insights-tab">
            <h1>Insights em Vídeo</h1>
            <p>Overviews em vídeo enviados mensalmente</p>
            <button className="btn" onClick={() => alert("Abrir Vídeos...")}>
              Assistir Vídeos
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
