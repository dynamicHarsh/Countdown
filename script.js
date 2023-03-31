const endDate="06 June 2023 00:00 AM";
    document.getElementById('end-date').innerText=endDate;
const input= document.querySelectorAll("input");
let d=3600*24;
clock= ()=>{
const end=new Date(endDate);
const now=new Date();
const diff= (end-now)/1000;
if(diff<0) {
    document.getElementById('wish').innerText="Wishing you a Happy B'day!!";
    let name=document.getElementById('end-date');
    name.innerText="dynamicHarsh";
    name.style.letterSpacing=".4rem";
    // name.style.fontSize="100px"
   
    clearInterval(interval); 
    

    return;}
//calc. Days
const days=Math.floor(diff/d);

//calc hours
let rem=diff%d;
const hours=Math.floor(rem/3600);
//calc minutes
let rm=diff%3600;
const minutes=Math.floor(rm/60);
//calc seconds
let rs=diff%60;
const seconds=Math.floor(rs);




input[0].value=days;
input[1].value=hours;
input[2].value=minutes;
input[3].value=seconds;
console.log(diff);
}
clock()
const interval=setInterval(
    ()=>{
        clock();
},1000);

