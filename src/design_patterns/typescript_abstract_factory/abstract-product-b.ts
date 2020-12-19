import {AbstractProductA} from './abstract-product-a';

export interface AbstractProductB {
    usefulFunctionB(): string;

    anotherUsefulFunctionB(collaborator: AbstractProductA): string;

}