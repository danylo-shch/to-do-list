const content = document.querySelector("#content")


function GenerateTodayPage () {

    // Create 3 containers - greeting, to-do list itself & add to-do
    const greeting_container =  document.createElement("div")
    greeting_container.classList.add("greeting-container")
    const todo_container = document.createElement("div")
    const addtodo_container = document.createElement("div")


    // Render greeting on the page
    const header = document.createElement("header")
    const h2 = document.createElement("h2")
    const excl_header = document.createElement("span")
    excl_header.textContent = "!"
    excl_header.classList.add("greetings-exclamation")

    header.textContent =  "Hello Danylo"
    header.appendChild(excl_header)
    h2.textContent = "Day one or One day?"

    header.classList.add("greetings-header")
    h2.classList.add("greetings-h2")

    greeting_container.appendChild(header)
    greeting_container.appendChild(h2)
    content.appendChild(greeting_container)


    // Render Todo-lists




}

export {GenerateTodayPage}