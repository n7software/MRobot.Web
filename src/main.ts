import { enableProdMode } from "@angular/core"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"

import { AppModule } from "./app/app.module"
import { environment } from "./environments/environment"

import "hammerjs"
import { initCache } from "./app/graphql/cache"

if (environment.production) {
  enableProdMode()
}

initCache().then(() =>
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err)),
)
