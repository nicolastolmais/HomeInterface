//     fetch('http://localhost:3001/blinds',
//         {
//             method: 'PUT',
//             mode: 'cors',
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8",
//             },
//             body: JSON.stringify({
//                 blindTarget,
//                 command
//             })
//         })
//         .then(response => response.json())
//         .catch(error => console.error(`Fetch Error =\n`, error))
//https://www.npmjs.com/package/somfy-synergy

// const synergy = new SomfySynergy('mySystem', '192.168.1.123');

// // Open the first set of shades.
// const target1 = synergy.target('AB123C45.1');
// target1.up();

// // Close the second set of shades.
// const target2 = synergy.target('AB123C45.2');
// target2.down();

// // Stop (or go to the favorite position for) the third set of shades.
// const target3 = synergy.target('AB123C45.2');
// target3.stop();

module.exports = new Promise((res, rej) => res(
    {
        'code': '200',
        'status': 'ok'
    }
))