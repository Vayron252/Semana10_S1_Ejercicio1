const btnCalcular = document.getElementById('btnValidar');
const txtNumero = document.getElementById('txtNumero');

function ValidarParOImpar(numero){
    if (numero%2==0) {
        return `El número ${numero} es par.!!!`;
    } else {
        return `El número ${numero} es impar.!!!`;
    }
}

btnCalcular.addEventListener('click', ()=>{
    alert(ValidarParOImpar(txtNumero.value));
});