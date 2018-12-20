import { Injectable } from "@angular/core"
import { countries } from "countries-list"
import { mapValues, omit, values } from "lodash"

const COUNTRY_BLACKLIST = [
  "AQ",
  "BL",
  "BQ",
  "BV",
  "DM",
  "EH",
  "GF",
  "GP",
  "HM",
  "MF",
  "PM",
  "SJ",
  "UM",
  "WF",
  "XK",
  "YT",
]

@Injectable({
  providedIn: "root",
})
export class CountryService {
  public countryList = values(
    mapValues(omit(countries, COUNTRY_BLACKLIST), (_country, key) => ({
      code: key,
      smallFlag: `/assets/country-flags/${key.toLowerCase()}.png`,
    })),
  )
}
