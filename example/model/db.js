const sqlite3 = require('sqlite3').verbose();

function createDbConnection() {
    const db = new sqlite3.Database('./airbean.sqlite', (error) => {
        if (error) return console.log(error.message);
        createTable(db);
    });

    return db;
}

function createTable(db) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            productId text NOT NULL,
            title text NOT NULL,
            desc text NOT NULL,
            price INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS orders (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            orderNr text NOT NULL,
            deliveryTime INTEGER NOT NULL,
            total INTEGER NOT NULL,
            orderDate text NOT NULL
        );
        CREATE TABLE IF NOT EXISTS order_items (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            orderNr text NOT NULL,
            productId text NOT NULL,
            FOREIGN KEY (orderNr) REFERENCES orders(orderNr),
            FOREIGN KEY (productId) REFERENCES products(productId)
        );
    `);
}

module.exports = createDbConnection;