const time=document.querySelector('#time')

const button=document.querySelector('#button')

let [seconds,minutes,hours] =[0,0,0]
let int=null;

function start(){

 int=  setInterval (starttime,10)


}



function starttime(){
seconds++

if(seconds==60){

seconds=0
minutes++
}

if(minutes==60){

minutes=0 + '0'
hours++
}



let s=String(seconds).padStart()
let m=String(minutes).padStart()
let h=String(hours).padStart()


time.innerHTML=`${s} : ${m} : ${h}`

} 
function stop(){

clearInterval(int)


}

function reset(){

clearInterval(int)
time.innerHTML=`00: 00 : 00 `

}
