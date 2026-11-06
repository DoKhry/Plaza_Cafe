let currentLang = 'it';
let searchQuery = '';
// Set of open categories: it starts empty, so every category begins collapsed
const openCategoryIds = new Set();

const uiTranslations = {
  it: {
    hours: 'Mer–Lun • 06:00 - 00:00',
    badge: '✨ In evidenza per questo orario',
    snackInfo: 'Stuzzichini della casa inclusi a costo 0',
    searchPlaceholder: 'Cerca prodotti, cocktail, dolci...',
    noResults: 'Nessun prodotto trovato per',
    allergensNotice:
      'Per informazioni sugli allergeni o intolleranze, consulta il nostro personale di servizio.',
    dockTop: 'Inizio',
    dockSearch: 'Cerca',
    dockAllergens: 'Allergeni',
    dockInfo: 'Info & Mappa',
  },
  en: {
    hours: 'Wed–Mon • 06:00 - 00:00',
    badge: '✨ Featured for this time of day',
    snackInfo: 'House snacks included at no extra cost',
    searchPlaceholder: 'Search products, drinks, sweets...',
    noResults: 'No products found for',
    allergensNotice:
      'For allergy and food intolerance inquiries, please speak to our staff.',
    dockTop: 'Top',
    dockSearch: 'Search',
    dockAllergens: 'Allergens',
    dockInfo: 'Info & Map',
  },
  fr: {
    hours: 'Mer–Lun • 06:00 - 00:00',
    badge: '✨ En vedette pour cette heure',
    snackInfo: 'Amuse-gueules de la maison inclus sans frais',
    searchPlaceholder: 'Rechercher produits, boissons, pâtisseries...',
    noResults: 'Aucun produit trouvé pour',
    allergensNotice:
      'Pour toute information sur les allergènes, veuillez consulter notre personnel.',
    dockTop: 'Haut',
    dockSearch: 'Chercher',
    dockAllergens: 'Allergènes',
    dockInfo: 'Info & Carte',
  },
  es: {
    hours: 'Mié–Lun • 06:00 - 00:00',
    badge: '✨ Destacado para este horario',
    snackInfo: 'Aperitivos de la casa incluidos sin coste adicional',
    searchPlaceholder: 'Buscar productos, cócteles, dulces...',
    noResults: 'No se encontraron productos para',
    allergensNotice:
      'Para información sobre alérgenos o intolerancias, consulte a nuestro personal.',
    dockTop: 'Inicio',
    dockSearch: 'Buscar',
    dockAllergens: 'Alérgenos',
    dockInfo: 'Info & Mapa',
  },
  de: {
    hours: 'Mi–Mo • 06:00 - 00:00',
    badge: '✨ Empfohlen zu dieser Tageszeit',
    snackInfo: 'Hausgemachte Snacks ohne Aufpreis inklusive',
    searchPlaceholder: 'Produkte, Getränke, Gebäck suchen...',
    noResults: 'Keine Produkte gefunden für',
    allergensNotice:
      'Bei Fragen zu Allergenen wenden Sie sich bitte an unser Personal.',
    dockTop: 'Oben',
    dockSearch: 'Suche',
    dockAllergens: 'Allergene',
    dockInfo: 'Info & Karte',
  },
};

const categoryIcons = {
  caffetteria: '☕',
  pasticceria: '🥐',
  tavolacalda: '🍕',
  bibite: '🥤',
  granite: '🍧',
  gelateria: '🍨',
  aperitivi: '🫒',
  cocktails: '🍸',
  gintoneria: '🌿',
  whisky: '🥃',
  rum: '🏴‍☠️',
  birre: '🍺',
  grappe: '🍇',
};

const allCategories = {
  caffetteria: {
    id: 'caffetteria',
    category: {
      it: 'Caffetteria',
      en: 'Coffee Bar',
      fr: 'Cafétéria',
      es: 'Cafetería',
      de: 'Kaffeebar',
    },
    items: [
      {
        name: { it: 'Caffè Espresso', en: 'Espresso Coffee' },
        price: 1.2,
      },
      { name: { it: 'Caffè Doppio', en: 'Double Espresso' }, price: 2.4 },
      { name: { it: 'Caffè Macchiato' }, price: 1.2 },
      {
        name: { it: 'Caffè Decaffeinato', en: 'Decaf Coffee' },
        price: 1.5,
      },
      {
        name: {
          it: 'Caffè Decaffeinato Soia',
          en: 'Decaf Coffee with Soy Milk',
        },
        price: 2.0,
      },
      { name: { it: 'Caffè Corretto' }, price: 2.0 },
      { name: { it: 'Caffè Marocchino' }, price: 2.0 },
      { name: { it: 'Cappuccino' }, price: 2.0 },
      { name: { it: 'Macchiatone' }, price: 1.8 },
      {
        name: { it: 'Cappuccino Decaffeinato', en: 'Decaf Cappuccino' },
        price: 2.5,
      },
      { name: { it: 'Crema Caffè', en: 'Coffee Cream' }, price: 2.0 },
      {
        name: { it: 'Crema Caffè Condita', en: 'Special Coffee Cream' },
        price: 2.5,
      },
      {
        name: { it: 'Orzo Piccolo', en: 'Barley Coffee (Small)' },
        price: 1.5,
      },
      {
        name: { it: 'Orzo Grande', en: 'Barley Coffee (Large)' },
        price: 2.5,
      },
      {
        name: { it: 'Ginseng Piccolo', en: 'Ginseng Coffee (Small)' },
        price: 1.5,
      },
      {
        name: { it: 'Ginseng Grande', en: 'Ginseng Coffee (Large)' },
        price: 2.5,
      },
      { name: { it: 'Plaza Coffee' }, price: 2.5 },
      { name: { it: 'Latte Bianco', en: 'Hot Milk' }, price: 1.0 },
      { name: { it: 'Latte di Soia', en: 'Soy Milk' }, price: 1.5 },
      { name: { it: 'Latte Macchiato' }, price: 2.0 },
      { name: { it: 'Latte di Soia Macchiato' }, price: 2.5 },
      { name: { it: 'Caffè Freddo', en: 'Iced Coffee' }, price: 1.5 },
      {
        name: { it: 'Caffè Freddo Panna', en: 'Iced Coffee with Cream' },
        price: 2.0,
      },
      {
        name: {
          it: 'Caffè Shakerato Amaro',
          en: 'Unsweetened Shaken Coffee',
        },
        price: 1.5,
      },
      {
        name: { it: 'Caffè Shakerato Dolce', en: 'Sweet Shaken Coffee' },
        price: 2.5,
      },
      {
        name: { it: 'Caffè Americano', en: 'Americano Coffee' },
        price: 1.5,
      },
      {
        name: { it: 'Cioccolata Calda', en: 'Hot Chocolate' },
        price: 3.0,
      },
      {
        name: {
          it: 'Thè / Tisane / Camomilla',
          en: 'Tea / Herbal Tea / Chamomile',
        },
        price: 3.0,
      },
      {
        name: { it: 'Cornetto Vuoto', en: 'Plain Croissant' },
        price: 1.3,
      },
      {
        name: {
          it: 'Cornetto Piccolo Vuoto',
          en: 'Small Plain Croissant',
        },
        price: 0.7,
      },
      {
        name: { it: 'Cornetto Cioccolato', en: 'Chocolate Croissant' },
        price: 1.8,
      },
      {
        name: {
          it: 'Cornetto Piccolo Cioccolato',
          en: 'Small Chocolate Croissant',
        },
        price: 1.0,
      },
      {
        name: { it: 'Cornetto Marmellata', en: 'Jam Croissant' },
        price: 1.8,
      },
      {
        name: {
          it: 'Cornetto Piccolo Marmellata',
          en: 'Small Jam Croissant',
        },
        price: 1.0,
      },
      {
        name: {
          it: 'Cornetto Frutti Rossi',
          en: 'Red Berries Croissant',
        },
        price: 1.8,
      },
      {
        name: {
          it: 'Cornetto Piccolo Frutti Rossi',
          en: 'Small Red Berries Croissant',
        },
        price: 1.0,
      },
      {
        name: { it: 'Cornetto Pistacchio', en: 'Pistachio Croissant' },
        price: 2.0,
      },
      {
        name: {
          it: 'Cornetto Piccolo Pistacchio',
          en: 'Small Pistachio Croissant',
        },
        price: 1.2,
      },
      {
        name: { it: 'Treccia Miele e Noci', en: 'Honey & Walnut Braid' },
        price: 1.8,
      },
      {
        name: { it: 'Melizia alle Mele', en: 'Apple Pastry' },
        price: 1.5,
      },
      { name: { it: 'Bombolone' }, price: 1.5 },
      { name: { it: 'Fetta di Torta', en: 'Slice of Cake' }, price: 3.0 },
    ],
  },
  pasticceria: {
    id: 'pasticceria',
    category: {
      it: 'Pasticceria Tipica',
      en: 'Pastry & Sweets',
      fr: 'Pâtisserie',
      es: 'Pastelería',
      de: 'Konditorei',
    },
    items: [
      {
        name: { it: 'Cannolo Ricotta', en: 'Ricotta Cannolo' },
        price: 2.5,
      },
      {
        name: {
          it: 'Plaza Rocher Misti (cad.)',
          en: 'Mixed Plaza Rocher (each)',
        },
        price: 1.0,
      },
      {
        name: { it: 'Torroncino Nocciola', en: 'Hazelnut Nougat' },
        price: 1.0,
      },
      { name: { it: 'Pasta Reale' }, price: 2.0 },
      { name: { it: 'Brutti ma Buoni' }, price: 1.0 },
      {
        name: {
          it: 'Pasta di Mandorla (cad.)',
          en: 'Almond Pastry (each)',
        },
        price: 1.0,
      },
      { name: { it: 'Metà e Metà' }, price: 0.5 },
      { name: { it: 'Bacio di Dama' }, price: 1.0 },
      {
        name: { it: 'Pignolata (cad.)', en: 'Pignolata (each)' },
        price: 0.3,
      },
      { name: { it: 'Treccina' }, price: 0.4 },
      { name: { it: 'Zeppole di Riso' }, price: 1.0 },
      {
        name: {
          it: 'Pasta di Mandorla (al Kg)',
          en: 'Almond Pastry (per Kg)',
        },
        price: 30.0,
      },
      {
        name: {
          it: 'Plaza Rocher Misti (al Kg)',
          en: 'Mixed Plaza Rocher (per Kg)',
        },
        price: 35.0,
      },
    ],
  },
  tavolacalda: {
    id: 'tavolacalda',
    category: {
      it: 'Tavola Calda Siciliana',
      en: 'Hot Snacks & Rosticceria',
      fr: 'Rosticceria Chaude',
      es: 'Comida Caliente',
      de: 'Warme Snacks',
    },
    items: [
      {
        name: { it: 'Arancino al Ragù', en: 'Meat Ragù Arancino' },
        price: 2.5,
      },
      {
        name: { it: 'Arancino al Pistacchio', en: 'Pistachio Arancino' },
        price: 3.0,
      },
      { name: { it: 'Calzone' }, price: 2.0 },
      {
        name: { it: 'Pizza al Taglio', en: 'Slice of Pizza' },
        price: 2.5,
      },
      {
        name: { it: 'Schiacciata (Normale)', en: 'Flatbread (Classic)' },
        price: 2.5,
      },
      {
        name: { it: 'Schiacciata (Di Sfoglia)', en: 'Flatbread (Crispy Puff Pastry)' },
        price: 3.0,
      },
      { name: { it: 'Frittata', en: 'Omelette' }, price: 4.0 },
      {
        name: { it: 'Panino Con Frittata', en: 'Omelette Sandwich' },
        price: 5.0,
      },
    ],
  },
  bibite: {
    id: 'bibite',
    category: {
      it: 'Bibite & Soft Drinks',
      en: 'Beverages',
      fr: 'Boissons',
      es: 'Bebidas',
      de: 'Getränke',
    },
    items: [
      {
        name: {
          it: 'Acqua Naturale / Gassata (Piccola)',
          en: 'Still / Sparkling Water (Small)',
        },
        price: 1.0,
      },
      {
        name: {
          it: 'Acqua Naturale / Gassata Grande',
          en: 'Still / Sparkling Water (Large)',
        },
        price: 2.0,
      },
      { name: { it: 'Coca Cola' }, price: 2.0 },
      { name: { it: 'Coca Cola Zero' }, price: 2.0 },
      { name: { it: 'Fanta' }, price: 2.0 },
      { name: { it: 'Sprite' }, price: 2.0 },
      { name: { it: 'Chinotto' }, price: 2.0 },
      { name: { it: 'San Pellegrino' }, price: 2.0 },
      { name: { it: 'Gazzosa' }, price: 1.5 },
      {
        name: { it: 'Schweppes Tonica', en: 'Schweppes Tonic' },
        price: 2.0,
      },
      {
        name: { it: 'Schweppes Limone', en: 'Schweppes Lemon' },
        price: 2.0,
      },
      {
        name: { it: 'Estathé Limone', en: 'Estathé Lemon Ice Tea' },
        price: 2.0,
      },
      {
        name: { it: 'Estathé Pesca', en: 'Estathé Peach Ice Tea' },
        price: 2.0,
      },
      { name: { it: 'Red Bull' }, price: 3.0 },
      { name: { it: 'Ginger Beer' }, price: 3.0 },
      {
        name: {
          it: 'Succhi di Frutta Vari',
          en: 'Assorted Fruit Juices',
        },
        price: 2.0,
      },
    ],
  },
  granite: {
    id: 'granite',
    category: {
      it: 'Granite Artigianali',
      en: 'Granitas',
      fr: 'Granités',
      es: 'Granizados',
      de: 'Granita',
    },
    items: [
      {
        name: { it: 'Brioche Tradizionale', en: 'Traditional Brioche' },
        price: 1.2,
      },
      {
        name: { it: 'Brioche senza glutine', en: 'Gluten-free Brioche' },
        price: 3.0,
      },
      { name: { it: 'Granita Limone', en: 'Lemon Granita' }, price: 2.5 },
      {
        name: { it: 'Granita Fragola', en: 'Strawberry Granita' },
        price: 2.5,
      },
      { name: { it: 'Granita Angelica' }, price: 2.5 },
      {
        name: {
          it: 'Granita Arancia e Zenzero',
          en: 'Orange & Ginger Granita',
        },
        price: 2.5,
      },
      {
        name: { it: 'Granita Gelsi', en: 'Mulberry Granita' },
        price: 3.5,
      },
      {
        name: { it: 'Granita Mandorla', en: 'Almond Granita' },
        price: 3.0,
      },
      {
        name: { it: 'Granita Pistacchio', en: 'Pistachio Granita' },
        price: 3.0,
      },
      {
        name: { it: 'Granita Cocco', en: 'Coconut Granita' },
        price: 3.0,
      },
      { name: { it: 'Granita Mango', en: 'Mango Granita' }, price: 3.0 },
      { name: { it: 'Granita Panna Macchiata' }, price: 3.0 },
      {
        name: { it: 'Granita Anguria', en: 'Watermelon Granita' },
        price: 2.5,
      },
      { name: { it: 'Granita Pesca', en: 'Peach Granita' }, price: 2.5 },
      {
        name: { it: 'Granita Cioccolato', en: 'Chocolate Granita' },
        price: 3.0,
      },
      {
        name: { it: 'Aggiunta Panna', en: 'Extra Whipped Cream' },
        price: 0.3,
      },
      {
        name: {
          it: 'Aggiunta Doppia Panna',
          en: 'Extra Double Whipped Cream',
        },
        price: 0.5,
      },
    ],
  },
  gelateria: {
    id: 'gelateria',
    category: {
      it: 'Gelateria & Dessert',
      en: 'Ice Cream',
      fr: 'Glacerie',
      es: 'Heladería',
      de: 'Eisdiele',
    },
    items: [
      { name: { it: 'Cono Gelato', en: 'Ice Cream Cone' }, price: 3.0 },
      { name: { it: 'Cono Piccolo', en: 'Small Cone' }, price: 2.0 },
      { name: { it: 'Coppetta Piccola', en: 'Small Cup' }, price: 2.0 },
      { name: { it: 'Coppetta Media', en: 'Medium Cup' }, price: 2.5 },
      { name: { it: 'Coppetta Grande', en: 'Large Cup' }, price: 3.5 },
      {
        name: { it: 'Coppa Vetro Piccola', en: 'Small Glass Cup' },
        price: 3.5,
      },
      {
        name: { it: 'Coppa Vetro Grande', en: 'Large Glass Cup' },
        price: 6.0,
      },
      {
        name: { it: 'Brioche Gelato', en: 'Brioche with Ice Cream' },
        price: 4.0,
      },
      {
        name: { it: 'Tartufo Gelato', en: 'Truffle Ice Cream' },
        price: 3.5,
      },
      {
        name: { it: 'Cono Passeggio Piccolo', en: 'Small Takeaway Cone' },
        price: 1.0,
      },
      { name: { it: 'Frappè', en: 'Milkshake' }, price: 3.0 },
      {
        name: { it: 'Sorbetto Analcolico', en: 'Non-Alcoholic Sorbet' },
        price: 2.5,
      },
      {
        name: { it: 'Sorbetto Alcolico', en: 'Alcoholic Sorbet' },
        price: 3.0,
      },
      {
        name: {
          it: 'Gelato Artigianale (al Kg)',
          en: 'Artisanal Ice Cream (per Kg)',
        },
        price: 20.0,
      },
      {
        name: {
          it: 'Torta Gelato (al Kg)',
          en: 'Ice Cream Cake (per Kg)',
        },
        price: 22.0,
      },
      { name: { it: 'Cono Passeggio (al Kg)' }, price: 22.0 },
    ],
  },
  aperitivi: {
    id: 'aperitivi',
    category: {
      it: 'Aperitivi & Calici',
      en: 'Aperitifs & Wine',
      fr: 'Apéritifs',
      es: 'Aperitivos',
      de: 'Aperitife',
    },
    info: true,
    items: [
      { name: { it: 'Aperol Spritz' }, price: 6.0 },
      { name: { it: 'Campari Spritz' }, price: 6.0 },
      { name: { it: 'Limoncello Spritz' }, price: 6.0 },
      { name: { it: 'Hugo Spritz' }, price: 7.0 },
      { name: { it: 'Cynar Spritz' }, price: 6.0 },
      { name: { it: 'P31 Spritz' }, price: 6.0 },
      { name: { it: 'Cedro Spritz' }, price: 6.0 },
      { name: { it: 'Curacao Spritz' }, price: 6.0 },
      { name: { it: 'Montenegro Spritz' }, price: 6.0 },
      { name: { it: 'Venturo Spritz' }, price: 8.0 },
      { name: { it: 'Aperol (Liscio)' }, price: 4.0 },
      { name: { it: 'Bitter Campari' }, price: 4.5 },
      { name: { it: 'Campari Soda' }, price: 3.0 },
      { name: { it: 'Bitter Bianco / Rosso' }, price: 2.5 },
      { name: { it: 'Cocktail San Pellegrino' }, price: 3.5 },
      { name: { it: 'Crodino' }, price: 2.5 },
      { name: { it: 'Crodino XL' }, price: 3.5 },
      {
        name: {
          it: 'Analcolico Plaza',
          en: 'Plaza Non-Alcoholic Cocktail',
        },
        price: 5.0,
      },
      { name: { it: 'Martini Bianco / Rosso' }, price: 4.0 },
      {
        name: { it: 'Calice di Prosecco', en: 'Glass of Prosecco' },
        price: 3.5,
      },
      {
        name: {
          it: 'Calice Vino Bianco / Rosso',
          en: 'Glass of White / Red Wine',
        },
        price: 3.5,
      },
    ],
  },
  cocktails: {
    id: 'cocktails',
    category: {
      it: 'Cocktails Signature & Classici',
      en: 'Cocktails Selection',
      fr: 'Cocktails',
      es: 'Cócteles',
      de: 'Cocktails',
    },
    items: [
      { name: { it: '4 Bianchi / Fragola' }, price: 6.0 },
      { name: { it: 'Angelo Azzurro' }, price: 6.0 },
      { name: { it: 'Americano' }, price: 6.0 },
      { name: { it: 'Boulevardier' }, price: 7.0 },
      { name: { it: 'Black Russian' }, price: 6.0 },
      { name: { it: 'Bloody Mary' }, price: 6.0 },
      { name: { it: 'Bitter Campari Soda' }, price: 6.0 },
      { name: { it: 'Cuba Libre' }, price: 6.0 },
      { name: { it: 'Santo Libre' }, price: 6.0 },
      { name: { it: 'Cosmopolitan' }, price: 6.0 },
      { name: { it: 'Caipiroska Fragola' }, price: 6.0 },
      { name: { it: 'Caipirinha' }, price: 6.0 },
      { name: { it: 'Cocktail Martini' }, price: 6.0 },
      { name: { it: 'Espresso Martini' }, price: 6.0 },
      { name: { it: 'French Martini' }, price: 6.0 },
      { name: { it: 'Negroni Classico' }, price: 6.0 },
      { name: { it: 'Negroski' }, price: 6.0 },
      { name: { it: 'Negroni Sbagliato' }, price: 6.0 },
      { name: { it: 'Etna Negroni' }, price: 9.0 },
      { name: { it: 'Moscow Mule' }, price: 7.0 },
      { name: { it: 'London Mule' }, price: 7.0 },
      { name: { it: 'Jamaican Mule' }, price: 7.0 },
      { name: { it: 'Old Fashioned' }, price: 7.0 },
      { name: { it: 'Japanese Iced Tea' }, price: 6.0 },
      { name: { it: 'Long Island Iced Tea' }, price: 6.0 },
      { name: { it: 'Rum & Cola' }, price: 6.0 },
      { name: { it: 'Montenegro & Cola' }, price: 6.0 },
      { name: { it: 'Vodka Tonic / Lemon' }, price: 6.0 },
      { name: { it: 'Milano / Torino' }, price: 6.0 },
      { name: { it: 'Mojito' }, price: 7.0 },
      { name: { it: 'Malibù & Coca' }, price: 6.0 },
      { name: { it: 'Malibù & Ananas' }, price: 6.0 },
      { name: { it: 'Margarita' }, price: 6.0 },
      { name: { it: 'Jägerbomb' }, price: 7.0 },
      { name: { it: 'Screwdriver' }, price: 6.0 },
      { name: { it: 'Sex On The Beach' }, price: 6.0 },
      { name: { it: 'Tequila Sunrise' }, price: 6.0 },
      { name: { it: 'White Russian' }, price: 6.0 },
      { name: { it: 'Belvedere Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Belvedere Redbull' }, price: 9.0 },
      { name: { it: 'Crystal Head Tonic / Lemon' }, price: 10.0 },
      { name: { it: 'Grey Goose Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Beluga Tonic / Lemon' }, price: 9.0 },
      { name: { it: 'Vulcanica Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Havana 7 & Coca' }, price: 7.0 },
      { name: { it: 'Whisky & Coca' }, price: 6.0 },
      { name: { it: 'Whisky & Soda' }, price: 6.0 },
      { name: { it: 'Pesca Redbull' }, price: 7.0 },
      { name: { it: 'Fragola Redbull' }, price: 7.0 },
      { name: { it: 'Vodka Redbull' }, price: 7.0 },
    ],
  },
  gintoneria: {
    id: 'gintoneria',
    category: {
      it: 'Gintoneria & Premium Gin',
      en: 'Gin Selection',
      fr: 'Sélection Gin',
      es: 'Gin Selection',
      de: 'Gin Selektion',
    },
    items: [
      {
        name: { it: 'Aggiunta Tonica Premium', en: 'Add Premium Tonic' },
        price: 1.0,
      },
      { name: { it: 'Gin Tonic Base' }, price: 6.0 },
      { name: { it: 'Gin Lemon Base' }, price: 6.0 },
      { name: { it: 'Gin Soda Base' }, price: 6.0 },
      { name: { it: 'Acqueverdi Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Bombay Sapphire Tonic / Lemon' }, price: 6.5 },
      { name: { it: 'Brockmans Intensity' }, price: 8.0 },
      { name: { it: 'Brockmans Agave' }, price: 10.0 },
      { name: { it: 'Bulldog Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Tanqueray Tonic / Lemon' }, price: 6.5 },
      { name: { it: 'Tanqueray Ten Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Tanqueray Zero (Analcolico)' }, price: 6.5 },
      { name: { it: 'J.Rose Tonic / Lemon' }, price: 10.0 },
      { name: { it: "Hendrick's Tonic / Lemon" }, price: 8.0 },
      { name: { it: "Hendrick's Amazonia Tonic / Lemon" }, price: 8.0 },
      { name: { it: 'Malfy Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Silent Pool' }, price: 8.0 },
      { name: { it: 'London N°1 Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'London N°3 Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Gin Mare Tonic / Lemon' }, price: 9.0 },
      { name: { it: 'Mazzetti Tonic / Lemon' }, price: 8.0 },
      {
        name: { it: 'Mazzetti Black Edition Tonic / Lemon' },
        price: 9.0,
      },
      { name: { it: 'Monkey 47' }, price: 12.0 },
      { name: { it: 'Nordés Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Etsu Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Etsu Orange Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Etna Gin Tonic / Lemon' }, price: 9.0 },
      { name: { it: 'Opihr Tonic / Lemon' }, price: 8.0 },
      {
        name: { it: 'Poli Marconi 42 / 44 / 46 Tonic / Lemon' },
        price: 8.0,
      },
      { name: { it: 'Portofino Tonic / Lemon' }, price: 12.0 },
      { name: { it: 'Plymouth Tonic / Lemon' }, price: 9.0 },
      { name: { it: 'Sipsmith Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Roku Tonic / Lemon' }, price: 8.0 },
      { name: { it: 'Ionico Tonic / Lemon' }, price: 8.0 },
    ],
  },
  whisky: {
    id: 'whisky',
    category: {
      it: 'Whisky & Bourbon',
      en: 'Whisky & Bourbon',
      fr: 'Whisky',
      es: 'Whisky',
      de: 'Whisky',
    },
    items: [
      { name: { it: 'Lagavulin' }, price: 10.0 },
      { name: { it: 'Nikka' }, price: 10.0 },
      { name: { it: 'Oban' }, price: 9.0 },
      { name: { it: 'Caol Ila' }, price: 8.0 },
      { name: { it: 'Talisker Ten' }, price: 7.0 },
      { name: { it: 'Talisker Skye' }, price: 7.0 },
      { name: { it: 'Laphroaig' }, price: 6.0 },
      {
        name: { it: "Jack Daniel's (Classic / Honey / Fire)" },
        price: 4.0,
      },
      { name: { it: 'Wild Turkey' }, price: 7.0 },
      { name: { it: 'Johnnie Walker Black Label' }, price: 6.0 },
      { name: { it: 'Johnnie Walker Red Label' }, price: 3.0 },
      { name: { it: 'Four Roses' }, price: 3.5 },
      { name: { it: 'Glen Grant' }, price: 3.0 },
      { name: { it: 'J&B' }, price: 3.0 },
      { name: { it: 'Vecchia Romagna' }, price: 3.0 },
      { name: { it: 'Stravecchia' }, price: 3.0 },
      { name: { it: 'Chivas Regal' }, price: 4.0 },
    ],
  },
  rum: {
    id: 'rum',
    category: {
      it: 'Rum Riserva',
      en: 'Rum Selection',
      fr: 'Rhum',
      es: 'Ron',
      de: 'Rum',
    },
    items: [
      { name: { it: 'Baron Samedi' }, price: 4.0 },
      { name: { it: 'Diplomático' }, price: 7.0 },
      { name: { it: 'Don Papa' }, price: 6.0 },
      { name: { it: 'Havana 7' }, price: 4.0 },
      { name: { it: 'Kraken' }, price: 3.5 },
      { name: { it: 'Legendario' }, price: 4.0 },
      { name: { it: 'Pampero' }, price: 3.0 },
      { name: { it: 'El Prohibido' }, price: 6.0 },
      { name: { it: 'Santa Teresa 1796' }, price: 8.0 },
      { name: { it: 'Zacapa 23' }, price: 7.0 },
    ],
  },
  birre: {
    id: 'birre',
    category: {
      it: 'Birre Artigianali & Nazionali',
      en: 'Beers',
      fr: 'Bières',
      es: 'Cervezas',
      de: 'Biere',
    },
    items: [
      { name: { it: 'Dreher' }, price: 2.0 },
      { name: { it: 'Birra dello Stretto' }, price: 3.0 },
      { name: { it: 'Messina Cristalli di Sale' }, price: 3.0 },
      { name: { it: 'Bud' }, price: 3.0 },
      { name: { it: 'Heineken' }, price: 3.0 },
      { name: { it: "Beck's" }, price: 3.0 },
      { name: { it: 'Ichnusa' }, price: 3.0 },
      { name: { it: 'Moretti Zero (Analcolica)' }, price: 3.0 },
      { name: { it: 'Ceres' }, price: 3.5 },
      { name: { it: "Tennent's Super" }, price: 4.0 },
      { name: { it: 'Corona' }, price: 4.0 },
      { name: { it: 'IPA Rochefort / Roosevelt' }, price: 5.0 },
      { name: { it: 'Rossa Rochefort / Roosevelt' }, price: 5.0 },
    ],
  },
  grappe: {
    id: 'grappe',
    category: {
      it: 'Grappe & Distillati',
      en: 'Grappa Selection',
      fr: 'Grappa',
      es: 'Grappa',
      de: 'Grappa',
    },
    items: [
      { name: { it: 'Grappa 903' }, price: 3.0 },
      { name: { it: 'Diciottolune Marzadro' }, price: 4.0 },
      { name: { it: 'Grappa alla Cannella' }, price: 3.0 },
      { name: { it: 'Bonollo Of Chardonnay' }, price: 4.0 },
      { name: { it: "Bonollo Of d'Orange" }, price: 5.0 },
      { name: { it: 'Bonollo Of Ligneum' }, price: 5.0 },
      { name: { it: 'Bonollo Of Amarone' }, price: 6.0 },
      { name: { it: 'Poli Grappa' }, price: 4.0 },
      { name: { it: 'Prime Uve (Bianca / Barricata)' }, price: 4.0 },
    ],
  },
};

function getOrderedCategories() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 11) {
    return [
      'caffetteria',
      'pasticceria',
      'tavolacalda',
      'bibite',
      'granite',
      'gelateria',
      'aperitivi',
      'cocktails',
      'gintoneria',
      'whisky',
      'rum',
      'birre',
      'grappe',
    ];
  } else if (hour >= 11 && hour < 14) {
    return [
      'aperitivi',
      'tavolacalda',
      'bibite',
      'caffetteria',
      'pasticceria',
      'granite',
      'gelateria',
      'cocktails',
      'gintoneria',
      'whisky',
      'rum',
      'birre',
      'grappe',
    ];
  } else if (hour >= 14 && hour < 18) {
    return [
      'aperitivi',
      'granite',
      'gelateria',
      'bibite',
      'caffetteria',
      'pasticceria',
      'tavolacalda',
      'cocktails',
      'gintoneria',
      'whisky',
      'rum',
      'birre',
      'grappe',
    ];
  } else if (hour >= 18 && hour < 22) {
    return [
      'aperitivi',
      'tavolacalda',
      'cocktails',
      'gintoneria',
      'birre',
      'bibite',
      'caffetteria',
      'pasticceria',
      'granite',
      'gelateria',
      'whisky',
      'rum',
      'grappe',
    ];
  } else {
    return [
      'cocktails',
      'birre',
      'gintoneria',
      'grappe',
      'whisky',
      'rum',
      'aperitivi',
      'tavolacalda',
      'bibite',
      'caffetteria',
      'pasticceria',
      'granite',
      'gelateria',
    ];
  }
}

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const el = document.getElementById('current-clock');
  if (el) el.innerText = `${h}:${m}`;
}
setInterval(updateClock, 1000);
updateClock();

function toggleCategory(key) {
  const wrapper = document.getElementById(`content-${key}`);
  const arrow = document.getElementById(`arrow-${key}`);
  const btn = document.getElementById(`btn-${key}`);
  if (!wrapper || !arrow) return;

  const isOpen = openCategoryIds.has(key);
  if (isOpen) {
    openCategoryIds.delete(key);
    wrapper.classList.remove('accordion-open');
    arrow.classList.remove('is-open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  } else {
    openCategoryIds.add(key);
    wrapper.classList.add('accordion-open');
    arrow.classList.add('is-open');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
}

function renderMenu() {
  const container = document.getElementById('menu-container');
  container.innerHTML = '';

  const orderedKeys = getOrderedCategories();
  const currentHour = new Date().getHours();
  const t = uiTranslations[currentLang];
  const isSearching = searchQuery.length > 0;
  let totalRendered = 0;

  orderedKeys.forEach((key) => {
    const cat = allCategories[key];
    const catName = cat.category[currentLang] || cat.category['it'];
    const icon = categoryIcons[key] || '🍽️';
    const isCatNameMatch =
      isSearching && catName.toLowerCase().includes(searchQuery);

    const filteredItems = isSearching
      ? cat.items.filter((item) => {
          if (isCatNameMatch) return true;
          const itName = (item.name['it'] || '').toLowerCase();
          const langName = (item.name[currentLang] || '').toLowerCase();
          return (
            itName.includes(searchQuery) || langName.includes(searchQuery)
          );
        })
      : cat.items;

    if (isSearching && filteredItems.length === 0) return;
    totalRendered++;

    const section = document.createElement('div');
    section.id = `section-${key}`;
    section.className = 'category-section';

    let itemsCardsHtml = '';

  

    filteredItems.forEach((item) => {
      const itemName = item.name[currentLang] || item.name['it'];
      itemsCardsHtml += `
                  <div class="menu-item">
                      <h4 class="menu-item-name">${itemName}</h4>
                      <div class="menu-item-price-box">
                          <span class="menu-item-price">
                              € ${item.price.toFixed(2)}
                          </span>
                      </div>
                  </div>
              `;
    });

    // While searching the matching sections are opened; otherwise they follow the Set (empty at start)
    const shouldBeOpen = isSearching ? true : openCategoryIds.has(key);
    const openClass = shouldBeOpen ? 'accordion-open' : '';
    const arrowRotateClass = shouldBeOpen ? 'is-open' : '';
    const ariaExpanded = shouldBeOpen ? 'true' : 'false';

    section.innerHTML = `
              <button 
                  id="btn-${key}" 
                  onclick="toggleCategory('${key}')" 
                  aria-expanded="${ariaExpanded}" 
                  aria-controls="content-${key}"
                  class="category-toggle"
              >
                  <div class="category-toggle-left">
                      <span class="category-icon">${icon}</span>
                      <span class="category-name">${catName}</span>
                      <span class="category-count">(${filteredItems.length})</span>
                  </div>
                  <div class="category-toggle-right">
                      ${isSearching ? `<span class="category-badge">${filteredItems.length}</span>` : ''}
                      <svg id="arrow-${key}" xmlns="http://www.w3.org/2000/svg" class="accordion-arrow ${arrowRotateClass}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                  </div>
              </button>

              <div id="content-${key}" class="accordion-wrapper ${openClass} category-content">
                  <div class="accordion-inner category-content-inner">
                      <div class="menu-items-grid">
                          ${itemsCardsHtml}
                      </div>
                  </div>
              </div>
          `;

    container.appendChild(section);
  });

  if (isSearching && totalRendered === 0) {
    container.innerHTML = `
              <div class="no-results">
                  <span class="no-results-icon">🔍</span>
                  <p class="no-results-text">${t.noResults} "${searchQuery}"</p>
                  <button onclick="clearSearch()" class="no-results-action">
                      Mostra tutto il menù
                  </button>
              </div>
          `;
  }
}

function handleSearch(val) {
  searchQuery = (val || '').trim().toLowerCase();
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) {
    if (searchQuery.length > 0) clearBtn.classList.remove('is-hidden');
    else clearBtn.classList.add('is-hidden');
  }
  renderMenu();
}

function clearSearch() {
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  searchQuery = '';
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) clearBtn.classList.add('is-hidden');
  renderMenu();
}

function focusSearch() {
  const input = document.getElementById('search-input');
  if (input) {
    input.focus();
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function changeLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.remove('is-active');
  });
  const activeBtn = document.getElementById(`lang-${lang}`);
  if (activeBtn) {
    activeBtn.classList.add('is-active');
  }

  const t = uiTranslations[lang];
  document.getElementById('ui-time-badge').innerText = t.badge;
  document.getElementById('search-input').placeholder =
    t.searchPlaceholder;

  renderMenu();
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('is-hidden');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('is-hidden');
}

let splashCompleted = false;

function runSplashAnimation() {
  if (splashCompleted) return;
  splashCompleted = true;

  const splashOverlay = document.getElementById('splash-overlay');
  const headerLogo = document.getElementById('header-logo');
  const topBar = document.getElementById('top-bar');
  const subContent = document.getElementById('sub-header-content');

  if (!splashOverlay || !headerLogo) return;

  // Make sure the page is scrolled to the top at the beginning
  window.scrollTo(0, 0);

  // Coordinate calculation: difference between the viewport center and the logo's natural position in the header
  const logoRect = headerLogo.getBoundingClientRect();
  const targetCenterX = window.innerWidth / 2;
  const targetCenterY = window.innerHeight / 2;
  const currentCenterX = logoRect.left + logoRect.width / 2;
  const currentCenterY = logoRect.top + logoRect.height / 2;

  const deltaX = targetCenterX - currentCenterX;
  const deltaY = targetCenterY - currentCenterY;

  // Place the real logo in the middle of the screen initially with scale(0)
  headerLogo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0)`;
  headerLogo.style.opacity = '0';

  // 1. The logo pops up in the middle of the screen
  requestAnimationFrame(() => {
    setTimeout(() => {
      headerLogo.style.transition =
        'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out';
      headerLogo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.15)`;
      headerLogo.style.opacity = '1';
    }, 80);
  });

  // 2. After 850ms the logo travels to its normal position at the top WITHOUT ever disappearing
  setTimeout(() => {
    headerLogo.style.transition =
      'transform 0.75s cubic-bezier(0.25, 1, 0.35, 1)';
    headerLogo.style.transform = 'translate(0px, 0px) scale(1)';

    // The black background fades out revealing the venue background
    splashOverlay.style.transition = 'opacity 0.65s ease-out';
    splashOverlay.style.opacity = '0';

    // The top bar and the underlying components fade in
    if (topBar) topBar.classList.add('is-visible');
    if (subContent) subContent.classList.add('is-visible');
  }, 900);

  // 3. As soon as the logo reaches its natural position (1650ms), the whole accordion menu loads in a cascade
  setTimeout(() => {
    splashOverlay.style.display = 'none';
    headerLogo.style.transform = 'none';
    headerLogo.style.transition = 'none';

    // Every accordion category loads in a sequential cascade
    const categories = document.querySelectorAll('.category-section');
    categories.forEach((cat, index) => {
      cat.style.opacity = '0';
      cat.style.transform = 'translateY(20px)';
      cat.style.transition =
        'opacity 0.4s ease-out, transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
      setTimeout(
        () => {
          cat.style.opacity = '1';
          cat.style.transform = 'translateY(0)';
        },
        40 + index * 50,
      );
    });
  }, 1650);
}

// Initialization: at startup every category begins collapsed
renderMenu();

// Start the splash animation as soon as the page is ready
if (document.readyState === 'complete') {
  runSplashAnimation();
} else {
  window.addEventListener('load', runSplashAnimation);
  // Fallback for an immediate start without excessive waiting
  setTimeout(runSplashAnimation, 1200);
}
