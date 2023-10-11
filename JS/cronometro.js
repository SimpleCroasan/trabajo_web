
//establecer las variables que se van a utilizar
let horas=0;
let minutos=59;
let segundos=55;
let cronometro;

//guardar en una variable cada uno de los elementos que se van a modificar
let horas_en_pantalla= document.getElementById("horas")
let minutos_en_pantalla= document.getElementById("minutos")
let segundos_en_pantalla= document.getElementById("segundos")
let boton_inicio= document.getElementById("iniciar")
let boton_pausa= document.getElementById("pausar")
let boton_reinicio= document.getElementById("reiniciar")

//cuando el boton de inicio esté disponible al principio, no se debe poder pausar o reiniciar.
boton_pausa.disabled=true;
boton_reinicio.disabled=true;

//esta funcion cambia lo que hay en pantalla dependiendo de las variables actuales 
function actualizar_pantalla(){
horas_en_pantalla.textContent = horas <10 ? "0" + horas : horas; 
minutos_en_pantalla.textContent =minutos <10 ? "0" + minutos : minutos; 
segundos_en_pantalla.textContent =segundos <10 ? "0" + segundos : segundos; 

};

//funcion para toda la logica de los segundos , minutos , horas.

function tiempo(){

    // los segundos aumentan
    segundos++;
    //condicion para que aumenten las horas y los minutos
    if(segundos==60){
        segundos=0;
        minutos++;

    }
    if(minutos==60){
        minutos=0;
        horas++;

    }
    //se actualiza la pantalla con los nuevos valores
    actualizar_pantalla();



};

//funcion para inciar el cronometro.
function iniciar(){

    boton_pausa.disabled=false;
    boton_reinicio.disabled=false;
    boton_inicio.disabled=true;
    //ejecuta cada 1000 milisegundos toda la logica del cronometro
    cronometro = setInterval(tiempo,1000);




};

//funcion para pausar el cronometro

function pausar(){
    //cambiar el texto del boton de inicio e inhabilitar algunos botones
    boton_inicio.textContent="CONTINUAR";
    boton_inicio.disabled=false;
    boton_pausa.disabled=true;
    boton_reinicio.disabled=false;
    //se pausa el cronometro
    clearInterval(cronometro);
    



};

//funcion para reiniciar
function reiniciar(){
    //habilitar botones y cambiar el texto del boton de inicio
    boton_inicio.textContent="INICIAR";
    boton_inicio.disabled=false;
    boton_pausa.disabled=true;
    boton_reinicio.disabled=true;
    //establecer en cero todas las veriables
    segundos=0;
    minutos=0;
    horas=0;
    clearInterval(cronometro);
    actualizar_pantalla();


};

// cuando de click se usan las funciones.

boton_inicio.addEventListener("click",iniciar);
boton_pausa.addEventListener("click",pausar);
boton_reinicio.addEventListener("click",reiniciar);











