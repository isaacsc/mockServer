# Simple servidor de mocks

## Usando Docker

### Construir contenedor
`docker build -t <container-name> .`

### Lanzar el contenedor
`docker run -ti --name "mockServer" -p 3000:3000 <container-name>`

## Sin usar Docker

### Intalar dependencias
`npm i`

### Levantar mockServer
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