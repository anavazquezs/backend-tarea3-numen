const controllers = {};

const { validationResult } = require('express-validator');
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

controllers.viewOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json({product});
    } catch (err) {
        res.status(400).json({msg: 'Error with id', err});
    };
};

controllers.createNewProduct = async (req, res) => {
    try {
        const error = validationResult(req);
        if(error.isEmpty()){
            const { code, name, drug, dosage, dosage_form, content, in_stock, price } = req.body;
            const newProd = new Product({ code, name, drug, dosage, dosage_form, content, in_stock, price });
            await newProd.save();
            res.send('Success tu create a new product');
            res.status(201).json({newProd});
        } else {
            res.status(501).json(error);
        };
    } catch (err) {
        res.status(501).json({msg: 'Can not save the new product into data base', err});
    };
};

controllers.editProduct = async (req, res) => {
    try {
        const error = validationResult(req);
        if(error.isEmpty()){
            const { id } = req.params;
            await Product.findByIdAndUpdate(id, req.body);
            res.status(202).json({msg: 'Product updated succesfully'});
        } else {
            res.status(501).json(error);
        };
    } catch (err) {
        res.status(501).json({msg: 'Can not update the product', err});
    };
};

controllers.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({msg: 'Product deleted successfully'});
    } catch (err) {
        res.status(400).json({msg: 'Can not delete the product', err});
    };
};

module.exports = controllers;