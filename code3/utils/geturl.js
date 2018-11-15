const url = require("url");
function GetUrl(sUrl, success) {
  var urlObj = url.parse(sUrl);
  var http = '';
  if (urlObj.protocol == 'http:') {
    http = require('http');
  }
  else {
    http = require('https');
  }

  let req = http.request({
    'hostname': urlObj.hostname,
    'path': urlObj.path
  }, res => {
    if (res.statusCode == 200) {
      var str = '';
      res.on('data', buffer => {
        str += buffer;
      });
      res.on('end', () => {
        success && success(str);
      })
    }
  });

  req.end();
  req.on('error', () => {
    console.log('404了，哥们');
  })
}
exports.GetUrl = GetUrl;