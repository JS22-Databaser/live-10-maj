const createDbConnection = require('./db');
const moment = require('moment');
const db = createDbConnection();

const { getProduct } = require('./products');
const { createOrderItem } = require('./order-items');

async function calculateTotalPrice(products) {
    let total = 0;

    for(const product of products) {
        const item = await getProduct(product.id);
        console.log('Pris: ', item);
        total += item.price * product.quantity;
    }

    return total;
}

async function addOrderItems(orderNr, products) {
    for(const product of products) {
        await createOrderItem(orderNr, product);
    }
}

function createOrder(order) {
    const { orderNr, eta, total, orderDate } = order;
    
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO orders (orderNr, deliveryTime, total, orderDate) VALUES (?, ?, ?, ?)`,
            [orderNr, eta, total, orderDate],
            (error) => {
                if (error) reject(error.message);
                else resolve(true);
            }
        )
    });
}

async function addOrder(orderDetails, order) {
    try {
        order.orderDate = moment().format('YY/MM/DD');

        order.total = await calculateTotalPrice(orderDetails.order);
        console.log(order);

        await createOrder(order);
        await addOrderItems(order.orderNr, orderDetails.order);
        
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = { addOrder }