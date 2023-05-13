const textArea = document.querySelector(".text-area");
const message = document.querySelector(".mensaje");
const pattern = /^[a-z0-9\s]*$/; // Expresión regular para letras y espacios


//Boton Encriptar
const btnEncriptar = () => {

    if(textArea.value === ''){
        alert('Ingrese un texto por favor');
        return;
    }

    if (pattern.test(textArea.value)) {
        const textEncriptado = encriptar(textArea.value);
        message.value = textEncriptado;
        textArea.value = '';
        message.style.backgroundImage = "none";
      }else {
        alert('Solo letras minúsculas y sin acento');
      }
};

//Boton Desencriptar
const btnDesencriptar = () => {

    if(textArea.value === ''){
        alert('Ingrese un texto por favor');
        return;
    }
    
    const textDesencriptado = desencriptar(textArea.value);
    textArea.value = '';
    message.value = textDesencriptado;
};

//Function Encriptar
const encriptar = (stringEncriptado) => {

    let matrixCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    //console.table(matrixCodigo);
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrixCodigo.length; i++){
        if(stringEncriptado.includes(matrixCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
        }
    }
    return stringEncriptado;
};

//Function Desencriptar
const desencriptar = (stringDesencriptado) => {
    let matrixCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrixCodigo.length; i++){
        if(stringDesencriptado.includes(matrixCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0])
        }
    }
    return stringDesencriptado;
};


//Boton Copiar
const btnCopiar = () => {
    const copiarMsj = document.getElementById('msj')
    copiarMsj.select();
    document.execCommand('copy');
};
