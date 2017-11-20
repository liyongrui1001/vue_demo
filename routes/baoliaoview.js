let express = require("express");

function rand(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

module.exports = function(db) {
    let router = express.Router();
    router.get("/", (req, res,next) => {
        //console.log(req.query.id);
        let sql=`SELECT * FROM baoliao WHERE ID="${req.query.id}"`;
        db.query(sql,(err,data)=>{
          if(!err){
            
            res.send(data);
          }
        })
    });
    
    return router;
}