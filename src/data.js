const facts = [
    {
      questionNumber:"1",
      text: "The Earth's climate has always been stable.",
      isWrongOrRight: false,
      ifWrong: "The Earth's climate has varied naturally over geological time scales due to factors like volcanic activity, solar radiation, and changes in greenhouse gas concentrations. However, the rapid climate change we are experiencing now is largely due to human activities.",
      ifRight: "Human activities, particularly the burning of fossil fuels and deforestation, have significantly accelerated the rate of climate change, leading to an increase in global temperatures.",
    },
    {
      questionNumber:"2",
      text: "The current warming trend is significant because it is unprecedented in scale and speed.",
      isWrongOrRight: true,
      ifWrong: "The current rate of warming is much faster than past natural changes. This rapid change is causing widespread disruptions to ecosystems, weather patterns, and sea levels.",
      ifRight: "The year 2023 was the warmest year since global records began in 1850 at 1.18°C (2.12°F) above the 20th-century average of 13.9°C (57.0°F).",
    },
    {
      questionNumber:"3",
      text: "Polar bear populations are stable and not affected by climate change.",
      isWrongOrRight: false,
      ifWrong: "Polar bear populations are declining due to the loss of sea ice habitat caused by global warming. They rely on sea ice to hunt seals, their primary food source.",
      ifRight: "Melting sea ice is not just affecting polar bears; it also impacts indigenous communities and other wildlife that depend on this habitat.",
    },
    {
      questionNumber:"4",
      text: "Rising sea levels are only a concern for island nations.",
      isWrongOrRight: false,
      ifWrong: "Rising sea levels affect coastal regions worldwide, not just island nations. Cities like Miami, New York, and Jakarta are also at risk of flooding and erosion.",
      ifRight: "About 40% of the world’s population lives within 100 kilometers of the coast, making sea level rise a global issue.",
    },
    {
      questionNumber:"5",
      text: "Increasing the use of renewable energy can help combat climate change.",
      isWrongOrRight: true,
      ifWrong: "Renewable energy sources like solar, wind, and hydroelectric power produce little to no greenhouse gas emissions compared to fossil fuels, helping to reduce the impact of climate change.",
      ifRight: "The cost of renewable energy has decreased significantly over the past decade, making it more accessible and a viable alternative to fossil fuels.",
    },
    {
      questionNumber:"6",
      text: "Planting more trees can help mitigate climate change.",
      isWrongOrRight: true,
      ifWrong: "Trees absorb carbon dioxide, a major greenhouse gas, through the process of photosynthesis, making reforestation and afforestation important strategies for mitigating climate change.",
      ifRight: "One mature tree can absorb approximately 48 pounds of carbon dioxide per year, contributing to cleaner air and reduced greenhouse gas levels.",
    },
    {
      questionNumber:"7",
      text: "All countries contribute equally to climate change.",
      isWrongOrRight: false,
      ifWrong: "Different countries contribute differently to climate change. Developed countries, especially those with high industrial activity, generally have higher greenhouse gas emissions compared to developing countries.",
      ifRight: "The top three carbon emitters—China, the United States, and India—together account for about 50% of total global emissions.",
    },
    {
      questionNumber:"8",
      text: "Climate change only affects the environment, not human health.",
      isWrongOrRight: false,
      ifWrong: "Climate change affects human health in many ways, including increased heatwaves, the spread of diseases, and food and water shortages.",
      ifRight: "The World Health Organization estimates that climate change will cause approximately 250,000 additional deaths per year between 2030 and 2050 due to malnutrition, malaria, diarrhea, and heat stress.",
    },
    {
      questionNumber:"9",
      text: "The Arctic is warming twice as fast as the rest of the planet.",
      isWrongOrRight: true,
      ifWrong: "The phenomenon known as Arctic amplification causes the Arctic to warm faster than the global average due to the loss of reflective ice and snow surfaces.",
      ifRight: "As Arctic ice melts, it exposes darker ocean water, which absorbs more heat and accelerates the warming process—a feedback loop that exacerbates global warming.",
    },
    {
      questionNumber:"10",
      text: "Climate change is the same as weather.",
      isWrongOrRight: false,
      ifWrong: "Weather refers to short-term changes in the atmosphere, while climate is the average weather over long periods. Climate change refers to long-term changes in temperature, precipitation, and other atmospheric conditions.",
      ifRight: "Understanding the difference between weather and climate is crucial for recognizing the long-term impacts of climate change on our planet",
    },
  ];

const wasteItems = [
    {
      index: 0,
      itemName: "Egg Shell",
      itemImage: "../../public/WasteSorting/Compost/egg-shell.png",
      relevantContainer: "compost",
    },
    {
      index: 1,
      itemName: "Ceramics",
      itemImage: "../../public/WasteSorting/Landfill/ceramics.png",
      relevantContainer: "landfill",
    },
    {
      index: 2,
      itemName: "Fruit Peels",
      itemImage: "../../public/WasteSorting/Compost/fruitpeels.png",
      relevantContainer: "compost",
    },
    {
      index: 3,
      itemName: "Aluminium Foil",
      itemImage: "../../public/WasteSorting/Recycling/aluminium-foil.png",
      relevantContainer: "recycling",
    },
    {
      index: 4,
      itemName: "Plastic Bottle",
      itemImage: "../../public/WasteSorting/Recycling/plastic-bottle.png",
      relevantContainer: "recycling",
    },
    {
      index: 5,
      itemName: "Diapers",
      itemImage: "../../public/WasteSorting/Landfill/diapers.png",
      relevantContainer: "landfill",
    },
    {
      index: 6,
      itemName: "Tea Bag",
      itemImage: "../../public/WasteSorting/Compost/teabag.png",
      relevantContainer: "compost",
    },
    {
      index: 7,
      itemName: "Pizza",
      itemImage: "../../public/WasteSorting/Landfill/pizza.png",
      relevantContainer: "landfill",
    },
    {
      index: 8,
      itemName: "Coffee Filter",
      itemImage: "../../public/WasteSorting/Compost/used-coffe-filter.png",
      relevantContainer: "compost",
    },
    {
      index: 9,
      itemName: "Cereal Box",
      itemImage: "../../public/WasteSorting/Recycling/cereal-box.png",
      relevantContainer: "recycling",
    },
    {
      index: 10,
      itemName: "Plastic Bag",
      itemImage: "../../public/WasteSorting/Landfill/plastic-bag.png",
      relevantContainer: "landfill",
    },
    {
      index: 11,
      itemName: "Styrofoam Box",
      itemImage: "../../public/WasteSorting/Landfill/styrofoam-box.png",
      relevantContainer: "landfill",
    },
    {
      index: 12,
      itemName: "Stale Bread",
      itemImage: "../../public/WasteSorting/Compost/stale-bread.png",
      relevantContainer: "compost",
    },
    {
      index: 13,
      itemName: "Newspaper",
      itemImage: "../../public/WasteSorting/Recycling/newspaper.png",
      relevantContainer: "recycling",
    },
    {
      index: 14,
      itemName: "Tin Food Can",
      itemImage: "../../public/WasteSorting/Recycling/tin-food-can.png",
      relevantContainer: "recycling",
    },
    
  ];



  const details = {
    '1': {

        action: 'Reducing Meat Consumption',
        impact: 'Decreases Deforestation and Greenhouse Gas Emissions',
        description: 'By consuming less meat, you can significantly reduce the demand for livestock farming, which is a major driver of deforestation and a source of methane emissions, a potent greenhouse gas.',
        resources: ['https://www.verywellfit.com/plant-based-lifestyle-environmental-benefits-6891044#:~:text=Plant%2Dbased%20eating%20has%20a,leaching%20into%20water%20and%20soil.', 'https://www.greenpeace.org.uk/news/why-meat-is-bad-for-the-environment/'],
        
    },
    '3': {

        action: 'Using Public Transportation',
        impact: 'Reduces Carbon Footprint',
        description: 'Opting for public transportation instead of personal vehicles can significantly reduce your carbon footprint, helping to decrease the overall emissions of greenhouse gases.',
        resources: ['https://www.nationalgeographic.com/environment/article/public-transportation', 'https://davidsuzuki.org/expert-article/the-many-benefits-of-public-transit/'],
        
    },
    '5': {

        action: 'Recycling',
        impact: 'Conserves Resources and Reduces Pollution',
        description: 'Recycling helps conserve natural resources and reduces pollution by decreasing the need for raw material extraction and waste in landfills.',
        resources: ['https://www.bbc.com/future/article/20230317-how-recycling-can-help-the-climate-and-other-facts', 'https://www.epa.gov/recycle/recycling-basics-and-benefits'],
        
    },
    '7': {

        action: 'Conserving Water',
        impact: 'Preserves Water Resources and Energy',
        description: 'By reducing water usage, you can help preserve this precious resource and save the energy required to pump, heat, and treat water.',
        resources: ['https://www.nationalgeographic.com/environment/article/water-conservation-tips', 'https://earth.org/understanding-the-importance-of-water-conservation/'],
        
    },
    '9': {

        action: 'Planting Trees',
        impact: 'Enhances Biodiversity and Sequesters Carbon',
        description: 'Planting trees helps enhance biodiversity by providing habitats for wildlife and sequesters carbon dioxide, mitigating the effects of climate change.',
        resources: ['https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/how-trees-fight-climate-change/', 'https://www.zurich.com/en/media/magazine/2021/can-reforestation-uproot-climate-change'],
        
    },
};

  export {wasteItems, facts, details};