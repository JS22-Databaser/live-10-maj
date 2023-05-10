const createDbConnection = require('./db');
const db = createDbConnection();

function createOrderItem(orderNr, product) {
    const { id, quantity } = product;

    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO order_items (orderNr, productId, quantity) VALUES (?, ?, ?)`,
            [orderNr, id, quantity],
            (error) => {
                if (error) reject(error.message);
                else resolve(true);
            }
        )
    });
}

module.exports = { createOrderItem }