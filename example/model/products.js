const createDbConnection = require('./db');
const db = createDbConnection();

function getProducts() {
    return new Promise((resolve, reject) => {
        db.all(`SELECT productId, title, desc, price FROM products`, (error, rows) => {
            if (error) reject(error.message);
            else resolve(rows);
        });
    });
}

function getProduct(productId) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT price FROM products WHERE productId = ?`,
        productId,
        (error, row) => {
            if (error) reject(error.message);
            else resolve(row);
        });
    });
}

module.exports = { getProducts, getProduct }