import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="w-full flex flex-col items-center min-h-screen bg-slate-200">
      <Navbar />
      <Hero />
      <p className="text-xl">portfolio</p>
    </main>
  );
}

export default App;
