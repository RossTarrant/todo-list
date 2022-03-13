export default class UI{

    static initLoad(){
        this.showNavbar();
        this.showHeader();
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

    static showHeader(){
        const content = document.querySelector('.content');
        const header = document.createElement('div');
        const heading = document.createElement('h1');
        heading.textContent = "Todo List"
        header.appendChild(heading);
        header.classList.add('header');
        content.appendChild(header);
    }

}