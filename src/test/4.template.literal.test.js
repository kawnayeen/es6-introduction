/**
 * Created by kawnayeen on 10/23/17.
 */
import { expect } from 'chai';
import { sayHello } from '../prod/4.template.literal';

(function () {
    "use strict";
    describe('Template literal', () => {
        it('built in templating in es6', () => {
            expect(sayHello('kamarul')).to.equal('Hello kamarul');
        });
    });
}());