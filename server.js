var express = require ('express');
var mockData = require ('./mocks/endpoints.js');
var headers = require ('./headers.js');
var app = express ();
var port = 3000;

app.use(function(req, res, next) {
  res.header(headers);
  next();
});

var parseRoute = (route) => {
  app[route.method] (route.path, function (rq, rs) {
    generateCookies(route.cookies || [], rs);
    rs.set('content-type', route['Content-Type'] || 'application/json');
    rs.status (route.code || 200);
    rs.send (JSON.stringify (route.response || "ok"));
    rs.end();
  });
};

var generateCookies = (cookies = [], rs) => {
  for ( var cookie of cookies ) {
    rs.cookie ( cookie.name, cookie.value );
  }
}; 

for (var item of mockData) {
  console.log (item.method + ": " + item.path);
  parseRoute (item);
}

app.listen (port, function () {
  console.log ('mocks listening at ' + port);
});