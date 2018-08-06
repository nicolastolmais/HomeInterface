// fetch('http://api.edamam.com/search?q=chicken&app_id=14218770&app_key=a58c4d5a909afeaf62bf768fba96bdea&from=30&to=31')
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//   }).catch((err) => console.log(err));

// Apid: 14218770
// ApKey: a58c4d5a909afeaf62bf768fba96bdea	

{/* <iframe src="https://www.w3schools.com" height="500px" width="1000px" >
<p>Your browser does not support iframes.</p>
</iframe> */}

module.exports = new Promise((res, rej) => res(
    {
        "q": "chicken",
        "from": 30,
        "to": 31,
        "params": {
            "sane": [],
            "q": [
                "chicken"
            ],
            "from": [
                "30"
            ],
            "app_key": [
                "a58c4d5a909afeaf62bf768fba96bdea"
            ],
            "to": [
                "31"
            ],
            "app_id": [
                "14218770"
            ]
        },
        "more": true,
        "count": 190722,
        "hits": [
            {
                "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
                    "label": "Chicken Paprikash",
                    "image": "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
                    "source": "No Recipes",
                    "url": "http://norecipes.com/recipe/chicken-paprikash/",
                    "shareAs": "http://www.edamam.com/recipe/chicken-paprikash-8275bb28647abcedef0baaf2dcf34f8b/chicken",
                    "yield": 4,
                    "dietLabels": [
                        "Low-Carb"
                    ],
                    "healthLabels": [
                        "Peanut-Free",
                        "Tree-Nut-Free",
                        "Alcohol-Free"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                        "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
                        "1/2 teaspoon salt",
                        "1/4 teaspoon black pepper",
                        "1 tablespoon butter – cultured unsalted (or olive oil)",
                        "240 grams onion sliced thin (1 large onion)",
                        "70 grams Anaheim pepper chopped (1 large pepper)",
                        "25 grams paprika (about 1/4 cup)",
                        "1 cup chicken stock",
                        "1/2 teaspoon salt",
                        "1/2 cup sour cream",
                        "1 tablespoon flour – all-purpose"
                    ],
                    "ingredients": [
                        {
                            "text": "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
                            "weight": 640
                        },
                        {
                            "text": "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
                            "weight": 640
                        },
                        {
                            "text": "1/2 teaspoon salt",
                            "weight": 3
                        },
                        {
                            "text": "1/4 teaspoon black pepper",
                            "weight": 0.725
                        },
                        {
                            "text": "1 tablespoon butter – cultured unsalted (or olive oil)",
                            "weight": 13.5
                        },
                        {
                            "text": "240 grams onion sliced thin (1 large onion)",
                            "weight": 78.125
                        },
                        {
                            "text": "70 grams Anaheim pepper chopped (1 large pepper)",
                            "weight": 56.25
                        },
                        {
                            "text": "25 grams paprika (about 1/4 cup)",
                            "weight": 27.200000000459866
                        },
                        {
                            "text": "1 cup chicken stock",
                            "weight": 240
                        },
                        {
                            "text": "1/2 teaspoon salt",
                            "weight": 3
                        },
                        {
                            "text": "1/2 cup sour cream",
                            "weight": 115
                        },
                        {
                            "text": "1 tablespoon flour – all-purpose",
                            "weight": 7.8124999998679145
                        }
                    ],
                    "calories": 3033.2012500008163,
                    "totalWeight": 1824.6125000003276,
                    "totalTime": 0,
                    "totalNutrients": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 3033.2012500008163,
                            "unit": "kcal"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 208.05040250005803,
                            "unit": "g"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 61.207636375009635,
                            "unit": "g"
                        },
                        "FATRN": {
                            "label": "Trans",
                            "quantity": 0.8448,
                            "unit": "g"
                        },
                        "FAMS": {
                            "label": "Monounsaturated",
                            "quantity": 85.78187337500766,
                            "unit": "g"
                        },
                        "FAPU": {
                            "label": "Polyunsaturated",
                            "quantity": 39.88905187503517,
                            "unit": "g"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 47.816761250147486,
                            "unit": "g"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 12.059037500156926,
                            "unit": "g"
                        },
                        "SUGAR": {
                            "label": "Sugars",
                            "quantity": 16.123463750047193,
                            "unit": "g"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 236.58131375005138,
                            "unit": "g"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 1283,
                            "unit": "mg"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 3945.65975000031,
                            "unit": "mg"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 326.0403750010333,
                            "unit": "mg"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 324.8095000007895,
                            "unit": "mg"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 4014.232125010343,
                            "unit": "mg"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 16.44184625009567,
                            "unit": "mg"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 22.48163750001899,
                            "unit": "mg"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 2388.5722500013017,
                            "unit": "mg"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 1144.9192500113265,
                            "unit": "µg"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 143.94730000000413,
                            "unit": "mg"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 1.310280500001359,
                            "unit": "mg"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 2.988508750005604,
                            "unit": "mg"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 67.97661300004462,
                            "unit": "mg"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 5.478774250009787,
                            "unit": "mg"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 101.71375000019098,
                            "unit": "µg"
                        },
                        "FOLFD": {
                            "label": "Folate (food)",
                            "quantity": 101.71375000019098,
                            "unit": "µg"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 7.682,
                            "unit": "µg"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 1.7400000000000002,
                            "unit": "µg"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 13.406427500133741,
                            "unit": "mg"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 71.52511250036889,
                            "unit": "µg"
                        }
                    },
                    "totalDaily": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 151.6600625000408,
                            "unit": "%"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 320.0775423077816,
                            "unit": "%"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 306.03818187504817,
                            "unit": "%"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 15.938920416715828,
                            "unit": "%"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 48.2361500006277,
                            "unit": "%"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 473.16262750010276,
                            "unit": "%"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 427.6666666666667,
                            "unit": "%"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 164.40248958334624,
                            "unit": "%"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 32.60403750010333,
                            "unit": "%"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 81.20237500019738,
                            "unit": "%"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 114.69234642886694,
                            "unit": "%"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 91.34359027830926,
                            "unit": "%"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 149.87758333345994,
                            "unit": "%"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 341.2246071430431,
                            "unit": "%"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 127.2132500012585,
                            "unit": "%"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 239.91216666667358,
                            "unit": "%"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 87.35203333342395,
                            "unit": "%"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 175.79463235327083,
                            "unit": "%"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 339.88306500022316,
                            "unit": "%"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 273.9387125004893,
                            "unit": "%"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 25.428437500047743,
                            "unit": "%"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 128.03333333333333,
                            "unit": "%"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 0.43500000000000005,
                            "unit": "%"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 67.03213750066871,
                            "unit": "%"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 89.40639062546111,
                            "unit": "%"
                        }
                    },
                    "digest": [
                        {
                            "label": "Fat",
                            "tag": "FAT",
                            "schemaOrgTag": "fatContent",
                            "total": 208.05040250005803,
                            "hasRDI": true,
                            "daily": 320.0775423077816,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Saturated",
                                    "tag": "FASAT",
                                    "schemaOrgTag": "saturatedFatContent",
                                    "total": 61.207636375009635,
                                    "hasRDI": true,
                                    "daily": 306.03818187504817,
                                    "unit": "g"
                                },
                                {
                                    "label": "Trans",
                                    "tag": "FATRN",
                                    "schemaOrgTag": "transFatContent",
                                    "total": 0.8448,
                                    "hasRDI": false,
                                    "daily": 0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Monounsaturated",
                                    "tag": "FAMS",
                                    "schemaOrgTag": null,
                                    "total": 85.78187337500766,
                                    "hasRDI": false,
                                    "daily": 0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Polyunsaturated",
                                    "tag": "FAPU",
                                    "schemaOrgTag": null,
                                    "total": 39.88905187503517,
                                    "hasRDI": false,
                                    "daily": 0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Carbs",
                            "tag": "CHOCDF",
                            "schemaOrgTag": "carbohydrateContent",
                            "total": 47.816761250147486,
                            "hasRDI": true,
                            "daily": 15.938920416715828,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Carbs (net)",
                                    "tag": "CHOCDF.net",
                                    "schemaOrgTag": null,
                                    "total": 35.75772374999056,
                                    "hasRDI": false,
                                    "daily": 0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Fiber",
                                    "tag": "FIBTG",
                                    "schemaOrgTag": "fiberContent",
                                    "total": 12.059037500156926,
                                    "hasRDI": true,
                                    "daily": 48.2361500006277,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars",
                                    "tag": "SUGAR",
                                    "schemaOrgTag": "sugarContent",
                                    "total": 16.123463750047193,
                                    "hasRDI": false,
                                    "daily": 0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars, added",
                                    "tag": "SUGAR.added",
                                    "schemaOrgTag": null,
                                    "total": 0,
                                    "hasRDI": false,
                                    "daily": 0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Protein",
                            "tag": "PROCNT",
                            "schemaOrgTag": "proteinContent",
                            "total": 236.58131375005138,
                            "hasRDI": true,
                            "daily": 473.16262750010276,
                            "unit": "g"
                        },
                        {
                            "label": "Cholesterol",
                            "tag": "CHOLE",
                            "schemaOrgTag": "cholesterolContent",
                            "total": 1283,
                            "hasRDI": true,
                            "daily": 427.6666666666667,
                            "unit": "mg"
                        },
                        {
                            "label": "Sodium",
                            "tag": "NA",
                            "schemaOrgTag": "sodiumContent",
                            "total": 3945.65975000031,
                            "hasRDI": true,
                            "daily": 164.40248958334624,
                            "unit": "mg"
                        },
                        {
                            "label": "Calcium",
                            "tag": "CA",
                            "schemaOrgTag": null,
                            "total": 326.0403750010333,
                            "hasRDI": true,
                            "daily": 32.60403750010333,
                            "unit": "mg"
                        },
                        {
                            "label": "Magnesium",
                            "tag": "MG",
                            "schemaOrgTag": null,
                            "total": 324.8095000007895,
                            "hasRDI": true,
                            "daily": 81.20237500019738,
                            "unit": "mg"
                        },
                        {
                            "label": "Potassium",
                            "tag": "K",
                            "schemaOrgTag": null,
                            "total": 4014.232125010343,
                            "hasRDI": true,
                            "daily": 114.69234642886694,
                            "unit": "mg"
                        },
                        {
                            "label": "Iron",
                            "tag": "FE",
                            "schemaOrgTag": null,
                            "total": 16.44184625009567,
                            "hasRDI": true,
                            "daily": 91.34359027830926,
                            "unit": "mg"
                        },
                        {
                            "label": "Zinc",
                            "tag": "ZN",
                            "schemaOrgTag": null,
                            "total": 22.48163750001899,
                            "hasRDI": true,
                            "daily": 149.87758333345994,
                            "unit": "mg"
                        },
                        {
                            "label": "Phosphorus",
                            "tag": "P",
                            "schemaOrgTag": null,
                            "total": 2388.5722500013017,
                            "hasRDI": true,
                            "daily": 341.2246071430431,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin A",
                            "tag": "VITA_RAE",
                            "schemaOrgTag": null,
                            "total": 1144.9192500113265,
                            "hasRDI": true,
                            "daily": 127.2132500012585,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin C",
                            "tag": "VITC",
                            "schemaOrgTag": null,
                            "total": 143.94730000000413,
                            "hasRDI": true,
                            "daily": 239.91216666667358,
                            "unit": "mg"
                        },
                        {
                            "label": "Thiamin (B1)",
                            "tag": "THIA",
                            "schemaOrgTag": null,
                            "total": 1.310280500001359,
                            "hasRDI": true,
                            "daily": 87.35203333342395,
                            "unit": "mg"
                        },
                        {
                            "label": "Riboflavin (B2)",
                            "tag": "RIBF",
                            "schemaOrgTag": null,
                            "total": 2.988508750005604,
                            "hasRDI": true,
                            "daily": 175.79463235327083,
                            "unit": "mg"
                        },
                        {
                            "label": "Niacin (B3)",
                            "tag": "NIA",
                            "schemaOrgTag": null,
                            "total": 67.97661300004462,
                            "hasRDI": true,
                            "daily": 339.88306500022316,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin B6",
                            "tag": "VITB6A",
                            "schemaOrgTag": null,
                            "total": 5.478774250009787,
                            "hasRDI": true,
                            "daily": 273.9387125004893,
                            "unit": "mg"
                        },
                        {
                            "label": "Folate equivalent (total)",
                            "tag": "FOLDFE",
                            "schemaOrgTag": null,
                            "total": 101.71375000019098,
                            "hasRDI": true,
                            "daily": 25.428437500047743,
                            "unit": "µg"
                        },
                        {
                            "label": "Folate (food)",
                            "tag": "FOLFD",
                            "schemaOrgTag": null,
                            "total": 101.71375000019098,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "µg"
                        },
                        {
                            "label": "Folic acid",
                            "tag": "FOLAC",
                            "schemaOrgTag": null,
                            "total": 0,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin B12",
                            "tag": "VITB12",
                            "schemaOrgTag": null,
                            "total": 7.682,
                            "hasRDI": true,
                            "daily": 128.03333333333333,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin D",
                            "tag": "VITD",
                            "schemaOrgTag": null,
                            "total": 1.7400000000000002,
                            "hasRDI": true,
                            "daily": 0.43500000000000005,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin E",
                            "tag": "TOCPHA",
                            "schemaOrgTag": null,
                            "total": 13.406427500133741,
                            "hasRDI": true,
                            "daily": 67.03213750066871,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin K",
                            "tag": "VITK1",
                            "schemaOrgTag": null,
                            "total": 71.52511250036889,
                            "hasRDI": true,
                            "daily": 89.40639062546111,
                            "unit": "µg"
                        }
                    ]
                },
                "bookmarked": false,
                "bought": false
            }
        ]
    }
))