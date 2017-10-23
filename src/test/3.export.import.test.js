/**
 * Created by kawnayeen on 10/23/17.
 */
import { expect } from 'chai';
import { sayHello } from '../prod/3.export.import';

(function () {
    "use strict";
    describe('Export, Import', () => {
        it('we should be able to import modules which were exported', () => {
            expect(sayHello).to.be.a('function');
            expect(sayHello('kamarul')).to.equal('Hello kamarul');
        });
    });
}());