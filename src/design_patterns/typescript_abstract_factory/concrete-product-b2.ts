import {AbstractProductB} from './abstract-product-b';
import {AbstractProductA} from './abstract-product-a';

export class ConcreteProductB2 implements AbstractProductB {
    usefulFunctionB(): string {
        return `Result of product B1`;
    }

    anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `Result of B2 collaborating with ${result}`;
    }
}