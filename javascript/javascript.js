




var num1= "";
var num2= "";
var operacion= undefined;
var resultado;

const screen = document.getElementById("screen");

const btn1 = document.getElementById("btn1").addEventListener("click", (e)=>{e.preventDefault();calculo("1")});
const btn2 = document.getElementById("btn2").addEventListener("click", (e)=>{e.preventDefault();calculo("2")});
const btn3 = document.getElementById("btn3").addEventListener("click", (e)=>{e.preventDefault();calculo("3")});
const btn4 = document.getElementById("btn4").addEventListener("click", (e)=>{e.preventDefault();calculo("4")});
const btn5 = document.getElementById("btn5").addEventListener("click", (e)=>{e.preventDefault();calculo("5")});
const btn6 = document.getElementById("btn6").addEventListener("click", (e)=>{e.preventDefault();calculo("6")});
const btn7 = document.getElementById("btn7").addEventListener("click", (e)=>{e.preventDefault();calculo("7")});
const btn8 = document.getElementById("btn8").addEventListener("click", (e)=>{e.preventDefault();calculo("8")});
const btn9 = document.getElementById("btn9").addEventListener("click", (e)=>{e.preventDefault();calculo("9")});
const btn0 = document.getElementById("btn0").addEventListener("click", (e)=>{e.preventDefault();calculo("0")});
const btnClear = document.getElementById("btnClear").addEventListener("click", (e)=>{e.preventDefault();calculo("c")});
const btnSuma = document.getElementById("btnSuma").addEventListener("click", (e)=>{e.preventDefault();calculo("+")});
const btnResta = document.getElementById("btnResta").addEventListener("click", (e)=>{e.preventDefault();calculo("-")});
const btnMultiplicacion = document.getElementById("btnMultiplicacion").addEventListener("click", (e)=>{e.preventDefault();calculo("*")});
const btnDivision = document.getElementById("btnDivision").addEventListener("click", (e)=>{e.preventDefault();calculo("/")});
const btnIgual = document.getElementById("btnIgual").addEventListener("click", (e)=>{e.preventDefault();calculo("i")});


function calculo(valor){
	if ((valor === "1" || valor === "2" || valor === "3" || valor === "4" || valor === "5" || valor === "6" || valor === "7" || valor === "8" || valor === "9" || valor === "0") &&  operacion == undefined) {
			num1 = num1 + valor;
			screen.innerHTML = num1;

	}else if(num1 !== "" && (valor === "+" || valor === "-" || valor === "*" || valor === "/") && operacion == undefined && num2 === ""){
		operacion = valor;
		screen.innerHTML = operacion;

	}else if((valor === "1" || valor === "2" || valor === "3" || valor === "4" || valor === "5" || valor === "6" || valor === "7" || valor === "8" || valor === "9" || valor === "0") && operacion !== undefined){
		num2 = num2 + valor;
		screen.innerHTML = num2;

	}else if(valor == "c"){
		num1 = "";
		num2 = "";
		operacion = undefined;
		screen.innerHTML = "";
	}else if(valor == "i" && num1 !== "" && num2 !== "" && operacion !== undefined){

let numero1 = parseInt(num1);
let numero2 = parseInt(num2);

	switch(operacion){
	case "+":
	 	resultado = numero1 + numero2;
	 	break;
	case "-":
	 	resultado = numero1 - numero2;
		break;
	case "*":
	 	resultado = numero1 * numero2;
	 	break;
	case "/":
	 	resultado = numero1 / numero2;
	 	break;
	}
	screen.innerHTML = resultado;
		num1 = "";
		num2 = "";
		operacion = undefined;

}
}







