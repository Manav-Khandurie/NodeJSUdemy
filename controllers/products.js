const Product=require('../models/product');//import class Product

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  //now we will be calling the model product.js here
  const product=new Product(req.body.title);//Object of class
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {

  //here we will call the static method fetchAll of Product
  Product.fetchAll((products)=>{
    //console.log(products);
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
  
};
