import {Bird} from './types';

export const data: Bird[] = [
  {
    id: '1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Anna%27s_hummingbird.jpg/1920px-Anna%27s_hummingbird.jpg',
    description:
      'The grey seedeater (Sporophila intermedia) is a species of bird in the family Thraupidae. It is found in Brazil, Colombia, Ecuador, Guyana, Trinidad and Tobago, and Venezuela. Its natural habitats are subtropical or tropical seasonally wet or flooded lowland grassland and heavily degraded former forest.',
    isDiscoverd: true,
    coordinates: [-68.6158697422588, 5.280283050277001],
    name: 'Grey seedeater',
  },
  {
    id: '2',
    image: null,
    description:
      'The grey seedeater (Sporophila intermedia) is a species of bird in the family Thraupidae. It is found in Brazil, Colombia, Ecuador, Guyana, Trinidad and Tobago, and Venezuela. Its natural habitats are subtropical or tropical seasonally wet or flooded lowland grassland and heavily degraded former forest.',
    isDiscoverd: false,
    coordinates: [0, 0],
    name: 'Black-throated flowerpiercer',
  },
  {
    id: '3',
    image: null,
    description:
      'The grey seedeater (Sporophila intermedia) is a species of bird in the family Thraupidae. It is found in Brazil, Colombia, Ecuador, Guyana, Trinidad and Tobago, and Venezuela. Its natural habitats are subtropical or tropical seasonally wet or flooded lowland grassland and heavily degraded former forest.',
    isDiscoverd: false,
    coordinates: [0, 0],
    name: 'Black-headed hemispingus',
  },
  {
    id: '4',
    image: null,
    description:
      'The grey seedeater (Sporophila intermedia) is a species of bird in the family Thraupidae. It is found in Brazil, Colombia, Ecuador, Guyana, Trinidad and Tobago, and Venezuela. Its natural habitats are subtropical or tropical seasonally wet or flooded lowland grassland and heavily degraded former forest.',
    isDiscoverd: false,
    coordinates: [0, 0],
    name: 'Grey seedeater',
  },
  {
    id: '5',
    image: null,
    description:
      'The grey seedeater (Sporophila intermedia) is a species of bird in the family Thraupidae. It is found in Brazil, Colombia, Ecuador, Guyana, Trinidad and Tobago, and Venezuela. Its natural habitats are subtropical or tropical seasonally wet or flooded lowland grassland and heavily degraded former forest.',
    isDiscoverd: false,
    coordinates: [0, 0],
    name: 'Black-throated flowerpiercer',
  },
  {
    id: '6',
    image: null,
    description:
      'The grey seedeater (Sporophila intermedia) is a species of bird in the family Thraupidae. It is found in Brazil, Colombia, Ecuador, Guyana, Trinidad and Tobago, and Venezuela. Its natural habitats are subtropical or tropical seasonally wet or flooded lowland grassland and heavily degraded former forest.',
    isDiscoverd: false,
    coordinates: [0, 0],
    name: 'Black-headed hemispingus',
  },
  {
    id: '7',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Multicolored_tanager_chicoral.jpg/1280px-Multicolored_tanager_chicoral.jpg',
    description:
      'The grey seedeater (Sporophila intermedia) is a species of bird in the family Thraupidae. It is found in Brazil, Colombia, Ecuador, Guyana, Trinidad and Tobago, and Venezuela. Its natural habitats are subtropical or tropical seasonally wet or flooded lowland grassland and heavily degraded former forest.',
    isDiscoverd: true,
    coordinates: [-74.91760912916793, 2.9434990827279846],
    name: 'Grey seedeater',
  },
  {
    id: '8',
    image: null,
    description:
      'The grey seedeater (Sporophila intermedia) is a species of bird in the family Thraupidae. It is found in Brazil, Colombia, Ecuador, Guyana, Trinidad and Tobago, and Venezuela. Its natural habitats are subtropical or tropical seasonally wet or flooded lowland grassland and heavily degraded former forest.',
    isDiscoverd: false,
    coordinates: [0, 0],
    name: 'Black-throated flowerpiercer',
  },
  {
    id: '9',
    image: null,
    description:
      'The grey seedeater (Sporophila intermedia) is a species of bird in the family Thraupidae. It is found in Brazil, Colombia, Ecuador, Guyana, Trinidad and Tobago, and Venezuela. Its natural habitats are subtropical or tropical seasonally wet or flooded lowland grassland and heavily degraded former forest.',
    isDiscoverd: false,
    coordinates: [0, 0],
    name: 'Black-headed hemispingus',
  },
];

export const foundedBirds: Bird[] = data.filter(item => item.isDiscoverd);
