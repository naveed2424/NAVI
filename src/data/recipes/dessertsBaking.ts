import { Recipe } from '../../types';

export const dessertsBakingRecipes: Recipe[] = [
  {
    id: 'db-1',
    slug: 'traditional-homemade-apple-pie',
    title: 'Traditional Homemade Double-Crust All-Butter Apple Pie',
    category: 'desserts-baking',
    cuisine: 'American',
    countryCode: 'US',
    difficulty: 'Intermediate',
    prepTimeMinutes: 45,
    cookTimeMinutes: 55,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=1200&q=80',
    summary: 'A towering, flaky all-butter double pie crust filled with spiced Honeycrisp and Granny Smith apples tossed in cinnamon, nutmeg, brown sugar, and apple cider caramel.',
    story: 'An all-butter, double-crust apple pie is the indisputable crown jewel of home baking. The secret to this timeless recipe is tossing apples with spices and letting them macerate, then reducing their natural juices into a glossy cider caramel before filling. The crust bakes shatteringly crisp without any soggy bottom.',
    whyYouWillLoveIt: [
      'Flaky, tender all-butter crust that shatters into golden layers.',
      'Generous mound of sweet-tart apples that hold their shape without turning to mush.',
      'Thick spiced caramel filling that does not leak or run when sliced.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'All-purpose flour for crust', amountMetric: '350 g', amountUS: '2 3/4 cups' },
      { item: 'Cold unsalted butter, cubed', amountMetric: '225 g', amountUS: '1 cup (2 sticks)' },
      { item: 'Ice water with 1 tbsp cider vinegar', amountMetric: '80 - 120 ml', amountUS: '1/3 - 1/2 cup' },
      { item: 'Mixed crisp apples (Granny Smith & Honeycrisp), peeled and sliced', amountMetric: '1.5 kg (7-8 apples)', amountUS: '7-8 apples' },
      { item: 'Granulated sugar & dark brown sugar', amountMetric: '100 g granulated, 50 g brown', amountUS: '1/2 cup granulated, 1/4 cup brown' },
      { item: 'Ground cinnamon & ground nutmeg', amountMetric: '1.5 tsp cinnamon, 1/4 tsp nutmeg', amountUS: '1.5 tsp cinnamon, 1/4 tsp nutmeg' },
      { item: 'Cornstarch or tapioca starch', amountMetric: '2 tbsp', amountUS: '2 tbsp' },
      { item: 'Lemon juice & pure vanilla extract', amountMetric: '1 tbsp each', amountUS: '1 tbsp each' },
      { item: 'Egg beaten with 1 tbsp milk + coarse demerara sugar for top', amountMetric: 'For wash and sprinkling', amountUS: 'For wash and sprinkling' }
    ],
    equipment: [
      '9-inch deep-dish ceramic or glass pie plate',
      'Rolling pin',
      'Pastry cutter or food processor',
      'Pastry brush'
    ],
    instructions: [
      {
        step: 1,
        title: 'Make all-butter pie dough',
        instruction: 'Cut cold butter into flour and 1 tsp salt until butter pieces are the size of peas and lima beans. Drizzle in ice water gradually until dough just holds together when pressed. Divide into two discs (one slightly larger for bottom), wrap in plastic, and chill for at least 1 hour.',
        sensoryCue: 'Visible chunks of butter marbled through the cold dough.'
      },
      {
        step: 2,
        title: 'Macerate spiced apples',
        instruction: 'In a large bowl, toss sliced apples with sugars, cinnamon, nutmeg, lemon juice, and vanilla. Let sit 20 minutes to release juices. Strain juices into a small saucepan, simmer 3 minutes until syrupy, then toss back with apples and cornstarch.',
        sensoryCue: 'Sweet, thick apple caramel glaze.'
      },
      {
        step: 3,
        title: 'Roll bottom crust and fill',
        instruction: 'Roll larger dough disc on floured surface to 12-inch circle. Line 9-inch pie plate. Mound spiced apples high into the shell, pressing gently to eliminate air pockets.',
        sensoryCue: 'Towering mountain of fragrant spiced apples.'
      },
      {
        step: 4,
        title: 'Top with lattice or vented crust',
        instruction: 'Roll second dough disc. Lay over apples (or weave a decorative lattice). Trim overhang to 1 inch, fold under bottom crust, and crimp decoratively with fingers. Cut 4-5 steam vents if solid top. Chill pie 20 minutes.',
        sensoryCue: 'Firm, tailored pie with tight crimped borders.'
      },
      {
        step: 5,
        title: 'Brush and bake to golden crisp',
        instruction: 'Preheat oven to 220°C (425°F) with a baking sheet on bottom rack. Brush pie top with egg wash; sprinkle with coarse sugar. Bake 20 minutes at 425°F, then reduce to 190°C (375°F) and bake 35-40 minutes more until crust is deep golden and apple juices bubble enthusiastically through vents. Cool 3 hours before slicing.',
        sensoryCue: 'Crust turns blistered golden brown with thick caramel bubbling through vents.'
      }
    ],
    proTips: [
      'Reducing the released apple juices on the stove into a syrup before filling eliminates the watery gap that often forms between the apples and top crust.',
      'Cool the pie for at least 3 hours before slicing; the natural apple pectins need time to set into a neat, sliceable filling.'
    ],
    variations: [
      'Salted Caramel Apple Pie: Drizzle homemade salted caramel sauce over the apple layers.',
      'Cheddar Crust: Fold 1/2 cup finely shredded sharp cheddar cheese into the flour when making the pastry.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally 100% vegetarian.',
      glutenFree: 'Use 1:1 gluten-free pie crust flour blend.'
    },
    storageAndReheating: {
      refrigeration: 'Store covered at room temperature for 2 days or refrigerated for 5 days.',
      freezing: 'Freeze baked pie wrapped in foil for up to 3 months.',
      shelfLife: '5 days refrigerated.',
      reheating: 'Warm whole pie in 180°C (350°F) oven for 15 minutes.'
    },
    faqs: [
      {
        question: 'Which apples are best for pie?',
        answer: 'A 50/50 mix of tart Granny Smith (which hold their firm structure) and sweet Honeycrisp or Braeburn (which provide rich flavor) yields the ultimate apple pie.'
      }
    ],
    relatedRecipeIds: ['cf-5', 'cd-5', 'db-3'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'db-2',
    slug: 'easy-chocolate-fudge-cake',
    title: 'Easy One-Bowl Chocolate Fudge Birthday & Holiday Cake',
    category: 'desserts-baking',
    cuisine: 'American',
    countryCode: 'US',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    servings: 10,
    featuredImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    summary: 'The ultimate fail-proof chocolate cake: one bowl, zero electric mixer required, producing an unbelievably moist, dark chocolate crumb with rich chocolate fudge frosting.',
    story: 'Every family needs one holy grail chocolate cake recipe that can be whipped up on a whim. With no butter creaming or complex steps, this one-bowl recipe uses quality dark cocoa, buttermilk, and hot coffee to create a tender, fudgy sponge that rivals the finest bakeries.',
    whyYouWillLoveIt: [
      'Simple one-bowl whisk method ready for the oven in 15 minutes.',
      'Ultra-moist crumb that stays tender and soft for up to 5 days.',
      'Lustrous, spreadable chocolate fudge frosting that swirls effortlessly.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: false,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'All-purpose flour', amountMetric: '250 g', amountUS: '2 cups' },
      { item: 'Granulated sugar', amountMetric: '350 g', amountUS: '1 3/4 cups' },
      { item: 'Dutch-process dark cocoa powder', amountMetric: '75 g', amountUS: '3/4 cup' },
      { item: 'Baking powder & baking soda', amountMetric: '1.5 tsp each', amountUS: '1.5 tsp each' },
      { item: 'Fine sea salt', amountMetric: '1 tsp', amountUS: '1 tsp' },
      { item: 'Large eggs at room temp', amountMetric: '2 whole', amountUS: '2 whole' },
      { item: 'Buttermilk or whole milk with 1 tbsp vinegar', amountMetric: '240 ml', amountUS: '1 cup' },
      { item: 'Vegetable oil', amountMetric: '120 ml', amountUS: '1/2 cup' },
      { item: 'Hot freshly brewed coffee or boiling water', amountMetric: '240 ml', amountUS: '1 cup' },
      { item: 'Unsalted butter & dark chocolate for fudge frosting', amountMetric: '150 g butter, 200 g chocolate', amountUS: '2/3 cup butter, 7 oz chocolate' },
      { item: 'Powdered sugar for frosting', amountMetric: '200 g', amountUS: '1 3/4 cups' }
    ],
    equipment: [
      'Two 8-inch round cake pans',
      'Parchment paper rounds',
      'Large mixing bowl and wire whisk'
    ],
    instructions: [
      {
        step: 1,
        title: 'Whisk dry ingredients',
        instruction: 'Preheat oven to 175°C (350°F). Grease two 8-inch pans and line bottoms with parchment. In a large bowl, whisk flour, sugar, cocoa powder, baking powder, baking soda, and salt.',
        sensoryCue: 'Uniform chocolate-tinted dry mixture with zero cocoa lumps.'
      },
      {
        step: 2,
        title: 'Whisk wet ingredients and add coffee',
        instruction: 'Whisk in eggs, buttermilk, vegetable oil, and 2 tsp vanilla until smooth. Pour in hot coffee in a steady stream, whisking gently. The batter will be thin and liquid; this is the key to moisture.',
        sensoryCue: 'Glossy dark liquid batter with deep cocoa aromas.'
      },
      {
        step: 3,
        title: 'Bake both cake rounds',
        instruction: 'Divide batter evenly between prepared pans. Bake for 30-32 minutes until a toothpick inserted in center emerges with a few moist crumbs. Cool in pans 15 minutes, then turn out onto wire racks to cool completely.',
        sensoryCue: 'Cake tops spring back lightly with rich chocolate fragrance.'
      },
      {
        step: 4,
        title: 'Make glossy fudge frosting and frost',
        instruction: 'Melt chocolate and butter together until smooth. Whisk in powdered sugar, 60ml milk, and 1 tsp vanilla until spreadable and glossy. Frost between cake layers and across top and sides.',
        sensoryCue: 'Billowy, velvety chocolate swirls.'
      }
    ],
    proTips: [
      'The batter will seem remarkably thin and runny — do not add extra flour! Thin batter is what guarantees that fudgy, tender bakery crumb.',
      'Ensure the cakes are completely cold before frosting, or the butter-based frosting will slide right off.'
    ],
    variations: [
      'Salted Caramel Drizzle: Drizzle salted caramel between the cake layers.',
      'Blackberry Chocolate: Layer with fresh blackberries and dark chocolate ganache.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally vegetarian.',
      dairyFree: 'Substitute almond milk for buttermilk and vegan butter block for frosting.'
    },
    storageAndReheating: {
      refrigeration: 'Store in cake dome at room temperature for 3 days or refrigerated for 6 days.',
      freezing: 'Freeze unfrosted cake layers wrapped in plastic for up to 2 months.',
      shelfLife: '6 days refrigerated.',
      reheating: 'Enjoy at room temperature.'
    },
    faqs: [
      {
        question: 'Can I bake this as cupcakes?',
        answer: 'Yes! Divide into 24 lined muffin cups and bake at 175°C (350°F) for 18-20 minutes.'
      }
    ],
    relatedRecipeIds: ['gf-1', 'vv-5', 'db-6'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'db-3',
    slug: 'homemade-cinnamon-rolls',
    title: 'Warm Homemade Bakery-Style Cinnamon Rolls with Cream Cheese Frosting',
    category: 'desserts-baking',
    cuisine: 'American',
    countryCode: 'US',
    difficulty: 'Intermediate',
    prepTimeMinutes: 30,
    cookTimeMinutes: 25,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    summary: 'Giant, ultra-fluffy pillowy brioche dough swirled with dark brown sugar, Saigon cinnamon, and drenched in warm melting vanilla cream cheese frosting.',
    story: 'Waking up to the smell of fresh cinnamon rolls baking on a weekend or Christmas morning is one of life’s purest joys. By pouring a splash of warm heavy cream over the risen rolls right before they enter the oven, the dough stays impossibly soft, gooey, and pillowy all the way through.',
    whyYouWillLoveIt: [
      'Bakery-size, giant fluffy rolls with soft, gooey cinnamon-sugar centers.',
      'Secret heavy cream pour guarantees edges and bottoms never dry out.',
      'Tangy, sweet cream cheese frosting melts into every warm swirl.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Bread flour or unbleached all-purpose flour', amountMetric: '550 g', amountUS: '4 1/2 cups' },
      { item: 'Instant yeast', amountMetric: '7 g', amountUS: '1 packet (2 1/4 tsp)' },
      { item: 'Whole milk, warmed to 43°C (110°F)', amountMetric: '240 ml', amountUS: '1 cup' },
      { item: 'Granulated sugar', amountMetric: '75 g', amountUS: '1/3 cup' },
      { item: 'Unsalted butter, melted and cooled', amountMetric: '80 g', amountUS: '1/3 cup' },
      { item: 'Large eggs at room temp', amountMetric: '2 eggs', amountUS: '2 eggs' },
      { item: 'Fine sea salt', amountMetric: '1 tsp', amountUS: '1 tsp' },
      { item: 'Unsalted butter, softened (for filling)', amountMetric: '80 g', amountUS: '1/3 cup' },
      { item: 'Dark brown sugar, packed', amountMetric: '180 g', amountUS: '1 cup' },
      { item: 'Ground cinnamon (Saigon cinnamon preferred)', amountMetric: '2.5 tbsp', amountUS: '2.5 tbsp' },
      { item: 'Warm heavy whipping cream (secret bakery pour)', amountMetric: '120 ml', amountUS: '1/2 cup' },
      { item: 'Cream cheese, powdered sugar, butter, and vanilla for frosting', amountMetric: '120 g cream cheese, 150 g sugar, 50 g butter, 1 tsp vanilla', amountUS: '4 oz cream cheese, 1 1/4 cups sugar, 4 tbsp butter, 1 tsp vanilla' }
    ],
    equipment: [
      '9x13 inch metal or ceramic baking dish',
      'Stand mixer with dough hook (or large mixing bowl)',
      'Rolling pin',
      'Unflavored dental floss or serrated knife for clean slicing'
    ],
    instructions: [
      {
        step: 1,
        title: 'Knead soft brioche dough',
        instruction: 'In stand mixer bowl, whisk warm milk, yeast, sugar, melted butter, eggs, and salt. Add flour. Knead with dough hook on medium-low for 8-10 minutes until dough is smooth, elastic, and slightly tacky. Form into ball, cover, and let rise 1.5 hours until doubled.',
        sensoryCue: 'Pillowy, supple dough that springs back when poked.'
      },
      {
        step: 2,
        title: 'Roll and fill with cinnamon butter',
        instruction: 'Roll dough on lightly floured surface to a 12x18 inch rectangle. Spread softened butter edge to edge. In a small bowl, mix brown sugar and cinnamon; sprinkle evenly over butter and pat down gently.',
        sensoryCue: 'Thick, fragrant bronze carpet of cinnamon sugar.'
      },
      {
        step: 3,
        title: 'Roll tightly and cut 12 rolls',
        instruction: 'Roll dough tightly from the long edge into a log. Use unflavored dental floss or a sharp knife to slice into 12 equal rolls. Place into greased 9x13 pan. Cover and let rise 45 minutes until puffy.',
        sensoryCue: 'Floss slides cleanly through dough without squishing the circular spiral.'
      },
      {
        step: 4,
        title: 'Secret warm cream pour and bake',
        instruction: 'Preheat oven to 180°C (350°F). Warm 1/2 cup heavy cream until lukewarm; pour gently over and between the puffy rolls in the pan. Bake for 22-25 minutes until lightly golden on top.',
        sensoryCue: 'Cream bakes into a luscious gooey caramel beneath the rolls.'
      },
      {
        step: 5,
        title: 'Frost while warm',
        instruction: 'Beat cream cheese, softened butter, powdered sugar, and vanilla until fluffy. Spread generously over rolls while warm so frosting melts into every spiral crevice.',
        sensoryCue: 'Frosting glazes the warm rolls in sweet, creamy waterfalls.'
      }
    ],
    proTips: [
      'The warm heavy cream poured over the rolls right before baking is the professional bakery secret that keeps cinnamon rolls ultra-soft and gooey for days.',
      'Use unflavored dental floss to slice the log: loop under the log, cross ends over the top, and pull; it slices perfectly without crushing the spiral.'
    ],
    variations: [
      'Pecan Sticky Buns: Line bottom of pan with melted butter, brown sugar, and toasted pecans before adding rolls.',
      'Cardamom Orange: Add 1 tsp ground cardamom and orange zest to the filling.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally vegetarian.',
      dairyFree: 'Use plant-based milk, plant butter, and coconut cream.'
    },
    storageAndReheating: {
      refrigeration: 'Store covered at room temperature for 3 days or refrigerated for 6 days.',
      freezing: 'Freeze baked frosted rolls for up to 2 months.',
      shelfLife: '6 days refrigerated.',
      reheating: 'Warm 20 seconds in microwave for fresh-from-the-oven softness.'
    },
    faqs: [
      {
        question: 'Can I prepare these the night before?',
        answer: 'Yes! Shape rolls into pan, cover tightly, and refrigerate overnight. In the morning, let rise at room temperature for 45 minutes, pour warm cream, and bake fresh.'
      }
    ],
    relatedRecipeIds: ['db-1', 'cd-2', 'cf-5'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'mixers-stand']
  },
  {
    id: 'db-4',
    slug: 'classic-french-crepes',
    title: 'Classic French Crêpes with Butter and Sugar (Crêpes de la Chandeleur)',
    category: 'desserts-baking',
    cuisine: 'French',
    countryCode: 'FR',
    difficulty: 'Easy',
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    servings: 6,
    featuredImage: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=80',
    summary: 'Paper-thin, golden French crêpes with delicate lace edges, made from a blender batter rested with browned butter, whole milk, and a kiss of vanilla.',
    story: 'In France, February\'s La Chandeleur and weekend family mornings are celebrated with stacks of hot crêpes. Made from everyday kitchen staples, this classic recipe uses a quick blender method and a splash of browned butter (beurre noisette) for the quintessential nutty, delicate French flavor.',
    whyYouWillLoveIt: [
      'Whizzes together in 60 seconds in an ordinary blender.',
      'Paper-thin, tender texture with delicate golden lace edges.',
      'Endlessly customizable: enjoy with lemon and sugar, Nutella, fruit compote, or savory fillings.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: false,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'All-purpose flour, sifted', amountMetric: '200 g', amountUS: '1 1/2 cups' },
      { item: 'Large eggs at room temp', amountMetric: '3 eggs', amountUS: '3 eggs' },
      { item: 'Whole milk', amountMetric: '450 ml', amountUS: '1 3/4 cups' },
      { item: 'Water or beer', amountMetric: '60 ml', amountUS: '1/4 cup', notes: 'Gives delicate lightness' },
      { item: 'Unsalted butter, melted and browned slightly', amountMetric: '50 g', amountUS: '3.5 tbsp' },
      { item: 'Granulated sugar', amountMetric: '2 tbsp', amountUS: '2 tbsp' },
      { item: 'Pure vanilla extract & pinch of salt', amountMetric: '1 tsp vanilla, 1/4 tsp salt', amountUS: '1 tsp vanilla, 1/4 tsp salt' },
      { item: 'Butter for greasing pan & sugar/lemon for serving', amountMetric: 'As needed', amountUS: 'As needed' }
    ],
    equipment: [
      'Blender or food processor',
      '10-inch non-stick skillet or traditional crêpe pan',
      'Thin offset silicone spatula for flipping'
    ],
    instructions: [
      {
        step: 1,
        title: 'Blend batter in 60 seconds',
        instruction: 'Add milk, water, eggs, melted butter, sugar, vanilla, salt, and flour into a blender in that order. Blend on high speed for 30 seconds until completely smooth with zero lumps. Let batter rest at room temp for 20 minutes.',
        sensoryCue: 'Smooth, fluid batter the consistency of heavy cream.'
      },
      {
        step: 2,
        title: 'Heat pan and swirl batter',
        instruction: 'Heat an 8 or 10-inch non-stick pan over medium heat. Rub with a tiny dab of butter on a paper towel. Pour 1/4 cup (60ml) batter into center while immediately swirling and tilting the pan to coat bottom in a paper-thin circle.',
        sensoryCue: 'Batter sets instantly into a translucent veil.'
      },
      {
        step: 3,
        title: 'Cook and flip in 90 seconds',
        instruction: 'Cook for 60 seconds until edges curl slightly, top is dry, and underside is speckled with golden spots. Slide spatula under center and flip. Cook second side for 20-30 seconds. Slide onto warm plate.',
        sensoryCue: 'Golden lace patterns with crisp buttery edges.'
      },
      {
        step: 4,
        title: 'Fold and serve hot',
        instruction: 'Repeat with remaining batter. Squeeze fresh lemon juice, sprinkle with fine sugar, and fold into neat quarters.',
        sensoryCue: 'Tender, warm crêpes that melt in the mouth.'
      }
    ],
    proTips: [
      'Resting the batter for 20 minutes relaxes the flour gluten and lets air bubbles dissipate, ensuring crêpes are tender and tear-free.',
      'Brown the butter slightly in a small pot until fragrant and nutty before adding to the batter for authentic bistro flavor.'
    ],
    variations: [
      'Crêpes Suzette: Simmer folded crêpes in caramelized orange juice, butter, zest, and flambé with Grand Marnier.',
      'Savory Galettes: Omit sugar and vanilla; fill with ham, Gruyère, and a sunny-side-up egg.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally vegetarian.',
      dairyFree: 'Substitute oat milk or almond milk and melted coconut oil for dairy.'
    },
    storageAndReheating: {
      refrigeration: 'Stack cooled crêpes between sheets of wax paper; store in zip-top bag for up to 3 days.',
      freezing: 'Freeze stacked crêpes for up to 2 months.',
      shelfLife: '3 days refrigerated.',
      reheating: 'Warm 10 seconds in a hot dry skillet.'
    },
    faqs: [
      {
        question: 'Why did my first crêpe tear or look pale?',
        answer: 'French cooks have a famous saying: "The first crêpe is always for the pan!" It calibrates pan temperature and buttering; the second will be gorgeous.'
      }
    ],
    relatedRecipeIds: ['db-5', 'cd-1', 'cf-1'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'db-5',
    slug: 'simple-lemon-drizzle-cake',
    title: 'Traditional British Lemon Drizzle Loaf Cake with Crunchy Sugar Crust',
    category: 'desserts-baking',
    cuisine: 'British',
    countryCode: 'GB',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 45,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=80',
    summary: 'A tender, buttery lemon sponge soaked while piping hot with freshly squeezed lemon syrup, creating a crisp, crackly crystalline sugar crust on top.',
    story: 'The undisputed champion of British afternoon tea, a classic Lemon Drizzle Cake combines a soft, buttery crumb with an exhilarating citrus punch. The magic occurs the instant the cake leaves the oven: pierced all over with a skewer, warm lemon juice and granulated sugar soak into the crumb while the sugar crystals form an addictive crunchy glaze across the golden top.',
    whyYouWillLoveIt: [
      'Intense, vibrant lemon zing that wakes up the palate.',
      'Signature crunchy sugar crust contrasting with an ultra-moist crumb.',
      'Made with simple pantry staples in one standard loaf tin.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: false,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Unsalted butter, softened at room temp', amountMetric: '200 g', amountUS: '3/4 cup + 2 tbsp' },
      { item: 'Caster sugar or granulated sugar', amountMetric: '200 g', amountUS: '1 cup' },
      { item: 'Large eggs at room temp', amountMetric: '4 eggs', amountUS: '4 eggs' },
      { item: 'Self-rising flour (or AP flour + 2 tsp baking powder)', amountMetric: '200 g', amountUS: '1 1/2 cups' },
      { item: 'Fresh unwaxed lemons', amountMetric: '3 whole', amountUS: '3 whole', notes: 'Zest of all 3 for cake, juice of all 3 for drizzle' },
      { item: 'Granulated sugar for crunchy drizzle', amountMetric: '100 g', amountUS: '1/2 cup' },
      { item: 'Pinch of fine sea salt', amountMetric: '1/4 tsp', amountUS: '1/4 tsp' }
    ],
    equipment: [
      'Standard 2 lb (9x5 inch) loaf tin',
      'Parchment paper loaf liner',
      'Stand mixer or hand electric mixer',
      'Wooden skewer or toothpick'
    ],
    instructions: [
      {
        step: 1,
        title: 'Cream butter, sugar, and lemon zest',
        instruction: 'Preheat oven to 175°C (350°F). Line loaf tin with parchment paper. Beat softened butter, sugar, and finely grated zest of 3 lemons for 4-5 minutes until pale, light, and fluffy. This extracts citrus oils from zest.',
        sensoryCue: 'Pale yellow, fragrant fluffy cream with zesty aroma.'
      },
      {
        step: 2,
        title: 'Add eggs and fold flour',
        instruction: 'Beat in eggs one at a time, adding a tablespoon of flour with each to prevent curdling. Gently fold in remaining flour and pinch of salt with a spatula just until combined.',
        sensoryCue: 'Smooth, creamy golden cake batter.'
      },
      {
        step: 3,
        title: 'Bake to golden dome',
        instruction: 'Spoon batter into prepared loaf tin and level the top. Bake for 42-45 minutes until golden brown and a skewer inserted into center comes out clean.',
        sensoryCue: 'Tall domed loaf with golden cracked center.'
      },
      {
        step: 4,
        title: 'Whisk lemon drizzle and infuse while hot',
        instruction: 'While cake bakes, whisk fresh lemon juice with 100g granulated sugar (do not dissolve sugar completely). As soon as cake leaves the oven, poke holes all over top with skewer. Pour lemon drizzle evenly over hot cake. Let cool completely in tin.',
        sensoryCue: 'Juice sinks deep into warm sponge; sugar forms a sparkling crackled crust.'
      }
    ],
    proTips: [
      'Do not heat the lemon juice and sugar! Keeping the sugar undissolved is what creates the famous crackly, crunchy sugar topping as it dries.',
      'Pour the drizzle over the cake while it is piping hot from the oven so the syrup is drawn deep down into the sponge.'
    ],
    variations: [
      'Lemon Blueberry: Gently fold 1 cup of fresh blueberries tossed in flour into the batter.',
      'Lemon Thyme: Infuse the lemon drizzle with fresh garden lemon thyme leaves.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally vegetarian.',
      glutenFree: 'Use 1:1 gluten-free baking flour + 2 tsp baking powder and 1/4 tsp xanthan gum.'
    },
    storageAndReheating: {
      refrigeration: 'Store in airtight tin at room temperature for up to 5 days; crumb stays moist thanks to lemon syrup.',
      freezing: 'Freeze whole loaf wrapped in foil for up to 2 months.',
      shelfLife: '5 days room temperature.',
      reheating: 'Enjoy at room temperature with hot English tea.'
    },
    faqs: [
      {
        question: 'Why did my cake sink in the center?',
        answer: 'Opening the oven door during the first 30 minutes of baking causes the oven temperature to drop and deflates the delicate lemon sponge. Keep the door closed until 40 minutes.'
      }
    ],
    relatedRecipeIds: ['db-4', 'cf-5', 'cd-5'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'mixers-stand']
  },
  {
    id: 'db-6',
    slug: 'homemade-chocolate-chip-cookies',
    title: 'The Ultimate Chewy Browned Butter Chocolate Chip Cookies',
    category: 'desserts-baking',
    cuisine: 'American',
    countryCode: 'US',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 11,
    servings: 18,
    featuredImage: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Bakery-style chocolate chip cookies with crisp golden edges, chewy centers, pools of molten dark chocolate wafers, and a sprinkle of flaky Maldon sea salt.',
    story: 'Invented by Ruth Wakefield at the Toll House Inn in 1938, chocolate chip cookies are an American icon. This perfected recipe elevates the classic by browning the butter until nutty and fragrant, chilling the dough, and using chopped chocolate chunks for molten chocolate pools in every bite.',
    whyYouWillLoveIt: [
      'Browned butter imparts deep toffee, caramel, and hazelnut notes.',
      'Slightly crisp, rippled edges with a chewy, bendable center.',
      'Puddles of molten dark chocolate topped with flaky sea salt.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: false,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Unsalted butter, browned and cooled slightly', amountMetric: '225 g (1 cup)', amountUS: '2 sticks' },
      { item: 'Dark brown sugar, packed', amountMetric: '200 g', amountUS: '1 cup' },
      { item: 'Granulated sugar', amountMetric: '100 g', amountUS: '1/2 cup' },
      { item: 'Large eggs at room temp + 1 extra yolk', amountMetric: '2 eggs + 1 yolk', amountUS: '2 eggs + 1 yolk' },
      { item: 'Pure vanilla bean paste or extract', amountMetric: '1 tbsp', amountUS: '1 tbsp' },
      { item: 'All-purpose flour', amountMetric: '300 g', amountUS: '2 1/3 cups' },
      { item: 'Baking soda & fine sea salt', amountMetric: '1 tsp soda, 1 tsp salt', amountUS: '1 tsp soda, 1 tsp salt' },
      { item: '70% dark chocolate bars, roughly chopped into chunks', amountMetric: '250 g', amountUS: '9 oz', notes: 'Chopped wafers melt into wider puddles than chips' },
      { item: 'Flaky Maldon sea salt for topping', amountMetric: '1 tbsp', amountUS: '1 tbsp' }
    ],
    equipment: [
      'Two large baking sheets lined with parchment',
      'Small saucepan for browning butter',
      'Large ice cream cookie scoop (3 tbsp capacity)',
      'Wire cooling rack'
    ],
    instructions: [
      {
        step: 1,
        title: 'Brown the butter',
        instruction: 'Melt butter in a saucepan over medium heat. Swirl occasionally as it foams and crackles. After 4-5 minutes, golden-brown specks will appear at the bottom and the butter will smell intensely of roasted hazelnuts. Pour into bowl; cool 15 minutes.',
        sensoryCue: 'Nutty, toasty brown butter aroma.'
      },
      {
        step: 2,
        title: 'Whisk sugars, butter, and eggs',
        instruction: 'Whisk browned butter, brown sugar, and granulated sugar for 2 minutes until glossy. Add eggs, egg yolk, and vanilla; whisk vigorously for 1 minute until pale and slightly thickened.',
        sensoryCue: 'Caramel-scented glossy ribbons.'
      },
      {
        step: 3,
        title: 'Fold dry ingredients and chocolate chunks',
        instruction: 'Fold in flour, baking soda, and salt with a rubber spatula just until no dry streaks remain. Stir in chopped chocolate chunks, reserving a handful for the tops.',
        sensoryCue: 'Thick, chocolate-studded dough.'
      },
      {
        step: 4,
        title: 'Scoop and chill dough',
        instruction: 'Scoop 18 large dough balls onto a tray. Press reserved chocolate chunks into the tops. Cover and chill in refrigerator for at least 1 hour (preferably 12-24 hours for deeper flavor).',
        sensoryCue: 'Chilled firm dough balls ready to bake.'
      },
      {
        step: 5,
        title: 'Bake and swirl with round cutter',
        instruction: 'Preheat oven to 180°C (350°F). Place dough balls 3 inches apart on parchment-lined baking sheets. Bake 10-12 minutes until edges are golden and center is still pale and soft. Immediately swirl a round cookie cutter over each hot cookie to shape into a perfect circle. Sprinkle with flaky sea salt.',
        sensoryCue: 'Molten dark chocolate pools with sparkling sea salt.'
      }
    ],
    proTips: [
      'Chilling the cookie dough for even 1 hour hydrates the flour and solidifies the brown butter fat, preventing cookies from spreading thin and greasy.',
      'Use chopped chocolate bars rather than standard chips; chips contain stabilizers that prevent melting, while chopped chocolate melts into decadent glossy pools.'
    ],
    variations: [
      'Toasted Walnut Chocolate Chip: Add 1 cup of chopped toasted walnuts.',
      'Holiday White Chocolate Cranberry: Swap dark chocolate for white chocolate chunks and dried cranberries.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally vegetarian.',
      glutenFree: 'Substitute 1:1 gluten-free measure-for-measure flour.'
    },
    storageAndReheating: {
      refrigeration: 'Store in airtight cookie jar at room temp for up to 1 week with a piece of bread to keep soft.',
      freezing: 'Freeze scooped raw dough balls for up to 3 months; bake straight from frozen, adding 2 minutes.',
      shelfLife: '7 days room temp; 90 days frozen dough.',
      reheating: 'Warm 8 seconds in microwave for molten chocolate pools.'
    },
    faqs: [
      {
        question: 'Why add an extra egg yolk?',
        answer: 'The extra yolk adds fat and emulsifiers without excess egg white water, resulting in that coveted chewy, rich bakery texture.'
      }
    ],
    relatedRecipeIds: ['gf-6', 'cd-4', 'db-2'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  }
];
