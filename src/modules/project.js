import {compareAsc, parseISO} from 'date-fns'

export default class Project{

    constructor(name){
        this.name = name;
        this.todos = [];
        this.sortType = 'date';
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

    changeSortType(){
        if(this.sortType==='date'){
            this.sortType = 'priority';
        }
        else{
            this.sortType = 'date';
        }
    }

    sortTodos(){
        if(this.sortType==='date'){
            this.todos.sort(function(a, b) {
                let result = compareAsc(parseISO(a.getDueDateForInput()), parseISO(b.getDueDateForInput()));
                return result;
            })    
        }
        else if(this.sortType==='priority'){
            this.todos.sort(function(a, b){
                if(b.getPriority()==="N/A"){
                    return -1;
                }
                if(a.getPriority()==='High'){
                    if(b.getPriority()==='Medium'){
                        return -1;
                    }
                    else if(b.getPriority()==='Low'){
                        return -1
                    }
                    else{
                        return 0; 
                    }
                }
                else if(a.getPriority()==='Medium'){
                    if(b.getPriority()==='High'){
                        return 1;
                    }
                    else if(b.getPriority()==='Low'){
                        return -1
                    }
                    else{
                        return 0; 
                    }
                }
                if(a.getPriority()==='Low'){
                    if(b.getPriority()==='High'){
                        return 1;
                    }
                    else if(b.getPriority()==='Medium'){
                        return 1
                    }
                    else{
                        return -1; 
                    }
                }
                else{
                    return 0;
                }
            })
        }
    }

}