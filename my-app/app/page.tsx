import MeuApp, { MeuVideo } from "../app/components/meuapp"; // ou '../componentes/meuapp' dependendo da sua estrutura
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <Navbar></Navbar>
      <MeuApp />
      <MeuVideo></MeuVideo>
    </main>
  );
}