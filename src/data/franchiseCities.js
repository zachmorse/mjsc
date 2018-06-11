const franchises = [
  {
    state: 'Alabama',
    cities: ['Birmingham', 'Montgomery', 'Huntsville', 'Mobile', 'Tuscaloosa']
  },
  {
    state: 'Alaska',
    cities: ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka', 'Ketchikan']
  },
  {
    state: 'Arizona',
    cities: ['Phoenix', 'Tuscon', 'Mesa', 'Chandler', 'Glendale', 'Tempe']
  },
  {
    state: 'Arkansas',
    cities: ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro']
  },
  {
    state: 'California',
    cities: ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento']
  },
  {
    state: 'Colorado',
    cities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood']
  },
  {
    state: 'Connecticut',
    cities: ['Bridgeport', 'New Haven', 'Stamford', 'Hartford', 'Waterbury']
  },
  {
    state: 'Delaware',
    cities: ['Wilmington', 'Dover', 'Newark', 'Middleton', 'Smyrna']
  },
  {
    state: 'Florida',
    cities: ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Tallahassee']
  },
  {
    state: 'Georgia',
    cities: ['Atlanta', 'Columbus', 'Augusta', 'Macon', 'Savannah']
  },
  {
    state: 'Hawaii',
    cities: ['Honolulu', 'Hilo', 'Kailua', 'Kapolei', 'Kaneohe']
  },
  {
    state: 'Idaho',
    cities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello']
  },
  {
    state: 'Illinois',
    cities: ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville', 'Springfield']
  },
  {
    state: 'Indiana',
    cities: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel']
  },
  {
    state: 'Iowa',
    cities: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City']
  },
  {
    state: 'Kansas',
    cities: ['Wichita', 'Overland Park', 'Kansas City', 'Olathe', 'Topeka']
  },
  {
    state: 'Kentucky',
    cities: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Frankfort']
  },
  {
    state: 'Louisiana',
    cities: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles']
  },
  {
    state: 'Maine',
    cities: ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn', 'Augusta']
  },
  {
    state: 'Maryland',
    cities: ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Bowie', 'Annapolis']
  },
  {
    state: 'Massachusetts',
    cities: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge']
  },
  {
    state: 'Michigan',
    cities: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Lansing']
  },
  {
    state: 'Minnesota',
    cities: ['Minneapolis', 'Saint Paul', 'Rochester', 'Bloomington', 'Duluth']
  },
  {
    state: 'Mississippi',
    cities: ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi']
  },
  {
    state: 'Missouri',
    cities: [
      'Kansas City',
      'St. Louis',
      'Springfield',
      'Independence',
      'Columbia',
      'Jefferson City'
    ]
  },
  {
    state: 'Montana',
    cities: ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte', 'Helena']
  },
  {
    state: 'Nebraska',
    cities: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney']
  },
  {
    state: 'Nevada',
    cities: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks', 'Carson City']
  },
  {
    state: 'New Hampshire',
    cities: ['Manchester', 'Nashua', 'Concord', 'Derry', 'Rochester']
  },
  {
    state: 'New Jersey',
    cities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Trent']
  },
  {
    state: 'New Mexico',
    cities: ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell']
  },
  {
    state: 'New York',
    cities: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany']
  },
  {
    state: 'North Carolina',
    cities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem']
  },
  {
    state: 'North Dakota',
    cities: ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo']
  },
  {
    state: 'Ohio',
    cities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton']
  },
  {
    state: 'Oklahoma',
    cities: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton']
  },
  {
    state: 'Oregon',
    cities: ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro']
  },
  {
    state: 'Pennsylvania',
    cities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Harrisburg']
  },
  {
    state: 'Rhode Island',
    cities: ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence']
  },
  {
    state: 'South Carolina',
    cities: [
      'Charleston',
      'Columbia',
      'North Charleston',
      'Mount Pleasant',
      'Rock Hill',
      'Myrtle Beach'
    ]
  },
  {
    state: 'South Dakota',
    cities: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown', 'Pierre']
  },
  {
    state: 'Tennessee',
    cities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville', 'Tri-Cities']
  },
  {
    state: 'Texas',
    cities: ['Houston', 'San Antonio', 'Dallas', 'Fort Worth', 'Austin', 'El Paso']
  },
  {
    state: 'Utah',
    cities: ['Salt Lake City', 'Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem']
  },
  {
    state: 'Vermont',
    cities: ['Burlington', 'Essex', 'South Burlington', 'Rutland', 'Barre', 'Montpellier']
  },
  {
    state: 'Virginia',
    cities: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport']
  },
  {
    state: 'Washington',
    cities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Olympia']
  },
  {
    state: 'West Virginia',
    cities: ['Charleston', 'Huntington', 'Morgantown', 'Parksburg', 'Wheeling']
  },
  {
    state: 'Wisconsin',
    cities: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine']
  },
  {
    state: 'Wyoming',
    cities: ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs']
  }
];

export default franchises;
