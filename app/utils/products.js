const products = [
    {
        id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
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
        id: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q",
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
        id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r",
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
        id: "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s",
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
        id: "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t",
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
        id: "f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u",
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
    },
    {
        id: "d9b6cff8-0493-416d-b430-3440297b7580",
        is_favorite: true,
        is_rental: false,
        type: 'FORKLIFT_TERMINAL_TABLET',
        manufacturer: 'ZEBRA',
        operational_area: [
            { label: 'Maintenance', value: 'MAINTENANCE' },
            { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION' }, 
            { label: 'Field Service', value: 'FIELD_SERVICE' }, 
        ],
        price: 620,
        weight: 690,
        name: 'Zebra ET40/45',
        image: 'https://skystatic08.atmos.id/11018/2049634327/2004413200/2012441964/Zebra ET45_ET40.png',
        specifications: [
            'Price: from 620 euros',
            'Display: 10 inches',
            'Weight: 690 grams',
            'Available accessories: SE4100, SE4710 or SE55 1D/2D extended range scanning module, 4 or 8 GB RAM, support up to Android 14, Wi-FI 6, 5G (ET45), 8"/10" (optional), IP65, 7600mAh removable battery'
        ],
        assessment: 'The Zebra ET40 and Zebra ET45 are modern rugged tablets for indoor and outdoor use. Both tablets are available in 8" or 10" and are very robust. Both models also contain the latest hardware and software, with a scanner and, with the ET45, also mobile communications up to 5G.',
        manufacturer_url: 'https://www.zebra.com/de/de/products/spec-sheets/tablets/et40-et45.html',
    },
    {
        id: "55c70f89-d4a4-4d12-abd5-df2dd73c8f78",
        is_favorite: false,
        is_rental: false,
        type: 'HANDHELD_COMPUTER',
        manufacturer: 'DATALOGIC',
        operational_area: [
            { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION' },
            { label: 'Field Service', value: 'FIELD_SERVICE' }
        ],
        price: 800,
        weight: 285,
        name: 'Datalogic memor 11',
        image: 'https://skystatic08.atmos.id/11018/2049634327/2004895232/2012441964/datalogic_memor10@2x.jpg',
        specifications: [
            'Price: from 800 euros',
            'Display: 5 inches',
            'Weight: 285 grams',
            'Available accessories: 1D/2D imager with Green Spot technology (visual scan confirmation), contactless charging possible - replaceable battery, upgradeable to Android 14, mobile radio optional, IP65'
        ],
        assessment: 'The Memor 11 from Datalogic is a high-performance device for warehouse and field service applications. The technical parameters are convincing, the Android system is up to date. The device competes in its class against the CT60XP from Honeywell or the TC52x from Zebra.',
        manufacturer_url: 'https://www.datalogic.com/deu/einzelhandel-industrielle-automation-transport-logistik-gesundheitswesen-weitere-anwendungen/mobilcomputer/memor-11-pd-934.html',
    },
    {
        id: "11db3ca5-3eb6-4b6d-8f50-f4c383d23da3",
        is_favorite: false,
        is_rental: false,
        type: 'WEARABLE_HANDHELD_SCANNER',
        manufacturer: 'POINT_MOBILE',
        operational_area: [
            { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION' },
        ],
        price: 600,
        weight: 49,
        name: 'Point Mobile PM5',
        image: 'https://skystatic08.atmos.id/11018/2049634327/2012518994/2012441964/Point Mobile PM5.png',
        specifications: [
            'Price: from 600 euros',
            'Display: 0 inches',
            'Weight: 49 grams',
            'Available accessories: Honeywell N6703 Ultra slim 1D/2D Barcode Scan Engine, 510mAh (Standard), 700mAh (Optional), IP65, Bluetooth, NFC'
        ],
        assessment: 'The Point Mobile PM5 is a compact and lightweight ring scanner. It impresses with high scanning performance and speed. The battery lasts 9 hours as standard; The operating time can be extended with an additional battery',
        manufacturer_url: 'https://www.pointmobile.com/de/products-mobilecomputers/PM5',
    },
    {
        id: "8e84c6de-9943-4822-870d-198cba02ac43",
        is_favorite: false,
        is_rental: false,
        type: 'HANDHELD_COMPUTER',
        manufacturer: 'ZEBRA',
        operational_area: [
            { label: 'Beverage Logistics', value: 'BEVERAGE_LOGISTICS' }, 
            { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION' },
        ],
        price: 560,
        weight: 296,
        name: 'Zebra MC2700',
        image: 'https://skystatic08.atmos.id/11018/2049634327/2012669047/2012441964/ZebraMC2700.png',
        specifications: [
            'Price: from 560 euros',
            'Display: 4 inches',
            'Weight: 296 grams',
            'Available accessories: Standard range 1D/2D scan engine and removable battery, expandable to 4,900 mAh'
        ],
        assessment: 'The latest device class from Zebra is a comparatively inexpensive device with good performance features - depending on the model variant - and a 34-key hardware keyboard. New is the “PRZM Intelligent Imaging” technology, which can also be used to read damaged barcodes. Thanks to its cellular capability, the MC2700 is suitable for outdoor use.',
        manufacturer_url: 'https://www.zebra.com/de/de/products/spec-sheets/mobile-computers/handheld/mc2200-mc2700.html',
    },
    {
        id: "fa95eb6c-e269-462e-8418-cb6f647eb54b",
        is_favorite: false,
        is_rental: false,
        type: 'WEARABLE_HANDHELD_SCANNER',
        manufacturer: 'ZEBRA',
        operational_area: [
            { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION' },
        ],
        price: 700,
        weight: 70,
        name: 'Zebra RS6100',
        image: 'https://skystatic08.atmos.id/11018/2049634327/2015395946/2012441964/Zebra RS6100.png',
        specifications: [
            'Price: from 700 euros',
            'Display: 0 inches',
            'Weight: 70 grams',
            'Available accessories: Powerful 1D/2D scanning module SE55, pairing with Zebra devices via NFC or BT 5.2, replaceable battery'
        ],
        assessment: 'The RS6100 ring scanner from Zebra is a tool for scan-intensive processes in warehouse logistics. The wearable can be worn on a finger, mounted on a glove, on the back of the hand or on a collar. With the new scanning module, a range of 12m can be achieved.',
        manufacturer_url: 'https://www.zebra.com/de/de/products/mobile-computers/wearable-computers/rs6100.html',
    },
];

export default products;
