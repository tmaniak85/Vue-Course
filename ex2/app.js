Vue.createApp({
    data() {
        return {
            text: '',
            confirmedText: ''
        }
    },
    methods: {
        showAlert() {
            alert('This is an alert!')
        },
        setText(event) {
            this.text = event.target.value
        },
        confirmText() {
            this.confirmedText = this.text
        }
    }
}).mount('#assignment')
