
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
    eraseInput();
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
        var sec2 = document.createElement("section")
        var check = document.createElement("input")
        //set attribute / se connfiguran los elementos
        li.setAttribute("class", "element")
        check.setAttribute("type","checkbox")
        check.setAttribute("id",`${index}`)
        sec1.setAttribute("class", "todoCheck")
        sec2.setAttribute("class", "todoText")
        //set value and paking elements / Se agregan los valores y se empacan dentro del contenedor
        sec2.innerHTML = Todo[index]
        sec1.appendChild(check)
        li.appendChild(sec1)
        li.appendChild(sec2)
        ul.appendChild(li);
    }
}

//Erase list contetn // Borra contenido de la lista
function eraselist(listId) {
    var ul = document.getElementById(`${listId}`);
    ul.innerHTML = ""
}

function eraseInput(){
    textInput.value = ""
}