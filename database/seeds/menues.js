/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('menues').del()
  await knex('menues').insert([
  {
    "restaurant_name": "Cosme",
    "location": "35 E 21St St, New York, Ny 10010",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Erin Mckenna’S Bakery",
    "location": "248 Broome St, New York City New York 10002",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "By The Way Bakery",
    "location": "1236 Lexington Ave, New York, Ny 10028",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Kimbap Lab",
    "location": "75 9Th Ave, New York, Ny 10011",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Macaron Café",
    "location": "625 Madison Ave, New York City New York 10022",
    "menu_item": "all items are gluten free",
    "notes": "shops sre temporarily closed. delivery available"
  },
  {
    "restaurant_name": "Macaron Parlour",
    "location": "44 Hester St, New York City New York 10002",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Modern Bread And Bagel",
    "location": "472 Columbus Ave, New York City New York 10024",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Nadas",
    "location": "48 Greenwich Ave, New York, Ny 10011",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Nami Nori West Village",
    "location": "33 Carmine St, New York, Ny 10014",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Noglu",
    "location": "1260 Madison Ave,, New York, Ny 10128",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Posh Pop Bakeshop",
    "location": "192 Bleecker St, New York, Ny 10012",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York, Ny 10003",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Senza Gluten",
    "location": "206 Sullivan St, New York, Ny 10012",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Senza Gluten By Jemiko",
    "location": "171 Sullivan St, New York, Ny 10012",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Tap Nyc",
    "location": "685 3Rd Ave, New York, Ny 10017",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Twentyonegrains",
    "location": "152 W 52Nd St, New York, Ny 10019",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Wild",
    "location": "535 Hudson St, New York, Ny 10014",
    "menu_item": "all items are gluten free",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Roasted Herb Chicken Breast",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "New York Stripsteak",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Black Sea Bass",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Chocolate Hearts",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Chocolate Slate With Raspberries",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Peanut Butter Cups With Peppermint",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Lime Marinated Chicken Tacos",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Mixed Marinated Olives (Vt)",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Ayza'S Guacamole (Vt)",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Grilled Spanish Octopus",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Anjou Pear Salad (Vt)",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Smoked Salmon",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Goat Cheese Brûlée (Vt)",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Black Sea Bass",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Lime Marinated Chicken Tacos",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Wild Mushroom Omelette",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Steak & Eggs",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Dark Chocolate Fondue",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Crispy Tofu",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Duck Liver Pate",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Gluten Free Bread",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Marshmallow",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Rice Krispies",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Risotto",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Sweet Potato Gratin",
    "notes": ""
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Hot Spinach & Artichoke Dip (Vt)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Eggplant Dip (Vt)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Hummus Dip (Vt)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Angry Chicken Lollipops (Spicy)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "La Havana Sandwich",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Ayza Wine & Chocolate Bar",
    "location": "11 W 31St St, New York City New York 10001",
    "menu_item": "Cheese Platter",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Brioche Bun Burger",
    "notes": "choose your gf protein, cheese, bacon, gg, produce and sauces option"
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Sprout Bun Burger",
    "notes": "choose your gf protein, cheese, bacon, gg, produce and sauces option"
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Lettuce Bed Burger",
    "notes": "choose your gf protein, cheese, bacon, gg, produce and sauces option"
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Gluten-Free Bun Burger",
    "notes": "choose your gf protein, cheese, bacon, gg, produce and sauces option"
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Keto-Friendly Bun Burger",
    "notes": "choose your gf protein, cheese, bacon, gg, produce and sauces option"
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Southwestern Salad (Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Classic Caesar Gf",
    "notes": ""
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Hudson Salad Gf",
    "notes": ""
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Mediterranean Salad Gf",
    "notes": ""
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Simple Salad Greens V Gf",
    "notes": ""
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "All-Natural Boneless Wings",
    "notes": "with choices of gf sauces"
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "All-Natural Wings",
    "notes": "with choices of gf sauces"
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Crispy Brussels Sprouts",
    "notes": "with choices of gf sauces"
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Panda Cubby Meal (Gf)",
    "notes": "with choices of gf sides"
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Kids’ Sundae (Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Bareburger",
    "location": "313 W 57Th St, New York, Ny 10019",
    "menu_item": "Flourless Chocolate Cake (Gf) (V)",
    "notes": ""
  },
  {
    "restaurant_name": "Bavaria Bierhaus",
    "location": "19 S William St, New York City New York 10004",
    "menu_item": "Crispy Pork Knuckle",
    "notes": ""
  },
  {
    "restaurant_name": "Bavaria Bierhaus",
    "location": "19 S William St, New York City New York 10004",
    "menu_item": "Haus Chicken Wings",
    "notes": ""
  },
  {
    "restaurant_name": "Bavaria Bierhaus",
    "location": "19 S William St, New York City New York 10004",
    "menu_item": "Brussel Sprouts",
    "notes": ""
  },
  {
    "restaurant_name": "Bavaria Bierhaus",
    "location": "19 S William St, New York City New York 10004",
    "menu_item": "Buffalo Cauliflower",
    "notes": ""
  },
  {
    "restaurant_name": "Bavaria Bierhaus",
    "location": "19 S William St, New York City New York 10004",
    "menu_item": "Wurst Sampler Platter",
    "notes": ""
  },
  {
    "restaurant_name": "Bavaria Bierhaus",
    "location": "19 S William St, New York City New York 10004",
    "menu_item": "Bratwurst",
    "notes": ""
  },
  {
    "restaurant_name": "Bavaria Bierhaus",
    "location": "19 S William St, New York City New York 10004",
    "menu_item": "Chicken Bratwurst",
    "notes": ""
  },
  {
    "restaurant_name": "Bavaria Bierhaus",
    "location": "19 S William St, New York City New York 10004",
    "menu_item": "Haus Spicy Sausage",
    "notes": ""
  },
  {
    "restaurant_name": "Bavaria Bierhaus",
    "location": "19 S William St, New York City New York 10004",
    "menu_item": "Käsekrainer",
    "notes": ""
  },
  {
    "restaurant_name": "Bavaria Bierhaus",
    "location": "19 S William St, New York City New York 10004",
    "menu_item": "Bierhaus Omelette",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Avocado, Lemon & Espelette",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "The House Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Kale & Apple Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Chicken' Arepas",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Butter Poached Lobster Sopes",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Thai Style Deep Fried Shrimp",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Roasted Bone Marrow",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Chile Spiced Dry Aged Burger",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Peruvian Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Togarashi Spiced Tuna",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Grilled Atlantic Salmon",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Pan Seared Scallops*",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Grilled Double Cut Lamb Chops",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "14 Oz. Dry Aged Ny Strip Steak",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "24 Oz. Bone-In Ribeye",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Spicy Salmon Tartare",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Shrimp Cocktail",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Beef Carpaccio",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "East & West Coast Oysters",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Pearls Of The Sea",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Broccolini",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Miso Glazed Crispy Eggplant",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Citrus Glazed String Beans",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Bbq Fries",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Housemade Cookie",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Boozy Milkshake Shot",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Selection Of Gelato & Sorbets",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Dark Chocolate Brownie Sundae",
    "notes": ""
  },
  {
    "restaurant_name": "Beauty & Essex",
    "location": "146 Essex St, New York, NY 10002",
    "menu_item": "Black Bottomed Butterscotch Pot De Créme",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "Huevos Rancheros",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "Tofu Florentine",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "Pancakes",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "Roasted Cauliflower",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "Jackfruit Tacos",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "Caesar",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "Kale",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "Greek",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "10 Vegetable Stir-Fry",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "Chocolate Ganache",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "Cashewtopia Ice Cream",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "‘Salmon’ Tofu",
    "notes": ""
  },
  {
    "restaurant_name": "Blossom Restaurant",
    "location": "507 Columbus Ave, New York City New York 10024",
    "menu_item": "Curried Stuffed Sweet Potato",
    "notes": ""
  },
  {
    "restaurant_name": "Bocaphe",
    "location": "222 Lafayette St, New York City New York 10012",
    "menu_item": "Taro Fries",
    "notes": ""
  },
  {
    "restaurant_name": "Bocaphe",
    "location": "222 Lafayette St, New York City New York 10012",
    "menu_item": "Shishito Peppers",
    "notes": ""
  },
  {
    "restaurant_name": "Bocaphe",
    "location": "222 Lafayette St, New York City New York 10012",
    "menu_item": "Crispy Spring Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Bocaphe",
    "location": "222 Lafayette St, New York City New York 10012",
    "menu_item": "Fresh Summer Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Bocaphe",
    "location": "222 Lafayette St, New York City New York 10012",
    "menu_item": "Veggie & Tofu Bo Bun",
    "notes": ""
  },
  {
    "restaurant_name": "Bocaphe",
    "location": "222 Lafayette St, New York City New York 10012",
    "menu_item": "Salmon & Thai Basil",
    "notes": ""
  },
  {
    "restaurant_name": "Bocaphe",
    "location": "222 Lafayette St, New York City New York 10012",
    "menu_item": "Salmon & Avocado",
    "notes": ""
  },
  {
    "restaurant_name": "Bocaphe",
    "location": "222 Lafayette St, New York City New York 10012",
    "menu_item": "Veggie & Tofu Rice Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Buddakan",
    "location": "75 9th Avenue, New York, NY 10011",
    "menu_item": "Vegetable Fried Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Burger And Lobster",
    "location": "39 W 19Th St, New York City New York 10011",
    "menu_item": "Beyond Burger",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Quesadilla",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Tostada De Tuna",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Ceviche",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Pulpo A Las Brasas",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Queso Fundido",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Taquitos De Langosta",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Ellote Callejero",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Ensalada De Tomates Con Queso",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Ensalada De Sandia Con Queso Fresco",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Pollo",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Dorados",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Carnitas",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Birria",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Hongos Enchiladas",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Big Ass Taco",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Enchiladas Rojas De Pollo",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Paella De Mariscos A La Mexicana",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Salmon Con Pepinos",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Rice And Beans",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Sweet & Spicy Brussels Sprouts - Cotija Cheese",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Cucumbers & Radish Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Cantina Rooftop",
    "location": "605 W 48Th St, New York City New York 10036",
    "menu_item": "Avocado Heirloom Tomatoes Pico De Gallo",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Raw Hummus And Pesto Zattar",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "(Raw) Nachos",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "(Raw) Almond Hummus",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Spanish Bruschetta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Warm Olives",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Peanut - Sesame Noodles",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "(Raw) Watercress Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "(Raw) Sea Vegetable Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "(Raw) Omega Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Un-Checiken Caesar Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "(Raw) Angel'S Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Santa Maria Stir Fry",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Caravan Burrito",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Shiitake & Maitake - Yuzu Ramen",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Macrobiotic Platter",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Cashew Lemon Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Raw Nori Rolls",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "(Raw) California Tostada",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "(Raw) Sampler Platter",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "(Raw) Cacao Fudge",
    "notes": ""
  },
  {
    "restaurant_name": "Caravan Of Dreams",
    "location": "405 E 6Th St, New York City New York 10009",
    "menu_item": "Warm Brownie Sundae",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Raw Bar Items (Clams & Shrimp)",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Roasted Peppers, Mozzarella & Anchovy",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Zuppa Di Clams (Red Or White Sauce)",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Zuppa Di Mussels (Red Or White Sauce)",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Carmine’S Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Mixed Green Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Caesar (Ordered Without Croutons)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Caprese Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Pomodoro  Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Marinara Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Giardiniera Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Mixed Seafood Pasta (Red Or White Sauce)",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Sausage Links W/ Marinara Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Broccoli Pasta (Red Or White Sauce [Ordered Without Bread Crumbs On White Sauce]",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Broccoli & Sausage Pasta (Red Or White Sauce[Ordered Without Bread Crumbs On White Sauce]",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Garlic & Oil Pasta [Ordered Without Bread Crumbs]",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Calamari Pasta (Red Or White Sauce)",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Clam Pasta (Red Or White Sauce)",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Country Style Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Country Style Pasta (Red Or White Sauce)",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Vodka Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "All Porterhouse Steaks",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Chicken Contadina",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Chicken Scarpariello",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Lobster Fra Diavolo (Ordered Over Gluten Free Pasta)",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Shrimp Fra Diavolo",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Shrimp Marinara",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Salmon (Ordered With No Bread Crumbs)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Tartufo",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Fresh Fruit",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Chocolate Torte",
    "notes": ""
  },
  {
    "restaurant_name": "Carmine’S",
    "location": "200 W 44Th St, New York City New York 10036",
    "menu_item": "Titanic/Tugboat (Ordered Without Cookies)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Jumbo Shrimp Cocktail",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Baby Gem Caesar Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Tuscan Kale Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Crispy Cauliflower",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Filet Skewers",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "A5 Japanese Miyazaki Wagyu",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Herb Roasted Branzino",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Whole Roasted Branzino",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Grilled Branzino",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Salmon A La Plancha",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Seared Yellowfin Tuna",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Seared Halibut",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Jalapeño Cucumber Emulsion Sauce (Choice Of Sauce)",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Kale Pesto Sauce (Choice Of Sauce)",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Mushroom Penne",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "10Oz Filet Mignon",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "36Oz Usda Prime Porterhouse For Two",
    "notes": ""
  },
  {
    "restaurant_name": "Catch",
    "location": "21 Ninth Avenue, New York City New York 10014",
    "menu_item": "Charred Broccolini",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Jumbo Shrimp Cocktail",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Baby Gem Caesar Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Tuscan Kale Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Crispy Cauliflower",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Filet Skewers",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "A5 Japanese Miyazaki Wagyu",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Herb Roasted Branzino",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Whole Roasted Branzino",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Grilled Branzino",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Salmon A La Plancha",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Seared Yellowfin Tuna",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Seared Halibut",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Mushroom Penne",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "10Oz Filet Mignon",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "36Oz Usda Prime Porterhouse For Two",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Roof",
    "location": "21 Ninth Avenue, New York, NY 10014",
    "menu_item": "Charred Broccolini",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Jumbo Shrimp Cocktail",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Dressed East Coast Oysters",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Caesar Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Sizzling Shrimp",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Roasted Langoustines",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Snow Beef",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Olive Beef",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "”True” A5 Kobe Beef",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Flight Of Three",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Japanese Wagyu",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "12 Oz Bone-In Filet",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "10 Oz Chili Rubbed Grass Fed Ny Strip",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "8 Oz Truffle Butter Filet",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "14 Oz Boneless Ribeye",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "6 Oz Prime Rib Cap (28 Day)",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "12 Oz Prime Bone-In Cowgirl Ribeye (32 Day)",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "12 Oz Prime Bone-In Strip (38 Day)",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "6 Oz Imperial Wagyu Filet",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "10 Oz Snake River Ny Strip",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "32 Oz Prime Porterhouse",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "40 Oz Prime Tomahawk (35 Day)",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "24 Oz Wagyu Porterhouse",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Simply Grilled Branzino",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Simply Grilled Salmon",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Dover Sole",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Wilted Spinach",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Roasted Brussels Sprouts",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Twice Baked Potato",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Grilled Asparagus",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Simple Mashed Potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Housemade Ice Cream",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Cookies & Cream Baked Alaska",
    "notes": ""
  },
  {
    "restaurant_name": "Catch Steak - Nyc",
    "location": "88 9th Avenue, New York, NY 10011",
    "menu_item": "Sorbet",
    "notes": ""
  },
  {
    "restaurant_name": "Ceci Italian Restaurant",
    "location": "46 W 46Th St, New York, Ny 10036",
    "menu_item": "Chocolate Cake Gluten Free",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Plant Based Ginger Chicken Dumpling",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Plant Based Thai Peanut Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Plant Based Cheeseburger",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Plant Based Asian Veggie",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Chicken Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Lobster Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Shrimp Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Double Thick Bacon Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Beef Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Glazed Spare Ribs",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "160Z Grilled Filet Mignon",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "180Z Ny Prime Strip",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "240Z Bone In Dry Aged Ribeye",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "480Z Dry-Aged Porterhouse",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Prime Dry Aged Bone In Tomahawk",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Colorado Lamb Chops",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Pork Chop",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Veal Chop",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Sweet Black Bean Beijing Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Spicy Velvet Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Broiled Whole Red Snapper",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Shanghai Salmon With Vegetables",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Spicy 9 Season Shrimp",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Salt & Pepper Shrimp",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Green Spinach Shrimp",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "7 Lb Li Peking Duck $89 Alaskan King Crab Legs – Garlic & Ginger",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "4Lb Lobster – Ginger & Garlic",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Alaskan King Crab Legs – Garlic & Ginger",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "4Lb Lobster – Ginger & Garlic",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Bok Choy",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Wild Mushrooms",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Broccoli And Garlic",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Wok Fried Onions And Garlic",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Crispy Sweet & Sour Eggplant",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Double Thick Bacon",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "Garlic Ginger Mashed Potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "Chop Shop",
    "location": "254 10Th Ave, New York City New York 10001",
    "menu_item": "French Fries",
    "notes": ""
  },
  {
    "restaurant_name": "Clement At The Peninsula",
    "location": "700 5Th Ave, New York City New York 10019",
    "menu_item": "Gluten Free Amaranth Flour Blueberry Pancakes, Lemon Mascarpone",
    "notes": ""
  },
  {
    "restaurant_name": "Clement At The Peninsula",
    "location": "700 5Th Ave, New York City New York 10019",
    "menu_item": "Malted Gluten Free Belgian Waffles, Brandied Banana, Coconut Whip",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "“Tuna” Crudo",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Portobello Carpaccio",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Salt Roasted Beet",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Fig and “Feta”",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "House Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Margherita Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Wild Mushroom Truffle Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Sunchoke and “Scallop” Risotto",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Penne alla Vodka Pasta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Rigatoni alla Norma Pasta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Strawberry Panna Cotta",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Grilled asparagus",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Garlic broccolini",
    "notes": ""
  },
  {
    "restaurant_name": "Coletta",
    "location": "365 3rd Avenue, New York, NY 10016",
    "menu_item": "Baked lemon potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "Daily Provisions - Manhattan West",
    "location": "440 West 33rd Street, Suite 90, New York, NY 10001",
    "menu_item": "Pb & J Cookie (*Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Daily Provisions - Union Square",
    "location": "103 E 19th St. New York, NY 10003",
    "menu_item": "Pb & J Cookie (*Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Daily Provisions - Upper Side West",
    "location": "375 Amsterdam Avenue, New York, NY 10024",
    "menu_item": "Pb & J Cookie (*Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Daily Provisions - West Village",
    "location": "29 Bedford Street, New York, NY 10014",
    "menu_item": "Pb & J Cookie (*Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Salumi Misti Of Mortadella, San Daniele, Soppressata, Coppa, House Pickles, Mixed Marinated Olives",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Marinated Cantabrian Anchovies, Roasted Pepper, Olives & Ravida Al Limone",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Iceberg Wedge Salad With Avocado, Grated Pecorino, Crispy Pancetta & Dante Dressing",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Organic Fennel Salad With Avocado, Dill, Grapefruit Segment & Parmigiano Reggiano",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Heirloom Tomato & Seasonal Peach Salad Tossed With Freekah Meredith Dairy Feta, Dill, Mint And Parsley",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Prosciutto San Daniele & Cavaillon Sweet Melon",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Angus Beef Hand Diced Steak Tartare With Onion & Capers Served With Crostini",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Steamed Mussel In Spicy Tomatoes & White Wine Sauce Served With Lightly Toasted Onion And Potato Sourdough",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Grain Fed Bavette Steak, Served With Summer Peperonata & Freshly Chopped Gremolata Sauce",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Green Asparagus With Cabernet Sauvignon Dressing & Ricotta Salata",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Roast Fingerling Potatoes With Black Lava Salt, Rosemary And Mustard Aioli",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Blistered Shishito Peppers, Lemon Zest, Sea Salt & Smoked Paprika",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Summer Corn On The Cob, Oven Roasted, Rubbed With Chipotle, Grated Pecorino & A Wedge Of Lime",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Buttermilk Panna Cotta With Strawberries & Balsamic",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Flourless Chocolate Cake, Creme Fraiche & Orange",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Dante'S Home Made Almond Coconut Granola (Organic, Plant Based, Paleo Granola.)",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Burrata With Heirloom Cherry Tomatoes, Oregano, Taggiasca Olives, Basil Oil, Toasted Rye",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Iceberg Wedge Salad With Avocado, Grated Pecorino, Crispy Pancetta & Dante Dressing",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Proscuitto San Daniele & Cavaillon Sweet Melon",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Shishito Peppers, Sea Salt, Lemon And Smoked Paprika",
    "notes": ""
  },
  {
    "restaurant_name": "Dante",
    "location": "79-81 Macdougal St, New York City New York 10012",
    "menu_item": "Roast Potatoes With Black Lava Salt, Rosemary And Mustard Aioli",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Escargot Beurre Maître D’Hôtel",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Crème De Carotte Aux Lentilles Corail",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Tomates Mozzarella Méditerranéenne",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Tapenade & Tomates Séchées",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Foie Gras Vegan Avec Confiture De Figue",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Plateau De Fromage",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Bœuf Bourguignon",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Coq Au Vin",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Steak Tartare Végétal Et Frites Maison",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Ratatouille Niçoise",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Steak Frites Infusées À La Truffe Blanche",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Coquilles St Jacques",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Mr Petrossian Smoked Salmon (Konjac), Crème Fraiche, Avocado Puree, Dill",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Mr Rabelais Toulouse Sausage (Vegetables Blend), Parisian Mushrooms, Mustard Cream & Emmental Cheese (Cashew Based)",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "La Paysanne Bacon (Dried Beans) , Tomato, Onions, Potatoes & Emmental Cheese (Cashew Based)",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Mr Seguin Goat & Herbs Cheese (Cashew Based), Grilled Chicken (Vegetable Fibers), Agave, Walnuts & Emmental Cheese (Cashew Based)",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Leonard De Vinci French Ratatouille & Emmental Cheese (Cashew Based)",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Crêpes Gourmandes",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Lavender Infused Rice Pudding",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Orange Creme Brulee",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Lemon / Raspberry / Chocolate Sorbet",
    "notes": ""
  },
  {
    "restaurant_name": "Delice & Sarrasin",
    "location": "20 Christopher St, New York City New York 10014",
    "menu_item": "Chocolate Mousse",
    "notes": ""
  },
  {
    "restaurant_name": "Dimes",
    "location": "49 Canal St, New York City New York 10002",
    "menu_item": "Spiced Chickpeas",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Spiced Coconut Chips",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Avocado Dip",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Sunflower Beet Hummus",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Vegan Mozzarella Plate",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Creamy Vegetable Soup",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Soothing Mung Soup",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Paneer Nori Rolls",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Spinach-Cheese Cutlets",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Steamed Beet And Fennel Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Jicama-Avocado Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Quinoa Tabbouleh Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Avocado Toast",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Stir Fry Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Vegetable Curry In Cashew Sauce",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Seasonal Kitchari (Rice & Lentil Stew)",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Seasonal Roasted Vegetable Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Green Cabbage & Kale Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Choose Three, Choose Four, Choose Five Custom Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Paneer Protein (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Sautéed Leafy Greens (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Roasted Sweet Potatoes (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Seasonal Roasted Vegetables (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Quinoa & Wild Rice (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Red Bhutanese Rice (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Basmati Rice (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Beluga Lentils (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Half Avocado (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Gluten-Free Toast (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Divya’S Kitchen",
    "location": "25 1St Ave, New York City New York 10003",
    "menu_item": "Tablespoon Of Cultured Ghee (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Frittatine",
    "notes": ""
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Arancini",
    "notes": ""
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Crocchette Di Patate Al Limone",
    "notes": ""
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Montanara Genovese",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Montanara Truffle",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Montanara",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Pizza Pianeta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Via Tribunali",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Calzone Fritto",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Prosciutto & Arugula",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Bianca With Arugula",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Sorrentina",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Quattro Formaggi",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Salsiccia & Friarielli",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Provola",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Mushrooms",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Italian Cooked Ham",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Prosciutto & Mushrooms",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Ricotta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Vegetariana",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Vegana",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Padrino",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Capricciosa",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Kesté",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Puttanesca",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Hot Sopressata",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Napoli",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Salami",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Sausage",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Prosciutto",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Sausage & Mushrooms",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Marinara",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Gio'S Marinara",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Pomodoro",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Regina Margherita",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Artichokes",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Pistacchio & Salsiccia",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Noci & Zucchini",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Pizza Del Re",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Macellaio (The Butcher)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Vesuvio (Stuffed Pizza)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Truffle Burrata Pizza",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Burrata Roberto",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Egg Shop",
    "location": "151 Elizabeth St, New York City New York 10012",
    "menu_item": "Egg Shop B.E.C.",
    "notes": ""
  },
  {
    "restaurant_name": "Egg Shop",
    "location": "151 Elizabeth St, New York City New York 10012",
    "menu_item": "A.E.C",
    "notes": ""
  },
  {
    "restaurant_name": "Egg Shop",
    "location": "151 Elizabeth St, New York City New York 10012",
    "menu_item": "Sausage Egg & Cheese",
    "notes": ""
  },
  {
    "restaurant_name": "Egg Shop",
    "location": "151 Elizabeth St, New York City New York 10012",
    "menu_item": "Hot Chix",
    "notes": ""
  },
  {
    "restaurant_name": "Egg Shop",
    "location": "151 Elizabeth St, New York City New York 10012",
    "menu_item": "Avo & Egg",
    "notes": ""
  },
  {
    "restaurant_name": "Egg Shop",
    "location": "151 Elizabeth St, New York City New York 10012",
    "menu_item": "Ricotta Scramble",
    "notes": ""
  },
  {
    "restaurant_name": "Egg Shop",
    "location": "151 Elizabeth St, New York City New York 10012",
    "menu_item": "Blt Benedict",
    "notes": ""
  },
  {
    "restaurant_name": "Egg Shop",
    "location": "151 Elizabeth St, New York City New York 10012",
    "menu_item": "Fish Out Of Water",
    "notes": ""
  },
  {
    "restaurant_name": "Egg Shop",
    "location": "151 Elizabeth St, New York City New York 10012",
    "menu_item": "Pepper Boy",
    "notes": ""
  },
  {
    "restaurant_name": "Egg Shop",
    "location": "151 Elizabeth St, New York City New York 10012",
    "menu_item": "Umaro Blt",
    "notes": ""
  },
  {
    "restaurant_name": "Extra Virgin",
    "location": "259 W 4Th St, New York City New York 10014",
    "menu_item": "Extra Virgin Salad (Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Extra Virgin",
    "location": "259 W 4Th St, New York City New York 10014",
    "menu_item": "Chopped Falafel Salad(Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Extra Virgin",
    "location": "259 W 4Th St, New York City New York 10014",
    "menu_item": "Truffle Parmesan Fusilli (Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Extra Virgin",
    "location": "259 W 4Th St, New York City New York 10014",
    "menu_item": "Grilled Atlantic Salmon (Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Extra Virgin",
    "location": "259 W 4Th St, New York City New York 10014",
    "menu_item": "Rare Seared Yellow Fin Tuna Steak (Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Extra Virgin",
    "location": "259 W 4Th St, New York City New York 10014",
    "menu_item": "Simply Grilled Mahi Mahi (Gf)",
    "notes": ""
  },
  {
    "restaurant_name": "Friedman’S At The Edison",
    "location": "228 W 47Th St, New York, Ny 10036",
    "menu_item": "Blueberry Pancakes",
    "notes": ""
  },
  {
    "restaurant_name": "Friedman’S At The Edison",
    "location": "228 W 47Th St, New York, Ny 10036",
    "menu_item": "Chocolate Chip Pancakes",
    "notes": ""
  },
  {
    "restaurant_name": "Gran Morsi",
    "location": "22 Warren St, New York City New York 10007",
    "menu_item": "Petite Lettuces, Shaved Fennel, Cherry Tomatoes, Radish, House Vinaigrette",
    "notes": ""
  },
  {
    "restaurant_name": "Gran Morsi",
    "location": "22 Warren St, New York City New York 10007",
    "menu_item": "Eggplant & Zucchini",
    "notes": ""
  },
  {
    "restaurant_name": "Gran Morsi",
    "location": "22 Warren St, New York City New York 10007",
    "menu_item": "Fritto Misto",
    "notes": ""
  },
  {
    "restaurant_name": "Gran Morsi",
    "location": "22 Warren St, New York City New York 10007",
    "menu_item": "Pasta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Gran Morsi",
    "location": "22 Warren St, New York City New York 10007",
    "menu_item": "Salmon Saltimbocca",
    "notes": ""
  },
  {
    "restaurant_name": "Gran Morsi",
    "location": "22 Warren St, New York City New York 10007",
    "menu_item": "Striped Bass Piccata",
    "notes": ""
  },
  {
    "restaurant_name": "Gran Morsi",
    "location": "22 Warren St, New York City New York 10007",
    "menu_item": "New York Strip",
    "notes": ""
  },
  {
    "restaurant_name": "Gran Morsi",
    "location": "22 Warren St, New York City New York 10007",
    "menu_item": "Veal Marsala",
    "notes": ""
  },
  {
    "restaurant_name": "Gran Morsi",
    "location": "22 Warren St, New York City New York 10007",
    "menu_item": "Broccoli Rabe",
    "notes": ""
  },
  {
    "restaurant_name": "Gran Morsi",
    "location": "22 Warren St, New York City New York 10007",
    "menu_item": "Wild Shrooms",
    "notes": ""
  },
  {
    "restaurant_name": "Gran Morsi",
    "location": "22 Warren St, New York City New York 10007",
    "menu_item": "Herb Roasted Potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Gluten Free Kale Dumplings In Tofu Skin Wrap",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Porridge Of The Week",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Spicy Silky Tofu In Clay Pot",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Mini Tofu Ball Sticks In Sweet And Sour Sauce",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Organic Wheat Free Kale Pancakes",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Mix Green Salad With Avocado",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Gluten Free Buckwheat And Sweet Potato Noodles Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Gluten Free Bibimbap Or Stone Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Gluten Free Avocado Stone Bowl Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Spicy Tofu With Broccoli In Spicy Garlic Sauce",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Organic Gluten Free Zen Noodles",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Spicy Eggplant With Kimchi In Gluten Free Brown Sauce",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Grilled Fresh Todok Strips In Gluten Free Tamari Soy Sauce With Ginger",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Matcha Tiramisu",
    "notes": ""
  },
  {
    "restaurant_name": "Hangawi",
    "location": "12 E 32Nd St, New York City New York 10016",
    "menu_item": "Vegan Mochi Ice Cream Platter",
    "notes": ""
  },
  {
    "restaurant_name": "Haven Rooftop At Sanctuary Hotel",
    "location": "132 W 47Th St, New York City New York 10036",
    "menu_item": "Crab & Avocado Palette",
    "notes": ""
  },
  {
    "restaurant_name": "Haven Rooftop At Sanctuary Hotel",
    "location": "132 W 47Th St, New York City New York 10036",
    "menu_item": "Shrimp Cocktail",
    "notes": ""
  },
  {
    "restaurant_name": "Haven Rooftop At Sanctuary Hotel",
    "location": "132 W 47Th St, New York City New York 10036",
    "menu_item": "Kale Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Haven Rooftop At Sanctuary Hotel",
    "location": "132 W 47Th St, New York City New York 10036",
    "menu_item": "Lobster Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Inday",
    "location": "1133 Broadway, New York, Ny 10010",
    "menu_item": "Tamarind-Glazed Salmon",
    "notes": ""
  },
  {
    "restaurant_name": "Inday",
    "location": "1133 Broadway, New York, Ny 10010",
    "menu_item": "Charred Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Inday",
    "location": "1133 Broadway, New York, Ny 10010",
    "menu_item": "Lentil Falafel Chaat",
    "notes": ""
  },
  {
    "restaurant_name": "Inday",
    "location": "1133 Broadway, New York, Ny 10010",
    "menu_item": "Grilled Inday Kebab",
    "notes": ""
  },
  {
    "restaurant_name": "Inday",
    "location": "1133 Broadway, New York, Ny 10010",
    "menu_item": "Golden Chicken Curry",
    "notes": ""
  },
  {
    "restaurant_name": "Inday",
    "location": "1133 Broadway, New York, Ny 10010",
    "menu_item": "Chicken Tikka Masala",
    "notes": ""
  },
  {
    "restaurant_name": "Inday",
    "location": "1133 Broadway, New York, Ny 10010",
    "menu_item": "Coconut Chickpea Curry",
    "notes": ""
  },
  {
    "restaurant_name": "Inday",
    "location": "1133 Broadway, New York, Ny 10010",
    "menu_item": "Spring Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Inday",
    "location": "1133 Broadway, New York, Ny 10010",
    "menu_item": "Complete Macro Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Sikil Pak",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Hijiki-Hearts Of Palm Ceviche",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Mole Tamal",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Chips Y Queso Dip",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Tres Amigos",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Watermelon Gazpacho",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Guacamole Y Chips",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Gorditas",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Enchiladas Mole",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Verde Enchiladas",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Chilaquiles Rojo / Verde",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Pollo Coco",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Palm Carnitas",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Mezcal Mushroom",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Barbacoa",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Chipotle Sweet Potato",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Crispy Pescado",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Buffalo Flower",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Turmeric Cauliflower Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Dinosaur Kale",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Rainbow Chard",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Plátano Cream Pie",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Coconut Leche Pie",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Choco Chip Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Jajaja Mexicana",
    "location": "162 E Broadway, New York City New York 10002",
    "menu_item": "Velvet Rojo Pie",
    "notes": ""
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Polpette",
    "notes": ""
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Arancini",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Angioletti",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Pizza Margherita",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Pizza Diavola",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Marinara",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Mast'Nicola",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Margherita With Salami",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Kesté",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Vegana",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Vegetariana",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Quattro Formaggi",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Bianca With Arugula",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Prosciutto & Arugula",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Pistacchio E Salsiccia",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Montanara",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Montanara Truffle",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Salciccia",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Salciccia & Funghi",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Funghi",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Prosciutto",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Prosciutto & Funghi",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Salami",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Provola",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Carcioffi",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Cotto Roasted Pork",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Marinara Kesté",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Capricciosa",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Pomodoro",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Ricotta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Puttanesca",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Regina Margherita",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Padrino",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Calzone",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Calzone With Mushrooms",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Night And Day Calzone",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Salsiccia & Friarielli",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Sorrentina",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Calzone Fritto",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Pizza Pianeta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Burrata Roberto Pizza",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Truffle Burrata Pizza",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Macellaio (The Butcher)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Pistacchio & Salsiccia",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Vesuvio (Stuffed Pizza)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Noci & Zucchini",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Pizza Del Re",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Giorgia",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Montanara",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Montanara Genovese",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Via Tribunali",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Sabrina",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Regina Romana",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Montanara Sabrina",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Pagnotello",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Toscano",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Positano",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Ponza",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Materdei",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Porchetta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Angioletti",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Potato Croquettes",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Panzarotto Mozz &Pom",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Panzarotto Pist E Porchetta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Insalata Pizza",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Tiramisu",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Angioletti W. Nutella",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Torta Caprese",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza W. Nutella",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pastiera Napoletana",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Torta Caprese + Ice Cream",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Angoletti X 2 + Ice Cream",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Small Nutella + Ice Cream",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Gf Pizza Nutella + Ice Cream",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Keste",
    "location": "77 Fulton St, New York, Ny 10038",
    "menu_item": "Meat Lasagna",
    "notes": ""
  },
  {
    "restaurant_name": "La Loteria",
    "location": "29 7Th Ave S, New York City New York 10014",
    "menu_item": "Salsas Del Valiente",
    "notes": ""
  },
  {
    "restaurant_name": "La Loteria",
    "location": "29 7Th Ave S, New York City New York 10014",
    "menu_item": "La Loteria Crudite",
    "notes": ""
  },
  {
    "restaurant_name": "La Loteria",
    "location": "29 7Th Ave S, New York City New York 10014",
    "menu_item": "Guacamole Tradicional",
    "notes": ""
  },
  {
    "restaurant_name": "La Loteria",
    "location": "29 7Th Ave S, New York City New York 10014",
    "menu_item": "Guacamole Combo",
    "notes": ""
  },
  {
    "restaurant_name": "La Loteria",
    "location": "29 7Th Ave S, New York City New York 10014",
    "menu_item": "Chipotle Peanut Salad",
    "notes": ""
  },
  {
    "restaurant_name": "La Loteria",
    "location": "29 7Th Ave S, New York City New York 10014",
    "menu_item": "Garden Omelette",
    "notes": ""
  },
  {
    "restaurant_name": "La Loteria",
    "location": "29 7Th Ave S, New York City New York 10014",
    "menu_item": "Huevos Rancheros",
    "notes": ""
  },
  {
    "restaurant_name": "La Loteria",
    "location": "29 7Th Ave S, New York City New York 10014",
    "menu_item": "Chilaquiles",
    "notes": ""
  },
  {
    "restaurant_name": "La Loteria",
    "location": "29 7Th Ave S, New York City New York 10014",
    "menu_item": "Refried Black Beans",
    "notes": ""
  },
  {
    "restaurant_name": "La Loteria",
    "location": "29 7Th Ave S, New York City New York 10014",
    "menu_item": "Applewood Bacon",
    "notes": ""
  },
  {
    "restaurant_name": "La Mercerie",
    "location": "53 Howard St., New York, NY",
    "menu_item": "Gâteau Au Chocolat À La Farine De Noisette",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Oysters On The Half Shell",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Charred Octopu",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Jumbo Shrimp Cocktail",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Organic Mixed Greens",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Roasted Beets",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Burrata",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Grilled Shrimp Spiedini",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Crispy Chicken “Dominic”",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Black Bass Alla Napolitana",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Filet Mignon",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Rack Of Lamb",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "New York Strip",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Bone-In Ribeye",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Porterhouse",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Sautéed Spinach",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Jumbo Asparagus",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Mixed Wild Mushrooms",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Roasted Rosemary Potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Creamed Spinach",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Garlic Mashed Potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "Lavo",
    "location": "39 E 58Th St, New York City New York 10022",
    "menu_item": "Brussels Sprouts",
    "notes": ""
  },
  {
    "restaurant_name": "Lexington Brass",
    "location": "517 Lexington Ave, New York City New York 10017",
    "menu_item": "Granola Parfait",
    "notes": ""
  },
  {
    "restaurant_name": "Lexington Brass",
    "location": "517 Lexington Ave, New York City New York 10017",
    "menu_item": "Eggs Benedict",
    "notes": ""
  },
  {
    "restaurant_name": "Lexington Brass",
    "location": "517 Lexington Ave, New York City New York 10017",
    "menu_item": "2 Eggs (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Lexington Brass",
    "location": "517 Lexington Ave, New York City New York 10017",
    "menu_item": "Applewood Smoked Bacon (Sides)",
    "notes": ""
  },
  {
    "restaurant_name": "Little Cupcake Bakeshop",
    "location": "30 Prince St, New York City New York 10012",
    "menu_item": "Gluten Free & Vegan Chocolate Cupcakes",
    "notes": ""
  },
  {
    "restaurant_name": "Little Cupcake Bakeshop",
    "location": "30 Prince St, New York City New York 10012",
    "menu_item": "Egan & Gluten Free Blueberry Banana Muffin",
    "notes": ""
  },
  {
    "restaurant_name": "Little Cupcake Bakeshop",
    "location": "30 Prince St, New York City New York 10012",
    "menu_item": "Gluten-Free Banana Chocolate Chunk Muffin",
    "notes": ""
  },
  {
    "restaurant_name": "Magic Hour Rooftop & Bar",
    "location": "485 7th Ave. (at 36th St.), New York, NY 10018",
    "menu_item": "Glitter Donuts",
    "notes": ""
  },
  {
    "restaurant_name": "Mamo",
    "location": "323 W Broadway, New York City New York 10013",
    "menu_item": "Farmhouse Granola Parfait",
    "notes": ""
  },
  {
    "restaurant_name": "Mamo",
    "location": "323 W Broadway, New York City New York 10013",
    "menu_item": "Sandwiches",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Mira Sushi",
    "location": "46 W 22Nd St, New York City New York 10010",
    "menu_item": "Papaya Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Mira Sushi",
    "location": "46 W 22Nd St, New York City New York 10010",
    "menu_item": "Edamame",
    "notes": ""
  },
  {
    "restaurant_name": "Mira Sushi",
    "location": "46 W 22Nd St, New York City New York 10010",
    "menu_item": "Garlic Broccoli Or Baby Bok Choy",
    "notes": ""
  },
  {
    "restaurant_name": "Morton’S",
    "location": "136 Washington, New York City New York 10006",
    "menu_item": "Jumbo Shrimp Cocktail",
    "notes": ""
  },
  {
    "restaurant_name": "Morton’S",
    "location": "136 Washington, New York City New York 10006",
    "menu_item": "Prime Steaks & Chops",
    "notes": ""
  },
  {
    "restaurant_name": "Morton’S",
    "location": "136 Washington, New York City New York 10006",
    "menu_item": "Fresh Vegetable Sides",
    "notes": ""
  },
  {
    "restaurant_name": "Morton’S",
    "location": "136 Washington, New York City New York 10006",
    "menu_item": "Prime Steaks & Chops",
    "notes": ""
  },
  {
    "restaurant_name": "Morton’S",
    "location": "136 Washington, New York City New York 10006",
    "menu_item": "Crab & Lobster",
    "notes": ""
  },
  {
    "restaurant_name": "Morton’S",
    "location": "136 Washington, New York City New York 10006",
    "menu_item": "Grilled & Sautéed Sides",
    "notes": ""
  },
  {
    "restaurant_name": "Morton’S",
    "location": "136 Washington, New York City New York 10006",
    "menu_item": "Delectable Desserts",
    "notes": ""
  },
  {
    "restaurant_name": "Nicoletta",
    "location": "160 2Nd Ave, New York City New York 10003",
    "menu_item": "Low Gluten Pizza Build Your Own On A 10\" Crust",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Split Pea Soup",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Chili Kale Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Green Falafel Sala",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Avocado Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Halloumi Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Falafel",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Roasted Beets",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Labneh",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "White Cabbage",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Stuffed Grape Leaves",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Side Tirshi",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Moroccan Carrots",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Israeli Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Nish Nush",
    "location": "88 Reade St, New York City New York 10013",
    "menu_item": "Red Cabbage",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Ricotta Cheesecake",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "House Made Gluten Free Focaccia",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Socca",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Grilled Flat Beans",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Roasted Brussels Sprouts",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Eggplant Rollatini",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Capocollo",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Burrata",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Fritto Misto",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Octopus",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Zuppa Del Giorno",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Arugula Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Caesar Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Tuscan Kale Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Caprese",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Margherita Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "San Remo Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Pepperoni Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Sausage Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Vegetariana Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Mushroom Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Quattro Formaggio Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Calamari Fra Diavolo Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Piccante Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Soppressata Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Pasta Genovese",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Pasta Cacio E Pepe",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Gnocchi Al Forno",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Amatriciana",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Fra Diavolo",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Pasta Vongole",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Sunday Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Chicken Paillard",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Tuna Grigliato",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Branzino Alla Ligure",
    "notes": ""
  },
  {
    "restaurant_name": "Nizza",
    "location": "630 9Th Ave, New York City New York 10036",
    "menu_item": "Bistecca",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Carciofi",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Mozzarella Con Zucchine",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Insalata Di Pomodoro",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Insalata Verde",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Prosciutto E Melone",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Polpettine",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Fettuccine Ai Funghi",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Ravioli Cacio E Pepe",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Salmone Selvaggio",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Tagliata Di Manzo",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Uova Alla Milanese",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Frittata Agli Spinachi",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Affogato",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Sorbetto",
    "notes": ""
  },
  {
    "restaurant_name": "Palma",
    "location": "28 Cornelia St, New York City New York 10014",
    "menu_item": "Gelato",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Cured Olives",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Garlic Bread",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Pappardella Giant Meatball",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Pan Fried Burrata",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Whipped Buffalo Ricotta",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Bruschetta",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Garlic Bread",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Mozzarella Caprese",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Riviera",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Caprino",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Tricolore",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Carpaccio Di Manzo",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Prosciutto Di Parma E Melone",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Zuppa Di Frutti Di Mare",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Asparagi Genovese",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Classical Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Margherita Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Prosciutto Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Funghi Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Caprino Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Foccacia Aromatica Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Pasta Buttera",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Pasta Unghi E Tartufo",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Pasta Bisanzio",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Pasta Gamberi",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Pasta Bolognese",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Pasta Baresi",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Pasta Frutti Di Mare",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Pasta Vongole",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Pasta Verdura",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Fileto Di Salmone Raspighi",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Branzino Alla Griglia",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Pollo Al Parmigiano",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Vitello Al Parmigiano",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gamberi Al Parmigiano",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Petto Di Pollo Alla Griglia",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Vitello Al Marsala",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Agnello Alla Griglia",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gf Bistecca Di Manzo",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Insalata Mista",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Broccoli Di Rabe All’ Aglio",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Spinachi",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Patate Al Forno",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Asparagi Verd",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Purè Di Patate",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Broccoli Gratinata",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Risotto Milanese",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Cheese Board",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Assorted Marinated Vegetable",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Cured Meats",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Torta Di Cioccolato",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Zabaione Con Fragole Fresche",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Frutta Fresca",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Gelato",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Sorbetto",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Lucy’S Sugar Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Formaggio",
    "notes": ""
  },
  {
    "restaurant_name": "Pappardella",
    "location": "316 Columbus Ave, New York City New York 10023",
    "menu_item": "Coconut Panacotta",
    "notes": ""
  },
  {
    "restaurant_name": "Peacefood Café",
    "location": "460 Amsterdam Ave, New York City New York 10024",
    "menu_item": "Chickpea Fries",
    "notes": ""
  },
  {
    "restaurant_name": "Peacefood Café",
    "location": "460 Amsterdam Ave, New York City New York 10024",
    "menu_item": "Red Bean Chili + Corn Bread",
    "notes": ""
  },
  {
    "restaurant_name": "Peacefood Café",
    "location": "460 Amsterdam Ave, New York City New York 10024",
    "menu_item": "Macho Nachos",
    "notes": ""
  },
  {
    "restaurant_name": "Peacefood Café",
    "location": "460 Amsterdam Ave, New York City New York 10024",
    "menu_item": "Fluffy Quinoa Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Peacefood Café",
    "location": "460 Amsterdam Ave, New York City New York 10024",
    "menu_item": "Peacefood Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Peacefood Café",
    "location": "460 Amsterdam Ave, New York City New York 10024",
    "menu_item": "Pumpkin Quiche",
    "notes": ""
  },
  {
    "restaurant_name": "Peacefood Café",
    "location": "460 Amsterdam Ave, New York City New York 10024",
    "menu_item": "Raw Lasagna",
    "notes": ""
  },
  {
    "restaurant_name": "Peacefood Café",
    "location": "460 Amsterdam Ave, New York City New York 10024",
    "menu_item": "Raw Sushi Rolls",
    "notes": ""
  },
  {
    "restaurant_name": "Peacefood Café",
    "location": "460 Amsterdam Ave, New York City New York 10024",
    "menu_item": "Cheesy Fries",
    "notes": ""
  },
  {
    "restaurant_name": "Peacefood Café",
    "location": "460 Amsterdam Ave, New York City New York 10024",
    "menu_item": "Spaghetti Squash",
    "notes": ""
  },
  {
    "restaurant_name": "Peacefood Café",
    "location": "460 Amsterdam Ave, New York City New York 10024",
    "menu_item": "Pom Pom Mushroom Curry",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Salt & Pepper Calamari",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Grand Walnut Sesame Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Chicken Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Beef Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Shrimp Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Lobster Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Lobster Fried Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Vegetable Stir Fry",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Crispy Seaweed",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Broccoli",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Bok Choy",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Steamed Mixed Vegetables",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Salt & Pepper Eggplant",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Salt & Pepper Tofu",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Curried Tofu",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Green Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Black Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Salt & Pepper Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Curried Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Nine Seasons Spicy Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Special Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "White Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Curried Calamari",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Drunken Sea Bass",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Salt & Pepper Sea Bass",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Maine Lobster",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Salt & Pepper Lobster",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Red King Crabs",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Beijing Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Spicy Velvet Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Kung Pao Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Sweet & Sour Chicke",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Curried Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Crispy Duck",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Crispy Beef",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Brown Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Green Beans",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Tofu Vegetable Stir Fry",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Baby Green Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Crispy Duck Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Chicken Lettuce Wraps",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Beef Lettuce Wraps",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Vegetable Lettuce Wraps",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Chicken Flat Noodle",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Chilean Sea Bass",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Slow Roasted Pork Butt",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "House Mignon",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Philippe’S Surf & Turf",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Chicken Fried Rice",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Pork Fried Rice",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "33 East 60th Street (Between Park & Madison Avenues), NY 10065",
    "menu_item": "Shrimp Fried Rice",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Salt & Pepper Calamari",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Grand Walnut Sesame Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Chicken Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Beef Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Shrimp Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Lobster Satay",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Lobster Fried Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Vegetable Stir Fry",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Crispy Seaweed",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Broccoli",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Bok Choy",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Steamed Mixed Vegetables",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Salt & Pepper Eggplant",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Salt & Pepper Tofu",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Curried Tofu",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Green Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Black Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Salt & Pepper Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Curried Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Nine Seasons Spicy Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Special Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "White Prawns",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Curried Calamari",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Drunken Sea Bass",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Salt & Pepper Sea Bass",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Maine Lobster",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Salt & Pepper Lobster",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Red King Crabs",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Beijing Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Spicy Velvet Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Kung Pao Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Sweet & Sour Chicke",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Curried Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Crispy Duck",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Crispy Beef",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Brown Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Green Beans",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Tofu Vegetable Stir Fry",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Baby Green Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Crispy Duck Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Chicken Lettuce Wraps",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Beef Lettuce Wraps",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Vegetable Lettuce Wraps",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Chicken Flat Noodle",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Chilean Sea Bass",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Slow Roasted Pork Butt",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "House Mignon",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Philippe’S Surf & Turf",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Chicken Fried Rice",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Pork Fried Rice",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Philippe",
    "location": "355 W 16th St., New York, NY 10011",
    "menu_item": "Shrimp Fried Rice",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Porchlight",
    "location": "28th Street, 271 11th Ave, New York, NY 10001",
    "menu_item": "Fried Oysters",
    "notes": ""
  },
  {
    "restaurant_name": "Porchlight",
    "location": "28th Street, 271 11th Ave, New York, NY 10001",
    "menu_item": "Hush Puppies",
    "notes": ""
  },
  {
    "restaurant_name": "Porchlight",
    "location": "28th Street, 271 11th Ave, New York, NY 10001",
    "menu_item": "Firecracker Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Porchlight",
    "location": "28th Street, 271 11th Ave, New York, NY 10001",
    "menu_item": "Smoked Cauliflower Dip With Crisp Vegetables",
    "notes": ""
  },
  {
    "restaurant_name": "Porchlight",
    "location": "28th Street, 271 11th Ave, New York, NY 10001",
    "menu_item": "Kale & Brussels Sprout Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Porchlight",
    "location": "28th Street, 271 11th Ave, New York, NY 10001",
    "menu_item": "Texas \"Bowl Of Red\" Chili",
    "notes": ""
  },
  {
    "restaurant_name": "Porchlight",
    "location": "28th Street, 271 11th Ave, New York, NY 10001",
    "menu_item": "Fried Tofu Banh Mi",
    "notes": ""
  },
  {
    "restaurant_name": "Porchlight",
    "location": "28th Street, 271 11th Ave, New York, NY 10001",
    "menu_item": "Harvest Grain Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Fruit Plate",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Grass Fed Organic Yogurt",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Chia Pudding",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Lemon Ricotta Pancakes",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Rolled Omelet",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Farmer'S Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Grilled Chicken Quinoa Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "East Coast Oysters",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Green Chickpea Panisse",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Cucumber Gazpacho",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Grilled Spanish Octopus",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Charred Market Beets",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Endive Citrus Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Steamed Mussels",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Duroc Pork Collar",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Heirloom Sasso Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Long Island Duck Breast",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Monkfish",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Blistered Shishitos",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Grecian Eggplant",
    "notes": ""
  },
  {
    "restaurant_name": "Print",
    "location": "Kimpton Ink48 Hotel, 653 11Th Ave, New York City New York 10036",
    "menu_item": "Mashed Potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "Rafele",
    "location": "29 7th Ave S, New York City New York 10014",
    "menu_item": "Insalata Del Mercato",
    "notes": ""
  },
  {
    "restaurant_name": "Rafele",
    "location": "29 7th Ave S, New York City New York 10014",
    "menu_item": "Rughetta",
    "notes": ""
  },
  {
    "restaurant_name": "Rafele",
    "location": "29 7th Ave S, New York City New York 10014",
    "menu_item": "Cavolfiore",
    "notes": ""
  },
  {
    "restaurant_name": "Rafele",
    "location": "29 7th Ave S, New York City New York 10014",
    "menu_item": "Penne Frutti Di Mare",
    "notes": ""
  },
  {
    "restaurant_name": "Rafele",
    "location": "29 7th Ave S, New York City New York 10014",
    "menu_item": "Tagliata Di Manzo",
    "notes": ""
  },
  {
    "restaurant_name": "Rafele",
    "location": "29 7th Ave S, New York City New York 10014",
    "menu_item": "Branzino Alla Griglia",
    "notes": ""
  },
  {
    "restaurant_name": "Rafele",
    "location": "29 7th Ave S, New York City New York 10014",
    "menu_item": "Zuppa Di Pesce",
    "notes": ""
  },
  {
    "restaurant_name": "Rezdora",
    "location": "27 East 20th street, NYC, NY 10003",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Category 5 Caramel",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Vegan Almond Shmalmond",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Be My Banana Coconut",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Take Me To Tiramisu",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Sex Drugs And Rocky Road",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Old Fashioned Romance",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Man-Made Mascarpone",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Hazelnut Chocolate Bear Hug",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Fluent In French Toast",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Coconut Coma",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Coast To Coast Cheesecake",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "The Edge Of Rum Raisin",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Chocolate Chip Flirt",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Raspberry Statement",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "I Gotta The Panna Cotta",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Understanding Vanilla",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "It Takes Two To Peach Mango",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Play It Again Butter Pecan",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Mint Chocolate Chip",
    "notes": ""
  },
  {
    "restaurant_name": "Rice To Riches",
    "location": "37 Spring St, New York City New York 10012",
    "menu_item": "Red Velvet Special",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Guacamole En Molcajete",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Ceviche De Camarones",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Alambre De Pollo",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Suizas",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Mestiza",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Rosa Chopped Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Ensalada Picada",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Carnitas",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "BudíN De Pollo",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Pescado Primavera",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Alambre A La Mexicana",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Alambre De Camarones",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Esquites",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Coliflor",
    "notes": ""
  },
  {
    "restaurant_name": "Rosa Mexicano",
    "location": "9 E 18Th St, New York City New York 10003",
    "menu_item": "Col Rizada",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Rubirosa (Insalata)",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Arugula (Insalata)",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Caesar (Insalata)",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Caprese (Insalata)",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Meatballs",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Roasted Octopus",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Mini Rice Balls",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Mozzarella Sticks",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Calamari",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Gf Spaghetti",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Gf Penne",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Gf Cacio E Pepe",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Chicken Parmigiano",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Classic Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Fresca Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Vodka Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Rubirosa Supreme Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Sausage & Broccoli Rabe Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Bianca Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Arugula Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Tie-Dye Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Honey Pie Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Substitute Vegan Cheese Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Rubirosa",
    "location": "235 Mulberry St, New York City New York 10012",
    "menu_item": "Flourless Chocolate Cake",
    "notes": ""
  },
  {
    "restaurant_name": "Sadelle’S",
    "location": "463 W Broadway, New York City New York 10012",
    "menu_item": "Gluten Free Bagel & Cream Cheese",
    "notes": ""
  },
  {
    "restaurant_name": "Sant Ambroeus",
    "location": "265 Lafayette St, New York City New York 10012",
    "menu_item": "Pane E Marmellata",
    "notes": ""
  },
  {
    "restaurant_name": "Sant Ambroeus",
    "location": "265 Lafayette St, New York City New York 10012",
    "menu_item": "Pasta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Sauce",
    "location": "78 Rivington St, New York City New York 10002",
    "menu_item": "Pappa Di Zucchini Soup",
    "notes": ""
  },
  {
    "restaurant_name": "Sauce",
    "location": "78 Rivington St, New York City New York 10002",
    "menu_item": "Mozzarella Di Bufala",
    "notes": ""
  },
  {
    "restaurant_name": "Sauce",
    "location": "78 Rivington St, New York City New York 10002",
    "menu_item": "Insalata Gilda",
    "notes": ""
  },
  {
    "restaurant_name": "Sauce",
    "location": "78 Rivington St, New York City New York 10002",
    "menu_item": "Soft Polenta",
    "notes": ""
  },
  {
    "restaurant_name": "Sauce",
    "location": "78 Rivington St, New York City New York 10002",
    "menu_item": "Broccoli Rabe",
    "notes": ""
  },
  {
    "restaurant_name": "Sauce",
    "location": "78 Rivington St, New York City New York 10002",
    "menu_item": "Green Beans",
    "notes": ""
  },
  {
    "restaurant_name": "Sauce",
    "location": "78 Rivington St, New York City New York 10002",
    "menu_item": "Zucchini Limone",
    "notes": ""
  },
  {
    "restaurant_name": "Sauce",
    "location": "78 Rivington St, New York City New York 10002",
    "menu_item": "Baby Arugula Insalata",
    "notes": ""
  },
  {
    "restaurant_name": "Sauce",
    "location": "78 Rivington St, New York City New York 10002",
    "menu_item": "Summer Pan Seared Salmon",
    "notes": ""
  },
  {
    "restaurant_name": "Sauce",
    "location": "78 Rivington St, New York City New York 10002",
    "menu_item": "Steak Tagliata",
    "notes": ""
  },
  {
    "restaurant_name": "Schmackary’S",
    "location": "362 W 45th St, New York City New York 10036",
    "menu_item": "Strawberries & Cream Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Schmackary’S",
    "location": "362 W 45th St, New York City New York 10036",
    "menu_item": "Candied Yam Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Schmackary’S",
    "location": "362 W 45th St, New York City New York 10036",
    "menu_item": "Rosemary'S Baby Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Schmackary’S",
    "location": "362 W 45th St, New York City New York 10036",
    "menu_item": "Eggnog Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Schmackary’S",
    "location": "362 W 45th St, New York City New York 10036",
    "menu_item": "Schmack & Cheese Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Schmackary’S",
    "location": "362 W 45th St, New York City New York 10036",
    "menu_item": "Mint Mojito Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Schmackary’S",
    "location": "362 W 45th St, New York City New York 10036",
    "menu_item": "Lemon Poppy Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Schmackary’S",
    "location": "362 W 45th St, New York City New York 10036",
    "menu_item": "Yogi Bare Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Schmackary’S",
    "location": "362 W 45th St, New York City New York 10036",
    "menu_item": "Green Tea Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Schmackary’S",
    "location": "362 W 45th St, New York City New York 10036",
    "menu_item": "Sweet Corn Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Schnipper’S Quality Kitchen",
    "location": "620 8th Ave, New York City New York 10018",
    "menu_item": "Burgers",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper’S Quality Kitchen",
    "location": "620 8th Ave, New York City New York 10018",
    "menu_item": "All Salads",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper’S Quality Kitchen",
    "location": "620 8th Ave, New York City New York 10018",
    "menu_item": "All Sandwiches*",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper’S Quality Kitchen",
    "location": "620 8th Ave, New York City New York 10018",
    "menu_item": "Chicken Fingers & Fries",
    "notes": ""
  },
  {
    "restaurant_name": "Schnipper’S Quality Kitchen",
    "location": "620 8th Ave, New York City New York 10018",
    "menu_item": "All Hot Dogs",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper’S Quality Kitchen",
    "location": "620 8th Ave, New York City New York 10018",
    "menu_item": "Jon’S Famous Sloppy Joe Sandwich**",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Skinny Pizza",
    "location": "225 Liberty Street, New York City New York 10281",
    "menu_item": "Pomodoro & Fresh Basil Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Skinny Pizza",
    "location": "225 Liberty Street, New York City New York 10281",
    "menu_item": "Pomodoro & 4 Meatballs Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Skinny Pizza",
    "location": "225 Liberty Street, New York City New York 10281",
    "menu_item": "Vodka & Mushrooms Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Skinny Pizza",
    "location": "225 Liberty Street, New York City New York 10281",
    "menu_item": "Alfredo & Broccoli Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Skinny Pizza",
    "location": "225 Liberty Street, New York City New York 10281",
    "menu_item": "Pesto, Antibiotic-Free Chicken, Sun-Dried Tomatoes Pasta",
    "notes": ""
  },
  {
    "restaurant_name": "Skinny Pizza",
    "location": "225 Liberty Street, New York City New York 10281",
    "menu_item": "Cobb (Salad)",
    "notes": ""
  },
  {
    "restaurant_name": "Skinny Pizza",
    "location": "225 Liberty Street, New York City New York 10281",
    "menu_item": "Simple (Salad)",
    "notes": ""
  },
  {
    "restaurant_name": "Skinny Pizza",
    "location": "225 Liberty Street, New York City New York 10281",
    "menu_item": "Gorgonzola (Salad)",
    "notes": ""
  },
  {
    "restaurant_name": "Skinny Pizza",
    "location": "225 Liberty Street, New York City New York 10281",
    "menu_item": "Mediterranean (Salad)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Tortilla Española",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Huevos A La Flamenca",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "B.E.C. Paella",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Ensalada De Burrata Y Tomate Heirloom",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Ensalada Socarrat",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Calamar A La Plancha",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Atún Con Sésamo",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Gambas Al Ajillo",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Chorizo…Chorizo!",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Pulpo A La Gallega",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Alcachofas Fritas",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Champiñones Salteados",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Socarrat (Paella)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "De La Huerta (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Arroz Negro (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Pescado Y Marisco (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Langosta (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Carne (Paella)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Costilla De Ternera",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Coles De Bruselas",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Chuletas De Cordero",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Almendras Y Aceitunas",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Boquerones En Vinagre",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Jamón Serrano",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Jamón Ibérico",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Campero",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Quesos",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Flan",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Tarta De Santiago",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "259 West 19th Street, New York City New York 10011",
    "menu_item": "Helado & Sorbete Del Día",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Tortilla Española",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Huevos A La Flamenca",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "B.E.C. Paella",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Ensalada De Burrata Y Tomate Heirloom",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Ensalada Socarrat",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Calamar A La Plancha",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Atún Con Sésamo",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Gambas Al Ajillo",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Chorizo…Chorizo!",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Pulpo A La Gallega",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Alcachofas Fritas",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Champiñones Salteados",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Socarrat (Paella)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "De La Huerta (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Arroz Negro (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Pescado Y Marisco (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Langosta (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Carne (Paella)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Costilla De Ternera",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Coles De Bruselas",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Chuletas De Cordero",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Almendras Y Aceitunas",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Boquerones En Vinagre",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Jamón Serrano",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Jamón Ibérico",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Campero",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Quesos",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Flan",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Tarta De Santiago",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "284 Mulberry St New York, NY 10012",
    "menu_item": "Helado & Sorbete Del Día",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Tortilla Española",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Huevos A La Flamenca",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "B.E.C. Paella",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Ensalada De Burrata Y Tomate Heirloom",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Ensalada Socarrat",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Calamar A La Plancha",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Atún Con Sésamo",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Gambas Al Ajillo",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Chorizo…Chorizo!",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Pulpo A La Gallega",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Alcachofas Fritas",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Champiñones Salteados",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Socarrat (Paella)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "De La Huerta (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Arroz Negro (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Pescado Y Marisco (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Langosta (Paella)",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Carne (Paella)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Costilla De Ternera",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Coles De Bruselas",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Chuletas De Cordero",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Almendras Y Aceitunas",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Boquerones En Vinagre",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Jamón Serrano",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Jamón Ibérico",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Campero",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Quesos",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Flan",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Tarta De Santiago",
    "notes": ""
  },
  {
    "restaurant_name": "Socarrat",
    "location": "953 2nd Ave New York, NY 10022",
    "menu_item": "Helado & Sorbete Del Día",
    "notes": ""
  },
  {
    "restaurant_name": "Spot Dessert Bar",
    "location": "13 St Marks Place, New York City New York 10003",
    "menu_item": "Ume Lychee Granita",
    "notes": ""
  },
  {
    "restaurant_name": "Springbone Kitchen",
    "location": "",
    "menu_item": "Grandma'S Chicken & Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Springbone Kitchen",
    "location": "",
    "menu_item": "Mexican Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Springbone Kitchen",
    "location": "",
    "menu_item": "Herb-Roasted Salmon Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Springbone Kitchen",
    "location": "",
    "menu_item": "Grass-Fed Barbacoa Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Springbone Kitchen",
    "location": "",
    "menu_item": "Shaved Brussels Sprout Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Springbone Kitchen",
    "location": "",
    "menu_item": "Cashew Kale Caesar Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Springbone Kitchen",
    "location": "",
    "menu_item": "Vegan Shakshuka",
    "notes": ""
  },
  {
    "restaurant_name": "Springbone Kitchen",
    "location": "",
    "menu_item": "Avocado Gluten-Free Toast",
    "notes": ""
  },
  {
    "restaurant_name": "Springbone Kitchen",
    "location": "",
    "menu_item": "Barbacoa Sandwich (Gluten-Free Sesame Roll)",
    "notes": ""
  },
  {
    "restaurant_name": "Springbone Kitchen",
    "location": "",
    "menu_item": "Coconut Chia Pudding",
    "notes": ""
  },
  {
    "restaurant_name": "Springbone Kitchen",
    "location": "",
    "menu_item": "Sb Granola",
    "notes": ""
  },
  {
    "restaurant_name": "Square Diner",
    "location": "33 Leonard St, New York City New York 10013",
    "menu_item": "Gluten Free Pancakes",
    "notes": "delivery, takeout, private parties & catering"
  },
  {
    "restaurant_name": "Taim",
    "location": "45 Spring St, New York City New York 10012",
    "menu_item": "Falafel",
    "notes": ""
  },
  {
    "restaurant_name": "Taim",
    "location": "45 Spring St, New York City New York 10012",
    "menu_item": "Roasted Meatballs",
    "notes": ""
  },
  {
    "restaurant_name": "Taim",
    "location": "45 Spring St, New York City New York 10012",
    "menu_item": "Cauliflower Shawarma",
    "notes": ""
  },
  {
    "restaurant_name": "Taim",
    "location": "45 Spring St, New York City New York 10012",
    "menu_item": "Golden Eggplant",
    "notes": ""
  },
  {
    "restaurant_name": "Taim",
    "location": "45 Spring St, New York City New York 10012",
    "menu_item": "Chicken Shawarma",
    "notes": ""
  },
  {
    "restaurant_name": "Taim",
    "location": "45 Spring St, New York City New York 10012",
    "menu_item": "Impossible Kebabs",
    "notes": ""
  },
  {
    "restaurant_name": "Taim",
    "location": "45 Spring St, New York City New York 10012",
    "menu_item": "Toasted Cumin Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Taim",
    "location": "45 Spring St, New York City New York 10012",
    "menu_item": "Falafel & Tahini",
    "notes": ""
  },
  {
    "restaurant_name": "Taim",
    "location": "45 Spring St, New York City New York 10012",
    "menu_item": "Cauliflower Shawarma & Tahini",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Spicy Tuna Taco",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Chicken Adobo Taco",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Tofu Tinga Taco",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Carnitas Taco",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Braised Shortrib Taco",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Chipotle Shrimp Taco",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Veggie Taco",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Mandarin Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Kale & Quinoa Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Puebla Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Spinach Avocado Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Rice Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Burrito",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Teriyaki Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Nachos",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Takumi Slaw",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Charred Corn Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Japanese Rice & Beans",
    "notes": ""
  },
  {
    "restaurant_name": "Takumi Taco",
    "location": "75 9th Ave, New York City New York 10011",
    "menu_item": "Chips And Salsa",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Hot Edamame",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Tuna Poke",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Salmon Tartare",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Spicy Tuna Tartare On Crispy Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Miso With Tofu & Manila Clams",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Fresh Oyster",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Tuna Pringles",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Seared Salmon Sashimi",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Yellowtail Sashimi",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Crunchy Spicy Yellowtail",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Angry Dragon",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Salmon Avocado",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Soy Tuna Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Shrimp Tempura",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Chef Yoshi",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Crispy Lobster",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Surf And Turf",
    "notes": ""
  },
  {
    "restaurant_name": "Tao Downtown",
    "location": "92 Ninth Avenue at 16th Street, New York, NY 10011",
    "menu_item": "Rainbow Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Tarallucci E Vino Upper West Side",
    "location": "475 Columbus Ave, New York, Ny 10024",
    "menu_item": "Pasta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Tarallucci E Vino Upper West Side",
    "location": "475 Columbus Ave, New York, Ny 10024",
    "menu_item": "Blueberry Scone",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Tartare Of Lavraki Or Salmon",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Mediterranean Fish Tacos",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Shrimp Santorini",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Octapodi",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Heirloom Tomatoes",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Romaine",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Spinach",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Beets",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Artisanal Cheeses",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Rib Eye Steak",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Lamb Chops",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Bronzino",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Pan Seared Scallops",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Lavraki",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Royal Dorado",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Wild King Shrimp",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Baby Steamed Zucchini",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Sauteed Baby Spinach",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Broccoli Rabe With Feta Cheese",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Mushroom Risotto",
    "notes": ""
  },
  {
    "restaurant_name": "Thalassa",
    "location": "179 Franklin St, New York City New York 10013",
    "menu_item": "Thalassa Lemon Potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Tomato Scallion Scone",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Chocolate Chip Almond Bread",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Butcher’S Pancakes",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Country Breakfast",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Crab Cake Benedict",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Tempeh Or Adzuki Bacon",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Forbidden Fruit-Over Night Oats",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Spicy Kale Caesar",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Little Gem Salad",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Healing Harvest Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Butcher’S Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Mushroom & Squash Carbonara",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Roasted Beet Hummus",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Jumbo Lump Crab Cakes",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Oven Roasted Sweet Potatoes Wedges",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Roasted Pee Wee And Red Potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Roasted Rainbow Carrots",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Pasta Orechiette",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "The Best Egg Sandwich",
    "notes": ""
  },
  {
    "restaurant_name": "The Butcher’S Daughter",
    "location": "19 Kenmare St, New York City New York 10012",
    "menu_item": "Classic Avocado Toast",
    "notes": ""
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Fresh Oysters On The Half Shell",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Jumbo Lump Crab Cocktail",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Shrimp Cocktail",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Prosciutto-Wrapped Mozzarella With Vine Ripe Tomatoes Without Croutons",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Pan-Fried Calamari With Hot Cherry Peppers Sautéed Without Breading",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Cold Shellfish Platter",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Grand Plateau",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "New England Clam Chowder Without Crackers",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Roasted Pear And Gorgonzola Salad With Walnut Vinaigrette",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Field Greens, Butter Leaf Lettuce, Heirloom Tomatoes With Parmesan Vinaigrette",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Caesar Salad Without Croutons",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Wedge With Bleu Cheese And Smoked Bacon",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Burrata With Heirloom Tomatoes Without Croutons",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Sliced Filet Mignon With Cipollini Onions, Wild Mushrooms And Fig Essence",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Porcini-Rubbed Bone-In Ribeye With 15-Year Aged Balsamic",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Bone-In Kona Crusted Dry Aged Ny Strip With Shallot Butter",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Seared Tenderloin With Butter Poached Lobster Tails",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Tomahawk Veal Chop With Sage Butter, Marsala Jus And Crispy Prosciutto",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Dry Aged Ny Strip",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Bone-In Ribeye",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Roasted Chicken Breast With Mushroom And Parmesan Risotto",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Filet Mignon",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Seared Salmon With Heirloom Tomatoes, White Wine Butter And Lemon Basil Mosto",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Sushi-Grade Seared Sesame Tuna Without Tuna Dressing And Soy Sauce",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Pan-Seared Sea Bass With Shiitake Mushrooms, Asparagus And Miso Butter",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Sam’S Mashed Potatoes",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Au Gratin Potatoes Without Topping",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Cauliflower Au Gratin Without Topping",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Sautéed Spinach With Garlic Confit",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Roasted Wild Mushrooms",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Grilled Asparagus With Lemon Mosto",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Seared Salmon With Avocado, Mango And Tomato Salad With Champagne Vinaigrette",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "Maine Lobster Salad With Citrus Vinaigrette",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Capital Grille",
    "location": "120 Broadway, New York City New York 10271",
    "menu_item": "The Capital Grille “Cobb” With Sliced Tenderloin And Mustard Dressing",
    "notes": "GF Sensitivee Menu available"
  },
  {
    "restaurant_name": "The Cellar At Beecher'S Ny",
    "location": "900 Broadway, New York City New York 10003",
    "menu_item": "Goat Cheese Stuffed Peppers",
    "notes": ""
  },
  {
    "restaurant_name": "The Cellar At Beecher'S Ny",
    "location": "900 Broadway, New York City New York 10003",
    "menu_item": "Flank Steak",
    "notes": ""
  },
  {
    "restaurant_name": "The Cellar At Beecher'S Ny",
    "location": "900 Broadway, New York City New York 10003",
    "menu_item": "Deviled Eggs",
    "notes": ""
  },
  {
    "restaurant_name": "The Cellar At Beecher'S Ny",
    "location": "900 Broadway, New York City New York 10003",
    "menu_item": "Broccoli Caesar Salad",
    "notes": ""
  },
  {
    "restaurant_name": "The Cellar At Beecher'S Ny",
    "location": "900 Broadway, New York City New York 10003",
    "menu_item": "Mixed Greens",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Free Range Eggs Any Style, Potato Hash",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Smoked Salmon And Scrambled Eggs, Mixed Greens",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Seasonal Fruit Plate",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Hash Brown Potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Organic Low-Fat Yogurt",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Autumn Squash Soup, Wild Rice, Sage, Pumpkin Seed Oil",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Tricolore Salad – Burrata, Heirloom Tomato, Avocado, Olives",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Tuna Tartare, Daikon, Avocado, Long Beans, Soy And Yuzu Dressing",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Smoked Salmon And Scrambled Eggs, Mixed Greens",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Spinach Salad, Shrimp, Shiitakes, Avocado, Feta, Egg, Bacon, Sherry Vinaigrette",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Seared Salmon, Smoky Corn Purée, Ginger Braised Leeks, Caulilini, Brussels Sprout Leaves",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Quinoa Grains Bowl - Broccolini, Heirloom Carrots, Patty Pan Squash, Parsnip Mousseline",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Sautéed Spinach, Garlic",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Chef’S Selection Of Ice Creams And Sorbets",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Gem Lettuce, Herbs, Figs, Blue Cheese, Pine Nuts, Apple Cider Vinaigrette",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Roast Chicken With Olives, Potatoes, Preserved Lemon, Muscat Grapes",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Grilled Dorade, Swiss Chard, Sticky Rice, Garlic Confit, House Made Mango Chutney",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Grilled Lamb Porterhouse, Eggplant Caviar, Sunchokes, Agro Dolce, Herb Salad",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Lobster And Corn Cobb Salad, Kale, Tomato, Cucumber, Egg, Avocado Ranch",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Rice Noodle Salad, Bell Peppers, Pea Shoots, Soy-Ginger Dressing, Chicken Or Shrimp",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Charred Broccolini And Seasonal Mushrooms",
    "notes": ""
  },
  {
    "restaurant_name": "The Crosby Bar",
    "location": "79 Crosby St, New York City New York 10012",
    "menu_item": "Spicy Spaghetti Squash",
    "notes": ""
  },
  {
    "restaurant_name": "The Dubliner",
    "location": "45 Stone St, New York City New York 10004",
    "menu_item": "Buffalo Cauliflower",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Baked Beet Falafel",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Watercress Guacamole",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Sunflower Seed Hummus",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Crispy Spirulina Rice*",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Squash Proscuitto Pizzetta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Blistered Shishito Peppers",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Roasted Shrimp Salad",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Little Gem Caesar Salad",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Beet & Kale Salad",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Gazpacho",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Crispy Salmon*",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Hanger Steak*",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Cavatelli",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Mushroom & Black Bean Burger (Gluten-Free Bun And Lettuce Wraps)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Grass-Fed Beef Burger* (Gluten-Free Bun And Lettuce Wraps)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Mushroom Reuben (Gluten-Free Bread And Lettuce Wraps)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Shrimp Lettuce Wraps",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Aleppo-Roasted Sweet Potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Grilled Asparagus",
    "notes": ""
  },
  {
    "restaurant_name": "The Little Beet Table",
    "location": "333 Park Ave S, New York, Ny 10010",
    "menu_item": "Roasted Rainbow Baby Carrots",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Mini Buffalo B’Alls",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Autumn Pear",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Simple",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Baby Kale",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Big Italian",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Caprese",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Pan Seared Branzino",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Roasted Scottish Salmon",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Slow Braised Osso Buco",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Free-Range Roasted Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Autumn Pear Salad",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Simple Salad",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Big Italian Salad",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Caprese Salad",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Roasted Broccoli",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Honey Roasted Carrots",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Brussels Sprouts",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Kale",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Roasted Butternut Squash",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Mushrooms",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "C’Alliflower",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Daily Grain",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Seasonal Risotto",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Mashed Potatoes",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Polenta",
    "notes": ""
  },
  {
    "restaurant_name": "The Meatball Shop",
    "location": "64 Greenwich Ave, New York City New York 10011",
    "menu_item": "Mini Buffalo B’Alls - Family",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Kale Sweet Potato Salad",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Kombu Cured Hiramasa",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "East Coast Oysters",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Steelhead Trout",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Seared Tuna",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "New York Strip",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "East Coast Oysters",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Atlantic Scallops",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Heritage Carrots",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Rohan Duck",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Duo Of Pork",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Maine Lobster",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Halibut",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Salt Baked Sweet Potato",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Painted Hills Filet Mignon",
    "notes": ""
  },
  {
    "restaurant_name": "The Peak – Nyc",
    "location": "30 Hudson Yards, 101st Floor, New York, NY, United States, New York",
    "menu_item": "Zucchini Caponata",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Rainbow Hash",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Scrambled Egg Tacos",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Crispy Scallion Potato Pancake",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Fried Green Tomato Egg Sandwich",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Two Eggs Your Way",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Tlk Granola Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Chicken Sausage",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Crispy Tofu",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Potato Hash",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Fresh Fruit",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Crispy Tofu Bites",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Spring Rolls",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Grilled Lemongrass Wings",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Tiger Fries",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Shredded Green Mango & Papaya Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "P.E.I. Mussels",
    "notes": ""
  },
  {
    "restaurant_name": "Tlk- By Tigerlily Kitchen",
    "location": "58 3Rd Ave, New York, Ny 10003",
    "menu_item": "Peanut Street Noodles",
    "notes": ""
  },
  {
    "restaurant_name": "Tommy Bahama Restaurant & Bar",
    "location": "551 5th Ave, New York City New York 10176",
    "menu_item": "Ahi Tuna Poke",
    "notes": ""
  },
  {
    "restaurant_name": "Tommy Bahama Restaurant & Bar",
    "location": "551 5th Ave, New York City New York 10176",
    "menu_item": "Guacamole & Fire Roasted Salsa",
    "notes": ""
  },
  {
    "restaurant_name": "Tommy Bahama Restaurant & Bar",
    "location": "551 5th Ave, New York City New York 10176",
    "menu_item": "Caramelized Cauliflower",
    "notes": ""
  },
  {
    "restaurant_name": "Tommy Bahama Restaurant & Bar",
    "location": "551 5th Ave, New York City New York 10176",
    "menu_item": "Grilled Chicken & Mango Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Tommy Bahama Restaurant & Bar",
    "location": "551 5th Ave, New York City New York 10176",
    "menu_item": "Blackened Shrimp Chopped Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Tommy Bahama Restaurant & Bar",
    "location": "551 5th Ave, New York City New York 10176",
    "menu_item": "Kona Coffee Crusted Ribeye",
    "notes": ""
  },
  {
    "restaurant_name": "Tompkin Square Bagels",
    "location": "164 Avenue A, New York City New York 10009",
    "menu_item": "Gluten Free Pancakes",
    "notes": ""
  },
  {
    "restaurant_name": "Tompkin Square Bagels",
    "location": "164 Avenue A, New York City New York 10009",
    "menu_item": "Gluten-Free Bagel",
    "notes": ""
  },
  {
    "restaurant_name": "Tompkin Square Bagels",
    "location": "164 Avenue A, New York City New York 10009",
    "menu_item": "Specialty Sandwiches",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Tompkin Square Bagels",
    "location": "164 Avenue A, New York City New York 10009",
    "menu_item": "Gluten Free Cookies",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Duck Leg Confit Risotto",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Cobb Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Pan Seared Organic Salmon",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Smoked Salmon Club Sandwich",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "The Trinity Wagyu Burger",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Market Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Hummus",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Caesar Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Baby Kale Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Duo Of Tartare",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Charcuterie Board",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Trinity Cheese Board",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Cheese & Charcuterie Board",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "House Made Chicken Liver Pate",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Burrata",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Spice Crusted Mahi Mahi",
    "notes": ""
  },
  {
    "restaurant_name": "Trinity Place Bar & Restaurant",
    "location": "115 Broadway, New York City New York 10006",
    "menu_item": "Petite Filet Medallions Au Poivre",
    "notes": ""
  },
  {
    "restaurant_name": "Two Boots",
    "location": "86 1/2 Nassau St, New York City New York 10038",
    "menu_item": "Gluten-Free Brownie",
    "notes": ""
  },
  {
    "restaurant_name": "Two Boots",
    "location": "86 1/2 Nassau St, New York City New York 10038",
    "menu_item": "Gluten-Free Pizza (Create Your Pizza)",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - NoHo",
    "location": "74 Bleecker St, New York, NY 10012",
    "menu_item": "Banana Walnut Bread",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - NoHo",
    "location": "74 Bleecker St, New York, NY 10012",
    "menu_item": "Brekky Panna Cotta",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - NoHo",
    "location": "74 Bleecker St, New York, NY 10012",
    "menu_item": "Açaí Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - NoHo",
    "location": "74 Bleecker St, New York, NY 10012",
    "menu_item": "Zoe'S Market Plate",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - NoHo",
    "location": "74 Bleecker St, New York, NY 10012",
    "menu_item": "Brassicas Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - NoHo",
    "location": "74 Bleecker St, New York, NY 10012",
    "menu_item": "Salmon Quinoa Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - NoHo",
    "location": "74 Bleecker St, New York, NY 10012",
    "menu_item": "Miso Mushroom Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Nolita",
    "location": "164 Mott St, New York City New York 10013",
    "menu_item": "Banana Walnut Bread",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Nolita",
    "location": "164 Mott St, New York City New York 10013",
    "menu_item": "Acai Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Nolita",
    "location": "164 Mott St, New York City New York 10013",
    "menu_item": "Zoe'S Market Plate",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Nolita",
    "location": "164 Mott St, New York City New York 10013",
    "menu_item": "Brassicas Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Tribeca",
    "location": "251 Church St, New York City New York 10013",
    "menu_item": "Banana Walnut Bread",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Tribeca",
    "location": "251 Church St, New York City New York 10013",
    "menu_item": "Crispy Chili Fries",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Tribeca",
    "location": "251 Church St, New York City New York 10013",
    "menu_item": "Brekky Panna Cotta",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Tribeca",
    "location": "251 Church St, New York City New York 10013",
    "menu_item": "Acai Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Tribeca",
    "location": "251 Church St, New York City New York 10013",
    "menu_item": "Zoe'S Market Plate",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Tribeca",
    "location": "251 Church St, New York City New York 10013",
    "menu_item": "Brassicas Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Tribeca",
    "location": "251 Church St, New York City New York 10013",
    "menu_item": "Miso Mushroom Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Two Hands - Tribeca",
    "location": "251 Church St, New York City New York 10013",
    "menu_item": "Salmon Quinoa Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Two Tablespoons",
    "location": "UrbanSpace Vanderbilt Food Hall, East 45th St & Vanderbilt Ave, New York City New York 11201",
    "menu_item": "Sun Circle Macro Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Two Tablespoons",
    "location": "UrbanSpace Vanderbilt Food Hall, East 45th St & Vanderbilt Ave, New York City New York 11201",
    "menu_item": "Urban Garden Macro Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Two Tablespoons",
    "location": "UrbanSpace Vanderbilt Food Hall, East 45th St & Vanderbilt Ave, New York City New York 11201",
    "menu_item": "El Dorardo Medley Macro Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Two Tablespoons",
    "location": "UrbanSpace Vanderbilt Food Hall, East 45th St & Vanderbilt Ave, New York City New York 11201",
    "menu_item": "Greek Salad Bowl",
    "notes": ""
  },
  {
    "restaurant_name": "Two Tablespoons",
    "location": "UrbanSpace Vanderbilt Food Hall, East 45th St & Vanderbilt Ave, New York City New York 11201",
    "menu_item": "Sweet Potato & Pesto Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Two Tablespoons",
    "location": "UrbanSpace Vanderbilt Food Hall, East 45th St & Vanderbilt Ave, New York City New York 11201",
    "menu_item": "Edamame And Ginger Miso Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Two Tablespoons",
    "location": "UrbanSpace Vanderbilt Food Hall, East 45th St & Vanderbilt Ave, New York City New York 11201",
    "menu_item": "Cauliflower, Chickpea, Tahini Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Two Tablespoons",
    "location": "UrbanSpace Vanderbilt Food Hall, East 45th St & Vanderbilt Ave, New York City New York 11201",
    "menu_item": "Beet Veggie Burger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Two Tablespoons",
    "location": "UrbanSpace Vanderbilt Food Hall, East 45th St & Vanderbilt Ave, New York City New York 11201",
    "menu_item": "Scrambled Egg Sandwich",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Ben'S Keto Artisan Pizzas",
    "notes": "Pickup and delivery"
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Gluten Free Plain Cheese Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Gluten Free Meatball Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Gluten Free Sausage Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Gluten Free Pepperoni Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Gluten Free Broccoli Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Gluten Free Black Olives Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Gluten Free Mushroom Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Gluten Free Bacon Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Gluten Free Spinach Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Gluten Free Margarita Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Underground Pizza",
    "location": "3 Hanover Square, New York City New York 10004",
    "menu_item": "Gluten Free Vegan Cheese Pizza",
    "notes": ""
  },
  {
    "restaurant_name": "Union Square Café",
    "location": "101 E 19th St, New York City New York 10003",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Gf Beef Anaheim Pepper",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Gf Pad Thai",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Gf Pepper Steak",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Gf Asian Green Stir Fry",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Gf Firm Tofu & Eggplant W. Garli1C Sauce",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Gf Wok Stir Fry Beef W. Snow Peas",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Gf Wok Stir Fry Chicken W. Broccoli",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Gf Wok Stir Fry Natural Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Gf Crispy Sesame Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Gf General Tso'S Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Edamame W. Sea Salt",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Miso Soup",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Chicken Corn Soup",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Garden Salad",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Pineapple Fried Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tom Yum Fried Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Singapore Noodle",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Taiwanese Mai Fun",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Pad Thai",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Classic Fried Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Spicy Chili Shrimp",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Asian Grilled Salmon",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Thai Green Curry With Veggie",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Thai Basil Double Tressure",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Buddhist Delight",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Chili Cubed Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Wok Seared Jumbo Shrimp",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "General Tso Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Crispy Sesame Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Kung Pao Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Wok Stir Fry Natural Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Wok Stir Fry Chicken W. Broccoli",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tangerine Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "String Bean W. Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Chicken W. Cashew Nut",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Sweet & Sour Chicken",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Beef W. Broccoli",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tangerine Beef",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Pepper Steak",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Beef W. Scallions",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Beef W. Anaheim Pepper",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Gulf White Shrimp W. Snow Peas",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "General Tso Shrimp",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Dry Sauteed String Bean",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Sauteed Broccoli W. Garlic Sauce",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Baby Bok Choy",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Firm Tofu W. Japanese Eggplant",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Ma Po Silken Tofu",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tuna & Salmon Carpaccio",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Mixed Ceviche",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Hamachi Serrano",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tuna Tataki",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Naruto",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Sushi Starter",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Crunchy Trio",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tuna",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Spicy Tuna",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Pepper Tuna",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "White Tuna",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Stripe Bass",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Fluke",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Salmon",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Spicy Salmon",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Mackerel",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Scallop",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Yellowtail",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Salmon Roe",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tobiko",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Shrimp",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "King Crab",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Sea Urchin",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tuna Plate",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Salmon Plate",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Mixed Plate",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Lower Manhattan",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Vesey Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tribeca Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Pink Lady",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tiger Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Ny Giant Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tuna Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Spicy Tuna Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Tuna Avocado Or Cucumber Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "White Tuna Avocado Or Cucumber Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Salmon Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Spicy Salmon Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Salmon Avocado Or Cucumber Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Shrimp Avocado Or Cucumber Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Yellowtail Scallion Or Jalapeno Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Spicy Yellowtail Scallion Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Spicy Scallop Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "King Crab California With Tobiko Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Avocado Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Asparagus Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Cucumber Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Avocado Cucumber Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Vegetable Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Avocado Asparagus Cucumber Roll (Aac)",
    "notes": ""
  },
  {
    "restaurant_name": "Wei West",
    "location": "235 Murray St, New York City New York 10282",
    "menu_item": "Boston Roll",
    "notes": ""
  },
  {
    "restaurant_name": "Wild Ink",
    "location": "5th Floor, 20 Hudson Yards, 500 West 33rd Street, Neiman Marcus Building, ew York, New York 10001",
    "menu_item": "Blistered Shishito Peppers",
    "notes": ""
  },
  {
    "restaurant_name": "Wild Ink",
    "location": "5th Floor, 20 Hudson Yards, 500 West 33rd Street, Neiman Marcus Building, ew York, New York 10001",
    "menu_item": "Steamed Edamame",
    "notes": ""
  },
  {
    "restaurant_name": "Wild Ink",
    "location": "5th Floor, 20 Hudson Yards, 500 West 33rd Street, Neiman Marcus Building, ew York, New York 10001",
    "menu_item": "Roasted Chinese Broccoli",
    "notes": ""
  },
  {
    "restaurant_name": "Wild Ink",
    "location": "5th Floor, 20 Hudson Yards, 500 West 33rd Street, Neiman Marcus Building, ew York, New York 10001",
    "menu_item": "Jasmine Rice",
    "notes": ""
  },
  {
    "restaurant_name": "Wild Ink",
    "location": "5th Floor, 20 Hudson Yards, 500 West 33rd Street, Neiman Marcus Building, ew York, New York 10001",
    "menu_item": "Maine Scallop Crudo",
    "notes": ""
  },
  {
    "restaurant_name": "Wild Ink",
    "location": "5th Floor, 20 Hudson Yards, 500 West 33rd Street, Neiman Marcus Building, ew York, New York 10001",
    "menu_item": "Smoked Hamachi Pastrami",
    "notes": ""
  },
  {
    "restaurant_name": "Wild Ink",
    "location": "5th Floor, 20 Hudson Yards, 500 West 33rd Street, Neiman Marcus Building, ew York, New York 10001",
    "menu_item": "Seared Maine Scallops",
    "notes": ""
  },
  {
    "restaurant_name": "Wild Ink",
    "location": "5th Floor, 20 Hudson Yards, 500 West 33rd Street, Neiman Marcus Building, ew York, New York 10001",
    "menu_item": "Sizzling Rice Pot",
    "notes": ""
  },
  {
    "restaurant_name": "Wild Ink",
    "location": "5th Floor, 20 Hudson Yards, 500 West 33rd Street, Neiman Marcus Building, ew York, New York 10001",
    "menu_item": "Black Angus Strip Loin",
    "notes": ""
  },
  {
    "restaurant_name": "Wild Ink",
    "location": "5th Floor, 20 Hudson Yards, 500 West 33rd Street, Neiman Marcus Building, ew York, New York 10001",
    "menu_item": "Black Angus Bavette Steak & Eggs",
    "notes": ""
  },
  {
    "restaurant_name": "Wild Ink",
    "location": "5th Floor, 20 Hudson Yards, 500 West 33rd Street, Neiman Marcus Building, ew York, New York 10001",
    "menu_item": "Red Sambal Shrimp & Coconut Grits",
    "notes": ""
  },
  {
    "restaurant_name": "Zucchero E Pomodori",
    "location": "1435 2nd Ave #1, New York City New York 10021",
    "menu_item": "Spaghetti Pomodoro",
    "notes": ""
  },
  {
    "restaurant_name": "Zucchero E Pomodori",
    "location": "1435 2nd Ave #1, New York City New York 10021",
    "menu_item": "Spaghetti Con Scampi",
    "notes": ""
  },
  {
    "restaurant_name": "Zucchero E Pomodori",
    "location": "1435 2nd Ave #1, New York City New York 10021",
    "menu_item": "Spaghetti Primavera",
    "notes": ""
  },
  {
    "restaurant_name": "Zucchero E Pomodori",
    "location": "1435 2nd Ave #1, New York City New York 10021",
    "menu_item": "Penne Puttanesca",
    "notes": ""
  },
  {
    "restaurant_name": "Zucchero E Pomodori",
    "location": "1435 2nd Ave #1, New York City New York 10021",
    "menu_item": "Penne Alla Rustica",
    "notes": ""
  },
  {
    "restaurant_name": "Zucchero E Pomodori",
    "location": "1435 2nd Ave #1, New York City New York 10021",
    "menu_item": "Penne Pollo Pazzo",
    "notes": ""
  },
  {
    "restaurant_name": "Zucchero E Pomodori",
    "location": "1435 2nd Ave #1, New York City New York 10021",
    "menu_item": "Penne Ala Vodka",
    "notes": ""
  },
  {
    "restaurant_name": "12 Chairs Café",
    "location": "56 MacDougal St, New York City New York 10012",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Altesi",
    "location": "200 Spring St, New York City New York 10012",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Crispy Fries With Mornay Sauce",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Tenderloin Steak Tartare",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Chopped Chicken Liver",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Wedge Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Kale Caesar",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Green Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Double Cheeseburger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Fried House-Made Bologna",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Branzino Filet",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Roasted Chicken Frites",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Steak Frites",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Chicago Cut Ribeye",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "French Fries",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Thick Cut Bacon",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Charred Broccoli",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Silky Whipped Potatoes",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Griddled Blueberry Muffin",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "3 Greens & Grains Bowl",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Délice De Bourgogne",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Avocado Toast",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Chopped Wedge Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Simple Breakfast",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Omelette",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Chilaquiles",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Steak & Eggs",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Smoked Salmon Scramble On Toast",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Farm Eggs",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "French Fries",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Hash Browns",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Au Cheval Ny",
    "location": "33 Cortlandt Alley, New York City, 10013",
    "menu_item": "Thick Cut Bacon",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Balaboosta",
    "location": "611 Hudson St, New York City New York 10014",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Bar Primi",
    "location": "325 Bowery, New York City New York 10003",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Barbounia",
    "location": "250 Park Ave S, New York City New York 10003",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Bell Book & Candle",
    "location": "141 W 10Th St, New York City New York 10014",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Bistango",
    "location": "145 E 50Th St, New York, Ny 10022",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Bondst",
    "location": "6 Bond St, New York City New York 10012",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Bottino",
    "location": "246 10Th Ave, New York City New York 10001",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Butter",
    "location": "70 W 45Th St, New York City New York 10036",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Cafe Carlyle",
    "location": "35 E 76Th St, New York City New York 10075",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Cafe Mogador",
    "location": "101 St Marks Pl, New York City New York 10009",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Cipriani",
    "location": "376 W Broadway, New York City New York 10012",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Del Frisco’S Grille",
    "location": "50 Rockefeller Plaza, New York City New York 10020",
    "menu_item": "Roasted Tomato & Pepperoni Flatbread",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Del Frisco’S Grille",
    "location": "50 Rockefeller Plaza, New York City New York 10020",
    "menu_item": "Flatbread Primavera",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Docks Oyster Bar",
    "location": "633 3Rd Ave, New York City New York 10017",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Montanara Genovese",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Montanara Truffle",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Montanara",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Pizza Pianeta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Via Tribunali",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Calzone Fritto",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Prosciutto & Arugula",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Bianca With Arugula",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Sorrentina",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Quattro Formaggi",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Salsiccia & Friarielli",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Provola",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Mushrooms",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Italian Cooked Ham",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Prosciutto & Mushrooms",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Ricotta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Vegetariana",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Vegana",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Padrino",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Capricciosa",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Kesté",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Puttanesca",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Hot Sopressata",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Napoli",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Salami",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Sausage",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Prosciutto",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Sausage & Mushrooms",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Marinara",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Gio'S Marinara",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Pomodoro",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Regina Margherita",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Margherita With Artichokes",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Pistacchio & Salsiccia",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Noci & Zucchini",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Pizza Del Re",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Macellaio (The Butcher)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Vesuvio (Stuffed Pizza)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Truffle Burrata Pizza",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio",
    "location": "309 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Burrata Roberto",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio By Starita",
    "location": "309 W 50Th St, New York City New York 10019",
    "menu_item": "Fraticelli",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio By Starita",
    "location": "309 W 50Th St, New York City New York 10019",
    "menu_item": "Montanarine",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio By Starita",
    "location": "309 W 50Th St, New York City New York 10019",
    "menu_item": "Montanarine Genovesi",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio By Starita",
    "location": "309 W 50Th St, New York City New York 10019",
    "menu_item": "Fritto Misto",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Don Antonio By Starita",
    "location": "309 W 50Th St, New York City New York 10019",
    "menu_item": "Pizza",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Dos Caminos",
    "location": "675 Hudson St, New York City New York 10014",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Etcetera Etcetera",
    "location": "352 West 44Th Street, New York, Ny 10036",
    "menu_item": "Gluten Free Tagliatelle",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Etcetera Etcetera",
    "location": "352 West 44Th Street, New York, Ny 10036",
    "menu_item": "Gluten Free Gnocchi",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Etcetera Etcetera",
    "location": "352 West 44Th Street, New York, Ny 10036",
    "menu_item": "Gluten Free Ravioli",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Etcetera Etcetera",
    "location": "352 West 44Th Street, New York, Ny 10036",
    "menu_item": "Gf Pasta Available Upon Request",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Family Meal at Blue Hill",
    "location": "75 Washington Pl, New York City New York 10011",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Hell'S Kitchen",
    "location": "450 10Th Ave, New York, Ny 10018",
    "menu_item": "Sandwiches",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Mac & Cheese Bites (Gluten Free)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Hand Cut Pastrami On Rye",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Grilled Cheese",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Homemade Falafel",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Grilled Chicken Swisswich",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Tuna Melt",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Buttermilk Fried Chicken Sandwich",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Classic B.L.A.T",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Friedman’S Burger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Turkey Burger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Berry Compote Cheesecake",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Warm Blueberry Pie",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Chocolate Brownie",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Chocolate Chip Cookies",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Friedman'S Herald Square",
    "location": "132 W 31St St, New York, Ny 10001",
    "menu_item": "Gf Chocolate Pudding",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Hunt And Fish Club",
    "location": "125 W 44Th St, New York City New York 10036",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Il Bastardo",
    "location": "191 7Th Ave, New York City New York 10011",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Jack’S Wife Freda",
    "location": "224 Lafayette St, New York City New York 10012",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Joseph Leonard",
    "location": "170 Waverly Pl, New York City New York 10014",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Koi",
    "location": "40 W 40Th St, New York City New York 10018",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "L’Artusi",
    "location": "228 W 10Th St, New York City New York 10014",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "La Esquina",
    "location": "114 Kenmare St, New York City New York 10012",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "La Pecora Bianca",
    "location": "1133 Broadway, New York City New York 10010",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "La Pulperia",
    "location": "371 West 46Th St, New York City New York 10036",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lido",
    "location": "2168 Frederick Douglass Blvd, New York City New York 10026",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Crispy Sesame",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free General Tso'S",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Kung Pao",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Chicken With Vegetable Choice",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Thai Basil Chicken Special",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Tofu With Mixed Veegtables",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Pad Thai Noodles Special",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Singapore Noodles Special",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Edamame",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Thai Chicken Lettuce Wrap",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Oritental Pork Dumpling",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Rock Shrimp Tepura",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Boneless Bbq Ribs",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Bbq Spare Ribs",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Thai Spring Roll",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Tofu Spinach Egg Drop Soup",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Tom Yum Seafood Soup",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Corn Egg Drop Soup",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Garden Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Grilled Chicken Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Spicy Tangerine Beef",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Massaman Curry",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Mongolian Beef",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Thai Basil",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Sweet Chili Sambal Chicken Entree",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Tofu With Vegetables Sizzling Platter",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Chicken Sizzling Platter",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Beef Sizzling Platter",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Shrimp Sizzling Platter",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Triple Delight Sizzling Platter",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Shrip With Vegetable",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Shrimp With Lobster Sauce",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Crispy Sesame Jumbo Shrimp",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Shrimp With Honey Walnuts",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Sauteed Chicken With Vegetable",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Kung Pao",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Pom Teriyaki Grilled Chicken",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Crispy General Tso'S Chicken",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Sauteed Beef With Vegetable",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Pepper Steak",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Tangerine Beef",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Broccoli, String Beans And Snow Peas",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Dry Sauteed String Beans",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Lo Mein Noodles",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Singapore Noodles",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Oriental Noodles",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Pad Thai Noodles",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Classic Fried Rice",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free House Special Fried Rice",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Pineapple Fried Rice",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Bhutan Fried Rice",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Black Angel Roll",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Hard Rock Roll",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "In Spicy Garlic Sauce. Served With Rice And Side. Spicy.",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Tuna Lover Roll",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Chocolate Cake",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Lilli And Loo",
    "location": "1026 3Rd Ave, New York, Ny 10065",
    "menu_item": "Gluten Free Peacan Pie",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Locanda Verde",
    "location": "377 Greenwich St, New York City New York 10013",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Loco Coco",
    "location": "835 Lexington Ave, New York City New York 10065",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Los Tacos No. 1",
    "location": "75 9Th Ave, New York City New York 10011",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Mad Dog & Beans",
    "location": "83 Pearl St, New York City New York 10004",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Maialino",
    "location": "Gramercy Park Hotel, 2 Lexington Ave, New York City New York 10010",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Market Table",
    "location": "54 Carmine St, New York City New York 10014",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Melt Shop",
    "location": "111 Fulton Street, New York City New York 10038",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Mexicue",
    "location": "1440 Broadway, New York City New York 10036",
    "menu_item": "Tacos",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Mochidoki",
    "location": "176 Spring St, New York City New York 10012",
    "menu_item": "Mostly Gluten Free except for RASPBERRY CRUNCH and PUMPKIN & COOKIES",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Crispy Potato Pancakes",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Maine Lobster Cocktail",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "King Crab",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Shrimp Cocktail",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Royale Cut Smoked Salmon",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Smoked Whitefish Caesar",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Wedge Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Niçoise Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Butter Lettuce Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Truffle Tagliatelle",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Vodka Rigatoni",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Linguine With Clams",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Lobster Spaghetti",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Spicy Shrimp",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Ribeye Steak Frites",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "10 Oz Filet Mignon - Petite Duchess Cut",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "14Oz Dry-Aged New York Strip Steak",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "22 Oz Dry-Aged Bone-In Ribeye",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "16Oz Dry-Aged New York Strip Steak",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "32Oz Dry-Aged Porterhouse",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Double Cheeseburger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Truffle Burger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Double Cut Berkshire Pork Chop",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Lamb Chops .",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Giant Prawn Scampi",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Miso Glazed Black Cod .",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Honey Peppered Ora King Salmon",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Roasted Chicken",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Pommes Frites",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Buttery Mashed Potatoes",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Steamed Broccoli",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Thick Cut Maple Bacon",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Creamed Sweet Corn",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Monkey Bar",
    "location": "60 E 54th St., New York, NY 10022",
    "menu_item": "Button Mushrooms",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Murray’S Cheese",
    "location": "254 Bleecker St, New York City New York 10014",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Nobu",
    "location": "40 W 57Th St, New York City New York 10019",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Noreetuh",
    "location": "128 1St Ave, New York City New York 10009",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Oaxaca Taqueria",
    "location": "48 Greenwich Ave, New York City New York 10011",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Otto’S Tacos",
    "location": "141 2Nd Ave, New York City New York 10003",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Pastai",
    "location": "186 9Th Ave, New York City New York 10011",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Patacon Pisao",
    "location": "139 Essex St, New York City New York 10002",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Pera",
    "location": "54 Thompson St, New York City New York 10012",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Perry Street",
    "location": "190 Ave B, New York City New York 10009",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Pershing Square",
    "location": "90 E 42Nd St, New York City New York 10017",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Petaluma",
    "location": "1356 1St Avenue, New York City New York 10021",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "PHD Terrace At Dream Hotel",
    "location": "Dream Midtown, 210 W 55Th St, New York City New York 10019",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Pomodoro Pizza",
    "location": "51 Spring St, New York City New York 10012",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Pure Green",
    "location": "60 E 8Th St, New York City New York 10003",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Quality Italian",
    "location": "57 W 57Th St, New York City New York 10019",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Rezdora",
    "location": "27 East 20th street, NYC, NY 10003",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf All' Isolana In \"Pentolino",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Spinaci E Asiago Dop, Ricetta Di Mamma Rosetta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Zucca E Taleggio",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Funghi Misti",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Pollo, Bacon E Pisellini",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Cacio E Pepe",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Limone E Gamberi",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf All'Anatra",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Amarone E Monte Veronese",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Radicchio, Gorgonzola E Noci",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Alla Pescatora Con Riso Nero Beppino",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Al Ragù Di Cinghiale",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Alla Crema Di Tartufo",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf All'Anatra",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Amarone E Monte Veronese",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Radicchio, Gorgonzola E Noci",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Alla Pescatora Con Riso Nero Beppino",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Al Ragù Di Cinghiale",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Risotteria Melotti",
    "location": "309 E 5Th St, New York City New York 10003",
    "menu_item": "Gf Alla Crema Di Tartufo",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Rosemary’S",
    "location": "18 Greenwich Ave, New York City New York 10011",
    "menu_item": "Pasta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Rosie’S",
    "location": "29 E Second St, New York City New York 10003",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Ruby’S Café",
    "location": "219 Mulberry St # A, New York City New York 10012",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Russ & Daughters",
    "location": "127 Orchard St, New York City New York 10002",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Sant Ambroeus",
    "location": "265 Lafayette St, New York City New York 10012",
    "menu_item": "Pasta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Sarabeth’S",
    "location": "339 Greenwich St, New York City New York 10013",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf The Schnipper Burger Special",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Hamburger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Cheeseburger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Bacon Cheeseburger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf The Schnipp",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf The Big Schnipp",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Schnipper'S Classic",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf The Old Fashioned",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf The (Not So) Impossible Burger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf The Turkey Burger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf The Veggie Boy",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf All Salads",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Fresh From The Market",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Mama'S Mediterranean",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf South By Southwest",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf The Proper Cobb",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Caesar #2",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Fresh Beet And Goat Cheese",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf A Great Grain Bowl",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf All Sandwiches*",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Bros. Done Right Club",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Not Just Any Buffalo Chicken",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Chicken Filet On A Really Good Seeded Roll",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Grilled 4 Cheese",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf A Lotta Bacon Blt",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Sweet Heat Crispy Chicken",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Grilled Chicken And Brie",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Schnipper'S Crispy Chicken",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Fresh Veggie And Goat Cheese",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Schnipper'S Tuna Melt",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Chicken Fingers & Fries",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Our Famous Recipe",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Chicken Fingers (Without Fries)",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf All Hot Dogs",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Simple Grilled Dog",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Cheese Dog",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Sloppy Dog",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Jon’S Famous Sloppy Joe Sandwich**",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf House Fries",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Cheese Fries",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Sweet Potato Fries",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Schnipper’S Slaw",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Charred Broccoli",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Baby Arugula Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Grilled Fresh Corn Esquites",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Milk Shakes",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Schnipper'S",
    "location": "620 8Th Ave, New York, Ny 10018",
    "menu_item": "Gf Every Float",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Serafina",
    "location": "7 Ninth Ave, New York City New York 10014",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Skinny Pizza",
    "location": "225 Liberty Street, New York City New York 10281",
    "menu_item": "Pizza",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Snowdays Shavery",
    "location": "241 E 10th St, New York City New York 10003",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "T-Swirl Crepe",
    "location": "247 E. 14th St, New York City New York 10003",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "The Counter Burger",
    "location": "7 Times Square, New York City New York 10036",
    "menu_item": "Create Your Own Burger",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "The Elk",
    "location": "128 Charles St, New York City New York 10014",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "The Grey Dog",
    "location": "242 W 16th St, New York City New York 10011",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "The Liberty",
    "location": "29 W 35th St, New York City New York 10001",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Trio De Guacamole",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Traditional/Mild Guacamole",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Furtas/Medium Guacamole",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Rojo/Spicy Guacamole",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Ceviche Peruano",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Ceviche Atun",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Ceviche Toro Taquitos",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Sopa De Tortilla",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Ensalada De Jicama",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Caesar Salad",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Ensalada De Langosta",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Callos De Hacha",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Hongos & Nopales Tacos",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Pollo Tacos",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Langosta Tacos",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Chapulines Tacos",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf De Lechon Tacos",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Suadero Tacos",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Carne Asada Taco",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Costilla & Tuetano Tacos",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Enchiladas Borrachas",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Bacalao Trufado",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Camarones Toloache",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Tumbada",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Lechon Prensado",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Costilla De Res",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Rib Eye Cocina",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Paella De Quinoa",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Sweet Plantains",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Sautéed Spicy Kale",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Rice & Black Beans",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Corn On The Cob",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Toloache",
    "location": "251 W 50Th St, New York, Ny 10019",
    "menu_item": "Gf Chips & Salsa",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Union Square Café",
    "location": "101 E 19th St, New York City New York 10003",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Upland",
    "location": "345 Park Ave S, New York City New York 10010",
    "menu_item": "",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Vito'S Slices And Ices",
    "location": "464 9Th Ave, New York, Ny 10018",
    "menu_item": "Gluten Free Grandma",
    "notes": "gf option available"
  },
  {
    "restaurant_name": "Vito'S Slices And Ices",
    "location": "464 9Th Ave, New York, Ny 10018",
    "menu_item": "Gluten Free Vegan Grandma",
    "notes": "gf option available"
  }
]);
};
