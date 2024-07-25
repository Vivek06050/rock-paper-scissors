const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");
const rock2=document.querySelector(".rock2");
const paper2=document.querySelector(".paper2");
const scissors2=document.querySelector(".scissors2");
const rock1=document.querySelector(".rock1");
const paper1=document.querySelector(".paper1");
const scissors1=document.querySelector(".scissors1");
const com=document.querySelector(".com");
const cscore=document.querySelector(".cscore");
const pscore=document.querySelector(".pscore");

let flag=true;
let val1=0;
let val2=0;
cscore.innerText=val1;
pscore.innerText=val2;
function t1(){

    rock.classList.add("t1");
    rock.classList.add("r");
}
function t2(){
    rock2.classList.add("t2");
    rock2.classList.add("r");
}
t1();t2();

rock1.addEventListener('click',()=>{
    
let num=Math.floor(Math.random() * 3)+1;
    rock2.classList.remove("t2");
    paper2.classList.remove("p");
    scissors2.classList.remove("s");
    rock2.classList.add("r");
    if(num==1){
        rock.classList.remove("t1");
        paper.classList.remove("p");
        scissors.classList.remove("s");
        rock.classList.add("r");
        com.innerText="Game Draw";
        cscore.innerText=val1;
        pscore.innerText=val2;
    }
    if(num==2){
        rock.classList.remove("t1");
        paper.classList.add("p");
        scissors.classList.remove("s");
        rock.classList.remove("r");
        com.innerText="Computer Wins";
        val1++;
        cscore.innerText=val1;
        pscore.innerText=val2;

    }
    if(num==3){
        rock.classList.remove("t1");
        paper.classList.remove("p");
        scissors.classList.add("s");
        rock.classList.remove("r");
        com.innerText="Player Wins";
        val2++;
        cscore.innerText=val1;
        pscore.innerText=val2;
    }

})
paper1.addEventListener('click',()=>{
    
let num=Math.floor(Math.random() * 3)+1;
    rock2.classList.remove("t2");
    rock2.classList.remove("r");
    scissors2.classList.remove("s");
    paper2.classList.add("p");
    if(num==1){
        rock.classList.remove("t1");
        paper.classList.remove("p");
        scissors.classList.remove("s");
        rock.classList.add("r");
        com.innerText="Player Wins";
        val2++;
        cscore.innerText=val1;
        pscore.innerText=val2;
    }
    if(num==2){
        rock.classList.remove("t1");
        paper.classList.add("p");
        scissors.classList.remove("s");
        rock.classList.remove("r");
        com.innerText="Game Draw";
        cscore.innerText=val1;
        pscore.innerText=val2;
    }
    if(num==3){
        rock.classList.remove("t1");
        paper.classList.remove("p");
        scissors.classList.add("s");
        rock.classList.remove("r");
        com.innerText="Computer Wins";
        val1++;
        cscore.innerText=val1;
        pscore.innerText=val2;
    }
})
scissors1.addEventListener('click',()=>{
    
let num=Math.floor(Math.random() * 3)+1;
    rock2.classList.remove("t2");
    rock2.classList.remove("r");
    paper2.classList.remove("p");
    scissors2.classList.add("s");
    if(num==1){
        rock.classList.remove("t1");
        paper.classList.remove("p");
        scissors.classList.remove("s");
        rock.classList.add("r");
        com.innerText="Computer Wins";
        val1++;
        cscore.innerText=val1;
        pscore.innerText=val2;
    }
    if(num==2){
        rock.classList.remove("t1");
        paper.classList.add("p");
        scissors.classList.remove("s");
        rock.classList.remove("r");
        com.innerText="Player Wins";
        val2++;
        cscore.innerText=val1;
        pscore.innerText=val2;
    }
    if(num==3){
        rock.classList.remove("t1");
        paper.classList.remove("p");
        scissors.classList.add("s");
        rock.classList.remove("r");
        com.innerText="Game Draw";
        cscore.innerText=val1;
        pscore.innerText=val2;
    }
})



