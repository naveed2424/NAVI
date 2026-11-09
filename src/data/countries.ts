import { CountryCuisine } from '../types';

export const countriesData: CountryCuisine[] = [
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    tagline: 'Melting Pot Feasts & Southern Comforts',
    description: 'American home cooking is a dynamic tapestry woven from regional traditions: hearty New England roasts, Southern smoked meats, Midwest holiday casseroles, and Pacific coastal fresh produce. From classic holiday glazed ham to chewy chocolate chip cookies, American dishes focus on generous abundance, family hospitality, and comforting warmth.',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'Christmas tables across America feature centerpiece spiral glazed hams, mashed potatoes with pan gravy, gingerbread decorating afternoons with children, and pie-laden dessert buffets on Christmas Day and New Year’s Eve.',
    signatureFlavors: ['Dark molasses', 'Pure maple', 'Bourbon', 'Crisp apples', 'Cheddar cheese', 'Toasted pecans'],
    featuredRecipeIds: ['cm-1', 'cd-4', 'gf-6', 'ny-2', 'db-1', 'db-6']
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    tagline: 'Boreal Forests, Maple Sugar & French Heritage',
    description: 'Canadian culinary heritage reflects its crisp northern climate and deep French, British, and Indigenous influences. Celebrating seasonal ingredients like wild game, cranberries, ocean seafood, and world-renowned amber maple syrup, Canadian holiday cooking brings soul-warming hearth comfort against snowy landscapes.',
    heroImage: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'Holiday tables feature French-Canadian Tourtière meat pies following midnight mass, maple-basted roast turkey, gooey butter tarts, and sweet maple pecan desserts.',
    signatureFlavors: ['Grade A amber maple syrup', 'Summer savory (sarriette)', 'Tart cranberries', 'Butter pastry', 'Warm cloves'],
    featuredRecipeIds: ['cm-2', 'cd-5', 'it-5', 'ny-6']
  },
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    tagline: 'Artisanal Technique & Le Réveillon Elegance',
    description: 'French home cooking balances culinary reverence with seasonal farm ingredients. Far from stuffy restaurant formality, French family cooking revolves around slow-braised cocottes, fragrant herb bouquets, paper-thin crêpes, and grand holiday feasts where dinner extends for hours of joyful conversation.',
    heroImage: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'Le Réveillon de Noël takes place on Christmas Eve with fresh oysters, Coquilles Saint-Jacques in white wine, roasted capon with chestnuts, and a dramatic Chocolate Bûche de Noël.',
    signatureFlavors: ['French butter', 'Crème fraîche', 'Wild mushrooms', 'Shallots', 'Tarragon', 'Cognac & dry white wine'],
    featuredRecipeIds: ['cm-3', 'cd-1', 'vv-3', 'it-1', 'cf-4', 'cf-6', 'db-4']
  },
  {
    code: 'IT',
    name: 'Italy',
    flag: '🇮🇹',
    tagline: 'La Cucina Povera & Festive Family Feasts',
    description: 'In Italy, food is sacred culture and familial devotion. Respecting the purity of simple, exceptional ingredients, Italian home cooks craft timeless masterpieces from San Marzano tomatoes, freshly pressed extra virgin olive oil, fragrant garden herbs, and handmade pasta passed down through generations.',
    heroImage: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'La Vigilia on Christmas Eve is celebrated with the meatless Feast of the Seven Fishes and Spaghetti alle Vongole, followed by towering Lasagna alla Bolognese and tall golden Panettone on Christmas Day.',
    signatureFlavors: ['Parmigiano-Reggiano', 'Cold-pressed olive oil', 'Sweet basil', 'Garlic', 'San Marzano tomatoes', 'Marsala wine'],
    featuredRecipeIds: ['cm-4', 'cd-2', 'gf-2', 'it-2', 'ny-4', 'cf-1']
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    tagline: 'Christkindlmarkts & Spiced Winter Baking',
    description: 'German winter culinary traditions are famous worldwide for enchanting Christmas markets, warming mulled wine (Glühwein), and historic artisanal baking. From Dresden to Nuremberg, German holiday bakers preserve recipes that have brought warmth and joy for hundreds of years.',
    heroImage: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'Centuries of tradition come alive through Dresdner Christstollen aged with rum and butter, and flourless spiced Nürnberger Lebkuchen baked on edible wafer paper.',
    signatureFlavors: ['Cardamom & mace', 'Jamaica rum', 'Almond marzipan', 'Candied citrus peel', 'Roasted hazelnuts'],
    featuredRecipeIds: ['cd-3', 'it-3']
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    tagline: 'Victorian Grandeur & Fireside Baking',
    description: 'British home cooking is rooted in comforting Sunday roasts, flaky pastry crusts, and warm steamed puddings. From golden Yorkshire puddings to grand Beef Wellington and teatime Lemon Drizzle cakes, British culinary traditions prioritize cozy family gatherings around the hearth.',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'Christmas dinner centers on tender roast beef or Wellington with roast potatoes, followed by the dramatic tableside flambé of rich steamed Christmas Pudding with brandy butter.',
    signatureFlavors: ['English mustard', 'Beef suet', 'Mixed spices', 'Malt beer & brandy', 'Fresh rosemary & thyme'],
    featuredRecipeIds: ['cm-5', 'vv-1', 'it-4', 'cf-5', 'db-5']
  },
  {
    code: 'ES',
    name: 'Spain',
    flag: '🇪🇸',
    tagline: 'Tapas, Jamón & Midnight Celebrations',
    description: 'Spanish dining thrives on community and sharing. Across tapas bars and family kitchens, simple ingredients like ripe vine tomatoes, pimentón de la Vera (smoked paprika), extra virgin olive oil, and fresh seafood take center stage in celebratory meals that span late into the night.',
    heroImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'Nochevieja (New Year\'s Eve) brings friends together for sizzling tapas, sparkling Cava, and the midnight tradition of eating 12 lucky grapes with each chime of the clock tower.',
    signatureFlavors: ['Smoked paprika (pimentón)', 'Garlic & chili', 'Spanish olive oil', 'Dry cured chorizo', 'Saffron'],
    featuredRecipeIds: ['ny-3']
  },
  {
    code: 'PT',
    name: 'Portugal',
    flag: '🇵🇹',
    tagline: 'Atlantic Seafood & Pastel Custards',
    description: 'Portuguese culinary soul is deeply tied to the Atlantic Ocean and ancient spice trading routes. Famous for salted cod (Bacalhau), sun-ripened olive oils, garlic, and golden egg custard pastries (Pastéis de Nata), Portuguese family tables radiate rustic generosity.',
    heroImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'On Christmas Eve (Consoada), Portuguese families gather for Bacalhau da Consoada (tender salt cod with cabbage, potatoes, and garlic oil) followed by sweet fried rabanadas.',
    signatureFlavors: ['Salted cod (bacalhau)', 'Piri-piri chili', 'Coriander', 'Bay leaves', 'Cinnamon egg custards'],
    featuredRecipeIds: ['cf-1', 'it-2']
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    tagline: 'Sunny Summer Barbecues & Ocean Seafood',
    description: 'Australian holiday dining is uniquely vibrant. Held in the warmth of southern summer, festivities take place outdoors under blue skies. Families feast on sweet ocean prawns, freshly shucked rock oysters, charred barbecue seafood, and billowy berry-crowned pavlovas.',
    heroImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'Christmas morning visits to fish markets are followed by ice-chilled prawn platters, outdoor barbecues, and towering Pavlovas loaded with passionfruit and fresh berries.',
    signatureFlavors: ['Wild king prawns', 'Finger limes', 'Ripe mangoes', 'Passionfruit', 'Fresh dill & chives'],
    featuredRecipeIds: ['cm-6', 'cd-6', 'gf-5', 'ny-5', 'it-6']
  },
  {
    code: 'SE',
    name: 'Sweden',
    flag: '🇸🇪',
    tagline: 'Julbord Smörgåsbords & Cardamom Buns',
    description: 'Swedish winter cooking is an art form of cozy warmth (Mys) designed to illuminate the darkest Nordic winter days. Smoked fish, pickled herring, lingonberries, spiced saffron buns (Lussekatter), and crisp ginger snaps bring festive light to homes across Scandinavia.',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'St. Lucia’s Day on December 13th begins the season with saffron buns, followed by Christmas Eve Julbord spreads featuring Swedish meatballs, Gravlax, and ginger biscuits.',
    signatureFlavors: ['Green cardamom', 'Saffron', 'Lingonberries', 'Fresh dill', 'Pickled mustard seeds'],
    featuredRecipeIds: ['cd-4', 'db-3']
  },
  {
    code: 'GR',
    name: 'Greece',
    flag: '🇬🇷',
    tagline: 'Aegean Olive Groves & Honey Spiced Pastries',
    description: 'Greek home cooking celebrates the bounty of the Mediterranean: robust wild oregano, crisp phyllo pastry, tangy feta, Kalamata olives, and honey-soaked spiced walnut confections that have graced Aegean tables since ancient times.',
    heroImage: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'Greek homes bake honey-soaked Melomakarona spiced cookies and orange-scented Vasilopita New Year’s cake containing a hidden coin for good fortune.',
    signatureFlavors: ['Greek mountain oregano', 'Kalamata olive oil', 'Wild thyme honey', 'Walnuts', 'Fresh lemon & garlic'],
    featuredRecipeIds: ['vv-3', 'vv-6']
  },
  {
    code: 'JP',
    name: 'Japan',
    flag: '🇯🇵',
    tagline: 'Artisanal Precision & New Year Osechi',
    description: 'Japanese culinary philosophy centers on seasonality, visual harmony, and respecting the essence of every ingredient. Holiday traditions range from light, strawberry-crowned Christmas sponge cakes to symbolic multi-tiered lacquer boxes filled with New Year Osechi-ryori.',
    heroImage: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80',
    holidayTraditions: 'Christmas Eve is celebrated with airy Kurisumasu Keki (Japanese Strawberry Shortcake), while New Year’s Day brings Toshikoshi soba noodles for longevity and Osechi fortune dishes.',
    signatureFlavors: ['Miso & dashi', 'Mirin & sake', 'Yuzu citrus', 'Toasted sesame', 'Sweet adzuki red bean'],
    featuredRecipeIds: ['cd-6', 'db-2']
  }
];

export function getCountryByCode(code: string): CountryCuisine | undefined {
  return countriesData.find((c) => c.code.toUpperCase() === code.toUpperCase());
}
