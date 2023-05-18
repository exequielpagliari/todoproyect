
//Create const from buttom add and inputtext HTML / Crea las constantes del boton add e inputtext del HTML
//Inicializate array ToDo / Inicializa el array ToDo
const buttonAdd = document.getElementById("add");
const textInput = document.getElementById("inputText")
const Todo = []




//Add textinput value to Array / Agrega valor de textimput a Array
function addToDo() {
    if(textInput.value.length > 0){
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
    addPush()
}
//Renders the ToDo elements in the lang list / Representa los elementos de ToDo en la lista lang
function addPush() {
    eraselist("lang")
    for (let index = 0; index < Todo.length; index++) {
        var ul = document.getElementById("lang");
        var li = document.createElement("li");
        li.innerHTML = Todo[index]
        ul.appendChild(li);
    }
}

//Erase list contetn // Borra contenido de la lista
function eraselist(listId) {
    var ul = document.getElementById(`${listId}`);
    ul.innerHTML = ""
}