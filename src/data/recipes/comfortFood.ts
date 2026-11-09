import { Recipe } from '../../types';

export const comfortFoodRecipes: Recipe[] = [
  {
    id: 'cf-1',
    slug: 'easy-homemade-italian-tomato-pasta',
    title: 'Easy Homemade Italian Tomato & Basil Pasta (Spaghetti al Pomodoro Fresco)',
    category: 'comfort-food',
    cuisine: 'Italian',
    countryCode: 'IT',
    difficulty: 'Easy',
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    servings: 4,
    featuredImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    summary: 'The ultimate comforting Italian staple: al dente spaghetti coated in a rich, sweet tomato sauce simmered with sweet garlic, whole basil leaves, high-quality olive oil, and freshly grated Parmigiano.',
    story: 'In every Italian home, the true measure of a cook is not elaborate banquet dishes, but the humble plate of pasta al pomodoro. Made from sweet plum San Marzano tomatoes, gentle garlic, and a bouquet of fresh garden basil torn by hand, this dish is pure heart: fast, affordable, deeply satisfying, and loved by every generation.',
    whyYouWillLoveIt: [
      'Simple, affordable ingredients from ordinary grocery stores transform into pure magic.',
      'Silky, natural sauce emulsified with starchy pasta water and cold olive oil.',
      'Ready in under 30 minutes from start to table on busy weeknights.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: false,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Whole peeled Italian plum tomatoes (San Marzano)', amountMetric: '800 g (2 cans)', amountUS: '2 cans (28 oz each)', notes: 'Crushed gently by hand' },
      { item: 'Italian spaghetti or rigatoni', amountMetric: '400 g', amountUS: '14 oz' },
      { item: 'Extra virgin olive oil, divided', amountMetric: '60 ml', amountUS: '4 tbsp' },
      { item: 'Garlic cloves, lightly smashed with side of knife', amountMetric: '4 cloves', amountUS: '4 cloves' },
      { item: 'Fresh sweet basil leaves', amountMetric: '1 large bunch (20 leaves)', amountUS: '1 large bunch' },
      { item: 'Aged Parmigiano-Reggiano, freshly grated', amountMetric: '60 g', amountUS: '3/4 cup' },
      { item: 'Coarse sea salt and pinch of red pepper flakes', amountMetric: 'To taste', amountUS: 'To taste' }
    ],
    equipment: [
      'Wide skillet or Dutch oven',
      'Large pasta pot',
      'Tongs for swirling pasta'
    ],
    instructions: [
      {
        step: 1,
        title: 'Gently infuse olive oil with garlic',
        instruction: 'In a wide skillet, combine 3 tbsp olive oil and smashed garlic cloves over low heat. Let garlic sizzle very gently for 4 minutes until golden and fragrant, perfuming the oil without burning.',
        sensoryCue: 'Sweet, mellow garlic aroma with gentle bubbling oil.'
      },
      {
        step: 2,
        title: 'Add crushed tomatoes and simmer',
        instruction: 'Carefully pour in hand-crushed tomatoes and a pinch of red pepper flakes. Season with 1 tsp salt. Simmer over medium-low heat for 18-20 minutes, stirring occasionally, until sauce thickens and oil floats in tiny orange beads to the surface.',
        sensoryCue: 'Rich red sauce reduces, turning sweet and deeply fragrant.'
      },
      {
        step: 3,
        title: 'Boil pasta to firm al dente',
        instruction: 'Bring a large pot of water to a rolling boil with 2 tablespoons salt. Add pasta and cook 1 minute less than package directions. Reserve 1 cup of cloudy pasta cooking water before draining.',
        sensoryCue: 'Pasta retains a firm core to finish cooking directly in sauce.'
      },
      {
        step: 4,
        title: 'Mantecare: finish pasta in sauce',
        instruction: 'Transfer hot pasta straight into the simmering tomato sauce. Tear fresh basil leaves into the pan. Drizzle with remaining 1 tbsp fresh cold olive oil and splash 1/4 cup reserved pasta water. Toss vigorously for 1 minute over medium heat.',
        sensoryCue: 'Sauce clings tight like silk velvet to every strand of pasta.'
      },
      {
        step: 5,
        title: 'Serve with grated cheese',
        instruction: 'Remove from heat, fold in freshly grated Parmigiano-Reggiano, and serve in warm bowls garnished with fresh basil leaves.',
        sensoryCue: 'Warm steam carries the perfumes of fresh basil and aged cheese.'
      }
    ],
    proTips: [
      'Hand-crushing canned whole tomatoes gives the sauce a superior, rustic texture compared to pureed passata.',
      'Smash garlic cloves lightly with the flat of a knife rather than mincing; this imparts sweet flavor without any harsh bitter bites.'
    ],
    variations: [
      'Arrabbiata: Double the garlic and add 1 tsp crushed red chili flakes for a fiery kick.',
      'Burrata Crown: Place a whole ball of fresh creamy burrata in the center of the pasta bowl before serving.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally vegetarian.',
      vegan: 'Omit Parmigiano or substitute with nutritional yeast or vegan parmesan.',
      glutenFree: 'Use certified gluten-free corn and brown rice pasta.'
    },
    storageAndReheating: {
      refrigeration: 'Store sauce separately for up to 5 days, or combined pasta for 2 days in refrigerator.',
      freezing: 'Tomato sauce freezes beautifully for up to 3 months.',
      shelfLife: '5 days refrigerated (sauce).',
      reheating: 'Warm in a skillet with 2 tbsp water over medium heat.'
    },
    faqs: [
      {
        question: 'Should I add sugar to the tomato sauce?',
        answer: 'Quality canned San Marzano tomatoes are naturally sweet and do not need sugar. If tomatoes taste acidic, let them simmer 5 minutes longer to develop natural sugars.'
      }
    ],
    relatedRecipeIds: ['cm-4', 'cf-3', 'it-2'],
    recommendedEquipmentIds: ['knives-chef-set']
  },
  {
    id: 'cf-2',
    slug: 'traditional-french-vegetable-soup',
    title: 'Traditional French Farmhouse Vegetable Soup (Soupe Paysanne aux Légumes)',
    category: 'comfort-food',
    cuisine: 'French',
    countryCode: 'FR',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    servings: 6,
    featuredImage: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    summary: 'A nourishing rustic French vegetable soup simmered with leeks, carrots, potatoes, turnip, green cabbage, fresh thyme, and enriched with a knob of butter and crusty bread.',
    story: 'Across rural France, winter evenings invariably begin with a pot of Soupe Paysanne simmering gently on the stove. Made with humble root vegetables harvested from the kitchen garden, this soothing soup warms the body and soul with pure, unadorned vegetable sweetness.',
    whyYouWillLoveIt: [
      'Wholesome, budget-friendly pantry vegetables transform into pure comfort.',
      'Naturally nourishing, vitamin-rich, and comforting on freezing winter nights.',
      'Heavenly when served with thick slices of country sourdough smeared with butter.'
    ],
    dietary: ['vegetarian', 'gluten-free'],
    isHolidaySpecial: false,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Leeks, white and pale green parts, washed and sliced', amountMetric: '2 large', amountUS: '2 large' },
      { item: 'Carrots, peeled and sliced in rounds', amountMetric: '3 medium', amountUS: '3 medium' },
      { item: 'Russet or Yukon Gold potatoes, peeled and diced', amountMetric: '3 medium', amountUS: '3 medium' },
      { item: 'Small white turnip, peeled and diced', amountMetric: '1 whole', amountUS: '1 whole' },
      { item: 'Savoy cabbage, core removed and shredded', amountMetric: '200 g', amountUS: '2 cups' },
      { item: 'Unsalted butter or extra virgin olive oil', amountMetric: '30 g', amountUS: '2 tbsp' },
      { item: 'Good vegetable stock or filtered water', amountMetric: '1.5 liters', amountUS: '6 cups' },
      { item: 'Bouquet garni (fresh thyme sprigs, bay leaf, parsley stems)', amountMetric: '1 bundle', amountUS: '1 bundle' },
      { item: 'Sea salt and freshly ground white pepper', amountMetric: 'To taste', amountUS: 'To taste' },
      { item: 'Crusty rustic country bread for serving', amountMetric: 'Thick slices', amountUS: 'Thick slices' }
    ],
    equipment: [
      'Large heavy Dutch oven or soup pot',
      'Chef knife and cutting board',
      'Ladle'
    ],
    instructions: [
      {
        step: 1,
        title: 'Sweat leeks gently in butter',
        instruction: 'Melt butter in a large Dutch oven over medium-low heat. Add sliced leeks with a pinch of salt. Sweat gently for 8-10 minutes until soft and translucent without browning.',
        sensoryCue: 'Sweet, buttery aroma of softened leeks.'
      },
      {
        step: 2,
        title: 'Add root vegetables and aromatics',
        instruction: 'Add carrots, potatoes, turnip, and bouquet garni. Stir to coat in the buttery leek fond for 2 minutes.',
        sensoryCue: 'Vibrant orange, white, and emerald vegetables glisten in pot.'
      },
      {
        step: 3,
        title: 'Simmer until vegetables are meltingly tender',
        instruction: 'Pour in hot vegetable stock or water. Bring to a boil, then reduce heat to low, cover partially, and simmer gently for 20 minutes until potatoes and carrots are tender.',
        sensoryCue: 'Gentle bubbling broth with herbal thyme notes.'
      },
      {
        step: 4,
        title: 'Add shredded cabbage and finish',
        instruction: 'Add shredded Savoy cabbage; simmer 10 minutes more until cabbage is tender. Discard bouquet garni. Taste and adjust seasoning with sea salt and white pepper. Lightly crush a few potato pieces against the side of pot with a wooden spoon to give broth natural body.',
        sensoryCue: 'Silky, soothing farmhouse soup.'
      }
    ],
    proTips: [
      'Crushing a couple of potato cubes against the side of the pot at the end releases natural starch, giving the broth a velvety, comforting consistency without needing flour or cream.',
      'Thoroughly wash sliced leeks in a bowl of cold water, as sand easily traps between their layers.'
    ],
    variations: [
      'Soupe au Pistou: Swirl a spoonful of garlicky basil and olive oil paste into each bowl.',
      'Smoked Sausage: Add sliced French smoked sausage (Morteau or Montbéliard) for hearty meat flavor.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally 100% vegetarian.',
      vegan: 'Use olive oil instead of butter.',
      glutenFree: 'Naturally 100% gluten-free.'
    },
    storageAndReheating: {
      refrigeration: 'Store in refrigerator in sealed container for up to 5 days.',
      freezing: 'Freeze in containers for up to 3 months.',
      shelfLife: '5 days refrigerated.',
      reheating: 'Warm gently in saucepan over medium heat.'
    },
    faqs: [
      {
        question: 'Can I blend this soup smooth?',
        answer: 'Yes! Blending this soup produces the famous French Potage Bonne Femme (velvety leek and potato soup).'
      }
    ],
    relatedRecipeIds: ['cf-3', 'cf-4', 'vv-6'],
    recommendedEquipmentIds: ['knives-chef-set']
  },
  {
    id: 'cf-3',
    slug: 'homemade-rustic-artisan-bread',
    title: 'Homemade No-Knead Rustic Artisan Dutch Oven Bread',
    category: 'comfort-food',
    cuisine: 'International',
    countryCode: 'FR',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 45,
    servings: 10,
    featuredImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    summary: 'A golden, crackling bakery-quality boule with a blistered crust and chewy, open honeycomb crumb, created with just 4 basic ingredients and zero kneading.',
    story: 'Few aromas in the universe can match the smell of fresh bread baking in a home oven. By harnessing the time-honored slow fermentation method and baking inside a scorching lidded cast-iron Dutch oven, the trapped steam produces a shatteringly crisp, blistered mahogany crust that sings when cooling on the kitchen counter.',
    whyYouWillLoveIt: [
      'No stand mixer, no kneading, and zero baking experience required.',
      'Only 4 pantry ingredients: flour, water, salt, and a pinch of yeast.',
      'Produces the crackling, hollow-sounding crust of an artisanal French bakery.'
    ],
    dietary: ['vegan', 'vegetarian', 'dairy-free'],
    isHolidaySpecial: false,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Unbleached bread flour or all-purpose flour', amountMetric: '450 g', amountUS: '3 1/2 cups' },
      { item: 'Fine sea salt', amountMetric: '10 g', amountUS: '2 tsp' },
      { item: 'Instant yeast or active dry yeast', amountMetric: '2 g', amountUS: '1/2 tsp', notes: 'Just a tiny pinch does the work' },
      { item: 'Room temperature filtered water', amountMetric: '360 ml', amountUS: '1 1/2 cups' }
    ],
    equipment: [
      'Heavy enameled cast iron Dutch oven (4-6 quart) with lid',
      'Parchment paper',
      'Sharp razor blade (lame) or sharp paring knife for scoring',
      'Wire cooling rack'
    ],
    instructions: [
      {
        step: 1,
        title: 'Stir dough in 3 minutes (no kneading)',
        instruction: 'In a large bowl, whisk flour, salt, and yeast. Pour in water and stir with a wooden spoon or spatula for 1-2 minutes until a shaggy, wet dough forms and no dry flour remains. Cover bowl with plastic wrap.',
        sensoryCue: 'Sticky, shaggy dough.'
      },
      {
        step: 2,
        title: 'Slow overnight room-temp fermentation',
        instruction: 'Let dough rest at room temperature (around 20-22°C / 70°F) for 12 to 18 hours. The dough will double in size and become bubbly on top with a sweet, yeasty aroma.',
        sensoryCue: 'Spongy, bubbly dome with fermented sourdough-like fragrance.'
      },
      {
        step: 3,
        title: 'Shape boule and proof on parchment',
        instruction: 'Turn wet dough out onto a lightly floured surface. Fold edges into the center to form a round ball (boule). Place seam-side down onto a sheet of parchment paper. Cover loosely with a clean tea towel; rest for 45 minutes.',
        sensoryCue: 'Taut, smooth rounded ball of dough.'
      },
      {
        step: 4,
        title: 'Preheat Dutch oven scorchingly hot',
        instruction: '30 minutes before baking, place empty Dutch oven with lid inside oven and preheat to 230°C (450°F).',
        sensoryCue: 'Blisteringly hot cast iron is ready to generate intense steam.'
      },
      {
        step: 5,
        title: 'Score and bake with steam lid',
        instruction: 'Score a 1/2-inch deep cross or slash across top of boule with a sharp razor. Carefully lift dough using the parchment corners and drop into hot Dutch oven. Cover with lid. Bake covered for 30 minutes.',
        sensoryCue: 'Trapped steam causes dramatic oven spring rise.'
      },
      {
        step: 6,
        title: 'Uncover to develop deep blistered crust',
        instruction: 'Remove lid; bake uncovered for 15-18 minutes more until crust is deep chestnut brown and crackled. Cool on wire rack for at least 1 hour before slicing.',
        sensoryCue: 'Bread loaf "sings" and crackles softly as cool air hits hot crust.'
      }
    ],
    proTips: [
      'Do not cut into the hot bread right out of the oven! The crumb is still setting inside; slicing too early causes the interior to turn gummy. Wait at least 60 minutes.',
      'A hot Dutch oven functions like a professional baker\'s steam oven: the lid traps moisture evaporating from dough, creating that blistered, crackly crust.'
    ],
    variations: [
      'Rosemary Olive Boule: Fold 2 tbsp chopped fresh rosemary and 1/2 cup Kalamata olives into the dough.',
      'Seeded Crust: Brush dough with water before scoring and roll in sesame, poppy, and flax seeds.'
    ],
    dietaryAdaptations: {
      vegan: '100% naturally vegan and dairy-free.',
      dairyFree: 'Naturally dairy-free.'
    },
    storageAndReheating: {
      refrigeration: 'Do not refrigerate bread. Store cut-side down on wooden board for 2 days, or in a paper bag for 4 days.',
      freezing: 'Freeze sliced bread in a zip-top bag for up to 3 months; toast directly from frozen.',
      shelfLife: '4 days room temp; 90 days frozen.',
      reheating: 'Warm whole unsliced loaf in 180°C (350°F) oven for 8 minutes to restore crispness.'
    },
    faqs: [
      {
        question: 'Why is my dough so wet and sticky?',
        answer: 'High hydration (around 75-80%) is what produces that coveted light, airy honeycomb interior and large bubbles.'
      }
    ],
    relatedRecipeIds: ['cf-1', 'cf-2', 'cf-4'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'knives-chef-set']
  },
  {
    id: 'cf-4',
    slug: 'family-style-chicken-casserole',
    title: 'Family-Style French Braised Chicken Casserole with Bacon & Mushrooms (Chasseur)',
    category: 'comfort-food',
    cuisine: 'French',
    countryCode: 'FR',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    servings: 6,
    featuredImage: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80',
    summary: 'Golden, crispy chicken thighs slow-braised in a savory reduction of dry white wine, smoky bacon lardons, button mushrooms, sweet shallots, and fresh tarragon.',
    story: 'Known in French bistros as Poulet Chasseur (Hunter\'s Chicken), this hearty one-pot braise is the quintessential family dinner. Browned chicken thighs simmer gently in white wine and chicken broth, absorbing the smoky richness of bacon and earthy mushrooms into a rich, glossy gravy that begs for mashed potatoes or egg noodles.',
    whyYouWillLoveIt: [
      'Crispy, golden chicken skin and fall-apart tender dark meat.',
      'Rich one-pot pan sauce infused with smoky bacon, shallots, and tarragon.',
      'Minimal cleanup: entire meal cooks in a single heavy Dutch oven.'
    ],
    dietary: ['dairy-free'],
    isHolidaySpecial: false,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Bone-in, skin-on chicken thighs', amountMetric: '8 thighs (1.2 kg)', amountUS: '8 thighs (2.5 lbs)' },
      { item: 'Smoked bacon or French lardons, chopped', amountMetric: '150 g', amountUS: '5 oz' },
      { item: 'Cremini or button mushrooms, quartered', amountMetric: '300 g', amountUS: '3 cups' },
      { item: 'French shallots, halved or diced', amountMetric: '4 whole', amountUS: '4 whole' },
      { item: 'Garlic cloves, minced', amountMetric: '3 cloves', amountUS: '3 cloves' },
      { item: 'Dry white wine (Sauvignon Blanc or Chardonnay)', amountMetric: '200 ml', amountUS: '3/4 cup' },
      { item: 'Rich chicken broth', amountMetric: '300 ml', amountUS: '1 1/4 cups' },
      { item: 'Tomato paste & all-purpose flour', amountMetric: '1 tbsp each', amountUS: '1 tbsp each' },
      { item: 'Fresh tarragon and flat-leaf parsley, chopped', amountMetric: '2 tbsp each', amountUS: '2 tbsp each' },
      { item: 'Olive oil, salt, and freshly ground black pepper', amountMetric: 'To taste', amountUS: 'To taste' }
    ],
    equipment: [
      'Large heavy Dutch oven or enameled cast iron braiser',
      'Tongs and wooden spoon'
    ],
    instructions: [
      {
        step: 1,
        title: 'Crisp bacon lardons',
        instruction: 'In a large Dutch oven, cook chopped bacon over medium heat until golden and crisp. Remove with slotted spoon to a plate, leaving rendered bacon fat in pan.',
        sensoryCue: 'Sizzling bacon with rich savory aroma.'
      },
      {
        step: 2,
        title: 'Hard sear chicken thighs',
        instruction: 'Season chicken thighs generously with salt and pepper. Place skin-side down in the hot bacon fat. Sear undisturbed for 7-8 minutes until skin is deeply browned and crisp. Flip and cook 3 minutes. Transfer chicken to plate.',
        sensoryCue: 'Crisp mahogany chicken skin and sizzle.'
      },
      {
        step: 3,
        title: 'Sauté mushrooms and shallots',
        instruction: 'Add quartered mushrooms and shallots to the pan drippings. Sauté for 5-6 minutes until mushrooms brown. Stir in garlic and tomato paste for 1 minute. Sprinkle with 1 tbsp flour, stirring 1 minute to coat.',
        sensoryCue: 'Caramelized mushrooms and sweet cooked shallots.'
      },
      {
        step: 4,
        title: 'Deglaze with white wine and braise',
        instruction: 'Pour in white wine, scraping up all flavorful browned bits from the pan bottom. Simmer 3 minutes until wine reduces by half. Stir in chicken broth and crisped bacon. Nest chicken thighs skin-side up on top of vegetables (keep skin above liquid to stay crisp). Simmer partially covered on low for 30 minutes.',
        sensoryCue: 'Rich, bubbling savory gravy.'
      },
      {
        step: 5,
        title: 'Finish with fresh herbs',
        instruction: 'Remove lid, simmer 5 minutes to thicken sauce slightly, and stir in fresh chopped tarragon and parsley. Serve directly from the Dutch oven.',
        sensoryCue: 'Anise-like aroma of fresh tarragon melts into the rich wine gravy.'
      }
    ],
    proTips: [
      'Keep the chicken skin sitting above the braising liquid; this ensures the skin stays crackly-crisp while the meat below braises to melting tenderness.',
      'Fresh tarragon is the hallmark of classic French hunter\'s sauce; add it right at the end to keep its delicate herbal brightness.'
    ],
    variations: [
      'Coq au Vin Style: Replace white wine with full-bodied dry red wine (Pinot Noir or Burgundy).',
      'Creamy Mustard Finish: Stir in 2 tablespoons of French crème fraîche and 1 tablespoon Dijon mustard before serving.'
    ],
    dietaryAdaptations: {
      dairyFree: 'Naturally 100% dairy-free.',
      glutenFree: 'Substitute 1 tbsp cornstarch slurry for wheat flour to thicken the braise.'
    },
    storageAndReheating: {
      refrigeration: 'Store in refrigerator in covered dish for up to 4 days.',
      freezing: 'Freeze chicken and sauce for up to 2 months.',
      shelfLife: '4 days refrigerated.',
      reheating: 'Warm covered in 180°C (350°F) oven for 15 minutes.'
    },
    faqs: [
      {
        question: 'Can I use chicken breasts instead of thighs?',
        answer: 'Bone-in thighs provide much greater juiciness and flavor during braising. If using breasts, shorten cooking time to 15 minutes so they don\'t dry out.'
      }
    ],
    relatedRecipeIds: ['cm-3', 'cf-2', 'cf-6'],
    recommendedEquipmentIds: ['roasting-pan-deluxe', 'knives-chef-set']
  },
  {
    id: 'cf-5',
    slug: 'easy-homemade-apple-crumble',
    title: 'Easy Homemade Cinnamon Spiced Apple Crumble with Oat Streusel',
    category: 'comfort-food',
    cuisine: 'British',
    countryCode: 'GB',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 40,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=1200&q=80',
    summary: 'Warm, bubbling Bramley and Honeycrisp apples tossed with cinnamon, brown sugar, and lemon, blanketed under a golden, buttery rolled oat streusel crust.',
    story: 'Born in Britain during World War II rationing when pie pastry ingredients were scarce, the humble apple crumble quickly became the world\'s most cherished pudding. When tart apples break down into sweet, tender compote under a hill of buttery brown sugar oats, it fills the entire home with cozy autumn and winter warmth.',
    whyYouWillLoveIt: [
      'Simple 15-minute prep with zero pastry rolling or chilling.',
      'Perfect contrast: crunchy, buttery oat streusel over bubbling soft spiced apples.',
      'Unforgettable served steaming hot with a scoop of melting vanilla ice cream or warm custard.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: false,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Tart baking apples (Granny Smith or Honeycrisp), peeled, cored, and sliced', amountMetric: '1.2 kg (6-7 apples)', amountUS: '6-7 large apples' },
      { item: 'Lemon juice & cornstarch', amountMetric: '1 tbsp each', amountUS: '1 tbsp each', notes: 'Thickens apple juices' },
      { item: 'Ground cinnamon & ground nutmeg', amountMetric: '1.5 tsp cinnamon, 1/4 tsp nutmeg', amountUS: '1.5 tsp cinnamon, 1/4 tsp nutmeg' },
      { item: 'Dark brown sugar for apples', amountMetric: '50 g', amountUS: '1/4 cup' },
      { item: 'Rolled old-fashioned oats', amountMetric: '120 g', amountUS: '1 1/4 cups' },
      { item: 'All-purpose flour', amountMetric: '120 g', amountUS: '1 cup' },
      { item: 'Dark brown sugar for crumble', amountMetric: '100 g', amountUS: '1/2 cup' },
      { item: 'Cold unsalted butter, cubed', amountMetric: '120 g', amountUS: '1/2 cup' },
      { item: 'Pinch of sea salt', amountMetric: '1/2 tsp', amountUS: '1/2 tsp' }
    ],
    equipment: [
      '9x9 inch square or round ceramic baking dish',
      'Large mixing bowl for crumble',
      'Pastry blender or your fingertips'
    ],
    instructions: [
      {
        step: 1,
        title: 'Toss spiced apples in baking dish',
        instruction: 'Preheat oven to 180°C (350°F). Grease baking dish. Toss sliced apples with lemon juice, 50g brown sugar, 1 tsp cinnamon, nutmeg, and cornstarch directly in the baking dish. Spread in an even layer.',
        sensoryCue: 'Fragrant sweet apples glistening with cinnamon glaze.'
      },
      {
        step: 2,
        title: 'Make buttery oat crumble',
        instruction: 'In a bowl, mix rolled oats, flour, remaining brown sugar, 1/2 tsp cinnamon, and salt. Rub cold cubed butter into dry ingredients with your fingertips until pea-sized crumbly clusters form.',
        sensoryCue: 'Clumpy, buttery streusel that holds together when squeezed.'
      },
      {
        step: 3,
        title: 'Blanket apples generously',
        instruction: 'Scatter crumble evenly over the apples, squeezing some into larger crunchy clusters. Do not press down flat.',
        sensoryCue: 'Thick, rustic blanket of buttery oats covering apples completely.'
      },
      {
        step: 4,
        title: 'Bake until bubbling and golden',
        instruction: 'Bake for 38-42 minutes until topping is deep golden brown and crisp, and thick spiced apple juices bubble vigorously around edges. Rest 10 minutes before serving with vanilla ice cream or warm custard.',
        sensoryCue: 'Toasted oats aroma and bubbling amber apple syrup.'
      }
    ],
    proTips: [
      'Use cold butter and rub with fingertips quickly so the butter stays cold; this creates large, crisp, crunchy streusel nuggets.',
      'A mix of tart Granny Smith and sweet Honeycrisp apples delivers both melting softness and juicy apple chunks.'
    ],
    variations: [
      'Blackberry Apple: Toss 1 cup of fresh blackberries with the apples.',
      'Spiced Walnut Crumble: Add 1/2 cup chopped toasted walnuts to the crumble topping.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally 100% vegetarian.',
      glutenFree: 'Use certified gluten-free oats and 1:1 gluten-free flour in the crumble.',
      vegan: 'Use solid coconut oil or vegan butter block in place of dairy butter.'
    },
    storageAndReheating: {
      refrigeration: 'Store covered in refrigerator for up to 4 days.',
      freezing: 'Freeze baked crumble wrapped in foil for up to 2 months.',
      shelfLife: '4 days refrigerated.',
      reheating: 'Warm in 180°C (350°F) oven for 10 minutes to re-crisp topping.'
    },
    faqs: [
      {
        question: 'Why did my crumble turn soggy?',
        answer: 'Adding 1 tablespoon of cornstarch with the apples thickens excess fruit juices into a glossy jam rather than pooling liquid.'
      }
    ],
    relatedRecipeIds: ['db-1', 'cf-1', 'cd-5'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'cf-6',
    slug: 'creamy-homemade-vegetable-gratin',
    title: 'Classic Creamy French Potato and Leek Gratin (Gratin Dauphinois)',
    category: 'comfort-food',
    cuisine: 'French',
    countryCode: 'FR',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 60,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80',
    summary: 'Thinly sliced golden potatoes layered with sweet braised leeks, infused with garlic cream, freshly grated nutmeg, and baked until bubbling beneath a bronzed Gruyère crust.',
    story: 'From the Dauphiné region in the French Alps, Gratin Dauphinois is universally revered as the king of side dishes. While purists debate cheese versus no cheese, this version incorporates sweet tender winter leeks and aged French Gruyère, creating a decadent, bubbling gratin that elevates any holiday roast or weeknight feast.',
    whyYouWillLoveIt: [
      'Meltingly tender layers of paper-thin potatoes bathed in garlic-scented heavy cream.',
      'Sweet, buttery leeks layered throughout for deep flavor.',
      'Irresistible golden, blistered Gruyère cheese crust with crunchy corners.'
    ],
    dietary: ['vegetarian', 'gluten-free'],
    isHolidaySpecial: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Yukon Gold or Russet potatoes, peeled', amountMetric: '1.2 kg', amountUS: '2.5 lbs', notes: 'Sliced 3mm (1/8-inch) thin on mandoline' },
      { item: 'Leeks, white and pale green parts, washed and thinly sliced', amountMetric: '2 medium', amountUS: '2 medium' },
      { item: 'Heavy whipping cream', amountMetric: '400 ml', amountUS: '1 3/4 cups' },
      { item: 'Whole milk', amountMetric: '200 ml', amountUS: '3/4 cup' },
      { item: 'Garlic cloves, crushed', amountMetric: '3 cloves', amountUS: '3 cloves' },
      { item: 'Freshly grated nutmeg', amountMetric: '1/2 tsp', amountUS: '1/2 tsp' },
      { item: 'Aged French Gruyère cheese, freshly grated', amountMetric: '150 g', amountUS: '1.5 cups' },
      { item: 'Unsalted butter for dish and sautéing leeks', amountMetric: '30 g', amountUS: '2 tbsp' },
      { item: 'Sea salt and freshly ground white pepper', amountMetric: 'To taste', amountUS: 'To taste' }
    ],
    equipment: [
      '2-quart shallow ceramic or enameled baking gratin dish',
      'Mandoline or sharp chef knife for uniform slicing',
      'Saucepan for infusing cream'
    ],
    instructions: [
      {
        step: 1,
        title: 'Infuse garlic cream and sauté leeks',
        instruction: 'In a saucepan, heat cream, milk, crushed garlic, nutmeg, 1 tsp salt, and white pepper until simmering. Remove from heat and steep 10 minutes. In a skillet, sauté leeks in 1 tbsp butter for 5 minutes until soft and sweet.',
        sensoryCue: 'Rich, garlicky cream with fragrant sweet nutmeg.'
      },
      {
        step: 2,
        title: 'Rub dish and slice potatoes (do not rinse)',
        instruction: 'Preheat oven to 180°C (350°F). Rub baking dish with cut garlic clove and grease with remaining butter. Slice potatoes thinly. Do NOT rinse sliced potatoes; their surface starch is what thickens the cream.',
        sensoryCue: 'Uniform potato rounds ready to absorb cream.'
      },
      {
        step: 3,
        title: 'Layer potatoes, leeks, and cream',
        instruction: 'Arrange 1/3 of potato slices overlapping in baking dish. Season with salt and pepper, scatter half the sautéed leeks, and sprinkle 1/3 of Gruyère. Repeat layers, ending with a top layer of potatoes. Pour strained warm garlic cream evenly over the top.',
        sensoryCue: 'Cream rises just below the surface of the top potato layer.'
      },
      {
        step: 4,
        title: 'Top with cheese and bake to golden bubble',
        instruction: 'Sprinkle remaining Gruyère on top. Bake for 55-60 minutes until potatoes are completely tender when pierced with a knife, cream is absorbed, and top is a glorious bubbling, bronzed crust.',
        sensoryCue: 'Deep golden-brown bubbling cheese crust with intoxicating aromas.'
      },
      {
        step: 5,
        title: 'Rest 15 minutes before serving',
        instruction: 'Let gratin stand on counter for 15 minutes before serving. This allows the cream to set so slices hold their gorgeous layered structure.',
        sensoryCue: 'Layers set firmly for clean slicing.'
      }
    ],
    proTips: [
      'Never wash or soak sliced potatoes in water! The natural starch on the potato slices is the secret that thickens the cream into a velvety sauce without any flour.',
      'Use Yukon Gold potatoes for the best natural buttery texture and rich yellow hue.'
    ],
    variations: [
      'Herb Gratin: Add fresh thyme and rosemary leaves between layers.',
      'Truffle Gratin: Drizzle a few drops of white truffle oil into the warm cream.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally 100% vegetarian.',
      glutenFree: 'Naturally 100% gluten-free.'
    },
    storageAndReheating: {
      refrigeration: 'Store covered in refrigerator for up to 4 days.',
      freezing: 'Freeze baked gratin wrapped tightly in foil for up to 1 month.',
      shelfLife: '4 days refrigerated.',
      reheating: 'Warm covered with foil in 180°C (350°F) oven for 15 minutes.'
    },
    faqs: [
      {
        question: 'Why did my cream curdle?',
        answer: 'Using low-fat milk causes curdling under high heat. Always use heavy whipping cream (minimum 35% milkfat) which emulsifies smoothly with the potato starch.'
      }
    ],
    relatedRecipeIds: ['cm-1', 'cm-2', 'cf-4'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  }
];
