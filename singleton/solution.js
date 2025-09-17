class Database {
  constructor(connectionString) {
    if (Database.instance) {
      return Database.instance;
    }
    this.connectionString = connectionString;
    this.id = Math.random();
    console.log(`🔌 Nova conexão criada: ${this.id}`);
    Database.instance = this;
  }

  query(sql) {
    console.log(`Executando query [${sql}] na conexão ${this.id}`);
  }
}

const db1 = new Database("db://meu-banco");
db1.query("SELECT * FROM users");

const db2 = new Database("db://meu-banco");
db2.query("SELECT * FROM products");