const content = document.querySelector("h1")
const id = document.querySelector("p")
const btn = document.getElementById('btn')


const getData = async () => {
    const res = await fetch('	https://api.adviceslip.com/advice')
    const { slip } = await res.json()
    id.innerHTML = `<small>Advice #${slip.id}</small>`
    content.innerText = `"${slip.advice}"`

}

getData()


btn.addEventListener('click', getData)

