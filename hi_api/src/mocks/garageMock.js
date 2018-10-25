// fetch('/api/<username>/lights')
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//   }).catch((err) => console.log(err));
// myq api https://www.npmjs.com/package/myq-api

module.exports = new Promise((res, rej) => res(
    {
        "id": 1631093013,
        "typeId": 17,
        "typeName": "Garage Door Opener WGDO",
        "serialNumber": "DS4l424DJJS",
        "online": true,
        "name": "Garage",
        "doorState": 1,
        "doorStateDescription": "open",
        "doorStateUpdated": 1501609106061
      }
))