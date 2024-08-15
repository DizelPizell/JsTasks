class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    off(event, callback) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(cb => cb !== callback);
    }

    once(event, callback) {
        const onceCallback = (...args) => {
            callback(...args);
            this.off(event, onceCallback);
        };
        this.on(event, onceCallback);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(...args));
        }
    }
}

class BroadcastEventEmitter extends EventEmitter {
    emit(event, ...args) {
        super.emit(event, ...args);

        if (event === "*") {
            for (const [eventName, callbacks] of Object.entries(this.events)) {
                callbacks.forEach(callback => callback(...args));
            }
        }
    }
}

let emitter = new EventEmitter();

emitter.on('event:name-changed', data => {
    console.log(`New value is: ${data.name}`);
});

emitter.emit('event:name-changed', { name: 'John Doe' });

let emitter2 = new EventEmitter();

const multiplyTwo = (num) => console.log(num * 2);
const multiplyThree = (num) => console.log(num * 3);
const divideTwo = (num) => console.log(num / 2);
const divideThree = (num) => console.log(num / 3);

emitter2.on('multiplication', multiplyTwo);
emitter2.on('multiplication', multiplyThree);

console.log("Multiplication Event:");
emitter2.emit('multiplication', 2);

emitter2.off('multiplication', multiplyThree);

console.log("Multiplication Event After Removing Handler:");
emitter2.emit('multiplication', 2);

emitter2.on('division', divideTwo);
emitter2.once('division', divideThree);

console.log("Division Event:");
emitter2.emit('division', 6);

console.log("Division Event After First Call:");
emitter2.emit('division', 6);

console.log("Division Event After Second Call:");
emitter2.emit('division', 6);

let broadcastEmitter = new BroadcastEventEmitter();

broadcastEmitter.on('multiplication', multiplyTwo);
broadcastEmitter.on('multiplication', multiplyThree);
broadcastEmitter.on('division', divideTwo);
broadcastEmitter.on('division', divideThree);

console.log("Broadcast Event:");
broadcastEmitter.emit('*', 6);