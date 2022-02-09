const {SchemaTypes: SchemaTypes, Schema: Schema, model: model} = require('mongoose');

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    recyclable: {
        type: Boolean,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateModified: {
        type: Date,
        default: null
    },
    datesModified: {
        type: Array,
    }    

})

const Item = model('item', ItemSchema);

module.exports = Item;