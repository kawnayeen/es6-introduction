/**
 * Created by kawnayeen on 10/23/17.
 */
import { expect } from 'chai';
import { getFirst, getMiddleName, getDisplayName } from '../prod/5.destructuring';

(function () {
    "use strict";
    let values = [ 1, 2, 3 ];
    let names = {
        firstName: 'Muhammad',
        middleName: 'Kamarul',
        lastName: 'Kawnayeen'
    };
    describe('Destructing', () => {
        it('first should be 1', () => {
            expect(getFirst(values)).to.equal(1);
        });
        it('middle name should be Kamarul', () => {
            expect(getMiddleName(names)).to.equal('Kamarul');
        });
        it('display name should be Muhammad Kawnayeen', () => {
           expect(getDisplayName(names)).to.equal('Muhammad Kawnayeen');
        });
    });
}());