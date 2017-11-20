let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.post("/", (req, res) => {
        let sql = `SELECT * FROM shopcar WHERE gid="${req.body.gid}"`;

        db.query(sql, (err, data) => {
            if (!err) {
                // console.log(data)
                if(data.length>0){
                    // console.log(typeof data[0].count,"...")
                     var newCount=Number(data[0].count)+1;
                    let sql=`UPDATE shopcar SET count="${Number(data[0].count)+1}" WHERE id="${data[0].id}"`;
                    // console.log(data[0].count,"......")
                    db.query(sql,(err,data)=>{
                        if(!err){
                            // console.log(data)
                            res.send({ "err": 0, "msg": "加入购物车成功","count":newCount });
                        }
                    })
                }else{
                    let sql = `INSERT INTO shopcar (id,gid,count,price,title,src) VALUES (0,"${req.body.gid}","${req.body.count}","${req.body.price}","${req.body.title}","${req.body.src}")`;
                    db.query(sql,(err,data)=>{
                        if(!err){
                            res.send({ "err": 0, "msg": "加入购物车成功","count":1 });
                        }
                    })
                }
            }
        })
    })
    return router;
}