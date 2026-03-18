// let randomcolor = function () {
//     let hexcode = "0123456789ABCDEF"
//     let color = '#'
//     for (let i = 0; i < 6; i++) {
//         color += hexcode[Math.floor(Math.random() * 15 + 1)]

//     }
//     console.log(color)
//     return color
// }

// let st
// let div = document.createElement('div')
// div.id = "main"
// div.className = 'mainclass'
// div.style.paddingTop = '50px'
// document.querySelector('body').append(div)


// document.querySelector('.start').addEventListener('click', function (e) {
//     console.log('started')
//     st = setInterval(function () {
//         let color = randomcolor()
//         div.innerHTML = `<h1>${color}</h1>`
//         document.querySelector('body').style.backgroundColor = color
//     }, 1000)

// })
// document.querySelector('.stop').addEventListener('click', function (e) {
//     console.log('endded')
//     clearInterval(st)
// })

// let open = setInterval(function(){
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(function(data){
//         console.log(data)
//         console.log(data.message)
//         return data.json()
//     })
//     .then(function(data){
//         console.log(data)
//         console.log(data.message)
//         let img = document.createElement('img')
//         img.style.objectFit = 'contain'
//         // img.src = data.message
//         img.setAttribute('src', '')
//         img.setAttribute('src', data.message)
//         img.style.height = '300px'
//         img.style.width = '300px'
    
//         document.querySelector('.calss').appendChild(img)
//     })
    
    
// },2000)

// let btn = document.createElement('button')
// btn.className = 'button'
// btn.id = 'btn'
// btn.innerHTML = 'stop this'
// document.querySelector('body').append(btn)
// btn.addEventListener('click' , function(e){
//     clearInterval(open)
// })


// fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
// .then(function(data){
//     console.log(data)
//     return data.json()
// })
// .then(function(datapure){
//     if(datapure.setup){
//         console.log(datapure.setup)
//         console.log(datapure.delivery)
//     }
    
//     console.log(datapure)
// })
// .catch(function(error){
//     console.log(error)
// })


// async function data(){
//     let raw = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
//     let real = await raw.json()
//     console.log(real)


// }

let form = document.querySelector('form')
form.addEventListener('submit' , function(e) {
    e.preventDefault()
    let inp = document.querySelector('input')
    console.dir(inp)
    console.log(inp.value)
})


let h1 = document.querySelector('h1')

function change(){
    return new Promise(function(resolve , reject){
        setTimeout(() => {
            resolve()
        }, 1000);
    })
}

change().then(function(){
    h1.style.color = 'red'
    return change()
})
.then(function(){
    h1.style.color = 'blue'
    return change()
})
.then(function(){
    h1.style.color = 'green'
})
.catch(function(){
    console.log("error ")
})

// or we can do it like this also

let h2 = document.querySelector('h2')

function change(color , delay){
    return new Promise(function(resolve , reject){
        setTimeout(() => {
            h2.style.color = color
            resolve()
        }, delay);
    })
}

change('red' , 1000)
.then(function(){
    return change('green' , 1000)
})
.then(function(){
    return change('blue' , 1000)
})
.catch(function(){
    console.log('error')
})