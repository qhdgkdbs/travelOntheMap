const express = require('express') 
var router = express.Router();
const { Spot } = require("../models/Spot");
const config = require("../config/key");



const mongoose = require('mongoose')
mongoose.connect(config.mongoURL , { 
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log("MONGO_DB connected"))
.catch(err => console.log(err))

//파라미터 값 가져오기
function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}


// /file/allFile 
router.get('/allFile', (req, res) => {
    Spot.find( (err, spots) =>{
        if(err) return res.status(500).send({err : 'databaseErr'});
        res.json(Object.values(spots))
      })
});

// /file/delete/
router.put('/delete/:title', (req,res)=>{
    // const title = parseInt(req.params.id, 10);
    // if(!title) return res.status(400).end();
    var ddd = Spot.findOne( { _id: req.params.title },(err, result) => {
        if (err) {
        //   throw err;
        }
        console.log(result._id )
        // Spot.deleteOne({ "spot" : result.spot })
        try {
            Spot.deleteOne( { "_id" : result._id } );
            res.status(204).end();
         } catch (e) {
            console.log("삭제실패")
         }
        

    })

    // Spot.remove({ _id : req.params.title})
    // console.log(req.params.title)
    // res.render('edit', { title: 'Express' })
});

// /file/edit
router.get('/edit', (req, res) => {
  res.render('edit', { title: 'Express' })
});

router.post('/', (req, res) => {
    //회원 가입 할때 필요한 정보들을 클라이언트에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.
    //데이터 모델을 가져와야한다.

    const spot = new Spot(req.body)
    //body에는 
    // {
    //     id : qhdgkdbs,
    //     password : asdf,
    // }
    // 처럼 데이터가 들어있음

    spot.save((err, userInfo) => {
        if(err) return res.json({success : false, err})

        return res.status(200).json({
            success : true
        }
        )
    })

})

module.exports = router;