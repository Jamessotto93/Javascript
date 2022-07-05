alert("Bienvenido a la tienda, seleccione tu paquete y verificar sus precios");
alert ("Haz tu pedido escribiendo el numero correspondiente a cada paquete");
let choose = parseInt(prompt("(1).Cuerpo Entero: $3500, (2).Medio Cuerpo: $2000, (3).Cabeza: $1500, (4).Fondo: $3000, (5).Chibi: $1000"));
const plus = (a,b) => a + b;
const minus = (a,b) => a - b;
const iva = x => x * 0.40;
//Numeros y Precios
let paq1 = 3500;
let paq2 = 2000;
let paq3 = 1500;
let paq4 = 3000;
let paq5 = 1000;
let discount = 200;
let sends = 1000;
//Calculadora 1
let finalPaq1 = minus (plus (paq1, iva(paq1)), discount);
let finalPaq2 = minus (plus (paq2, iva(paq2)), discount);
let finalPaq3 = minus (plus (paq3, iva(paq3)), discount);
let finalPaq4 = minus (plus (paq4, iva(paq4)), discount);
let finalPaq5 = minus (plus (paq5, iva(paq5)), discount);
//Calculadora
let totalPaq1 = plus (finalPaq1, sends);
let totalPaq2 = plus (finalPaq2, sends);
let totalPaq3 = plus (finalPaq3, sends);
let totalPaq4 = plus (finalPaq4, sends);
let totalPaq5 = plus (finalPaq5, sends);
//Tiempo de espera
function total(){
      alert("Calculando precios + ivas - descuentos. Un momento por favor");
}
total ();
//Precio Total
switch (choose){
      case 1:
            alert(`El precio por tu pack es de ${finalPaq1} pesos argentinos.`);
            let again1 = prompt("Deseas envio digital o fisico? El envio fisico tiene un costo de 1000 pesos argentinos.").toLocaleLowerCase();
            if (again1 == "si"){
                  alert(`El precio por 1: Cuerpo entero + envio fisico es de ${totalPaq1} pesos argentinos.`);
                  alert("Sera derivado a Paypal para realizar el pago.")
            }
else if (again1 == "no"){
      alert(`Precio final: $${finalPaq1}. Sera derivado a Paypal para realizar el pago.`);
}
else{
      alert("Error al no seleccionar envio correctamente, por favor, realice el pedido nuevamente");
}
break;
      case 2:
            alert(`El precio por tu pack es de ${finalPaq2} pesos argentinos.`);
            let again2 = prompt("Deseas envio digital o fisico? El envio fisico tiene un costo de 1000 pesos argentinos.").toLocaleLowerCase();
            if (again2 == "si"){
                  alert(`El precio por 1: Cuerpo entero + envio fisico es de ${totalPaq2} pesos argentinos.`);
                  alert("Sera derivado a Paypal para realizar el pago.")
            }
            else if (again1 == "no")
                  alert(`Precio final: $${finalPaq1}. Sera derivado a Paypal para realizar el pago.`);
break;
      case 3:
            alert(`El precio por tu pack es de ${finalPaq3} pesos argentinos.`);
            let again3 = prompt("Deseas envio digital o fisico? El envio fisico tiene un costo de 1000 pesos argentinos.").toLocaleLowerCase();
            if (again3 == "si"){
                  alert(`El precio por 1: Cuerpo entero + envio fisico es de ${totalPaq3} pesos argentinos.`);
                  alert("Sera derivado a Paypal para realizar el pago.")
            }
            else if (again1 == "no"){
                  alert(`Precio final: $${finalPaq1}. Sera derivado a Paypal para realizar el pago.`);
break;
            }
            case 4:
            alert(`El precio por tu pack es de ${finalPaq4} pesos argentinos.`);
            let again4 = prompt("Deseas envio digital o fisico? El envio fisico tiene un costo de 1000 pesos argentinos.").toLocaleLowerCase();
            if (again4 == "si"){
                  alert(`El precio por 1: Cuerpo entero + envio fisico es de ${totalPaq4} pesos argentinos.`);
                  alert("Sera derivado a Paypal para realizar el pago.")
            }
            else if (again4 == "no"){
                  alert(`Precio final: $${finalPaq4}. Sera derivado a Paypal para realizar el pago.`);
break;
}
            case 5:
            alert(`El precio por tu pack es de ${finalPaq5} pesos argentinos.`);
            let again5 = prompt("Deseas envio digital o fisico? El envio fisico tiene un costo de 1000 pesos argentinos.").toLocaleLowerCase();
            if (again5 == "si"){
                  alert(`El precio por 1: Cuerpo entero + envio fisico es de ${totalPaq5} pesos argentinos.`);
                  alert("Sera derivado a Paypal para realizar el pago.")
            }
            else if (again5 == "no"){
                  alert(`Precio final: $${finalPaq5}. Sera derivado a Paypal para realizar el pago.`);
break;
}
            }