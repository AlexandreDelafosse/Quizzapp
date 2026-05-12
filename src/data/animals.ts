import { Animal } from '../types';

export const animals: Animal[] = [
  {
    id: '1',
    name: 'Lion',
    species: 'Panthera leo',
    description: 'Le lion est un grand félin vivant principalement en Afrique subsaharienne. Connu pour sa crinière chez le mâle et son rugissement puissant.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg',
    category: 'mammal',
    facts: [
      'Un rugissement de lion peut s\'entendre à 8 km de distance.',
      'Les lions sont les seuls félins à vivre en groupes sociaux appelés "fierté".',
      'Une lionne est la principale chasseuse du groupe.',
    ],
  },
  {
    id: '2',
    name: 'Aigle royal',
    species: 'Aquila chrysaetos',
    description: 'L\'aigle royal est l\'un des oiseaux de proie les plus emblématiques. Il vit dans les régions montagneuses et les grandes étendues sauvages.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1200px-24701-nature-natural-beauty.jpg',
    category: 'bird',
    facts: [
      'L\'aigle royal peut voir 8 fois mieux qu\'un être humain.',
      'Son envergure peut atteindre 2,3 mètres.',
      'Il peut plonger à une vitesse de 320 km/h.',
    ],
  },
  {
    id: '3',
    name: 'Éléphant d\'Afrique',
    species: 'Loxodonta africana',
    description: 'Le plus grand animal terrestre. Les éléphants d\'Afrique vivent en troupeaux matriarcaux et sont connus pour leur mémoire exceptionnelle.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/1200px-African_Bush_Elephant.jpg',
    category: 'mammal',
    facts: [
      'Un éléphant adulte peut peser jusqu\'à 6 tonnes.',
      'Les éléphants se souviennent des membres de leur famille pendant des décennies.',
      'Ils utilisent leurs trompes pour plus de 40 tâches différentes.',
    ],
  },
  {
    id: '4',
    name: 'Grand requin blanc',
    species: 'Carcharodon carcharias',
    description: 'Le grand requin blanc est le plus grand poisson prédateur au monde. Il joue un rôle crucial dans l\'équilibre des écosystèmes marins.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/1200px-White_shark.jpg',
    category: 'fish',
    facts: [
      'Il peut détecter une goutte de sang dans 100 litres d\'eau.',
      'Ses dents repoussent tout au long de sa vie.',
      'Il peut atteindre 6 mètres de long.',
    ],
  },
  {
    id: '5',
    name: 'Caméléon panthère',
    species: 'Furcifer pardalis',
    description: 'Le caméléon panthère est un reptile originaire de Madagascar, célèbre pour sa capacité à changer de couleur selon son humeur et l\'environnement.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Panther_chameleon_%28Furcifer_pardalis%29_male_Nosy_Be.jpg/1200px-Panther_chameleon_%28Furcifer_pardalis%29_male_Nosy_Be.jpg',
    category: 'reptile',
    facts: [
      'Ses yeux bougent indépendamment l\'un de l\'autre.',
      'Sa langue peut s\'étendre à deux fois la longueur de son corps.',
      'Le changement de couleur reflète son état émotionnel, pas seulement son environnement.',
    ],
  },
  {
    id: '6',
    name: 'Grenouille dendrobate',
    species: 'Dendrobates tinctorius',
    description: 'Les grenouilles dendrobates sont de petites grenouilles venimeuses vivant en Amazonie. Leurs couleurs vives signalent leur toxicité aux prédateurs.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Dendrobates_tinctorius_-_Tournon.jpg/1200px-Dendrobates_tinctorius_-_Tournon.jpg',
    category: 'amphibian',
    facts: [
      'Leur venin est utilisé par des tribus amazoniennes pour empoisonner les pointes de flèches.',
      'En captivité, elles perdent leur toxicité car elles n\'ont plus accès aux insectes qui la génèrent.',
      'Elles mesurent entre 1,5 et 6 cm.',
    ],
  },
];
