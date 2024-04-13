const filters = {
    selection: [
        { label: 'All devices', value: 'ALL_DEVICES' },
        { label: 'Our favorites', value: 'OUR_FAVORITES' },
        { label: 'Rental equipment', value: 'RENTAL_EQUIPMENT' },
    ],
    device_type: [
        { label: 'Handheld Computer', value: 'HANDHELD_COMPUTER' }, 
        { label: 'Smartphone', value: 'SMARTPHONE' }, 
        { label: 'Forklift Terminal / Tablet', value: 'FORKLIFT_TERMINAL_TABLET' },
        { label: 'Wearable / Handheld Scanner', value: 'WEARABLE_HANDHELD_SCANNER' }, 
        { label: 'Printer', value: 'PRINTER' },
    ],
    manufacturer: [
        { label: 'ACD', value: 'ACD' }, 
        { label: 'Advantech', value: 'ADVANTECH' }, 
        { label: 'Bixolone', value: 'BIXOLONE' },
        { label: 'Casio', value: 'CASIO' }, 
        { label: 'CAT', value: 'CAT' }, 
        { label: 'Cipherlab', value: 'CIPHERLAB' }, 
        { label: 'Datalogic', value: 'DATALOGIC' },
        { label: 'Cowardly', value: 'COWARDLY' }, 
        { label: 'Getac', value: 'GETAC' }, 
        { label: 'Gigaset', value: 'GIGASET' }, 
        { label: 'Honeywell', value: 'HONEYWELL' },
        { label: 'i.Safe Mobile', value: 'I_SAFE_MOBILE' }, 
        { label: 'iData', value: 'IDATA' }, 
        { label: 'Keyence', value: 'KEYENCE' }, 
        { label: 'KoamTac', value: 'KOAMTAC' },
        { label: 'Newland', value: 'NEWLAND' }, 
        { label: 'Panasonic', value: 'PANASONIC' }, 
        { label: 'Point Mobile', value: 'POINT_MOBILE' }, 
        { label: 'ProGlove', value: 'PROGLOVE' },
        { label: 'Samsung', value: 'SAMSUNG' }, 
        { label: 'Zebra', value: 'ZEBRA' },
    ],
    operational: [
        { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION' }, 
        { label: 'Beverage Logistics', value: 'BEVERAGE_LOGISTICS' }, 
        { label: 'Maintenance', value: 'MAINTENANCE' },
        { label: 'Field Service', value: 'FIELD_SERVICE' }, 
        { label: 'Healthcare', value: 'HEALTHCARE' }, 
        { label: 'Explosion-proof', value: 'EXPLOSION_PROOF' },
    ]
};

export default filters