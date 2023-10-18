const fs=require('fs');
const path=require('path');//Path for a file

const getProductsFromFile=(callback)=>{
    const p=path.join(
        path.dirname(require.main.filename),'data','products.json'
    );
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            //no file is present
            callback( []);
        }
        callback(JSON.parse(fileContent));
    });
}

module.exports= class Product {
    constructor(title){
        this.title=title;
    }
    //save METHOD --> store product in array products & Later a file

    save(){
        const p=path.join(
            path.dirname(require.main.filename),'data','products.json'
        );

        //ReadFile
        fs.readFile(p , (err, fileContent)=>{
            let products=[];
            if(!err){
                //old file to be used
                products= JSON.parse(fileContent);
            }

            //add new product
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>console.log(err));
        })
    }

    //fetchAll

    static fetchAll(callback){
        //return the array products
        //fetch data from file
        //earlier this was ASYNCYRHNOUS CODE
        //which is why we used callbacks

        getProductsFromFile(callback);
        
    }
}

//JSON.stringfy ==> Array -> Json
//JSON.parse    ==> Json -> Array