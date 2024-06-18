import { useState } from "react";

// eslint-disable-next-line react/prop-types
function EncriptadorForm({ setValorEncriptado }) {
  const [valor, setValor] = useState("");

  const mayusculas = /[A-Z]/g;
  const caracteres = /[~!@#$%^&*()_+|}{[\]\\/?><:"`;.,áéíóúàèìòù']/g;
  const llaves = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };

  const handleChange = (e) => {
    setValor(e.target.value);
  };

  const validarValor = (valorIngresado) => {
    if (valorIngresado.match(mayusculas) || valorIngresado.match(caracteres)) {
      alert(
        "El texto ingresado no debe tener caracteres especiales ni mayusculas"
      );
      setValorEncriptado("");
      return false;
    } else if (valorIngresado === "") {
      alert("Ingresa un texto para ser encriptado");
      setValorEncriptado("");
      return false;
    }
    return true;
  };

  const handleEncriptar = () => {
    if (validarValor(valor)) {
      let textoIngresado = valor;
      let textoEncriptado = "";
      for (let obj in llaves) {
        textoEncriptado = textoIngresado.replaceAll(obj, llaves[obj]);
        textoIngresado = textoEncriptado;
      }
      setValorEncriptado(textoEncriptado);
    }
  };

  const handleDesencriptar = () => {
    if (validarValor(valor)) {
      let textoIngresado = valor;
      let textoDesencriptado = "";
      for (let obj in llaves) {
        textoDesencriptado = textoIngresado.replaceAll(llaves[obj], obj);
        textoIngresado = textoDesencriptado;
      }
      setValorEncriptado(textoDesencriptado);
    }
  };

  return (
    <form className="bg-black text-white p-5 flex flex-col gap-5">
      <textarea
        type="text"
        value={valor}
        placeholder="Ingrese el texto aqui"
        onChange={handleChange}
        className="w-full p-2 text-black resize-none text-xl h-52 rounded"
      />
      <div className="flex justify-center gap-5 text-lg">
        <button
          type="button"
          onClick={handleEncriptar}
          className="bg-red-500 py-2 px-4 rounded"
        >
          Encriptar
        </button>
        <button
          type="button"
          onClick={handleDesencriptar}
          className="bg-blue-500 py-2 px-4 rounded"
        >
          Desencriptar
        </button>
      </div>
    </form>
  );
}

export default EncriptadorForm;
