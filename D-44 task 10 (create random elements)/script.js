let btn = document.querySelector('button')
let main = document.querySelector('main')

let arr = [
  'Chase progress, not perfection.','Small steps make big changes.','Your only limit is you.','Focus. Hustle. Repeat.','Believe you can, and you will.','Discipline beats motivation.',
  'Growth begins outside comfort.'
];

btn.addEventListener('click',function(){    

    let h1 = document.createElement('h1')
    
    let x = Math.random()*80
    let y = Math.random()*80
    let rot = Math.random()*360
    let scl = Math.random()*3
    let a = Math.floor(Math.random()*arr.length)

    h1.innerHTML = arr[a]

    h1.style.position = 'absolute'

    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = rot+'deg'
    h1.style.scale = scl
    
    main.appendChild(h1)

    // optional: remove after 5 seconds
  setTimeout(() => main.removeChild(h1), 5000)
})