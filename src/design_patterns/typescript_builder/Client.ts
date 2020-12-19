import {ConcreteBuilder1} from './ConcreteBuilder1';
import {Director}         from './Director';

const clientCode = function (director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Standard basic product: ');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Custom product:');
    builder.producePartA().producePartB().producePartC();

    builder.getProduct().listParts()
};

const director = new Director();
clientCode(director);
