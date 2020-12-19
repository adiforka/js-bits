import { ConcreteProductB1 } from './concrete-product-b1';
import { ConcreteProductA1 } from './concrete-product-a1';
import { AbstractFactory }  from './abstract-factory';
import { AbstractProductA } from './abstract-product-a';
import { AbstractProductB } from './abstract-product-b';

export class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}