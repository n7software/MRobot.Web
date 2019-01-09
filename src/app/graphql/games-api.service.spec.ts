import { TestBed } from "@angular/core/testing"

import { GamesApiService } from "./games-api.service"

describe("GamesApiService", () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it("should be created", () => {
    const service: GamesApiService = TestBed.get(GamesApiService)
    expect(service).toBeTruthy()
  })
})
