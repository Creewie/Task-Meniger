const user = require("./modules/user")
const task = require("./modules/task")
const config = require("./config.json")

const newUser = user.userInfo("Gabryś","gabriel.tabero@cyfroweszkoly.pl")
console.log(`Twoja nazwa użytkownika: ${newUser.name}, \nTwój email: ${newUser.email}\n`)

task.createTask("Usunąć C#")
task.createTask("Wyzdrowieć")
task.createTask("Dostać 6")

task.finishTask(1)

const taskList = task.showTasks()
console.log("Lista bieżących zadań:")
taskList.forEach(task=>{
    console.log(`ID: ${task.id}, Treść: ${task.desc}, Zrobione: ${task.done}`)
})

setTimeout(() => {console.clear()}, config.showTime)