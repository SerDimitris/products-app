const Product = require('../models/product.model');
const logger = require('../logger/logger');

exports.findAll = async(req, res) => {
    console.log('Find all products')
    try {
        const result = await Product.find();
        res.status(200).json({data: result})
        logger.debug('Success in reading all products')
        logger.info('Success in finding all products')
    } catch(err) {
        console.log(`Prodlem in reading all products, ${err}`)
        logger.error(`Prodlem in reading all products, ${err}`)
    }
}

exports.findOne = async(req, res) => {
    const id = req.params.id;
    console.log(`Find ${id} product`)
    try {
        const result = await Product.findOne({_id: id});
        res.status(200).json({data: result})
        logger.debug('Success in reading product', id)
        logger.info('Success in finding product', id)
    } catch(err) {
        console.log('Problem in reading product', err)
        logger.error('Problem in finding product', err)
    }
}

exports.create = async(req, res) => {
    console.log('Insert new product')
    console.log(req.body)
    const newProduct = new Product ({
        product: req.body.product,
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    });
    try {
        const result = await newProduct.save()
        res.status(200).json({data: result})
        logger.debug('Success in creating new product')
        logger.info('Success in adding new product')
    } catch(err) {
        console.log('Problem in creating new product', err)
        logger.error('Problem in adding new product', err)
    }
}

exports.update = async(req, res) => {
    const id = req.params.id;
    console.log(`Update product with id ${id}`)
    const updateProduct = {
        product: req.body.product,
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    }
    try {
        const result = await Product.findOneAndUpdate(
            {_id: id},
            updateProduct,
            {new: true})
        res.status(200).json({data: result});
        console.log("Success in updating product", id)
    } catch(err) {
        res.status(400).json({data: err})
        console.log("Problem in updating product", id)
    }
}

exports.delete = async(req, res) => {
    const id = req.params.id;
    console.log(`Delete product: ${id}`)
    try {
        const result = await Product.findOneAndDelete({_id: id})
        res.status(200).json({data: result})
        console.log("Success in deleting product", id)
    } catch(err) {
        res.status(400).json(err)
        console.log(`Problem in deleting product ${id}`, err)
    }
}