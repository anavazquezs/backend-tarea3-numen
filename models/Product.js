const { Schema, model } = require('mongoose');

/*
El esquema tiene que ser de una farmacia y tiene que cumplir con los siguientes parámetros:
1- Tener un atributo obligatorio: En este caso es "code".
2- Tener dos atributos tipo Number: "content" y "price".
3- Contar con los campos strings que sean necesarios ( a elección ): "name", "drug", "dosage", "dosage_form".
4- Tener un campo booleano: "in_stock".
 */

const ProductSchema = new Schema({
    code: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    drug: {
        type: String,
    },
    dosage: {
        type: String,
    },
    dosage_form: {
        type: String,
    },
    content: {
        type: Number,
    },
    in_stock: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
    }
}, {
    timestamps: true,
});

module.exports = model('Product', ProductSchema);