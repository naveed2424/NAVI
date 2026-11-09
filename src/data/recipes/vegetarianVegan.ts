import { Recipe } from '../../types';

export const vegetarianVeganRecipes: Recipe[] = [
  {
    id: 'vv-1',
    slug: 'homemade-mushroom-and-chestnut-wellington',
    title: 'Homemade Wild Mushroom and Roasted Chestnut Wellington',
    category: 'vegetarian-vegan',
    cuisine: 'British',
    countryCode: 'GB',
    difficulty: 'Intermediate',
    prepTimeMinutes: 45,
    cookTimeMinutes: 40,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    summary: 'A dramatic festive plant-based centerpiece: portobello and cremini mushrooms sauteed with sweet roasted chestnuts, wilted spinach, caramelized shallots, and fresh thyme, wrapped in golden puff pastry.',
    story: 'For a memorable holiday meal, plant-based dining deserves a centerpiece every bit as glorious and hearty as traditional roasts. This Mushroom and Chestnut Wellington combines the deep umami of wild forest mushrooms with the natural sweetness of roasted French chestnuts and a bed of garlic-wilted baby spinach, creating a satisfying feast wrapped in flaky pastry.',
    whyYouWillLoveIt: [
      'Deep, savory umami depth that satisfies vegetarians and meat-lovers alike.',
      'Shatteringly flaky golden puff pastry with ornate scored patterns.',
      'Can be assembled completely a day ahead and baked fresh on Christmas Day.'
    ],
    dietary: ['vegetarian', 'vegan'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'All-butter or plant-based puff pastry sheet', amountMetric: '500 g', amountUS: '1 lb', notes: 'Cold and thawed' },
      { item: 'Cremini and portobello mushrooms, finely chopped', amountMetric: '600 g', amountUS: '1.3 lbs' },
      { item: 'Cooked peeled chestnuts, roughly crumbled', amountMetric: '200 g', amountUS: '1.5 cups', notes: 'Vacuum packed or roasted' },
      { item: 'Fresh baby spinach', amountMetric: '250 g', amountUS: '4 cups' },
      { item: 'Shallots & garlic cloves, minced', amountMetric: '3 shallots, 4 garlic cloves', amountUS: '3 shallots, 4 garlic cloves' },
      { item: 'Fresh thyme & rosemary leaves, chopped', amountMetric: '1 tbsp each', amountUS: '1 tbsp each' },
      { item: 'Dry white wine or red wine', amountMetric: '60 ml', amountUS: '1/4 cup' },
      { item: 'Panko breadcrumbs or toasted sourdough crumbs', amountMetric: '50 g', amountUS: '1/2 cup', notes: 'Absorbs juices to keep pastry crisp' },
      { item: 'Olive oil or plant butter', amountMetric: '3 tbsp', amountUS: '3 tbsp' },
      { item: 'Almond milk or egg wash for glaze', amountMetric: '2 tbsp', amountUS: '2 tbsp' }
    ],
    equipment: [
      'Heavy skillet for cooking mushrooms',
      'Food processor for quick chopping',
      'Baking sheet lined with parchment paper',
      'Paring knife for pastry scoring'
    ],
    instructions: [
      {
        step: 1,
        title: 'Wilt spinach and squeeze completely dry',
        instruction: 'Wilt spinach in a dry skillet with a pinch of salt for 2 minutes. Transfer to a colander, cool, and squeeze out every drop of moisture with your hands or a clean tea towel. Chop roughly.',
        sensoryCue: 'Spinach becomes intensely concentrated and completely dry to touch.'
      },
      {
        step: 2,
        title: 'Cook mushroom duxelles until dry',
        instruction: 'In a large skillet, sauté shallots and garlic in olive oil for 2 minutes. Add chopped mushrooms and herbs. Cook on medium-high for 12-15 minutes until all released juices evaporate completely. Deglaze with wine; cook 2 more minutes until dry. Fold in chestnuts and breadcrumbs; cool completely.',
        sensoryCue: 'Rich, caramelized mushroom paste with zero liquid pooling.'
      },
      {
        step: 3,
        title: 'Roll and assemble the Wellington',
        instruction: 'Roll puff pastry out on parchment to a 12x14 inch rectangle. Spread wilted spinach in an even layer down the center third. Mound the cooled mushroom chestnut filling over the spinach, pressing into a firm, neat log.',
        sensoryCue: 'Compact savory filling encased in cold pastry.'
      },
      {
        step: 4,
        title: 'Wrap, seal, and score',
        instruction: 'Fold pastry sides over filling, overlapping slightly. Trim excess dough and tuck ends under. Flip roll so seam is on the bottom. Brush with plant milk or egg wash. Score decorative diagonal crisscrosses gently on top with paring knife. Chill 20 minutes.',
        sensoryCue: 'Glistening, tailored parcel ready for high heat.'
      },
      {
        step: 5,
        title: 'Bake to deep golden crisp',
        instruction: 'Preheat oven to 200°C (400°F). Bake for 35-40 minutes until pastry is puffed, deeply bronzed, and crisp on bottom. Rest 10 minutes before slicing with a serrated knife.',
        sensoryCue: 'Crisp pastry crunch when sliced reveals jewel-like mushroom chestnut mosaic.'
      }
    ],
    proTips: [
      'Squeezing the spinach dry and evaporating all mushroom liquid are the two critical steps to avoid a soggy bottom crust.',
      'Let the filling cool completely to room temperature before placing it on the pastry; warm filling will melt pastry butter.'
    ],
    variations: [
      'Cranberry Layer: Add a thin layer of tart spiced cranberry sauce between the spinach and mushroom filling.',
      'Butternut Swirl: Add roasted spiced squash puree to the core.'
    ],
    dietaryAdaptations: {
      vegan: 'Use commercial vegan puff pastry (most store-bought puff pastry is made with vegetable shortening) and glaze with plant milk.',
      glutenFree: 'Use gluten-free puff pastry sheets and gluten-free breadcrumbs.'
    },
    storageAndReheating: {
      refrigeration: 'Store baked leftovers wrapped in foil in the fridge for up to 3 days.',
      freezing: 'Can be frozen unbaked. Bake directly from frozen, adding 15 minutes to bake time.',
      shelfLife: '3 days refrigerated.',
      reheating: 'Reheat in a 190°C (375°F) oven for 15 minutes to re-crisp pastry.'
    },
    faqs: [
      {
        question: 'Can I make this ahead of time?',
        answer: 'Yes! You can assemble the Wellington completely, cover it, and keep it in the refrigerator for up to 24 hours before baking.'
      }
    ],
    relatedRecipeIds: ['cm-5', 'vv-3', 'vv-4'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'knives-chef-set']
  },
  {
    id: 'vv-2',
    slug: 'vegetarian-christmas-lasagna',
    title: 'Vegetarian Holiday White Lasagna with Roasted Butternut & Wild Mushrooms',
    category: 'vegetarian-vegan',
    cuisine: 'Italian',
    countryCode: 'IT',
    difficulty: 'Intermediate',
    prepTimeMinutes: 45,
    cookTimeMinutes: 50,
    servings: 10,
    featuredImage: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1200&q=80',
    summary: 'A luxurious holiday white lasagna layered with roasted sweet butternut squash puree, garlic-sautéed wild mushrooms, fresh sage béchamel, and golden Fontina and Parmesan cheeses.',
    story: 'In Northern Italy, white lasagnas (lasagne bianche) are a celebrated winter holiday tradition. Skipping heavy red sauce in favor of sweet caramelized roasted butternut squash, fragrant forest mushrooms, and an aromatic sage-infused béchamel, this dish captures all the rich comforts of winter cooking.',
    whyYouWillLoveIt: [
      'Velvety balance of sweet roasted squash, earthy mushrooms, and savory cheeses.',
      'Infused with browned butter and crispy fried sage leaves.',
      'Spectacular holiday presentation with bubbling golden cheesy crust.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Fresh or oven-ready lasagna noodles', amountMetric: '400 g', amountUS: '14 oz' },
      { item: 'Butternut squash, peeled and cubed', amountMetric: '800 g', amountUS: '1 large (5 cups)' },
      { item: 'Wild mushrooms (cremini, shiitake, chanterelle)', amountMetric: '400 g', amountUS: '4 cups', notes: 'Sliced' },
      { item: 'Whole milk', amountMetric: '800 ml', amountUS: '3 1/3 cups' },
      { item: 'Unsalted butter & flour', amountMetric: '60 g each', amountUS: '4 tbsp each' },
      { item: 'Fresh sage leaves', amountMetric: '15 leaves', amountUS: '15 leaves' },
      { item: 'Italian Fontina or shredded mozzarella', amountMetric: '200 g', amountUS: '2 cups' },
      { item: 'Parmigiano-Reggiano, freshly grated', amountMetric: '100 g', amountUS: '1 cup' },
      { item: 'Garlic cloves, minced & ground nutmeg', amountMetric: '3 cloves garlic, 1/2 tsp nutmeg', amountUS: '3 cloves garlic, 1/2 tsp nutmeg' },
      { item: 'Olive oil, salt, and pepper', amountMetric: '2 tbsp olive oil', amountUS: '2 tbsp olive oil' }
    ],
    equipment: [
      '9x13 inch ceramic baking dish',
      'Baking sheet for roasting squash',
      'Medium saucepan and whisk for sage béchamel'
    ],
    instructions: [
      {
        step: 1,
        title: 'Roast squash and sauté mushrooms',
        instruction: 'Preheat oven to 200°C (400°F). Toss cubed squash with olive oil, salt, and pepper. Roast for 25 minutes until caramelized and tender; mash roughly with a fork. In a skillet, sauté mushrooms with garlic and olive oil until browned and dry.',
        sensoryCue: 'Sweet caramelized roasted aroma and browned mushrooms.'
      },
      {
        step: 2,
        title: 'Make fresh sage béchamel',
        instruction: 'Melt butter in saucepan, add fresh sage leaves, and cook 2 minutes until butter sizzles and sage is fragrant. Whisk in flour for 1 minute. Slowly whisk in warm milk until smooth. Simmer 3 minutes until thickened. Stir in nutmeg, salt, and pepper.',
        sensoryCue: 'Creamy white sauce scented with herbaceous sage.'
      },
      {
        step: 3,
        title: 'Layer the lasagna',
        instruction: 'Spread a ladle of béchamel on the bottom of 9x13 baking dish. Lay pasta sheets. Layer with mashed squash, sautéed mushrooms, Fontina cheese, béchamel, and Parmesan. Repeat for 4-5 layers, finishing with béchamel, Fontina, and remaining Parmesan.',
        sensoryCue: 'Layers reach neatly to top of baking pan.'
      },
      {
        step: 4,
        title: 'Bake covered then uncovered',
        instruction: 'Cover loosely with foil and bake at 180°C (350°F) for 25 minutes. Remove foil and bake 20-25 minutes more until golden brown and bubbling enthusiastically.',
        sensoryCue: 'Molten golden cheese crust with crisp browned edges.'
      },
      {
        step: 5,
        title: 'Rest before serving',
        instruction: 'Allow lasagna to settle on counter for 15-20 minutes before slicing into neat squares.',
        sensoryCue: 'Layers set firmly, revealing distinct squash and mushroom layers.'
      }
    ],
    proTips: [
      'Mashing the roasted squash roughly rather than pureeing it completely gives the lasagna wonderful rustic texture and body.',
      'Brown the butter slightly when frying the sage leaves for an extra nutty aroma.'
    ],
    variations: [
      'Kale & Gorgonzola: Add wilted lacinato kale and small crumbles of mild gorgonzola.',
      'Roasted Garlic: Roast an entire head of garlic alongside the squash and blend into the béchamel.'
    ],
    dietaryAdaptations: {
      vegetarian: '100% vegetarian holiday classic.',
      glutenFree: 'Use gluten-free lasagna sheets and 1:1 gluten-free flour in béchamel.'
    },
    storageAndReheating: {
      refrigeration: 'Store covered in refrigerator for up to 4 days.',
      freezing: 'Freeze assembled unbaked lasagna for up to 2 months. Bake from frozen covered with foil for 1 hour.',
      shelfLife: '4 days refrigerated.',
      reheating: 'Warm slice covered with foil in 180°C (350°F) oven for 15 minutes.'
    },
    faqs: [
      {
        question: 'Can I use frozen butternut squash?',
        answer: 'Yes! Thaw frozen squash completely, drain excess water thoroughly on paper towels, and roast as directed.'
      }
    ],
    relatedRecipeIds: ['cm-4', 'vv-1', 'vv-4'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'vv-3',
    slug: 'vegan-roasted-vegetable-tart',
    title: 'Rustic Vegan Roasted Winter Vegetable and Rosemary Galette',
    category: 'vegetarian-vegan',
    cuisine: 'French',
    countryCode: 'FR',
    difficulty: 'Easy',
    prepTimeMinutes: 30,
    cookTimeMinutes: 35,
    servings: 6,
    featuredImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    summary: 'A free-form French galette crust made with olive oil and thyme, folded around a creamy roasted garlic cashew cream, sweet caramelized beets, carrots, and parsnips.',
    story: 'French galettes celebrate the effortless beauty of rustic home baking. Without requiring fussy tart pans or blind baking, this vegan tart folds a crisp, olive oil-infused crust over slow-roasted winter root vegetables and a velvety cashew spread, creating an artisanal centerpiece perfect for festive tables.',
    whyYouWillLoveIt: [
      'Naturally flaky, crumbly olive oil crust with zero butter.',
      'Velvety dairy-free roasted garlic and herb cashew cream base.',
      'Jewel-toned arrangement of caramelized heirloom beets, sweet carrots, and parsnips.'
    ],
    dietary: ['vegan', 'vegetarian', 'dairy-free'],
    isHolidaySpecial: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'All-purpose flour or spelt flour', amountMetric: '240 g', amountUS: '2 cups' },
      { item: 'Extra virgin olive oil', amountMetric: '80 ml', amountUS: '1/3 cup' },
      { item: 'Ice cold water', amountMetric: '60 - 80 ml', amountUS: '1/4 - 1/3 cup' },
      { item: 'Raw cashews, soaked in hot water for 30 minutes', amountMetric: '150 g', amountUS: '1 cup' },
      { item: 'Nutritional yeast & lemon juice', amountMetric: '2 tbsp yeast, 1 tbsp lemon', amountUS: '2 tbsp yeast, 1 tbsp lemon' },
      { item: 'Roasted garlic cloves', amountMetric: '4 cloves', amountUS: '4 cloves' },
      { item: 'Mixed winter root vegetables (carrots, parsnips, golden beets)', amountMetric: '400 g', amountUS: '3 cups', notes: 'Thinly sliced into rounds or ribbons' },
      { item: 'Fresh rosemary and thyme leaves', amountMetric: '1 tbsp each', amountUS: '1 tbsp each' },
      { item: 'Pure maple syrup & sea salt flakes', amountMetric: '1 tbsp maple syrup, 1 tsp salt', amountUS: '1 tbsp maple syrup, 1 tsp salt' }
    ],
    equipment: [
      'Large baking sheet and parchment paper',
      'High-speed blender or food processor for cashew cream',
      'Mandoline or sharp chef knife for slicing vegetables'
    ],
    instructions: [
      {
        step: 1,
        title: 'Make the olive oil galette crust',
        instruction: 'In a bowl, mix flour, 1/2 tsp salt, and fresh thyme. Add olive oil and mix with fork until pebbly. Drizzle in ice water until dough comes together. Shape into a disc, wrap, and chill for 20 minutes.',
        sensoryCue: 'Pliable, herb-flecked dough with fragrant olive oil notes.'
      },
      {
        step: 2,
        title: 'Blend roasted garlic cashew cream',
        instruction: 'Drain soaked cashews. Blend with roasted garlic, lemon juice, nutritional yeast, 60ml warm water, and 1/2 tsp salt until ultra-creamy and thick like ricotta.',
        sensoryCue: 'Smooth, velvety savory spread.'
      },
      {
        step: 3,
        title: 'Season root vegetables',
        instruction: 'Toss sliced vegetables with 1 tbsp olive oil, maple syrup, minced rosemary, salt, and pepper in a bowl.',
        sensoryCue: 'Glistening colorful vegetable ribbons.'
      },
      {
        step: 4,
        title: 'Roll and assemble the galette',
        instruction: 'Preheat oven to 200°C (400°F). Roll dough on parchment into a 12-inch circle. Spread cashew cream across center, leaving a 2-inch border. Arrange vegetables in overlapping concentric circles on top. Fold dough borders inward, pleating casually.',
        sensoryCue: 'Rustic, jewel-toned freeform tart.'
      },
      {
        step: 5,
        title: 'Bake to golden crispness',
        instruction: 'Brush pastry rim with olive oil. Bake for 35 minutes until crust is deep golden brown and root vegetables are caramelized at edges. Garnish with fresh thyme and flaky salt.',
        sensoryCue: 'Crisp pastry cracking sound with sweet caramelized aromas.'
      }
    ],
    proTips: [
      'Slice root vegetables very thinly (2mm) so they cook through and caramelize in the same time the crust bakes.',
      'Soaking raw cashews in boiling water for 30 minutes is the secret to an impeccably smooth, dairy-free cream.'
    ],
    variations: [
      'Caramelized Onion & Fig: Spread with sweet caramelized onions and fresh figs instead of root vegetables.',
      'Mushroom Leek: Top with sautéed leeks and chanterelles.'
    ],
    dietaryAdaptations: {
      vegan: '100% plant-based vegan recipe.',
      glutenFree: 'Use 1:1 gluten-free pastry flour blend with 1/4 tsp xanthan gum.'
    },
    storageAndReheating: {
      refrigeration: 'Store covered in refrigerator for up to 3 days.',
      freezing: 'Not recommended for freezing.',
      shelfLife: '3 days refrigerated.',
      reheating: 'Warm in 190°C (375°F) oven for 10 minutes to restore crust crispness.'
    },
    faqs: [
      {
        question: 'Can I make this without a blender?',
        answer: 'You can substitute commercially prepared vegan ricotta or seasoned dairy-free cream cheese for the cashew cream.'
      }
    ],
    relatedRecipeIds: ['vv-1', 'vv-4', 'vv-6'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'knives-chef-set']
  },
  {
    id: 'vv-4',
    slug: 'stuffed-butternut-squash',
    title: 'Festive Stuffed Butternut Squash with Wild Rice, Cranberries & Pecans',
    category: 'vegetarian-vegan',
    cuisine: 'American',
    countryCode: 'US',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    servings: 6,
    featuredImage: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80',
    summary: 'Tender roasted butternut squash halves overflowing with nutty wild rice, tart dried cranberries, crunchy toasted pecans, sautéed leeks, fresh sage, and a maple orange drizzle.',
    story: 'Stuffed butternut squash is one of the most beloved and visually appealing autumn and winter dishes. Its natural sweet flesh serves as an edible bowl for fragrant wild rice cooked in vegetable stock, jeweled with ruby cranberries and buttery pecans, offering rich textures and vibrant holiday colors.',
    whyYouWillLoveIt: [
      'Stunning edible vessel presentation that looks majestic on holiday platters.',
      'Bursting with harmonious festive flavors: sweet, tart, nutty, and herbal.',
      'Naturally gluten-free, vegan, and packed with wholesome plant nutrition.'
    ],
    dietary: ['vegan', 'vegetarian', 'gluten-free', 'dairy-free'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Medium butternut squashes, halved lengthwise & seeded', amountMetric: '3 whole (6 halves)', amountUS: '3 whole (6 halves)' },
      { item: 'Wild rice and brown rice blend', amountMetric: '200 g', amountUS: '1 cup' },
      { item: 'Vegetable broth', amountMetric: '480 ml', amountUS: '2 cups' },
      { item: 'Leek, white and light green parts, washed and sliced', amountMetric: '1 large', amountUS: '1 large' },
      { item: 'Celery stalks, diced', amountMetric: '2 stalks', amountUS: '2 stalks' },
      { item: 'Dried tart cranberries', amountMetric: '75 g', amountUS: '1/2 cup' },
      { item: 'Pecans, toasted and chopped', amountMetric: '60 g', amountUS: '1/2 cup' },
      { item: 'Fresh sage & thyme, chopped', amountMetric: '1 tbsp each', amountUS: '1 tbsp each' },
      { item: 'Pure maple syrup & orange juice', amountMetric: '2 tbsp each', amountUS: '2 tbsp each' },
      { item: 'Olive oil, salt, and black pepper', amountMetric: '2 tbsp olive oil', amountUS: '2 tbsp olive oil' }
    ],
    equipment: [
      'Large roasting pan',
      'Medium saucepan with lid for rice',
      'Skillet for sautéing aromatics'
    ],
    instructions: [
      {
        step: 1,
        title: 'Roast squash halves',
        instruction: 'Preheat oven to 200°C (400°F). Brush cut sides of butternut squash with olive oil, salt, and pepper. Place cut-side down on a parchment-lined baking sheet. Roast 35-40 minutes until flesh is fork-tender.',
        sensoryCue: 'Squash caramelizes at edges and flesh turns soft and fragrant.'
      },
      {
        step: 2,
        title: 'Cook wild rice blend',
        instruction: 'In a saucepan, combine wild rice blend with vegetable broth and a pinch of salt. Bring to a boil, cover, reduce heat to low, and simmer for 40 minutes until tender and grains burst. Rest covered 10 minutes.',
        sensoryCue: 'Fluffy, nutty grain aroma.'
      },
      {
        step: 3,
        title: 'Sauté festive stuffing',
        instruction: 'In a skillet, sauté sliced leeks and celery in olive oil for 5 minutes until soft. Stir in chopped sage, thyme, cranberries, and pecans for 2 minutes. Fold into the warm cooked wild rice. Drizzle with maple syrup and orange juice.',
        sensoryCue: 'Vibrant herbaceous stuffing studded with red and emerald notes.'
      },
      {
        step: 4,
        title: 'Fill and caramelize',
        instruction: 'Flip roasted squash halves flesh-side up. Scoop out a shallow 1-inch channel in the neck flesh, folding scooped squash into the rice mixture. Generously mound filling into squash cavities. Bake uncovered for 10-12 minutes until heated through and toasted on top.',
        sensoryCue: 'Pecans toast and top grains crisp lightly.'
      }
    ],
    proTips: [
      'Roasting the squash cut-side down traps steam, keeping the flesh moist and speeding up caramelization.',
      'Cook the wild rice in flavorful vegetable stock with a bay leaf for extra depth.'
    ],
    variations: [
      'Pomegranate Apple: Toss diced honeycrisp apples into the sauté and finish with fresh pomegranate seeds.',
      'Goat Cheese Crumble: Non-vegans can crumble creamy chèvre or feta over the hot squash before serving.'
    ],
    dietaryAdaptations: {
      vegan: '100% naturally vegan and dairy-free.',
      nutFree: 'Substitute toasted pumpkin seeds (pepitas) and sunflower seeds for pecans.'
    },
    storageAndReheating: {
      refrigeration: 'Store stuffed squash in sealed container in refrigerator for up to 4 days.',
      freezing: 'Freeze individually wrapped in foil for up to 2 months.',
      shelfLife: '4 days refrigerated.',
      reheating: 'Warm in 180°C (350°F) oven covered with foil for 15 minutes.'
    },
    faqs: [
      {
        question: 'Can I make the filling ahead of time?',
        answer: 'Yes! Cook the wild rice filling up to 2 days ahead. On the day, roast the fresh squash, stuff with warm filling, and bake together.'
      }
    ],
    relatedRecipeIds: ['vv-1', 'vv-2', 'vv-6'],
    recommendedEquipmentIds: ['roasting-pan-deluxe']
  },
  {
    id: 'vv-5',
    slug: 'homemade-vegan-chocolate-cake',
    title: 'Homemade Ultimate Vegan Dark Chocolate Fudge Cake',
    category: 'vegetarian-vegan',
    cuisine: 'International',
    countryCode: 'FR',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 32,
    servings: 10,
    featuredImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    summary: 'An intensely rich, fudgy plant-based chocolate cake made without eggs or dairy, frosted with silky coconut-cream chocolate ganache.',
    story: 'No butter or eggs are needed to create an extraordinary chocolate cake. By employing the magic of Dutch cocoa, apple cider vinegar, and pure vanilla, this cake achieves an airy yet deeply fudgy crumb that stays moist for days. Paired with a two-ingredient dark chocolate and coconut cream ganache, it is pure indulgence.',
    whyYouWillLoveIt: [
      'Unbelievably moist and tender with zero dairy or eggs.',
      'Simple one-bowl recipe using ordinary pantry staples.',
      'Glossy dark chocolate ganache that pours smooth and sets silky.'
    ],
    dietary: ['vegan', 'vegetarian', 'dairy-free'],
    isHolidaySpecial: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'All-purpose flour', amountMetric: '250 g', amountUS: '2 cups' },
      { item: 'Dutch-process dark cocoa powder', amountMetric: '65 g', amountUS: '2/3 cup' },
      { item: 'Granulated cane sugar', amountMetric: '250 g', amountUS: '1 1/4 cups' },
      { item: 'Baking soda & fine sea salt', amountMetric: '1.5 tsp soda, 1 tsp salt', amountUS: '1.5 tsp soda, 1 tsp salt' },
      { item: 'Warm water or brewed coffee', amountMetric: '240 ml', amountUS: '1 cup' },
      { item: 'Unsweetened almond milk or oat milk', amountMetric: '120 ml', amountUS: '1/2 cup' },
      { item: 'Neutral vegetable oil or melted coconut oil', amountMetric: '120 ml', amountUS: '1/2 cup' },
      { item: 'Apple cider vinegar', amountMetric: '1 tbsp', amountUS: '1 tbsp', notes: 'Reacts with soda for dramatic rise' },
      { item: 'Pure vanilla extract', amountMetric: '2 tsp', amountUS: '2 tsp' },
      { item: 'Dairy-free 70% dark chocolate for ganache', amountMetric: '200 g', amountUS: '7 oz' },
      { item: 'Full-fat canned coconut milk (solid cream layer)', amountMetric: '160 ml', amountUS: '2/3 cup' }
    ],
    equipment: [
      'Two 8-inch round cake pans',
      'Parchment paper rounds',
      'Large mixing bowl and whisk'
    ],
    instructions: [
      {
        step: 1,
        title: 'Whisk dry ingredients',
        instruction: 'Preheat oven to 175°C (350°F). Grease two 8-inch cake pans and line bases with parchment paper. In a large bowl, whisk flour, sifted cocoa, sugar, baking soda, and salt.',
        sensoryCue: 'Uniform chocolate powdery mix.'
      },
      {
        step: 2,
        title: 'Add wet ingredients and whisk',
        instruction: 'Pour in water (or coffee), plant milk, oil, apple cider vinegar, and vanilla. Whisk gently until smooth and free of lumps. The vinegar creates tiny fizzy bubbles with the soda.',
        sensoryCue: 'Effervescent, glossy dark chocolate batter.'
      },
      {
        step: 3,
        title: 'Bake both cake rounds',
        instruction: 'Divide batter evenly between prepared pans. Bake for 30-32 minutes until a toothpick inserted in center emerges clean. Cool in pans for 15 minutes, then invert onto wire racks to cool completely.',
        sensoryCue: 'Sponges spring back lightly to touch with intoxicating cocoa aroma.'
      },
      {
        step: 4,
        title: 'Make silky coconut ganache',
        instruction: 'Heat coconut cream in a small pot until steaming. Pour over chopped dark chocolate, let stand 2 minutes, then whisk smooth until dark and glossy. Chill 30 minutes until spreadable.',
        sensoryCue: 'Mirror-like chocolate ganache.'
      },
      {
        step: 5,
        title: 'Frost and assemble',
        instruction: 'Place first cake layer on plate, spread with 1/3 of ganache, place second layer on top, and frost top and sides with remaining ganache.',
        sensoryCue: 'Dramatic, velvety chocolate finish.'
      }
    ],
    proTips: [
      'The apple cider vinegar is the essential vegan leavener; it reacts with baking soda to create lightness without any lingering vinegar taste.',
      'Using freshly brewed warm coffee instead of water deepens the dark chocolate flavor dramatically.'
    ],
    variations: [
      'Raspberry Swirl: Spread a layer of seedless raspberry jam between the cake layers.',
      'Hazelnut Praline: Top with toasted crushed hazelnuts.'
    ],
    dietaryAdaptations: {
      vegan: '100% plant-based and dairy-free.',
      glutenFree: 'Substitute 1:1 gluten-free baking flour blend with xanthan gum.'
    },
    storageAndReheating: {
      refrigeration: 'Store in cake carrier at room temperature for 3 days or refrigerated for 6 days.',
      freezing: 'Freeze unfrosted cake layers wrapped in plastic for up to 2 months.',
      shelfLife: '6 days refrigerated.',
      reheating: 'Serve at room temperature.'
    },
    faqs: [
      {
        question: 'Will the cake taste like coconut?',
        answer: 'The strong dark chocolate flavor completely overwhelms the coconut cream in the ganache, leaving only a rich, creamy mouthfeel.'
      }
    ],
    relatedRecipeIds: ['gf-1', 'db-2', 'vv-3'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'vv-6',
    slug: 'mediterranean-vegetable-casserole',
    title: 'Rustic Mediterranean Vegetable Tian (Casserole Provençale)',
    category: 'vegetarian-vegan',
    cuisine: 'French',
    countryCode: 'FR',
    difficulty: 'Easy',
    prepTimeMinutes: 25,
    cookTimeMinutes: 50,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80',
    summary: 'A traditional southern French summer and winter bake: layered spirals of ripe zucchini, eggplant, plum tomatoes, caramelized sweet onions, fresh thyme, and extra virgin olive oil.',
    story: 'From the sun-drenched hills of Provence, a Tian is both the name of the traditional earthenware baking dish and the layered vegetable bake itself. By shingling thin slices of eggplant, zucchini, and tomatoes upright over a bed of slow-cooked caramelized onions, the vegetables roast to caramelized sweetness while retaining their beautiful individual shapes.',
    whyYouWillLoveIt: [
      'Striking rainbow presentation of shingled jewel-colored vegetables.',
      'Concentrated, sweet roasted Mediterranean flavors with herbaceous thyme.',
      'Versatile side dish that complements any holiday or family dinner.'
    ],
    dietary: ['vegan', 'vegetarian', 'gluten-free', 'dairy-free'],
    isHolidaySpecial: false,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Medium zucchini (green and yellow if available)', amountMetric: '2 whole', amountUS: '2 whole', notes: 'Thinly sliced in rounds' },
      { item: 'Slender Italian or Japanese eggplants', amountMetric: '2 whole', amountUS: '2 whole', notes: 'Thinly sliced in rounds' },
      { item: 'Firm plum or Roma tomatoes', amountMetric: '4 whole', amountUS: '4 whole', notes: 'Thinly sliced in rounds' },
      { item: 'Yellow onions, thinly sliced', amountMetric: '2 large', amountUS: '2 large', notes: 'For caramelized base' },
      { item: 'Garlic cloves, minced', amountMetric: '4 cloves', amountUS: '4 cloves' },
      { item: 'Extra virgin olive oil', amountMetric: '60 ml', amountUS: '4 tbsp' },
      { item: 'Fresh thyme leaves & dried oregano', amountMetric: '1 tbsp thyme, 1 tsp oregano', amountUS: '1 tbsp thyme, 1 tsp oregano' },
      { item: 'Flaky sea salt & freshly ground black pepper', amountMetric: '1 tsp each', amountUS: '1 tsp each' }
    ],
    equipment: [
      'Round or oval 10-12 inch ceramic baking dish',
      'Skillet for caramelizing onions',
      'Mandoline or sharp chef knife for uniform vegetable slicing'
    ],
    instructions: [
      {
        step: 1,
        title: 'Caramelize the onion bed',
        instruction: 'In a skillet, warm 2 tbsp olive oil over medium-low heat. Add sliced onions and garlic with a pinch of salt. Cook slowly for 15 minutes until soft, sweet, and pale golden. Spread evenly over bottom of baking dish.',
        sensoryCue: 'Sweet aroma of caramelized alliums.'
      },
      {
        step: 2,
        title: 'Shingle the vegetable slices',
        instruction: 'Preheat oven to 190°C (375°F). Arrange alternating slices of zucchini, eggplant, and tomato vertically and snugly in concentric circles or rows on top of the onions.',
        sensoryCue: 'Tight, beautiful accordion pattern of green, purple, and red.'
      },
      {
        step: 3,
        title: 'Season generously with herbs and oil',
        instruction: 'Drizzle remaining 2 tbsp olive oil generously over vegetables. Scatter fresh thyme, oregano, sea salt, and black pepper across the surface.',
        sensoryCue: 'Glistening fresh vegetables flecked with green herbs.'
      },
      {
        step: 4,
        title: 'Bake covered then uncovered',
        instruction: 'Cover dish tightly with foil. Bake for 30 minutes until vegetables soften. Uncover and bake 20-25 minutes more until edges are caramelized and juices reduce.',
        sensoryCue: 'Edges of eggplant and zucchini turn crisp and golden brown.'
      }
    ],
    proTips: [
      'Choose vegetables of similar diameters so the shingled pattern sits flush and roasts evenly.',
      'Covering with foil first ensures the eggplant cooks through to melting tenderness before the edges brown.'
    ],
    variations: [
      'Parmesan Crust: Sprinkle 50g grated Parmigiano-Reggiano or breadcrumbs over top in the final 10 minutes.',
      'Black Olive Tapenade: Dot small spoonfuls of Kalamata tapenade between the vegetable rows.'
    ],
    dietaryAdaptations: {
      vegan: '100% naturally vegan and gluten-free.',
      dairyFree: 'Naturally dairy-free.'
    },
    storageAndReheating: {
      refrigeration: 'Store covered in refrigerator for up to 5 days.',
      freezing: 'Not recommended for freezing as zucchini releases excess water upon thawing.',
      shelfLife: '5 days refrigerated.',
      reheating: 'Warm in 180°C (350°F) oven for 12 minutes.'
    },
    faqs: [
      {
        question: 'Can I serve this at room temperature?',
        answer: 'Yes! In Provence, tian is often served lukewarm or at room temperature as part of a summer lunch with crusty bread.'
      }
    ],
    relatedRecipeIds: ['vv-3', 'cf-6', 'it-1'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'knives-chef-set']
  }
];
