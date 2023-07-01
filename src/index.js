import './less/index.less'

// Your code goes here!

window.onload = function (evt) {
    const heading = document.querySelector('h1');
    heading.textContent = 'FUNvee';


window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text;
    })
})

document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})

document.body.addEventListener('dblclick', evt => {
    heading.textContent = 'Party Bus'
})

window.addEventListener('keydown', evt => {
    if (evt.key == 6) {
        document.body.innerHTML = '<h1>Third of the Beast</h1>'
}
})

document.body.addEventListener('mousemove', evt => {
    const { clientX, clientY } = evt
})

const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
            destination.style.fontWeight = 'initial'
            
        }, 500);
    })
}
}
