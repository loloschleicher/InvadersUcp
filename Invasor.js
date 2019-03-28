"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Artefacto_1 = require("./Artefacto");
var Invasor = /** @class */ (function (_super) {
    __extends(Invasor, _super);
    function Invasor(vida, velocidad) {
        var _this = this;
        _this.setVida(vida);
        _this = _super.call(this, velocidad) || this;
        return _this;
    }
    Invasor.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Invasor.prototype.getVida = function () {
        return this.vida;
    };
    Invasor.prototype.chocarNave = function (nave) {
        nave.setVida(0);
    };
    Invasor.prototype.destruirNave = function (nave) {
        var nuevoDanio = (this.getVelocidad() * 20 / 100) + this.getVelocidad();
        var nuevaVida = nave.getVida() - nuevoDanio;
        nave.setVida(nuevaVida);
    };
    return Invasor;
}(Artefacto_1.Artefacto));
exports.Invasor = Invasor;
