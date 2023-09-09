const app = Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    methods: {
        addNumber(number) {
            this.number += number
        }
    },
    computed: {
        resultMessage() {
            if (this.number < 37) {
                return 'Not there yet'
            }
            if (this.number > 37) {
                return 'Too much!'
            }
            if (this.number === 37) {
                return this.number
            }
        }
    },
    watch: {
        resultMessage() {
            const that = this
            setTimeout(() => that.number = 0, 5000)
        }
    }

});

app.mount('#assignment')
