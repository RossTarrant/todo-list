import projectController from "./project-controller";
import Project from "./project";
import Todo from "./todo";

export default class data{

    static loadData(todos, projectNames){
        let controller = new projectController;
        todos = JSON.parse(todos);
        projectNames = projectNames.split(',');
        projectNames.forEach(name => {
            let tempProject = new Project(name);
            controller.addProject(tempProject);
            todos.forEach(todo => {
                if(todo.project === name){
                    if(todo.dueDate==='Today'){
                        var tempTodo = new Todo(todo.title, todo.description, '2022-03-24', todo.priority);
                    }
                    else if(todo.dueDate==='Tomorrow'){
                        var tempTodo = new Todo(todo.title, todo.description, '2022-03-25', todo.priority);
                    }
                    else{
                        let splitDate = (todo.dueDate).split('-');
                        let formattedDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
                        var tempTodo = new Todo(todo.title, todo.description, formattedDate, todo.priority);
                    }
                    
                    tempProject.addTodo(tempTodo);
                }
            })
        })
        
        return controller;
    }

    static getSaveState(controller){
        let todos = [];
        let projectNames = [];
        let projects = controller.getProjects();
        projects.forEach(project => {
            projectNames.push(project.getName());
            project.getTodos().forEach(projectTodo => {
                const todo = {
                    project: project.getName(),
                    title: projectTodo.getTitle(),
                    description: projectTodo.getDescription(),
                    dueDate: projectTodo.getDueDate(),
                    priority: projectTodo.getPriority()
                }
                todos.push(todo);
            })
        });
        return [todos, projectNames];
    }

}