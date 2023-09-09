const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: ''
        }
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name
        },
        submitForm() {
            alert('Submitted!')
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName
        },
        add(num) {
            this.counter += num
        },
        remove() {
            this.counter--
        }
    }
});

app.mount('#events');
