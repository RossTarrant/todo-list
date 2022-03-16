import menuIcon from '../images/menu.svg';
import deleteIcon from '../images/delete.svg';
import editIcon from '../images/edit.svg';
import Project from './project';
import Todo from './todo';
import projectController from './project-controller';

let controller = new projectController();
let currentProject = null;

export default class UI{

    static initLoad(){
        let inbox = new Project('Inbox');
        let completedTasks = new Project('Completed Tasks');
        controller.addProject(inbox);
        controller.addProject(completedTasks);
        UI.addDemoTodos(inbox);
        currentProject = inbox;
        this.showHeader();
        this.showNavbar();
        this.setupContent();
        this.showTasks(inbox);
    }

    static showNavbar(){
        const content = document.querySelector('.content');
        const nav = document.createElement('div');
        nav.classList.add('navbar')
        controller.getProjects().forEach(project => {
            const projectTitle = document.createElement('h2');
            projectTitle.textContent = project.getName();
            projectTitle.addEventListener('click', function(){
                currentProject = controller.getProject(project.getName());
                UI.clearTasks();
                UI.showTasks(currentProject);  
            });
        nav.appendChild(projectTitle);
        })

        const addProjectBtn = document.createElement('button');
        addProjectBtn.textContent = 'Add Project';
        addProjectBtn.classList.add('add-project-btn');
        addProjectBtn.addEventListener('click', function(){
            const checkForContainer = document.querySelectorAll('.add-project');
            if(checkForContainer.length < 1){
                const addProjectContainer = document.createElement('div');
                addProjectContainer.classList.add('add-project');
                const addProjectInput = document.createElement('input')
                addProjectInput.setAttribute('type', 'text');
                addProjectContainer.appendChild(addProjectInput);

                const addProjectConfirmBtn = document.createElement('button');
                addProjectConfirmBtn.textContent = 'Confirm';
                addProjectConfirmBtn.classList.add('add-project-confirm');
                addProjectConfirmBtn.addEventListener('click', function(){
                    let tempProject = new Project(addProjectInput.value);
                    currentProject = tempProject;
                    controller.addProject(tempProject);
                    UI.refreshNavbar();
                    UI.clearTasks();
                    UI.showTasks(tempProject);
                })
                addProjectContainer.appendChild(addProjectConfirmBtn)

                const addProjectCancelBtn = document.createElement('button');
                addProjectCancelBtn.textContent = 'Cancel';
                addProjectCancelBtn.classList.add('add-project-cancel');
                addProjectCancelBtn.addEventListener('click', function(){
                    nav.removeChild(addProjectContainer);
                })
                addProjectContainer.appendChild(addProjectCancelBtn)

                nav.appendChild(addProjectContainer);  
            };  
        })
        nav.appendChild(addProjectBtn);

        content.appendChild(nav);
    }

    static hideNavbar(){
        const content = document.querySelector('.content');
        const nav = document.querySelector('.navbar');
        const heading = document.querySelector('.header');
        heading.classList.remove('header')
        heading.classList.add('header-fullscreen')
        content.removeChild(nav)
    }

    static refreshNavbar(){
        UI.hideNavbar();
        UI.showNavbar();
        const header = document.querySelector('.header-fullscreen');
        header.classList.remove('header-fullscreen');
        header.classList.add('header');
    }

    static getNavState(){
        let heading = document.querySelector('header');
        if(heading===null){
            return "off"
        }
        else{
            return "on"
        }
    }

    static showHeader(){
        let clicks = 0
        const content = document.querySelector('.content');
        const header = document.createElement('div');
        const heading = document.createElement('h1');
        heading.textContent = "Todo List"
        header.classList.add('header');
        const menuImg = new Image();
        menuImg.src = menuIcon;
        menuImg.addEventListener('click', function(){
            if(clicks % 2 === 0){
                UI.hideNavbar();
                const tasks = document.querySelector('.tasks');
                tasks.classList.remove('tasks')
                tasks.classList.add('tasks-fullscreen');
            }
            else{
                const tasks = document.querySelector('.tasks-fullscreen');
                header.classList.remove('header-fullscreen')
                header.classList.add('header');
                tasks.classList.remove('tasks-fullscreen')
                tasks.classList.add('tasks');
                UI.showNavbar();
            }
            clicks++;
            console.log(clicks);
        });
        header.appendChild(menuImg)
        header.appendChild(heading);
        content.appendChild(header);
    }

    static setupContent(){
        const content = document.querySelector('.content');
        const tasks = document.createElement('div');
        tasks.classList.add('tasks');
        const addTaskBtn = document.createElement('button');
        addTaskBtn.textContent = "Add Task +";
        addTaskBtn.classList.add('task-add-btn');
        addTaskBtn.addEventListener('click', function(){
            const taskContainers = document.querySelectorAll('.add-todo-form');
            if(taskContainers.length === 0){
                UI.createAddTodoForm(); 
            }
        });
        tasks.appendChild(addTaskBtn);
        content.appendChild(tasks);
    }

    static showTasks(project){
        const tasks = document.querySelector('.tasks');
        const projectHeading = document.createElement('h1');
        projectHeading.textContent = currentProject.getName();
        tasks.appendChild(projectHeading);
        project.getTodos().forEach(task => {
            let taskContainer = document.createElement('div');
            taskContainer.classList.add('task-container');
            let taskContainerLeft = document.createElement('div');
            taskContainerLeft.classList.add('task-container-left');
            let taskContainerRight = document.createElement('div');
            taskContainerRight.classList.add('task-container-right');
            let taskTitle = document.createElement('h3');
            let taskDueDate = document.createElement('p');
            taskTitle.textContent = task.getTitle();
            taskDueDate.textContent = task.getDueDate();
            let checkbox = document.createElement('input')
            checkbox.setAttribute('type', 'checkbox')
            checkbox.addEventListener('click', function(){
                controller.getProject('Completed Tasks').addTodo(task);
                tasks.removeChild(taskContainer);
                currentProject.removeTodo(task);
            })
            const editImg = new Image();
            editImg.src = editIcon;
            editImg.addEventListener('click', function(){
                // Edit task
            })
            const deleteImg = new Image();
            deleteImg.src = deleteIcon;
            deleteImg.addEventListener('click', function(){
                tasks.removeChild(taskContainer);
                controller.removeTodo(task, currentProject);
            });
            taskContainerLeft.appendChild(checkbox);
            taskContainerLeft.appendChild(taskTitle);
            taskContainerRight.appendChild(taskDueDate);
            taskContainerRight.appendChild(editImg);
            taskContainerRight.appendChild(deleteImg);
            taskContainer.appendChild(taskContainerLeft);
            taskContainer.appendChild(taskContainerRight);
            tasks.appendChild(taskContainer);
        });
    }

    static clearTasks(){
        const tasks = document.querySelectorAll('.task-container');
        const tasksSection = document.querySelector('.tasks');
        const projectHeading = document.querySelector('.tasks h1')
        tasksSection.removeChild(projectHeading);
        tasks.forEach(task => {
            task.remove();
        })
    }

    static createAddTodoForm(){
        let tasks = document.querySelector('.tasks');
        if(tasks===null){
            tasks = document.querySelector('.tasks-fullscreen');
        }
        const taskForm = document.createElement('div');
        taskForm.classList.add('add-todo-form');

        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title: '
        taskForm.appendChild(titleLabel);

        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        taskForm.appendChild(titleInput);

        const dateLabel = document.createElement('label');
        dateLabel.textContent = 'Due Date: '
        taskForm.appendChild(dateLabel);

        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        taskForm.appendChild(dateInput);

        const confirmButton = document.createElement('button');
        confirmButton.textContent = "Confirm";
        confirmButton.classList.add('add-todo-confirm');
        confirmButton.addEventListener('click', function(){
            //Validate form
            // If valid....
            let tempTitle = titleInput.value;
            let tempDate = dateInput.value;
            let tempTodo = new Todo(tempTitle, '', tempDate, '');
            controller.addTodo(tempTodo, currentProject);
            tasks.removeChild(taskForm);
            UI.clearTasks();
            UI.showTasks(currentProject);
        })
        taskForm.appendChild(confirmButton);

        const cancelButton = document.createElement('button');
        cancelButton.textContent = "Cancel";
        cancelButton.classList.add('add-todo-cancel');
        cancelButton.addEventListener('click', function(){
            tasks.removeChild(taskForm);
        })
        taskForm.appendChild(cancelButton);

        tasks.appendChild(taskForm);
    }

    static addTodo(todo, project){
        project.addTodo(todo);
    }

    static setCurrentProject(project){
        
    }

    static getCurrentProject(){
        // Logic for working out current project
        return currentProject;
    }

    static addDemoTodos(inbox){
        const demoTodo1 = new Todo('Homework', 'Finish english homework', 'Today', 'High');
        const demoTodo2 = new Todo('Washing', 'Wash my school shirts', 'Tomorrow', 'Medium');
        const demoTodo3 = new Todo('Tidying', 'Tidy up my bedroom', 'Sometime', 'Low');
        inbox.addTodo(demoTodo1);
        inbox.addTodo(demoTodo2);
        inbox.addTodo(demoTodo3);
    }

}