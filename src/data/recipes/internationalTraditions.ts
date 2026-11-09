import { Recipe } from '../../types';

export const internationalTraditionsRecipes: Recipe[] = [
  {
    id: 'it-1',
    slug: 'traditional-french-christmas-dinner-coquilles-saint-jacques',
    title: 'French Christmas Coquilles Saint-Jacques (Gratinéed Scallops in White Wine & Cream)',
    category: 'international-traditions',
    cuisine: 'French',
    countryCode: 'FR',
    difficulty: 'Intermediate',
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    servings: 6,
    featuredImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    summary: 'Plump sea scallops poached in dry vermouth with wild shallots and mushrooms, coated in silky Gruyère velouté sauce, piped with duchess potatoes and broiled in natural scallop shells.',
    story: 'Named after Saint James (Saint-Jacques), the patron saint of pilgrims whose emblem is the scallop shell, this luxurious dish is a beloved first course on French Christmas Eve (Le Réveillon). Served in real sea scallop shells bordered by swirls of golden potato, it represents timeless French culinary grandeur.',
    whyYouWillLoveIt: [
      'Served in real natural scallop shells for dramatic bistro elegance.',
      'Sweet, tender sea scallops enveloped in rich white wine and cream sauce.',
      'Golden, bubbling Gruyère cheese and duchess potato border browned under broiler.'
    ],
    dietary: [],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Fresh large sea scallops, patted dry', amountMetric: '500 g (12-14 large)', amountUS: '1.2 lbs' },
      { item: 'Button or chanterelle mushrooms, finely sliced', amountMetric: '150 g', amountUS: '1.5 cups' },
      { item: 'French shallots, finely minced', amountMetric: '2 whole', amountUS: '2 whole' },
      { item: 'Dry white wine or French vermouth (Noilly Prat)', amountMetric: '120 ml', amountUS: '1/2 cup' },
      { item: 'Heavy whipping cream or crème fraîche', amountMetric: '150 ml', amountUS: '2/3 cup' },
      { item: 'Unsalted butter & all-purpose flour', amountMetric: '45 g each', amountUS: '3 tbsp each' },
      { item: 'Aged French Gruyère cheese, finely grated', amountMetric: '80 g', amountUS: '3/4 cup' },
      { item: 'Fresh flat-leaf parsley and lemon juice', amountMetric: '2 tbsp parsley, 1 tbsp lemon', amountUS: '2 tbsp parsley, 1 tbsp lemon' },
      { item: 'Duchess mashed potato (potatoes whipped with egg yolk and butter)', amountMetric: '300 g', amountUS: '1.5 cups', notes: 'For piping border' }
    ],
    equipment: [
      '6 natural scallop baking shells or small gratin dishes',
      'Piping bag with large star tip for potato border',
      'Saucepan and fine whisk for velouté'
    ],
    instructions: [
      {
        step: 1,
        title: 'Poach scallops gently in wine',
        instruction: 'In a skillet, combine white wine, minced shallots, and sliced mushrooms with a pinch of salt. Bring to simmer. Add scallops; poach gently for just 2 minutes until opaque. Remove scallops with slotted spoon to a cutting board and cut in half. Strain and reserve poaching liquid.',
        sensoryCue: 'Scallops become tender and opaque without toughening.'
      },
      {
        step: 2,
        title: 'Whisk the rich velouté sauce',
        instruction: 'In a clean saucepan, melt butter and whisk in flour for 1 minute. Slowly whisk in warm reserved scallop poaching liquid and heavy cream. Simmer for 3 minutes until thick and velvety. Stir in half the grated Gruyère, lemon juice, and parsley.',
        sensoryCue: 'Luxurious cream sauce that blankets the back of a spoon.'
      },
      {
        step: 3,
        title: 'Pipe potato borders in shells',
        instruction: 'Place scallop shells on a baking sheet. Pipe a decorative border of duchess mashed potatoes around the inside rim of each shell using a star piping tip.',
        sensoryCue: 'Neat fluted potato crown framing the shell hollow.'
      },
      {
        step: 4,
        title: 'Fill with scallops and broil',
        instruction: 'Distribute scallops and mushrooms in center of each shell. Spoon warm velouté over scallops. Top with remaining Gruyère. Broil on high 6 inches from heat for 4-5 minutes until potato peaks are deep golden and sauce bubbles violently.',
        sensoryCue: 'Golden toasted potato peaks with bubbling cheesy molten sauce.'
      }
    ],
    proTips: [
      'Do not overcook scallops during poaching; 2 minutes is plenty, as they finish cooking under the hot broiler.',
      'Scrunch aluminum foil into small rings on the baking sheet to keep round scallop shells from rocking or tipping over.'
    ],
    variations: [
      'Truffle Coquilles: Drizzle white truffle oil over the sauce before topping with cheese.',
      'Prawn & Scallop: Combine half scallops and half tender wild prawns.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Thicken sauce with 1:1 gluten-free flour or sweet rice flour.',
      dairyFree: 'Substitute cashew cream for heavy cream and vegan parmesan.'
    },
    storageAndReheating: {
      refrigeration: 'Best eaten immediately; leftovers can be stored refrigerated for 24 hours.',
      freezing: 'Do not freeze.',
      shelfLife: '24 hours refrigerated.',
      reheating: 'Warm under broiler for 3 minutes.'
    },
    faqs: [
      {
        question: 'Where can I find scallop shells?',
        answer: 'Fishmongers and culinary specialty shops sell cleaned natural scallop shells, or you can use individual 4-inch ceramic ramekins.'
      }
    ],
    relatedRecipeIds: ['cm-3', 'it-2', 'ny-1'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'it-2',
    slug: 'italian-christmas-eve-spaghetti-alle-vongole',
    title: 'Italian Feast of the Seven Fishes: Spaghetti alle Vongole (Clams, Garlic & White Wine)',
    category: 'international-traditions',
    cuisine: 'Italian',
    countryCode: 'IT',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 6,
    featuredImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    summary: 'The centerpiece of Christmas Eve La Vigilia: al dente bronze-cut spaghetti tossed with fresh sweet baby clams, garlic, chili, dry Italian white wine, and parsley-infused olive oil.',
    story: 'Across Italy, Christmas Eve (La Vigilia) is observed with a meatless evening banquet celebrating the sea — famously known as the Feast of the Seven Fishes. In Rome and Naples, the undisputed crowning dish is Spaghetti alle Vongole. The natural brine of steaming clams emulsifies with starchy pasta water and peppery extra virgin olive oil into a silky sauce that clings to every strand.',
    whyYouWillLoveIt: [
      'Pure Italian minimalism: fresh clams, good olive oil, garlic, and white wine.',
      'Silky, natural emulsion formed without a drop of heavy cream.',
      'Fast 15-minute cook time keeps holiday host relaxed.'
    ],
    dietary: ['dairy-free'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Fresh small clams (littleneck or Manila clams)', amountMetric: '1.2 kg', amountUS: '2.5 lbs', notes: 'Scrubbed and purged of sand' },
      { item: 'Bronze-die Italian spaghetti or linguine', amountMetric: '500 g', amountUS: '1.1 lbs' },
      { item: 'Extra virgin olive oil', amountMetric: '80 ml', amountUS: '1/3 cup' },
      { item: 'Garlic cloves, thinly sliced or lightly crushed', amountMetric: '6 cloves', amountUS: '6 cloves' },
      { item: 'Dry Italian white wine (Pinot Grigio or Falanghina)', amountMetric: '120 ml', amountUS: '1/2 cup' },
      { item: 'Fresh Italian flat-leaf parsley', amountMetric: '1 large bunch', amountUS: '1 large bunch', notes: 'Finely chopped' },
      { item: 'Dried red pepper flakes (peperoncino)', amountMetric: '1/2 tsp', amountUS: '1/2 tsp' },
      { item: 'Coarse sea salt for pasta water', amountMetric: '2 tbsp', amountUS: '2 tbsp' }
    ],
    equipment: [
      'Large deep skillet or Dutch oven with tight-fitting lid',
      'Large pasta pot',
      'Tongs for emulsifying pasta'
    ],
    instructions: [
      {
        step: 1,
        title: 'Purge clams and boil pasta',
        instruction: 'Soak clams in salted cold water for 20 minutes to purge any residual sand; discard any with broken shells that don\'t close when tapped. Bring a large pot of water to a rolling boil with 2 tbsp coarse salt. Drop spaghetti; cook 2 minutes shy of al dente.',
        sensoryCue: 'Spaghetti still has a firm bite at center.'
      },
      {
        step: 2,
        title: 'Sizzle garlic and chili in olive oil',
        instruction: 'In a large skillet, warm olive oil over medium heat. Add sliced garlic and peperoncino. Sauté for 1-2 minutes until garlic is fragrant and pale golden (do not let it burn).',
        sensoryCue: 'Warm, pungent aroma of sizzling garlic and olive oil.'
      },
      {
        step: 3,
        title: 'Steam clams in white wine',
        instruction: 'Add drained clams and white wine to the skillet. Cover tightly with lid. Cook on high heat for 3-5 minutes, shaking the skillet occasionally, until clams open wide. Discard any clams that remain closed.',
        sensoryCue: 'Clam shells pop open, releasing sweet ocean juices into the simmering wine.'
      },
      {
        step: 4,
        title: 'Mantecare: finish pasta in clam sauce',
        instruction: 'Transfer undercooked spaghetti directly into the skillet with clams using tongs. Ladle 1/2 cup of starchy pasta water into the pan. Toss and swirl vigorously over medium-high heat for 2 minutes until pasta water and oil emulsify into a glossy sauce. Fold in fresh chopped parsley.',
        sensoryCue: 'Sauce transforms into an unctuous, silky glaze coating every pasta strand.'
      }
    ],
    proTips: [
      'Never rinse pasta! The surface starch on hot unrinsed pasta is what emulsifies with olive oil and clam broth to create the restaurant-quality sauce.',
      'In traditional Italian seafood cooking, never add grated cheese to clams; it overpowers the sweet, delicate ocean liquor.'
    ],
    variations: [
      'Vongole in Rosso: Add 1 cup of crushed sweet Italian cherry tomatoes (datterini) for a red version.',
      'Bottarga Garnish: Grate cured mullet roe (bottarga) over the pasta right before serving.'
    ],
    dietaryAdaptations: {
      dairyFree: 'Naturally 100% dairy-free.',
      glutenFree: 'Use high-quality gluten-free corn-and-rice spaghetti (cook gently to prevent breaking).'
    },
    storageAndReheating: {
      refrigeration: 'Best eaten immediately fresh from the pan.',
      freezing: 'Do not freeze.',
      shelfLife: '1 day refrigerated.',
      reheating: 'Warm gently in a pan with 2 tbsp water and olive oil.'
    },
    faqs: [
      {
        question: 'How do I know if clams are fresh?',
        answer: 'Fresh live clams should smell cleanly of the ocean and be tightly shut. If any are open, tap them gently on the counter; if they do not close, discard them.'
      }
    ],
    relatedRecipeIds: ['cm-4', 'cf-1', 'it-1'],
    recommendedEquipmentIds: ['knives-chef-set']
  },
  {
    id: 'it-3',
    slug: 'german-christmas-market-lebkuchen',
    title: 'Nürnberger Elisenlebkuchen (Authentic German Spiced Hazelnut Cookies)',
    category: 'international-traditions',
    cuisine: 'German',
    countryCode: 'DE',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 18,
    servings: 18,
    featuredImage: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
    summary: 'The pride of Nuremberg Christmas markets: flourless, chewy gingerbread cookies packed with roasted hazelnuts, almonds, candied orange peel, warm Lebkuchen spices, and baked on edible wafer paper (Oblaten).',
    story: 'Legendary across the snow-covered timber stalls of Bavarian Christkindlesmarkt, Elisenlebkuchen are the highest tier of German gingerbread. By law in Germany, Elisenlebkuchen must contain at least 25% nuts and virtually zero flour. Baked on thin edible wafer rounds, they remain moist, chewy, and intensely fragrant with cinnamon, cloves, allspice, and coriander.',
    whyYouWillLoveIt: [
      'Naturally flourless dough with roasted hazelnuts and almonds providing rich chewiness.',
      'Half glazed in crackling sugar syrup and half dipped in bittersweet dark chocolate.',
      'Incredible festive aroma that evokes traditional German Christmas markets.'
    ],
    dietary: ['vegetarian', 'gluten-free'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Large eggs at room temp', amountMetric: '3 eggs', amountUS: '3 eggs' },
      { item: 'Brown sugar or raw cane sugar', amountMetric: '150 g', amountUS: '3/4 cup' },
      { item: 'Pure honey', amountMetric: '60 g', amountUS: '2 tbsp' },
      { item: 'Toasted ground hazelnuts', amountMetric: '200 g', amountUS: '2 cups' },
      { item: 'Blanched ground almonds', amountMetric: '200 g', amountUS: '2 cups' },
      { item: 'Finely minced candied orange & lemon peel (Orangeat/Zitronat)', amountMetric: '100 g total', amountUS: '2/3 cup total' },
      { item: 'German Lebkuchen spice blend (cinnamon, cloves, allspice, nutmeg, cardamom, ginger, coriander)', amountMetric: '2 tbsp', amountUS: '2 tbsp' },
      { item: 'Baking wafer discs (Oblaten, 70mm diameter)', amountMetric: '18 wafers', amountUS: '18 wafers', notes: 'Edible wafer rounds' },
      { item: 'Dark chocolate & powdered sugar for two coatings', amountMetric: '100 g chocolate, 100 g sugar', amountUS: '3.5 oz chocolate, 1 cup sugar' },
      { item: 'Whole blanched almonds for decoration', amountMetric: '3 per cookie', amountUS: '3 per cookie' }
    ],
    equipment: [
      'Two baking sheets and parchment paper',
      'Food processor for finely mincing candied peel and nuts',
      'Offset spatula for smoothing mounds onto wafer discs'
    ],
    instructions: [
      {
        step: 1,
        title: 'Mince citrus peel with a spoon of sugar',
        instruction: 'Pulse candied orange and lemon peel in food processor with 2 tbsp sugar until paste-like with tiny pieces. This distributes citrus essential oils evenly.',
        sensoryCue: 'Intense, zesty candied peel aroma.'
      },
      {
        step: 2,
        title: 'Whip eggs, sugar, and honey',
        instruction: 'In a stand mixer, whip eggs, brown sugar, and honey for 4-5 minutes until pale, thick, and fluffy. Fold in minced candied peel, ground hazelnuts, ground almonds, Lebkuchen spices, and a pinch of salt.',
        sensoryCue: 'Dense, fragrant nut paste that smells like Christmas.'
      },
      {
        step: 3,
        title: 'Shape mounds on Oblaten wafers',
        instruction: 'Preheat oven to 160°C (320°F). Arrange wafer discs on parchment-lined baking sheets. Using an ice cream scoop or spoon, mound batter onto each wafer. Smooth into domes with a wet offset spatula. Press 3 whole blanched almonds in a triangle pattern on top.',
        sensoryCue: 'Neat rounded domes centered on paper-thin wafers.'
      },
      {
        step: 4,
        title: 'Bake gently and glaze',
        instruction: 'Bake for 18-20 minutes until edges are set but centers remain soft. For chocolate glaze: melt dark chocolate and brush half the cooled cookies. For sugar glaze: whisk powdered sugar with 2 tbsp hot water and brush remaining cookies while still warm.',
        sensoryCue: 'Glossy chocolate and crystalline sugar shell crackle over chewy nut centers.'
      }
    ],
    proTips: [
      'Bake at a low temperature (160°C/320°F); high heat dries out the natural nut oils and robs them of their chewy texture.',
      'Store Lebkuchen in a metal tin with an apple peel; the cookies absorb the moisture from the peel and become increasingly soft and flavorful.'
    ],
    variations: [
      'Rum Lebkuchen: Stir 2 tablespoons of dark rum into the batter.',
      'Marzipan Swirl: Knead 50g of almond marzipan into the nut mixture.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Ensure your Oblaten wafers are certified gluten-free (gluten-free starch wafers are widely available), or bake directly on parchment without wafers.',
      vegetarian: 'Naturally 100% vegetarian.'
    },
    storageAndReheating: {
      refrigeration: 'Store in an airtight cookie tin at room temperature for up to 4 weeks.',
      freezing: 'Freeze for up to 3 months.',
      shelfLife: '4 weeks room temperature.',
      reheating: 'Enjoy at room temperature with hot coffee or spiced Glühwein.'
    },
    faqs: [
      {
        question: 'What if I can\'t find Oblaten baking wafers?',
        answer: 'You can spoon the batter directly onto silicone or parchment-lined baking sheets. The wafers simply provide an authentic market feel and easy handling.'
      }
    ],
    relatedRecipeIds: ['cd-3', 'cd-4', 'gf-3'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'mixers-stand']
  },
  {
    id: 'it-4',
    slug: 'british-christmas-pudding',
    title: 'Traditional British Steamed Christmas Pudding with Brandy Butter',
    category: 'international-traditions',
    cuisine: 'British',
    countryCode: 'GB',
    difficulty: 'Intermediate',
    prepTimeMinutes: 40,
    cookTimeMinutes: 360,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
    summary: 'The crown of Victorian Christmas: a rich, dark steamed pudding of suet, currants, dates, figs, citrus peel, dark treacle, and stout ale, flamed with French cognac and served with brandy butter.',
    story: 'Traditionally prepared on Stir-up Sunday — five weeks before Christmas — every member of the household takes a turn stirring the pudding mixture from east to west in honour of the Three Wise Men. Steamed for six hours, it transforms into an intensely dark, unctuous pudding that is flambéed tableside on Christmas Day with a blue halo of burning brandy.',
    whyYouWillLoveIt: [
      'Glorious Victorian tableside theater when set alight with flaming brandy.',
      'Meltingly rich, dark crumb saturated with spices, candied peel, and cognac.',
      'Classic accompaniment: cool, sweet brandy butter that melts against the steaming hot pudding.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Currants, dark raisins, and golden sultanas', amountMetric: '300 g total', amountUS: '2 cups total' },
      { item: 'Dried figs or prunes, chopped', amountMetric: '100 g', amountUS: '2/3 cup' },
      { item: 'Candied citrus peel & grated apple', amountMetric: '50 g peel, 1 apple grated', amountUS: '1/3 cup peel, 1 apple grated' },
      { item: 'Dark stout beer (Guinness) and brandy', amountMetric: '100 ml beer, 60 ml brandy', amountUS: '1/2 cup beer, 1/4 cup brandy' },
      { item: 'Vegetarian or beef suet, shredded', amountMetric: '120 g', amountUS: '1 cup', substitutions: 'Frozen grated butter' },
      { item: 'Fresh breadcrumbs from crustless country bread', amountMetric: '100 g', amountUS: '1.5 cups' },
      { item: 'Dark muscovado or brown sugar', amountMetric: '120 g', amountUS: '2/3 cup' },
      { item: 'Self-rising flour or all-purpose + 1 tsp baking powder', amountMetric: '60 g', amountUS: '1/2 cup' },
      { item: 'Large eggs, beaten', amountMetric: '2 whole', amountUS: '2 whole' },
      { item: 'Mixed spice (cinnamon, nutmeg, cloves, mace)', amountMetric: '1 tbsp', amountUS: '1 tbsp' },
      { item: 'Butter, powdered sugar, and brandy for Brandy Butter', amountMetric: '100 g butter, 100 g sugar, 2 tbsp brandy', amountUS: '1/2 cup butter, 1 cup sugar, 2 tbsp brandy' }
    ],
    equipment: [
      '1.2 liter (2 pint) ceramic or plastic pudding basin',
      'Parchment paper, aluminum foil, and kitchen string',
      'Large deep stockpot with lid for steaming'
    ],
    instructions: [
      {
        step: 1,
        title: 'Macerate fruit overnight',
        instruction: 'Combine currants, raisins, figs, candied peel, and grated apple in a bowl. Pour over stout beer and brandy. Cover and let stand overnight to absorb liquid.',
        sensoryCue: 'Plump, glistening dark fruits heady with stout and spirits.'
      },
      {
        step: 2,
        title: 'Mix pudding batter',
        instruction: 'In a large bowl, combine shredded suet, breadcrumbs, dark sugar, flour, and mixed spice. Stir in soaked fruit and beaten eggs. Mix thoroughly with a wooden spoon (tradition asks everyone to make a wish).',
        sensoryCue: 'Heavy, dark, glistening batter with rich molasses sheen.'
      },
      {
        step: 3,
        title: 'Grease basin and create pleat lid',
        instruction: 'Butter the pudding basin generously. Spoon batter inside and pack down firmly. Make a pleat in a sheet of parchment and a sheet of foil; lay over basin, parchment side down. Tie securely under basin rim with string, making a string handle.',
        sensoryCue: 'Airtight pleated cover allows pudding room to expand during steaming.'
      },
      {
        step: 4,
        title: 'Steam for 6 hours',
        instruction: 'Place a small trivet or saucer in bottom of deep stockpot. Place pudding basin on top. Pour boiling water halfway up sides of basin. Cover pot with tight lid. Simmer gently on low heat for 6 hours, checking every hour to top up with boiling water.',
        sensoryCue: 'Gentle bubbling steam fills the kitchen with deep spice and dark molasses.'
      },
      {
        step: 5,
        title: 'Flambé and serve with brandy butter',
        instruction: 'Let rest 10 minutes, invert onto serving platter. Warm 45ml brandy in a ladle over flame, ignite with match, and pour gently over pudding at the table. Serve with cool brandy butter.',
        sensoryCue: 'Ethereal blue flame flickers over deep dark mahogany dome.'
      }
    ],
    proTips: [
      'The pleat in the parchment and foil is essential; it gives the pudding room to expand without bursting its seal.',
      'Check the water level in your steaming pot every hour without fail so the pot never boils dry.'
    ],
    variations: [
      'Silver Sixpence Tradition: Fold a sanitized silver coin into the batter for good fortune.',
      'Orange Infusion: Add the zest and juice of 1 whole unwaxed orange.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Use vegetable suet or frozen grated butter for 100% vegetarian pudding.',
      dairyFree: 'Use vegetable suet and dairy-free margarine for brandy butter.'
    },
    storageAndReheating: {
      refrigeration: 'Store in cool dark larder for up to 1 year. The high sugar and alcohol content naturally preserve it.',
      freezing: 'Can be frozen up to 6 months.',
      shelfLife: '12 months in cool dry pantry.',
      reheating: 'Steam for 1 hour on Christmas Day, or warm individual slices in microwave for 30 seconds.'
    },
    faqs: [
      {
        question: 'Do I have to wait weeks to eat it?',
        answer: 'While aging improves the depth of flavor, this pudding can be steamed 1-2 days before Christmas and still taste magnificent.'
      }
    ],
    relatedRecipeIds: ['cd-3', 'cm-5', 'it-5'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'it-5',
    slug: 'canadian-family-holiday-tourtiere',
    title: 'Traditional French-Canadian Holiday Tourtière (Spiced Meat Pie)',
    category: 'international-traditions',
    cuisine: 'Canadian',
    countryCode: 'CA',
    difficulty: 'Intermediate',
    prepTimeMinutes: 35,
    cookTimeMinutes: 50,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    summary: 'The holy grail of Quebec holiday celebrations: a double-crust pie stuffed with seasoned ground pork, beef, mashed potato, caramelized onions, and spiced with cinnamon, cloves, and savory.',
    story: 'In Quebec and French-Canadian communities across North America, Christmas Eve midnight mass is followed by the joyful family feast of Réveillon. The crowning glory on every table is Tourtière. Encased in a flaky lard and butter pastry, the spiced meat filling scented with summer savory, cloves, and nutmeg is comfort in its purest form.',
    whyYouWillLoveIt: [
      'Golden, flaky double-crust pastry with decorative holiday vent cutouts.',
      'Hearty, spiced pork and beef filling enriched with starchy mashed potatoes.',
      'Incredible served with tart homemade cranberry chutney or pickled beets.'
    ],
    dietary: [],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Double pie crust pastry (made with butter and lard)', amountMetric: 'For 9-inch pie', amountUS: 'For 9-inch pie' },
      { item: 'Ground pork shoulder', amountMetric: '500 g', amountUS: '1.1 lbs' },
      { item: 'Lean ground beef or veal', amountMetric: '300 g', amountUS: '10 oz' },
      { item: 'Yellow onion & celery, finely minced', amountMetric: '1 large onion, 1 celery stalk', amountUS: '1 large onion, 1 celery stalk' },
      { item: 'Garlic cloves, minced', amountMetric: '3 cloves', amountUS: '3 cloves' },
      { item: 'Russet potato, boiled and mashed', amountMetric: '1 medium (150 g)', amountUS: '1 medium', notes: 'Binds the filling and retains moisture' },
      { item: 'Beef or vegetable broth', amountMetric: '180 ml', amountUS: '3/4 cup' },
      { item: 'Ground cinnamon & ground cloves', amountMetric: '1/2 tsp each', amountUS: '1/2 tsp each' },
      { item: 'Ground savory & dried thyme', amountMetric: '1 tsp savory, 1/2 tsp thyme', amountUS: '1 tsp savory, 1/2 tsp thyme' },
      { item: 'Egg beaten with 1 tbsp milk for pastry wash', amountMetric: '1 whole', amountUS: '1 whole' }
    ],
    equipment: [
      '9-inch deep-dish pie plate',
      'Heavy skillet or Dutch oven',
      'Rolling pin and pastry brush'
    ],
    instructions: [
      {
        step: 1,
        title: 'Simmer the spiced meat filling',
        instruction: 'In a Dutch oven, combine pork, beef, onion, celery, garlic, spices, salt, and broth. Cook over medium-low heat, breaking apart meat with a wooden spoon, for 35-40 minutes until meat is tender and liquid has nearly evaporated.',
        sensoryCue: 'Intense warming fragrance of cloves, savory, and caramelized meat.'
      },
      {
        step: 2,
        title: 'Bind with mashed potato and cool',
        instruction: 'Stir warm mashed potato into the meat mixture to absorb remaining juices and bind the filling. Cool completely to room temperature (essential before adding to pastry).',
        sensoryCue: 'Cohesive, moist savory filling that holds its shape.'
      },
      {
        step: 3,
        title: 'Roll pastry and fill pie',
        instruction: 'Preheat oven to 200°C (400°F). Roll bottom crust and line 9-inch pie dish. Spoon cooled meat filling into crust. Roll top crust, place over filling, trim overhang, and crimp edges tightly with fingers or fork. Cut steam vents in top.',
        sensoryCue: 'Smooth, taut pastry shell with decorative crimped fluting.'
      },
      {
        step: 4,
        title: 'Brush and bake to golden brown',
        instruction: 'Brush top with egg wash. Bake at 200°C (400°F) for 20 minutes. Reduce oven to 180°C (350°F) and bake 25-30 minutes more until crust is deep golden brown and juices bubble at vents. Cool 15 minutes before slicing.',
        sensoryCue: 'Shatteringly crisp, bronzed pastry flaking under the knife.'
      }
    ],
    proTips: [
      'Never put warm meat into unbaked pie crust; the heat melts the fat layers in the pastry, turning the bottom crust soggy and dense.',
      'Summer savory (sarriette) is the traditional French-Canadian herb that gives Tourtière its distinctive holiday aroma.'
    ],
    variations: [
      'Tourtière du Lac-Saint-Jean: Traditional deep-dish slow-cooked variation layered with cubed wild game, venison, and diced potatoes.',
      'Wild Mushroom Tourtière: Replace half the meat with sautéed wild chanterelle and portobello mushrooms.'
    ],
    dietaryAdaptations: {
      dairyFree: 'Use lard or vegetable shortening for pie crust and omit milk in egg wash.',
      glutenFree: 'Use a quality gluten-free double pie crust blend.'
    },
    storageAndReheating: {
      refrigeration: 'Store baked pie covered in refrigerator for up to 4 days.',
      freezing: 'Tourtière freezes brilliantly unbaked or baked for up to 3 months.',
      shelfLife: '4 days refrigerated; 90 days frozen.',
      reheating: 'Warm slice in 180°C (350°F) oven for 15 minutes to re-crisp pastry.'
    },
    faqs: [
      {
        question: 'Can I bake Tourtière the day before?',
        answer: 'Yes! Tourtière actually tastes better the next day as the spices mellow into the meat. Simply re-warm in a moderate oven before dinner.'
      }
    ],
    relatedRecipeIds: ['cm-2', 'cd-5', 'cf-4'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'knives-chef-set']
  },
  {
    id: 'it-6',
    slug: 'australian-summer-christmas-bbq-prawns',
    title: 'Australian Christmas BBQ Garlic King Prawns with Mango Coriander Salsa',
    category: 'international-traditions',
    cuisine: 'Australian',
    countryCode: 'AU',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 6,
    servings: 6,
    featuredImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    summary: 'Whole wild Australian king prawns tossed with charred garlic, lime, and red chili, flame-grilled on the barbecue and served with sweet diced Kensington Pride mango salsa.',
    story: 'While half the world shivers in winter coats, Christmas in Australia is celebrated outdoors beside the pool or surf beach. The sizzle of wild prawns hitting scorching barbecue grates is the defining soundtrack of an Australian summer holiday, balanced by the sweet juiciness of ripe summer mangoes.',
    whyYouWillLoveIt: [
      'Blistered, charred wild prawns cooked outdoors in just 6 minutes.',
      'Smoky garlic-chili oil mingling with juicy, sweet prawn meat.',
      'Vibrant tropical mango salsa with lime, coriander, and avocado.'
    ],
    dietary: ['gluten-free', 'dairy-free'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Large raw Australian king or tiger prawns', amountMetric: '1 kg', amountUS: '2.2 lbs', notes: 'Shelled with tails and heads intact, deveined' },
      { item: 'Garlic cloves, finely minced', amountMetric: '6 cloves', amountUS: '6 cloves' },
      { item: 'Extra virgin olive oil', amountMetric: '60 ml', amountUS: '1/4 cup' },
      { item: 'Fresh limes (juice and zest)', amountMetric: '2 whole', amountUS: '2 whole' },
      { item: 'Red bird\'s eye chili, finely sliced', amountMetric: '1 whole', amountUS: '1 whole' },
      { item: 'Ripe Kensington Pride or honey mangoes, diced', amountMetric: '2 whole', amountUS: '2 whole' },
      { item: 'Ripe avocado, diced', amountMetric: '1 whole', amountUS: '1 whole' },
      { item: 'Red onion & fresh coriander (cilantro)', amountMetric: '1/2 onion, 1/2 bunch coriander', amountUS: '1/2 onion, 1/2 bunch coriander' },
      { item: 'Flaky sea salt & cracked black pepper', amountMetric: '1 tsp each', amountUS: '1 tsp each' }
    ],
    equipment: [
      'Outdoor barbecue grill or heavy ridged stovetop cast iron griddle',
      'Wooden or stainless skewers (soaked in water if wood)',
      'Large mixing bowl'
    ],
    instructions: [
      {
        step: 1,
        title: 'Marinate prawns in garlic lime oil',
        instruction: 'Toss prawns in a bowl with olive oil, minced garlic, lime zest, sliced chili, and sea salt. Let marinate for 15 minutes at room temperature.',
        sensoryCue: 'Glossy prawns coated in fragrant citrus and chili bits.'
      },
      {
        step: 2,
        title: 'Toss fresh tropical mango salsa',
        instruction: 'In a separate bowl, gently combine diced mango, diced avocado, finely chopped red onion, chopped coriander, lime juice, and a pinch of salt. Chill until serving.',
        sensoryCue: 'Vibrant bowl of gold, green, and red jewel colors.'
      },
      {
        step: 3,
        title: 'Grill prawns over intense flame',
        instruction: 'Heat barbecue grill to high heat until smoking hot. Lay prawns across the grill bars. Cook for 2-3 minutes per side until shells turn vibrant coral-pink and meat is charred and opaque.',
        sensoryCue: 'Roaring sizzle and smoky sweetness of caramelized shellfish shells.'
      },
      {
        step: 4,
        title: 'Serve hot with chilled salsa',
        instruction: 'Pile grilled prawns high on a warm platter. Squeeze fresh lime over top and serve immediately with mango avocado salsa.',
        sensoryCue: 'Smoky hot charred prawns paired with ice-cold sweet tropical fruit.'
      }
    ],
    proTips: [
      'Leaving heads and tails on during grilling protects the meat from drying out over intense barbecue coals and adds deep roasted flavor.',
      'Do not over-marinate with lime juice beforehand; 15 minutes is plenty, or citrus acid will "cook" the delicate raw prawn flesh.'
    ],
    variations: [
      'Pineapple Jalapeño Salsa: Swap mango for grilled sweet pineapple and jalapeño.',
      'Herb Garlic Butter: Baste prawns on the grill with melted butter, garlic, and chopped fresh dill.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Naturally 100% gluten-free.',
      dairyFree: 'Naturally 100% dairy-free.'
    },
    storageAndReheating: {
      refrigeration: 'Store leftover grilled prawns in refrigerator for up to 24 hours.',
      freezing: 'Do not freeze cooked prawns.',
      shelfLife: '24 hours refrigerated.',
      reheating: 'Enjoy cold in salads or warm 1 minute in a hot skillet.'
    },
    faqs: [
      {
        question: 'Can I cook this indoors on a stove?',
        answer: 'Yes! A heavy ridged cast-iron griddle pan heated until smoking produces the same gorgeous char marks and flavor.'
      }
    ],
    relatedRecipeIds: ['cm-6', 'cd-6', 'ny-5'],
    recommendedEquipmentIds: ['knives-chef-set']
  }
];
