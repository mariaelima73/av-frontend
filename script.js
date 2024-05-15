// Função de voltar ao topo

const botaoVoltarAoTopo = document.getElementById('voltarAoTopo')

botaoVoltarAoTopo.addEventListener('click', () => {
    scrollTo({top: 0, behavior: 'smooth'})
})

addEventListener('scroll', () => {
    if (scrollY > 100) {
        botaoVoltarAoTopo.style.display = 'block';
    } else {
        botaoVoltarAoTopo.style.display = 'none';
    }
})
//------------------------------------------------------------------
// Função de voltar ao Fim

const botaoVoltarAoFim = document.getElementById('voltarAoFim')
const fim = document.body.scrollHeight

botaoVoltarAoFim.addEventListener('click', () => {
    scrollTo({top: fim, behavior: 'smooth'})
})

addEventListener('scroll', () => {
    if (scrollY > 100) {
        botaoVoltarAoFim.style.display = 'block';
    } else {
        botaoVoltarAoFim.style.display = 'none';
    }
})
//------------------------------------------------------------------

const boxes = document.querySelectorAll(".product-box")

boxes.forEach(box =>{

    const img = box.querySelector(".product-image")

box.addEventListener("mousemove", (e) => {

    const x = e.clientX - box.getBoundingClientRect().left
    const y = e.clientY - box.getBoundingClientRect().top

    console.log(x, y)

    img.style.transformOrigin = `${x}px ${y}px`
    img.style.transform = "scale(1.5)"

})

box.addEventListener("mouseleave", (e) => {

    img.style.transformOrigin = "center"
    img.style.transform = "scale(1)"

})
})

//-----------------------------------------------------------