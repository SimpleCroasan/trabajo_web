let horas=0;
let minutos=0;
let segundos=0;
let cronometro;

horas_en_pantalla= document.getElementById("horas")
minutos_en_pantalla= document.getElementById("minutos")
segundos_en_pantalla= document.getElementById("segundos")
boton_inicio= document.getElementById("iniciar")
boton_pausa= document.getElementById("pausar")
boton_reinicio= document.getElementById("reiniciar")

boton_pausa.disabled=true;
boton_reinicio.disabled=true;

function actualizar_pantalla(){
horas_en_pantalla.textContent = horas <10 ? "0" + horas : horas; 
minutos_en_pantalla.textContent =minutos <10 ? "0" + minutos : minutos; 
segundos_en_pantalla.textContent =segundos <10 ? "0" + segundos : segundos; 

};

function tiempo(){

    segundos++;
    if(segundos==60){
        segundos=0;
        minutos++;

    }
    if(minutos==60){
        minutos=0;
        horas++;

    }

    actualizar_pantalla();



};


function iniciar(){

    boton_pausa.disabled=false;
    boton_reinicio.disabled=false;
    boton_inicio.disabled=true;
    cronometro = setInterval(tiempo,1000);




};



function pausar(){

    boton_inicio.textContent="CONTINUAR";
    boton_inicio.disabled=false;
    boton_pausa.disabled=true;
    boton_reinicio.disabled=false;
    clearInterval(cronometro);
    



};

function reiniciar(){
    boton_inicio.textContent="INICIAR";
    boton_inicio.disabled=false;
    boton_pausa.disabled=true;
    boton_reinicio.disabled=true;
    segundos=0;
    minutos=0;
    horas=0;
    clearInterval(cronometro);
    actualizar_pantalla();


};


boton_inicio.addEventListener("click",iniciar);
boton_pausa.addEventListener("click",pausar);
boton_reinicio.addEventListener("click",reiniciar);











