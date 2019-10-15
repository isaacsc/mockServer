var getTest = require ('./getTest.json');

module.exports = [
  getTest,
  {
    "method": "delete",
    "path": "/deletetest",
    "code": 204
  },
  {
    "method": "post",
    "path": "/posttest",
    "code": 200,
    "response": {"authenticationResponse":{"authenticationState":"OK","authenticationData":[]},"backendUserResponse":{"userType":"N","userStatus":"A1","clientId":"97164371","clientStatus":"A3","accountingTerminal":"^I99"}}
  },
  {
    "method": "get",
    "path": "/cookietest",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "cookies": [ {"name": "JSESSIONID", "value": "mock.da_assisted_channels_JBOSSPL1; Path=/assisted_channels; Secure"}, {"name": "s_fid", "value": "2B4560204AF64A1F-013C3394358BE619"}, {"name": "s_nr", "value": "1511952059917"} ],
    "code": "405",
    "response": {"message":"El método HTTP no está permitido para el recurso especificado.","errorCode":"error.405.generic"}
  }
];