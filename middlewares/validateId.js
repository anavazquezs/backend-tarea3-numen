const Product = require('../models/Product');

const validateId = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(product !== null) {
        next();
    } else {
        res.json({msg: 'Invalid id'});
    };
};

module.exports = { validateId };