const mongoose = require ('mongoose');
const {HOSTMONGO, DATABASE} = process.env;

const MONGODB_URL = `mongodb://${HOSTMONGO}/${DATABASE}`

mongoose.connect(MONGODB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})
    .then(console.log(`Database is connected ${DATABASE}`))
    .catch(err=>console.log(err))