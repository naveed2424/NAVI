import { Recipe } from '../../types';

export const newYearRecipes: Recipe[] = [
  {
    id: 'ny-1',
    slug: 'french-savoury-puff-pastry-bites',
    title: 'French Savoury Puff Pastry Canapés (Feuilletés Apéritifs)',
    category: 'new-year',
    cuisine: 'French',
    countryCode: 'FR',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 18,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    summary: 'Golden, bite-sized puff pastry palmiers and pinwheels with three festive fillings: caramelized onion with Gruyère, tapenade with goat cheese, and smoked salmon with dill.',
    story: 'No French New Year’s Eve (Le Réveillon de la Saint-Sylvestre) begins without a glass of crisp Champagne accompanied by an assortment of freshly baked hot feuilletés. Warm, buttery pastry spiraled around savory Mediterranean fillings provides the quintessential cocktail hour bite.',
    whyYouWillLoveIt: [
      'Puffs into dozens of bite-sized, flaky golden hors d\'oeuvres in under 20 minutes.',
      'Three crowd-pleasing fillings created from one batch of puff pastry.',
      'Can be pre-shaped, frozen unbaked, and popped straight into the oven as guests ring the doorbell.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    isNewYear: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'All-butter puff pastry sheets', amountMetric: '2 sheets (500 g)', amountUS: '2 sheets (1 lb)' },
      { item: 'Caramelized onion jam or sweet onion marmalade', amountMetric: '100 g', amountUS: '1/2 cup' },
      { item: 'Aged French Gruyère cheese, finely grated', amountMetric: '100 g', amountUS: '1 cup' },
      { item: 'Black olive tapenade', amountMetric: '80 g', amountUS: '1/3 cup' },
      { item: 'Fresh creamy goat cheese (chèvre)', amountMetric: '100 g', amountUS: '1/2 cup' },
      { item: 'Egg beaten with 1 tbsp water for glaze', amountMetric: '1 whole', amountUS: '1 whole' },
      { item: 'Poppy seeds and fresh thyme for topping', amountMetric: '1 tbsp each', amountUS: '1 tbsp each' }
    ],
    equipment: [
      'Baking sheets lined with parchment',
      'Sharp chef knife for clean slicing without crushing pastry',
      'Pastry brush'
    ],
    instructions: [
      {
        step: 1,
        title: 'Fill and roll palmier spirals',
        instruction: 'Unroll one puff pastry sheet. Spread onion jam evenly, top with grated Gruyère and fresh thyme. Roll both long sides tightly inward until they meet in the exact center to form a palmier (pig\'s ear) shape. Chill 15 minutes.',
        sensoryCue: 'Firm, neat double-scroll log.'
      },
      {
        step: 2,
        title: 'Fill and roll tapenade pinwheels',
        instruction: 'Unroll second sheet. Spread black olive tapenade, crumble creamy goat cheese across surface. Roll tightly from one long edge into a single cylinder log. Chill 15 minutes.',
        sensoryCue: 'Uniform cylinder with black tapenade swirl visible at edges.'
      },
      {
        step: 3,
        title: 'Slice and arrange on trays',
        instruction: 'Preheat oven to 200°C (400°F). Using a very sharp chef knife, slice chilled rolls into 1cm (1/3 inch) thick slices. Place cut-side down on parchment-lined trays, leaving 1.5 inches space between them.',
        sensoryCue: 'Slices reveal intricate pastry spirals and fillings.'
      },
      {
        step: 4,
        title: 'Brush and bake to puffed golden crisp',
        instruction: 'Brush tops lightly with egg wash; sprinkle with poppy seeds. Bake for 16-18 minutes until pastry is puffed, tall, crisp, and golden brown. Serve warm.',
        sensoryCue: 'Buttery steam and crisp crackle of pastry layers.'
      }
    ],
    proTips: [
      'Chilling the rolled logs before slicing is essential; warm pastry squishes under the knife and loses its spiral shape.',
      'Bake at a high temperature (200°C/400°F) so the butter in the dough turns to steam quickly, forcing pastry layers to puff high.'
    ],
    variations: [
      'Pesto & Parmesan: Spread basil pesto with sundried tomatoes and Parmesan.',
      'Prosciutto Dijon: Brush with Dijon mustard and shingle paper-thin prosciutto before rolling.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally vegetarian.',
      glutenFree: 'Use certified gluten-free puff pastry sheets.'
    },
    storageAndReheating: {
      refrigeration: 'Best eaten fresh; leftovers can be stored in an airtight container for 2 days.',
      freezing: 'Freeze sliced raw pinwheels on baking sheet, then transfer to a freezer bag for up to 2 months. Bake straight from frozen.',
      shelfLife: '2 days refrigerated; 60 days frozen unbaked.',
      reheating: 'Warm 5 minutes in 180°C (350°F) oven to restore crispness.'
    },
    faqs: [
      {
        question: 'Can I bake these hours in advance?',
        answer: 'You can bake them up to 3 hours ahead, leave at room temperature, and pop back into a hot oven for 3 minutes right before serving.'
      }
    ],
    relatedRecipeIds: ['ny-2', 'ny-3', 'cm-3'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'knives-chef-set']
  },
  {
    id: 'ny-2',
    slug: 'american-party-sliders',
    title: 'Hot Honey Pulled Beef and Cheddar Holiday Party Sliders',
    category: 'new-year',
    cuisine: 'American',
    countryCode: 'US',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
    summary: 'Pull-apart sweet Hawaiian rolls packed with tender braised beef, sharp Wisconsin cheddar, pickled jalapeños, and drenched in garlic butter, hot honey, and toasted sesame seeds.',
    story: 'For casual New Year’s gatherings, nothing beats a baking dish of hot, pull-apart sliders. Sweet Hawaiian rolls are sliced horizontally as a single sheet, filled with savory warm fillings, glazed with melted seasoned butter, and baked until the cheese stretches in decadent golden ribbons.',
    whyYouWillLoveIt: [
      'Pulls apart easily into 12 hearty, warm holiday party bites.',
      'Contrast of sweet pillowy Hawaiian bread with savory beef, sharp cheese, and hot honey glaze.',
      'Ready in just 20 minutes of baking time with minimal cleanup.'
    ],
    dietary: [],
    isHolidaySpecial: true,
    isNewYear: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Package sweet Hawaiian dinner rolls (12-pack)', amountMetric: '1 pack (12 rolls)', amountUS: '1 pack (12 rolls)', notes: 'Left attached' },
      { item: 'Tender braised pulled beef or leftover holiday ham/turkey', amountMetric: '400 g', amountUS: '3 cups', notes: 'Warm and shredded' },
      { item: 'Sharp cheddar or provolone cheese, sliced', amountMetric: '200 g', amountUS: '8-10 slices' },
      { item: 'Caramelized sweet onions', amountMetric: '150 g', amountUS: '1 cup' },
      { item: 'Pickled jalapeños or sweet dill pickle chips', amountMetric: '1/3 cup', amountUS: '1/3 cup' },
      { item: 'Unsalted butter, melted', amountMetric: '60 g', amountUS: '4 tbsp' },
      { item: 'Hot honey or pure honey with pinch cayenne', amountMetric: '2 tbsp', amountUS: '2 tbsp' },
      { item: 'Dijon mustard & Worcestershire sauce', amountMetric: '1 tbsp each', amountUS: '1 tbsp each' },
      { item: 'Garlic powder & toasted sesame seeds', amountMetric: '1 tsp garlic, 1 tbsp sesame', amountUS: '1 tsp garlic, 1 tbsp sesame' }
    ],
    equipment: [
      '9x13 inch baking dish',
      'Long serrated bread knife',
      'Pastry brush and aluminum foil'
    ],
    instructions: [
      {
        step: 1,
        title: 'Slice rolls horizontally in one piece',
        instruction: 'Preheat oven to 180°C (350°F). Without separating individual rolls, slice entire sheet of rolls horizontally in half using a long serrated knife. Place bottom slab into baking dish.',
        sensoryCue: 'Intact single layer of pillowy sweet bread.'
      },
      {
        step: 2,
        title: 'Layer cheese, beef, and pickles',
        instruction: 'Layer half the sliced cheese over the roll bottoms. Spread warm pulled beef and caramelized onions evenly over cheese. Scatter pickles, then top with remaining cheese slices and roll tops.',
        sensoryCue: 'Beef sealed between protective cheese layers.'
      },
      {
        step: 3,
        title: 'Whisk hot honey butter glaze',
        instruction: 'Whisk melted butter, hot honey, Dijon mustard, Worcestershire, and garlic powder in a small bowl. Brush generously over tops and sides of rolls. Sprinkle with sesame seeds.',
        sensoryCue: 'Golden, glossy buns glistening with glaze and sesame seeds.'
      },
      {
        step: 4,
        title: 'Bake covered then uncovered',
        instruction: 'Cover dish with foil. Bake 12 minutes to melt cheese without burning tops. Remove foil and bake 6-8 minutes more until tops are toasted golden brown and butter crackles.',
        sensoryCue: 'Bubbling melted cheese at borders with toasted golden crowns.'
      }
    ],
    proTips: [
      'Layering cheese both under and over the warm meat prevents the bread from absorbing juices and turning soggy.',
      'Covering with foil for the first 12 minutes melts the cheese thoroughly before the sweet roll tops can scorch.'
    ],
    variations: [
      'Ham & Swiss: Classic Cuban holiday style with smoked ham, Swiss cheese, and whole grain mustard.',
      'Vegetarian Mushroom: Sautéed portobello mushrooms and melted fontina.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Use gluten-free dinner rolls.',
      dairyFree: 'Substitute plant-based cheddar slices and dairy-free butter.'
    },
    storageAndReheating: {
      refrigeration: 'Cover and refrigerate for up to 3 days.',
      freezing: 'Freeze baked sliders wrapped in foil for up to 1 month.',
      shelfLife: '3 days refrigerated.',
      reheating: 'Warm wrapped in foil at 180°C (350°F) for 10 minutes.'
    },
    faqs: [
      {
        question: 'Can I assemble this before party guests arrive?',
        answer: 'Yes! Assemble completely up to 4 hours in advance, cover with foil and refrigerate. Add the melted butter glaze just before popping into the oven.'
      }
    ],
    relatedRecipeIds: ['ny-1', 'ny-3', 'cm-1'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'ny-3',
    slug: 'spanish-inspired-celebration-tapas',
    title: 'Spanish Celebration Tapas Trio: Gambas al Ajillo, Chorizo al Vino & Pan con Tomate',
    category: 'new-year',
    cuisine: 'Spanish',
    countryCode: 'ES',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    summary: 'A lively Spanish New Year’s celebration spread: sizzling garlic prawns in chili olive oil, Spanish chorizo braised in red wine, and toasted rustic bread rubbed with ripe tomatoes and olive oil.',
    story: 'In Spain, Nochevieja (New Year\'s Eve) is celebrated with abundant tapas, flowing Cava, and the tradition of eating 12 grapes at midnight. This vibrant tapas trio comes together in minutes, filling the kitchen with the intoxicating scent of sizzling garlic, Spanish paprika, and rustic toasted bread.',
    whyYouWillLoveIt: [
      'Three iconic Spanish bar classics prepared in less than 35 minutes.',
      'Sizzling garlic and chili oil begs to be mopped up with crunchy tomato-rubbed bread.',
      'Lively, informal party dining that encourages mingling and celebration.'
    ],
    dietary: ['dairy-free'],
    isHolidaySpecial: true,
    isNewYear: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Raw large peeled prawns, patted dry', amountMetric: '400 g', amountUS: '14 oz' },
      { item: 'Spanish dry-cured or fresh chorizo sausages, sliced', amountMetric: '250 g', amountUS: '9 oz' },
      { item: 'Garlic cloves, thinly sliced', amountMetric: '8 cloves', amountUS: '8 cloves' },
      { item: 'Extra virgin Spanish olive oil', amountMetric: '120 ml', amountUS: '1/2 cup' },
      { item: 'Spanish red wine (Rioja or Tempranillo)', amountMetric: '150 ml', amountUS: '2/3 cup' },
      { item: 'Dried red chili flakes or 1 whole red chili', amountMetric: '1 tsp', amountUS: '1 tsp' },
      { item: 'Crusty rustic baguette or country sourdough bread', amountMetric: '1 loaf', amountUS: '1 loaf' },
      { item: 'Ripe vine tomatoes, halved', amountMetric: '3 whole', amountUS: '3 whole', notes: 'Grated against box grater' },
      { item: 'Fresh flat-leaf parsley and flaky sea salt', amountMetric: 'For garnish', amountUS: 'For garnish' }
    ],
    equipment: [
      'Two small ceramic cazuelas or cast-iron skillets',
      'Box grater for tomatoes',
      'Tongs and wooden spoons'
    ],
    instructions: [
      {
        step: 1,
        title: 'Make rustic Pan con Tomate',
        instruction: 'Grill or toast thick slices of bread until crunchy. Rub cut garlic clove over hot toast. Grate halved tomatoes against large holes of box grater, discarding skin. Spoon grated pulp over toast, drizzle with olive oil, and sprinkle with sea salt flakes.',
        sensoryCue: 'Crunch of crisp bread yielding to sweet, juicy tomato pulp.'
      },
      {
        step: 2,
        title: 'Braise chorizo in Spanish red wine',
        instruction: 'In a skillet, sear sliced chorizo for 3 minutes until oil renders. Pour in Spanish red wine. Simmer vigorously for 6-8 minutes until wine reduces to a glossy, dark red syrup coating the sausage coins.',
        sensoryCue: 'Smoky paprika aromas mingling with bubbling red wine.'
      },
      {
        step: 3,
        title: 'Flash-sizzle garlic prawns (Gambas al Ajillo)',
        instruction: 'In a second skillet or cazuela, heat olive oil over medium-high. Add sliced garlic and chili; fry for 45 seconds until pale golden (do not burn). Toss in prawns; cook 2-3 minutes until pink and curled. Remove from heat immediately; scatter with parsley.',
        sensoryCue: 'Dramatic sizzling skillet with aromatic garlic steam.'
      },
      {
        step: 4,
        title: 'Serve sizzling together',
        instruction: 'Place both hot skillets on trivets in the center of the table alongside the pan con tomate for sharing.',
        sensoryCue: 'Guests dip crispy bread into garlicky chili oil.'
      }
    ],
    proTips: [
      'Watch the garlic closely when making Gambas; garlic turns bitter if browned too dark. Pull the pan from heat as soon as prawns turn pink, as residual heat finishes cooking them.',
      'Use a Spanish Rioja or dry Garnacha for the chorizo braise for authentic regional flavor.'
    ],
    variations: [
      'Padrón Peppers: Blister small green Padrón peppers in hot olive oil with coarse sea salt as a fourth tapas.',
      'Manchego & Quince: Add wedges of aged Manchego cheese with membrillo (quince paste).'
    ],
    dietaryAdaptations: {
      dairyFree: 'Naturally 100% dairy-free.',
      glutenFree: 'Serve with gluten-free artisanal bread for the pan con tomate.'
    },
    storageAndReheating: {
      refrigeration: 'Store chorizo and prawns in separate sealed containers for 2 days.',
      freezing: 'Not recommended.',
      shelfLife: '2 days refrigerated.',
      reheating: 'Warm prawns and chorizo in a hot skillet for 2 minutes.'
    },
    faqs: [
      {
        question: 'Can I use pre-cooked prawns?',
        answer: 'Raw prawns are strongly recommended; pre-cooked prawns will become rubbery when reheated in the hot oil.'
      }
    ],
    relatedRecipeIds: ['ny-1', 'ny-2', 'it-6'],
    recommendedEquipmentIds: ['knives-chef-set']
  },
  {
    id: 'ny-4',
    slug: 'homemade-italian-tiramisu',
    title: 'Authentic Italian Celebration Tiramisù (Tiramisù al Mascarpone)',
    category: 'new-year',
    cuisine: 'Italian',
    countryCode: 'IT',
    difficulty: 'Easy',
    prepTimeMinutes: 30,
    cookTimeMinutes: 0,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=80',
    summary: 'The queen of Italian no-bake holiday desserts: espresso-soaked Savoiardi ladyfingers layered with an airy mascarpone cream, dark Marsala wine, and a snow of Dutch cocoa powder.',
    story: 'Meaning "pick me up" in Italian, Tiramisù was born in Treviso and has become the quintessential celebration dessert worldwide. With zero baking required, its velvety layers of Italian mascarpone whipped with egg yolks, sugar, and Marsala wine provide a decadent finale to ring in the New Year.',
    whyYouWillLoveIt: [
      'No oven required: simple assembly that can be prepared 24-48 hours ahead.',
      'Spoon-tender layers of espresso-kissed ladyfingers and cloud-like mascarpone custard.',
      'Intense, luxurious contrast between bitter dark cocoa and sweet creamy mascarpone.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    isNewYear: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Authentic Italian Savoiardi ladyfingers', amountMetric: '30-36 cookies', amountUS: '30-36 cookies' },
      { item: 'Italian Mascarpone cheese, cold', amountMetric: '500 g', amountUS: '18 oz' },
      { item: 'Large eggs at room temp, separated', amountMetric: '4 eggs', amountUS: '4 eggs' },
      { item: 'Fine granulated sugar', amountMetric: '100 g', amountUS: '1/2 cup' },
      { item: 'Freshly brewed strong espresso, cooled', amountMetric: '350 ml', amountUS: '1 1/2 cups' },
      { item: 'Marsala wine or dark rum', amountMetric: '45 ml', amountUS: '3 tbsp' },
      { item: 'Dutch-process unsweetened dark cocoa powder', amountMetric: '3 tbsp', amountUS: '3 tbsp', notes: 'For dusting' },
      { item: 'Pure vanilla extract & pinch of salt', amountMetric: '1 tsp vanilla, pinch salt', amountUS: '1 tsp vanilla, pinch salt' }
    ],
    equipment: [
      '9x13 inch glass or ceramic serving dish',
      'Electric stand mixer or hand mixer',
      'Shallow wide dish for dipping ladyfingers',
      'Fine-mesh sieve for cocoa dusting'
    ],
    instructions: [
      {
        step: 1,
        title: 'Whip yolks and sugar',
        instruction: 'In a large bowl, beat egg yolks and sugar with mixer for 5 minutes until pale, thick, and tripled in volume. Beat in vanilla and 2 tbsp Marsala wine.',
        sensoryCue: 'Creamy ribbons drop from beaters when lifted.'
      },
      {
        step: 2,
        title: 'Blend mascarpone gently',
        instruction: 'Gently fold cold mascarpone into yolk mixture with a rubber spatula until smooth and lump-free (do not overmix or mascarpone can separate).',
        sensoryCue: 'Silky, thick custard cream.'
      },
      {
        step: 3,
        title: 'Whip whites and fold for lightness',
        instruction: 'In a grease-free bowl, whip egg whites with pinch of salt until stiff peaks form. Gently fold whites into mascarpone cream in 3 additions.',
        sensoryCue: 'Feather-light, billowy cloud cream.'
      },
      {
        step: 4,
        title: 'Quick dip ladyfingers and layer',
        instruction: 'Combine cooled espresso and remaining 1 tbsp Marsala in shallow dish. Dip ladyfingers for just 1-2 seconds per side (do not soak). Arrange in single layer on bottom of dish. Spread half of mascarpone cream. Repeat with second layer of dipped cookies and cream.',
        sensoryCue: 'Ladyfingers absorb liquid without falling apart.'
      },
      {
        step: 5,
        title: 'Chill and dust with cocoa',
        instruction: 'Refrigerate covered for at least 6 hours (preferably overnight). Right before serving, dust generously with dark cocoa powder through a fine sieve.',
        sensoryCue: 'Pristine, velvety dark chocolate top layer.'
      }
    ],
    proTips: [
      'The golden rule of Tiramisù: dip the ladyfingers for no more than 1 to 2 seconds total! A soggy ladyfinger creates a watery pudding, whereas a quick dip allows them to soften to sponge perfection as it rests.',
      'Tiramisù tastes infinitely better on day two as the coffee, Marsala, and mascarpone harmonize.'
    ],
    variations: [
      'Amaretto Tiramisù: Replace Marsala with Italian Amaretto liqueur and top with crushed amaretti cookies.',
      'Berry Limoncello: Dip ladyfingers in Limoncello syrup and layer with lemon curd mascarpone.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally vegetarian.',
      glutenFree: 'Use certified gluten-free ladyfinger cookies.'
    },
    storageAndReheating: {
      refrigeration: 'Store tightly covered in refrigerator for up to 4 days.',
      freezing: 'Can be frozen tightly wrapped for up to 1 month. Thaw in fridge 24 hours.',
      shelfLife: '4 days refrigerated.',
      reheating: 'Serve chilled; do not heat.'
    },
    faqs: [
      {
        question: 'Are raw eggs safe in authentic Tiramisù?',
        answer: 'Traditional Italian recipe uses raw fresh eggs. If preferred, use pasteurized shell eggs, or whip yolks and sugar in a heatproof bowl over simmering water until reaching 71°C (160°F).'
      }
    ],
    relatedRecipeIds: ['cd-2', 'gf-2', 'it-2'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'mixers-stand']
  },
  {
    id: 'ny-5',
    slug: 'australian-summer-celebration-pavlova',
    title: 'New Year’s Eve Champagne Berry Pavlova Stack',
    category: 'new-year',
    cuisine: 'Australian',
    countryCode: 'AU',
    difficulty: 'Intermediate',
    prepTimeMinutes: 30,
    cookTimeMinutes: 75,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80',
    summary: 'A dramatic double-decker New Year’s meringue tower layered with Champagne-infused mascarpone cream, fresh summer berries, and edible gold leaf.',
    story: 'Ring in the New Year with a showstopping double-tier Australian pavlova. Two discs of crisp, marshmallow-hearted meringue are stacked with a decadent cream kissed by bubbly French Champagne, making it the most glamorous centerpiece for midnight festivities.',
    whyYouWillLoveIt: [
      'Breathtaking multi-tier celebration cake aesthetic.',
      'Effervescent Champagne mascarpone cream balanced by tart fresh summer berries.',
      'Crisp, delicate meringue that crackles under the cake knife.'
    ],
    dietary: ['gluten-free', 'vegetarian'],
    isHolidaySpecial: true,
    isNewYear: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Large egg whites at room temp', amountMetric: '8 whites', amountUS: '8 whites' },
      { item: 'Superfine caster sugar', amountMetric: '400 g', amountUS: '2 cups' },
      { item: 'Cornstarch & white vinegar', amountMetric: '4 tsp cornstarch, 2 tsp vinegar', amountUS: '4 tsp cornstarch, 2 tsp vinegar' },
      { item: 'Heavy whipping cream', amountMetric: '400 ml', amountUS: '1 3/4 cups' },
      { item: 'Italian Mascarpone cheese', amountMetric: '200 g', amountUS: '1 cup' },
      { item: 'Dry Champagne or Prosecco', amountMetric: '60 ml', amountUS: '1/4 cup' },
      { item: 'Powdered sugar', amountMetric: '50 g', amountUS: '1/3 cup' },
      { item: 'Fresh blackberries, raspberries, and strawberries', amountMetric: '500 g total', amountUS: '4 cups total' },
      { item: 'Edible gold leaf flakes (optional for New Year)', amountMetric: '1 sheet', amountUS: '1 sheet' }
    ],
    equipment: [
      'Two large baking sheets lined with parchment',
      'Stand mixer with stainless steel whisk',
      'Pencil and round cake pans to trace 8-inch and 6-inch circles'
    ],
    instructions: [
      {
        step: 1,
        title: 'Trace tiers and whip meringue',
        instruction: 'Trace an 8-inch circle on one parchment and a 6-inch circle on another. Whip egg whites to soft peaks; slowly add sugar one spoon at a time until glossy and stiff. Fold in cornstarch and vinegar.',
        sensoryCue: 'Thick, lustrous meringue holding sharp peaks.'
      },
      {
        step: 2,
        title: 'Shape two tiered discs',
        instruction: 'Shape larger disc on 8-inch circle and smaller disc on 6-inch circle with flat tops. Bake at 120°C (250°F) for 75 minutes. Turn off oven and let cool completely inside oven for 2 hours.',
        sensoryCue: 'Crisp ivory shell.'
      },
      {
        step: 3,
        title: 'Whip Champagne mascarpone cream',
        instruction: 'Whip heavy cream, mascarpone, powdered sugar, and Champagne until soft, spreadable peaks form.',
        sensoryCue: 'Velvety cream with sparkling wine notes.'
      },
      {
        step: 4,
        title: 'Stack and crown at midnight',
        instruction: 'Place large pavlova on serving plate. Spread with half the cream and berries. Top with smaller pavlova disc, remaining cream, berry avalanche, and touches of edible gold leaf.',
        sensoryCue: 'Glamorous, towering holiday showstopper.'
      }
    ],
    proTips: [
      'Mascarpone stabilizes the whipped cream so the top tier can rest securely without squashing the base.',
      'Assemble right before guests arrive so the meringue stays crisp.'
    ],
    variations: [
      'Passionfruit & Mango: Swap berries for tropical yellow mangoes and passionfruit.',
      'Midnight Chocolate: Drizzle melted dark chocolate over the tiers.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Naturally 100% gluten-free.',
      vegetarian: 'Naturally vegetarian.'
    },
    storageAndReheating: {
      refrigeration: 'Store baked discs unassembled at room temp for up to 3 days in an airtight container.',
      freezing: 'Do not freeze.',
      shelfLife: 'Eat within 2 hours of stacking.',
      reheating: 'Never reheat.'
    },
    faqs: [
      {
        question: 'Can children eat this recipe?',
        answer: 'You can substitute sparkling apple cider or white grape juice for the Champagne in the cream for an alcohol-free celebration.'
      }
    ],
    relatedRecipeIds: ['cd-6', 'gf-5', 'ny-4'],
    recommendedEquipmentIds: ['mixers-stand']
  },
  {
    id: 'ny-6',
    slug: 'canadian-maple-cheesecake',
    title: 'New Year’s Canadian Maple Pecan Praline Cheesecake',
    category: 'new-year',
    cuisine: 'Canadian',
    countryCode: 'CA',
    difficulty: 'Intermediate',
    prepTimeMinutes: 30,
    cookTimeMinutes: 65,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80',
    summary: 'A showstopping New Year’s baked cheesecake infused with pure Canadian amber maple syrup, baked over a ginger snap crust, and dripping with warm buttered maple pecan praline.',
    story: 'Celebrate New Year’s Eve with the liquid gold of the Canadian boreal forests. This showpiece cheesecake replaces refined white sugar with pure Grade A maple syrup, creating a custard that is silky, complex, and gently caramelized, finished with crunchy butter-toasted pecans.',
    whyYouWillLoveIt: [
      'Rich, authentic maple flavor throughout both the creamy custard and the praline sauce.',
      'Spiced ginger snap crust provides warming, zesty contrast.',
      'Warm butter pecan sauce cascades dramatically over cold, velvety cheesecake slices.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    isNewYear: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Gingersnap cookies, crushed', amountMetric: '200 g', amountUS: '2 cups' },
      { item: 'Unsalted butter, melted', amountMetric: '60 g', amountUS: '4 tbsp' },
      { item: 'Full-fat cream cheese at room temp', amountMetric: '900 g', amountUS: '4 blocks (32 oz)' },
      { item: 'Pure Canadian Grade A amber maple syrup', amountMetric: '180 ml', amountUS: '3/4 cup' },
      { item: 'Dark brown sugar', amountMetric: '50 g', amountUS: '1/4 cup' },
      { item: 'Sour cream at room temp', amountMetric: '180 ml', amountUS: '3/4 cup' },
      { item: 'Large eggs at room temp', amountMetric: '4 whole', amountUS: '4 whole' },
      { item: 'Pure vanilla extract & sea salt', amountMetric: '1 tsp vanilla, 1/2 tsp salt', amountUS: '1 tsp vanilla, 1/2 tsp salt' },
      { item: 'Raw pecan halves for praline topping', amountMetric: '150 g', amountUS: '1 1/2 cups' },
      { item: 'Heavy cream & butter for praline topping', amountMetric: '60 ml cream, 30 g butter', amountUS: '1/4 cup cream, 2 tbsp butter' },
      { item: 'Maple syrup for praline topping', amountMetric: '80 ml', amountUS: '1/3 cup' }
    ],
    equipment: [
      '9-inch springform pan',
      'Roasting pan for water bath',
      'Small saucepan for maple pecan praline'
    ],
    instructions: [
      {
        step: 1,
        title: 'Bake gingersnap crust',
        instruction: 'Preheat oven to 165°C (325°F). Mix gingersnap crumbs and melted butter. Press firmly into base of parchment-lined 9-inch springform pan. Bake 10 minutes; cool completely.',
        sensoryCue: 'Spicy, sweet gingersnap crust.'
      },
      {
        step: 2,
        title: 'Mix cream cheese and maple syrup',
        instruction: 'Beat room temperature cream cheese, maple syrup, and brown sugar on low speed until smooth. Mix in sour cream, vanilla, and salt.',
        sensoryCue: 'Pale amber, silky batter with woodsy maple aroma.'
      },
      {
        step: 3,
        title: 'Incorporate eggs and water bath bake',
        instruction: 'Add eggs one at a time on lowest speed. Pour over cooled crust. Wrap bottom of pan tightly in heavy foil. Place in roasting pan with 1 inch hot water. Bake 60-65 minutes until center has a slight jiggle. Turn off oven, crack door, and let cool 1 hour.',
        sensoryCue: 'Flat, crack-free golden top.'
      },
      {
        step: 4,
        title: 'Chill and make maple pecan praline',
        instruction: 'Chill cheesecake in fridge for 6 hours. Before serving, toast pecans in butter in a saucepan, add maple syrup and cream, and simmer 3 minutes until thick and syrupy. Cool slightly and spoon over chilled cheesecake.',
        sensoryCue: 'Warm, glossy candied pecans dripping over chilled cake.'
      }
    ],
    proTips: [
      'Pure maple syrup contains water, so baking in a water bath with a slow cooldown prevents cracks from excess steam.',
      'Pour the praline topping while slightly warm over the cold cheesecake just before slicing for temperature contrast.'
    ],
    variations: [
      'Bourbon Pecan: Add 1 tbsp Kentucky bourbon or Canadian rye to the warm praline sauce.',
      'Apple Maple: Layer spiced sautéed apples over the crust before adding cheesecake batter.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally vegetarian.',
      glutenFree: 'Use certified gluten-free gingersnaps or gluten-free graham crackers.'
    },
    storageAndReheating: {
      refrigeration: 'Store covered in refrigerator for up to 6 days.',
      freezing: 'Freeze without praline topping for up to 2 months.',
      shelfLife: '6 days refrigerated.',
      reheating: 'Serve chilled with freshly warmed praline sauce.'
    },
    faqs: [
      {
        question: 'Can I use pancake table syrup instead of pure maple syrup?',
        answer: 'No; table syrup is mostly artificial corn syrup. Only 100% pure maple syrup provides the necessary consistency and rich flavor.'
      }
    ],
    relatedRecipeIds: ['gf-4', 'cd-5', 'ny-4'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'mixers-stand']
  }
];
