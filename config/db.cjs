// connect mongoose to db

/*eslint-disable no-undef*/
const mongoose = require('mongoose')
console.log(process.env.MONGO_PASS);
let connectionString = `mongodb+srv://rahmanimassoud8:${process.env.MONGO_PASS}@cluster0.jpgwbpb.mongodb.net/Food?retryWrites=true&w=majority`

console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



mongoose.connection.once('open', ()=> {
    console.log("Connected to DB");
})



// 4PgzbGeiq3gu7qPj