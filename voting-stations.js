const chooseStations = function (stations) {
  let goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    const venue = station[2];
    if ((capacity >= 20) && (venue === "school" || venue === "community centre")) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

let s = chooseStations(stations);
for (const station of s) {
  console.log(station);
}
