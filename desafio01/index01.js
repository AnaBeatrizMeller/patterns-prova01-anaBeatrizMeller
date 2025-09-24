//Abstract Factory
class LightButton {
    render() {
      return "Botão branco criado";
    }
  }
  class DarkButton {
    render() {
      return "Botão preto criado";
    }
  }
  
  class LightWindow {
    render() {
      return "Janela clara aberta";
    }
  }
  class DarkWindow {
    render() {
      return "Janela escura aberta";
    }
  }


class ThemeFactory {
    createDarkTheme() {
        throw new Error("Método abstrato deve ser implementado");
    }

    createLightTheme() {
        throw new Error("Método abstrato deve ser implementado");
    }
}

class ButtonFactory extends ThemeFactory{ 
    createDarkTheme() {
        return new DarkButton
    }

    createLightTheme() {
        return new LightButton
    }
}

class WindowFactory extends ThemeFactory{ 
    createDarkTheme() {
        return new DarkWindow
    }

    createLightTheme() {
        return new LightWindow
    }
}

class StyleApp {
    constructor(factory) {
        this.factory = factory;
    }

    renderSystem() {
        const dark = this.factory.createDarkTheme();
        const light = this.factory.createLightTheme();

        console.log(dark.render());
        console.log(light.render())
    }

}

function main() {
    const factories = {
        button: new ButtonFactory,
        window: new WindowFactory
    };

    const types = ["button", "window"];

    types.forEach((type) => {
        console.log(`\n>> Fábrica selecionada: ${type} <<`);
        const factory = factories[type];
        if (!factory) throw new Error("Tipo de fábrica desconhecido");

        const app = new StyleApp(factory);
        app.renderSystem();
    })
}
  
main()