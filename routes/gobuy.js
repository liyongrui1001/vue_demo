let express = require("express");

module.exports = function(db) {
    let router = express.Router();
    router.post("/", (req, res) => {
        let sql = `SELECT * FROM shopcar`;

        db.query(sql, (err, data) => {
            // console.log(data)
            res.send(data);
        })
    })
    return router;
}