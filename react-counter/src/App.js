import Counter from './components/counter';
import './App.css';

function App() {
  return (
    <div className="App bg-violet-950 flex flex-col items-center justify-center min-h-screen">
      <header>
       <h1 className="text-white text-2xl font-bold pb-4">Simple Counter</h1>
      </header>
      <main>
        <Counter />
      </main>
    </div>
  );
}

export default App;
