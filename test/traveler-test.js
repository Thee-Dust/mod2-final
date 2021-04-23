import chai from 'chai';
const expect = chai.expect;

import Traveler from "../src/Traveler"

const travelersTestData = [{
  "id": 1,
  "name": "Ham Leadbeater",
  "travelerType": "relaxer",
}, {
  "id": 2,
  "name": "Rachael Vaughten",
  "travelerType": "thrill-seeker",
}, {
  "id": 3,
  "name": "Sibby Dawidowitsch",
  "travelerType": "shopper",
}, {
  "id": 4,
  "name": "Leila Thebeaud",
  "travelerType": "photographer",
}, {
  "id": 5,
  "name": "Tiffy Grout",
  "travelerType": "thrill-seeker",
}];

const tripTestData = [{
    "id": 1,
    "userID": 2,
    "destinationID": 4,
    "travelers": 1,
    "date": "2019/09/16",
    "duration": 8,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 2,
    "userID": 5,
    "destinationID": 5,
    "travelers": 5,
    "date": "2020/10/04",
    "duration": 18,
    "status": "pending",
    "suggestedActivities": []
  },
  {
    "id": 3,
    "userID": 3,
    "destinationID": 2,
    "travelers": 4,
    "date": "2020/05/22",
    "duration": 17,
    "status": "pending",
    "suggestedActivities": []
  },
  {
    "id": 4,
    "userID": 4,
    "destinationID": 1,
    "travelers": 2,
    "date": "2020/02/25",
    "duration": 10,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 5,
    "userID": 2,
    "destinationID": 3,
    "travelers": 3,
    "date": "2020/04/30",
    "duration": 18,
    "status": "approved",
    "suggestedActivities": []
  },
  {
    "id": 6,
    "userID": 2,
    "destinationID": 6,
    "travelers": 3,
    "date": "2020/06/29",
    "duration": 9,
    "status": "approved",
    "suggestedActivities": []
  }
]

const destinationTripData = [{
    "id": 1,
    "destination": "Lima, Peru",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 400,
    "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    "alt": "overview of city buildings with a clear sky"
  },
  {
    "id": 2,
    "destination": "Stockholm, Sweden",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 780,
    "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with boats on the water during the day time"
  },
  {
    "id": 3,
    "destination": "Sydney, Austrailia",
    "estimatedLodgingCostPerDay": 130,
    "estimatedFlightCostPerPerson": 950,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "opera house and city buildings on the water with boats"
  },
  {
    "id": 4,
    "destination": "Cartagena, Colombia",
    "estimatedLodgingCostPerDay": 65,
    "estimatedFlightCostPerPerson": 350,
    "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "alt": "boats at a dock during the day time"
  },
  {
    "id": 5,
    "destination": "Madrid, Spain",
    "estimatedLodgingCostPerDay": 150,
    "estimatedFlightCostPerPerson": 650,
    "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with clear skys and a road in the day time"
  },
  {
    "id": 6,
    "destination": "Jakarta, Indonesia",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 890,
    "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "lit up city at night"
  }
]
let traveler

describe('Traveler', () => {
  beforeEach(function () {
    traveler = new Traveler(travelersTestData[1], tripTestData, destinationTripData);
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should take in traveler information as an argument', () => {
    expect(traveler.id).to.equal(2);
    expect(traveler.name).to.equal('Rachael Vaughten');
    expect(traveler.type).to.equal('thrill-seeker');
  });

  it('should keep track of all trips traveler has and trip information', () => {
    expect(traveler.trips).to.deep.equal([{
    "id": 1,
    "userID": 2,
    "destinationID": 4,
    "travelers": 1,
    "date": "2019/09/16",
    "duration": 8,
    "status": "approved",
    "suggestedActivities": [],
    "destinationInfo": {
        "id": 4,
        "destination": "Cartagena, Colombia",
        "estimatedLodgingCostPerDay": 65,
        "estimatedFlightCostPerPerson": 350,
        "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        "alt": "boats at a dock during the day time"
      }
    }, {
      "id": 5,
      "userID": 2,
      "destinationID": 3,
      "travelers": 3,
      "date": "2020/04/30",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": [],
      "destinationInfo": {
        "id": 3,
        "destination": "Sydney, Austrailia",
        "estimatedLodgingCostPerDay": 130,
        "estimatedFlightCostPerPerson": 950,
        "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "opera house and city buildings on the water with boats"
      }
    }, {
      "id": 6,
      "userID": 2,
      "destinationID": 6,
      "travelers": 3,
      "date": "2020/06/29",
      "duration": 9,
      "status": "approved",
      "suggestedActivities": [],
      "destinationInfo": {
        "id": 6,
        "destination": "Jakarta, Indonesia",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 890,
        "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "lit up city at night"
      }
    }]);
  });

  it('should calculate how much each trip is with a 10% fee for travel agent', () => {
    expect(traveler.calculateTripPrice(traveler.trips[0])).to.equal(957);
    expect(traveler.calculateTripPrice(traveler.trips[2])).to.equal(3630);
  });

  it('should calculate total cost of all trips', () => {
    expect(traveler.totalCost()).to.equal(10296);
  });
});