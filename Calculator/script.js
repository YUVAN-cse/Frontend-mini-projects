let btn = document.querySelectorAll('.btn')
let output = document.querySelector('.output')
let body = document.querySelector('body')


function operation(data) {
    try {
        let newdata = eval(data)
        let newest = Number.isInteger(newdata) ? newdata : Number(newdata).toFixed(3)
        if (isNaN(newdata)) {
            output.innerHTML = "not divisible"
            setTimeout(() => {
                output.innerHTML = ''
            }, 500);
        }else if(newdata){
            output.innerHTML = newest

        }

    } catch (error) {
        console.log("error")
        output.innerHTML = ''
    }
    // console.log(newdata)
}



function clear() {
    output.innerHTML = ''
}

function finish() {
    console.log(output.innerHTML)
    let data = output.innerHTML
    operation(data)
}

function back(){
    let arr = output.innerHTML.split('')
    arr.pop()
    let newraw = arr.join('')
    // console.log(newraw)
    output.innerHTML = newraw
}

btn.forEach(function (btn) {
    // console.log(btn)
    btn.addEventListener('click', function (e) {
        // console.log(e.target.innerHTML)
        if (e.target.innerHTML === `=`) {
            finish()
        }
        else if (e.target.innerHTML === `AC`) {
            // console.log("clear")
            clear()
        }
        else if (e.target.innerHTML === 'X') {
          back()
        }

        else {
            output.innerHTML += `${e.target.innerHTML}`
        }
    })
})


body.addEventListener('keypress', function (e) {
    console.log(e)
    if (e.key >= '0' && e.key <= '9') {
        console.log("great")
        output.innerHTML += `${e.key}`
    }
    if (e.key === 'Enter') {
        // console.log("duper")
        finish()
    }
    if (e.key === 'c') {
        // console.log("duper")
        clear()
    }
    
    if(e.key ==='b'){
        back()
    }

    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        output.innerHTML += `${e.key}`
    }
    
})
