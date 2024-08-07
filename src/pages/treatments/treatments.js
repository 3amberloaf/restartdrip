const treatments = [
  {
    name: 'DEHYDRATION',
    price: '$105',
    half: '$65',
    description: 'Rehydrate and replenish your body!',
    imageUrl: 'images/services/dehydration.png', 
    servicePath: '/services/dehydration'
  },
  {
    name: 'BEAUTY and YOUTH',
    price: '$195',
    half: '$115',
    description: 'Become the best version of you today!',
    imageUrl: 'images/services/beauty.png', 
    servicePath: '/services/beauty'
  },
  {
    name: 'MIGRAINE FIGHTER',
    price: '$180',
    half: '$110',
    description: 'Fight back against headaches and nausea!',
    imageUrl: 'images/services/migraine.png', 
    servicePath: '/services/migraine'
  },
  {
    name: 'ENERGY BOOST',
    price: '$200',
    half: '$130',
    description: 'Replenish with vital fluids and vitamins.',
    imageUrl: 'images/services/energy.png', 
    servicePath: '/services/energy-boost'
  },
  {
    name: 'HANGOVER DETOX',
    price: '$220',
    half: '$165',
    description: 'Resolve nausea, headaches, and fatigue.',
    imageUrl: 'images/services/hangover.png', 
    servicePath: '/services/hangover'
  },
  {
    name: 'IMMUNE BOOSTER',
    price: '$200',
    half: '$150',
    description: 'Boost your immune system fast and naturally!',
    imageUrl: 'images/services/immune.png', 
    servicePath: '/services/immune-boost'
  },
  {
    name: 'MYERS COCKTAIL',
    price: '$280',
    half: '$195',
    description: 'Packed with everything you need!',
    imageUrl: 'images/services/myers.png', 
    servicePath: '/services/myers-cocktail'
  },
  {
    name: 'FAT BURNER',
    price: '$175',
    half: '$115',
    description: 'Increase energy, mood and health!',
    imageUrl: 'images/services/fat.png', 
    servicePath: '/services/fatburner'
  },
  {
    name: 'ATHLETE RECOVERY',
    price: '$250',
    half: '$150',
    description: 'Workout and recover like a professional!',
    imageUrl: 'images/services/athlete.png', 
    servicePath: '/services/athlete'
  }
];

// Remove the dollar sign and convert price to number
const parsePrice = price => Number(price.replace('$', ''));

// sort treatments
const sortedTreatments = [...treatments].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));

export default sortedTreatments;
