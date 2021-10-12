const botao = document.querySelector("#btn")

botao.addEventListener("click", calcularImc)

function calcularImc() {
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const nome = document.getElementById("nome").value
    const imc = (peso / (altura * altura)).toFixed(1)
    const resultado = document.getElementById("resultado")

    if(altura == "" || peso == "" || nome == "") {
        resultado.innerText = "Preencha todos os campos corretamente!"
    } else {
        let classificacao = ""

        if (imc < 18.5) {
            classificacao = "abaixo do peso"
        } else if(imc < 25) {
            classificacao = "com o peso ideal"
        } else if(imc < 30) {
            classificacao = "levemente acima do peso"
        } else if(imc < 35) {
            classificacao = "com obesidade grau 1"
        } else if(imc < 40) {
            classificacao = "com obesidade grau 2(severa)"
        } else if(imc >= 40) {
            classificacao = "com obesidade 3(mórbida)"
        }

        resultado.innerText = `Olá ${nome}, seu IMC é de ${imc} kg/m² e você está ${classificacao}!`
    }
}
