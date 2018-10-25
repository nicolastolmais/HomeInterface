// fetch('/api/<username>/lights')
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//   }).catch((err) => console.log(err));

module.exports = new Promise((res, rej) => res(
    {
        "1": {
            "state": {
                "on": false,
                "bri": 1,
                "hue": 33761,
                "sat": 254,
                "effect": "none",
                "xy": [
                    0.3171,
                    0.3366
                ],
                "ct": 159,
                "alert": "none",
                "colormode": "xy",
                "mode": "homeautomation",
                "reachable": true
            },
            "swupdate": {
                "state": "noupdates",
                "lastinstall": "2017-10-15T12:07:34"
            },
            "type": "Extended color light",
            "name": "Hue color lamp 7",
            "modelid": "LCT001",
            "manufacturername": "Philips",
            "productname": "Hue color lamp",
            "capabilities": {
                "certified": true,
                "control": {
                    "mindimlevel": 5000,
                    "maxlumen": 600,
                    "colorgamuttype": "B",
                    "colorgamut": [
                        [
                            0.675,
                            0.322
                        ],
                        [
                            0.409,
                            0.518
                        ],
                        [
                            0.167,
                            0.04
                        ]
                    ],
                    "ct": {
                        "min": 153,
                        "max": 500
                    }
                },
                "streaming": {
                    "renderer": true,
                    "proxy": false
                }
            },
            "config": {
                "archetype": "sultanbulb",
                "function": "mixed",
                "direction": "omnidirectional"
            },
            "uniqueid": "00:17:88:01:00:bd:c7:b9-0b",
            "swversion": "5.105.0.21169"
        },
        "2": {
            "state": {
                "on": false,
                "bri": 1,
                "hue": 35610,
                "sat": 237,
                "effect": "none",
                "xy": [
                    0.1768,
                    0.395
                ],
                "ct": 153,
                "alert": "none",
                "colormode": "xy",
                "mode": "homeautomation",
                "reachable": true
            },
            "swupdate": {
                "state": "noupdates",
                "lastinstall": "2017-10-18T12:50:40"
            },
            "type": "Extended color light",
            "name": "Hue lightstrip plus 1",
            "modelid": "LST002",
            "manufacturername": "Philips",
            "productname": "Hue lightstrip plus",
            "capabilities": {
                "certified": true,
                "control": {
                    "mindimlevel": 40,
                    "maxlumen": 1600,
                    "colorgamuttype": "C",
                    "colorgamut": [
                        [
                            0.6915,
                            0.3083
                        ],
                        [
                            0.17,
                            0.7
                        ],
                        [
                            0.1532,
                            0.0475
                        ]
                    ],
                    "ct": {
                        "min": 153,
                        "max": 500
                    }
                },
                "streaming": {
                    "renderer": true,
                    "proxy": true
                }
            },
            "config": {
                "archetype": "huelightstrip",
                "function": "mixed",
                "direction": "omnidirectional"
            },
            "uniqueid": "00:17:88:01:02:15:97:46-0b",
            "swversion": "5.105.0.21169"
        }
    }
))