const createDbConnection = require('./db');
const db = createDbConnection();

//db.run(`ALTER TABLE order_items ADD quantity INTEGER;`);

//db.run(`UPDATE order_items SET quantity = 1 `);

// db.exec(`
//     INSERT INTO products (productId, title, desc, price) VALUES ("coffee-vxig26my4y", "Bryggkaffe", "Bryggd på månadens bönor.", 39);
//     INSERT INTO products (productId, title, desc, price) VALUES ("coffee-220dodpzmg", "Caffè Doppio", "Bryggd på månadens bönor.", 49);
//     INSERT INTO products (productId, title, desc, price) VALUES ("coffee-4pdksmrkfa", "Cappuccino", "Bryggd på månadens bönor.", 49);
//     INSERT INTO products (productId, title, desc, price) VALUES ("coffee-m2h37k2mnh", "Latte Macchiato", "Bryggd på månadens bönor.", 49);
//     INSERT INTO products (productId, title, desc, price) VALUES ("coffee-0lp6ter3bh", "Kaffe Latte", "Bryggd på månadens bönor.", 54);
//     INSERT INTO products (productId, title, desc, price) VALUES ("coffee-e8hz0lk7q5", "Cortado", "Bryggd på månadens bönor.", 39);
// `);