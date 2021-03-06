// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener("click", cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) // Boolean: true ou false

    // Pegar os campos. Que campos??
    const fields = newFieldContainer.querySelectorAll("input")

    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pega o field do momento e limpa
        field.value = ""
    })

    // Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}