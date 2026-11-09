import { Recipe } from '../../types';

export const christmasMains: Recipe[] = [
  {
    id: 'cm-1',
    slug: 'traditional-american-glazed-christmas-ham',
    title: 'Traditional American Glazed Christmas Ham',
    category: 'christmas-main',
    cuisine: 'American',
    countryCode: 'US',
    difficulty: 'Easy',
    prepTimeMinutes: 20,
    cookTimeMinutes: 120,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    stageImages: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80'
    ],
    summary: 'A centerpiece bone-in spiral ham basted in a rich glaze of dark brown sugar, Dijon mustard, whole cloves, and spiced apple cider.',
    story: 'Holiday ham has anchored American celebratory tables for generations. Unlike roasts that require minute-by-minute carving anxiety, a pre-cooked bone-in ham allows the cook to welcome guests with ease. The real kitchen alchemy occurs in the final forty minutes when caramelized sugar, warming cloves, and mustard bubble together on the scored rind, filling the entire house with the unmistakable fragrance of Christmas gathering.',
    whyYouWillLoveIt: [
      'Nearly foolproof: using a fully cooked bone-in smoked ham eliminates guesswork on doneness.',
      'Sticky, golden lacquer crust with the sweet-tangy balance of cider, molasses, and mustard.',
      'Spectacular yields: feeds a crowd on Christmas Day and leaves prized bone and leftovers for pea soup and holiday biscuits.'
    ],
    dietary: ['dairy-free'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Bone-in spiral cut smoked ham', amountMetric: '4.5 kg', amountUS: '10 lbs', notes: 'Uncured or traditionally smoked bone-in' },
      { item: 'Dark brown sugar, packed', amountMetric: '200 g', amountUS: '1 cup' },
      { item: 'Pure apple cider or unsweetened apple juice', amountMetric: '240 ml', amountUS: '1 cup' },
      { item: 'Dijon mustard', amountMetric: '45 g', amountUS: '3 tbsp', substitutions: 'Whole grain German mustard' },
      { item: 'Pure maple syrup', amountMetric: '60 ml', amountUS: '1/4 cup' },
      { item: 'Apple cider vinegar', amountMetric: '30 ml', amountUS: '2 tbsp' },
      { item: 'Ground cinnamon & ground nutmeg', amountMetric: '1 tsp each', amountUS: '1 tsp each' },
      { item: 'Whole cloves', amountMetric: '20-25 pieces', amountUS: '20-25 pieces', notes: 'For scoring into diamond fat cap' }
    ],
    equipment: [
      'Heavy roasting pan with roasting rack',
      'Heavy-duty aluminum foil',
      'Small saucepan for simmering glaze',
      'Silicone pastry basting brush',
      'Sharp chef knife or paring knife for diamond scoring'
    ],
    instructions: [
      {
        step: 1,
        title: 'Temper the ham and preheat the oven',
        instruction: 'Remove the ham from the refrigerator 1.5 to 2 hours before cooking so it comes to cool room temperature. Preheat oven to 160°C (325°F). Set rack to lowest third.',
        sensoryCue: 'Ham surface should no longer feel icy to the touch.'
      },
      {
        step: 2,
        title: 'Score the rind and stud with cloves',
        instruction: 'Using a sharp paring knife, score the top fat cap in a diamond lattice pattern about 1/2 cm (1/4 inch) deep. Press a whole clove firmly into the center of each diamond cross section.',
        sensoryCue: 'A beautiful geometric lattice pattern appears across the fat.'
      },
      {
        step: 3,
        title: 'Initial covered gentle roast',
        instruction: 'Place ham cut-side down on the rack in roasting pan. Pour 1/2 cup of apple cider into bottom of pan to keep environment moist. Tent tightly with two overlapping sheets of foil. Roast for 1 hour 15 minutes.',
        sensoryCue: 'Gentle warmth builds slowly without drying out interior meat.'
      },
      {
        step: 4,
        title: 'Simmer the spiced glaze',
        instruction: 'In a small saucepan over medium heat, whisk remaining apple cider, brown sugar, Dijon mustard, maple syrup, vinegar, cinnamon, and nutmeg. Bring to a gentle boil, then simmer 4-6 minutes until syrupy and reduced by a third.',
        sensoryCue: 'Glossy dark amber syrup with fragrant steam of cloves and mustard.'
      },
      {
        step: 5,
        title: 'Glaze and caramelize in stages',
        instruction: 'Remove foil from ham and discard. Generously brush ham with 1/3 of warm glaze. Increase oven temperature to 190°C (375°F). Return to oven uncovered. Brush with more glaze every 10 minutes for 30 minutes total.',
        sensoryCue: 'Bubbling mahogany crust with deeply caramelized edges and sizzling fat.'
      },
      {
        step: 6,
        title: 'Rest before carving',
        instruction: 'Transfer ham to a warm serving platter and spoon pan drippings over the top. Let rest for 20 minutes before slicing along the bone.',
        sensoryCue: 'Juices redistribute, making every slice tender and glistening.'
      }
    ],
    proTips: [
      'Never roast an uncapped cold ham straight from the fridge; cold ham requires double cooking time and dries out outside edges.',
      'Keep the foil tent tight during the first phase so the ham gently steams in its own natural juices before glazing.'
    ],
    variations: [
      'Bourbon Spiced Glaze: Add 45 ml (3 tbsp) bourbon whiskey to the glaze saucepan during simmering.',
      'Orange Ginger: Replace apple cider with fresh orange juice and zest with 1 tsp grated fresh ginger.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Ensure your brand of prepared Dijon mustard and smoked ham are certified gluten-free (most are naturally gluten-free).',
      dairyFree: 'Naturally 100% dairy-free as prepared.'
    },
    storageAndReheating: {
      refrigeration: 'Store carved slices and bone wrapped airtight in refrigerator for up to 5 days.',
      freezing: 'Freeze sliced portions wrapped tightly in parchment and freezer bags for up to 3 months.',
      shelfLife: '5 days refrigerated; 90 days frozen.',
      reheating: 'Place slices in a baking dish with 2 tablespoons broth, cover tightly with foil, and warm at 160°C (325°F) for 12 minutes.'
    },
    faqs: [
      {
        question: 'Can I prepare the glaze the day before?',
        answer: 'Yes! Simmer the glaze completely, cool, and refrigerate in a jar. Gently re-warm in microwave or on stove for 1 minute before brushing.'
      },
      {
        question: 'What do I do with the leftover ham bone?',
        answer: 'Never discard the bone! Simmer it with dried split peas, diced carrots, and celery for the most comforting next-day winter soup.'
      }
    ],
    relatedRecipeIds: ['cm-2', 'cm-4', 'cf-4'],
    recommendedEquipmentIds: ['roasting-pan-deluxe', 'thermometer-instant']
  },
  {
    id: 'cm-2',
    slug: 'canadian-maple-glazed-roast-turkey',
    title: 'Canadian Maple-Glazed Roast Turkey',
    category: 'christmas-main',
    cuisine: 'Canadian',
    countryCode: 'CA',
    difficulty: 'Special Occasion',
    prepTimeMinutes: 35,
    cookTimeMinutes: 210,
    servings: 12,
    featuredImage: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=1200&q=80',
    summary: 'Succulent golden roast turkey basted with pure Canadian Grade A amber maple syrup, fresh thyme, sage butter, and sweet sea salt.',
    story: 'Across Canadian holiday hearths, pure dark maple syrup lends roast poultry an earthy caramelized depth that sugar alone can never replicate. When mingled with browned butter, fresh winter thyme, and tart apples placed inside the cavity, the oven aromas conjure snowbanks outside and a roaring log fire within.',
    whyYouWillLoveIt: [
      'Herb-compound butter tucked directly under the skin ensures breast meat remains exceptionally juicy.',
      'Crisp, crackling mahogany skin brushed with rich tree syrup.',
      'Velvety pan cider gravy born from turkey drippings and aromatic shallots.'
    ],
    dietary: ['gluten-free'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Whole fresh free-range turkey', amountMetric: '5.5 - 6 kg', amountUS: '12 - 13 lbs', notes: 'Neck and giblets reserved for stock' },
      { item: 'Unsalted butter, softened', amountMetric: '150 g', amountUS: '2/3 cup' },
      { item: 'Pure Canadian maple syrup (Grade A Amber)', amountMetric: '120 ml', amountUS: '1/2 cup' },
      { item: 'Fresh sage, finely chopped', amountMetric: '2 tbsp', amountUS: '2 tbsp' },
      { item: 'Fresh thyme leaves, chopped', amountMetric: '2 tbsp', amountUS: '2 tbsp' },
      { item: 'Garlic cloves, minced', amountMetric: '4 cloves', amountUS: '4 cloves' },
      { item: 'Crisp apples (McIntosh or Honeycrisp), quartered', amountMetric: '2 whole', amountUS: '2 whole', notes: 'For aromatics in cavity' },
      { item: 'Yellow onion, quartered', amountMetric: '1 large', amountUS: '1 large' },
      { item: 'Flaky sea salt & freshly cracked black pepper', amountMetric: '2 tbsp salt, 1 tbsp pepper', amountUS: '2 tbsp salt, 1 tbsp pepper' }
    ],
    equipment: [
      'Heavy-duty roasting pan with sturdy V-rack',
      'Kitchen butcher twine for trussing',
      'Instant-read digital probe thermometer',
      'Pastry brush for basting'
    ],
    instructions: [
      {
        step: 1,
        title: 'Dry-brine and prepare herb butter',
        instruction: 'Pat turkey thoroughly dry inside and out with paper towels. Blend softened butter with sage, thyme, garlic, 1 tbsp sea salt, and 1 tsp black pepper. Chill slightly for easy handling.',
        sensoryCue: 'Skin turns matte and dry, ready to crisp.'
      },
      {
        step: 2,
        title: 'Butter under the skin and stuff cavity',
        instruction: 'Gently slip your fingers between the breast meat and skin to separate them without tearing. Push 3/4 of the herb butter evenly under skin over breast and thighs. Fill cavity loosely with apple quarters, onion, and fresh herb sprigs. Truss legs with butcher twine.',
        sensoryCue: 'Uniform herb butter blanket over the breast meat.'
      },
      {
        step: 3,
        title: 'Initial high-heat roast',
        instruction: 'Preheat oven to 220°C (425°F). Place turkey on V-rack. Rub exterior skin with remaining butter. Roast for 30 minutes until skin begins to turn light golden.',
        sensoryCue: 'Sizzling sounds and aromas of butter browning.'
      },
      {
        step: 4,
        title: 'Lower heat and baste with maple glaze',
        instruction: 'Reduce oven temperature to 165°C (325°F). In a small bowl, warm maple syrup with 2 tbsp pan drippings. Brush turkey lightly every 30 minutes. Tent breast loosely with foil if browning too quickly.',
        sensoryCue: 'Deep golden-amber sheen develops over the wings and legs.'
      },
      {
        step: 5,
        title: 'Check internal temperature',
        instruction: 'Roast until instant-read thermometer inserted into thickest part of inner thigh (not touching bone) reads 74°C (165°F), approximately 2.5 to 3 hours total.',
        sensoryCue: 'Clear juices run from thigh joint when pierced.'
      },
      {
        step: 6,
        title: 'Crucial 30-minute rest',
        instruction: 'Transfer turkey to a carving board with juice grooves. Rest uncovered for 30 minutes before carving while making pan gravy.',
        sensoryCue: 'Juices settle back into the meat fibers for tender slices.'
      }
    ],
    proTips: [
      'A dry exterior is essential for crisp skin; leave turkey uncovered in the refrigerator overnight before roasting.',
      'Only brush the maple syrup during the final 45 minutes to prevent the natural sugars from burning.'
    ],
    variations: [
      'Cranberry Bourbon Glaze: Blend pure maple syrup with 2 tablespoons tart cranberry reduction and a splash of Canadian rye.',
      'Herb Citrus: Place halved lemons and fresh rosemary inside the cavity alongside the apples.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Naturally gluten-free! When making pan gravy, thicken with cornstarch or sweet rice flour slurry instead of wheat flour.',
      dairyFree: 'Substitute olive oil or plant-based butter block for the compound butter under skin.'
    },
    storageAndReheating: {
      refrigeration: 'Strip meat from carcass within 2 hours of dining; store in airtight glass containers for 4 days.',
      freezing: 'Freeze sliced turkey breast layered in shallow containers with light broth for 2 months.',
      shelfLife: '4 days refrigerated; 60 days frozen.',
      reheating: 'Reheat carved slices gently in a skillet with warm turkey broth and a pat of butter, covered.'
    },
    faqs: [
      {
        question: 'Should I stuff the turkey with bread dressing?',
        answer: 'We recommend baking stuffing separately in a baking dish. This ensures the bird roasts evenly without overcooking the delicate breast meat.'
      },
      {
        question: 'Why did my skin brown so quickly?',
        answer: 'Maple sugars caramelize quickly. If it reaches desired golden hue early, simply drape a sheet of aluminum foil loosely over the top.'
      }
    ],
    relatedRecipeIds: ['cm-1', 'cm-5', 'cf-4'],
    recommendedEquipmentIds: ['roasting-pan-deluxe', 'thermometer-instant']
  },
  {
    id: 'cm-3',
    slug: 'french-christmas-stuffed-poularde',
    title: 'French Christmas Stuffed Poularde (Poularde Farcie de Noël)',
    category: 'christmas-main',
    cuisine: 'French',
    countryCode: 'FR',
    difficulty: 'Special Occasion',
    prepTimeMinutes: 45,
    cookTimeMinutes: 105,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1200&q=80',
    summary: 'A noble French heritage capon stuffed with wild chanterelles, sweet chestnuts, cognac, and shallots, roasted in white wine and cream.',
    story: 'In traditional French Christmas celebrations — the Réveillon — the star of the banquet is almost invariably la Poularde de Bresse or a succulent capon. Gently fattened on grain and milk, its flesh is exquisitely silky. Stuffed with foraged winter forest mushrooms and roasted chestnuts from Ardèche, this dish is pure culinary elegance.',
    whyYouWillLoveIt: [
      'Incomparably tender, silky poultry flesh unmatched by standard chickens.',
      'Rich artisanal stuffing bursting with earthy chestnuts and cognac aromas.',
      'Decadent pan sauce finished with French Crème Fraîche and pan deglazings.'
    ],
    dietary: [],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Whole free-range French poularde or capon', amountMetric: '2.5 - 3 kg', amountUS: '5.5 - 6.5 lbs' },
      { item: 'Cooked peeled chestnuts, roughly chopped', amountMetric: '250 g', amountUS: '1.5 cups', notes: 'Vacuum packed or freshly roasted' },
      { item: 'Fresh wild mushrooms (chanterelles or cremini)', amountMetric: '200 g', amountUS: '2 cups', notes: 'Cleaned and sliced' },
      { item: 'French shallots, finely minced', amountMetric: '3 whole', amountUS: '3 whole' },
      { item: 'Dry white wine (Sauvignon Blanc or Chablis)', amountMetric: '200 ml', amountUS: '3/4 cup' },
      { item: 'Cognac or French brandy', amountMetric: '45 ml', amountUS: '3 tbsp' },
      { item: 'Heavy French crème fraîche', amountMetric: '120 ml', amountUS: '1/2 cup' },
      { item: 'Day-old country sourdough, crust removed, cubed', amountMetric: '100 g', amountUS: '1.5 cups' },
      { item: 'Whole milk for soaking bread', amountMetric: '60 ml', amountUS: '1/4 cup' },
      { item: 'Fresh tarragon and flat-leaf parsley, chopped', amountMetric: '3 tbsp', amountUS: '3 tbsp' },
      { item: 'Unsalted butter', amountMetric: '60 g', amountUS: '4 tbsp' }
    ],
    equipment: [
      'Enameled cast-iron French roasting cocotte or roasting pan',
      'Skillet for sautéing stuffing',
      'Kitchen twine and trussing needle',
      'Wooden spoon and fine-mesh sieve'
    ],
    instructions: [
      {
        step: 1,
        title: 'Sauté mushrooms and shallots',
        instruction: 'In a large skillet, melt 30g butter over medium heat. Sauté shallots until translucent, then add wild mushrooms. Cook 6 minutes until moisture evaporates and mushrooms brown. Deglaze with cognac, letting alcohol flame or simmer off.',
        sensoryCue: 'Heady fragrance of reduced cognac and browned forest mushrooms.'
      },
      {
        step: 2,
        title: 'Assemble the chestnut farce',
        instruction: 'In a bowl, soak cubed sourdough in milk for 3 minutes, then squeeze dry. Fold into mushroom mixture along with chopped chestnuts, herbs, salt, and pepper. Let cool to room temperature.',
        sensoryCue: 'Textured, aromatic stuffing with visible golden chestnut chunks.'
      },
      {
        step: 3,
        title: 'Stuff and truss the poularde',
        instruction: 'Preheat oven to 180°C (350°F). Season inside of poularde cavity with salt. Spoon stuffing gently inside without packing too tightly. Truss legs and wings neatly with twine.',
        sensoryCue: 'Compact, neat poultry ready for even roasting.'
      },
      {
        step: 4,
        title: 'Roast with aromatics and wine',
        instruction: 'Rub bird with remaining butter and sea salt. Place in roasting dish. Pour white wine around base. Roast for 1 hour 45 minutes, basting with pan juices every 20 minutes.',
        sensoryCue: 'Golden crisp skin and sizzling white wine reduction.'
      },
      {
        step: 5,
        title: 'Finish the velvet crème sauce',
        instruction: 'Transfer roasted poularde to warm carving platter; cover loosely with foil. Set roasting dish over medium burner on stovetop, scrape brown bits, simmer for 2 minutes, then whisk in crème fraîche. Strain through sieve.',
        sensoryCue: 'Silky, pale cream sauce flecked with pan deglazings.'
      }
    ],
    proTips: [
      'Do not pack the bird too tight; the stuffing expands as it absorbs roasted poultry juices.',
      'If poularde is difficult to source, a high-quality free-range whole chicken or small capon is an identical culinary match.'
    ],
    variations: [
      'Truffle Infusion: Slip thin slices of black winter truffle directly under the breast skin before roasting.',
      'Cider Variation: Replace white wine and cognac with Normandy dry hard apple cider and Calvados.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Substitute gluten-free artisan bread cubes for sourdough in the stuffing.',
      dairyFree: 'Substitute olive oil for butter and rich cashew cream or oat cooking cream for crème fraîche.'
    },
    storageAndReheating: {
      refrigeration: 'Store carved meat and stuffing in separate sealed containers for 3 days.',
      freezing: 'Not recommended to freeze with cream sauce; poultry meat can be frozen up to 2 months.',
      shelfLife: '3 days refrigerated.',
      reheating: 'Warm carved slices gently in the cream sauce over low heat in a skillet.'
    },
    faqs: [
      {
        question: 'What is the difference between poularde and standard chicken?',
        answer: 'Poularde is a young hen fed a rich dairy and grain diet, producing meat with substantially higher marbling, juiciness, and refined tenderness.'
      }
    ],
    relatedRecipeIds: ['cm-4', 'cm-5', 'it-1'],
    recommendedEquipmentIds: ['roasting-pan-deluxe']
  },
  {
    id: 'cm-4',
    slug: 'homemade-italian-christmas-lasagna',
    title: 'Homemade Italian Christmas Lasagna (Lasagna alla Bolognese Tradizionale)',
    category: 'christmas-main',
    cuisine: 'Italian',
    countryCode: 'IT',
    difficulty: 'Intermediate',
    prepTimeMinutes: 60,
    cookTimeMinutes: 75,
    servings: 10,
    featuredImage: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1200&q=80',
    summary: 'Seven delicate layers of paper-thin pasta ribbons, slow-simmered beef and pork ragù, silky nutmeg béchamel, and aged Parmigiano-Reggiano.',
    story: 'In Emilia-Romagna and throughout Northern Italy, Christmas Day is celebrated with towering pans of Lasagna alla Bolognese. Unlike heavy southern ricotta-filled versions, this aristocratic holiday classic relies strictly on fresh spinach or egg pasta sheets, a slow 3-hour meat ragù, and delicate velvet béchamel that melts into every layer.',
    whyYouWillLoveIt: [
      'Seven heavenly layers that cut cleanly into tender, restaurant-quality squares.',
      'Authentic Bolognese ragù sweetened with whole milk, white wine, and Italian soffritto.',
      'Golden, bubbling top crust with browned edges of crisp Parmigiano cheese.'
    ],
    dietary: [],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Fresh egg lasagna pasta sheets', amountMetric: '400 g', amountUS: '14 oz', notes: 'Fresh sheets require no pre-boiling' },
      { item: 'Ground lean beef & ground pork shoulder', amountMetric: '300 g each', amountUS: '10 oz each' },
      { item: 'Finely minced soffritto (onion, carrot, celery)', amountMetric: '150 g total', amountUS: '1 cup total' },
      { item: 'Dry white or red Italian wine', amountMetric: '150 ml', amountUS: '2/3 cup' },
      { item: 'Whole milk for ragù', amountMetric: '200 ml', amountUS: '3/4 cup' },
      { item: 'Italian San Marzano crushed tomatoes', amountMetric: '500 g', amountUS: '18 oz' },
      { item: 'Whole milk for béchamel', amountMetric: '800 ml', amountUS: '3.5 cups' },
      { item: 'Unsalted butter & all-purpose flour', amountMetric: '60 g each', amountUS: '4 tbsp each' },
      { item: 'Freshly grated nutmeg', amountMetric: '1/2 tsp', amountUS: '1/2 tsp' },
      { item: 'Aged Parmigiano-Reggiano, freshly grated', amountMetric: '150 g', amountUS: '1.5 cups' }
    ],
    equipment: [
      'Deep 9x13 inch ceramic or enameled baking dish',
      'Heavy Dutch oven for 2-hour ragù',
      'Saucepan and silicone whisk for béchamel'
    ],
    instructions: [
      {
        step: 1,
        title: 'Simmer the authentic ragù',
        instruction: 'In a Dutch oven, soften soffritto in butter. Add meats, breaking apart until browned. Pour in wine and reduce completely. Add milk, simmering until absorbed to tenderize meat. Stir in crushed tomatoes and simmer on low for 2 hours.',
        sensoryCue: 'Thick, unctuous sauce with natural meat oils glistening on top.'
      },
      {
        step: 2,
        title: 'Whisk the velvet béchamel',
        instruction: 'Melt 60g butter in saucepan, whisk in flour for 2 minutes to make blond roux. Gradually pour in warm milk in a steady stream, whisking constantly until smooth and gently boiling. Season with salt, white pepper, and freshly grated nutmeg.',
        sensoryCue: 'Coats the back of a wooden spoon like satin ribbons.'
      },
      {
        step: 3,
        title: 'Layer with precision',
        instruction: 'Preheat oven to 180°C (350°F). Spread a thin film of béchamel and ragù on bottom of baking dish. Lay pasta sheets to cover. Spoon ragù, dollop béchamel, and sprinkle grated Parmigiano. Repeat for 6-7 layers.',
        sensoryCue: 'Uniform layers building toward the top rim of the pan.'
      },
      {
        step: 4,
        title: 'Bake to golden perfection',
        instruction: 'Top the final layer with generous béchamel and Parmigiano. Bake uncovered for 35-40 minutes until golden brown, bubbling at corners with crisp top crust.',
        sensoryCue: 'A crust of golden toasted cheese bubbles with sweet meat aromas.'
      },
      {
        step: 5,
        title: 'Rest before slicing',
        instruction: 'Allow the lasagna to rest on kitchen counter for 20 minutes before carving into neat squares.',
        sensoryCue: 'Layers firm up so slices stand tall without sliding.'
      }
    ],
    proTips: [
      'The secret to Emilia-Romagna ragù is adding milk and letting it absorb before the tomatoes; this neutralizes acidity and yields meltingly tender meat.',
      'Never skip the 20-minute rest after baking, or the hot lasagna will spill apart when served.'
    ],
    variations: [
      'Verde (Green) Lasagna: Use spinach pasta sheets made with blanched pureed spinach kneaded into semolina flour.',
      'Mushroom addition: Fold sautéed porcini mushrooms into the ragù for woodsy richness.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Use certified gluten-free lasagna sheets (such as corn and rice blend) and 1:1 gluten-free baking flour for béchamel.',
      vegetarian: 'See our dedicated Vegetarian Christmas Lasagna recipe in Category 4!'
    },
    storageAndReheating: {
      refrigeration: 'Covered with parchment and foil for up to 4 days.',
      freezing: 'Can be frozen baked or unbaked for up to 2 months. Thaw completely before baking.',
      shelfLife: '4 days refrigerated; 60 days frozen.',
      reheating: 'Cover individual portions with foil and heat at 180°C (350°F) for 18 minutes.'
    },
    faqs: [
      {
        question: 'Can I assemble this the day before Christmas?',
        answer: 'Yes! Assemble completely, cover with cling wrap, and refrigerate up to 24 hours. Bring to room temperature 30 minutes before baking.'
      }
    ],
    relatedRecipeIds: ['vv-2', 'cf-1', 'cm-1'],
    recommendedEquipmentIds: ['baking-pan-ceramic']
  },
  {
    id: 'cm-5',
    slug: 'british-beef-wellington',
    title: 'Classic British Beef Wellington',
    category: 'christmas-main',
    cuisine: 'British',
    countryCode: 'GB',
    difficulty: 'Special Occasion',
    prepTimeMinutes: 50,
    cookTimeMinutes: 40,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    summary: 'A prime beef tenderloin fillet wrapped in savory mushroom duxelles, English mustard, cured prosciutto di Parma, and golden puff pastry lattice.',
    story: 'Few dishes command the holiday table with quite the imperial spectacle of British Beef Wellington. Created in honour of Arthur Wellesley, the first Duke of Wellington, this showstopper requires culinary respect: searing prime fillet, cooking mushroom moisture until bone dry, wrapping tight as a drum, and baking until puff pastry cracks with buttery flakes.',
    whyYouWillLoveIt: [
      'Flawless ruby-pink beef tenderloin from edge to edge.',
      'Earthy, concentrated mushroom duxelles with thyme and shallots.',
      'Shatteringly crisp, glistening golden puff pastry crust with lattice artistry.'
    ],
    dietary: [],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Center-cut beef tenderloin fillet (chateaubriand)', amountMetric: '1 - 1.2 kg', amountUS: '2.2 - 2.5 lbs', notes: 'Evenly shaped and trimmed' },
      { item: 'Fresh brown chestnut mushrooms', amountMetric: '500 g', amountUS: '1 lb', notes: 'Finely minced in food processor' },
      { item: 'Thinly sliced Prosciutto di Parma', amountMetric: '8-10 slices', amountUS: '8-10 slices' },
      { item: 'All-butter puff pastry sheet', amountMetric: '500 g', amountUS: '1 lb', notes: 'Thawed cold' },
      { item: 'English hot mustard', amountMetric: '2 tbsp', amountUS: '2 tbsp' },
      { item: 'Fresh thyme leaves & shallots', amountMetric: '1 tbsp thyme, 2 shallots', amountUS: '1 tbsp thyme, 2 shallots' },
      { item: 'Egg yolks beaten with 1 tsp milk', amountMetric: '2 yolks', amountUS: '2 yolks', notes: 'For glossy egg wash' },
      { item: 'Flaky Maldon sea salt', amountMetric: '1 tbsp', amountUS: '1 tbsp' }
    ],
    equipment: [
      'Heavy cast iron skillet for smoking sear',
      'Food processor for mushroom duxelles',
      'Plastic cling film for tight chilling roll',
      'Heavy baking sheet lined with parchment',
      'Lattice roller or paring knife for scoring'
    ],
    instructions: [
      {
        step: 1,
        title: 'Hard sear the seasoned beef',
        instruction: 'Season beef fillet generously with sea salt and black pepper. Heat 1 tbsp oil in smoking hot cast iron skillet. Sear beef quickly on all sides for just 60 seconds per side. Remove to board and immediately brush with English mustard while hot. Chill completely.',
        sensoryCue: 'Deep brown caramelized crust with cold, raw interior.'
      },
      {
        step: 2,
        title: 'Cook duxelles until bone dry',
        instruction: 'Pulse mushrooms, shallots, and thyme in food processor until finely minced. Cook in a dry hot skillet over medium-high heat for 12-15 minutes until all liquid evaporates completely. Season with salt and pepper, then chill.',
        sensoryCue: 'Pâte-like consistency without a single drop of liquid pooling in pan.'
      },
      {
        step: 3,
        title: 'Wrap in prosciutto layer',
        instruction: 'Lay a double layer of cling wrap on counter. Shingle prosciutto slices into a rectangle large enough to wrap beef. Spread cooled duxelles evenly over prosciutto. Place chilled beef fillet in center. Using cling film, roll prosciutto tightly around beef into a cylinder. Twist ends tight and chill for 20 minutes.',
        sensoryCue: 'Firm, neat sausage-like roll holding its cylinder shape.'
      },
      {
        step: 4,
        title: 'Wrap in puff pastry and decorate',
        instruction: 'Roll puff pastry to 4mm thickness. Unwrap beef cylinder and place on pastry. Brush edges with egg wash, roll pastry around beef, sealing seam underneath. Trim excess pastry. Score top gently or apply puff pastry lattice. Brush thoroughly with egg wash. Chill 15 minutes.',
        sensoryCue: 'Glistening, pristine golden-yellow pastry parcel.'
      },
      {
        step: 5,
        title: 'Bake to medium-rare',
        instruction: 'Preheat oven to 200°C (400°F). Bake Wellington on parchment-lined tray for 30-35 minutes until pastry is deep golden and meat thermometer reads 52°C (125°F) for medium-rare.',
        sensoryCue: 'Puff pastry rises tall with crisp, hollow tap sound.'
      },
      {
        step: 6,
        title: 'Rest before slicing with serrated knife',
        instruction: 'Rest at room temperature for 15 minutes. Slice gently into thick medal rounds using a sharp serrated bread knife.',
        sensoryCue: 'Clean slices reveal pink center encased in dark duxelles and flaky crust.'
      }
    ],
    proTips: [
      'The enemy of Beef Wellington is moisture! Ensure the mushroom duxelles has zero steam left before rolling, or the bottom pastry will turn soggy.',
      'Always chill the wrapped roll before baking so the butter in the puff pastry stays cold for maximum flaky rise.'
    ],
    variations: [
      'Crepe Barrier: Some classic chefs wrap an herb crepe between pastry and duxelles for extra moisture security.',
      'Venison Wellington: Substitute loin of wild venison for an extraordinary game feast.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Use certified gluten-free puff pastry sheets (roll gently between parchment sheets).',
      dairyFree: 'Use plant-based shortening puff pastry and omit milk in egg wash.'
    },
    storageAndReheating: {
      refrigeration: 'Wellington is best enjoyed fresh. Leftovers can be kept in fridge 2 days.',
      freezing: 'Do not freeze after baking.',
      shelfLife: '2 days refrigerated.',
      reheating: 'Warm uncovered in oven at 180°C (350°F) for 12 minutes to re-crisp pastry.'
    },
    faqs: [
      {
        question: 'How do I avoid a soggy pastry bottom?',
        answer: 'Preheat your baking tray in the oven so the pastry bottom hits immediate heat, and ensure the mushroom duxelles is completely dry.'
      }
    ],
    relatedRecipeIds: ['vv-1', 'cm-1', 'cm-2'],
    recommendedEquipmentIds: ['thermometer-instant', 'baking-pan-ceramic']
  },
  {
    id: 'cm-6',
    slug: 'australian-summer-christmas-seafood-platter',
    title: 'Australian Summer Christmas Seafood Platter',
    category: 'christmas-main',
    cuisine: 'Australian',
    countryCode: 'AU',
    difficulty: 'Easy',
    prepTimeMinutes: 30,
    cookTimeMinutes: 10,
    servings: 8,
    featuredImage: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    summary: 'A vibrant Southern Hemisphere festive spread featuring fresh Queensland king prawns, grilled Moreton Bay bugs with lime herb butter, freshly shucked Sydney rock oysters, and homemade Mary Rose sauce.',
    story: 'Down Under, Christmas Day unfolds beneath brilliant blue skies and 30-degree summer sunshine. While Northern traditions involve heavy roasts, Australians flock to coastal seafood markets at dawn on Christmas Eve. The festive centerpiece is a giant ice-chilled platter loaded with sweet wild prawns, oysters with finger lime mignonette, and sizzling lobster tails kissed by the outdoor barbecue.',
    whyYouWillLoveIt: [
      'Zero oven heat on hot summer holiday afternoons.',
      'Spectacular visual abundance with ruby prawn shells, emerald limes, and oyster shells.',
      'Fresh, clean, vibrant flavors: sweet shellfish paired with zesty herb-citrus dressings.'
    ],
    dietary: ['gluten-free', 'dairy-free'],
    isHolidaySpecial: true,
    isChristmas: true,
    author: 'Naveed Afzal',
    publishedDate: '2026-11-01',
    updatedDate: '2026-11-08',
    ingredients: [
      { item: 'Fresh cooked Queensland tiger or king prawns', amountMetric: '1.5 kg', amountUS: '3.3 lbs', notes: 'Whole with heads on for peak freshness' },
      { item: 'Freshly shucked Sydney rock oysters', amountMetric: '24 pieces', amountUS: '2 dozen', notes: 'Kept chilled on crushed ice' },
      { item: 'Moreton Bay bugs or lobster tails, halved lengthwise', amountMetric: '8 halves', amountUS: '8 halves' },
      { item: 'Japanese Kewpie or homemade whole-egg mayonnaise', amountMetric: '150 g', amountUS: '2/3 cup' },
      { item: 'Tomato passata & Worcestershire sauce', amountMetric: '2 tbsp each', amountUS: '2 tbsp each' },
      { item: 'Fresh Australian finger limes or regular limes', amountMetric: '4 whole', amountUS: '4 whole', notes: 'Finger lime caviar adds citrus crunch' },
      { item: 'Extra virgin olive oil', amountMetric: '60 ml', amountUS: '4 tbsp' },
      { item: 'Fresh dill, chives, and flat-leaf parsley', amountMetric: '1/2 bunch each', amountUS: '1/2 bunch each' },
      { item: 'Crushed clean ice and sea salt flakes', amountMetric: 'For serving', amountUS: 'For serving' }
    ],
    equipment: [
      'Extra-large round stainless steel or ceramic seafood platter',
      'Outdoor barbecue grill or stovetop griddle pan for bug tails',
      'Oyster shucking knife (if not pre-shucked)',
      'Small ramekins for sauces'
    ],
    instructions: [
      {
        step: 1,
        title: 'Whisk the classic Mary Rose dipping sauce',
        instruction: 'In a small bowl, whisk mayonnaise, tomato passata, Worcestershire sauce, a squeeze of fresh lemon juice, and a pinch of cayenne pepper until salmon-pink and smooth. Chill.',
        sensoryCue: 'Creamy, tangy dipping sauce with delicate peppery warmth.'
      },
      {
        step: 2,
        title: 'Prepare finger lime mignonette for oysters',
        instruction: 'Finely dice 1 French shallot. Combine with 3 tbsp white balsamic vinegar, sea salt, cracked black pepper, and squeeze out the jewel-like citrus beads from 2 finger limes.',
        sensoryCue: 'Vibrant beads pop with intense lime acidity.'
      },
      {
        step: 3,
        title: 'Quick grill on the bugs or lobster tails',
        instruction: 'Brush halved bugs or lobster tails with olive oil, minced garlic, and fresh dill. Place flesh side down on hot BBQ grill for 3-4 minutes, flip for 2 minutes until meat is opaque and lightly charred. Keep warm or serve chilled.',
        sensoryCue: 'Smoky, sweet aromas of grilled shellfish shell.'
      },
      {
        step: 4,
        title: 'Bed of crushed ice and presentation',
        instruction: 'Fill serving platter with crushed ice. Arrange Sydney rock oysters in an outer ring, spooning droplets of mignonette over each. Circle with vibrant chilled tiger prawns. Crown center with grilled bugs, lemon halves, and herb bouquets.',
        sensoryCue: 'Frosty, glistening bounty radiating seaside celebration.'
      }
    ],
    proTips: [
      'Buy wild-caught prawns from a reputable fishmonger with bright shiny shells and firm heads; they should smell like fresh ocean breezes, never fishy.',
      'Keep oysters chilled upright on their deep cup so their natural liquor stays trapped inside.'
    ],
    variations: [
      'Smoked Salmon ribbons: Shingle ribbons of Tasmanian cold-smoked salmon with capers and crème fraîche.',
      'Mango Chilli Salsa: Dice fresh Australian Kensington Pride mangoes with red chilli and coriander to spoon over grilled prawns.'
    ],
    dietaryAdaptations: {
      glutenFree: 'Ensure Worcestershire sauce used in Mary Rose sauce is certified gluten-free.',
      dairyFree: 'Naturally 100% dairy-free when using olive oil herb dressing instead of butter.'
    },
    storageAndReheating: {
      refrigeration: 'Keep remaining seafood iced and eat within 24 hours.',
      freezing: 'Do not re-freeze thawed cooked shellfish.',
      shelfLife: '24 hours refrigerated.',
      reheating: 'Best enjoyed fresh and chilled; no reheating required.'
    },
    faqs: [
      {
        question: 'Can I assemble this ahead of time?',
        answer: 'You can prepare all sauces and grill bugs 3 hours ahead. Assemble the platter over ice just 15 minutes before guests sit down to keep everything icy fresh.'
      }
    ],
    relatedRecipeIds: ['cd-6', 'ny-5', 'it-6'],
    recommendedEquipmentIds: ['knives-chef-set']
  }
];
