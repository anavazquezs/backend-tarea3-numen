const controllers = {};

const Product = require('../models/Product');

controllers.myIndex = (req, res) => {
    res.render('index', { title: 'Pharmacy app' });
};

controllers.greetToUser = (req, res) => {
    res.send('Hello user');
};

controllers.productsView = async (req, res) => {
    const products = await Product.find();
    res.json({products});
};

controllers.createNewProduct = async (req, res) => {
    try {
        const { code, name, drug, dosage, dosage_form, content, in_stock, price } = req.body;
        const newProd = new Product({ code, name, drug, dosage, dosage_form, content, in_stock, price });
        await newProd.save();
        res.send('Success tu create a new product');
        res.status(201).json({newProd});
    } catch (err) {
        res.status(501).json({msg: 'Can not save the new product into data base'});
        console.log(err);
    };
};

module.exports = controllers;