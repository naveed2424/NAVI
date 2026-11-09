import { Recipe } from '../../types';

export const christmasDesserts: Recipe[] = [
  {
    id: 'cd-1',
    slug: 'french-chocolate-buche-de-noel',
    title: 'French Chocolate Bûche de Noël (Yule Log)',
    category: 'christmas-dessert',
    cuisine: 'French',
    countryCode: 'FR',
    difficulty: 'Intermediate',
    prepTimeMinutes: 45,
    cookTimeMinutes: 15,
    servings: 10,
    featuredImage: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
    summary: 'An airy dark chocolate sponge rolled with velvety whipped espresso ganache, coated in textured bark chocolate buttercream and dusted with powdered sugar snow.',
    story: 'The traditional Yule log traces back to ancient hearth rituals where massive oak or beech logs burned through the winter solstice. In 19th-century Paris, master pastry chefs transformed this ancient hearth emblem into a breathtaking dessert. When sliced, the spiral reveals snowy cream against dark sponge, embodying the heart of a French Christmas celebration.',
    whyYouWillLoveIt: [
      'Pliable sponge cake that rolls smoothly without cracking.',
      'Luxurious 70% dark chocolate ganache balanced with real vanilla and espresso.',
      'Stunning realistic tree bark texture sculpted with a simple fork and snow powdered sugar.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Large eggs, separated at room temperature', amountMetric: '4 eggs', amountUS: '4 eggs' },
      { item: 'Fine granulated sugar, divided', amountMetric: '100 g', amountUS: '1/2 cup' },
      { item: 'Dutch-process dark cocoa powder', amountMetric: '40 g', amountUS: '1/3 cup', notes: 'Sifted' },
      { item: 'All-purpose flour or pastry flour', amountMetric: '45 g', amountUS: '1/3 cup' },
      { item: 'Pure vanilla extract', amountMetric: '1 tsp', amountUS: '1 tsp' },
      { item: '70% dark chocolate, finely chopped', amountMetric: '200 g', amountUS: '7 oz' },
      { item: 'Heavy whipping cream', amountMetric: '300 ml', amountUS: '1 1/4 cups' },
      { item: 'Instant espresso powder', amountMetric: '1/2 tsp', amountUS: '1/2 tsp' },
      { item: 'Confectioners powdered sugar', amountMetric: '2 tbsp', amountUS: '2 tbsp', notes: 'For dusting snow' }
    ],
    equipment: [
      '10x15 inch jelly roll baking sheet',
      'Electric stand mixer or hand mixer with whisk attachment',
      'Clean cotton kitchen tea towel for rolling',
      'Offset spatula and fork for bark sculpting'
    ],
    instructions: [
      {
        step: 1,
        title: 'Whip yolks and fold dry ingredients',
        instruction: 'Preheat oven to 180°C (350°F). Line jelly roll pan with parchment. Beat egg yolks with 50g sugar and vanilla until pale and thick ribbons form. Sift cocoa powder and flour over yolk mixture; fold gently with spatula.',
        sensoryCue: 'Rich, glossy dark chocolate batter.'
      },
      {
        step: 2,
        title: 'Whip whites to stiff peaks and fold',
        instruction: 'In a grease-free bowl, whip egg whites until foamy. Gradually add remaining 50g sugar until glossy stiff peaks hold. Fold 1/3 of whites into batter to lighten, then fold remaining whites gently.',
        sensoryCue: 'Light, billowy mousse-like batter with no deflated pockets.'
      },
      {
        step: 3,
        title: 'Quick bake and initial towel roll',
        instruction: 'Spread batter evenly onto prepared pan. Bake 12-14 minutes until springy to light touch. Dust a clean tea towel with cocoa powder. Invert hot cake onto towel, peel off parchment, and immediately roll cake up inside the towel from short end. Let cool rolled.',
        sensoryCue: 'Rolling while steaming creates sponge muscle memory, preventing cracks later.'
      },
      {
        step: 4,
        title: 'Make whipped ganache filling and frost',
        instruction: 'Heat cream and espresso until simmering. Pour over chopped dark chocolate; let sit 2 minutes, then whisk smooth. Chill 1 hour until thick, then whip briefly with mixer until spreadable. Unroll cooled sponge, spread 2/3 of ganache, and re-roll without towel.',
        sensoryCue: 'Tight, clean spiral holding its round log shape.'
      },
      {
        step: 5,
        title: 'Sculpt the tree bark and dust with snow',
        instruction: 'Slice off a 2-inch diagonal piece from one end and attach to the side using ganache to create a log branch. Frost exterior with remaining ganache. Drag the tines of a fork along the length to sculpt rustic wood bark. Dust generously with powdered sugar snow.',
        sensoryCue: 'Enchanting winter woodland centerpiece.'
      }
    ],
    proTips: [
      'Always roll the sponge cake within 2 minutes of leaving the oven; warm steam is what keeps the cake elastic and crack-free.',
      'Chill the finished log for at least 2 hours before serving so the ganache firms for clean, distinct spiral slices.'
    ],
    variations: [
      'Chestnut Cream Bûche: Fill with sweet French crème de marrons (chestnut puree) whipped with heavy cream.',
      'Raspberry White Chocolate: Replace dark chocolate with white chocolate ganache dotted with fresh raspberries.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Substitute 1:1 gluten-free baking blend or cornstarch for the small amount of all-purpose flour; sponge rolls beautifully.',
      dairyFree: 'Use coconut cream and dairy-free 70% chocolate for a decadent vegan ganache.'
    },
    storageAndReheating: {
      refrigeration: 'Store covered in cake dome in refrigerator for up to 4 days.',
      freezing: 'Can be frozen fully assembled without powdered sugar for 1 month. Thaw in fridge overnight.',
      shelfLife: '4 days refrigerated.',
      reheating: 'Serve chilled or at cool room temperature; do not heat.'
    },
    faqs: [
      {
        question: 'What if my cake cracks during rolling?',
        answer: 'Don\'t worry! The chocolate ganache frosting covers any hairline cracks completely, and the cake will taste just as delicious.'
      }
    ],
    relatedRecipeIds: ['cd-2', 'cd-3', 'gf-1'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'mixers-stand']
  },
  {
    id: 'cd-2',
    slug: 'homemade-italian-panettone',
    title: 'Homemade Italian Panettone (Artisanal Milanese Sweet Bread)',
    category: 'christmas-dessert',
    cuisine: 'Italian',
    countryCode: 'IT',
    difficulty: 'Special Occasion',
    prepTimeMinutes: 60,
    cookTimeMinutes: 45,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1200&q=80',
    summary: 'The holy grail of Italian Christmas baking: a towering, featherlight golden sweet brioche scented with candied citrus, Marsala-soaked raisins, and pure vanilla bean.',
    story: 'Originating in Renaissance Milan, Panettone is revered as one of the crowning triumphs of artisanal baking. Its gossamer, feather-soft yellow crumb requires patience, copious egg yolks, rich European cultured butter, and a traditional hanging upside down with knitting needles while cooling to preserve its gravity-defying loft.',
    whyYouWillLoveIt: [
      'Shreds into delicate, buttery golden ribbons with clouds of citrus aroma.',
      'Juicy candied orange peel and plump dark raisins infused with vanilla and citrus zest.',
      'True bakery pride: baking this at home fills the household with memories of an Italian Christmas.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Strong bread flour (high protein)', amountMetric: '500 g', amountUS: '4 cups' },
      { item: 'Active dry yeast or instant yeast', amountMetric: '10 g', amountUS: '1 packet (2 1/4 tsp)' },
      { item: 'Whole milk, lukewarm', amountMetric: '150 ml', amountUS: '2/3 cup' },
      { item: 'Egg yolks (free-range, rich yellow)', amountMetric: '6 yolks', amountUS: '6 yolks' },
      { item: 'Unsalted cultured butter, softened in pieces', amountMetric: '180 g', amountUS: '3/4 cup' },
      { item: 'Fine caster sugar', amountMetric: '120 g', amountUS: '2/3 cup' },
      { item: 'Zest of 1 unwaxed orange and 1 lemon', amountMetric: 'Freshly grated', amountUS: 'Freshly grated' },
      { item: 'Pure vanilla bean paste', amountMetric: '1 tbsp', amountUS: '1 tbsp' },
      { item: 'Golden sultanas and dark raisins', amountMetric: '150 g', amountUS: '1 cup', notes: 'Soaked in warm water or Marsala' },
      { item: 'Candied orange and citron peel, finely diced', amountMetric: '100 g', amountUS: '2/3 cup' }
    ],
    equipment: [
      'Traditional round panettone paper baking mold (6-7 inch diameter)',
      'Stand mixer with dough hook attachment',
      'Two long metal skewers or clean knitting needles for hanging'
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare aromatics and sponge starter',
        instruction: 'Soak raisins and candied peel in warm water or Marsala for 30 minutes, then drain and pat dry. In mixer bowl, dissolve yeast and 1 tsp sugar in warm milk with 100g flour. Rest 30 minutes until bubbling.',
        sensoryCue: 'Frothy, yeasty starter puffed with honeycomb bubbles.'
      },
      {
        step: 2,
        title: 'Develop the gluten and incorporate eggs',
        instruction: 'Add remaining flour, sugar, orange and lemon zest, vanilla, and egg yolks one by one. Knead on medium-low speed with dough hook for 10 minutes until smooth, glossy dough forms.',
        sensoryCue: 'Dough slaps against the bowl sides, becoming elastic.'
      },
      {
        step: 3,
        title: 'Incorporate softened butter piece by piece',
        instruction: 'Gradually add butter one tablespoon at a time, kneading continuously until each piece is fully emulsified before adding the next. Knead 12-15 minutes until dough passes the translucent windowpane test.',
        sensoryCue: 'Silky, supple golden dough that stretches thin without tearing.'
      },
      {
        step: 4,
        title: 'Fold fruit and first slow rise',
        instruction: 'Gently fold drained raisins and candied peel into the dough. Transfer to a lightly buttered bowl, cover with damp cloth, and let rise at warm room temperature for 3 to 4 hours until tripled in volume.',
        sensoryCue: 'Huge, airy dome emitting sweet butter and citrus fragrances.'
      },
      {
        step: 5,
        title: 'Shape into mold, score cross, and bake',
        instruction: 'Punch dough gently down. Shape into a round taut boule and place into panettone paper mold. Let rise until dough crests just above mold rim (2-3 hours). Score a shallow cross on top; place a pat of butter in center. Bake at 170°C (340°F) for 40-45 minutes until deep mahogany.',
        sensoryCue: 'Tall rounded dome with glorious toasted crust.'
      },
      {
        step: 6,
        title: 'Hang upside down to cool',
        instruction: 'Immediately upon removing from oven, pierce two long metal skewers through bottom of panettone. Suspend upside down between two pots or sturdy boxes for 4-6 hours until completely cooled.',
        sensoryCue: 'Inverting allows crumb to set without collapsing under its own airy weight.'
      }
    ],
    proTips: [
      'The inverted cooling step is non-negotiable! The crumb is so airy and rich with butter that without hanging upside down, it will sink in the center.',
      'High-protein bread flour (12-14% protein) is essential to build the gluten mesh that traps the rise.'
    ],
    variations: [
      'Chocolate Chip Panettone: Replace candied citrus with dark chocolate chunks and a swirl of hazelnut cocoa paste.',
      'Pistachio Glazed: Top with sweet ground almond and sugar pearl glaze before baking.'
    ],
    dietaryAdaptations: {
      vegetarian: 'Naturally vegetarian; use farm-fresh pasture eggs for deep yellow hue.'
    },
    storageAndReheating: {
      refrigeration: 'Do not refrigerate. Store inside a large sealed plastic bread bag for up to 10 days.',
      freezing: 'Freeze thick slices wrapped in foil for up to 2 months; makes incredible French toast.',
      shelfLife: '10 days room temp.',
      reheating: 'Warm a thick slice lightly in toaster oven; spread with mascarpone.'
    },
    faqs: [
      {
        question: 'Can I bake Panettone in a standard cake tin?',
        answer: 'You can line a deep 7-inch soufflé or cake tin with a tall collar of double-thick parchment paper extending 3 inches above the rim.'
      }
    ],
    relatedRecipeIds: ['cd-3', 'cd-1', 'it-2'],
    recommendedEquipmentIds: ['mixers-stand', 'baking-pan-ceramic']
  },
  {
    id: 'cd-3',
    slug: 'german-christmas-stollen',
    title: 'Dresdner Christstollen (Traditional German Christmas Stollen)',
    category: 'christmas-dessert',
    cuisine: 'German',
    countryCode: 'DE',
    difficulty: 'Intermediate',
    prepTimeMinutes: 40,
    cookTimeMinutes: 45,
    servings: 14,
    featuredImage: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
    summary: 'A dense, richly spiced holiday bread packed with rum-macerated currants, candied peel, slivered almonds, a core of almond marzipan, and bathed in browned butter and snow sugar.',
    story: 'In Dresden, Germany, the Stollen tradition dates back to the 15th century. Shaped with a folded ridge said to symbolize the swaddled Christ child, authentic Stollen is baked weeks before Christmas and allowed to age in a cool larder. The thick shell of melted butter and powdered sugar seals the interior, allowing spices and rum to ripen into deep holiday perfection.',
    whyYouWillLoveIt: [
      'Incredible shelf life: tastes even richer two weeks after baking as flavours marry.',
      'Sweet marzipan ribbon running through the center of every tender slice.',
      'Buttery, spice-perfumed crumb fragrant with cardamom, mace, and Jamaica rum.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'All-purpose or unbleached bread flour', amountMetric: '500 g', amountUS: '4 cups' },
      { item: 'Active dry yeast', amountMetric: '10 g', amountUS: '1 packet' },
      { item: 'Whole milk, lukewarm', amountMetric: '180 ml', amountUS: '3/4 cup' },
      { item: 'Unsalted high-fat European butter, softened', amountMetric: '200 g', amountUS: '1 cup' },
      { item: 'Granulated sugar', amountMetric: '75 g', amountUS: '1/3 cup' },
      { item: 'Dark Jamaica rum', amountMetric: '60 ml', amountUS: '1/4 cup' },
      { item: 'Currants and golden raisins', amountMetric: '200 g', amountUS: '1 1/3 cups', notes: 'Soaked in rum overnight' },
      { item: 'Candied lemon and orange peel, chopped', amountMetric: '80 g', amountUS: '1/2 cup' },
      { item: 'Blanched slivered almonds', amountMetric: '80 g', amountUS: '3/4 cup' },
      { item: 'Ground cardamom and ground mace or nutmeg', amountMetric: '1 tsp each', amountUS: '1 tsp each' },
      { item: 'Pure almond marzipan paste', amountMetric: '200 g', amountUS: '7 oz', notes: 'Rolled into log' },
      { item: 'Melted butter & powdered sugar for finishing', amountMetric: '100 g butter, 100 g sugar', amountUS: '1/2 cup butter, 1 cup sugar' }
    ],
    equipment: [
      'Baking sheet lined with baking parchment',
      'Stand mixer or large ceramic mixing bowl',
      'Pastry brush for generous butter bathing'
    ],
    instructions: [
      {
        step: 1,
        title: 'Macerate fruit in rum overnight',
        instruction: 'In a bowl, combine currants, raisins, candied peel, and rum. Cover and let stand overnight (or at least 3 hours) so the fruit drinks the rum and plumps up.',
        sensoryCue: 'Plump, glossy jewels radiating heady aroma of spice and dark rum.'
      },
      {
        step: 2,
        title: 'Make the yeast dough',
        instruction: 'Whisk warm milk, yeast, and 1 tsp sugar with 100g flour. Let rise 20 minutes until bubbly. Knead in remaining flour, sugar, butter, cardamom, mace, and salt into a firm, rich dough.',
        sensoryCue: 'Firm, buttery dough that feels smooth and heavy.'
      },
      {
        step: 3,
        title: 'Knead in fruit and almonds',
        instruction: 'Turn dough out onto counter. Gently press in soaked fruit, rum juices, and almonds, kneading just until distributed without tearing the fruit. Let rest 45 minutes.',
        sensoryCue: 'Dough studded with ruby and golden fruit.'
      },
      {
        step: 4,
        title: 'Shape with traditional marzipan fold',
        instruction: 'Roll dough into an oval about 1 inch thick. Roll marzipan into a cylinder the length of the dough; lay in center. Fold one side of dough over marzipan so the edge sits just past center, forming the classic Stollen ridge. Transfer to parchment sheet.',
        sensoryCue: 'Classic asymmetrical folded loaf.'
      },
      {
        step: 5,
        title: 'Bake and butter-bath immediately',
        instruction: 'Bake at 180°C (350°F) for 40-45 minutes until golden brown. Immediately brush piping-hot loaf generously with melted butter until absorbed. Generously coat with powdered sugar. Repeat butter and sugar coating once more to seal.',
        sensoryCue: 'A pristine, sparkling white crust like fresh winter snow.'
      }
    ],
    proTips: [
      'Pick off any exposed exterior raisins before baking, or they will scorch and taste bitter; simply push them under the dough surface.',
      'For maximum flavor, wrap the cooled Stollen in parchment and foil, and let it rest in a cool pantry for 1-2 weeks before slicing.'
    ],
    variations: [
      'Nut Stollen (Nussstollen): Fill with a spiced hazelnut and walnut paste instead of marzipan.',
      'Poppy Seed Stollen: Spread with a sweet ground poppy seed filling (Mohnstollen).'
    ],
    dietaryAdaptations: {
      vegetarian: '100% vegetarian holiday classic.',
      dairyFree: 'Substitute high-grade plant-based European butter block for dough and finishing bath.'
    },
    storageAndReheating: {
      refrigeration: 'Do not refrigerate. Wrap in parchment and foil in a cool dark pantry for up to 4 weeks.',
      freezing: 'Freeze sliced portions wrapped tightly in foil for 3 months.',
      shelfLife: '4 weeks at cool room temperature.',
      reheating: 'Slice thinly and enjoy at room temperature alongside German mulled wine (Glühwein).'
    },
    faqs: [
      {
        question: 'Why does Stollen need so much butter on top?',
        answer: 'The butter and thick sugar crust function as a natural preserving seal that keeps the bread inside moist and fresh for weeks.'
      }
    ],
    relatedRecipeIds: ['cd-2', 'cd-4', 'it-3'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'cd-4',
    slug: 'american-homemade-gingerbread-cookies',
    title: 'Traditional American Soft-Baked Gingerbread Cookies',
    category: 'christmas-dessert',
    cuisine: 'American',
    countryCode: 'US',
    difficulty: 'Easy',
    prepTimeMinutes: 25,
    cookTimeMinutes: 10,
    servings: 24,
    featuredImage: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1200&q=80',
    summary: 'Chewy, spiced gingerbread men with crisp edges and soft centers, fragrant with dark molasses, fresh ground ginger, cinnamon, and royal icing details.',
    story: 'No holiday kitchen is complete without the cheerful aroma of spiced gingerbread men emerging from the oven. Unlike hard, cardboard-like cutouts, this beloved family recipe yields cookies with gently crisp edges and a delightfully chewy, soft molasses center that stays tender for days.',
    whyYouWillLoveIt: [
      'Perfect soft-and-chewy texture that keeps its shape without spreading.',
      'Warming spice profile: ginger, cinnamon, cloves, and rich unsulphured dark molasses.',
      'Smooth, pipeable royal icing for decorating with children and family.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'All-purpose flour', amountMetric: '420 g', amountUS: '3 1/4 cups' },
      { item: 'Ground ginger', amountMetric: '1 tbsp', amountUS: '1 tbsp' },
      { item: 'Ground cinnamon', amountMetric: '2 tsp', amountUS: '2 tsp' },
      { item: 'Ground cloves and allspice', amountMetric: '1/2 tsp each', amountUS: '1/2 tsp each' },
      { item: 'Baking soda & fine sea salt', amountMetric: '3/4 tsp soda, 1/2 tsp salt', amountUS: '3/4 tsp soda, 1/2 tsp salt' },
      { item: 'Unsalted butter, softened', amountMetric: '170 g', amountUS: '3/4 cup' },
      { item: 'Dark brown sugar, packed', amountMetric: '150 g', amountUS: '3/4 cup' },
      { item: 'Dark unsulphured molasses', amountMetric: '160 ml', amountUS: '1/2 cup' },
      { item: 'Large egg', amountMetric: '1 whole', amountUS: '1 whole' },
      { item: 'Confectioners sugar and milk for royal icing', amountMetric: '200 g sugar, 2-3 tbsp milk', amountUS: '1 1/2 cups sugar, 2-3 tbsp milk' }
    ],
    equipment: [
      'Gingerbread man and festive cookie cutters',
      'Rolling pin with thickness rings',
      'Baking sheets lined with silicone mats or parchment',
      'Piping bag with small round tip'
    ],
    instructions: [
      {
        step: 1,
        title: 'Whisk dry spices and flour',
        instruction: 'In a medium bowl, whisk flour, ginger, cinnamon, cloves, allspice, baking soda, and salt. Set aside.',
        sensoryCue: 'Intense warming bakery bouquet of holiday spices.'
      },
      {
        step: 2,
        title: 'Cream butter, molasses, and egg',
        instruction: 'In a stand mixer, cream butter and brown sugar until fluffy. Beat in dark molasses and egg until completely smooth. Gradually blend in dry ingredients until a soft dough forms.',
        sensoryCue: 'Dark brown, glossy, pliable cookie dough.'
      },
      {
        step: 3,
        title: 'Chill dough thoroughly',
        instruction: 'Divide dough into two discs, wrap in plastic film, and chill in refrigerator for at least 3 hours (or overnight). Cold dough prevents cookies from spreading in the oven.',
        sensoryCue: 'Firm dough easy to roll without sticking.'
      },
      {
        step: 4,
        title: 'Roll, cut, and bake',
        instruction: 'Preheat oven to 175°C (350°F). Roll dough on floured surface to 6mm (1/4 inch) thickness. Cut shapes with floured cookie cutters. Place 1 inch apart on prepared baking sheets. Bake 8-10 minutes just until edges are set.',
        sensoryCue: 'Cookies will look slightly soft in center; they firm upon cooling.'
      },
      {
        step: 5,
        title: 'Decorate with royal icing',
        instruction: 'Cool on wire rack. Whisk powdered sugar, milk, and 1/4 tsp vanilla into stiff piping icing. Pipe smileys, buttons, and festive borders.',
        sensoryCue: 'Crisp white icing outlines against deep bronze gingerbread.'
      }
    ],
    proTips: [
      'Do not overbake! Remove from the oven when edges are set but centers are still slightly tender to touch for that prized chewy bite.',
      'Reroll scraps only once to keep cookies tender.'
    ],
    variations: [
      'Gingerbread Sandwich Cookies: Sandwich pairs of round cookies with orange cream cheese frosting.',
      'Chocolate Dipped: Dip half of each cookie into melted dark chocolate and sprinkle with candied ginger.'
    ],
    dietaryAdaptations: {
      glutenFree: 'See our dedicated Gluten-Free Gingerbread Cookies recipe in Category 3!',
      vegan: 'Use flax egg (1 tbsp ground flax + 3 tbsp water) and vegan butter block.'
    },
    storageAndReheating: {
      refrigeration: 'Store in airtight tin at room temperature for up to 2 weeks.',
      freezing: 'Freeze baked cookies or unbaked cutouts for up to 2 months.',
      shelfLife: '14 days at room temperature.',
      reheating: 'Warm 5 seconds in microwave for fresh-baked softness.'
    },
    faqs: [
      {
        question: 'Why did my gingerbread spread and lose its shape?',
        answer: 'Dough was likely too warm when entering the oven. Always pop the cut cookies on their tray into the freezer for 10 minutes right before baking.'
      }
    ],
    relatedRecipeIds: ['gf-3', 'cd-5', 'db-6'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'cd-5',
    slug: 'canadian-butter-tarts',
    title: 'Traditional Canadian Butter Tarts with Flaky Pastry',
    category: 'christmas-dessert',
    cuisine: 'Canadian',
    countryCode: 'CA',
    difficulty: 'Easy',
    prepTimeMinutes: 30,
    cookTimeMinutes: 20,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    summary: 'Canada’s iconic holiday treasure: miniature pastry shells filled with a gooey brown sugar, butter, and maple syrup custard with crunchy toasted pecans.',
    story: 'Considered Canada’s quintessential national dessert, butter tarts have graced prairie holiday sideboards and Ontario cottages since the turn of the 20th century. Every Canadian family holds a passionate stance on whether the filling should be runny or firm, and whether raisins or pecans belong inside. This recipe achieves the prized golden mean: a semi-runny, luscious center inside a melt-in-your-mouth pastry shell.',
    whyYouWillLoveIt: [
      'Shatteringly flaky homemade butter pastry that holds rich filling without getting soggy.',
      'Caramelized brown sugar and maple syrup filling that oozes slightly when bitten.',
      'Quick and easy to bake in batches for Christmas gifting and holiday cookie swaps.'
    ],
    dietary: ['vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'All-purpose flour for pastry', amountMetric: '250 g', amountUS: '2 cups' },
      { item: 'Cold unsalted butter, cubed', amountMetric: '150 g', amountUS: '2/3 cup' },
      { item: 'Ice water with splash of cider vinegar', amountMetric: '60 - 80 ml', amountUS: '1/4 - 1/3 cup' },
      { item: 'Dark brown sugar', amountMetric: '150 g', amountUS: '3/4 cup' },
      { item: 'Pure Canadian maple syrup', amountMetric: '80 ml', amountUS: '1/3 cup' },
      { item: 'Unsalted butter, melted and cooled', amountMetric: '60 g', amountUS: '4 tbsp' },
      { item: 'Large egg lightly beaten', amountMetric: '1 whole', amountUS: '1 whole' },
      { item: 'Pure vanilla extract and pinch of sea salt', amountMetric: '1 tsp vanilla, 1/4 tsp salt', amountUS: '1 tsp vanilla, 1/4 tsp salt' },
      { item: 'Chopped pecans or dark raisins', amountMetric: '60 g', amountUS: '1/2 cup', notes: 'Optional, according to your family tradition' }
    ],
    equipment: [
      'Standard 12-cup muffin tin',
      '4-inch round fluted cookie or biscuit cutter',
      'Rolling pin',
      'Small mixing bowl and whisk'
    ],
    instructions: [
      {
        step: 1,
        title: 'Make flaky pastry dough',
        instruction: 'Cut cold cubed butter into flour and salt using pastry blender or fingers until pea-sized crumbs remain. Drizzle ice water gradually until dough just holds together. Shape into flat disc, wrap, and chill 30 minutes.',
        sensoryCue: 'Specks of visible cold butter ensure flaky layers.'
      },
      {
        step: 2,
        title: 'Roll and line muffin cups',
        instruction: 'Roll pastry on lightly floured surface to 3mm thickness. Cut twelve 4-inch circles. Gently press into cups of a 12-cup muffin tin, fluting edges slightly. Chill shells 15 minutes.',
        sensoryCue: 'Pastry sits neatly flush with top of muffin wells.'
      },
      {
        step: 3,
        title: 'Whisk the butter tart filling',
        instruction: 'In a bowl, whisk brown sugar, maple syrup, melted butter, egg, vanilla, and salt until smooth and glossy. Scatter pecans or raisins into bottom of each pastry shell.',
        sensoryCue: 'Liquid gold caramel scent fills the kitchen.'
      },
      {
        step: 4,
        title: 'Fill and bake',
        instruction: 'Preheat oven to 190°C (375°F). Fill shells no more than 2/3 full (do not overfill or sugar syrup will bubble over and stick). Bake on lowest oven rack for 18-20 minutes until pastry is golden and filling is bubbling with a slight crust.',
        sensoryCue: 'Pastry turns crisp golden and filling bubbles gently.'
      },
      {
        step: 5,
        title: 'Cool and loosen',
        instruction: 'Let cool in pan for 10 minutes, run a thin knife around edges to prevent sticking, then transfer to wire rack to cool completely.',
        sensoryCue: 'Custard sets to a dreamy, gooey center.'
      }
    ],
    proTips: [
      'Bake on the bottom third rack of the oven; this ensures the bottom crust cooks through to crisp perfection before the sugary filling browns.',
      'Never overfill the tart shells; 2/3 full is the golden rule to keep caramel from cementing to the metal tin.'
    ],
    variations: [
      'Pecan Butter Tarts: Top with half pecan jewels before baking.',
      'Whisky Butter Tarts: Stir 1 tablespoon of Canadian rye whisky into the filling mixture.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Use certified gluten-free 1:1 pie crust blend with 1/4 tsp xanthan gum.',
      vegetarian: 'Naturally vegetarian.'
    },
    storageAndReheating: {
      refrigeration: 'Store in airtight container at cool room temperature for 3 days or refrigerated for 7 days.',
      freezing: 'Freeze baked tarts for up to 3 months. Thaw at room temperature for 1 hour.',
      shelfLife: '7 days refrigerated.',
      reheating: 'Warm 5 minutes in 160°C (325°F) toaster oven for gooey warmth.'
    },
    faqs: [
      {
        question: 'How do I get a gooey runny center?',
        answer: 'Bake for exactly 17-18 minutes; when you remove them, the center should still have a gentle jiggle.'
      }
    ],
    relatedRecipeIds: ['cd-4', 'cd-6', 'db-1'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'cd-6',
    slug: 'australian-pavlova-with-fresh-berries',
    title: 'Classic Australian Christmas Berry Pavlova',
    category: 'christmas-dessert',
    cuisine: 'Australian',
    countryCode: 'AU',
    difficulty: 'Intermediate',
    prepTimeMinutes: 25,
    cookTimeMinutes: 75,
    servings: 10,
    featuredImage: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80',
    summary: 'A crisp, snow-white meringue shell with a marshmallow cloud interior, piled high with vanilla bean chantilly cream, fresh strawberries, raspberries, blueberries, and passionfruit pulp.',
    story: 'Down Under, Christmas dinner culminates with the dramatic arrival of a glorious Pavlova. Named after the Russian ballerina Anna Pavlova during her 1920s tour, this confection is the Southern Hemisphere’s ultimate holiday showstopper. Its ethereal marshmallow center beneath a crisp meringue crust provides refreshing lightness after festive feasts.',
    whyYouWillLoveIt: [
      'Contrast of textures: crackly, melt-in-the-mouth meringue exterior with pillowy marshmallow core.',
      'Crowned with mountains of fresh seasonal summer berries and tangy passionfruit.',
      'Naturally gluten-free and stunningly photogenic on any holiday table.'
    ],
    dietary: ['gluten-free', 'vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Large egg whites at room temperature', amountMetric: '6 egg whites', amountUS: '6 egg whites', notes: 'Zero yolk traces' },
      { item: 'Fine caster sugar (superfine)', amountMetric: '300 g', amountUS: '1 1/2 cups' },
      { item: 'Cornstarch (cornflour)', amountMetric: '1 tbsp', amountUS: '1 tbsp', notes: 'Gives the marshmallow center' },
      { item: 'White vinegar or lemon juice', amountMetric: '1 tsp', amountUS: '1 tsp' },
      { item: 'Pure vanilla bean paste', amountMetric: '1 tsp', amountUS: '1 tsp' },
      { item: 'Heavy whipping cream, cold', amountMetric: '300 ml', amountUS: '1 1/4 cups' },
      { item: 'Fresh berries (strawberries, raspberries, blueberries)', amountMetric: '400 g total', amountUS: '3 cups total' },
      { item: 'Fresh passionfruit pulp', amountMetric: '2-3 whole', amountUS: '2-3 whole', notes: 'Seeds and juice for signature tart finish' }
    ],
    equipment: [
      'Baking sheet lined with baking parchment',
      'Electric stand mixer with spotless stainless steel whisk',
      'Offset spatula for sculpting meringue mound'
    ],
    instructions: [
      {
        step: 1,
        title: 'Draw guide and prep meringue base',
        instruction: 'Preheat oven to 120°C (250°F). Draw an 8-inch (20cm) circle on baking parchment and flip pencil-side down on baking sheet. Wipe mixer bowl with lemon juice to remove any trace oil.',
        sensoryCue: 'Completely clean, dry equipment ensures maximum foam volume.'
      },
      {
        step: 2,
        title: 'Whip whites and gradually add sugar',
        instruction: 'Whip egg whites on medium speed until soft peaks form. Gradually add caster sugar one tablespoon at a time, beating 30 seconds between each addition. Beat until sugar crystals have completely dissolved and meringue is thick, glossy, and holds stiff peaks.',
        sensoryCue: 'Rub a little meringue between fingers; it should feel smooth without grittiness.'
      },
      {
        step: 3,
        title: 'Fold cornstarch and vinegar',
        instruction: 'Gently fold in cornstarch, white vinegar, and vanilla with a rubber spatula just until combined.',
        sensoryCue: 'Lustrous, velvety meringue that stands proud.'
      },
      {
        step: 4,
        title: 'Sculpt the pavlova mound',
        instruction: 'Spoon meringue onto parchment inside the drawn circle. Use spatula to smooth sides upward, creating a slight crater in top for fruit and cream to nest in later.',
        sensoryCue: 'Sculpted white crown with gentle vertical ridges.'
      },
      {
        step: 5,
        title: 'Bake low and slow, then cool in oven',
        instruction: 'Bake for 75 minutes. The meringue should be crisp on outside and pale ivory. Turn off the oven, prop door ajar with a wooden spoon, and let pavlova cool completely inside the oven for 2 hours.',
        sensoryCue: 'Slow cooling prevents dramatic temperature shock and major collapse.'
      },
      {
        step: 6,
        title: 'Assemble with cream and berries',
        instruction: 'Transfer cooled meringue to serving platter. Whip cold cream to soft pillowy peaks. Spoon over center crater. Top with fresh berries and spoon fresh passionfruit pulp over everything right before serving.',
        sensoryCue: 'A cascade of red, purple, and gold fruit over snow-white cream.'
      }
    ],
    proTips: [
      'The vinegar and cornstarch are the chemistry secret: they keep the inside tender and marshmallowy while the exterior dries crisp.',
      'Always add the cream and berries right before serving to maintain the meringue\'s crisp outer shell.'
    ],
    variations: [
      'Mango & Pomegranate Pavlova: Tropical Australian summer style with sliced sweet Kensington Pride mangoes and pomegranate jewels.',
      'Chocolate Swirl: Fold 2 tablespoons cocoa powder into meringue before baking for a marbled effect.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Naturally 100% gluten-free!',
      vegetarian: 'Naturally vegetarian.'
    },
    storageAndReheating: {
      refrigeration: 'Store unassembled baked meringue in an airtight container at room temperature for up to 3 days.',
      freezing: 'Meringue cannot be frozen once cream is applied.',
      shelfLife: 'Eat within 2 hours of assembly.',
      reheating: 'Never reheat.'
    },
    faqs: [
      {
        question: 'Why did my pavlova weep liquid sugar beads?',
        answer: 'Sugar was added too quickly or didn\'t fully dissolve during whipping. Add sugar one tablespoon at a time and whip until dissolved.'
      }
    ],
    relatedRecipeIds: ['gf-5', 'ny-5', 'cm-6'],
    recommendedEquipmentIds: ['mixers-stand']
  }
];
