export const initialCategories = [
  {
    _id: 'cat_1',
    name: 'Culinary Starters',
    slug: 'culinary-starters',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
    description: 'Exquisite amuse-bouche and handcrafted appetizers to awaken your palate.',
    itemCount: 5
  },
  {
    _id: 'cat_2',
    name: 'Prime Steaks',
    slug: 'prime-steaks',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    description: 'Dry-aged A5 Wagyu and prime cuts seared to perfection over mesquite wood.',
    itemCount: 5
  },
  {
    _id: 'cat_3',
    name: 'Artisan Pasta & Seafood',
    slug: 'artisan-pasta-seafood',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    description: 'Fresh hand-rolled pastas and wild-caught Mediterranean ocean treasures.',
    itemCount: 5
  },
  {
    _id: 'cat_4',
    name: 'Chef Specials',
    slug: 'chef-specials',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    description: 'Seasonal tasting menu masterworks designed exclusively by Chef Lucian Vance.',
    itemCount: 5
  },
  {
    _id: 'cat_5',
    name: 'Signature Desserts',
    slug: 'signature-desserts',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    description: ' decadent confections, gold-leaf chocolate domes, and soufflés.',
    itemCount: 5
  },
  {
    _id: 'cat_6',
    name: 'Sommelier Cellar',
    slug: 'sommelier-cellar',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    description: 'Rare vintages, Grand Cru Champagne, and artisanal craft cocktails.',
    itemCount: 5
  }
];

export const initialMenuItems = [
  // Culinary Starters (1-5)
  {
    _id: 'item_1',
    title: 'Seared Black Truffle Foie Gras',
    description: 'Pan-seared duck liver served on brioche toast with caramelized fig compote and aged balsamic reduction.',
    price: 38.00,
    category: 'Culinary Starters',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    isSpicy: false,
    isChefSpecial: true,
    calories: 420,
    prepTime: '15 mins',
    ingredients: ['Duck Foie Gras', 'Black Truffle', 'Artisan Brioche', 'Mission Figs', '25-Yr Balsamic'],
    rating: 4.9
  },
  {
    _id: 'item_2',
    title: 'Pacific Bluefin Tuna Tartare',
    description: 'Sustainably harvested tuna tossed in sesame-yuzu dressing, avocado mouse, and topped with Osetra caviar.',
    price: 34.00,
    category: 'Culinary Starters',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 310,
    prepTime: '12 mins',
    ingredients: ['Bluefin Tuna', 'Yuzu Emulsion', 'Haas Avocado', 'Royal Osetra Caviar', 'Taro Chips'],
    rating: 4.8
  },
  {
    _id: 'item_3',
    title: 'Oysters Rockefeller Royale',
    description: 'Half-dozen Kumamoto oysters baked with wilted spinach, shallots, Pernod liqueur, and golden herb crust.',
    price: 36.00,
    category: 'Culinary Starters',
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 280,
    prepTime: '15 mins',
    ingredients: ['Kumamoto Oysters', 'Organic Spinach', 'Pernod Liqueur', 'Panko Crust', 'Lemon Butter'],
    rating: 4.9
  },
  {
    _id: 'item_4',
    title: 'Charred Spanish Octopus',
    description: 'Wood-grilled octopus tentacle over smoked paprika potato puree, saffron aioli, and caperberry emulsion.',
    price: 32.00,
    category: 'Culinary Starters',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isSpicy: true,
    isChefSpecial: false,
    calories: 340,
    prepTime: '18 mins',
    ingredients: ['Galician Octopus', 'Yukon Gold Potato', 'Smoked Paprika', 'Saffron Aioli', 'Crispy Capers'],
    rating: 4.7
  },
  {
    _id: 'item_5',
    title: 'Wild Mushroom Cappuccino Soup',
    description: 'Velvety porcini and chanterelle mushroom broth topped with warm parmesan foam and white truffle oil spray.',
    price: 24.00,
    category: 'Culinary Starters',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 220,
    prepTime: '10 mins',
    ingredients: ['Porcini Mushrooms', 'Chanterelles', 'Parmigiano-Reggiano Foam', 'White Truffle Oil'],
    rating: 4.8
  },

  // Prime Steaks (6-10)
  {
    _id: 'item_6',
    title: 'Miyazaki A5 Wagyu Striploin (8oz)',
    description: 'Authentic Japanese A5 Wagyu grilled over Japanese Binchotan charcoal, served with smoked sea salt flakes and wasabi butter.',
    price: 165.00,
    category: 'Prime Steaks',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    isChefSpecial: true,
    calories: 680,
    prepTime: '25 mins',
    ingredients: ['Miyazaki A5 Wagyu', 'Binchotan Charcoal', 'Fleur de Sel', 'Fresh Wasabi', 'Bone Marrow Jus'],
    rating: 5.0
  },
  {
    _id: 'item_7',
    title: '45-Day Dry-Aged Tomahawk Ribeye (32oz)',
    description: 'Center-cut prime ribeye dry-aged in our Himalayan salt cellar, carved tableside with roasted garlic heads and rosemary reduction.',
    price: 145.00,
    category: 'Prime Steaks',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    isChefSpecial: false,
    calories: 1250,
    prepTime: '30 mins',
    ingredients: ['Dry-Aged Beef', 'Himalayan Salt', 'Elephant Garlic', 'Fresh Rosemary', 'Red Wine Reduction'],
    rating: 4.9
  },
  {
    _id: 'item_8',
    title: 'Filet Mignon Rossini (10oz)',
    description: 'USDA Prime tenderloin topped with seared foie gras, sliced black truffles, and Madeira wine glaze.',
    price: 95.00,
    category: 'Prime Steaks',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: true,
    calories: 790,
    prepTime: '22 mins',
    ingredients: ['USDA Prime Tenderloin', 'Hudson Valley Foie Gras', 'Perigord Truffle', 'Madeira Wine Jus'],
    rating: 4.9
  },
  {
    _id: 'item_9',
    title: 'Colorado Lamb Rack Persillade',
    description: 'Herb-crusted domestic rack of lamb, fondant potatoes, heirloom baby carrots, and mint infused lamb jus.',
    price: 68.00,
    category: 'Prime Steaks',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 620,
    prepTime: '25 mins',
    ingredients: ['Colorado Lamb', 'Herb Persillade Crust', 'Fondant Potato', 'Mint Reduction'],
    rating: 4.8
  },
  {
    _id: 'item_10',
    title: 'Prime Bone-in Kansas City Strip (16oz)',
    description: 'Charbroiled bone-in strip steak brushed with smoked marrow butter and served with wild mushroom ragout.',
    price: 78.00,
    category: 'Prime Steaks',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 750,
    prepTime: '20 mins',
    ingredients: ['Bone-in KC Strip', 'Marrow Butter', 'Wild Mushrooms', 'Sea Salt Flakes'],
    rating: 4.8
  },

  // Artisan Pasta & Seafood (11-15)
  {
    _id: 'item_11',
    title: 'Handcrafted Truffle Tagliolini',
    description: 'House-made egg tagliolini tossed in cultured Normandy butter, 36-month Parmigiano, and shaved tableside black truffle.',
    price: 52.00,
    category: 'Artisan Pasta & Seafood',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    isChefSpecial: true,
    calories: 550,
    prepTime: '15 mins',
    ingredients: ['Handmade Tagliolini', 'Normandy Butter', '36-Mo Parmigiano', 'Fresh Black Truffle'],
    rating: 4.9
  },
  {
    _id: 'item_12',
    title: 'Chilean Sea Bass En Papillote',
    description: 'Oven-steamed wild sea bass with baby leeks, saffron broth, cherry tomatoes, and braised fennel.',
    price: 64.00,
    category: 'Artisan Pasta & Seafood',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 480,
    prepTime: '20 mins',
    ingredients: ['Wild Chilean Sea Bass', 'Bouillabaisse Saffron Stock', 'Baby Leeks', 'Confit Tomatoes'],
    rating: 4.9
  },
  {
    _id: 'item_13',
    title: 'Maine Lobster Thermidor Fettuccine',
    description: 'Poached butter lobster tail in rich cognac cream sauce, tarragon, gratinéed with gruyère over spinach fettuccine.',
    price: 72.00,
    category: 'Artisan Pasta & Seafood',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    isChefSpecial: false,
    calories: 710,
    prepTime: '22 mins',
    ingredients: ['Whole Maine Lobster Tail', 'Cognac Cream', 'Swiss Gruyère', 'Spinach Fettuccine'],
    rating: 5.0
  },
  {
    _id: 'item_14',
    title: 'Seared Diver Scallops Risotto',
    description: 'Jumbo Georges Bank sea scallops over saffron carnaroli risotto, crispy prosciutto, and green pea emulsion.',
    price: 58.00,
    category: 'Artisan Pasta & Seafood',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 520,
    prepTime: '18 mins',
    ingredients: ['Georges Bank Scallops', 'Acquerello Carnaroli Rice', 'Saffron Strand', 'Prosciutto Chips'],
    rating: 4.8
  },
  {
    _id: 'item_15',
    title: 'Wild Squid Ink Agnolotti',
    description: 'Black squid ink pasta filled with King Crab and ricotta, served in lemongrass shellfish bisqued broth.',
    price: 49.00,
    category: 'Artisan Pasta & Seafood',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: true,
    calories: 460,
    prepTime: '20 mins',
    ingredients: ['Squid Ink Dough', 'Alaskan King Crab', 'Lemongrass Bisque', 'Micro Chervil'],
    rating: 4.9
  },

  // Chef Specials (16-20)
  {
    _id: 'item_16',
    title: 'Grand Golden Duck Breast & Confit',
    description: 'Crispy skin Pekin duck breast with lavender honey glaze, leg confit croquette, and spiced cherry gastrique.',
    price: 62.00,
    category: 'Chef Specials',
    image: 'https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    isChefSpecial: true,
    calories: 640,
    prepTime: '25 mins',
    ingredients: ['Pekin Duck Breast', 'Lavender Honey', 'Confit Croquette', 'Tart Cherry Gastrique'],
    rating: 4.9
  },
  {
    _id: 'item_17',
    title: 'Slow-Braised Veal Osso Buco',
    description: 'Cross-cut veal shank braised 12 hours in Barolo wine, served over creamy saffron polenta and citrus gremolata.',
    price: 66.00,
    category: 'Chef Specials',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: true,
    calories: 820,
    prepTime: '20 mins',
    ingredients: ['Veal Shank', 'Barolo Red Wine', 'Saffron Polenta', 'Meyer Lemon Gremolata'],
    rating: 4.8
  },
  {
    _id: 'item_18',
    title: 'Wood-Roasted Whole Mediterranean Seabream',
    description: 'Filleted tableside, roasted with Sicilian lemon, wild capers, olive oil, and rosemary sea salt.',
    price: 59.00,
    category: 'Chef Specials',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 410,
    prepTime: '22 mins',
    ingredients: ['Whole Orata/Seabream', 'Sicilian Extra Virgin Olive Oil', 'Wild Pantelleria Capers'],
    rating: 4.7
  },
  {
    _id: 'item_19',
    title: '24K Gold Leaf Venison Loin',
    description: 'Medallions of New Zealand venison wrapped in 24K edible gold leaf, served with blackberry juniper reduction.',
    price: 88.00,
    category: 'Chef Specials',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    isChefSpecial: true,
    calories: 590,
    prepTime: '25 mins',
    ingredients: ['NZ Venison Loin', '24K Gold Leaf', 'Wild Blackberry', 'Juniper Berry Reduction'],
    rating: 5.0
  },
  {
    _id: 'item_20',
    title: 'Heirloom Roasted Vegetable Tower',
    description: 'Layers of grilled eggplant, portobello mushroom, zesty red pepper coulis, cashew ricotta, and micro basil.',
    price: 36.00,
    category: 'Chef Specials',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isVegan: true,
    isGlutenFree: true,
    isChefSpecial: false,
    calories: 320,
    prepTime: '15 mins',
    ingredients: ['Globe Eggplant', 'Portobello Mushroom', 'Roasted Bell Pepper Coulis', 'Cashew Cream Cheese'],
    rating: 4.8
  },

  // Signature Desserts (21-25)
  {
    _id: 'item_21',
    title: 'The Grand 24K Gold Chocolate Dome',
    description: 'Valrhona dark chocolate sphere containing hazelnut praline mousse and passionfruit gel, melted tableside with hot spiced ganache.',
    price: 32.00,
    category: 'Signature Desserts',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    isChefSpecial: true,
    calories: 580,
    prepTime: '10 mins',
    ingredients: ['Valrhona 70% Chocolate', 'Piedmont Hazelnut Praline', 'Passionfruit Core', 'Edible Gold Shimmer'],
    rating: 5.0
  },
  {
    _id: 'item_22',
    title: 'Madagascar Vanilla Bean Grand Soufflé',
    description: 'Made-to-order soufflé with Tahitian vanilla sauce and house-made artisan pistacchio gelato.',
    price: 26.00,
    category: 'Signature Desserts',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 410,
    prepTime: '20 mins',
    ingredients: ['Tahitian Vanilla Pods', 'Pastry Cream', 'Bronte Pistacchio Ice Cream'],
    rating: 4.9
  },
  {
    _id: 'item_23',
    title: 'Deconstructed Limoncello Tart',
    description: 'Amalfi coast lemon curd, toasted Italian meringue peaks, graham soil, and candied lemon peel chips.',
    price: 22.00,
    category: 'Signature Desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 360,
    prepTime: '10 mins',
    ingredients: ['Amalfi Lemon Juice', 'Egg Yolk Curd', 'Italian Meringue', 'Butter Sable Crumb'],
    rating: 4.8
  },
  {
    _id: 'item_24',
    title: 'Smoked Smoked Bourbon Tiramisu',
    description: 'Espresso-soaked savoiardi biscuits infused with Woodford Reserve bourbon, layered with mascarpone cream.',
    price: 24.00,
    category: 'Signature Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 450,
    prepTime: '10 mins',
    ingredients: ['Italian Ladyfingers', 'Single-Origin Espresso', 'Woodford Reserve Bourbon', 'Mascarpone Cheese'],
    rating: 4.9
  },
  {
    _id: 'item_25',
    title: 'Artisan Berry Pavilion Mille-Feuille',
    description: 'Caramelized puff pastry layers, vanilla bean pastry cream, fresh organic raspberries, and rosewater glaze.',
    price: 25.00,
    category: 'Signature Desserts',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 390,
    prepTime: '12 mins',
    ingredients: ['Butter Puff Pastry', 'Chantilly Cream', 'Wild Raspberries', 'Rose Essence'],
    rating: 4.8
  },

  // Sommelier Cellar (26-30)
  {
    _id: 'item_26',
    title: 'Dom Pérignon Vintage Champagne (2012)',
    description: 'Bright citrus notes, toasted brioche finish, and ultra-fine mousse. Bottle 750ml.',
    price: 380.00,
    category: 'Sommelier Cellar',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    isChefSpecial: false,
    calories: 120,
    prepTime: '5 mins',
    ingredients: ['Pinot Noir', 'Chardonnay', 'Épernay France'],
    rating: 5.0
  },
  {
    _id: 'item_27',
    title: 'Château Margaux Premier Grand Cru (2015)',
    description: 'Elegantly structured Bordeaux red with velvety tannins, violet aromas, and blackcurrant notes. Bottle 750ml.',
    price: 890.00,
    category: 'Sommelier Cellar',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
    isFeatured: true,
    isChefSpecial: true,
    calories: 130,
    prepTime: '5 mins',
    ingredients: ['Cabernet Sauvignon', 'Merlot', 'Petit Verdot', 'Margaux AOC'],
    rating: 5.0
  },
  {
    _id: 'item_28',
    title: 'Opus One Napa Valley Red Blend (2018)',
    description: 'Harmonious blend of Cabernet Sauvignon and Merlot with notes of dark plum, cocoa, and espresso. Bottle 750ml.',
    price: 520.00,
    category: 'Sommelier Cellar',
    image: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 135,
    prepTime: '5 mins',
    ingredients: ['Cabernet Sauvignon', 'Oakville Napa Valley'],
    rating: 4.9
  },
  {
    _id: 'item_29',
    title: 'Smoked Gold Reserve Old Fashioned',
    description: 'WhistlePig 12yr Rye Whiskey, Angostura bitters, raw cane syrup, smoked with cherrywood smoke inside crystal snifter.',
    price: 32.00,
    category: 'Sommelier Cellar',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 190,
    prepTime: '8 mins',
    ingredients: ['WhistlePig 12yr Rye', 'House Bitters', 'Cherrywood Smoke', 'Orange Peel Spray'],
    rating: 4.9
  },
  {
    _id: 'item_30',
    title: 'Empress Royal Yuzu Gin Fizz',
    description: 'Empress 1908 Indigo Gin, organic yuzu citrus, sparkling elderflower, and edible gold dust flourish.',
    price: 28.00,
    category: 'Sommelier Cellar',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800',
    isFeatured: false,
    isChefSpecial: false,
    calories: 160,
    prepTime: '6 mins',
    ingredients: ['Empress 1908 Gin', 'Yuzu Extract', 'Fever-Tree Elderflower', 'Gold Shimmer'],
    rating: 4.8
  }
];

export const initialProducts = [
  {
    _id: 'prod_1',
    name: 'Grand Reserve Extra Virgin Olive Oil (500ml)',
    description: 'First cold-pressed single estate EVOO from 200-year-old olive groves in Tuscany.',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800',
    category: 'Gourmet Pantry',
    stock: 45,
    rating: 4.9,
    weight: '500ml'
  },
  {
    _id: 'prod_2',
    name: '25-Year Traditional Aged Balsamic Vinegar of Modena',
    description: 'Thick, syrupy aged balsamic aged in chestnut and cherry barrels.',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
    category: 'Gourmet Pantry',
    stock: 20,
    rating: 5.0,
    weight: '100ml'
  },
  {
    _id: 'prod_3',
    name: 'Perigord Black Truffle Butter Salt Set',
    description: 'French sea salt infused with active black summer truffle shavings and cultured butter powder.',
    price: 36.00,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    category: 'Gourmet Pantry',
    stock: 60,
    rating: 4.8,
    weight: '200g'
  },
  {
    _id: 'prod_4',
    name: 'Signature Grand Chef Damascus Kitchen Knife',
    description: '67-layer Japanese Damascus steel Chef knife with custom ergonomic rosewood handle.',
    price: 240.00,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800',
    category: 'Chef Merchandise',
    stock: 15,
    rating: 5.0,
    weight: '280g'
  },
  {
    _id: 'prod_5',
    name: 'Handblown Crystal Wine Glasses Set of 4',
    description: 'Ultra-thin titanium crystal glasses engineered specifically for Cabernet & Bordeaux vintages.',
    price: 135.00,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    category: 'Chef Merchandise',
    stock: 30,
    rating: 4.9,
    weight: '800g'
  },
  {
    _id: 'prod_6',
    name: 'Valrhona Single Origin Chocolate Collection',
    description: 'Box of 24 handcrafted pralines featuring 70% Dark Grand Cru cocoa beans.',
    price: 52.00,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    category: 'Artisan Sweets',
    stock: 40,
    rating: 4.8,
    weight: '350g'
  },
  {
    _id: 'prod_7',
    name: 'Grand Signature Organic Espresso Coffee Beans',
    description: 'Whole bean dark roast blend imported directly from highland shade-grown estates in Colombia.',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    category: 'Gourmet Pantry',
    stock: 80,
    rating: 4.7,
    weight: '1kg'
  },
  {
    _id: 'prod_8',
    name: 'Organic Saffron Threads from Kashmir (5g)',
    description: 'Grade A1 pure Mogra saffron strands with deep crimson hue and intense aroma.',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    category: 'Gourmet Pantry',
    stock: 25,
    rating: 5.0,
    weight: '5g'
  },
  {
    _id: 'prod_9',
    name: 'Gold Emblazoned Leather Menu Notebook',
    description: 'Handcrafted genuine calfskin leather journal used by our executive sommelier.',
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    category: 'Chef Merchandise',
    stock: 50,
    rating: 4.8,
    weight: '400g'
  },
  {
    _id: 'prod_10',
    name: 'Grand Restaurant Embroidered Linen Apron',
    description: 'Heavyweight organic linen apron with adjustable brass buckles and leather strap details.',
    price: 78.00,
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
    category: 'Chef Merchandise',
    stock: 35,
    rating: 4.9,
    weight: '450g'
  },
  {
    _id: 'prod_11',
    name: 'Artisan Wildflower Raw Honey Jar',
    description: 'Unfiltered organic honey gathered from alpine wildflower meadows in the Swiss Alps.',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&q=80&w=800',
    category: 'Gourmet Pantry',
    stock: 70,
    rating: 4.8,
    weight: '450g'
  },
  {
    _id: 'prod_12',
    name: 'Grand Sommelier Brass Bottle Opener & Aerator',
    description: 'Weighted solid brass wine key with dual foil cutter and micro-aerator nozzle.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    category: 'Chef Merchandise',
    stock: 45,
    rating: 4.9,
    weight: '220g'
  }
];

export const initialBlogs = [
  {
    _id: 'blog_1',
    title: 'Mastering the Art of Dry-Aging Wagyu Steaks',
    slug: 'mastering-dry-aging-wagyu',
    excerpt: 'Explore how temperature, humidity, and Himalayan salt walls transform fine beef cuts into culinary masterpieces.',
    content: `Dry-aging is more than a culinary technique; it is a meticulous science where time and environment work in harmony to elevate beef to its absolute pinnacle of flavor and tenderness.

At Grand Restaurant, our dedicated Himalayan Salt Cellar maintains a precise temperature of 34°F (1.1°C) and a relative humidity of 80-85%. Over a span of 45 to 60 days, natural enzymes break down connective muscle fibers while moisture gently evaporates, concentrating the deep umami notes of A5 Miyazaki Wagyu and Prime Angus Ribeyes.

The inclusion of Himalayan pink salt blocks acts as a natural air purifier, releasing negative ions that prevent undesirable bacteria while imparting a subtle mineral complexity to the crust.`,
    author: 'Chef Lucian Vance',
    category: 'Culinary Art',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read',
    publishedAt: '2026-08-10T10:00:00.000Z'
  },
  {
    _id: 'blog_2',
    title: 'Sommelier Secrets: Pairing Grand Cru Champagne with Seafood',
    slug: 'sommelier-secrets-champagne-pairing',
    excerpt: 'Discover why vintage Champagne elevates oysters, bluefin tuna, and caviar to breathtaking new heights.',
    content: `When guests ask for the ultimate beverage pair with raw seafood, my answer is instantaneous: a mature, vintage Blanc de Blancs Champagne.

The crisp acidity and minerality of Chardonnay-driven Grand Cru Champagnes cut through the rich lipids of Osetra caviar and Bluefin tuna tartare, leaving a clean, rejuvenated palate after every bite.

For warm seafood dishes like our Maine Lobster Thermidor or Chilean Sea Bass, a Vintage Rosé with slight Pinot Noir structure brings delicate red berry notes that complement cognac cream and saffron broth beautifully.`,
    author: 'Sommelier Antoine Dubois',
    category: 'Wine & Spirits',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read',
    publishedAt: '2026-08-05T14:30:00.000Z'
  },
  {
    _id: 'blog_3',
    title: 'The Farm-to-Table Journey of Black Truffles',
    slug: 'farm-to-table-black-truffles',
    excerpt: 'Unearthing the elusive Tuber melanosporum in the oak forests of Provence for our signature kitchen.',
    content: `Known as the black diamond of gastronomy, the Périgord black truffle is harvested using trained lagotto romagnolo dogs in the moist calcareous soil beneath French oak trees.

Within 48 hours of harvest, these pristine truffles are flown directly to our kitchen, preserving their earthy, aromatic potency. Shaved live at your table over our hand-rolled Tagliolini or incorporated into duck foie gras compote, every gram tells a story of pristine nature and culinary tradition.`,
    author: 'Chef Lucian Vance',
    category: 'Gastronomy',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
    readTime: '7 min read',
    publishedAt: '2026-07-28T09:15:00.000Z'
  },
  {
    _id: 'blog_4',
    title: 'Crafting Gold Leaf Confections: Behind the Scenes with Chef Elena',
    slug: 'crafting-gold-leaf-confections',
    excerpt: 'How pastry precision and 24-karat gold leaf create unforgettable dessert theatrics.',
    content: `Creating our signature 24K Gold Chocolate Dome requires five distinct pastry disciplines: chocolate tempering, hazelnut praline praline caramelization, passionfruit gel reduction, gold leaf gilding, and thermal shock melting.

We temper Valrhona 70% Guanaja chocolate at exactly 88.7°F (31.5°C) to ensure a high-gloss finish and crisp snap. Applying 24K edible gold leaf requires delicate static-free brushes in a climate-controlled pastry room.`,
    author: 'Pastry Chef Elena Rostova',
    category: 'Pastry & Desserts',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read',
    publishedAt: '2026-07-15T16:20:00.000Z'
  },
  {
    _id: 'blog_5',
    title: 'Sustainable Ocean Gastronomy: Protecting Our Seas',
    slug: 'sustainable-ocean-gastronomy',
    excerpt: 'Our commitment to 100% wild-caught, traceable seafood sourced from sustainable fisheries.',
    content: `Fine dining carries a deep responsibility to honor and protect our oceans. Every piece of seafood served at Grand Restaurant is certified by sustainable ocean conservatories.`,
    author: 'Chef de Cuisine Marco Rossi',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read',
    publishedAt: '2026-07-02T11:00:00.000Z'
  },
  {
    _id: 'blog_6',
    title: 'Architectural Lighting & Ambiance in Luxury Dining',
    slug: 'architectural-lighting-ambiance',
    excerpt: 'How custom warm illumination and soundproofing heighten the sensory dining experience.',
    content: `Dining at Grand Restaurant is designed as a sanctuary for all senses. Lighting is tuned to 2400K warm amber tones, creating natural gold highlights on tableware while maintaining cozy privacy.`,
    author: 'Grand Design Studio',
    category: 'Design & Aesthetics',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read',
    publishedAt: '2026-06-20T18:45:00.000Z'
  },
  {
    _id: 'blog_7',
    title: 'The Heritage of Hand-Rolled Italian Pasta',
    slug: 'heritage-hand-rolled-italian-pasta',
    excerpt: 'Combining organic semolina flour and fresh farm eggs into silky pasta ribbon perfection.',
    content: `Every morning at 6:00 AM, our pasta station begins kneading fresh dough. Using 30 egg yolks per kilogram of imported Tipo 00 flour, we yield rich golden sheets that absorb sauces like velvet.`,
    author: 'Chef de Cuisine Marco Rossi',
    category: 'Culinary Art',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read',
    publishedAt: '2026-06-10T12:00:00.000Z'
  },
  {
    _id: 'blog_8',
    title: 'Private Vaults & Custom Tasting Menus',
    slug: 'private-vaults-custom-tasting-menus',
    excerpt: 'Host your most exclusive celebrations in our subterranean wine vault.',
    content: `Surrounded by 3,000 vintage bottles, our Wine Vault offers complete acoustic isolation and tailored 7-course bespoke tasting menus designed individually for your party.`,
    author: 'Sommelier Antoine Dubois',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read',
    publishedAt: '2026-05-28T15:00:00.000Z'
  }
];

export const initialChefs = [
  {
    id: 1,
    name: 'Lucian Vance',
    role: 'Executive Chef & Culinary Director',
    bio: '3-Michelin star veteran trained in Paris & Tokyo with 22 years of high culinary mastery.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Master Pastry Chef',
    bio: 'Award-winning chocolatier specializing in avant-garde gold leaf desserts and sugar art.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Marco Rossi',
    role: 'Chef de Cuisine',
    bio: 'Florentine native bringing authentic hand-rolled pasta techniques and Mediterranean flavors.',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Antoine Dubois',
    role: 'Head Sommelier',
    bio: 'Master Sommelier curation expert curating over 3,000 rare Grand Cru vintages.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
  }
];

export const initialTestimonials = [
  {
    id: 1,
    name: 'Lady Victoria Sterling',
    title: 'Food & Wine Critic',
    comment: 'Grand Restaurant is an absolute triumph. The Miyazaki A5 Wagyu paired with their 2012 Dom Pérignon was the finest dining moment of my decade.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 2,
    name: 'Lord Richard Montrose',
    title: 'Luxury Connoisseur',
    comment: 'The subterranean Wine Vault experience is unmatched anywhere in the world. Service is discreet, personal, and perfection personified.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 3,
    name: 'Sophia Laurent',
    title: 'Michelin Guide Reviewer',
    comment: 'Chef Lucian Vance has redefined modern luxury dining. The Truffle Foie Gras and 24K Gold Chocolate Dome showcase unmatched artistry.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 4,
    name: 'Alexander Wright',
    title: 'Gourmet World Traveler',
    comment: 'From the moment you step onto the polished marble entrance to the final cognac, every detail radiates gold-standard perfection.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 5,
    name: 'Eleanor Vance',
    title: 'Private Event Host',
    comment: 'Hosted our 25th anniversary in the Private Vault. The custom tasting menu catered flawless attention to every single guest request.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 6,
    name: 'Harrison Forde',
    title: 'Executive Chef & Consultant',
    comment: 'Technique, speed, temperature, balance—Lucian Vance’s kitchen executes at an elite level. Pure culinary mastery.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 7,
    name: 'Camilla & David Thorne',
    title: 'Honeymoon Guests',
    comment: 'The romantic terrace table provided breathtaking views and unmatched candlelit atmosphere. Simply unforgettable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 8,
    name: 'Dr. Julian Ross',
    title: 'Private Cellar Collector',
    comment: 'Antoine Dubois’ sommelier recommendations are flawless. The rare Chateau Margaux was decanted to supreme perfection.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 9,
    name: 'Beatrice Fontaine',
    title: 'Lifestyle Journalist',
    comment: 'A feast for both the eyes and palate. The gold accents, transparent navigation, and luxury cards set a new global benchmark.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 10,
    name: 'Marcus Vance Jr.',
    title: 'Hospitality Executive',
    comment: 'The seamless combination of warm hospitality, high-end design, and Michelin-worthy dishes makes this a culinary legend.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300'
  }
];
