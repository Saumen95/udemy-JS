class Fruit {
    getFruit() {
        this.stuff = 'fruit';
        return {
            stuff: 'candy',
            method: () => this.stuff
        };
    }
}

