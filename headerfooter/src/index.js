const express = require('express');
const server = express();
const port = 8080;
server.listen(port,()=>{console.log(`server run at localhost:${port}`)});
server.use('/getData',(req,res)=>{
    console.log(req.query);
    var arr2 = [
        {startTime:"20:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"01:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"02:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"03:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"04:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"05:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"06:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"07:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"08:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"09:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"10:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"11:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"12:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"13:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"14:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"15:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"16:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"17:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"},
        {startTime:"18:20",endTime:"22:35",startAir:"首都T3",endAir:"普通T2",plane:"深航ZH1883 空客330(宽)",price:"1345",desc:"全价经济舱"}
    ]
    res.send({'need':arr2});
})


server.use(express.static('./'))