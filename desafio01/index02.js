class Lanche {
    constructor() {
        this.pao = null;
        this.carne = null;
        this.queijo = null;
        this.salada = null;
        this.molho = null;
    }
  
    show() {
      console.log(`Lanche: 
        pao: ${this.pao ? "Sim" : "Não"},
        carne: ${this.carne ? "Sim" : "Não"},
        queijo: ${this.queijo ? "Sim" : "Não"},
        salada: ${this.salada ? "Sim" : "Não"},
        molho: ${this.molho ? "Sim" : "Não"}
      `);
    }
  }
  

class LancheBuilder {
    constructor() {
        this.lanche = new Lanche();
    }

    setPao(pao) {
        this.lanche.pao = pao;
        return this;
    }

    setCarne(carne) {
        this.lanche.carne = carne;
        return this;
    }

    setQueijo(queijo) {
        this.lanche.queijo = queijo;
        return this;
    }

    setSalada(salada) {
        this.lanche.salada = salada;
        return this;
    }

    setMolho(molho) {
        this.lanche.molho = molho;
        return this;
    }
    
    build() {
        return this.lanche;
      }
}

class LancheDirector {
    static buildCheeseburger() {
        return new LancheBuilder()
        .setPao(true)
        .setCarne(true)
        .setQueijo(true)
        .setMolho(true)
        .setSalada(false)
        .build();
    }

    static buildLancheCompleto() {
        return new LancheBuilder()
        .setPao(true)
        .setCarne(true)
        .setQueijo(true)
        .setMolho(true)
        .setSalada(true)
        .build();
    }
}



const cheeseburger = LancheDirector.buildCheeseburger();
const lancheCompleto = LancheDirector.buildLancheCompleto();


cheeseburger.show();
lancheCompleto.show();