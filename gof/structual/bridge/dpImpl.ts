// Abstraction
interface DatabaseConnector {
  connect(): void;
}

// Concrete Abstractions
class MySQLConnector implements DatabaseConnector {
  connect() {
    console.log('Connecting to MySQL database.');
  }
}

class MongoDBConnector implements DatabaseConnector {
  connect() {
    console.log('Connecting to MongoDB database.');
  }
}

// Bridge
interface Database {
  connector: DatabaseConnector;
  executeQuery(query: string): void;
}

// Concrete Implementations
class MySQLDatabase implements Database {
  connector: DatabaseConnector;

  constructor(connector: DatabaseConnector) {
    this.connector = connector;
  }

  executeQuery(query: string) {
    this.connector.connect();
    console.log(`Executing ${query} on MySQL database.`);
  }
}

class MongoDBDatabase implements Database {
  connector: DatabaseConnector;

  constructor(connector: DatabaseConnector) {
    this.connector = connector;
  }

  executeQuery(query: string) {
    this.connector.connect();
    console.log(`Executing ${query} on MongoDB database.`);
  }
}
