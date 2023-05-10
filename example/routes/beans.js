const { Router } = require('express')
const router = new Router()

const { generateOrderNr, generateETA } = require('../utils/utils');
const { getProducts } = require('../model/products');
const { addOrder } = require('../model/orders');

router.get('/', async (req, res) => {
   try {
        const products = await getProducts();

        res.json({ success: true, products: products });
   } catch (error) {
        res.json({ success: false, message: 'Could not get menu' });
   }
});


router.post('/order', async (req, res) => {
    const orderDetails = req.body;

    const order = {
        eta: generateETA(),
        orderNr: generateOrderNr(),
    }

    const result = await addOrder(orderDetails, order);

    if (result) {
        order.success = true;
        res.json(order);
    } else {
        res.json({ success: false, message: 'Could not place order' });
    }
});



module.exports = router