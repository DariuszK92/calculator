const calculations1 = document.getElementById("calc1");
const calculations2 = document.getElementById("calc2");
const result = document.getElementById("result")
const symbol = document.getElementById("symbol")
//Numbers const
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

//Clear symbols const

const backwards = document.getElementById("backward");
const clear=document.getElementById("clear");

//Special symbols invocation
const dot = document.getElementById("dot");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const multiplication=document.getElementById("multiplication");
const division=document.getElementById("division");
const modulus=document.getElementById("modulus");
const change=document.getElementById("change");
const equals=document.getElementById("equals");

//Numbers function invocation
zero.addEventListener('click', () =>typeNumber(0));
one.addEventListener('click', () =>typeNumber(1));
two.addEventListener('click', () =>typeNumber(2));
three.addEventListener('click', () =>typeNumber(3));
four.addEventListener('click', () =>typeNumber(4));
five.addEventListener('click', () =>typeNumber(5));
six.addEventListener('click', () =>typeNumber(6));
seven.addEventListener('click', () =>typeNumber(7));
eight.addEventListener('click', () =>typeNumber(8));
nine.addEventListener('click', () =>typeNumber(9));

//Clear function invocation
backwards.addEventListener('click', ()=> backward());
clear.addEventListener('click',()=>clearAll());

//Special symbols invocation
plus.addEventListener('click',()=>typeSymbol('+'));
minus.addEventListener('click',()=>typeSymbol('-'));
multiplication.addEventListener('click', ()=>typeSymbol('*'));
division.addEventListener('click',()=>typeSymbol('/'));
modulus.addEventListener('click',()=>typeSymbol('%'));
dot.addEventListener('click',()=>addDot());
equals.addEventListener('click',()=>getResult());

change.addEventListener('click',()=>changeSymbol());

//Functions
function typeNumber(a){
    if(calculations1.innerText==="0" && a==="0" ||
    calculations2.innerText==="0" && a==="0" ){
        return
       }
    else if(calculations1.innerText==='NaN' || calculations2.innerText==='NaN'
    || calculations1.innerText==='Infinity' || calculations2.innerText==='Infinity'){
        return
    }
    else if(calculations1.innerText.length>=25 && symbol.innerText.length===0){
        const a = +calculations1.innerText;
        calculations1.innerText= a.toExponential()
    }
    else if(calculations2.innerText.length>=25){
        const a = +calculations2.innerText;
        calculations2.innerText= a.toExponential()
    }
    else if(result.innerText.length===0 && symbol.innerText.length===0){
        calculations1.innerText = calculations1.innerText + a;
    }
    else if(symbol.innerText.length!==0 && result.innerText.length===0){
        calculations2.innerText = calculations2.innerText + a;
    }
    else{
       return;
    }
}


function typeSymbol(a){
   if(calculations1.innerText.length!==0 && calculations2.innerText.length===0 &&
     symbol.innerText===""){
        symbol.innerText = a;
    }
    else if(calculations2.innerText.length!==0 && result.innerText.length===0 && symbol.innerText==="+"){
        calculations1.innerText= +calculations1.innerText + +calculations2.innerText;
        cleaning();
        symbol.innerText=a;
    }
    else if(calculations2.innerText.length!==0 && result.innerText.length===0 && symbol.innerText==="-"){
        calculations1.innerText= +calculations1.innerText - +calculations2.innerText;
        cleaning();
        symbol.innerText=a;
    }
    else if(calculations2.innerText.length!==0 && result.innerText.length===0 && symbol.innerText==="*"){
        calculations1.innerText= +calculations1.innerText * +calculations2.innerText;
        cleaning();
        symbol.innerText=a;
    }
    else if(calculations2.innerText.length!==0 && result.innerText.length===0 && symbol.innerText==="%"){
        calculations1.innerText= +calculations1.innerText % +calculations2.innerText;
        cleaning();
        symbol.innerText=a;
    }
    else if(calculations2.innerText.length!==0 && result.innerText.length===0 && symbol.innerText==="/"){
        calculations1.innerText= +calculations1.innerText / +calculations2.innerText;
        cleaning();
        symbol.innerText=a;
    }
    else if(result.innerText.length!==0){
        calculations1.innerText=result.innerText;
        calculations2.innerText="";
        symbol.innerText=a;
        result.innerText="";
    }
    else{
        return;
    }
}

function cleaning(a){
    calculations2.innerText="";
    result.innerText="";
}

function backward(){
    if(result.innerText.length>0){
        return
    }
    else if(calculations2.innerText.length>0){
        calculations2.innerText=calculations2.innerText.slice(0,calculations2.innerText.length-1);
    }
    else if(symbol.innerText.length>0){
        symbol.innerText=""
    }
    else if(calculations1.innerText.length>0){
        calculations1.innerText=calculations1.innerText.slice(0,calculations1.innerText.length-1);
    }
    else{
        return
    }
}

function clearAll(){
    calculations1.innerText="";
    calculations2.innerText="";
    symbol.innerText="";
    result.innerText="";
}

function addDot(){
    if(result.innerText.length>0){
        return
    }
    else if(calculations2.innerText.length>0 && calculations2.innerText.includes('.')){
        return
    }
    else if(calculations2.innerText.length>0){
        calculations2.innerText = calculations2.innerText+'.';
    }
    else if(calculations1.innerText.length>0 && calculations1.innerText.includes('.')){
        return
    }
    else if(calculations1.innerText.length>0){
        calculations1.innerText = calculations1.innerText+'.';
    }
    else{
        return
    }
}

function getResult(){
    if(calculations2.innerText.length===0){
        return;
    }
    else if(symbol.innerText==="/" && calculations2.innerText ==="0"){
        alert("You can't divide by 0!")
    }
    else if(symbol.innerText==="+"){
        result.innerText = +calculations1.innerText + +calculations2.innerText;
    }
    else if(symbol.innerText==="-"){
        result.innerText = +calculations1.innerText - +calculations2.innerText;
    }
    else if(symbol.innerText==="*"){
        result.innerText = +calculations1.innerText * +calculations2.innerText;
    }
    else if(symbol.innerText==="/"){
        result.innerText = +calculations1.innerText / +calculations2.innerText;
    }
    else if(symbol.innerText==="%"){
        result.innerText = +calculations1.innerText % +calculations2.innerText;
    }
    else{
        return;
    }
}

function changeSymbol(){
    if(calculations2.innerText.length===0 && symbol.innerText.length===0){
        const firstLetter=calculations1.innerHTML.slice(0,1);
        if(firstLetter==="-"){
            calculations1.innerText=calculations1.innerText.slice(1);
        }
        else{
            calculations1.innerText="-"+calculations1.innerText;
        }
    }
    else if(calculations2.innerText.length!==0 && result.innerText.length===0){
        const firstLetter=calculations2.innerHTML.slice(0,1);
        if(firstLetter==="-"){
            calculations2.innerText=calculations2.innerText.slice(1);
        }
        else{
            calculations2.innerText="-"+calculations2.innerText;
        }
    }
    else{
        return;
    }
}

window.addEventListener('keydown', handleKeyboardInput)
function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) typeNumber(e.key)
    if (e.key === '.') addDot()
    if (e.key === '+' || e.key ==='%' || e.key === '-' || e.key === '*' || e.key === '/') typeSymbol(e.key)
    if (e.key === 'Backspace') backward()
    if (e.key === 'Enter' || e.key === "=") getResult();
}

function add(value1,value1){
    return value1+value2;
}