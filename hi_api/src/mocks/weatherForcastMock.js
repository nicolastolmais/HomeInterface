// fetch('https://http://api.openweathermap.org/data/2.5/forecast?zip=63141,us&APPID=0c3dbac49bd40ac43c6a5d216d300e47')
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//   }).catch((err) => console.log(err));

module.exports = new Promise((res, rej) => res(
    {
        "cod": "200",
        "message": 0.005,
        "cnt": 40,
        "list": [
            {
                "dt": 1531774800,
                "main": {
                    "temp": 306.94,
                    "temp_min": 306.261,
                    "temp_max": 306.94,
                    "pressure": 1005,
                    "sea_level": 1026.17,
                    "grnd_level": 1005,
                    "humidity": 53,
                    "temp_kf": 0.67
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 2.05,
                    "deg": 326
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-16 21:00:00"
            },
            {
                "dt": 1531785600,
                "main": {
                    "temp": 304.19,
                    "temp_min": 303.683,
                    "temp_max": 304.19,
                    "pressure": 1004.98,
                    "sea_level": 1026.21,
                    "grnd_level": 1004.98,
                    "humidity": 61,
                    "temp_kf": 0.51
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 36
                },
                "wind": {
                    "speed": 2.06,
                    "deg": 357.002
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-17 00:00:00"
            },
            {
                "dt": 1531796400,
                "main": {
                    "temp": 299.8,
                    "temp_min": 299.465,
                    "temp_max": 299.8,
                    "pressure": 1006.27,
                    "sea_level": 1027.61,
                    "grnd_level": 1006.27,
                    "humidity": 75,
                    "temp_kf": 0.34
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 1.32,
                    "deg": 29.0009
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-17 03:00:00"
            },
            {
                "dt": 1531807200,
                "main": {
                    "temp": 297.48,
                    "temp_min": 297.309,
                    "temp_max": 297.48,
                    "pressure": 1007.23,
                    "sea_level": 1028.64,
                    "grnd_level": 1007.23,
                    "humidity": 82,
                    "temp_kf": 0.17
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.51,
                    "deg": 25.003
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-17 06:00:00"
            },
            {
                "dt": 1531818000,
                "main": {
                    "temp": 295.954,
                    "temp_min": 295.954,
                    "temp_max": 295.954,
                    "pressure": 1007.57,
                    "sea_level": 1029.2,
                    "grnd_level": 1007.57,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.06,
                    "deg": 4.50095
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-17 09:00:00"
            },
            {
                "dt": 1531828800,
                "main": {
                    "temp": 296.177,
                    "temp_min": 296.177,
                    "temp_max": 296.177,
                    "pressure": 1008.76,
                    "sea_level": 1030.37,
                    "grnd_level": 1008.76,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.1,
                    "deg": 27.5042
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-17 12:00:00"
            },
            {
                "dt": 1531839600,
                "main": {
                    "temp": 300.804,
                    "temp_min": 300.804,
                    "temp_max": 300.804,
                    "pressure": 1009.82,
                    "sea_level": 1031.11,
                    "grnd_level": 1009.82,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.86,
                    "deg": 58.0005
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-17 15:00:00"
            },
            {
                "dt": 1531850400,
                "main": {
                    "temp": 303.838,
                    "temp_min": 303.838,
                    "temp_max": 303.838,
                    "pressure": 1009.62,
                    "sea_level": 1030.88,
                    "grnd_level": 1009.62,
                    "humidity": 58,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.87,
                    "deg": 56.0004
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-17 18:00:00"
            },
            {
                "dt": 1531861200,
                "main": {
                    "temp": 304.549,
                    "temp_min": 304.549,
                    "temp_max": 304.549,
                    "pressure": 1008.28,
                    "sea_level": 1029.56,
                    "grnd_level": 1008.28,
                    "humidity": 53,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.21,
                    "deg": 54.001
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-17 21:00:00"
            },
            {
                "dt": 1531872000,
                "main": {
                    "temp": 302.471,
                    "temp_min": 302.471,
                    "temp_max": 302.471,
                    "pressure": 1007.94,
                    "sea_level": 1029.14,
                    "grnd_level": 1007.94,
                    "humidity": 56,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 1.91,
                    "deg": 59.0025
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-18 00:00:00"
            },
            {
                "dt": 1531882800,
                "main": {
                    "temp": 297.986,
                    "temp_min": 297.986,
                    "temp_max": 297.986,
                    "pressure": 1008.83,
                    "sea_level": 1030.34,
                    "grnd_level": 1008.83,
                    "humidity": 57,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.5,
                    "deg": 62.5018
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-18 03:00:00"
            },
            {
                "dt": 1531893600,
                "main": {
                    "temp": 295.498,
                    "temp_min": 295.498,
                    "temp_max": 295.498,
                    "pressure": 1009.31,
                    "sea_level": 1030.94,
                    "grnd_level": 1009.31,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.56,
                    "deg": 83.0102
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-18 06:00:00"
            },
            {
                "dt": 1531904400,
                "main": {
                    "temp": 294.268,
                    "temp_min": 294.268,
                    "temp_max": 294.268,
                    "pressure": 1009.24,
                    "sea_level": 1030.88,
                    "grnd_level": 1009.24,
                    "humidity": 69,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.76,
                    "deg": 100.006
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-18 09:00:00"
            },
            {
                "dt": 1531915200,
                "main": {
                    "temp": 294.867,
                    "temp_min": 294.867,
                    "temp_max": 294.867,
                    "pressure": 1009.85,
                    "sea_level": 1031.41,
                    "grnd_level": 1009.85,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 1.98,
                    "deg": 91.5043
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-18 12:00:00"
            },
            {
                "dt": 1531926000,
                "main": {
                    "temp": 300.15,
                    "temp_min": 300.15,
                    "temp_max": 300.15,
                    "pressure": 1009.81,
                    "sea_level": 1031.28,
                    "grnd_level": 1009.81,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 2.07,
                    "deg": 114.003
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-18 15:00:00"
            },
            {
                "dt": 1531936800,
                "main": {
                    "temp": 303.633,
                    "temp_min": 303.633,
                    "temp_max": 303.633,
                    "pressure": 1008.96,
                    "sea_level": 1030.33,
                    "grnd_level": 1008.96,
                    "humidity": 57,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 2.42,
                    "deg": 121.001
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-18 18:00:00"
            },
            {
                "dt": 1531947600,
                "main": {
                    "temp": 304.386,
                    "temp_min": 304.386,
                    "temp_max": 304.386,
                    "pressure": 1007.45,
                    "sea_level": 1028.74,
                    "grnd_level": 1007.45,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 2.47,
                    "deg": 110
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-18 21:00:00"
            },
            {
                "dt": 1531958400,
                "main": {
                    "temp": 302.252,
                    "temp_min": 302.252,
                    "temp_max": 302.252,
                    "pressure": 1006.68,
                    "sea_level": 1027.95,
                    "grnd_level": 1006.68,
                    "humidity": 55,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 2.57,
                    "deg": 112.003
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-19 00:00:00"
            },
            {
                "dt": 1531969200,
                "main": {
                    "temp": 299.203,
                    "temp_min": 299.203,
                    "temp_max": 299.203,
                    "pressure": 1007,
                    "sea_level": 1028.47,
                    "grnd_level": 1007,
                    "humidity": 59,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 32
                },
                "wind": {
                    "speed": 3.13,
                    "deg": 118.5
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-19 03:00:00"
            },
            {
                "dt": 1531980000,
                "main": {
                    "temp": 297.568,
                    "temp_min": 297.568,
                    "temp_max": 297.568,
                    "pressure": 1006.78,
                    "sea_level": 1028.3,
                    "grnd_level": 1006.78,
                    "humidity": 61,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 3.16,
                    "deg": 123.005
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-19 06:00:00"
            },
            {
                "dt": 1531990800,
                "main": {
                    "temp": 296.074,
                    "temp_min": 296.074,
                    "temp_max": 296.074,
                    "pressure": 1005.88,
                    "sea_level": 1027.54,
                    "grnd_level": 1005.88,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 64
                },
                "wind": {
                    "speed": 2.96,
                    "deg": 136.007
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-19 09:00:00"
            },
            {
                "dt": 1532001600,
                "main": {
                    "temp": 294.851,
                    "temp_min": 294.851,
                    "temp_max": 294.851,
                    "pressure": 1005.8,
                    "sea_level": 1027.38,
                    "grnd_level": 1005.8,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 3.42,
                    "deg": 150
                },
                "rain": {
                    "3h": 0.63
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-19 12:00:00"
            },
            {
                "dt": 1532012400,
                "main": {
                    "temp": 295.565,
                    "temp_min": 295.565,
                    "temp_max": 295.565,
                    "pressure": 1005.77,
                    "sea_level": 1027.17,
                    "grnd_level": 1005.77,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 3.07,
                    "deg": 169
                },
                "rain": {
                    "3h": 1.73
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-19 15:00:00"
            },
            {
                "dt": 1532023200,
                "main": {
                    "temp": 299.668,
                    "temp_min": 299.668,
                    "temp_max": 299.668,
                    "pressure": 1003.68,
                    "sea_level": 1024.99,
                    "grnd_level": 1003.68,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 4.22,
                    "deg": 179.005
                },
                "rain": {
                    "3h": 0.13
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-19 18:00:00"
            },
            {
                "dt": 1532034000,
                "main": {
                    "temp": 303.557,
                    "temp_min": 303.557,
                    "temp_max": 303.557,
                    "pressure": 1001.82,
                    "sea_level": 1022.97,
                    "grnd_level": 1001.82,
                    "humidity": 58,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 4.11,
                    "deg": 185.501
                },
                "rain": {

                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-19 21:00:00"
            },
            {
                "dt": 1532044800,
                "main": {
                    "temp": 303.532,
                    "temp_min": 303.532,
                    "temp_max": 303.532,
                    "pressure": 1000.63,
                    "sea_level": 1021.91,
                    "grnd_level": 1000.63,
                    "humidity": 60,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 3.61,
                    "deg": 186.001
                },
                "rain": {
                    "3h": 0.0099999999999998
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-20 00:00:00"
            },
            {
                "dt": 1532055600,
                "main": {
                    "temp": 301.777,
                    "temp_min": 301.777,
                    "temp_max": 301.777,
                    "pressure": 1001.06,
                    "sea_level": 1022.42,
                    "grnd_level": 1001.06,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 3.8,
                    "deg": 180.002
                },
                "rain": {

                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-20 03:00:00"
            },
            {
                "dt": 1532066400,
                "main": {
                    "temp": 300.722,
                    "temp_min": 300.722,
                    "temp_max": 300.722,
                    "pressure": 1001.09,
                    "sea_level": 1022.57,
                    "grnd_level": 1001.09,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 3.13,
                    "deg": 197.505
                },
                "rain": {

                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-20 06:00:00"
            },
            {
                "dt": 1532077200,
                "main": {
                    "temp": 299.097,
                    "temp_min": 299.097,
                    "temp_max": 299.097,
                    "pressure": 1001.65,
                    "sea_level": 1022.93,
                    "grnd_level": 1001.65,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 2.31,
                    "deg": 239
                },
                "rain": {

                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-20 09:00:00"
            },
            {
                "dt": 1532088000,
                "main": {
                    "temp": 298.589,
                    "temp_min": 298.589,
                    "temp_max": 298.589,
                    "pressure": 1002.52,
                    "sea_level": 1023.9,
                    "grnd_level": 1002.52,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 36
                },
                "wind": {
                    "speed": 2.47,
                    "deg": 249
                },
                "rain": {

                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-20 12:00:00"
            },
            {
                "dt": 1532098800,
                "main": {
                    "temp": 303.21,
                    "temp_min": 303.21,
                    "temp_max": 303.21,
                    "pressure": 1002.4,
                    "sea_level": 1023.73,
                    "grnd_level": 1002.4,
                    "humidity": 61,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 1.57,
                    "deg": 280.501
                },
                "rain": {

                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-20 15:00:00"
            },
            {
                "dt": 1532109600,
                "main": {
                    "temp": 307.759,
                    "temp_min": 307.759,
                    "temp_max": 307.759,
                    "pressure": 1001.93,
                    "sea_level": 1023.01,
                    "grnd_level": 1001.93,
                    "humidity": 44,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 12
                },
                "wind": {
                    "speed": 1.86,
                    "deg": 207.502
                },
                "rain": {

                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-20 18:00:00"
            },
            {
                "dt": 1532120400,
                "main": {
                    "temp": 308.766,
                    "temp_min": 308.766,
                    "temp_max": 308.766,
                    "pressure": 1000.81,
                    "sea_level": 1022.01,
                    "grnd_level": 1000.81,
                    "humidity": 39,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 64
                },
                "wind": {
                    "speed": 1.82,
                    "deg": 219.501
                },
                "rain": {

                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-20 21:00:00"
            },
            {
                "dt": 1532131200,
                "main": {
                    "temp": 306.234,
                    "temp_min": 306.234,
                    "temp_max": 306.234,
                    "pressure": 999.98,
                    "sea_level": 1021.32,
                    "grnd_level": 999.98,
                    "humidity": 48,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 12
                },
                "wind": {
                    "speed": 1.87,
                    "deg": 249
                },
                "rain": {
                    "3h": 0.02
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-21 00:00:00"
            },
            {
                "dt": 1532142000,
                "main": {
                    "temp": 299.814,
                    "temp_min": 299.814,
                    "temp_max": 299.814,
                    "pressure": 1000.32,
                    "sea_level": 1022.03,
                    "grnd_level": 1000.32,
                    "humidity": 69,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 0.71,
                    "deg": 273
                },
                "rain": {
                    "3h": 0.0099999999999998
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-21 03:00:00"
            },
            {
                "dt": 1532152800,
                "main": {
                    "temp": 296.061,
                    "temp_min": 296.061,
                    "temp_max": 296.061,
                    "pressure": 1002.97,
                    "sea_level": 1024.32,
                    "grnd_level": 1002.97,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.76,
                    "deg": 9.00064
                },
                "rain": {
                    "3h": 0.03
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-21 06:00:00"
            },
            {
                "dt": 1532163600,
                "main": {
                    "temp": 294.82,
                    "temp_min": 294.82,
                    "temp_max": 294.82,
                    "pressure": 1002.83,
                    "sea_level": 1024.28,
                    "grnd_level": 1002.83,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.86,
                    "deg": 306
                },
                "rain": {

                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-07-21 09:00:00"
            },
            {
                "dt": 1532174400,
                "main": {
                    "temp": 295.053,
                    "temp_min": 295.053,
                    "temp_max": 295.053,
                    "pressure": 1003.01,
                    "sea_level": 1024.52,
                    "grnd_level": 1003.01,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.36,
                    "deg": 271.5
                },
                "rain": {

                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-21 12:00:00"
            },
            {
                "dt": 1532185200,
                "main": {
                    "temp": 299.694,
                    "temp_min": 299.694,
                    "temp_max": 299.694,
                    "pressure": 1002.99,
                    "sea_level": 1024.31,
                    "grnd_level": 1002.99,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 2.86,
                    "deg": 301.001
                },
                "rain": {

                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-21 15:00:00"
            },
            {
                "dt": 1532196000,
                "main": {
                    "temp": 300.813,
                    "temp_min": 300.813,
                    "temp_max": 300.813,
                    "pressure": 1002.29,
                    "sea_level": 1023.6,
                    "grnd_level": 1002.29,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 48
                },
                "wind": {
                    "speed": 3.41,
                    "deg": 299.001
                },
                "rain": {

                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-07-21 18:00:00"
            }
        ],
        "city": {
            "id": 420020629,
            "name": "St. Louis",
            "coord": {
                "lat": 38.6437,
                "lon": -90.4399
            },
            "country": "US"
        }
    }))