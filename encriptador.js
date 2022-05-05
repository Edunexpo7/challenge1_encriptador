document.getElementById("ingresoTexto").focus();

let noEncontrado = document.getElementById("noEncontrado");

let resultados = document.getElementById("resultados");

let resultadoTitulo = document.getElementById("resultadoTitulo");

let copiaBotonResultado = document.getElementById("copiaBotonResultado");

const letraA = "ai";
const letraE = "enter";
const letraI = "imes";
const letraO = "ober";
const letraU = "ufat";

function soloLetras(string) {
    return /^[a-z\s]*$/.test(string);
  }

  function verificacionTextoEncriptado() {

    const ingresoTexto = document.getElementById("ingresoTexto").value;
  
    if (ingresoTexto.trim() === "") {
        noEncontrado.style.display = "flex";
        resultadoTitulo.style.display="none";
        resultados.style.display = "none";
        copiaBotonResultado.style.display = "none";
      alert("El texto debe contener al menos una letra");
      return false;
    }
    if (!soloLetras(ingresoTexto)) {
        noEncontrado.style.display = "flex";
        resultadoTitulo.style.display="none";
        resultados.style.display = "none";
        copiaBotonResultado.style.display = "none";
      alert("El texto debe contener solo letras minúsculas sin acentos");
      return false;
    } else {
      return true;
    }
  }

  function encriptar() {
    if (!verificacionTextoEncriptado()) {
      return false;
    }
  
    const text = document.getElementById("ingresoTexto").value;
    let textBoxElement = document.getElementById("ingresoTexto");
    let textoEncriptado = text;
  
    textoEncriptado = textoEncriptado.replace(/e/gi, letraE);
    textoEncriptado = textoEncriptado.replace(/i/gi, letraI);
    textoEncriptado = textoEncriptado.replace(/a/gi, letraA);
    textoEncriptado = textoEncriptado.replace(/o/gi, letraO);
    textoEncriptado = textoEncriptado.replace(/u/gi, letraU);
  
    textBoxElement.value = "";
    document.getElementById("noEncontrado").style.display = "none";
    resultados.style.display = "block";
    resultadoTitulo.innerHTML = "Texto encriptado:";
    resultados.innerHTML = textoEncriptado;
    copiaBotonResultado.style.display = "block";
  }
  
  function desencriptar() {
    if (!verificacionTextoEncriptado()) {
      return false;
    }
  
    const text = document.getElementById("ingresoTexto").value;
    let textBoxElement = document.getElementById("ingresoTexto");
    let textoDesencriptado = text;
  
    textoDesencriptado = textoDesencriptado.replace(/enter/gi, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/gi, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/gi, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/gi, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/gi, "u");
  
    textBoxElement.value = "";
    document.getElementById("noEncontrado").style.display = "none";
    resultados.style.display = "block";
    resultadoTitulo.innerHTML = "Texto desencriptado:";
    resultados.innerHTML = textoDesencriptado;
    copiaBotonResultado.style.display = "block";
  }
  
  function copiarTexto() {
    let text = document.getElementById("resultados");
    text.select();
    navigator.clipboard.writeText(text.innerHTML);
  }