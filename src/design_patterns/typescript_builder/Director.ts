// director is optional, client can use the builder directly
export class Director {
    private builder: Builder;

    public setBuilder(builder: Builder) {
        this.builder = builder;
    }

    public buildMinimalViableProduct() {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct() {
        this.builder.producePartA()
        this.builder.producePartB();
        this.builder.producePartC();
    }
}