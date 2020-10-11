
var assert    = require("chai").assert;
var calculator = require("./insumo");
describe("Verificando los campos de insumo por medio de la interfaz CHAI y el Framework Mocha: ", function () {
    describe("Check addTested Function: ", function () {
        it("El insumo es String: assert.equal(value,'Paracetamol'): ", function () {
            result = calculator.addTested("text");
            assert.equal(result, "text tested");
        });
        it("Cantidad debe ser numerica: assert.typeOf(value,'luis'): ", function () {
            result = calculator.addTested("text");
            assert.typeOf(result, "number");
        });
        it("La cantidad maxima debe ser de 4 digitos: assert.lengthOf(value,'100'): ", function () {
            result = calculator.addTested(100);
            assert.lengthOf(result, 10);
        });
    });
});



