const  inputText = document.querySelector("#input")
const  button = document.querySelector("#btn")
const  result = document.querySelector(".result")

button.addEventListener("click",()=>{
    

    if(inputText.value == ""){
        alert("Enter String")
    }
    else{
        
        const div = document.createElement("div")
        result.appendChild(div)
        const span = document.createElement("span")
        div.appendChild(span)
        span.innerHTML=inputText.value
        const button = document.createElement("button")
        button.innerHTML=`Delete`
        div.appendChild(button)
        inputText.value = ""
        button.addEventListener("click",()=>{
            div.remove()
        }) 
    }
})

