// Procurar o botão
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)


//executar uma acao
function cloneField() {


    //duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true or false

    // pegar os campos: que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pickup the moment field and clean up
        field.value = ""
    })

    //colocar na pagina. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)


}  