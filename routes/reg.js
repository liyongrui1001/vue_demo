let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.post("/", (req, res) => {
        console.log(req.body.username)
        let sql = `SELECT * FROM user WHERE username="${req.body.username}"`;
        db.query(sql, (err, data) => {
            if (!err) {
                if (data.length > 0) {
                    res.send({ "err": 1, "msg": "用户名已存在" });
                } else {
                    let sql = `INSERT INTO user (id,username,password,email,qq,level) VALUES (0,"${req.body.username}","${req.body.password}","${req.body.email}","${req.body.qq}","普通会员")`;
                    db.query(sql, (err, data) => {
                        if (!err) {
                            res.send({ "err": 0, "msg": "注册成功" });

                        }
                    })

                }
            }
        })
    })
    return router;
}