import {ConcreteFactory2} from './concrete-factory-2';
import {ConcreteFactory1} from './concrete-factory-1';
import {AbstractFactory}  from './abstract-factory';

const clientCode = function (factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productA.usefulFunctionA());
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
};

const concreteFactory1 = new ConcreteFactory1();
clientCode(concreteFactory1);

const concreteFactory2 = new ConcreteFactory2();
clientCode(concreteFactory2);
