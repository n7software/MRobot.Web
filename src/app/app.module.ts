import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { LayoutModule } from "@angular/cdk/layout"
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { FlexLayoutModule } from "@angular/flex-layout"
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
} from "@angular/material"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { TranslateLoader, TranslateModule } from "@ngx-translate/core"
import { TranslateHttpLoader } from "@ngx-translate/http-loader"
import { environment } from "../environments/environment"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AdminComponent } from "./components/admin/admin.component"
import { BoostComponent } from "./components/boost/boost.component"
import { CommunityComponent } from "./components/community/community.component"
import { DesktopAppComponent } from "./components/desktop-app/desktop-app.component"
import { GamesComponent } from "./components/games/games.component"
import { NavComponent } from "./components/nav/nav.component"
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"
import { RouteIsSelectedPipe } from "./pipes/route-is-selected.pipe"
import { TitleFromRouteDataPipe } from "./pipes/title-from-route-data.pipe"
import { AppStoreModule } from "./store/app-store.module"

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GamesComponent,
    CommunityComponent,
    DesktopAppComponent,
    BoostComponent,
    PageNotFoundComponent,
    TitleFromRouteDataPipe,
    AdminComponent,
    RouteIsSelectedPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
