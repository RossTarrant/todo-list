import menuIcon from '../images/menu.svg';

export default class UI{

    static initLoad(){
        this.showHeader();
        this.showNavbar();
        this.showTasks();
    }

    static showNavbar(){
        const content = document.querySelector('.content');
        const nav = document.createElement('div');
        nav.classList.add('navbar')
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

    static showTasks(){
        const content = document.querySelector('.content');
        const tasks = document.createElement('div');
        tasks.classList.add('tasks');
        content.appendChild(tasks);
    }

    static addTodo(){

    }

}