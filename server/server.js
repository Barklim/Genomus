const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();
//const api = express.Router();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE)

const { User } = require('./models/user'); 
const { Book } = require('./models/book');
const { Gen } = require('./models/gen');
const { IGen } = require('./models/igen');
const { auth } = require('./middleware/auth');

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('client/build'))

// GET //
app.get('/api/auth',auth,(req,res)=>{
    res.json({
        isAuth:true,
        id:req.user._id,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname,
        genId:req.user.genId,
        role:req.user.role
    })
});

app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})


app.get('/api/getBook',(req,res)=>{
    let id = req.query.id;

    Book.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})


app.get('/api/allow',(req,res)=>{
        Book.findOne({genId:req.query.user}).exec((err,doc)=>{

            //if(err) return res.status(400).send(err); :(((
            if(err) return res.send({
                allowCheck: false,
                allowCompat: false
            });
            if(doc) return res.send({
                allowCheck: doc.allowCheck,
                allowCompat: doc.allowCompat
            }); 
/*            else {
                    res.send({
                    allowCheck: doc.allowCheck,
                    allowCompat: doc.allowCompat
                })
            };*/
        })
})

/*
res.json({
            allowCheck:req.book.allowCheck,
            allowCompat:req.book.allowCompat
        })
app.get('/api/user_other_gen',(req,res)=>{
    Gen.findOne({genId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})*/

app.get('/api/getGen',(req,res)=>{
    let id = req.query.id;

    Gen.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/getIgen',(req,res)=>{
    let id = req.query.id;

    IGen.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/getUser',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/books',(req,res)=>{
    // locahost:3001/api/books?skip=3&limit=2&order=asc
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    // ORDER = asc || desc
    Book.find({allowCompat:true}).skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

// x
app.get('/api/getUserRole',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})

app.get('/api/getReviewer',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname: doc.lastname
        })
    })
})

app.get('/api/users',(req,res)=>{
    User.find({},(err,users)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(users)
    })
})

app.get('/api/user_posts',(req,res)=>{
    Book.find({ownerId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

app.get('/api/all_user_posts',(req,res)=>{
    Book.find().exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

app.get('/api/user_gens',(req,res)=>{
    Gen.find({ownerGenId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

app.get('/api/user_gen',(req,res)=>{
    Gen.findOne({genId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

app.get('/api/user_gen_special',(req,res)=>{
    Gen.find({genId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

/*app.get('/api/user_other_gen',(req,res)=>{
    Gen.findOne({genId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})*/


app.get('/api/user_other_gen',(req,res)=>{
    Gen.findOne({genId:req.query.user}).exec((err,docs)=>{
        if(err) return res.send({
            rule_0: 0,
            rule_1: 0,
            rule_2: 0,
            rule_3: 0,
            rule_4: 0,
            rule_5: 0,
            rule_6: 0,
            rule_7: 0,
            rule_8: 0,
            rule_9: 0,
            rule_10: 0,
            rule_11: 0,
            rule_12: 0,
            rule_13: 0,
            rule_14: 0,
            rule_15: 0,
            rule_16: 0,
            rule_17: 0,
            rule_18: 0,
            rule_19: 0,
            rule_20: 0,
            rule_21: 0,
            rule_22: 0,
            rule_23: 0,
            rule_24: 0,
            rule_25: 0,
            rule_26: 0,
            rule_27: 0,
            rule_28: 0,
            rule_29: 0,
        });
        if(docs) return res.send({
            rule_0: docs.rule_0,
            rule_1: docs.rule_1,
            rule_2: docs.rule_2,
            rule_3: docs.rule_3,
            rule_4: docs.rule_4,
            rule_5: docs.rule_5,
            rule_6: docs.rule_6,
            rule_7: docs.rule_7,
            rule_8: docs.rule_8,
            rule_9: docs.rule_9,
            rule_10: docs.rule_10,
            rule_11: docs.rule_11,
            rule_12: docs.rule_12,
            rule_13: docs.rule_13,
            rule_14: docs.rule_14,
            rule_15: docs.rule_15,
            rule_16: docs.rule_16,
            rule_17: docs.rule_17,
            rule_18: docs.rule_18,
            rule_19: docs.rule_19,
            rule_20: docs.rule_20,
            rule_21: docs.rule_21,
            rule_22: docs.rule_22,
            rule_23: docs.rule_23,
            rule_24: docs.rule_24,
            rule_25: docs.rule_25,
            rule_26: docs.rule_26,
            rule_27: docs.rule_27,
            rule_28: docs.rule_28,
            rule_29: docs.rule_29,
        });
        res.send(docs)
    })
})

//x
app.get('/api/user_role',(req,res)=>{
    User.find({role:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

//x
app.get('/api/getUser_role',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname: doc.lastname,
            role: doc.role
        })
    })
})


// POST //
app.post('/api/book',(req,res)=>{
    const book = new Book(req.body)

    book.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            bookId: doc._id
        })
    })
})

app.post('/api/gen',(req,res)=>{
    const gen = new Gen(req.body)

    gen.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            gId: doc._id
        })
    })
})

//x
app.post('/api/igen',(req,res)=>{
    const igen = new IGen(req.body)

    igen.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            igenId: doc._id
        })
    })
})

app.post('/api/register',(req,res)=>{
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json({success:false});
        res.status(200).json({
            success:true,
            user:doc
        })
    })
})

app.post('/api/registerScreen',(req,res)=>{
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json({success:false});
        res.status(200).json({
            success:true,
            user:doc
        })
    })
})

app.post('/api/login',(req,res)=>{
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({isAuth:false,message:'Не удалось войти, email не найден'})

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth:false,
                message:'Неверный пароль'
            });

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('auth',user.token).json({
                    isAuth:true,
                    id:user._id,
                    email:user.email
                })
            })
        })
    })
})


// UPDATE //
app.post('/api/book_update',(req,res)=>{
    Book.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

app.post('/api/user_update',(req,res)=>{
    User.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

app.post('/api/gen_update',(req,res)=>{
    Gen.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

app.post('/api/igen_update',(req,res)=>{
    IGen.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

// DELETE //

app.delete('/api/delete_book',(req,res)=>{
    let id = req.query.id;

    Book.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

app.delete('/api/delete_user',(req,res)=>{
    let id = req.query.id;

    User.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

app.delete('/api/delete_gen',(req,res)=>{
    let id = req.query.id;

    Gen.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'../client','build','index.html'))
    })
}


// const HOST = process.env.HOST || '0.0.0.0';
// const port = process.env.PORT|| 80;
// app.listen(port,()=>{
//     console.log(`SERVER RUNNNING`)
// })

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`SERVER RUNNNING`)
})

