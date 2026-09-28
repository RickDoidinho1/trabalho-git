export default function MeuApp() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold">Bem-Vindo ao ProjetoGames</h1>
      </div>
  );
}
export function MeuVideo() {
    const videoId = "wSm9GTUttBs";
    return (
    <div style={{ width: "800px", maxWidth: "100%", margin: "0 auto", padding: "16px" }}>
      <h2 className="text-2xl font-bold"> GTA 6 (Grand Theft Auto 6) - Official Extended Gameplay </h2>

      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%", /* proporção 16:9 */
          height: 0,
          overflow: "hidden",
          borderRadius: "8px"
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/{wSm9GTUttBs}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          title="Player de Vídeo do YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          
        />
      </div>
        <p className="mt-3">
         O vídeo acima é uma demonstração oficial do gameplay estendido de GTA 6 (Grand Theft Auto 6), um dos jogos mais aguardados da série.<br /> 
         Ele oferece aos jogadores uma visão detalhada do mundo aberto, mecânicas de jogo, gráficos aprimorados e a narrativa envolvente que a franquia é conhecida por oferecer.<br/> 
         Este vídeo serve como uma prévia emocionante para os fãs, destacando os elementos inovadores e a evolução da experiência de jogo em comparação com os títulos anteriores da série.<br/>
        
        </p>
    </div>
  );
}
