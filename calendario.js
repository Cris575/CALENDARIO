let monthNames = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septeiembre','Noviembre','Diciembre'];

let date = new Date();
let diaAct = date.getDate();
let mesNum = date.getMonth(); // devuelve un valor entre 0 y 11
let añoAct = date.getFullYear();


let dates = document.getElementById('dates');
let mes = document.getElementById('month');
let año = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

mes.textContent = monthNames[mesNum];
año.textContent = añoAct.toString();

prevMonthDOM.addEventListener('click',()=>lastMonth());
nextMonthDOM.addEventListener('click',()=>nextMonth());


escribirMes(mesNum);

function escribirMes(mes){
    
    for (let i = inicioDia(); i > 0; i--) {
        dates.innerHTML += `<div>${totalDias(mesNum-1)-(i-1)}</div>`;  
    }
    for (let i = 1; i <= totalDias(mes); i++) { 
        dates.innerHTML += `<div>${i}</div>`;   
           
    }
    
    
}

function totalDias(mes){
   
    if(mes === -1) mes = 11;

    if(mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11){
        return 31;
    }else if (mes == 3 || mes == 5 || mes == 8 || mes == 10){
        return 30;
    }else{
        return añoBi() ? 29:28;
    }  
    
}

function añoBi(){
   return((añoAct % 100 !== 0) && (añoAct % 4 === 0) || (añoAct % 400 === 0));
}

function inicioDia(){
    let start = new Date(añoAct, mesNum, 1);
    return((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

function lastMonth(){   
 if(mesNum !== 0){
    mesNum--;
 }else{
    mesNum = 11;
    añoAct--;
 }
 setNewDate();
}

function nextMonth(){
    if(mesNum !== 11){
        mesNum++;
     }else{
        mesNum = 0;
        añoAct++;
     }
    setNewDate();
}

function setNewDate(){
     date.setFullYear(añoAct,mesNum,diaAct);
     mes.textContent = monthNames[mesNum];
     año.textContent = añoAct.toString();
     dates.textContent = '';
     escribirMes(mesNum);
}