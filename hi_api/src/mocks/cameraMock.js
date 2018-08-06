// fetch('http://developer-api.nest.com/devices/cameras/device_id/web_url')
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//   }).catch((err) => console.log(err));

module.exports = new Promise((res, rej) => res(
    {
        "cameras": [
            "https://home.nest.com/cameras/1?auth=camera_token",
            "https://home.nest.com/cameras/2?auth=camera_token",
            "https://home.nest.com/cameras/3?auth=camera_token",
            "https://home.nest.com/cameras/4?auth=camera_token",
        ]
    }
))