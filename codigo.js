let entrada = prompt("Ingrese el numero al cual quiere sumar 5(para salir escriba ESC)")

while(entrada !== "ESC"){
    entrada=parseInt(entrada)
    let resultado= entrada + 5;
    alert(`el resultado es ${resultado}`)
    entrada = prompt("ingrese otro numero")
}