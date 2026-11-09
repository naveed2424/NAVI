import { ChristmasCalendarStage } from '../types';

export const christmasCalendarStages: ChristmasCalendarStage[] = [
  {
    id: 'stage-30-days',
    timeframe: '30 Days Before',
    title: 'The Foundation: Fruit Cakes, Sauces & Freezer Prep',
    description: 'Begin with dishes that improve with time or freeze effortlessly. Getting these done early eliminates stress in late December.',
    tasks: [
      {
        id: 't-30-1',
        task: 'Bake traditional Christmas cakes and Stollen',
        detail: 'Bake your rum-aged Dresdner Stollen or British Christmas Pudding. Wrap securely in parchment and foil; store in a cool, dark pantry to let the spices mature.',
        recipeSlug: 'german-christmas-stollen',
        recipeName: 'Dresdner Christstollen'
      },
      {
        id: 't-30-2',
        task: 'Make and freeze holiday cookie dough',
        detail: 'Prepare batches of American Gingerbread cookie dough and slice-and-bake shortbread. Shape into discs or logs, wrap in plastic wrap, and freeze.',
        recipeSlug: 'american-homemade-gingerbread-cookies',
        recipeName: 'Traditional American Gingerbread'
      },
      {
        id: 't-30-3',
        task: 'Simmer freezer-friendly cranberry sauces and reductions',
        detail: 'Simmer fresh cranberries with orange zest, cinnamon, and maple syrup. Freeze in airtight glass jars or freezer containers.'
      },
      {
        id: 't-30-4',
        task: 'Check essential holiday equipment',
        detail: 'Inspect roasting pan, digital probe thermometer, kitchen twine, and pie dishes. Order any needed Amazon kitchen essentials early to avoid shipping delays.'
      }
    ]
  },
  {
    id: 'stage-14-days',
    timeframe: '14 Days Before',
    title: 'Edible Gifts & Make-Ahead Freezing',
    description: 'Two weeks out is the sweet spot for homemade edible gifts, chocolates, and savory pie fillings.',
    tasks: [
      {
        id: 't-14-1',
        task: 'Bake German Nürnberger Lebkuchen',
        detail: 'Bake spiced hazelnut Lebkuchen on wafer paper and glaze with dark chocolate. Store in decorative holiday tins for gifts and family.',
        recipeSlug: 'german-christmas-market-lebkuchen',
        recipeName: 'Nürnberger Elisenlebkuchen'
      },
      {
        id: 't-14-2',
        task: 'Bake and freeze Canadian Tourtière meat pies',
        detail: 'Prepare and bake French-Canadian spiced pork and beef tourtières. Once completely cooled, freeze wrapped in foil for effortless holiday dining.',
        recipeSlug: 'canadian-family-holiday-tourtiere',
        recipeName: 'French-Canadian Tourtière'
      },
      {
        id: 't-14-3',
        task: 'Finalize your Christmas Day menu & guest headcount',
        detail: 'Confirm dietary preferences (gluten-free, vegetarian, dairy-free) so you can plan appropriate sides and main options.'
      },
      {
        id: 't-14-4',
        task: 'Place orders with your butcher and fishmonger',
        detail: 'Reserve your fresh farm turkey, smoked bone-in ham, or wild king prawns for pickup on December 23 or 24.'
      }
    ]
  },
  {
    id: 'stage-7-days',
    timeframe: '7 Days Before',
    title: 'Pantry Stocking & Marinades',
    description: 'One week out: finalize non-perishable pantry groceries, linens, and festive table decor.',
    tasks: [
      {
        id: 't-7-1',
        task: 'Complete the non-perishable grocery haul',
        detail: 'Purchase heavy cream, high-fat European butter, wine, flours, sugars, pecans, and spices so you avoid chaotic last-minute crowds.'
      },
      {
        id: 't-7-2',
        task: 'Make pastry shells for Canadian Butter Tarts',
        detail: 'Roll and press pastry into muffin tins; blind bake or freeze raw in the tins ready for filling.',
        recipeSlug: 'canadian-butter-tarts',
        recipeName: 'Canadian Butter Tarts'
      },
      {
        id: 't-7-3',
        task: 'Prepare herb-compound butters',
        detail: 'Whip softened butter with sage, thyme, garlic, and sea salt. Shape into a parchment log and refrigerate for under-the-skin turkey prep.',
        recipeSlug: 'canadian-maple-glazed-roast-turkey',
        recipeName: 'Canadian Maple-Glazed Roast Turkey'
      },
      {
        id: 't-7-4',
        task: 'Press table linens and polish serving platters',
        detail: 'Wash and iron holiday tablecloths, cloth napkins, and ensure you have enough wine glasses and flatware.'
      }
    ]
  },
  {
    id: 'stage-2-days',
    timeframe: '2 Days Before (Dec 23)',
    title: 'Fresh Produce, Side Prep & Thawing',
    description: 'Two days before Christmas is when kitchen prep shifts into high gear with side dish vegetable preparation.',
    tasks: [
      {
        id: 't-2-1',
        task: 'Pick up fresh poultry, seafood, and herbs',
        detail: 'Pick up reserved fresh turkey or poularde. If using a frozen turkey, ensure it is completely thawed in the refrigerator.'
      },
      {
        id: 't-2-2',
        task: 'Assemble the Italian Christmas Lasagna',
        detail: 'Layer lasagna noodles, Bolognese ragù, béchamel, and Parmigiano in the ceramic baking dish. Cover tightly with plastic wrap and refrigerate unbaked.',
        recipeSlug: 'homemade-italian-christmas-lasagna',
        recipeName: 'Italian Christmas Lasagna'
      },
      {
        id: 't-2-3',
        task: 'Chop all root vegetables and aromatics',
        detail: 'Peel and chop carrots, potatoes, shallots, and celery. Store submerged in water in the fridge or in airtight bags.'
      },
      {
        id: 't-2-4',
        task: 'Dry-brine the roast turkey or poularde',
        detail: 'Season bird generously with sea salt and leave uncovered on a rack in the refrigerator overnight to dry the skin for crispness.',
        recipeSlug: 'canadian-maple-glazed-roast-turkey',
        recipeName: 'Maple-Glazed Turkey'
      }
    ]
  },
  {
    id: 'stage-christmas-eve',
    timeframe: 'Christmas Eve (Dec 24)',
    title: 'The Réveillon Feast & Last Dessert Touches',
    description: 'Celebrate Christmas Eve with light seafood canapés and assemble the final desserts for tomorrow.',
    tasks: [
      {
        id: 't-eve-1',
        task: 'Bake the French Chocolate Bûche de Noël',
        detail: 'Bake the sponge, roll with whipped ganache, frost with textured chocolate bark buttercream, and chill overnight in the fridge.',
        recipeSlug: 'french-chocolate-buche-de-noel',
        recipeName: 'French Bûche de Noël'
      },
      {
        id: 't-eve-2',
        task: 'Assemble Mushroom & Chestnut Wellington (or Beef Wellington)',
        detail: 'Cook the mushroom duxelles bone-dry, wrap with filling, seal in puff pastry, score decoratively, and chill wrapped on a baking sheet.',
        recipeSlug: 'homemade-mushroom-and-chestnut-wellington',
        recipeName: 'Mushroom & Chestnut Wellington'
      },
      {
        id: 't-eve-3',
        task: 'Host Christmas Eve dinner: Spaghetti alle Vongole or Coquilles Saint-Jacques',
        detail: 'Serve an easy, elegant seafood dinner with family and enjoy a glass of crisp white wine by candle light.',
        recipeSlug: 'italian-christmas-eve-spaghetti-alle-vongole',
        recipeName: 'Spaghetti alle Vongole'
      },
      {
        id: 't-eve-4',
        task: 'Set the Christmas Day dining table before bed',
        detail: 'Arrange plates, glasses, candles, name cards, and festive greenery so Christmas morning is calm and joyful.'
      }
    ]
  },
  {
    id: 'stage-christmas-day',
    timeframe: 'Christmas Day (Dec 25)',
    title: 'The Master Serving Timetable',
    description: 'A step-by-step master schedule so the host stays relaxed with a drink in hand while hot food arrives flawlessly on the table.',
    tasks: [
      {
        id: 't-day-1',
        task: '08:30 AM — Morning Coffee & Fresh Cinnamon Rolls',
        detail: 'Warm fresh Cinnamon Rolls or bake pre-proofed rolls. Enjoy coffee and gift unwrapping with family.',
        recipeSlug: 'homemade-cinnamon-rolls',
        recipeName: 'Bakery-Style Cinnamon Rolls'
      },
      {
        id: 't-day-2',
        task: '10:00 AM — Temper the roast poultry or ham',
        detail: 'Remove ham or turkey from refrigerator 1.5 to 2 hours before cooking so it comes to room temperature for even roasting.'
      },
      {
        id: 't-day-3',
        task: '11:30 AM — Turkey or Ham enters the oven',
        detail: 'Begin covered roasting for the glazed ham or compound-butter roast turkey. Baste with maple glaze every 30 minutes in the final stretch.',
        recipeSlug: 'traditional-american-glazed-christmas-ham',
        recipeName: 'American Glazed Ham'
      },
      {
        id: 't-day-4',
        task: '01:30 PM — Bake the sides: Potato Leek Gratin & Lasagna',
        detail: 'Slide Creamy Potato Leek Gratin and Lasagna onto middle and lower racks.',
        recipeSlug: 'creamy-homemade-vegetable-gratin',
        recipeName: 'Creamy French Potato Gratin'
      },
      {
        id: 't-day-5',
        task: '02:30 PM — Rest roast meat & simmer pan gravy',
        detail: 'Transfer roasted meat to a warm carving platter; rest for 25-30 minutes. Whisk pan juices on stovetop into rich velvety gravy.'
      },
      {
        id: 't-day-6',
        task: '03:00 PM — Feast Around the Table!',
        detail: 'Carve the ham and turkey, bring out the bubbling gratin and warm sides. Gather everyone around the table and enjoy!'
      },
      {
        id: 't-day-7',
        task: '05:00 PM — Dessert & Tableside Flambé',
        detail: 'Unveil the Chocolate Bûche de Noël or flambé the British Christmas Pudding tableside with warm brandy.',
        recipeSlug: 'british-christmas-pudding',
        recipeName: 'British Christmas Pudding'
      }
    ]
  }
];
