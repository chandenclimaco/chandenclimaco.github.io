export interface Destination {
  id: number;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  type: string;
  budget: string;
  ratings: {
    cost: number;
    nightlife: number;
    adventure: number;
    culture: number;
    uniqueness: number;
  };
  details: {
    flightCost: string;
    accommodation: string;
    dailyCosts: string;
  };
  activities: string[];
  nightlife: string[];
  uniqueAttractions: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Cancun",
    location: "Mexico",
    description: "Cancun's turquoise water and beachfront resorts are a spring break classic.",
    imageUrl: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?q=80&w=1000",
    type: "International beach city",
    budget: "Budget-Friendly to Mid-Range",
    ratings: {
      cost: 3,
      nightlife: 5,
      adventure: 4,
      culture: 3,
      uniqueness: 3
    },
    details: {
      flightCost: "$400-$600 from East Coast",
      accommodation: "$30/night (hostels) to $300+/night (resorts)",
      dailyCosts: "Moderate - many opt for all-inclusive deals"
    },
    activities: [
      "White-sand beaches and Caribbean Sea activities",
      "Jet-skiing and beach volleyball",
      "Snorkeling in nearby cenotes",
      "Day trip to Chichén Itzá",
      "Ferry to Isla Mujeres",
      "Cancún Underwater Museum (MUSA)"
    ],
    nightlife: [
      "Legendary nightlife in the Hotel Zone",
      "Coco Bongo nightclub with acrobatic shows",
      "The City multi-level superclub",
      "Mandala Beach Club for dancing under the stars",
      "Open bar deals and EDM DJs"
    ],
    uniqueAttractions: [
      "Mayan cultural sites nearby",
      "Tulum or Coba ruins a short drive away",
      "Swimming with whale sharks (in season)",
      "Zipline in nearby jungles",
      "Downtown's Mercado 28 market"
    ]
  },
  {
    id: 2,
    name: "Miami (South Beach)",
    location: "Florida, USA",
    description: "Ocean Drive in South Beach, Miami – famous for Art Deco architecture and vibrant nightlife.",
    imageUrl: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1000",
    type: "Domestic city + beach",
    budget: "Mid-Range to Luxury",
    ratings: {
      cost: 4,
      nightlife: 5,
      adventure: 3,
      culture: 4,
      uniqueness: 4
    },
    details: {
      flightCost: "$200-$300 from Northeast US",
      accommodation: "$50/night (hostels) to $400/night (oceanfront)",
      dailyCosts: "$100+ per day for food, drinks, and transport"
    },
    activities: [
      "South Beach sunbathing and people-watching",
      "Stroll Ocean Drive's Art Deco Historic District",
      "Visit Wynwood Walls outdoor street art gallery",
      "Airboat tour in the Everglades",
      "Miami Heat basketball games",
      "Jet-skiing or parasailing off the coast",
      "Sample Cuban cuisine in Little Havana"
    ],
    nightlife: [
      "Glamorous clubs like LIV at Fontainebleau",
      "Story nightclub with world-class DJs",
      "Bar-hopping on Ocean Drive",
      "Mix of rooftop lounges and hotel bars",
      "Dancing until 5am for the sunrise over South Beach"
    ],
    uniqueAttractions: [
      "Vizcaya Museum and Gardens bayside mansion",
      "Day trip to the Florida Keys for snorkeling",
      "Mural-splashed streets of Wynwood",
      "Design district's trendy shops",
      "Calle Ocho in Little Havana for Cuban culture"
    ]
  },
  {
    id: 3,
    name: "Las Vegas",
    location: "Nevada, USA",
    description: "The Las Vegas Strip at night – a neon playground of casinos, clubs, and 24/7 entertainment.",
    imageUrl: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=1000",
    type: "Domestic city",
    budget: "Budget to Luxury",
    ratings: {
      cost: 3,
      nightlife: 5,
      adventure: 4,
      culture: 2,
      uniqueness: 5
    },
    details: {
      flightCost: "Often <$300 round-trip from around the US",
      accommodation: "$75-$100/night (3★ midweek) to $250+/night (4-5★ weekend)",
      dailyCosts: "Around $150 per day plus gambling budget"
    },
    activities: [
      "Extravagant hotel pools and dayclubs",
      "Ride rollercoasters at New York-New York Hotel",
      "Stroll the Strip to see famous sights",
      "Bellagio Fountains water show",
      "SkyJump off the STRAT tower",
      "Trip to the Grand Canyon or Hoover Dam",
      "Gambling in world-famous casinos"
    ],
    nightlife: [
      "Massive nightclubs like Omnia and Hakkasan",
      "Top DJs and celebrity hosts",
      "Fremont Street experience in downtown Vegas",
      "Casino hopping with yard-long drinks",
      "Vegas shows - Cirque du Soleil, magic acts, comedy"
    ],
    uniqueAttractions: [
      "Drive a supercar on a racetrack",
      "Fire a machine gun at an indoor range",
      "Helicopter ride over the Strip at night",
      "The Neon Museum's vintage signs",
      "Area15 immersive art complex",
      "Red Rock Canyon for hiking"
    ]
  },
  {
    id: 4,
    name: "New Orleans",
    location: "Louisiana, USA",
    description: "Bourbon Street in the French Quarter – a lively strip famous for its music, bars, and nonstop revelry.",
    imageUrl: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=1000",
    type: "Domestic city",
    budget: "Budget-Friendly to Mid-Range",
    ratings: {
      cost: 2,
      nightlife: 5,
      adventure: 3,
      culture: 5,
      uniqueness: 5
    },
    details: {
      flightCost: "$200-$350 from much of the US",
      accommodation: "$80-$120/night (budget) to $180-$250/night (French Quarter)",
      dailyCosts: "$50-$70 per day for meals and transport"
    },
    activities: [
      "Wander the French Quarter's historic streets",
      "Visit Jackson Square and St. Louis Cathedral",
      "Shop at the French Market for crafts and snacks",
      "Take a haunted history tour",
      "Visit cemeteries with above-ground tombs",
      "Airboat swamp tour to see bayou wildlife",
      "Catch afternoon jazz performances on Royal Street"
    ],
    nightlife: [
      "Bourbon Street's infamous bar scene",
      "Pat O'Brien's home of the Hurricane cocktail",
      "The Cat's Meow karaoke bar",
      "Frenchmen Street for live jazz and blues",
      "Legal open container laws for bar hopping",
      "Late-night beignets at Cafe du Monde"
    ],
    uniqueAttractions: [
      "Steamboat cruises on the Mississippi River",
      "Visiting traditional voodoo shops",
      "Catching a brass band in a second-line parade",
      "Tennessee Williams Literary Festival (if timing aligns)",
      "St. Patrick's Day parades with thrown cabbages"
    ]
  },
  {
    id: 5,
    name: "San Juan",
    location: "Puerto Rico (U.S. Territory)",
    description: "A colorful street in Old San Juan, Puerto Rico – blending colonial Spanish architecture with Caribbean flair.",
    imageUrl: "https://images.unsplash.com/photo-1579676672429-78e40f7989aa?q=80&w=1000",
    type: "Caribbean island city",
    budget: "Moderate Budget",
    ratings: {
      cost: 3,
      nightlife: 4,
      adventure: 4,
      culture: 5,
      uniqueness: 4
    },
    details: {
      flightCost: "$300-$500 round-trip from East Coast",
      accommodation: "$70-$100/night (budget) to $180-$300/night (beachfront)",
      dailyCosts: "Similar to a mid-range US city, around $100/day"
    },
    activities: [
      "Relax on Condado Beach or Isla Verde",
      "Jet ski, surf, or kite-surf",
      "Explore 500-year-old walled Old San Juan",
      "Visit Castillo San Felipe del Morro fort",
      "Walk along Paseo de la Princesa promenade",
      "Night kayaking in Bioluminescent Bay",
      "Bacardi Rum Distillery tour and tasting"
    ],
    nightlife: [
      "Rooftop cocktails at La Factoria speakeasy",
      "Salsa clubs and pubs in Old San Juan",
      "Chic hotel clubs and casinos in Condado",
      "Club Brava at El San Juan Hotel",
      "Live music with reggaeton and salsa",
      "Trying authentic piña coladas"
    ],
    uniqueAttractions: [
      "El Yunque National Forest rainforest",
      "Hiking to waterfalls and natural swimming pools",
      "Canyoning or zip-lining in the forest",
      "Camuy River Caves exploration",
      "Indigenous Taíno rock art at Caguana",
      "Puerto Rican cuisine and coffee experiences"
    ]
  },
  {
    id: 6,
    name: "Costa Rica",
    location: "Arenal & Jaco/Tamarindo",
    description: "Arenal Volcano in Costa Rica – adventure awaits from rainforests to beaches.",
    imageUrl: "https://images.unsplash.com/photo-1518183214770-9cffbec72538?q=80&w=1000",
    type: "International tropical eco-adventure",
    budget: "Moderate Budget",
    ratings: {
      cost: 3,
      nightlife: 3,
      adventure: 5,
      culture: 4,
      uniqueness: 5
    },
    details: {
      flightCost: "$400-$700 from the US",
      accommodation: "$20-$50/night (hostels) to $100-$150/night (hotels)",
      dailyCosts: "$54/day (budget) to $100-$140/day (mid-range)"
    },
    activities: [
      "Hike near the iconic Arenal Volcano",
      "Soak in natural hot springs",
      "Zip-line above the rainforest canopy",
      "Waterfall rappelling at La Fortuna",
      "White-water rafting down Sarapiquí River",
      "Surfing lessons in Tamarindo or Jaco",
      "ATV tours and horseback riding",
      "Wildlife spotting in Manuel Antonio National Park"
    ],
    nightlife: [
      "Laid-back bar scene in surf towns",
      "Beachfront bars with reggae music",
      "Jaco's more active nightlife scene",
      "Sports bars and small dance clubs",
      "Trying guaro, the local sugarcane liquor",
      "Beach bonfires and hostel social events"
    ],
    uniqueAttractions: [
      "Night hikes in the rainforest",
      "Visiting coffee plantations for tasting",
      "Turtle conservation volunteering",
      "World-class deep-sea fishing",
      "Zip-lining at night or bungee jumping",
      "Experiencing the 'Pura Vida' lifestyle"
    ]
  },
  {
    id: 7,
    name: "Phuket",
    location: "Thailand",
    description: "International tropical paradise known for beaches and vibrant Thai culture.",
    imageUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1000",
    type: "International Tropical Party & Culture",
    budget: "Budget-Friendly once arrived",
    ratings: {
      cost: 2,
      nightlife: 5,
      adventure: 4,
      culture: 5,
      uniqueness: 5
    },
    details: {
      flightCost: "$700-$1,200 round-trip from the US",
      accommodation: "$10-$20/night (hostels) to $50-$100/night (bungalows)",
      dailyCosts: "$36/day (budget) to $60-$100/day (splurging)"
    },
    activities: [
      "Relax on famous beaches like Patong and Kata",
      "Jet skiing and parasailing",
      "Thai massage right on the beach",
      "Island-hopping to Phi Phi Islands",
      "Visit James Bond Island in Phang Nga Bay",
      "Snorkeling and scuba diving in the Andaman Sea",
      "Visit Wat Chalong Buddhist temple",
      "Trek to the 45-meter Big Buddha statue"
    ],
    nightlife: [
      "Infamous Bangla Road in Patong",
      "Open-air beer bars and go-go bars",
      "Clubs like Illuzion and Suzy Wong's",
      "Inexpensive drinks ($3 beers, $5-$7 mixed drinks)",
      "Full Moon Party (if timing aligns)",
      "Thai night markets for street food",
      "Muay Thai kickboxing matches"
    ],
    uniqueAttractions: [
      "Attend authentic Muay Thai boxing matches",
      "Visit ethical elephant sanctuaries",
      "Go-kart racing at Phuket's track",
      "Historic Phuket Old Town exploration",
      "Getting custom suits made by local tailors",
      "Experiencing the unique Thai culture and cuisine"
    ]
  },
  {
    id: 8,
    name: "Barcelona",
    location: "Spain",
    description: "The Sagrada Família in Barcelona – the city offers beaches by day and bustling clubs by night, all under Gaudí's whimsical architecture.",
    imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1000",
    type: "International city",
    budget: "Mid-Range Budget",
    ratings: {
      cost: 3,
      nightlife: 5,
      adventure: 3,
      culture: 5,
      uniqueness: 4
    },
    details: {
      flightCost: "$450-$700 round-trip from US East Coast/Midwest",
      accommodation: "$30-$50/night (hostels) to $120-$200/night (hotels)",
      dailyCosts: "$73/day (budget) to $120-$150/day (mid-range)"
    },
    activities: [
      "Explore Gaudí's architectural masterpieces",
      "Visit the iconic Sagrada Família basilica",
      "Relax at Park Güell with mosaic terraces",
      "Tour the Camp Nou stadium (FC Barcelona)",
      "Beach day at Barceloneta",
      "Bike along the waterfront",
      "Stroll through Gothic Quarter's narrow alleys",
      "Visit La Boquería Market for fresh food and juices"
    ],
    nightlife: [
      "Late-night tapas crawls in El Born",
      "Sample local cava (sparkling wine)",
      "Beach clubs like Opium and Pacha",
      "Razzmatazz warehouse club with multiple music rooms",
      "Sala Apolo themed parties",
      "Neighborhood festivals and parades",
      "Craft beer bars and cocktail lounges",
      "Authentic flamenco shows"
    ],
    uniqueAttractions: [
      "Picasso Museum and MACBA contemporary art",
      "Traditional Calçotada grilling experience",
      "PortAventura World theme park (day trip)",
      "Watching Castellers (human towers) practice",
      "Cooking classes to learn paella",
      "Blend of beach, culture, and Gaudí architecture"
    ]
  },
  {
    id: 9,
    name: "Breckenridge",
    location: "Colorado, USA",
    description: "Spring skiing in Breckenridge – sunny skies, snowy peaks, and a lively ski-town atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1422383264954-096a3c125df2?q=80&w=1000",
    type: "Domestic mountain town",
    budget: "Mid-Range to High",
    ratings: {
      cost: 4,
      nightlife: 3,
      adventure: 5,
      culture: 3,
      uniqueness: 4
    },
    details: {
      flightCost: "$250-$400 to Denver + 2-hour drive",
      accommodation: "$300-$500/night for slopeside condos (split among friends)",
      dailyCosts: "$200-$250/day including lift tickets, food, and lodging"
    },
    activities: [
      "Skiing and snowboarding across five peaks",
      "Spring skiing with warmer weather",
      "Snowmobiling tours through mountains",
      "Dogsledding with teams of huskies",
      "Snow tubing at Frisco Adventure Park",
      "Exploring Main Street's Old West vibe",
      "Free gondola rides for mountain views",
      "Day trips to nearby Keystone or Vail"
    ],
    nightlife: [
      "Laid-back ski town bars with live music",
      "Popular après-ski at RMU and Breckenridge Brewery",
      "Motherloaded Tavern for bands and comfort food",
      "Historic Gold Pan Saloon for Old West vibes",
      "Cecilia's nightclub with DJs and dance floor",
      "Local speakeasies and late-night spots",
      "Spring Beer Festival and mountaintop concerts",
      "Casual, friendly atmosphere"
    ],
    uniqueAttractions: [
      "Spring Fever festival with events and competitions",
      "Imperial Challenge race event",
      "Breckenridge Snow Sculpture Championships",
      "Evening visits to nearby hot springs",
      "Country Boy Mine tours and gold panning",
      "Mountain scenery as an alternative to beaches",
      "Lodge fireplace s'mores and mountain hospitality"
    ]
  },
  {
    id: 10,
    name: "Tokyo",
    location: "Japan",
    description: "Shibuya Crossing in Tokyo – a dazzling urban experience, where high-tech meets tradition.",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000",
    type: "International mega-city",
    budget: "Luxury-leaning Budget",
    ratings: {
      cost: 4,
      nightlife: 4,
      adventure: 3,
      culture: 5,
      uniqueness: 5
    },
    details: {
      flightCost: "$800-$1,200 from US (sometimes $600-$700 with deals)",
      accommodation: "$60/night (hostels) to $120-$200/night (hotels, split)",
      dailyCosts: "$68/day (budget) to $150-$200/day (mid-range)"
    },
    activities: [
      "Experience Shibuya Crossing's famous scramble",
      "Explore Akihabara's gaming and anime culture",
      "Visit Meiji Shrine near Harajuku",
      "Tour historic Senso-ji Temple in Asakusa",
      "Sing in a private karaoke box room",
      "Rent go-karts and drive Tokyo streets in costume",
      "Cherry blossom viewing in late March",
      "TeamLab Borderless digital art museum",
      "City views from Tokyo Skytree or Tokyo Tower"
    ],
    nightlife: [
      "Diverse scene from Roppongi clubs to high-rise bars",
      "Golden Gai in Shinjuku with tiny themed bars",
      "Izakaya alleys like Omoide Yokocho",
      "Large dance clubs like WOMB in Shibuya",
      "Robot Restaurant show spectacle",
      "Late-night arcades and pachinko parlors",
      "Organized pub crawls for tourists",
      "Karaoke until dawn"
    ],
    uniqueAttractions: [
      "Themed cafes with animals or cosplay",
      "Sumo tournament or morning practice",
      "Day trips to Kamakura or Mt. Fuji",
      "Odaiba's futuristic island with Giant Gundam",
      "Toyosu Fish Market sushi breakfast",
      "Authentic ramen from vending machine shops",
      "Purikura photo booths for memories",
      "Gachapon toy capsule machines"
    ]
  }
];

export function getAllDestinations(): Destination[] {
  return destinations;
} 