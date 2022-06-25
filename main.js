let mensaje; 
let inputText;
let imagen;
window.onload = function(){
    
     mensaje = document.querySelector(".textodes_encriptado");
     inputText = document.querySelector(".textarea_ingres");
     imagen = document.querySelector(".imagenFondo");
       
}


function btencriptar(){
   
    imagen.style.display = "none"

    const textoEncriptado = encriptar(inputText.value);

    mensaje.value = textoEncriptado;

    inputText.value = "";    
    }


function encriptar(StringEncriptar){
    
    let matrizCodigo = [["i","imes"],["a","ai"],["e","enter"],["o","ober"],["u","ufat"]];
    StringEncriptar=StringEncriptar.toLowerCase();

    for (var i=0; i< matrizCodigo.length; i++){
        
            StringEncriptar =StringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            
    }
    return StringEncriptar;

}


function btDesencriptar(){
    
    const textoDesncriptado = desencriptar(inputText.value);

    mensaje.value = textoDesncriptado;

    inputText.value = "";

}


function desencriptar(StringDesencriptar){

    let matrizCodigoDes = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["u","ufat"]];

    StringDesencriptar = StringDesencriptar.toLowerCase();

    for (var n=0; n<matrizCodigoDes.length; n++){

        StringDesencriptar = StringDesencriptar.replaceAll(matrizCodigoDes[n][0], matrizCodigoDes[n][1])
    }
    return StringDesencriptar;

}

function copiar(){
    
    const pegar = mensaje.value;
    inputText.value = pegar;
    mensaje.value = "";
}