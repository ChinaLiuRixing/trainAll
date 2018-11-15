const express = require('express');
const server = express();
const getinfo = require("./utils/getinfo");
const getPassageInfo = getinfo.getPassageInfo;
const geturl = require("./utils/geturl");
const GetUrl = geturl.GetUrl;
const JSDOM = require('jsdom').JSDOM;
const save = require("./utils/save");
const save2backstage = save.save2backstage;

server.listen(3000, () => { console.log("server run at localhost:3000") });
server.use('/getData', (req, res) => {
    var fs = require("fs");
    fs.readFile('./data.json',function(err,data){
          if(err){
              console.log("bad")
          }else{
              console.log("ok");
              res.send({data:data.toString()})
          }
      })
});
  server.use('/getMsg', (req, res) => {
  GetUrl(req.query.str, (data) => {
    let DOM = new JSDOM(data);
    let document = DOM.window.document;
    var myHtml = document.querySelector(req.query.passage).innerHTML.replace(/<[^>]+>/g, '')
    var result = getPassageInfo(myHtml);
    result.title = document.querySelector(req.query.title).innerHTML.replace(/<[^>]+>/g, '');
    // 把result给后台
    save2backstage(result);
    res.send({ 'need': result });
  })
})
server.use(express.static('./'))