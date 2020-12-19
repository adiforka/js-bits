import {ConcreteProductA2} from './concrete-product-a2';
import {ConcreteProductB2} from './concrete-product-b2';
import {AbstractProductA}  from './abstract-product-a';
import {AbstractFactory}   from './abstract-factory';
import {AbstractProductB} from './abstract-product-b';

export class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA2;
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}