const main = document.getElementById("main")


const getData = async () => {
    const res = await fetch('	https://api.adviceslip.com/advice')
    const { slip } = await res.json()

    main.innerHTML = `
    <p><small>Advice #${slip.id}</small></p>
    <h1>"${slip.advice}"</h1>
    <picture>
        <source media="(min-width: 768px)" srcset="./images/pattern-divider-desktop.svg">
        <img src="./images/pattern-divider-mobile.svg">
    </picture>
    <button id='btn'>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
    </button>

    `
    document.getElementById("btn").addEventListener("click", getData)

}

getData()



