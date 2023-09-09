const app = Vue.createApp({
    data() {
        return {
            inputValue: '',
            paragraphIsVisible: true,
            backgroundColor: ''
        }
    },
    methods: {
        toggleParagraphVisibility() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    },
    computed: {
        paraClasses() {
            return {
                user1: this.inputValue === 'user1',
                user2: this.inputValue === 'user2',
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible
            }
        }
    }
})

app.mount('#assignment')

