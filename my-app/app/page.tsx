import MeuApp, { MeuVideo } from "../app/components/meuapp";

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <MeuApp />
      <MeuVideo></MeuVideo>
    </main>
  );
}