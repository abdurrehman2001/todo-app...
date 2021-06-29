

function addTodo() {
    var input = document.getElementById("todo-items")
    var li = document.createElement("li")
    var liText = document.createTextNode(input.value)
    li.appendChild(liText)
    var list = document.getElementById("list")
    list.appendChild(li)
    var deleteBtn = document.createElement("button")
    var deleteText = document.createTextNode("Delete")
    deleteBtn.appendChild(deleteText)
    li.appendChild(deleteBtn)
    deleteBtn.setAttribute("onclick", "deleteItem(this)")
    deleteBtn.setAttribute("class","delete")
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("class","edit")
    editBtn.setAttribute("onclick", "editItem(this)")
    input.value = ""
}

function deleteItem(e) {
    e.parentNode.remove()
}

function deleteAll() {
    var list = document.getElementById("list")
    list.innerHTML = ""
}

function editItem(e) {
    var update = prompt("Update Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = update
}