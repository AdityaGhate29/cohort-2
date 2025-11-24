var arr = [
    {
        team: 'CSK',
        primary: '#F9CD05',
        secondary: '#1D418C',
    },
    {
        team: 'RCB',
        primary: '#EC1C24',
        secondary: '#2B2A29'
    },
    {
        team: 'MI',
        primary: '#004B8D',
        secondary: '#FFD141'
    },
    {
        team: 'KKR',
        primary: '#3A225D',
        secondary: '#F2C028'
    },
    {
        team: 'SRH',
        primary: '#FF822A',
        secondary: 'black'
    },
    {
        team: 'PBKS',
        primary: '#DD1F2D',
        secondary: '#FFFFFF'
    },
    {
        team: 'DC',
        primary: '#2561AE',
        secondary: '#282968'
    },
    {
        team: 'GT',
        primary: '#1B2133',
        secondary: '#DBBE6E'
    },
    {
        team: 'LSG',
        primary: '#0057E2',
        secondary: '#F28B00'
    },
    {
        team: 'RR',
        primary: '#E73895',
        secondary: '#074EA2'
    },
]


var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var main = document.querySelector('main')

btn.addEventListener('click',function(){

    var winner = arr[Math.floor(Math.random()*arr.length)]

    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.secondary
    main.style.backgroundColor = winner.primary
    
})