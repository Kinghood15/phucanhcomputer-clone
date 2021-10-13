require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./router/user');
const clientRouter = require('./router/client');
const supplierRouter = require('./router/supplier');
const categoryproductRouter = require('./router/categoryproduct');
const productRouter = require('./router/product');
const productinvoiceRouter = require('./router/productinvoice');
const supplierinvoiceRouter = require('./router/supplierinvoice');
const useradminRouter = require('./router/useradmin');

//kinghood:15090101@pccomputer.gbr1s.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-tj9k9k-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true
const url= `mongodb://${process.env.DB_USERNAMES}:${process.env.DB_PASSWORDS}@localhost:27017/QL-PcComputer?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;
const connectDB = async () => {
    try{
        await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true

        })
        console.log("MongoDB connect");
    }catch(e){
        console.log(e.message);
        process.exit(1);
    } 
}
connectDB();

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());

app.use('/api/nhacungcap', supplierRouter);
app.use('/api/danhmucsanpham', categoryproductRouter);
app.use('/api/sanpham', productRouter);
app.use('/api/hdsp', productinvoiceRouter);
app.use('/api/hdncc', supplierinvoiceRouter);
app.use('/api/admin-acodern', useradminRouter);
app.use('/api/user',userRouter);
app.use('/api/client',clientRouter);

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Server started on port ${port}`))