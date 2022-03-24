import {compareAsc, parseISO} from 'date-fns'

export default class Project{

    constructor(name){
        this.name = name;
        this.todos = [];
    }

    addTodo(todo){
        this.todos.push(todo);
    }

    removeTodo(todo){
        for(var i = 0; i < this.todos.length; i++){
            if(this.todos[i].getTitle()===todo.getTitle()){
                this.todos.splice(i, 1);
            }
        }
    }

    getName(){
        return this.name;
    }

    getTodos(){
        this.sortTodos();
        return this.todos;
    }

    sortTodos(){
        this.todos.sort(function(a, b) {
            let result = compareAsc(parseISO(a.getDueDateForInput()), parseISO(b.getDueDateForInput()));
            return result;
        })
    }

}