// Componente base
class TaskSystemItem {
    showDetails() {
        throw new Error("Método abstrato!");
      }
}

//folha
class Task extends TaskSystemItem {
    constructor(name) {
        super();
        this.name = name;
      }
    
      showDetails(indent = "") {
        console.log(`${indent}Tarefa: ${this.name}`);
      }
}

//composite
class Project extends TaskSystemItem {
    constructor(name) {
        super();
        this.name = name;
        this.tasks = [];
      }

      add(task) {
        this.tasks.push(task);
      }

      showDetails(indent = " ") {
        console.log(`${indent}Projeto: ${this.name}`)
        this.tasks.forEach((task) => task.showDetails(indent + "   "))
      }
}

const t1 = new Task("Escrever documentação");
const t2 = new Task("Fazer testes");
const p = new Project("Lançamento v1.0");
p.add(t1);
p.add(t2);
  
p.showDetails();