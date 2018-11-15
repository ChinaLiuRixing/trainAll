// 给后台提交数据
function save2backstage(result) {
    const fs = require("fs");
    fs.readFile('./data.json',function(err,data){
        if(err){
            console.log("bad")
        }else{
            let oldJson = JSON.parse(data.toString());
            oldJson.push(result);
            // console.log(oldJson);
            console.log(JSON.stringify(oldJson))
            fs.writeFile('./data.json',JSON.stringify(oldJson),function (err) {
                if(err){
                    console.log(err);
                }else{
                    console.log(0)
                }
            })
        }
    })
}
exports.save2backstage = save2backstage;