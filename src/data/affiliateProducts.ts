import { AffiliateProduct, BuyingGuide } from '../types';

export const affiliateProducts: AffiliateProduct[] = [
  {
    id: 'mixers-stand',
    title: 'KitchenAid Artisan Series 5-Quart Tilt-Head Stand Mixer',
    category: 'mixers',
    categoryLabel: 'Stand Mixers',
    description: 'The iconic gold standard for home bakers. Heavy-duty die-cast zinc construction, planetary mixing action with 10 speeds, and a sturdy 4.8-liter stainless steel bowl with comfortable ergonomic handle.',
    whyWeRecommendIt: 'Baking Panettone, brioche doughs, or royal icing can strain ordinary hand mixers. The KitchenAid’s direct-drive motor kneads dense holiday doughs effortlessly year after year.',
    pros: [
      'Incredible durability: built to last decades in home kitchens.',
      'Planetary mixing action touches 59 points per rotation for thorough bowl coverage.',
      'Universal power hub supports pasta rollers, meat grinders, and vegetable spiralizers.'
    ],
    considerations: [
      'Heavy unit (over 10 kg / 22 lbs), requiring dedicated countertop real estate.',
      'Premium investment piece with a higher entry price point.'
    ],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    priceGuide: '$$$',
    marketplaces: {
      US: { asin: 'B00005UP2P', url: 'https://www.amazon.com/dp/B00005UP2P' },
      UK: { asin: 'B0000C24P4', url: 'https://www.amazon.co.uk/dp/B0000C24P4' },
      CA: { asin: 'B00005UP2P', url: 'https://www.amazon.ca/dp/B00005UP2P' },
      FR: { asin: 'B0000C24P4', url: 'https://www.amazon.fr/dp/B0000C24P4' },
      DE: { asin: 'B0000C24P4', url: 'https://www.amazon.de/dp/B0000C24P4' },
      IT: { asin: 'B0000C24P4', url: 'https://www.amazon.it/dp/B0000C24P4' },
      ES: { asin: 'B0000C24P4', url: 'https://www.amazon.es/dp/B0000C24P4' },
      AU: { asin: 'B00005UP2P', url: 'https://www.amazon.com.au/dp/B00005UP2P' }
    }
  },
  {
    id: 'roasting-pan-deluxe',
    title: 'Cuisinart MultiClad Pro Stainless 16-Inch Roasting Pan with Rack',
    category: 'roasting-pans',
    categoryLabel: 'Roasting Pans',
    description: 'Triple-ply construction with a pure aluminum core bonded to stainless steel. Includes a sturdy non-stick U-shaped roasting rack that elevates holiday turkeys, roasts, and hams for 360-degree heat circulation.',
    whyWeRecommendIt: 'Accommodates up to a 9 kg (20 lb) turkey comfortably. Crucially, the heavy tri-ply bottom heats evenly on stovetop induction and gas burners, allowing you to deglaze pan drippings directly for silky homemade gravies.',
    pros: [
      'Stovetop-safe for searing and deglazing fond directly on burners.',
      'Heavy riveted stainless steel stay-cool handles make lifting heavy roasts safe.',
      'Oven-safe up to 260°C (500°F) and dishwasher safe.'
    ],
    considerations: [
      'Large footprint requires adequate kitchen cabinet storage.',
      'The non-stick coating on the V-rack requires gentle hand washing to preserve finish.'
    ],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    priceGuide: '$$',
    marketplaces: {
      US: { asin: 'B0007VO0CO', url: 'https://www.amazon.com/dp/B0007VO0CO' },
      UK: { asin: 'B0007VO0CO', url: 'https://www.amazon.co.uk/dp/B0007VO0CO' },
      CA: { asin: 'B0007VO0CO', url: 'https://www.amazon.ca/dp/B0007VO0CO' },
      FR: { asin: 'B0007VO0CO', url: 'https://www.amazon.fr/dp/B0007VO0CO' },
      DE: { asin: 'B0007VO0CO', url: 'https://www.amazon.de/dp/B0007VO0CO' },
      IT: { asin: 'B0007VO0CO', url: 'https://www.amazon.it/dp/B0007VO0CO' },
      ES: { asin: 'B0007VO0CO', url: 'https://www.amazon.es/dp/B0007VO0CO' },
      AU: { asin: 'B0007VO0CO', url: 'https://www.amazon.com.au/dp/B0007VO0CO' }
    }
  },
  {
    id: 'thermometer-instant',
    title: 'ThermoPro TP19H Waterproof Digital Instant-Read Meat Thermometer',
    category: 'thermometers',
    categoryLabel: 'Cooking Thermometers',
    description: 'Lightning-fast digital thermometer providing accurate internal temperature readings in 2-3 seconds with ±0.5°C accuracy. Features an auto-rotating backlit display and IP65 waterproof rating.',
    whyWeRecommendIt: 'The single most effective tool to prevent dry holiday roasts. Removes all guesswork when testing whether turkey breast has reached 74°C or beef wellington has reached medium-rare 52°C.',
    pros: [
      'Instant 2-3 second read speed with clear ambidextrous rotating screen.',
      'Waterproof design allows quick washing under kitchen tap.',
      'Magnetic back sticks conveniently to refrigerator or oven door.'
    ],
    considerations: [
      'Runs on AAA battery which will need replacement after extended use.',
      'Probe must not be left inside closed oven during active roasting.'
    ],
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80',
    priceGuide: '$',
    marketplaces: {
      US: { asin: 'B07N3S1K48', url: 'https://www.amazon.com/dp/B07N3S1K48' },
      UK: { asin: 'B07N3S1K48', url: 'https://www.amazon.co.uk/dp/B07N3S1K48' },
      CA: { asin: 'B07N3S1K48', url: 'https://www.amazon.ca/dp/B07N3S1K48' },
      FR: { asin: 'B07N3S1K48', url: 'https://www.amazon.fr/dp/B07N3S1K48' },
      DE: { asin: 'B07N3S1K48', url: 'https://www.amazon.de/dp/B07N3S1K48' },
      IT: { asin: 'B07N3S1K48', url: 'https://www.amazon.it/dp/B07N3S1K48' },
      ES: { asin: 'B07N3S1K48', url: 'https://www.amazon.es/dp/B07N3S1K48' },
      AU: { asin: 'B07N3S1K48', url: 'https://www.amazon.com.au/dp/B07N3S1K48' }
    }
  },
  {
    id: 'knives-chef-set',
    title: 'Wüsthof Classic 8-Inch Chef’s Knife',
    category: 'knives',
    categoryLabel: 'Knives & Cutting Boards',
    description: 'Precision-forged from a single piece of high-carbon stainless steel in Solingen, Germany. Hardened to 58° Rockwell for extraordinary edge retention, balanced weight, and effortless slicing.',
    whyWeRecommendIt: 'A sharp, comfortable 8-inch chef knife transforms kitchen prep from a chore into a joy. Perfectly handles chopping winter squash, mincing mushrooms, and carving holiday roasts.',
    pros: [
      'Razor-sharp German steel holds edge through hundreds of cuts.',
      'Full tang construction with ergonomic triple-rivet handle provides flawless balance.',
      'Robust bolster protects fingers during vigorous chopping.'
    ],
    considerations: [
      'Must be washed by hand only (never in the dishwasher).',
      'Requires occasional honing on steel rod to maintain laser edge.'
    ],
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=600&q=80',
    priceGuide: '$$$',
    marketplaces: {
      US: { asin: 'B00009Y639', url: 'https://www.amazon.com/dp/B00009Y639' },
      UK: { asin: 'B00009Y639', url: 'https://www.amazon.co.uk/dp/B00009Y639' },
      CA: { asin: 'B00009Y639', url: 'https://www.amazon.ca/dp/B00009Y639' },
      FR: { asin: 'B00009Y639', url: 'https://www.amazon.fr/dp/B00009Y639' },
      DE: { asin: 'B00009Y639', url: 'https://www.amazon.de/dp/B00009Y639' },
      IT: { asin: 'B00009Y639', url: 'https://www.amazon.it/dp/B00009Y639' },
      ES: { asin: 'B00009Y639', url: 'https://www.amazon.es/dp/B00009Y639' },
      AU: { asin: 'B00009Y639', url: 'https://www.amazon.com.au/dp/B00009Y639' }
    }
  },
  {
    id: 'scales-digital',
    title: 'OXO Good Grips Stainless Steel Digital Kitchen Scale with Pull-Out Display',
    category: 'scales',
    categoryLabel: 'Kitchen Scales',
    description: 'Precision digital kitchen scale measuring in 1g / 0.1oz increments up to 5 kg (11 lbs). Features an innovative pull-out backlit display that prevents large mixing bowls from shadowing the readout.',
    whyWeRecommendIt: 'Baking is a science: measuring flour by volume using cups can vary by up to 30%, leading to heavy, dry cakes. A scale guarantees reproducible baking success for French Bûche de Noël and artisanal breads.',
    pros: [
      'Pull-out display ensures large bowls never block the numbers.',
      'Zero tare function allows adding ingredients sequentially in one bowl.',
      'Smudge-resistant stainless steel platform removes for quick washing.'
    ],
    considerations: [
      'Max weight capacity of 5 kg (11 lbs) is ideal for baking, but not heavy bulk butchery.',
      'Requires 4 AAA batteries.'
    ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    priceGuide: '$',
    marketplaces: {
      US: { asin: 'B079D9B82W', url: 'https://www.amazon.com/dp/B079D9B82W' },
      UK: { asin: 'B079D9B82W', url: 'https://www.amazon.co.uk/dp/B079D9B82W' },
      CA: { asin: 'B079D9B82W', url: 'https://www.amazon.ca/dp/B079D9B82W' },
      FR: { asin: 'B079D9B82W', url: 'https://www.amazon.fr/dp/B079D9B82W' },
      DE: { asin: 'B079D9B82W', url: 'https://www.amazon.de/dp/B079D9B82W' },
      IT: { asin: 'B079D9B82W', url: 'https://www.amazon.it/dp/B079D9B82W' },
      ES: { asin: 'B079D9B82W', url: 'https://www.amazon.es/dp/B079D9B82W' },
      AU: { asin: 'B079D9B82W', url: 'https://www.amazon.com.au/dp/B079D9B82W' }
    }
  },
  {
    id: 'baking-pan-ceramic',
    title: 'Le Creuset Heritage Stoneware Rectangular 4-Quart Covered Casserole Dish',
    category: 'baking-tins',
    categoryLabel: 'Baking Tins & Trays',
    description: 'Dense stoneware blocks moisture absorption to prevent cracking and rippling. Features unmatched thermal resistance from -23°C to 260°C (-9°F to 500°F) and an impermeable enamel glaze.',
    whyWeRecommendIt: 'Bakes holiday lasagnas, potato gratins, and fruit crumbles evenly without scorching edges. Moves seamlessly from hot oven directly to the festive dining table with classic French beauty.',
    pros: [
      'Superior heat retention keeps side dishes piping hot on holiday tables for 40 minutes.',
      'Virtually non-stick glazed interior releases baked cheese and crumbles with effortless washing.',
      'Includes matching fitted stoneware lid to lock in braising steam.'
    ],
    considerations: [
      'Heavier than thin aluminum baking dishes.',
      'Cannot be used directly over an open stovetop flame.'
    ],
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80',
    priceGuide: '$$',
    marketplaces: {
      US: { asin: 'B00005NC83', url: 'https://www.amazon.com/dp/B00005NC83' },
      UK: { asin: 'B00005NC83', url: 'https://www.amazon.co.uk/dp/B00005NC83' },
      CA: { asin: 'B00005NC83', url: 'https://www.amazon.ca/dp/B00005NC83' },
      FR: { asin: 'B00005NC83', url: 'https://www.amazon.fr/dp/B00005NC83' },
      DE: { asin: 'B00005NC83', url: 'https://www.amazon.de/dp/B00005NC83' },
      IT: { asin: 'B00005NC83', url: 'https://www.amazon.it/dp/B00005NC83' },
      ES: { asin: 'B00005NC83', url: 'https://www.amazon.es/dp/B00005NC83' },
      AU: { asin: 'B00005NC83', url: 'https://www.amazon.com.au/dp/B00005NC83' }
    }
  }
];

export const buyingGuides: BuyingGuide[] = [
  {
    id: 'guide-stand-mixers',
    title: 'Best Stand Mixers for Homemade Holiday Baking',
    subtitle: 'From delicate meringues to heavy brioche: what home bakers need to know before buying.',
    coverImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    introduction: 'A stand mixer is one of the most significant investments in any home kitchen. Whether you are whipping stiff peaks for an Australian Pavlova or kneading rich Panettone dough, choosing the right motor wattage, bowl capacity, and gear construction is critical to finding a kitchen companion that will last a lifetime.',
    whatToLookFor: [
      'Motor Drive Type: Direct-drive motors transfer full torque directly to the attachments without slipping belt gears.',
      'Bowl Capacity: A 4.8 to 5-quart bowl handles standard 2-layer cakes and up to two bread loaves comfortably.',
      'Metal Construction: All-metal gears and heavy zinc housing prevent machine walking during high-speed kneading.',
      'Attachment Versatility: Planetary mixing action ensures ingredients are scraped from the bowl walls consistently.'
    ],
    topRecommendations: ['mixers-stand'],
    whoNeedsIt: 'Home cooks who bake bread, holiday cookies, cakes, or meringues regularly and want to eliminate hand fatigue.',
    commonMistakes: 'Buying lightweight plastic mixers that overheat and wobble across the counter when kneading dense yeast doughs.'
  },
  {
    id: 'guide-roasting-pans',
    title: 'Best Roasting Pans for Christmas Dinner & Year-Round Feasts',
    subtitle: 'Why pan weight, stovetop compatibility, and rack height determine your gravy success.',
    coverImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    introduction: 'Holiday roasts are the centerpiece of celebration dining. A poor roasting pan buckles under weight, scorches juices before you can make gravy, or makes lifting a hot turkey hazardous. Here is our editorial guide to selecting the ideal holiday roasting pan.',
    whatToLookFor: [
      'Tri-Ply Bottom Construction: Heavy clad metal conducts heat evenly on your stovetop for making pan deglazings and gravy.',
      'Sturdy Riveted Handles: Wide, upright handles allow secure gripping with bulky silicone oven mitts.',
      'Elevated V-Rack: Keeps meats elevated above rendered fats so air circulates underneath for crisp skin.',
      'Proper Sizing: A 16-inch pan fits inside standard 30-inch ovens while giving large turkeys 2 inches of clearance.'
    ],
    topRecommendations: ['roasting-pan-deluxe', 'thermometer-instant'],
    whoNeedsIt: 'Anyone preparing whole turkeys, hams, prime rib, or large batches of roasted winter vegetables.',
    commonMistakes: 'Using disposable aluminum foil pans that bend and spill hot grease, which is both dangerous and prevents making real pan gravy.'
  },
  {
    id: 'guide-baking-tools',
    title: 'Essential Baking Tools for Beginners: What You Truly Need',
    subtitle: 'Skip the expensive gimmicks. Here are the 5 core tools that deliver professional results.',
    coverImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    readTime: '4 min read',
    introduction: 'The world of kitchenware is crowded with single-use gadgets that clutter drawers. We believe in an uncluttered, purposeful kitchen where a few beautifully engineered, durable tools do ninety percent of the work.',
    whatToLookFor: [
      'Digital Gram Scale: Eliminates volumetric measuring variance and guarantees reliable rise in all cakes and breads.',
      'Quality Rubber Offset Spatula: Essential for spreading fillings, frosting logs, and releasing pastries cleanly.',
      'Heavy Half-Sheet Baking Pans: Rimmed aluminum sheets distribute oven heat evenly without warping.',
      'Oven Thermometer: Most home ovens run 10-15 degrees off calibration; a $10 gauge ensures true baking temperatures.'
    ],
    topRecommendations: ['scales-digital', 'baking-pan-ceramic'],
    whoNeedsIt: 'Beginner and intermediate home cooks looking to build an authentic, lasting kitchen collection.',
    commonMistakes: 'Buying expensive 20-piece tool sets filled with thin flimsy utensils that melt or snap within months.'
  }
];
