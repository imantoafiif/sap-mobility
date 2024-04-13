const products = [
    {
        is_favorite: true,
        is_rental: true,
        type: 'HANDHELD_COMPUTER',
        manufacturer: 'ZEBRA',
        operational_area: [
            { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION' }
        ],
        price: 370,
        weight: 236,
        name: 'Zebra TC21/26',
        image: 'https://skystatic08.atmos.id/11018/2049634327/2002200717/2012441964/zebra_tc21@2x.jpg',
        specifications: [
            'Price: from 370 euros',
            'Display: 5 inches',
            'Weight: 236 grams',
            'Available accessories: Scanner: 1D and 2D barcodes, replaceable 3,100 mAh battery, extended 5,400 mAh battery possible'
        ],
        assessment: 'The TC21 (WLAN version) or the TC26 (with mobile phone option) is the entry-level device with an imager for simple applications in warehouse, production or delivery. The improved optional handle now also allows use of the rear camera. TC26 also communicates via mobile communications and is therefore interesting for outdoor use.',
        manufacturer_url: 'https://www.zebra.com/de/de/products/mobile-computers/handheld/tc21-tc26.html',
    },
    {
        is_favorite: true,
        is_rental: true,
        type: 'HANDHELD_COMPUTER',
        manufacturer: 'ZEBRA',
        operational_area: [
            { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION' },
            { label: 'Field Service', value: 'FIELD_SERVICE' }
        ],
        price: 1100,
        weight: 445,
        name: 'Zebra MC3300X',
        image: 'https://skystatic08.atmos.id/11018/2049634327/2003088216/2012441964/zebra_mc3300@2x.jpeg',
        specifications: [
            'Price: from 1100 euros',
            'Display: 4 inches',
            'Weight: 445 grams',
            'Available accessories: various engines - very powerful 2D imager, configuration with pistol grip, rotating head, 0° or 45° scan'
        ],
        assessment: 'The top device in the mid-range storage class with a large display and full keyboard. Auto-Range Imager enables multiple scans and scans up to 21 m away.',
        manufacturer_url: 'https://www.zebra.com/de/de/products/mobile-computers/handheld/mc3300.html',
    },
    {
        is_favorite: true,
        is_rental: true,
        type: 'HANDHELD_COMPUTER',
        manufacturer: 'ZEBRA',
        operational_area: [
            { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION' },
            { label: 'Field Service', value: 'FIELD_SERVICE' }
        ],
        price: 1400,
        weight: 266,
        name: 'Zebra TC52ax',
        image: 'https://skystatic08.atmos.id/11018/2049634327/2083848334/2012441964/TC52ax.png',
        specifications: [
            'Price: from 1400 euros',
            'Display: 5 inches',
            'Weight: 266 grams',
            'Available accessories: 1D and 2D barcodes (Imager SE4720), battery for up to 14 h shifts, hot swap possible, IP68, BT 5.1, WIFI-6, optional SE5500 scanner up to 12 m range, upgradeable to Android 14'
        ],
        assessment: 'A robust and technically very well-equipped device with a good scan engine. A plus are the 6 programmable buttons on the sides of the display.',
        manufacturer_url: 'https://www.zebra.com/de/de/products/spec-sheets/mobile-computers/handheld/tc5x-series.html',
    },
    {
        is_favorite: true,
        is_rental: true,
        type: 'HANDHELD_COMPUTER',
        manufacturer: 'ZEBRA',
        operational_area: [
            { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION' },
            { label: 'Field Service', value: 'FIELD_SERVICE' }
        ],
        price: 1250,
        weight: 249,
        name: 'Zebra TC57x',
        image: 'https://skystatic08.atmos.id/11018/2049634327/2097486652/2012441964/zebra_tc57@2x.jpg',
        specifications: [
            'Price: from 1250 euros',
            'Display: 5 inches',
            'Weight: 249 grams',
            'Available accessories: 1D and 2D barcodes (Imager SE4710), battery for up to 14 h shifts, hot swap possible, LTE, IP68, BT 5.0'
        ],
        assessment: 'The robust TC57x complements the functionality of the TC52x with mobile radio capability. This means that the device can be used in external warehouses or field service.',
        manufacturer_url: 'https://www.zebra.com/de/de/products/mobile-computers/handheld/tc52-tc57-series-touch-computer.html',
    },
    {
        is_favorite: false,
        is_rental: false,
        type: 'HANDHELD_COMPUTER',
        manufacturer: 'CASIO',
        operational_area: [
            { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION' },
        ],
        price: 900,
        weight: 260,
        name: 'Casio DT-X450',
        image: 'https://skystatic08.atmos.id/11018/2049634327/2003011650/2012441964/casio_dt-x400@2x.png',
        specifications: [
            'Price: from 900 euros',
            'Display: 3.2 inches',
            'Weight: 260 grams',
            'Available accessories: Freely assignable function keys, 25 hours of continuous operation, LTE, Android 11, 3 m fall resistant'
        ],
        assessment: 'With the DT-X400 series, Casio is bringing its first Android devices onto the market. The device sits comfortably in the hand thanks to the well thought-out handle and rubberized surface. The touch display is a bit small, but fans of keyboard-based input will get their money\'s worth.',
        manufacturer_url: 'https://www.casio-europe.com/de/produkte/mobile-datenerfassung/dt-x400/',
    },
    {
        is_favorite: false,
        is_rental: false,
        type: 'SMARTPHONE',
        manufacturer: 'CAT',
        operational_area: [
            { label: 'Beverage Logistics', value: 'BEVERAGE_LOGISTICS' },
        ],
        price: 370,
        weight: 320,
        name: 'CAT S53',
        image: 'https://skystatic08.atmos.id/11018/2049634327/2003436729/2012441964/CAT S53.png',
        specifications: [
            'Price: from 370 euros',
            'Display: 6.5 inches',
            'Weight: 320 grams',
            'Available accessories: 5500 mAh battery with quick charging function, dual SIM capable, 1.8 m drop-proof, 48 MP camera, IP68, IP69K & MIL-SPEC 810H, extra internal flashlight'
        ],
        assessment: 'Modern and robust: The device is more powerful than its predecessors and has Android 11, 6 GB of RAM and 128 GB of storage. It should be noted that the screen brightness still needs improvement in direct sunlight.',
        manufacturer_url: 'https://www.catphones.com/de-de/cat-s53/',
    }
];

export default products;
