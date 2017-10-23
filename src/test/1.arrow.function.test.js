/**
 * Created by kawnayeen on 10/23/17.
 */
import { expect } from 'chai';

(function () {
    "use strict";
    var sayYourName = function () {
        return 'cefalo';
    };

    var sayYourNameAgain = () => 'cefalo';

    describe('Arrow function', () => {
        it('"sayYourName" & "sayYourNameAgain" should be equal', () => {
            expect(sayYourName()).to.equal(sayYourNameAgain());
        });
    });
}());