export default function MeuApp() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold mb-4 mt-2">
        Novo Trailer do GTA6
        </h1>
      <p className="space-y-1">
        Confira o novo trailer de gameplay estendido de Grand Theft Auto VI, o aguardado próximo capítulo da famosa franquia de mundo aberto da Rockstar Games.<br/> 
        A narrativa acompanha a dupla Jason e Lucia nas ruas de uma Vice City moderna, em uma jornada repleta de ação, impacto e o humor ácido característico da série.<br/> 
        As imagens, gravadas diretamente no PlayStation 5, destacam trechos de missões, diálogos, combate e mecânicas de jogo.<br/> 
        GTA 6 chega oficialmente em 19 de novembro para PS5 e Xbox Series X|S.<br/>
        </p>
      </div>
  );
}
export function MeuVideo() {
    const videoId = "wSm9GTUttBs";
    return (
    <div style={{ width: "800px", maxWidth: "100%", margin: "0 auto", padding: "16px" }}>
      <h2 className="text-2xl font-bold text-center"> GTA 6 (Grand Theft Auto 6) - Official Extended Gameplay </h2>

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
        <p className="mt-4 space-y-2">
         O vídeo acima é uma demonstração oficial do gameplay estendido de GTA 6 (Grand Theft Auto 6), um dos jogos mais aguardados da série.<br /> 
         Ele oferece aos jogadores uma visão detalhada do mundo aberto, mecânicas de jogo, gráficos aprimorados e a narrativa envolvente que a franquia é conhecida por oferecer.<br/> 
         Este vídeo serve como uma prévia emocionante para os fãs, destacando os elementos inovadores e a evolução da experiência de jogo em comparação com os títulos anteriores da série.<br/>
         Através deste gameplay estendido, os jogadores podem antecipar a imersão e a complexidade que GTA 6 promete trazer, reforçando a expectativa e o entusiasmo em torno do lançamento do jogo.<br/>
        </p>
    </div>
  );
}