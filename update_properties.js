const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/properties.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const newApts = [
    {
        "id": "apt_11_trocadero",
        "type": "buy",
        "title": "Prestige Étoile - Trocadéro",
        "price": "1 950 000 €",
        "location": "Paris 16ème",
        "features": "120 m² • 4 Pièces",
        "description": "Superbe appartement de réception avec vue partielle sur la Tour Eiffel. Vaste séjour très lumineux, matériaux nobles, parquet point de Hongrie et finitions haut de gamme.",
        "images": Array.from({ length: 12 }, (_, i) => `/images/apt_11/img_${String(i + 1).padStart(2, '0')}.png`)
    },
    {
        "id": "apt_12_neuilly",
        "type": "buy",
        "title": "Penthouse - Neuilly-sur-Seine",
        "price": "2 100 000 €",
        "location": "Neuilly-sur-Seine",
        "features": "110 m² • 4 Pièces",
        "description": "Penthouse d'exception avec terrasse panoramique arborée. Espace de vie baigné de lumière, vue dégagée sans vis-à-vis. Prestation rare sur le marché.",
        "images": Array.from({ length: 4 }, (_, i) => `/images/apt_12/img_${String(i + 1).padStart(2, '0')}.png`)
    },
    {
        "id": "apt_13_invalides",
        "type": "buy",
        "title": "Vue Invalides - Gros Caillou",
        "price": "2 450 000 €",
        "location": "Paris 7ème",
        "features": "140 m² • 5 Pièces",
        "description": "Au sein d'un bel immeuble parfaitement entretenu, splendide appartement familial offrant une vue imprenable sur le dôme des Invalides. Charme de l'ancien, belle hauteur sous plafond.",
        "images": Array.from({ length: 5 }, (_, i) => `/images/apt_13/img_${String(i + 1).padStart(2, '0')}.png`)
    },
    {
        "id": "apt_14_marais",
        "type": "buy",
        "title": "Hôtel Particulier - Marais",
        "price": "3 200 000 €",
        "location": "Paris 3ème",
        "features": "180 m² • 6 Pièces",
        "description": "Niché au calme d'une cour pavée dans un ancien hôtel particulier historique, ce bien exceptionnel offre de superbes volumes, de grandes fenêtres à meneaux et un niveau de finition exceptionnel.",
        "images": Array.from({ length: 6 }, (_, i) => `/images/apt_14/img_${String(i + 1).padStart(2, '0')}.png`)
    }
];

data.properties.push(...newApts);

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully added the 4 apartments to properties.json');
