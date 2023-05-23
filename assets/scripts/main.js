// Inizializzo VUE
const { createApp } = Vue;

// Metodo create APP sul div APP
createApp({
    data(){
        return {
            error: false,
            newTask: '',
            tasks: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
        }
    },
    methods: {
        addTask() {
            if (this.newTask !== '' && this.newTask.length >= 5) {
            // Dentro i metodi uso vanilla JS
                this.tasks.unshift(this.newTask);
                this.error = false;
            } else {
                this.error = true;
            }
            this.newTask = '';  
        },
        removeTask(index) {
            this.tasks
            this.tasks.splice(index, 1);
        }
    }
}).mount('#app');