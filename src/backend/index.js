const app = require('express')();
const cors = require('cors');

const port = process.env.PORT || 3001;

const mongoClient = require('mongodb').MongoClient;

app.use(cors());
app.listen(port , ()=>console.log(`listening on ${port}`));

app.get('/getTodos',async (req,res)=>{

    let client = await mongoClient.connect('mongodb://127.0.0.1:27017' , { useNewUrlParser: true, useUnifiedTopology: true })
    let db = client.db('todos');
    let data = await db.collection('todolist').find().project({'_id':0}).toArray();
    res.status(200).json({'payload':data});
});