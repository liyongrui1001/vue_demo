let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.post("/", (req, res) => {
        let sql = `SELECT * FROM shopcar WHERE gid="${req.body.gid}"`;

        db.query(sql, (err, data) => {
            if (!err) {
                if(data.length>0){
                     var newCount=Number(data[0].count)-1;
                    //  if(newCount<1){
                    //      newCount=1;
                    //  }
                    let sql=`UPDATE shopcar SET count="${newCount}" WHERE id="${data[0].id}"`;
                    db.query(sql,(err,data)=>{
                        if(!err){
                            res.send({ "err": 0, "msg": "加入购物车成功","count":newCount });
                        }
                    })
                }
            }
        })
    })
    return router;
}