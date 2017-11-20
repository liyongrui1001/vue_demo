let express = require("express");



module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res,next) => {
        //console.log(req.query.id);
        let sql=`SELECT * FROM news WHERE ID="${req.query.id}"`;
        db.query(sql,(err,data)=>{
          if(!err){
            
            res.send(data);
          }
        })
    });
    
    return router;
}