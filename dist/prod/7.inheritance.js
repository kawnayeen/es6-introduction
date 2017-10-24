'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('./6.class');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bangladeshi = function (_Person) {
    _inherits(Bangladeshi, _Person);

    function Bangladeshi(name, age) {
        _classCallCheck(this, Bangladeshi);

        return _possibleConstructorReturn(this, (Bangladeshi.__proto__ || Object.getPrototypeOf(Bangladeshi)).call(this, name, age));
    }

    _createClass(Bangladeshi, [{
        key: 'toString',
        value: function toString() {
            if (this.age < 12) {
                return 'I\'m ' + this.name + ', Bangladeshi kid';
            } else return 'I\'m ' + this.name + ', Bangladeshi adult';
        }
    }]);

    return Bangladeshi;
}(_2.default);

exports.default = Bangladeshi;