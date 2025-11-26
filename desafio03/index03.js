//GRASP - padrão escolhido: Low coupling (Baixo Acoplamento)

// Exemplo sem o Low coupling

class MateriaDatabase {
    static materias = [
      { nome: "Programação", periodo: 1 },
      { nome: "Gestão de Produtos", periodo: 2 },
      { nome: "Back-end", periodo: 3 },
      { nome: "Arquitetura de Software", periodo: 4 },
      { nome: "Engenharia de Dados", periodo: 5 },
      { nome: "Design Patters", periodo: 6 }
    ];
  
    static getMaterias() {
      return this.materias;
    }
  }
  
  class AlunoAltoAcoplamento {
    constructor(nome) {
      this.nome = nome;
    }
  
    escolherMateriasDoPeriodo(periodo) {
      return MateriaDatabase.getMaterias().filter(m => m.periodo === periodo);
    }
  }
  
  console.log("VERSÃO COM ALTO ACOPLAMENTO ");
  const alunoRuim = new AlunoAltoAcoplamento("João");
  console.log(alunoRuim.escolherMateriasDoPeriodo(2));
  
  
  
  
  //Exemplo com alto acoplamento
  
  class Materia {
    constructor(nome, periodo) {
      this.nome = nome;
      this.periodo = periodo;
    }
  }
  
  class MateriaRepository {
    constructor() {
      this.materias = [
        new Materia("Matemática", 1),
        new Materia("Gestão de Produtos", 2),
        new Materia("Back-end", 3),
        new Materia("Arquitetura de Software", 4),
        new Materia("Engenharia de Dados", 5),
        new Materia("Design Patters", 6),
      ];
    }
  
    buscarPorPeriodo(periodo) {
      return this.materias.filter(m => m.periodo === periodo);
    }
  }
  
  
  class MateriaService {
    constructor(repository) {
      this.repository = repository;
    }
  
    listarMateriasDisponiveis(periodo) {
      return this.repository.buscarPorPeriodo(periodo);
    }
  }
  
  class AlunoBaixoAcoplamento {
    constructor(nome, materiaService) {
      this.nome = nome;
      this.materiaService = materiaService;
    }
  
    escolherMaterias(periodo) {
      return this.materiaService.listarMateriasDisponiveis(periodo);
    }
  }
  
  console.log("VERSÃO COM BAIXO ACOPLAMENTO");
  const repo = new MateriaRepository();
  const service = new MateriaService(repo);
  const alunoBom = new AlunoBaixoAcoplamento("Ana", service);
  
  console.log(alunoBom.escolherMaterias(5));