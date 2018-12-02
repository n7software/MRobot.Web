import { NgModule } from "@angular/core"
import { EffectsModule } from "@ngrx/effects"
import { StoreModule } from "@ngrx/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { environment } from "../../environments/environment"
import { SettingsEffects } from "./settings/settings.effects"
import * as fromSettings from "./settings/settings.reducer"

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    StoreModule.forFeature("settings", fromSettings.reducer),
    EffectsModule.forFeature([SettingsEffects]),
  ],
})
export class AppStoreModule {}
