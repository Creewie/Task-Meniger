var tasks = []
var id = 0;

function createTask(desc){
    var newTask = {
        id: id,
        desc: desc,
        done: false
    }
    tasks.push(newTask)
    id++
}

function finishTask(id){
    var task = tasks.find(e => e.id == id)
    if(task){
        task.done = true
    }
    else{
        console.log(`Nastąpił bład przy wczytaniu zadanie o id ${id}`)
    }
}

function showTasks(){
    return tasks
}

module.exports = {
    createTask,
    finishTask,
    showTasks
}