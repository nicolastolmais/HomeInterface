// fetch('https://api.openweathermap.org/data/2.5/weather?zip=63141,us&APPID=0c3dbac49bd40ac43c6a5d216d300e47')
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//   }).catch((err) => console.log(err));


module.exports = new Promise((res, rej) => res(
    {
        coord: { lon: -90.44, lat: 38.64 },
        weather:
            [{
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03d'
            }],
        base: 'stations',
        main:
        {
            temp: 305.33,
            pressure: 1015,
            humidity: 52,
            temp_min: 303.15,
            temp_max: 306.15
        },
        visibility: 16093,
        wind: { speed: 4.6, deg: 340 },
        clouds: { all: 40 },
        dt: 1531763760,
        sys:
        {
            type: 1,
            id: 1666,
            message: 0.0202,
            country: 'US',
            sunrise: 1531738249,
            sunset: 1531790677
        },
        id: 420020629,
        name: 'St. Louis',
        cod: 200
    }))