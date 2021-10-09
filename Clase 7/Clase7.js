function Montanarusa(edad,altura){
    if ( edad>=12 && altura>=130) {
        console.log("puede subir a la montaña");}
        else{
    console.log("no puede subir a la montaña");}
}

Montanarusa(11,125)
Montanarusa(14,150)
Montanarusa (11, 200)
Montanarusa (13, 110)

function Flash(luz,velocidad){
    if (luz== false || velocidad== true) { 
        console.log("flash");}
    else{
        console.log("no flash");}     
}

Flash(0,0)  //Luz apagada y velocidad lenta del objeto
Flash(0,1)  //Luz apagada y velocidad rapida del objeto
Flash(1,0)  //Luz prendida y velocidad lenta del objeto (La unica que deberia no prender flash)
Flash(1,1)  //Luz prendida y velocidad rapida del objeto

function Nota(Parcial1,Parcial2,Final){
    if (Parcial1>=7 && Parcial2>=7 || Final>=4) {
        console.log("Alumno pasa");        
    }
    else{
        console.log("alumno no pasa");
    }
}

function VerTV(tarea,piano,memoria){
    if (tarea == true && piano == true && memoria == true) {
        console.log("Puede ver TV");
    }
    else{
        console.log("No puede ver TV");
    }
}

