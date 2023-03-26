const button = document.querySelector('.calc')

button.addEventListener('click', (event)=>{
    event.preventDefault()
    const result = document.querySelector('.result')
    const saldo = document.querySelector('.saldo').value
    const juros = (document.querySelector('.juros').value) / 100
    const tempo = document.querySelector('.tempo').value

    let total = saldo * (1 + juros)**tempo
    result.innerHTML = "R$ " + total.toFixed(2).replace('.',',')
})
