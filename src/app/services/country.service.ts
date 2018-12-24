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
      smallFlag: this.getFlagImgForCode(key),
    })),
  )

  public getFlagImgForCode(code: string): string {
    return `/assets/country-flags/${code.toLowerCase()}.png`
  }
}
