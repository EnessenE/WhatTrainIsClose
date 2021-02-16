// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //the NS api key.
  nsApiKey: "NSAPIKEYHERE",
  //Coordinates to look at
  lat: 51.45193,
  long:  5.455077,
  //Range in a circle in meters from the coordinates above
  range: 5000,
  //How often to query the NS api
  refreshinterval: 5000,
  //for disruptions, allows you to show disruptions on the station. Stationcode is based on the NS stationcodes findable here https://en.wikipedia.org/wiki/Railway_stations_in_the_Netherlands
  stationCode: "EHS" 

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
