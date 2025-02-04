const cores = ['Green', 'Yellow', 'Black', 'Blue', 'Purple', 'Pink', 'Red', 'Brown', 'Violet', 'White', 'Gray', 'Orange', 'Magenta', 'Turquoise']
const btn = document.getElementById('btn')
const cor = document.querySelector('.color')

btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = cores[randomColor]    
    cor.textContent = cores[randomColor]
})

function getRandomColor () {
    return Math.floor(Math.random() * cores.length)
}
