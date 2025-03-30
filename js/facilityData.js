// Facility Data

const facilityData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "licycle-arizona",
        "name": "Li-Cycle Arizona Spoke",
        "company": "Li-Cycle",
        "address": "Fiesta Tech Campus, Gilbert, AZ",
        "status": "Operating",
        "capacity": "10,000 tonnes per year",
        "technology": "Generation 3 submerged shredding technology",
        "description": "Commenced operations in May 2022. First to utilize Li-Cycle's proprietary technology to directly process full EV battery packs without dismantling.",
        "website": "https://li-cycle.com/arizona-spoke/",
        "yearStarted": "2022",
        "region": "Southwest",
        "country": "USA",
        "companyLogo": "images/logos/li-cycle.png",
        "facilityImage": "images/facilities/li-cycle-arizona.jpg",
        "timeline": [
          {"year": "2021", "event": "Facility construction began"},
          {"year": "2022", "event": "Commissioning and start of operations"},
          {"year": "2022", "event": "First direct processing of full EV battery packs"}
        ],
        "feedstock": "Manufacturing scrap and end-of-life batteries",
        "products": "Black mass",
        "fundingSource": "Private investment"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-111.7890625, 33.3580617]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "licycle-alabama",
        "name": "Li-Cycle Alabama Spoke",
        "company": "Li-Cycle",
        "address": "2311 Perimeter Rd, Tuscaloosa, AL 35404",
        "status": "Operating",
        "capacity": "5,000 tonnes per year",
        "technology": "Generation 3 submerged shredding technology",
        "description": "Began operations in 2022. Located in Tuscaloosa to support regional EV production.",
        "website": "https://li-cycle.com/",
        "yearStarted": "2022",
        "region": "Southeast",
        "country": "USA",
        "companyLogo": "images/logos/li-cycle.png",
        "facilityImage": "images/facilities/li-cycle-alabama.jpg",
        "timeline": [
          {"year": "2021", "event": "Facility announced"},
          {"year": "2022", "event": "Construction completed"},
          {"year": "2022", "event": "Start of operations"}
        ],
        "feedstock": "Manufacturing scrap and end-of-life batteries",
        "products": "Black mass",
        "fundingSource": "Private investment"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-87.6110232, 33.2321735]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "licycle-ontario",
        "name": "Li-Cycle Ontario Spoke",
        "company": "Li-Cycle",
        "address": "Kingston, Ontario, Canada",
        "status": "Operating",
        "capacity": "5,000 tonnes per year",
        "technology": "Mechanical processing",
        "description": "First Li-Cycle facility, operational since 2019.",
        "website": "https://li-cycle.com/",
        "yearStarted": "2019",
        "region": "Canada",
        "country": "Canada",
        "companyLogo": "images/logos/li-cycle.png",
        "facilityImage": "images/facilities/li-cycle-ontario.jpg",
        "timeline": [
          {"year": "2018", "event": "Facility planning and design"},
          {"year": "2019", "event": "Facility commissioned"},
          {"year": "2020", "event": "Expanded initial capacity"}
        ],
        "feedstock": "Manufacturing scrap and end-of-life batteries",
        "products": "Black mass",
        "fundingSource": "Private investment"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-76.4859544, 44.2311717]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "licycle-rochester",
        "name": "Li-Cycle North American Hub",
        "company": "Li-Cycle",
        "address": "Eastman Business Park, Rochester, NY",
        "status": "Planned",
        "capacity": "35,000 tonnes per year",
        "technology": "Hydrometallurgical processing",
        "description": "Planned central processing facility to refine black mass from spoke facilities into battery-grade materials.",
        "website": "https://li-cycle.com/",
        "yearPlanned": "2025",
        "region": "Northeast",
        "country": "USA",
        "companyLogo": "images/logos/li-cycle.png",
        "facilityImage": "images/facilities/li-cycle-hub.jpg",
        "timeline": [
          {"year": "2021", "event": "Hub planning and design initiated"},
          {"year": "2023", "event": "Site preparation"},
          {"year": "2025", "event": "Projected start of operations"}
        ],
        "feedstock": "Black mass from Spoke facilities",
        "products": "Battery-grade materials (nickel, cobalt, lithium)",
        "fundingSource": "Private investment"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-77.6515204, 43.197392]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "licycle-ohio",
        "name": "Li-Cycle Ohio Spoke",
        "company": "Li-Cycle",
        "address": "Warren, OH",
        "status": "Under Construction",
        "capacity": "15,000 tonnes per year",
        "technology": "Mechanical processing",
        "description": "Located to support battery manufacturing in the region.",
        "website": "https://li-cycle.com/",
        "yearPlanned": "2023",
        "region": "Midwest",
        "country": "USA",
        "companyLogo": "images/logos/li-cycle.png",
        "facilityImage": "images/facilities/li-cycle-ohio.jpg",
        "timeline": [
          {"year": "2022", "event": "Facility announced"},
          {"year": "2023", "event": "Construction began"},
          {"year": "2024", "event": "Expected completion"}
        ],
        "feedstock": "Manufacturing scrap and end-of-life batteries",
        "products": "Black mass",
        "fundingSource": "Private investment"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-80.8156674, 41.2375569]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "redwood-nevada",
        "name": "Redwood Materials Nevada Campus",
        "company": "Redwood Materials",
        "address": "Tahoe-Reno Industrial Center, McCarran, NV",
        "status": "Operating",
        "capacity": "40,000+ tonnes per year",
        "technology": "Integrated hydrometallurgical process",
        "description": "Founded by ex-Tesla CTO JB Straubel. Processing facility with hydrometallurgical operations and rotary calciners for recycling.",
        "website": "https://www.redwoodmaterials.com/",
        "yearStarted": "2019",
        "region": "West",
        "country": "USA",
        "companyLogo": "images/logos/redwood.png",
        "facilityImage": "images/facilities/redwood-nevada.jpg",
        "timeline": [
          {"year": "2017", "event": "Company founded by JB Straubel"},
          {"year": "2019", "event": "Initial operations began"},
          {"year": "2022", "event": "Expanded hydrometallurgical facilities"},
          {"year": "2023", "event": "Large-scale battery anode copper foil production"}
        ],
        "feedstock": "Manufacturing scrap and end-of-life batteries",
        "products": "Battery materials including copper foil for anodes",
        "fundingSource": "Private investment, DOE grant"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-119.5912279, 39.5426856]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "redwood-carolina",
        "name": "Redwood Materials South Carolina Campus",
        "company": "Redwood Materials",
        "address": "Camp Hall, Berkeley County, SC",
        "status": "Under Construction",
        "capacity": "Unknown",
        "technology": "Integrated hydrometallurgical process",
        "description": "$3.5 billion investment on 600 acres, creating 1,500 jobs. Will recycle, refine, and manufacture anode and cathode components.",
        "website": "https://www.redwoodmaterials.com/",
        "yearPlanned": "2025",
        "region": "Southeast",
        "country": "USA",
        "companyLogo": "images/logos/redwood.png",
        "facilityImage": "images/facilities/redwood-sc.jpg",
        "timeline": [
          {"year": "2022", "event": "Site selection announced"},
          {"year": "2023", "event": "Construction began"},
          {"year": "2025", "event": "Projected first phase completion"}
        ],
        "feedstock": "Manufacturing scrap and end-of-life batteries",
        "products": "Cathode and anode materials",
        "fundingSource": "Private investment, state incentives"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-80.0970034, 33.0454394]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "cirba-ohio",
        "name": "Cirba Solutions Ohio Facility",
        "company": "Cirba Solutions",
        "address": "Lancaster, OH",
        "status": "Operating",
        "capacity": "Unknown",
        "technology": "Black mass production",
        "description": "Recently expanded with two additional processing lines, supported by $75 million DOE grant.",
        "website": "https://www.cirbasolutions.com/",
        "yearStarted": "2021",
        "region": "Midwest",
        "country": "USA",
        "companyLogo": "images/logos/cirba.png",
        "facilityImage": "images/facilities/cirba-ohio.jpg",
        "timeline": [
          {"year": "2020", "event": "Facility planning"},
          {"year": "2021", "event": "Initial operations"},
          {"year": "2022", "event": "Received $75M DOE grant"},
          {"year": "2023", "event": "Expansion with additional processing lines"}
        ],
        "feedstock": "End-of-life lithium-ion batteries",
        "products": "Black mass",
        "fundingSource": "DOE grant, private investment"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-82.6090229, 39.7139674]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "cirba-arizona",
        "name": "Cirba Solutions Arizona Facility",
        "company": "Cirba Solutions",
        "address": "Eloy, AZ",
        "status": "Operating",
        "capacity": "Unknown",
        "technology": "Lithium-ion battery recycling",
        "description": "75,000 square-foot facility that processes battery material to support EV production.",
        "website": "https://www.cirbasolutions.com/",
        "yearStarted": "2022",
        "region": "Southwest",
        "country": "USA",
        "companyLogo": "images/logos/cirba.png",
        "facilityImage": "images/facilities/cirba-arizona.jpg",
        "timeline": [
          {"year": "2021", "event": "Facility announced"},
          {"year": "2022", "event": "Facility opened"}
        ],
        "feedstock": "End-of-life lithium-ion batteries",
        "products": "Recycled materials",
        "fundingSource": "Private investment"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-111.5584429, 32.7553802]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "cirba-southcarolina",
        "name": "Cirba Solutions South Carolina Facility",
        "company": "Cirba Solutions",
        "address": "Columbia, SC",
        "status": "Planned",
        "capacity": "60,000 tonnes per year",
        "technology": "Battery recycling and material recovery",
        "description": "Will process enough material to support 500,000 EVs annually.",
        "website": "https://www.cirbasolutions.com/",
        "yearPlanned": "2024",
        "region": "Southeast",
        "country": "USA",
        "companyLogo": "images/logos/cirba.png",
        "facilityImage": "images/facilities/cirba-sc.jpg",
        "timeline": [
          {"year": "2022", "event": "Facility announced"},
          {"year": "2024", "event": "Expected construction start"},
          {"year": "2026", "event": "Projected operational date"}
        ],
        "feedstock": "End-of-life lithium-ion batteries",
        "products": "Recycled materials",
        "fundingSource": "DOE funding, private investment"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-81.034814, 34.000749]
      }
    }
  ]
};

// Helper function to get unique technologies
function getUniqueTechnologies() {
  const technologies = facilityData.features.map(feature => feature.properties.technology);
  return [...new Set(technologies)];
}

// Helper function to get unique regions
function getUniqueRegions() {
  const regions = facilityData.features.map(feature => feature.properties.region);
  return [...new Set(regions)];
}

// Helper function to count facilities by status
function getFacilitiesByStatus() {
  const counts = {
    "Operating": 0,
    "Under Construction": 0,
    "Planned": 0,
    "Pilot": 0
  };
  
  facilityData.features.forEach(feature => {
    const status = feature.properties.status;
    if (counts[status] !== undefined) {
      counts[status]++;
    }
  });
  
  return counts;
}

// Helper function to count facilities by region
function getFacilitiesByRegion() {
  const counts = {};
  
  facilityData.features.forEach(feature => {
    const region = feature.properties.region;
    if (!counts[region]) {
      counts[region] = 0;
    }
    counts[region]++;
  });
  
  return counts;
}

// Helper function to count facilities by technology
function getFacilitiesByTechnology() {
  const counts = {};
  
  facilityData.features.forEach(feature => {
    const technology = feature.properties.technology;
    if (!counts[technology]) {
      counts[technology] = 0;
    }
    counts[technology]++;
  });
  
  return counts;
}

// Helper function to get a facility by ID
function getFacilityById(id) {
  return facilityData.features.find(feature => feature.properties.id === id);
}

// Helper function to calculate total capacity (where available)
function calculateTotalCapacity() {
  let total = 0;
  let countedFacilities = 0;
  
  facilityData.features.forEach(feature => {
    const capacityStr = feature.properties.capacity;
    if (capacityStr && capacityStr.includes('tonnes')) {
      const match = capacityStr.match(/(\d+),?(\d+)?/);
      if (match) {
        const capacityNum = parseInt(match[0].replace(',', ''));
        if (!isNaN(capacityNum)) {
          total += capacityNum;
          countedFacilities++;
        }
      }
    }
  });
  
  return { total, countedFacilities };
}
