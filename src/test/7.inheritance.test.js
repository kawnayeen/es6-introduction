import { expect } from 'chai';
import Bangladeshi from '../prod/7.inheritance';

(function () {
    "use strict";
    describe('Inheritance', () => {
        it('extending super class and overriding method', () => {
            let person = new Bangladeshi('Anan', 8);
            expect(person.toString()).to.equal("I'm Anan, Bangladeshi kid");
        });
    });
}());