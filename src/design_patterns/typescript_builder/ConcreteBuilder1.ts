import {Product1} from './Product1';

export class ConcreteBuilder1 implements Builder {
    private product: Product1;

    constructor() {
        this.reset();
    }

    public reset() {
        this.product = new Product1();
    }

    public producePartA(): Builder {
        this.product.parts.push('PartA1');
        return this;
    }

    public producePartB(): Builder {
        this.product.parts.push('PartB1');
        return this;
    }

    public producePartC(): Builder {
        this.product.parts.push('PartC1');
        return this;
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}