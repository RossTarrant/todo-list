import {format } from 'date-fns'

export default class Todo{

    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = this.setDueDate(dueDate);        
        this.priority = priority;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getDueDateForSort(){
        return this.dueDate;
    }

    getDueDate(){
        let date = new Date()
        let day = date.getDate();
        let month = String(date.getMonth()+1).padStart(2, "0");
        let year = date.getFullYear();
        let fullDate = `${day}-${month}-${year}`;

        let dueDateDay = this.dueDate.split('-')[0];
        let dueDateMonth = this.dueDate.split('-')[1];
        let dueDateYear = this.dueDate.split('-')[2];

        if(this.dueDate === fullDate){
            return 'Today';
        }
        else if(dueDateMonth == month && dueDateYear == year && dueDateDay == day+1){
            return 'Tomorrow';
        }
        else{
            return this.dueDate;  
        }

        
    }

    getDueDateForInput(){
        let dateSplit = this.dueDate.split('-');
        let toReturn = format(new Date(dateSplit[2], dateSplit[1]-1, dateSplit[0]), 'yyyy-MM-dd')
        return toReturn;
    }

    getPriority(){
        return this.priority;
    }

    setTitle(title){
        this.title = title;
    }

    setDescription(description){
        this.description = description;
    }

    setDueDate(dueDate){
        let dateSplit = dueDate.split('-');
        this.dueDate = format(new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2]), 'dd-MM-yyyy')
        return this.dueDate;
    }

    setPriority(priority){
        this.priority = priority;
    }

}