
//Create const from buttom add and inputtext HTML / Crea las constantes del boton add e inputtext del HTML
//Inicializate array ToDo / Inicializa el array ToDo
const buttonAdd = document.getElementById("add");
const textInput = document.getElementById("inputText")

const Todo = []
const Comp = []




//Add textinput value to Array / Agrega valor de textimput a Array
function addToDo() {
    if (textInput.value.length > 0) {
        Todo.push(textInput.value)
    }

}

//Detect event in buttonAdd / Detecta evento en buttonAdd
buttonAdd.addEventListener(
    "click",
    eventListener,
    {});

//Funtion from event / Funcion del evento
function eventListener() {

    addToDo();
    eraseInput();
    nodeAdd();
    addPush();
    
}
//Renders the ToDo elements in the lang list / Representa los elementos de ToDo en la lista lang
function addPush() {
    eraselist("lang")
    for (let index = 0; index < Todo.length; index++) {
        //create elements for use / se crean los elementos para su uso
        var ul = document.getElementById("lang");
        var li = document.createElement("li");
        var sec1 = document.createElement("section")
        var check = document.createElement("input")
        const textNode = document.createTextNode(`${Todo[index]}`)
        //set attribute / se connfiguran los elementos
        li.setAttribute("class", "element")
        check.setAttribute("type", "checkbox")
        check.setAttribute("class", `check`)
        check.setAttribute(`onclick`,`linThrough()`)
        sec1.setAttribute("class", "todoCheck")
        //set value and paking elements / Se agregan los valores y se empacan dentro del contenedor
        sec1.appendChild(check)
        sec1.appendChild(textNode)
        li.appendChild(sec1)
        ul.appendChild(li);

    }
}

//Erase list contetn // Borra contenido de la lista
function eraselist(listId) {
    var ul = document.getElementById(`${listId}`);
    ul.innerHTML = ""
}

function eraseInput() {
    textInput.value = ""
}



function nodeAdd(){
    var current_tasks = document.querySelectorAll(".check");
    console.log(current_tasks)
    for (var i = 0; i < current_tasks.length; i++) {
        console.log(current_tasks[i].checked)
        if (current_tasks[i].checked == true) {

            Comp.push(`${Todo.splice(i,1)}`);
            console.log(Todo)
            console.log(Comp)
            
        }
    }

}



function linThrough(){
    var current_tasks = document.querySelectorAll(".check");
    console.log(current_tasks)
    for (var i = 0; i < current_tasks.length; i++) {
        console.log(current_tasks[i].checked)
        if (current_tasks[i].checked == true) {

            current_tasks[i].parentNode.setAttribute(`class`, 'remove')
            
        }

        else { current_tasks[i].parentNode.setAttribute(`class`, 'todoCheck') }
    }

}
