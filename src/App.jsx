import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Tailwind CSS in Vite + React
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 w-96 text-center bg-blue-600">
        <p className="text-lg text-gray-700 font-semibold">
          Click the button to increase the count:
        </p>

        <button
          onClick={() => setCount((count) => count + 1)}
          className="mt-4 px-6 py-3 bg-blue-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          Count is {count}
        </button>
      </div>

      {/* Tailwind Test Section */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          Red Box
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          Green Box
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          Yellow Box
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          Blue Box
        </div>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-500">Tailwind is working if styles apply!</p>
    </div>
  );
}

export default App;
