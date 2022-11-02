/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  
  const names = [
'Cosme',
'Erin Mckenna’S Bakery',
'By The Way Bakery',
'Kimbap Lab',
'Macaron Café',
'Macaron Parlour',
'Modern Bread And Bagel',
'Nadas',
'Nami Nori West Village',
'Noglu',
'Posh Pop Bakeshop',
'Risotteria Melotti',
'Senza Gluten',
'Senza Gluten By Jemiko',
'Tap Nyc',
'Twentyonegrains',
'Wild',
'Ayza Wine & Chocolate Bar',
'Bareburger',
'Bavaria Bierhaus',
'Beauty & Essex',
'Blossom Restaurant',
'Bocaphe',
'Buddakan',
'Burger And Lobster',
'Cantina Rooftop',
'Caravan Of Dreams',
'Carmine’S',
'Catch',
'Catch Roof',
'Catch Steak - Nyc',
'Ceci Italian Restaurant',
'Chop Shop',
'Clement At The Peninsula',
'Coletta',
'Daily Provisions - Manhattan West',
'Daily Provisions - Union Square',
'Daily Provisions - Upper Side West',
'Daily Provisions - West Village',
'Dante',
'Delice & Sarrasin',
'Dimes',
'Divya’S Kitchen',
'Don Antonio',
'Egg Shop',
'Extra Virgin',
'Friedman’S At The Edison',
'Gran Morsi',
'Hangawi',
'Haven Rooftop At Sanctuary Hotel',
'Inday',
'Jajaja Mexicana',
'Keste',
'La Loteria',
'La Mercerie',
'Lavo',
'Lexington Brass',
'Little Cupcake Bakeshop',
'Magic Hour Rooftop & Bar',
'Mamo',
'Mira Sushi',
'Morton’S',
'Nicoletta',
'Nish Nush',
'Nizza',
'Palma',
'Pappardella',
'Peacefood Café',
'Philippe',
'Porchlight',
'Print',
'Rafele',
'Rezdora',
'Rice To Riches',
'Rosa Mexicano',
'Rubirosa',
'Sadelle’S',
'Sant Ambroeus',
'Sauce',
'Schmackary’S',
'Schnipper’S Quality Kitchen',
'Skinny Pizza',
'Socarrat',
'Spot Dessert Bar',
'Springbone Kitchen',
'Square Diner',
'Taim',
'Takumi Taco',
'Tao Downtown',
'Tarallucci E Vino Upper West Side',
'Thalassa',
'The Butcher’S Daughter',
'The Capital Grille',
'The Cellar At Beecher\'S Ny',
'The Crosby Bar',
'The Dubliner',
'The Little Beet Table',
'The Meatball Shop',
'The Peak – Nyc',
'Tlk- By Tigerlily Kitchen',
'Tommy Bahama Restaurant & Bar',
'Tompkin Square Bagels',
'Trinity Place Bar & Restaurant',
'Two Boots',
'Two Hands - NoHo',
'Two Hands - Nolita',
'Two Hands - Tribeca',
'Two Tablespoons',
'Underground Pizza',
'Union Square Café',
'Wei West',
'Wild Ink',
'Zucchero E Pomodori',
'12 Chairs Café',
'Altesi',
'Au Cheval Ny',
'Balaboosta',
'Bar Primi',
'Barbounia',
'Bell Book & Candle',
'Bistango',
'Bondst',
'Bottino',
'Butter',
'Cafe Carlyle',
'Cafe Mogador',
'Cipriani',
'Del Frisco’S Grille',
'Docks Oyster Bar',
'Don Antonio By Starita',
'Dos Caminos',
'Etcetera Etcetera',
'Family Meal at Blue Hill',
'Friedman\'S Hell\'S Kitchen',
'Friedman\'S Herald Square',
'Hunt And Fish Club',
'Il Bastardo',
'Jack’S Wife Freda',
'Joseph Leonard',
'Koi',
'L’Artusi',
'La Esquina',
'La Pecora Bianca',
'La Pulperia',
'Lido',
'Lilli And Loo',
'Locanda Verde',
'Loco Coco',
'Los Tacos No. 1',
'Mad Dog & Beans',
'Maialino',
'Market Table',
'Melt Shop',
'Mexicue',
'Mochidoki',
'Monkey Bar',
'Murray’S Cheese',
'Nobu',
'Noreetuh',
'Oaxaca Taqueria',
'Otto’S Tacos',
'Pastai',
'Patacon Pisao',
'Pera',
'Perry Street',
'Pershing Square',
'Petaluma',
'PHD Terrace At Dream Hotel',
'Pomodoro Pizza',
'Pure Green',
'Quality Italian',
'Rosemary’S',
'Rosie’S',
'Ruby’S Café',
'Russ & Daughters',
'Sarabeth’S',
'Schnipper\'S',
'Serafina',
'Snowdays Shavery',
'T-Swirl Crepe',
'The Counter Burger',
'The Elk',
'The Grey Dog',
'The Liberty',
'Toloache',
'Upland',
'Vito\'S Slices And Ices',
  ]
  const gfItemNos = [
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'all items are gluten free',
'31',
'16',
'10',
'29',
'13',
'8',
'1',
'1',
'22',
'21',
'32',
'18',
'16',
'33',
'1',
'37',
'2',
'14',
'1',
'1',
'1',
'1',
'21',
'22',
'1',
'29',
'85',
'10',
'6',
'2',
'11',
'15',
'4',
'9',
'25',
'75',
'10',
'1',
'21',
'4',
'3',
'1',
'2',
'3',
'7',
'1',
'14',
'36',
'15',
'58',
'11',
'102',
'8',
'21',
'7',
'2',
'20',
'15',
'24',
'1',
'3',
'10',
'10',
'6',
'10',
'90',
'1',
'11',
'1',
'9',
'19',
'18',
'2',
'21',
'20',
'34',
'5',
'22',
'1',
'20',
'26',
'16',
'17',
'6',
'4',
'17',
'2',
'7',
'4',
'8',
'9',
'12',
'2',
'99',
'11',
'7',
  ]

  const gfOptionAvailable = [
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'Yes',
'',
'',
'',
'',
'',
'',
'',
'',
'Yes',
'Yes',
'',
'',
'',
'',
'',
'',
'Yes',
'',
'',
'',
'',
'Yes',
'Yes',
'',
'Yes',
'Yes',
'',
'',
'',
'Yes',
'',
'',
'',
'',
'Yes',
'',
'',
'',
'',
'',
'',
'Yes',
'',
'',
'',
'',
'',
'',
'',
'',
'Yes',
'',
'',
'',
'Yes',
'',
'',
'',
'',
'Yes',
'',
'',
'Yes',
'Yes',
'Yes',
'',
'',
'',
'',
'',
'',
'Yes',
'',
'',
'',
'',
'',
'',
'Yes',
'',
'',
'',
'',
'Yes',
'',
'',
'',
'',
'',
'Yes',
'',
'Yes',
'',
'',
'',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
'Yes',
  ]

  const gfOptionCount = [
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'6',
'',
'',
'',
'',
'',
'',
'',
'',
'4',
'3',
'',
'',
'',
'',
'',
'',
'2',
'',
'',
'',
'',
'4',
'1',
'',
'2',
'82',
'',
'',
'',
'1',
'',
'',
'',
'',
'73',
'',
'',
'',
'',
'',
'',
'1',
'',
'',
'',
'',
'',
'',
'',
'',
'32',
'',
'',
'',
'2',
'',
'',
'',
'',
'2',
'',
'',
'5',
'1',
'21',
'',
'',
'',
'',
'',
'',
'1',
'',
'',
'',
'',
'',
'',
'5',
'',
'',
'',
'',
'1',
'',
'',
'',
'',
'',
'2',
'',
'2',
'',
'',
'',
  ]

  const geo = [{
	"lat": "40.7395952",
	"lng": "-73.98835640000001"
}, {
	"lat": "40.718143",
	"lng": "-73.9895988"
}, {
	"lat": "40.777995",
	"lng": "-73.9569149"
}, {
	"lat": "40.7424509",
	"lng": "-74.0059581"
}, {
	"lat": "40.7631806",
	"lng": "-73.9714278"
}, {
	"lat": "40.71552579999999",
	"lng": "-73.99023"
}, {
	"lat": "40.7844796",
	"lng": "-73.9740551"
}, {
	"lat": "40.735689",
	"lng": "-74.0003344"
}, {
	"lat": "40.7302914",
	"lng": "-74.0032496"
}, {
	"lat": "40.7836381",
	"lng": "-73.956963"
}, {
	"lat": "40.7292238",
	"lng": "-74.0015358"
}, {
	"lat": "40.7268045",
	"lng": "-73.9882662"
}, {
	"lat": "40.7291136",
	"lng": "-74.00033739999999"
}, {
	"lat": "40.7279611",
	"lng": "-74.00083939999999"
}, {
	"lat": "40.751491",
	"lng": "-73.9735965"
}, {
	"lat": "40.7617745",
	"lng": "-73.98173"
}, {
	"lat": "40.73461700000001",
	"lng": "-74.00635439999999"
}, {
	"lat": "40.7471282",
	"lng": "-73.98690429999999"
}, {
	"lat": "40.7672959",
	"lng": "-73.9834391"
}, {
	"lat": "40.7045431",
	"lng": "-74.0105796"
}, {
	"lat": "40.7204209",
	"lng": "-73.9868826"
}, {
	"lat": "40.7853775",
	"lng": "-73.9727341"
}, {
	"lat": "40.7221067",
	"lng": "-73.99763200000001"
}, {
	"lat": "40.7424509",
	"lng": "-74.0059581"
}, {
	"lat": "40.7400574",
	"lng": "-73.9933563"
}, {
	"lat": "40.765084",
	"lng": "-73.9959959"
}, {
	"lat": "40.7263961",
	"lng": "-73.9856544"
}, {
	"lat": "40.7574742",
	"lng": "-73.98660430000001"
}, {
	"lat": "40.7402523",
	"lng": "-74.0060934"
}, {
	"lat": "40.7402523",
	"lng": "-74.0060934"
}, {
	"lat": "40.7423522",
	"lng": "-74.0040829"
}, {
	"lat": "40.756819",
	"lng": "-73.9811151"
}, {
	"lat": "40.7487045",
	"lng": "-74.0031399"
}, {
	"lat": "40.7616511",
	"lng": "-73.9754019"
}, {
	"lat": "40.7408562",
	"lng": "-73.9811951"
}, {
	"lat": "40.7525786",
	"lng": "-73.998898"
}, {
	"lat": "40.7376434",
	"lng": "-73.9876268"
}, {
	"lat": "40.78223029999999",
	"lng": "-73.9786353"
}, {
	"lat": "40.7292206",
	"lng": "-74.0037316"
}, {
	"lat": "40.7288561",
	"lng": "-74.00179469999999"
}, {
	"lat": "40.7338041",
	"lng": "-74.0006557"
}, {
	"lat": "40.7150016",
	"lng": "-73.991554"
}, {
	"lat": "40.7237768",
	"lng": "-73.9884895"
}, {
	"lat": "40.7627178",
	"lng": "-73.98670760000002"
}, {
	"lat": "40.7204225",
	"lng": "-73.99528939999999"
}, {
	"lat": "40.7354258",
	"lng": "-74.003141"
}, {
	"lat": "40.7596507",
	"lng": "-73.9862204"
}, {
	"lat": "40.7143138",
	"lng": "-74.0077763"
}, {
	"lat": "40.746542",
	"lng": "-73.98482109999999"
}, {
	"lat": "40.7584057",
	"lng": "-73.9833062"
}, {
	"lat": "40.7437839",
	"lng": "-73.9893618"
}, {
	"lat": "40.7142089",
	"lng": "-73.9904181"
}, {
	"lat": "40.7090783",
	"lng": "-74.00453499999999"
}, {
	"lat": "40.7308623",
	"lng": "-74.00414479999999"
}, {
	"lat": "40.7201566",
	"lng": "-74.0021699"
}, {
	"lat": "40.76293130000001",
	"lng": "-73.9714374"
}, {
	"lat": "40.7553",
	"lng": "-73.9728788"
}, {
	"lat": "40.72289910000001",
	"lng": "-73.994847"
}, {
	"lat": "40.7523238",
	"lng": "-73.9892929"
}, {
	"lat": "40.7219097",
	"lng": "-74.0039152"
}, {
	"lat": "40.7417031",
	"lng": "-73.99244929999999"
}, {
	"lat": "40.7097089",
	"lng": "-74.0139508"
}, {
	"lat": "40.7297781",
	"lng": "-73.9865052"
}, {
	"lat": "40.715601",
	"lng": "-74.00762379999999"
}, {
	"lat": "40.759987",
	"lng": "-73.9912338"
}, {
	"lat": "40.7311877",
	"lng": "-74.0023544"
}, {
	"lat": "40.7762762",
	"lng": "-73.9794146"
}, {
	"lat": "40.7853004",
	"lng": "-73.97707319999999"
}, {
	"lat": "40.7423311",
	"lng": "-74.00347909999999"
}, {
	"lat": "40.7519006",
	"lng": "-74.0051493"
}, {
	"lat": "40.764568",
	"lng": "-73.995995"
}, {
	"lat": "40.7308623",
	"lng": "-74.00414479999999"
}, {
	"lat": "40.7391458",
	"lng": "-73.9889987"
}, {
	"lat": "40.7219482",
	"lng": "-73.9957434"
}, {
	"lat": "40.7383338",
	"lng": "-73.9907684"
}, {
	"lat": "40.7227471",
	"lng": "-73.9962025"
}, {
	"lat": "40.7262625",
	"lng": "-74.0001379"
}, {
	"lat": "40.7233903",
	"lng": "-73.9965327"
}, {
	"lat": "40.7204716",
	"lng": "-73.9893263"
}, {
	"lat": "40.7601214",
	"lng": "-73.9909409"
}, {
	"lat": "40.756105",
	"lng": "-73.9901921"
}, {
	"lat": "40.7116025",
	"lng": "-74.01527949999999"
}, {
	"lat": "40.7427594",
	"lng": "-73.999481"
}, {
	"lat": "40.7293679",
	"lng": "-73.98895759999999"
}, {
	"lat": "37.4223878",
	"lng": "-122.0841877"
}, {
	"lat": "40.7184888",
	"lng": "-74.0072321"
}, {
	"lat": "40.7221082",
	"lng": "-73.9960859"
}, {
	"lat": "40.7424509",
	"lng": "-74.0059581"
}, {
	"lat": "40.7425376",
	"lng": "-74.0038464"
}, {
	"lat": "40.7843419",
	"lng": "-73.9734658"
}, {
	"lat": "40.7191955",
	"lng": "-74.0095619"
}, {
	"lat": "40.72069070000001",
	"lng": "-73.9945929"
}, {
	"lat": "40.7084773",
	"lng": "-74.01059839999999"
}, {
	"lat": "40.7388596",
	"lng": "-73.9895743"
}, {
	"lat": "40.7230556",
	"lng": "-73.9973799"
}, {
	"lat": "40.704256",
	"lng": "-74.0106517"
}, {
	"lat": "40.74111",
	"lng": "-73.9853445"
}, {
	"lat": "40.7361254",
	"lng": "-74.00062129999999"
}, {
	"lat": "40.7539439",
	"lng": "-74.0002384"
}, {
	"lat": "40.7311593",
	"lng": "-73.9890863"
}, {
	"lat": "40.7553885",
	"lng": "-73.9788988"
}, {
	"lat": "40.7280278",
	"lng": "-73.9818573"
}, {
	"lat": "40.7088709",
	"lng": "-74.0113178"
}, {
	"lat": "40.7071981",
	"lng": "-74.010661"
}, {
	"lat": "40.7262603",
	"lng": "-73.9956844"
}, {
	"lat": "40.7197049",
	"lng": "-73.9960131"
}, {
	"lat": "40.7178044",
	"lng": "-74.00543689999999"
}, {
	"lat": "40.7546135",
	"lng": "-73.9760328"
}, {
	"lat": "40.7049944",
	"lng": "-74.0096537"
}, {
	"lat": "40.7377702",
	"lng": "-73.9878767"
}, {
	"lat": "40.7150571",
	"lng": "-74.0149197"
}, {
	"lat": "40.75388",
	"lng": "-74.0000046"
}, {
	"lat": "37.4223878",
	"lng": "-122.0841877"
}, {
	"lat": "40.7275821",
	"lng": "-74.0023666"
}, {
	"lat": "40.7250957",
	"lng": "-74.0033108"
}, {
	"lat": "40.7181198",
	"lng": "-74.0019461"
}, {
	"lat": "40.7376733",
	"lng": "-74.00588929999999"
}, {
	"lat": "40.7257162",
	"lng": "-73.9916803"
}, {
	"lat": "40.7382621",
	"lng": "-73.98821989999999"
}, {
	"lat": "40.734693",
	"lng": "-74.00089109999999"
}, {
	"lat": "40.7563583",
	"lng": "-73.9713636"
}, {
	"lat": "40.727045",
	"lng": "-73.9943246"
}, {
	"lat": "40.7485037",
	"lng": "-74.0032891"
}, {
	"lat": "40.7563378",
	"lng": "-73.98221699999999"
}, {
	"lat": "40.774416",
	"lng": "-73.96315589999999"
}, {
	"lat": "40.7274314",
	"lng": "-73.98431149999999"
}, {
	"lat": "40.7235595",
	"lng": "-74.00295559999999"
}, {
	"lat": "40.7594485",
	"lng": "-73.9784253"
}, {
	"lat": "40.7497681",
	"lng": "-73.9749107"
}, {
	"lat": "40.7627178",
	"lng": "-73.98670760000002"
}, {
	"lat": "40.7404411",
	"lng": "-74.00543619999999"
}, {
	"lat": "40.7592451",
	"lng": "-73.9911523"
}, {
	"lat": "40.7320538",
	"lng": "-73.9996802"
}, {
	"lat": "40.7552517",
	"lng": "-73.9983187"
}, {
	"lat": "40.748267",
	"lng": "-73.990714"
}, {
	"lat": "40.7568129",
	"lng": "-73.98424299999999"
}, {
	"lat": "40.7429075",
	"lng": "-73.99620999999999"
}, {
	"lat": "40.7221323",
	"lng": "-73.9975402"
}, {
	"lat": "40.7337356",
	"lng": "-74.0013486"
}, {
	"lat": "40.7530552",
	"lng": "-73.9840804"
}, {
	"lat": "40.7337081",
	"lng": "-74.0051144"
}, {
	"lat": "40.72139869999999",
	"lng": "-73.99759449999999"
}, {
	"lat": "40.7437839",
	"lng": "-73.9893618"
}, {
	"lat": "40.7609624",
	"lng": "-73.9902686"
}, {
	"lat": "40.8048926",
	"lng": "-73.9546798"
}, {
	"lat": "40.7627728",
	"lng": "-73.96606229999999"
}, {
	"lat": "40.7198577",
	"lng": "-74.0098708"
}, {
	"lat": "40.7650625",
	"lng": "-73.9659844"
}, {
	"lat": "40.7424509",
	"lng": "-74.0059581"
}, {
	"lat": "40.704197",
	"lng": "-74.0102964"
}, {
	"lat": "40.7385332",
	"lng": "-73.9856515"
}, {
	"lat": "40.729717",
	"lng": "-74.00370099999999"
}, {
	"lat": "40.7098612",
	"lng": "-74.00666"
}, {
	"lat": "40.75439530000001",
	"lng": "-73.986453"
}, {
	"lat": "40.7246887",
	"lng": "-74.0024636"
}, {
	"lat": "40.7598899",
	"lng": "-73.97320859999999"
}, {
	"lat": "40.7310236",
	"lng": "-74.00309709999999"
}, {
	"lat": "40.763705",
	"lng": "-73.9762452"
}, {
	"lat": "40.7272851",
	"lng": "-73.9852368"
}, {
	"lat": "40.735689",
	"lng": "-74.0003344"
}, {
	"lat": "40.7290944",
	"lng": "-73.98754029999999"
}, {
	"lat": "40.74540580000001",
	"lng": "-74.0018528"
}, {
	"lat": "40.72041919999999",
	"lng": "-73.9876219"
}, {
	"lat": "40.7237889",
	"lng": "-74.0032322"
}, {
	"lat": "40.7280056",
	"lng": "-73.97931849999999"
}, {
	"lat": "40.75189049999999",
	"lng": "-73.9775319"
}, {
	"lat": "40.7682624",
	"lng": "-73.95532270000001"
}, {
	"lat": "40.7644192",
	"lng": "-73.9819706"
}, {
	"lat": "40.7221166",
	"lng": "-73.9963862"
}, {
	"lat": "40.7305852",
	"lng": "-73.9930316"
}, {
	"lat": "40.7655377",
	"lng": "-73.97912099999999"
}, {
	"lat": "40.7348852",
	"lng": "-73.9996717"
}, {
	"lat": "40.72491340000001",
	"lng": "-73.9907851"
}, {
	"lat": "37.4223878",
	"lng": "-122.0841877"
}, {
	"lat": "40.7196639",
	"lng": "-73.9896801"
}, {
	"lat": "40.7182147",
	"lng": "-74.01013569999999"
}, {
	"lat": "40.756105",
	"lng": "-73.9901921"
}, {
	"lat": "40.7424703",
	"lng": "-74.00458979999999"
}, {
	"lat": "40.7290407",
	"lng": "-73.9848189"
}, {
	"lat": "40.7326548",
	"lng": "-73.985069"
}, {
	"lat": "40.7557653",
	"lng": "-73.9867598"
}, {
	"lat": "40.73415019999999",
	"lng": "-74.0074103"
}, {
	"lat": "40.740503",
	"lng": "-74.0007266"
}, {
	"lat": "40.7499441",
	"lng": "-73.9855335"
}, {
	"lat": "40.7622222",
	"lng": "-73.98561939999999"
}, {
	"lat": "40.741659",
	"lng": "-73.98488499999999"
}, {
	"lat": "40.7544678",
	"lng": "-73.9951944"
}]

  const restaurants = []

  names.forEach((name,i) => {
    restaurants.push({
      name: name,
      gf_items_count: gfItemNos[i] ?? 0,
      if_gf_available: gfOptionAvailable[i] ? true : false,
      gf_option_count: gfOptionCount[i] ?? 0,
      lat: geo[i].lat,
      lng: geo[i].lng
    })
  })

  // Deletes ALL existing entries
  await knex('restaurants').del()
  await knex('restaurants').insert(restaurants);
};
