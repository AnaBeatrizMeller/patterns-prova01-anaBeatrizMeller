// Componente base
class ComponentSystemItem {
  showDetails() {
    throw new Error("Método abstrato!");
  }
}

class Button extends ComponentSystemItem {
    constructor(label) {
    super()
    this.label = label;
  }

  draw(indent = "") {
    console.log(`${indent} Botão: [${this.label}]`);
  }
}


class Text extends ComponentSystemItem {
    constructor(content) {
    super()
    this.content = content;
  }

  draw(indent = "") {
    console.log(`${indent}Texto: "${this.content}"`);
  }
}

class Panel extends ComponentSystemItem {
    constructor(name) {
    super()
    this.name = name;
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  draw(indent = "") {
    console.log(`${indent}Painel: ${this.name}`);
    this.children.forEach((child) => child.draw(indent + "  "))
  }
}

const loginPanel = new Panel("Painel de Login");
loginPanel.add(new Text("Tela de Login"));
loginPanel.add(new Button("Entrar"));
loginPanel.add(new Button("Cancelar"));

const mainPanel = new Panel("Janela Principal");
mainPanel.add(loginPanel);
mainPanel.add(new Text("Versão 1.0.0"));

mainPanel.draw();