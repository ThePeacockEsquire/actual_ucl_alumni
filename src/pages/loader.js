import config from "../config";
/**
 * Load the cars from the spreadsheet
 * Get the right values from it and assign.
 */
export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A2:H"
      })
      .then(
        response => {
          const data = response.result.values;
          const people = data.map(people => ({
            name: people[0],
            troupe: people[2],
            graduationDate: people[1],
            missionNameIfApplicable: people[3],
            whereAreTheyNow: people[4],
            additionalInformation: people[5],
            picLink: people[7]
          })) || [];
          callback({
            people
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
