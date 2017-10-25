/**
 * Created by kawnayeen on 10/23/17.
 */
import {expect} from 'chai';
import {getEvenSum, getOddSum, getSum} from '../prod/8.being.functional';

(function () {
    "use strict";
    let values = [1, 2, 3, 4, 5];

    describe('array sum', () => {
        it('summation should be 15', () => {
            expect(getSum(values)).to.equal(15);
        });
        it('summation of even numbers should be 6', () => {
            expect(getEvenSum(values)).to.equal(6);
        });
        it('summation of odd numbers should be 9', () => {
            expect(getOddSum(values)).to.equal(9);
        });
    });
}());