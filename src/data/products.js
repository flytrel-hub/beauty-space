export const products = [
  {
    id: 1,
    name: 'Увлажняющий крем',
    brand: 'Premium Care',
    price: 2800,
    category: 'Уход за лицом',
    description: 'Интенсивное увлажнение для сухой кожи',
    fullDescription:
      'Этот интенсивный увлажняющий крем специально разработан для сухой и обезвоженной кожи. Он обеспечивает глубокое питание и восстановление липидного барьера, делая кожу мягкой и эластичной. Содержит комплекс гиалуроновой кислоты и натуральных масел.',
    composition:
      'Aqua, Glycerin, Butyrospermum Parkii (Shea) Butter, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Glyceryl Stearate, PEG-100 Stearate, Sodium Hyaluronate, Argania Spinosa Kernel Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopheryl Acetate, Panthenol, Allantoin, Carbomer, Sodium Hydroxide, Phenoxyethanol, Ethylhexylglycerin, Parfum.',
    image: '/images/photo-1608248597279-f99d160bfcbc.jpg',
    similarProducts: [2, 3],
  },
  {
    id: 2,
    name: 'Сыворотка с витамином С',
    brand: 'Glow Lab',
    price: 3500,
    category: 'Уход за лицом',
    description: 'Осветляющая и антиоксидантная сыворотка',
    fullDescription:
      'Мощная сыворотка с высокой концентрацией стабильного витамина С. Борется с тусклостью, пигментацией и первыми признаками старения. Придает коже сияние и выравнивает тон. Легкая текстура быстро впитывается, подходит для ежедневного использования.',
    composition:
      'Aqua, Sodium Ascorbyl Phosphate, Glycerin, Ferulic Acid, Tocopherol, Hyaluronic Acid, Phenoxyethanol, Ethylhexylglycerin.',
    image: process.env.PUBLIC_URL + '/images/photo-1746904305806-a9ce08b33dc2.jpg',
    similarProducts: [1, 4],
  },
  {
    id: 3,
    name: 'Очищающий гель для умывания',
    brand: 'Pure Clean',
    price: 1500,
    category: 'Уход за лицом',
    description: 'Мягкое очищение без пересушивания',
    fullDescription:
      'Деликатный гель для умывания, который эффективно удаляет загрязнения и макияж, не нарушая естественный pH баланс кожи. Содержит экстракты ромашки и зеленого чая для успокаивающего эффекта. Подходит для всех типов кожи, включая чувствительную.',
    composition:
      'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycerin, Camellia Sinensis Leaf Extract, Chamomilla Recutita (Matricaria) Flower Extract, Sodium Chloride, Citric Acid, Phenoxyethanol, Ethylhexylglycerin, Parfum.',
    image: process.env.PUBLIC_URL + '/images/photo-1629198735660-e39ea93f5c18.jpg',
    similarProducts: [1, 5],
  },
  {
    id: 4,
    name: 'Тонизирующий лосьон',
    brand: 'Fresh Skin',
    price: 1800,
    category: 'Уход за лицом',
    description: 'Завершение этапа очищения и подготовка к уходу',
    fullDescription:
      'Освежающий лосьон, который восстанавливает pH кожи после умывания и подготавливает ее к нанесению последующих средств. Содержит цветочные воды и пантенол для увлажнения и тонизирования. Не содержит спирт.',
    composition:
      'Aqua, Rosa Damascena Flower Water, Glycerin, Panthenol, Sodium PCA, Allantoin, Phenoxyethanol, Ethylhexylglycerin, Parfum.',
    image: process.env.PUBLIC_URL + '/images/photo-1629198726018-604230bdb091.jpg',
    similarProducts: [2, 5],
  },
  {
    id: 5,
    name: 'Глиняная маска для очищения пор',
    brand: 'Deep Pore',
    price: 2200,
    category: 'Уход за лицом',
    description: 'Глубокое очищение и сужение пор',
    fullDescription:
      'Маска на основе глины, которая эффективно абсорбирует излишки себума и загрязнения из пор, матирует кожу и улучшает ее текстуру. Содержит салициловую кислоту для борьбы с воспалениями и экстракт мяты для освежающего эффекта.',
    composition:
      'Aqua, Kaolin, Bentonite, Glycerin, Glyceryl Stearate, PEG-100 Stearate, Salicylic Acid, Mentha Piperita (Peppermint) Leaf Extract, Phenoxyethanol, Ethylhexylglycerin, Parfum.',
    image: process.env.PUBLIC_URL + '/images/photo-1747858989102-cca0f4dc4a11.jpg',
    similarProducts: [3, 4],
  },
  {
    id: 6,
    name: 'Солнцезащитный крем SPF 50',
    brand: 'Sun Shield',
    price: 2500,
    category: 'Уход за лицом',
    description: 'Надежная защита от УФ-излучения',
    fullDescription:
      'Легкий солнцезащитный крем с максимальной степенью защиты SPF 50. Эффективно блокирует UVA и UVB лучи, предотвращая фотостарение и появление пигментации. Быстро впитывается, не оставляя белых следов и жирного блеска. Подходит для всех типов кожи, включая чувствительную. Водостойкая формула.',
    composition:
      'Aqua, Zinc Oxide, Titanium Dioxide, Ethylhexyl Methoxycinnamate, Butyl Methoxydibenzoylmethane, Glycerin, C12-15 Alkyl Benzoate, Cetearyl Alcohol, Glyceryl Stearate, PEG-100 Stearate, Tocopheryl Acetate, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.',
    image: process.env.PUBLIC_URL + '/images/photo-1728977598879-81ec063c5427.jpg',
    similarProducts: [1, 2],
  },
];

// Категории товаров
export const categories = [
  'Все товары',
  'Уход за лицом',
  'Уход за телом',
  'Макияж',
  'Для волос',
  'Для ванны и душа',
];

// Бренды
export const brands = [
  'Все бренды',
  'Premium Care',
  'Glow Lab',
  'Pure Clean',
  'Fresh Skin',
  'Deep Pore',
  'Beauty Brand X',
  'Healthy Glow',
  'Natural Essence',
  'Pure Bliss',
  'Skin Love',
];
