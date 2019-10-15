# Simple servidor de mocks

## Intalar dependencias
`npm i`

## Levantar mockServer
`npm start`

## Ejemplo de mock
```
{  
    "method": "get",  
    "path": "/cookie/test",  
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",  
    "cookies": [ {"name": "JSESSIONID","value":"mock.da_assisted_channels_JBOSSPL1; Path=/assisted_channels; Secure"}, {"name": "s_fid", "value": "2B4560204AF64A1F-013C3394358BE619"}, {"name": "s_nr", "value": "1511952059917"} ],  
    "code": "405",  
    "response": {"message":"El método HTTP no está permitido para el recurso especificado.","errorCode":"error.405.generic"}  
}
```

## Configuración de las cabeceras
El archivo `headers.js` contiene un objeto con la configuración de las cabeceras que pudieran necesitarse