const filters = {
    selection: [
        { label: 'All devices', value: 'ALL_DEVICES', enabled: true },
        { label: 'Our favorites', value: 'OUR_FAVORITES', enabled: true },
        { label: 'Rental equipment', value: 'RENTAL_EQUIPMENT', enabled: true },
    ],
    device_type: [
        { label: 'Handheld Computer', value: 'HANDHELD_COMPUTER', enabled: true }, 
        { label: 'Smartphone', value: 'SMARTPHONE', enabled: true }, 
        { label: 'Forklift Terminal / Tablet', value: 'FORKLIFT_TERMINAL_TABLET', enabled: true },
        { label: 'Wearable / Handheld Scanner', value: 'WEARABLE_HANDHELD_SCANNER', enabled: true }, 
        { label: 'Printer', value: 'PRINTER', enabled: true },
    ],
    manufacturer: [
        { label: 'ACD', value: 'ACD', enabled: true }, 
        { label: 'Advantech', value: 'ADVANTECH', enabled: true }, 
        { label: 'Bixolone', value: 'BIXOLONE', enabled: true },
        { label: 'Casio', value: 'CASIO', enabled: true }, 
        { label: 'CAT', value: 'CAT', enabled: true }, 
        { label: 'Cipherlab', value: 'CIPHERLAB', enabled: true }, 
        { label: 'Datalogic', value: 'DATALOGIC', enabled: true },
        { label: 'Cowardly', value: 'COWARDLY', enabled: true }, 
        { label: 'Getac', value: 'GETAC', enabled: true }, 
        { label: 'Gigaset', value: 'GIGASET', enabled: true }, 
        { label: 'Honeywell', value: 'HONEYWELL', enabled: true },
        { label: 'i.Safe Mobile', value: 'I_SAFE_MOBILE', enabled: true }, 
        { label: 'iData', value: 'IDATA', enabled: true }, 
        { label: 'Keyence', value: 'KEYENCE', enabled: true }, 
        { label: 'KoamTac', value: 'KOAMTAC', enabled: true },
        { label: 'Newland', value: 'NEWLAND', enabled: true }, 
        { label: 'Panasonic', value: 'PANASONIC', enabled: true }, 
        { label: 'Point Mobile', value: 'POINT_MOBILE', enabled: true }, 
        { label: 'ProGlove', value: 'PROGLOVE', enabled: true },
        { label: 'Samsung', value: 'SAMSUNG', enabled: true }, 
        { label: 'Zebra', value: 'ZEBRA', enabled: true },
    ],
    operational: [
        { label: 'Warehouse & Production', value: 'WAREHOUSE_&_PRODUCTION', enabled: true }, 
        { label: 'Beverage Logistics', value: 'BEVERAGE_LOGISTICS', enabled: true }, 
        { label: 'Maintenance', value: 'MAINTENANCE', enabled: true },
        { label: 'Field Service', value: 'FIELD_SERVICE', enabled: true }, 
        { label: 'Healthcare', value: 'HEALTHCARE', enabled: true }, 
        { label: 'Explosion-proof', value: 'EXPLOSION_PROOF', enabled: true },
    ]
}

export default filters;
