var tasks = []
var id = 0;

function createTask(desc){
    var newTask = {
        id: id,
        desc: desc,
        done: 'nie'
    }
    tasks.push(newTask)
    id++
}

function finishTask(id){
    var task = tasks.find(e => e.id == id)
    if(task){
        task.done = 'tak'
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