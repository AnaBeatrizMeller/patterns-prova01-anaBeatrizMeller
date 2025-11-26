//SOLID - foi escolhido ISP (Interface Segregation Principle)

class EcommerceOperacoes {
    comprarProduto() {}
    cadastrarProduto() {}
    atualizarEntrega() {}
  }
  
  class ClienteSemISP extends EcommerceOperacoes {
    //metodo correto
    comprarProduto() {
      console.log("Cliente realizou compra.");
    }
  
    cadastrarProduto() {
      console.log("Cliente cadastrou produto.");
    }
  
    atualizarEntrega() {
      console.log("Cliente atualizou entrega.");
    }
  }
  
  class VendedorSemISP extends EcommerceOperacoes {
    comprarProduto() {
      console.log(" Vendedor deveria comprar produto.");
    }
  
    //metodo correto
    cadastrarProduto() {
      console.log("Vendedor cadastrou produto.");
    }
  
    atualizarEntrega() {
      console.log("Vendedor atualizou entrega.");
    }
  }
  
  class TransportadoraSemISP extends EcommerceOperacoes {
    comprarProduto() {
      console.log("Transportadora comprou produto.");
    }
  
    cadastrarProduto() {
      console.log("Transportadora cadastrou produto.");
    }
  
    //metodo correto
    atualizarEntrega() {
      console.log("Transportadora atualizou entrega.");
    }
  }
  

//Exemplo aplicando o ISP
//Cada classe utiliza apenas as funções necessárias
  
  class InterfaceComprar {
    comprarProduto() {}
  }
  
  class InterfaceCadastroProduto {
    cadastrarProduto() {}
  }
  
  class InterfaceEntrega {
    atualizarEntrega() {}
  }
  
  class ClienteComISP extends InterfaceComprar {
    comprarProduto() {
      console.log("Cliente realizou compra.");
    }
  }
  
  class VendedorComISP extends InterfaceCadastroProduto {
    cadastrarProduto() {
      console.log("Vendedor cadastrou produto.");
    }
  }
  
  
  class TransportadoraComISP extends InterfaceEntrega {
    atualizarEntrega() {
      console.log("Transportadora atualizou entrega.");
    }
  }
  
  
//Cada classe utiliza apenas as funções necessárias
  console.log("Sem ISP: ");
  
  const clienteSemISP = new ClienteSemISP();
  clienteSemISP.comprarProduto();
  clienteSemISP.cadastrarProduto();
  clienteSemISP.atualizarEntrega();
  
  const vendedorSemISP = new VendedorSemISP();
  vendedorSemISP.comprarProduto();
  vendedorSemISP.cadastrarProduto();
  vendedorSemISP.atualizarEntrega();
  
  const transportadoraSemISP = new TransportadoraSemISP();
  transportadoraSemISP.comprarProduto();
  transportadoraSemISP.cadastrarProduto();
  transportadoraSemISP.atualizarEntrega();
  
  
  console.log("Com ISP");
  
  const clienteComISP = new ClienteComISP();
  clienteComISP.comprarProduto();
  
  const vendedorComISP = new VendedorComISP();
  vendedorComISP.cadastrarProduto();
  
  const transportadoraComISP = new TransportadoraComISP();
  transportadoraComISP.atualizarEntrega();