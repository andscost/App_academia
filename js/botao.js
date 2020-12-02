
document.addEventListener('DOMContentLoaded', function() {
    const adicionar = document.querySelector('input[value="+"][class="n"]')
    const subtrair = document.querySelector('input[value="-"][class="n"]')
    const valor = document.querySelector('input[class="n"]')
    let i = 0
    adicionar.addEventListener('click', function(event) {
        i += 1
        valor.placeholder = i
    })
    subtrair.addEventListener('click', function(event) {
        i -= 1
        if (valor.placeholder == 0){
            i += 1
            valor.placeholder = i
        }
        else{
            valor.placeholder = i
        }
    })

})

