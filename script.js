let colorName = document.querySelector('span')
let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let color = '';
    for(let i = 0;i < 6; i++){
        let randomColor = Math.floor(Math.random()*colorArr.length)
        color += colorArr[randomColor]
    }
    document.body.style.backgroundColor = "#" + color
    colorName.innerText = "#" + color
})