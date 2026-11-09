import { Recipe } from '../../types';

export const glutenFreeRecipes: Recipe[] = [
  {
    id: 'gf-1',
    slug: 'easy-gluten-free-christmas-chocolate-cake',
    title: 'Easy Gluten-Free Christmas Chocolate Cake',
    category: 'gluten-free',
    cuisine: 'International',
    countryCode: 'FR',
    difficulty: 'Easy',
    prepTimeMinutes: 25,
    cookTimeMinutes: 35,
    servings: 10,
    featuredImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    summary: 'A decadent, ultra-moist holiday chocolate celebration cake layered with silky whipped chocolate ganache and sugared festive cranberries.',
    story: 'Holiday celebrations should welcome every guest around the table without compromise. This chocolate cake was perfected using fine almond flour, Dutch cocoa, and real brewed coffee, resulting in a crumb so fudgy, velvety, and deep in cocoa flavour that nobody at your Christmas table will ever guess it is entirely gluten-free.',
    whyYouWillLoveIt: [
      'Zero dryness: almond flour and buttermilk keep the sponge luxuriously tender for days.',
      'One-bowl mixing method means effortless holiday baking.',
      'Crowned with glistening ruby sugared cranberries and dark chocolate curls.'
    ],
    dietary: ['gluten-free', 'vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: '1-to-1 Gluten-free baking flour blend (with xanthan gum)', amountMetric: '220 g', amountUS: '1 3/4 cups' },
      { item: 'Superfine blanched almond flour', amountMetric: '60 g', amountUS: '1/2 cup', notes: 'Gives moisture and rich crumb' },
      { item: 'Granulated sugar', amountMetric: '250 g', amountUS: '1 1/4 cups' },
      { item: 'Dutch-process dark cocoa powder', amountMetric: '75 g', amountUS: '3/4 cup' },
      { item: 'Baking powder & baking soda', amountMetric: '1.5 tsp each', amountUS: '1.5 tsp each' },
      { item: 'Fine sea salt', amountMetric: '1 tsp', amountUS: '1 tsp' },
      { item: 'Large eggs at room temp', amountMetric: '2 whole', amountUS: '2 whole' },
      { item: 'Buttermilk or whole milk with 1 tbsp vinegar', amountMetric: '240 ml', amountUS: '1 cup' },
      { item: 'Vegetable oil or melted coconut oil', amountMetric: '120 ml', amountUS: '1/2 cup' },
      { item: 'Hot freshly brewed dark coffee', amountMetric: '240 ml', amountUS: '1 cup', notes: 'Amplifies chocolate notes without tasting like coffee' },
      { item: 'Dark chocolate chips for ganache', amountMetric: '200 g', amountUS: '1 cup' },
      { item: 'Heavy cream for ganache', amountMetric: '160 ml', amountUS: '2/3 cup' }
    ],
    equipment: [
      'Two 8-inch round cake pans',
      'Parchment paper rounds',
      'Large mixing bowl and wire whisk',
      'Wire cooling rack'
    ],
    instructions: [
      {
        step: 1,
        title: 'Whisk dry ingredients',
        instruction: 'Preheat oven to 175°C (350°F). Grease two 8-inch cake pans and line bases with parchment. In a large bowl, whisk gluten-free flour, almond flour, sugar, sifted cocoa, baking powder, baking soda, and salt.',
        sensoryCue: 'Uniform chocolate-colored dry mix with zero cocoa clumps.'
      },
      {
        step: 2,
        title: 'Add wet ingredients and hot coffee',
        instruction: 'Add eggs, buttermilk, oil, and vanilla extract. Whisk for 1 minute until smooth. Pour in hot brewed coffee in a slow stream, whisking gently. The batter will be quite liquid; this is expected for optimal moisture.',
        sensoryCue: 'Glossy, runny chocolate batter with intense cocoa scent.'
      },
      {
        step: 3,
        title: 'Bake both cake rounds',
        instruction: 'Divide batter evenly between pans. Bake for 30-35 minutes until a toothpick inserted in center emerges clean with just a few moist crumbs.',
        sensoryCue: 'Cake springs back lightly when pressed in center.'
      },
      {
        step: 4,
        title: 'Cool and make whipped ganache',
        instruction: 'Cool cakes in pans for 15 minutes, then invert onto wire racks to cool completely. Heat cream until hot; pour over chocolate chips, let sit 2 minutes, whisk smooth, and chill until spreadable.',
        sensoryCue: 'Silky, rich chocolate spread.'
      },
      {
        step: 5,
        title: 'Frost and crown with festive garnish',
        instruction: 'Layer the cooled cakes with ganache between and over top and sides. Garnish with frosted sugared cranberries and fresh rosemary sprigs for a festive Christmas wreath look.',
        sensoryCue: 'Deep dark chocolate contrasted with sparkling frosted red berries.'
      }
    ],
    proTips: [
      'The hot brewed coffee blooms the cocoa powder and relaxes the starch in gluten-free flour, ensuring a remarkably tender crumb.',
      'Always weigh gluten-free flour with a digital kitchen scale rather than scooping with cups to prevent dense cakes.'
    ],
    variations: [
      'Orange Chocolate: Add the finely grated zest of 1 fresh orange to the dry ingredients.',
      'Peppermint Holiday Cake: Add 1/2 tsp pure peppermint extract to the ganache frosting.'
    ],
    dietaryAdaptations: {
      glutenFree: '100% certified gluten-free. Check that your baking powder and xanthan blend are certified GF.',
      dairyFree: 'Substitute almond milk + vinegar for buttermilk, and coconut cream for ganache.'
    },
    storageAndReheating: {
      refrigeration: 'Store under cake dome in refrigerator for up to 5 days.',
      freezing: 'Unfrosted cake layers can be frozen wrapped in plastic for up to 2 months.',
      shelfLife: '5 days refrigerated.',
      reheating: 'Bring to room temperature 30 minutes before serving for maximum fudginess.'
    },
    faqs: [
      {
        question: 'Will the cake taste like coffee?',
        answer: 'Not at all! The coffee simply enhances the chocolate richness without imparting any bitter coffee taste.'
      }
    ],
    relatedRecipeIds: ['gf-2', 'gf-6', 'cd-1'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'mixers-stand']
  },
  {
    id: 'gf-2',
    slug: 'flourless-chocolate-almond-cake',
    title: 'Flourless Italian Chocolate Almond Torte (Torta Caprese)',
    category: 'gluten-free',
    cuisine: 'Italian',
    countryCode: 'IT',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
    summary: 'The world-famous dessert from the Isle of Capri: naturally gluten-free, dense, fudgy dark chocolate cake with toasted ground almonds, rum, and powdered sugar stenciling.',
    story: 'Legend has it that in the 1920s, a baker on the sun-drenched island of Capri forgot to add wheat flour to an almond chocolate cake ordered by gangsters visiting the island. What emerged from the oven was a sensation: moist, rich, and naturally flourless. Today, Torta Caprese is celebrated globally as one of Italy’s most timeless gluten-free masterpieces.',
    whyYouWillLoveIt: [
      'Naturally gluten-free without needing specialty starches or xanthan gum.',
      'Crackly macaron-like crust on top giving way to a dense, melt-in-the-mouth chocolate center.',
      'Incredible pairing with a shot of espresso or a glass of dessert wine.'
    ],
    dietary: ['gluten-free', 'vegetarian'],
    isHolidaySpecial: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'High-quality 70% dark bittersweet chocolate', amountMetric: '200 g', amountUS: '7 oz', notes: 'Chopped' },
      { item: 'Unsalted European butter', amountMetric: '150 g', amountUS: '2/3 cup' },
      { item: 'Blanched whole almonds or almond meal', amountMetric: '200 g', amountUS: '2 cups', notes: 'Lightly toasted and finely ground' },
      { item: 'Large eggs at room temp, separated', amountMetric: '4 eggs', amountUS: '4 eggs' },
      { item: 'Granulated sugar, divided', amountMetric: '150 g', amountUS: '3/4 cup' },
      { item: 'Dark rum or Amaretto liqueur', amountMetric: '2 tbsp', amountUS: '2 tbsp' },
      { item: 'Pure vanilla extract & fine sea salt', amountMetric: '1 tsp vanilla, 1/4 tsp salt', amountUS: '1 tsp vanilla, 1/4 tsp salt' },
      { item: 'Powdered confectioners sugar', amountMetric: 'For dusting', amountUS: 'For dusting' }
    ],
    equipment: [
      '9-inch springform pan',
      'Food processor for grinding almonds',
      'Heatproof glass bowl and small saucepan for double boiler',
      'Hand mixer or stand mixer'
    ],
    instructions: [
      {
        step: 1,
        title: 'Melt chocolate and butter gently',
        instruction: 'Melt chopped chocolate and butter in a heatproof bowl set over a pot of barely simmering water (bain-marie), stirring until smooth. Remove from heat, stir in rum and vanilla, and cool 10 minutes.',
        sensoryCue: 'Glossy dark liquid chocolate.'
      },
      {
        step: 2,
        title: 'Whip yolks and fold ground almonds',
        instruction: 'Preheat oven to 175°C (350°F). Butter a 9-inch springform pan and dust with cocoa powder. In a large bowl, beat egg yolks with 100g sugar until pale and doubled. Fold in chocolate mixture and finely ground toasted almonds.',
        sensoryCue: 'Thick, fragrant chocolate-almond paste.'
      },
      {
        step: 3,
        title: 'Whip whites and fold gently',
        instruction: 'In a separate bowl, whip egg whites with salt until foamy. Add remaining 50g sugar and whip to glossy stiff peaks. Fold 1/3 of whites into chocolate batter to loosen, then fold remaining whites with delicate strokes.',
        sensoryCue: 'Light, mousse-textured batter.'
      },
      {
        step: 4,
        title: 'Bake until crackled on top',
        instruction: 'Pour batter into prepared pan. Bake for 30-35 minutes until the top is set with fine crinkles, but the center still has a very slight moist wobble.',
        sensoryCue: 'A delicate crackled crust forms like a French macaron.'
      },
      {
        step: 5,
        title: 'Cool completely and dust',
        instruction: 'Cool cake in pan on wire rack for 30 minutes, then release springform ring. Dust generously with confectioners powdered sugar before slicing.',
        sensoryCue: 'Fudge-like truffle center contrasts with powdered snow.'
      }
    ],
    proTips: [
      'Toast your whole almonds in a dry pan for 5 minutes before grinding; toasting awakens the natural nut oils and elevates the flavor ten-fold.',
      'Do not overbake; if a toothpick comes out completely dry, the cake will lose its beloved fudgy center.'
    ],
    variations: [
      'Hazelnut Torta: Substitute toasted Italian Piemonte hazelnuts for almonds.',
      'Espresso Torta: Add 1 tsp instant espresso powder to the melting chocolate.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Naturally 100% flourless and gluten-free.',
      dairyFree: 'Substitute extra virgin olive oil (120ml) or dairy-free butter block for butter.'
    },
    storageAndReheating: {
      refrigeration: 'Store covered at room temperature for 3 days or refrigerated for 6 days.',
      freezing: 'Freeze wrapped tightly in foil for up to 2 months.',
      shelfLife: '6 days refrigerated.',
      reheating: 'Warm 8 seconds in microwave and serve with raspberry coulis.'
    },
    faqs: [
      {
        question: 'Can I use pre-bought almond flour?',
        answer: 'Yes! Fine almond flour works beautifully and saves the step of grinding whole nuts in a food processor.'
      }
    ],
    relatedRecipeIds: ['gf-1', 'gf-6', 'cd-1'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'scales-digital']
  },
  {
    id: 'gf-3',
    slug: 'homemade-gluten-free-gingerbread-cookies',
    title: 'Homemade Gluten-Free Gingerbread Cookies',
    category: 'gluten-free',
    cuisine: 'American',
    countryCode: 'US',
    difficulty: 'Easy',
    prepTimeMinutes: 25,
    cookTimeMinutes: 10,
    servings: 24,
    featuredImage: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1200&q=80',
    summary: 'Chewy, beautifully spiced gingerbread men and stars made without wheat flour, maintaining their crisp festive shapes without crumbling.',
    story: 'Gluten-free cookies often suffer from being either rock-hard or turning to sand when rolled. This recipe blends oat flour, almond flour, and a quality gluten-free starch blend with dark molasses and melted butter, creating cutouts that roll smoothly and bake into tender, spiced cookies with soft centers.',
    whyYouWillLoveIt: [
      'Dough rolls cleanly between parchment without tearing or sticking.',
      'Retains crisp cookie-cutter borders in the oven without spreading.',
      'Richly spiced with fresh ginger, cinnamon, and molasses.'
    ],
    dietary: ['gluten-free', 'vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Gluten-free 1-to-1 baking flour (with xanthan)', amountMetric: '300 g', amountUS: '2 1/3 cups' },
      { item: 'Fine almond flour', amountMetric: '60 g', amountUS: '1/2 cup' },
      { item: 'Ground ginger', amountMetric: '1 tbsp', amountUS: '1 tbsp' },
      { item: 'Ground cinnamon & ground cloves', amountMetric: '2 tsp cinnamon, 1/2 tsp cloves', amountUS: '2 tsp cinnamon, 1/2 tsp cloves' },
      { item: 'Baking soda & sea salt', amountMetric: '1/2 tsp each', amountUS: '1/2 tsp each' },
      { item: 'Unsalted butter, softened', amountMetric: '120 g', amountUS: '1/2 cup' },
      { item: 'Dark brown sugar', amountMetric: '100 g', amountUS: '1/2 cup' },
      { item: 'Dark unsulphured molasses', amountMetric: '120 ml', amountUS: '1/2 cup' },
      { item: 'Large egg', amountMetric: '1 whole', amountUS: '1 whole' },
      { item: 'Gluten-free powdered sugar icing for decorating', amountMetric: '150 g sugar + 2 tbsp water', amountUS: '1 cup sugar + 2 tbsp water' }
    ],
    equipment: [
      'Festive cookie cutters',
      'Two baking sheets and parchment paper',
      'Rolling pin'
    ],
    instructions: [
      {
        step: 1,
        title: 'Whisk dry ingredients',
        instruction: 'In a bowl, whisk gluten-free flour, almond flour, ginger, cinnamon, cloves, baking soda, and salt until uniformly mixed.',
        sensoryCue: 'Aromatic holiday spice fragrance.'
      },
      {
        step: 2,
        title: 'Cream butter, sugar, and molasses',
        instruction: 'Beat butter and brown sugar until fluffy. Add molasses and egg, beating until thoroughly blended. Add dry ingredients on low speed until dough forms into a cohesive ball.',
        sensoryCue: 'Rich dark gingerbread dough.'
      },
      {
        step: 3,
        title: 'Chill dough disc',
        instruction: 'Flatten dough into a disc, wrap tightly in cling film, and chill in refrigerator for 2 hours (or up to 2 days) so starches hydrate and firm up.',
        sensoryCue: 'Chilled firm dough that holds its shape.'
      },
      {
        step: 4,
        title: 'Roll and cut shapes',
        instruction: 'Preheat oven to 175°C (350°F). Roll dough between two sheets of parchment paper to 6mm (1/4 inch) thickness. Cut shapes and arrange on parchment-lined baking sheets.',
        sensoryCue: 'Crisp cutout edges.'
      },
      {
        step: 5,
        title: 'Bake and decorate',
        instruction: 'Bake 9-11 minutes. Let cool on the baking sheet for 10 minutes (essential for gluten-free structure to set) before transferring to a wire rack to decorate with icing.',
        sensoryCue: 'Cookies firm up with gentle chew.'
      }
    ],
    proTips: [
      'Always roll gluten-free dough between two sheets of baking parchment; this eliminates the need for extra dusting flour that could dry out the cookies.',
      'Let the cookies cool fully on the tray for 10 minutes before moving them, as hot gluten-free cookies are fragile.'
    ],
    variations: [
      'Iced Spiced Rounds: Cut into rounds, bake, and dip tops in a lemon ginger glaze.',
      'Cranberry Orange: Add 1 tsp orange zest to the dough.'
    ],
    dietaryAdaptations: {
      glutenFree: '100% gluten-free recipe.',
      dairyFree: 'Substitute vegan baking block for butter.'
    },
    storageAndReheating: {
      refrigeration: 'Store in an airtight container at room temperature for 10 days.',
      freezing: 'Freeze baked cookies for up to 2 months.',
      shelfLife: '10 days room temp.',
      reheating: 'Warm 5 seconds in microwave.'
    },
    faqs: [
      {
        question: 'Will these gingerbread men break easily?',
        answer: 'Not with this recipe! The combination of almond flour and xanthan gum in the 1-to-1 blend gives them great elasticity and durability.'
      }
    ],
    relatedRecipeIds: ['cd-4', 'gf-1', 'gf-6'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'gf-4',
    slug: 'gluten-free-festive-cheesecake',
    title: 'Gluten-Free Festive Vanilla Bean Cheesecake with Berry Coulis',
    category: 'gluten-free',
    cuisine: 'American',
    countryCode: 'US',
    difficulty: 'Intermediate',
    prepTimeMinutes: 30,
    cookTimeMinutes: 65,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80',
    summary: 'A velvety, crack-free New York style baked cheesecake with a buttery almond-oat crust, real Madagascar vanilla bean, and glistening raspberry coulis.',
    story: 'Cheesecake is universally adored, but traditional graham cracker crusts exclude gluten-sensitive guests. By grinding certified gluten-free rolled oats, toasted pecans, and butter, this crust tastes even toastier and richer than wheat crackers. The filling is baked gently in a water bath to achieve a pristine, creamy texture.',
    whyYouWillLoveIt: [
      'Toasted nut and oat crust with deep brown sugar and cinnamon notes.',
      'Satin-smooth custard filling infused with real vanilla bean seeds.',
      'Vibrant ruby red fruit coulis adds festive holiday drama.'
    ],
    dietary: ['gluten-free', 'vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Certified gluten-free rolled oats', amountMetric: '150 g', amountUS: '1 1/2 cups', notes: 'Ground in food processor' },
      { item: 'Pecans or walnuts', amountMetric: '60 g', amountUS: '1/2 cup' },
      { item: 'Brown sugar & melted butter for crust', amountMetric: '50 g sugar, 75 g butter', amountUS: '1/4 cup sugar, 5 tbsp butter' },
      { item: 'Full-fat brick cream cheese, room temp', amountMetric: '900 g', amountUS: '4 blocks (32 oz)' },
      { item: 'Granulated sugar', amountMetric: '200 g', amountUS: '1 cup' },
      { item: 'Sour cream, room temp', amountMetric: '240 ml', amountUS: '1 cup' },
      { item: 'Large eggs at room temp', amountMetric: '4 whole', amountUS: '4 whole' },
      { item: 'Madagascar vanilla bean paste', amountMetric: '1 tbsp', amountUS: '1 tbsp' },
      { item: 'Fresh raspberries & sugar for coulis', amountMetric: '250 g berries + 50 g sugar', amountUS: '2 cups berries + 1/4 cup sugar' }
    ],
    equipment: [
      '9-inch springform pan',
      'Wide roasting pan for water bath (bain-marie)',
      'Heavy-duty aluminum foil for wrapping pan bottom',
      'Electric mixer with paddle attachment'
    ],
    instructions: [
      {
        step: 1,
        title: 'Bake the gluten-free crust',
        instruction: 'Preheat oven to 165°C (325°F). Pulse oats, pecans, brown sugar, and melted butter in food processor until crumbly. Press firmly into bottom of a parchment-lined 9-inch springform pan. Bake 10 minutes; cool completely.',
        sensoryCue: 'Golden, fragrant toasted nut crust.'
      },
      {
        step: 2,
        title: 'Beat cream cheese on low speed',
        instruction: 'Beat room temperature cream cheese and sugar on low speed with paddle attachment until silky and lump-free (do not whip on high, which introduces air bubbles). Add sour cream and vanilla.',
        sensoryCue: 'Velvety, glossy cream cheese mixture.'
      },
      {
        step: 3,
        title: 'Add eggs one at a time',
        instruction: 'Add eggs one at a time, mixing on lowest speed just until blended. Pour over cooled crust. Wrap bottom of springform tightly with 3 layers of heavy foil to prevent leaks.',
        sensoryCue: 'Smooth, pale ivory custard.'
      },
      {
        step: 4,
        title: 'Water bath bake and gentle cooling',
        instruction: 'Place cheesecake in roasting pan; fill pan with boiling water halfway up sides of springform. Bake 60-65 minutes until edges are set but center still has a 2-inch gentle jiggle. Turn off oven, crack door, and let sit inside for 1 hour.',
        sensoryCue: 'Pristine flat surface with zero cracks.'
      },
      {
        step: 5,
        title: 'Chill overnight and top with coulis',
        instruction: 'Chill in refrigerator for at least 6 hours (preferably overnight). Simmer raspberries and sugar for 5 minutes, strain through sieve to remove seeds, and spoon over chilled cheesecake before slicing.',
        sensoryCue: 'Glistening ruby coulis cascades over creamy white wedges.'
      }
    ],
    proTips: [
      'All dairy ingredients must be truly at room temperature before mixing to prevent lumps without needing high-speed whipping.',
      'The water bath and slow cooldown in the oven are the secret to a mirror-smooth, crack-free surface.'
    ],
    variations: [
      'Eggnog Holiday Swirl: Add 2 tbsp spiced rum and 1/2 tsp freshly grated nutmeg to the batter.',
      'White Chocolate Cranberry: Swirl warm cranberry compote and melted white chocolate over the top before baking.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Ensure oats are certified gluten-free (purity protocol).',
      vegetarian: 'Naturally vegetarian.'
    },
    storageAndReheating: {
      refrigeration: 'Store tightly covered in refrigerator for up to 6 days.',
      freezing: 'Freeze whole or individual slices wrapped in plastic and foil for up to 2 months.',
      shelfLife: '6 days refrigerated.',
      reheating: 'Serve chilled.'
    },
    faqs: [
      {
        question: 'How do I know when the cheesecake is done?',
        answer: 'Give the pan a gentle shake: the outer 2 inches should be firm, while the center 2-3 inches will jiggle like soft set gelatin.'
      }
    ],
    relatedRecipeIds: ['gf-1', 'ny-6', 'cd-6'],
    recommendedEquipmentIds: ['baking-pan-ceramic', 'mixers-stand']
  },
  {
    id: 'gf-5',
    slug: 'homemade-berry-pavlova-wreath',
    title: 'Gluten-Free Holiday Berry Pavlova Wreath',
    category: 'gluten-free',
    cuisine: 'Australian',
    countryCode: 'AU',
    difficulty: 'Intermediate',
    prepTimeMinutes: 25,
    cookTimeMinutes: 75,
    servings: 10,
    featuredImage: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80',
    summary: 'A festive circular wreath of crisp white meringue with a marshmallow interior, topped with fresh whipped cream, pomegranate arils, fresh berries, and mint sprigs.',
    story: 'Shaped like a traditional Christmas wreath, this stunning pavlova is an eye-catching showpiece for festive dining. Naturally free of gluten, egg whites whip into billowing clouds of sweet meringue that dry crisp in the oven while remaining tender inside, offering a refreshing, light holiday dessert.',
    whyYouWillLoveIt: [
      'Dramatic holiday wreath presentation that lights up the table.',
      'Crisp shell with luscious cloud-like marshmallow core.',
      'Garnished with red berries, green mint, and ruby pomegranate seeds.'
    ],
    dietary: ['gluten-free', 'vegetarian'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Large egg whites, room temperature', amountMetric: '6 whites', amountUS: '6 whites' },
      { item: 'Superfine caster sugar', amountMetric: '300 g', amountUS: '1 1/2 cups' },
      { item: 'Cornstarch (cornflour)', amountMetric: '1 tbsp', amountUS: '1 tbsp' },
      { item: 'Lemon juice or white vinegar', amountMetric: '1 tsp', amountUS: '1 tsp' },
      { item: 'Heavy cream', amountMetric: '300 ml', amountUS: '1 1/4 cups' },
      { item: 'Fresh strawberries, raspberries, and blackberries', amountMetric: '350 g total', amountUS: '2.5 cups total' },
      { item: 'Pomegranate arils (seeds)', amountMetric: '4 tbsp', amountUS: '4 tbsp' },
      { item: 'Fresh baby mint leaves', amountMetric: 'Small handful', amountUS: 'Small handful' }
    ],
    equipment: [
      'Large baking sheet lined with parchment',
      'Stand mixer with clean stainless steel whisk',
      'Large spoon for dolloping meringue into a wreath ring'
    ],
    instructions: [
      {
        step: 1,
        title: 'Draw wreath template',
        instruction: 'Trace a 9-inch circle with a 4-inch inner circle on parchment paper. Flip parchment pencil-side down on baking tray. Preheat oven to 120°C (250°F).',
        sensoryCue: 'Clear circular ring guide.'
      },
      {
        step: 2,
        title: 'Whip meringue to stiff peaks',
        instruction: 'Whip egg whites on medium until soft peaks form. Slowly add sugar 1 tablespoon at a time until stiff, glossy peaks form. Gently fold in cornstarch and lemon juice.',
        sensoryCue: 'Glossy, pearlescent meringue.'
      },
      {
        step: 3,
        title: 'Spoon into a festive wreath',
        instruction: 'Dollop 8-10 large mounds of meringue inside the drawn ring so they touch and form a continuous circle. Use the back of a spoon to create indentations in the top of each mound for toppings.',
        sensoryCue: 'Snow-white wreath ready for the oven.'
      },
      {
        step: 4,
        title: 'Bake and cool in oven',
        instruction: 'Bake for 75 minutes at 120°C (250°F). Turn oven off, leave door slightly ajar, and let cool completely for 2 hours inside oven.',
        sensoryCue: 'Crisp ivory shell.'
      },
      {
        step: 5,
        title: 'Dress with cream and festive fruit',
        instruction: 'Whip cream with 1 tbsp powdered sugar to soft peaks. Spoon into the grooves around the wreath. Decorate with berries, pomegranate jewels, and fresh mint.',
        sensoryCue: 'Breathtaking red and green holiday garland.'
      }
    ],
    proTips: [
      'Ensure mixer bowl is completely free of oil; even a speck of fat prevents egg whites from whipping to full stiff volume.',
      'Assemble within 1 hour of serving for optimal crispness.'
    ],
    variations: [
      'Tropical Passionfruit: Add passionfruit pulp and kiwi slices for sunny vibrancy.',
      'Black Forest: Garnish with pitted dark cherries and dark chocolate shavings.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Naturally 100% gluten-free.',
      dairyFree: 'Whip chilled coconut cream instead of dairy cream.'
    },
    storageAndReheating: {
      refrigeration: 'Store baked meringue base in an airtight tin for up to 3 days at room temp.',
      freezing: 'Do not freeze.',
      shelfLife: 'Eat within 2 hours of assembly.',
      reheating: 'Never reheat.'
    },
    faqs: [
      {
        question: 'Can I make the meringue wreath ahead of time?',
        answer: 'Yes! Bake the meringue wreath the day before and store in a dry airtight container. Add cream and fruit just before serving.'
      }
    ],
    relatedRecipeIds: ['cd-6', 'gf-4', 'ny-5'],
    recommendedEquipmentIds: ['mixers-stand']
  },
  {
    id: 'gf-6',
    slug: 'gluten-free-maple-pecan-brownies',
    title: 'Fudgy Gluten-Free Maple Pecan Brownies',
    category: 'gluten-free',
    cuisine: 'American',
    countryCode: 'US',
    difficulty: 'Easy',
    prepTimeMinutes: 15,
    cookTimeMinutes: 28,
    servings: 16,
    featuredImage: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
    summary: 'Ultra-fudgy dark chocolate brownies sweetened with pure maple syrup and brown sugar, loaded with toasted pecans and sea salt flakes.',
    story: 'Finding a truly fudgy gluten-free brownie that doesn’t turn dry or spongy can be a baker’s challenge. This recipe relies on melted dark chocolate, browned butter, and pure maple syrup for chewiness and depth, studded with toasted Georgia pecans.',
    whyYouWillLoveIt: [
      'Glossy, paper-thin crinkly brownie crust on top.',
      'Dense, fudgy, molten center with zero graininess.',
      'Toasted pecans provide rich buttery crunch in every bite.'
    ],
    dietary: ['gluten-free', 'vegetarian'],
    isHolidaySpecial: false,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: '70% dark bittersweet chocolate, chopped', amountMetric: '200 g', amountUS: '7 oz' },
      { item: 'Unsalted butter', amountMetric: '120 g', amountUS: '1/2 cup' },
      { item: 'Pure maple syrup', amountMetric: '80 ml', amountUS: '1/3 cup' },
      { item: 'Dark brown sugar', amountMetric: '120 g', amountUS: '2/3 cup' },
      { item: 'Large eggs at room temp', amountMetric: '3 eggs', amountUS: '3 eggs' },
      { item: 'Dutch-process cocoa powder', amountMetric: '40 g', amountUS: '1/3 cup' },
      { item: 'Almond flour or 1:1 GF flour', amountMetric: '60 g', amountUS: '1/2 cup' },
      { item: 'Toasted pecans, roughly chopped', amountMetric: '100 g', amountUS: '1 cup' },
      { item: 'Flaky sea salt (Maldon)', amountMetric: '1 tsp', amountUS: '1 tsp' }
    ],
    equipment: [
      '8x8 inch square metal baking pan',
      'Parchment paper with overhang for easy lifting',
      'Heatproof glass bowl'
    ],
    instructions: [
      {
        step: 1,
        title: 'Melt chocolate and butter',
        instruction: 'Preheat oven to 175°C (350°F). Line 8x8 pan with parchment paper. Melt chopped chocolate and butter in a heatproof bowl set over simmering water until smooth. Stir in maple syrup; cool 5 minutes.',
        sensoryCue: 'Silky, warm chocolate stream.'
      },
      {
        step: 2,
        title: 'Whip eggs and sugar for shiny crust',
        instruction: 'In a bowl, beat eggs and brown sugar vigorously for 3 full minutes with whisk until pale and frothy. This creates the coveted crinkly brownie top.',
        sensoryCue: 'Pale, airy ribbons of whipped eggs and sugar.'
      },
      {
        step: 3,
        title: 'Fold chocolate, cocoa, and pecans',
        instruction: 'Gently fold melted chocolate into the whipped eggs. Sift cocoa powder and almond flour over the batter and fold just until combined. Stir in 3/4 of the toasted pecans.',
        sensoryCue: 'Thick, luscious brownie batter.'
      },
      {
        step: 4,
        title: 'Bake and cool completely',
        instruction: 'Spread batter in prepared pan. Scatter remaining pecans and sea salt over top. Bake for 25-28 minutes until edges are firm and center is just set. Cool completely in pan before slicing into 16 squares.',
        sensoryCue: 'Fragrant cocoa and toasted pecan aroma with crinkled surface.'
      }
    ],
    proTips: [
      'Whipping the eggs and sugar for at least 3 minutes is the non-negotiable secret to achieving that signature shiny, crinkly brownie skin.',
      'Brownies slice cleanly when completely cold; chilling them in the fridge for 1 hour yields sharp bakery-perfect squares.'
    ],
    variations: [
      'Espresso Walnut: Add 1 tsp instant espresso and replace pecans with toasted walnuts.',
      'Peppermint Swirl: Fold in crushed candy cane pieces during Christmas season.'
    ],
    dietaryAdaptations: {
      glutenFree: '100% naturally gluten-free using almond flour.',
      dairyFree: 'Substitute refined coconut oil or vegan butter block for butter.'
    },
    storageAndReheating: {
      refrigeration: 'Store in airtight container at room temperature for 5 days or refrigerated for 10 days.',
      freezing: 'Freeze individual squares wrapped in parchment for up to 3 months.',
      shelfLife: '10 days refrigerated.',
      reheating: 'Warm 10 seconds in microwave for warm, molten center.'
    },
    faqs: [
      {
        question: 'Why did my brownies come out cakey?',
        answer: 'Overbaking causes brownies to dry out. Remove when a toothpick inserted into center comes out with moist, fudgy batter crumbs.'
      }
    ],
    relatedRecipeIds: ['gf-1', 'gf-2', 'db-2'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  }
];
