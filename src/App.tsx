import GameBoard from "./components/Game/GameBoard";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <header>
        <div className="container text-center p-4">
          <h1 className="font-bold text-2xl md:text-5xl">
            <span className="text-yellow-300">Lights </span>
            <span className="text-slate-500">Out</span>
          </h1>
        </div>
      </header>
      <main className="container w-3/4 sm:w-1/2 md:w-5/12 lg:w-1/3">
        <GameBoard />
      </main>
      <footer className="container text-center mt-8">
        <p className="text-gray-600 text-sm">
          Made by Andrey Karnauch &copy; 2021
        </p>
      </footer>
    </div>
  );
}

export default App;
