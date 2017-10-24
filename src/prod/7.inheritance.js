import Person from './6.class';

export default class Bangladeshi extends Person {
    constructor(name, age) {
        super(name, age);
    }

    toString() {
        if (this.age < 12) {
            return `I'm ${this.name}, Bangladeshi kid`;
        } else
            return `I'm ${this.name}, Bangladeshi adult`;
    }
}