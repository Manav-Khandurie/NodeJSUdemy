const path = require('path');

const express = require('express');

const router = express.Router();



const productsController=require("../controllers/products");
const { Module } = require('module');

// /admin/add-product => GET
router.get('/add-product',productsController.getAddProduct);
//Refrence to the fun getAddProd in controllers

// /admin/add-product => POST
router.post('/add-product', 
    productsController.postAddProduct
);

module.exports = router;
//exports.products = products;
