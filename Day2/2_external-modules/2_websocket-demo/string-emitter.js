const EventEmitter = require('events');

let instance = null;

class StringEmitter extends EventEmitter {
    constructor() {
        super();
        if (!instance) {
            instance = this;
        }

        this.run();
        return instance;
    }

    run() {
        const strArr = ['NodeJS', 'ReactJS', 'Angular', 'ExtJS', 'jQuery'];
        setInterval(() => {
            var str = strArr[Math.floor(Math.random() * strArr.length)];
            this.emit('data', str);         // Publish
        }, 2000);
    }
}

module.exports = new StringEmitter();