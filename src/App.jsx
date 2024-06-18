import { useState } from "react";
import EncriptadorForm from "./components/EncriptadorForm";

function App() {
  const [valorEncriptado, setValorEncriptado] = useState("");

  const handleCopiar = () => {
    navigator.clipboard.writeText(valorEncriptado);
  };

  return (
    <main className="bg-blue-50 min-h-screen flex items-center">
      <div className="mx-auto container">
        <div className="max-w-xl mx-auto flex flex-col gap-10">
          <EncriptadorForm setValorEncriptado={setValorEncriptado} />
          <div>
            {valorEncriptado ? (
              <div className="text-lg">
                <p className="mb-5 flex-wrap break-words">{valorEncriptado}</p>
                <button
                  type="button"
                  onClick={handleCopiar}
                  className="w-full py-2 rounded-full border border-red-600 text-red-600"
                >
                  Copiar
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-bold mb-0.5">
                  Ningun mensaje fue encontrado
                </h3>
                <p className="text-lg">
                  Ingresa el texto que desees encriptar o desencriptar
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
