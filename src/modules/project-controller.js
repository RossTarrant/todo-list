export default class projectController{

    constructor(name){
        this.projects = [];
    }

    addProject(project){
        this.projects.push(project);
    }

    removeProject(project){
        for(var i = 0; i < this.projects.length; i++){
            if(this.projects[i].getName()===project.getName()){
                this.projects.splice(i, 1);
            }
        }
    }

    getProjects(){
        return this.projects;
    }

    getProject(name){
        let toReturn = null;
        this.projects.forEach(project => {
            if(project.getName() == name){
                toReturn = project;
            }
        })
        return toReturn;
    }

    addTodo(todo, project){
        project.addTodo(todo);
    }

    removeTodo(todo, project){
        project.removeTodo(todo);
    }

}