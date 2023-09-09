Vue.createApp({
    data() {
        return {
            name: 'Tomasz',
            age: 38,
            URL: 'https://www.naszeszlaki.pl/wp-content/uploads/2021/01/tapeta-na-pulpit-ekran-papuga-ara-2.jpg'
        }

    },
    methods: {
        getAgePlusFive() {
            return this.age + 5
        },
        getFavoriteNumber() {
            return Math.random()
        }
    }
}).mount('#assignment')
