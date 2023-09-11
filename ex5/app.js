const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            task: '',
            taskListVisibility: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task);
        },
        changeListVisibility() {
            this.taskListVisibility = !this.taskListVisibility;
        }
    },
    computed: {
        buttonCaption() {
            return this.taskListVisibility ? 'Hide List' : 'Show List';
        }
    }
});

app.mount('#assignment')
