import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    productID:{
        type:String,
        required:true
    },
    description:{
        typr:String
    },
    CD:{
        type:Number
    },
    SD:{
        type:Number
    },
    RD:{
        type:Number
    },
    VAT:{
        type:Number
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);

export default Product