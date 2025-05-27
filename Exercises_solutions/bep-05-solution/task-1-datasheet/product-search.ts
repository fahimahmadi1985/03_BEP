// Simplified product data structure without translations
export type Product = {
    productCode: string;
    EAN: string;
    family: string;
    markets: string[];
    descriptions: string[];
    images: string[];
    features: { name: string, value: string }[];
    datasheet_version: string;
    certificates: { name: string, date: string }[];
    spare_parts: { name: string, code: string }[];
};

const products: Product[] = [
    {
        productCode: '9003010Z',
        EAN: '7112160082522',
        family: 'Duradeep',
        markets: ['en-gb', 'de-de', 'fr-fr'],
        descriptions: ['Duradeep N51 Deep water pump', 'Duradeep N51 Tauchpumpe', 'Pompe immergée Duradeep N51'],
        images: ['http://localhost:9000/images/duradeep-51.png', 'http://localhost:9000/images/duradeep-51-2.jpg', 'http://localhost:9000/images/duradeep-51-3.jpg'],
        features: [
            { name: 'flowRate300kPa', value: '80l/s' },
            { name: 'noiseclassISO3822', value: 'I' },
            { name: 'singleLever', value: 'true' },
            { name: 'NRGLabel', value: 'C' }
        ],
        datasheet_version: '2023-11-08T10:08:51.512Z',
        certificates: [
            { name: 'STF', date: 'EUDE67-99004498-TZ1' },
            { name: 'EN', date: 'EN 817' }
        ],
        spare_parts: [
            { name: 'Robusta high pressure pipe 5m', code: 'RB02' },
            { name: 'Duradeep 51 pump assembly', code: 'DD51' }
        ]
    },
    {
        productCode: '9003020Z',
        EAN: '7112160082523',
        family: 'Duradeep',
        markets: ['en-gb', 'de-de', 'fr-fr'],
        descriptions: ['Duradeep N52 Deep water pump', 'Duradeep N52 Tauchpumpe', 'Pompe immergée Duradeep N52'],
        images: ['http://localhost:9000/images/duradeep-52.svg', 'http://localhost:9000/images/duradeep-52-2.jpg', 'http://localhost:9000/images/duradeep-52-3.jpg'],
        features: [
            { name: 'flowRate300kPa', value: '100l/s' },
            { name: 'noiseclassISO3822', value: 'II' },
            { name: 'singleLever', value: 'true' },
            { name: 'NRGLabel', value: 'E' }
        ],
        datasheet_version: '2023-12-04T09:02:02.918Z',
        certificates: [
            { name: 'STF', date: 'EUDE67-99004498-TZ2' },
            { name: 'EN', date: 'EN 818' }
        ],
        spare_parts: [
            { name: 'Robusta high pressure pipe 5m', code: 'RB02' },
            { name: 'Duradeep 52 pump assembly', code: 'DD52' }
        ]
    }
];

export function productSearch(productCode: string): any {
    return products.find(product => product.productCode === productCode);
}