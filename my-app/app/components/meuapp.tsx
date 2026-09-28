export default function MeuApp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Bem-Vindo ao ProjetoGames</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is a simple Next.js application with a custom layout.
      </p>
    </div>
  );
}
export function MeuVideo() {
    const videoId = "wSm9GTUttBs";
    return (
    <div style={{ width: "800px", maxWidth: "100%", margin: "0 auto", padding: "16px" }}>
      <h2>GTA 6 (Grand Theft Auto 6) - Official Extended Gameplay</h2>

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
    </div>
  );
}
