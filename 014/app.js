const app = Vue.createApp({
    data() {
        return {
            goalA: 'Learn vue',
            goalB: '<h3>Learn vue and write apps</h3>',
            link: 'http://onet.pl'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.goalA
            } else {
                return this.goalB
            }
        }
    }
});

app.mount('#user-goal')
