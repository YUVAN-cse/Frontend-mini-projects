let task = document.querySelector('.sub')
let remove = document.querySelectorAll('.delete')
let ul = document.querySelector('ul')
let remoe
let input

task.addEventListener('click' , function(e){
    console.log(e)
    input = document.querySelector('input')
    let li = document.querySelector('li')
    let newli = document.createElement('li')
    newli.innerHTML = input.value
    let del = document.createElement('button')
    del.className = 'delete'
    del.innerHTML = "delete"
    newli.appendChild(del)
    console.log(newli)
    ul.appendChild(newli)
//     remoe = document.querySelectorAll('.delete')
//     remoe.forEach(function(btn){
//     btn.addEventListener('click' , function(e){
//         console.log(btn.parentElement.innerText)
//         btn.parentElement.remove()
//     })
// })
    input.value = ''
    console.dir(remove)

})

// remove.forEach(function(btn){
//     btn.addEventListener('click' , function(e){
//         console.log(btn.parentElement.innerText)
//         btn.parentElement.remove()
//     })
// })


//Event delegation is the solution for the problem that u faced above 
//basically u use event bubbling concept to solve this
//we apply event listener to the parent element and use e.target 
//not e.currentTarget
ul.addEventListener('click' , function(e){
    console.log("clicked")
    console.log(e.target) //the op will be the button delete if u click that btn
    console.log(e.target.parentElement)
    console.log(e.target.parentElement.tagName)
    if(e.target.parentElement.tagName == "LI"){
        e.target.parentElement.remove()
    }
    else if(e.target.tagName == 'UL'){
        alert('click the delete button for removal')
    }
    else{
        e.target.remove()
    }
})

//read nodeName also
// learn the difference btw nodeName and tagName

document.querySelector('body').addEventListener('keydown' , function(e){
    console.log(e.code)
    if(e.code.toLocaleLowerCase() == 'enter'){
        document.querySelector('.sub').focus()
    }
    else{
        document.querySelector('input').focus()
    }
})

// in the above code snippet if u use task which conatins document.queryselector('.sub') then it will 
//display error 
//to avoid this use document.queryselector('.sub') directly 
//.focus() is used to bring the control to the selected element or area

let sample = document.querySelector('.sample')
sample.addEventListener('click' , function(e){
    console.log(e)
})