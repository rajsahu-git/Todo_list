const input = document.getElementById("input_task")
const date = document.getElementById("date")
const day = document.getElementById("day")
const tasks = document.getElementById("tasks")
const list_todo= document.getElementById("todos")
const form =document.getElementById("form")

let d = new Date().getDate();
let m = new Date().getMonth()
let y  = new Date().getFullYear()
const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dece"];

date.innerHTML = d +"/"+ month[m] +"/"+ y

const days = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let da = new Date().getDay()

day.innerHTML = days[da]

form.addEventListener("click",(e)=>{
    e.preventDefault()
    let input_value=input.value
    if(input_value){
        const todo_list= document.createElement("li")
        todo_list.innerHTML=  input_value

        todo_list.addEventListener("click",function(e){
            e.preventDefault()
            todo_list.classList.toggle("complete");
        })


        todo_list.ondblclick = function(){
            todo_list.remove()
        }

        list_todo.appendChild(todo_list)
        input.value=""
           
    }
        
})

