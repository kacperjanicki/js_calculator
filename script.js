const elements = document.querySelectorAll('button')
const display = document.querySelector('#screen')

console.log(elements)

elements.forEach(element => element.addEventListener('click',mainfunc))
equation=""

function mainfunc() {
    if (this.innerHTML == '÷') {
        this.textContent = '/'
    }
    if (this.innerHTML == '=') {
        display.innerHTML = `${eval(equation)}`
        console.log(eval(equation))
        equation = ''
    }
    else if (this.innerHTML == '+/-') {
        equation=eval(equation) * -1
        display.innerHTML = equation
    }
    else if (this.innerHTML == 'AC') {
        display.innerHTML = ''
        equation = '' }
    else if (this.innerHTML == '√') {
        equation = `${eval(equation)**(1/2)}`
        display.innerHTML = equation
        equation = ''

    }
    else {
        if (Number(this.innerHTML)) {   //if number clicked
            equation+=this.textContent
            display.innerHTML = equation
        } 
        else if (!Number(this.innerHTML)) {  //operator clicked
            equation+=this.textContent
            display.innerHTML = equation
        }
    
        console.log(equation)
        
    }
    

    
}