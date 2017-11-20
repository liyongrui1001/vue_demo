let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.post("/", (req, res) => {
        let sql = `DELETE FROM shopcar WHERE gid="${req.body.gid}"`;

        db.query(sql, (err, data) => {
            if (!err) {
                res.send({ "err": 0, "msg": "删除成功" });
            }
        })
    })
    return router;
}