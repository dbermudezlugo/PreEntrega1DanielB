function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    if (isNaN(valore)) {
        alert("Por favor, ingrese un valor numérico válido.");
        return;
    }

    let resultado = 0;
    let monedas = [
        { id: "dolar", tasa: 3.816, simbolo: "US$" },
        { id: "gbp", tasa: 4.849, simbolo: "GBP" },
        { id: "eur", tasa: 4.142, simbolo: "EUR" }
    ];

    let monedaEncontrada = false;

    for (let i = 0; i < monedas.length; i++) {
        if (document.getElementById(monedas[i].id).checked) {
            resultado = valore / monedas[i].tasa;
            alert("El cambio de COP a " + monedas[i].simbolo + " es: " + monedas[i].simbolo + " " + resultado);
            monedaEncontrada = true;
            break;
        }
    }

    if (!monedaEncontrada) {
        alert("Por favor, selecciona una moneda.");
    }
}