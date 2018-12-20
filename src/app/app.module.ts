import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { LayoutModule } from "@angular/cdk/layout"
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { FlexLayoutModule } from "@angular/flex-layout"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from "@angular/material"
import { TranslateLoader, TranslateModule } from "@ngx-translate/core"
import { TranslateHttpLoader } from "@ngx-translate/http-loader"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AdminComponent } from "./components/admin/admin.component"
import { BoostComponent } from "./components/boost/boost.component"
import { CommunityComponent } from "./components/community/community.component"
import { DesktopAppComponent } from "./components/desktop-app/desktop-app.component"
import { DiscordComponent } from "./components/discord/discord.component"
import { GameDetailComponent } from "./components/game-detail/game-detail.component"
import { GamesComponent } from "./components/games/games.component"
import { NewGameDialogComponent } from "./components/games/new-game-dialog/new-game-dialog.component"
import { HelpComponent } from "./components/help/help.component"
import { NavComponent } from "./components/nav/nav.component"
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"
import { PublicGamesComponent } from "./components/public-games/public-games.component"
import { SettingRowComponent } from "./components/settings/setting-row/setting-row.component"
import { SettingsComponent } from "./components/settings/settings.component"
import { GraphqlModule } from "./graphql/graphql.module"
import { HourPipe } from "./pipes/hour.pipe"
import { RouteIsSelectedPipe } from "./pipes/route-is-selected.pipe"
import { ShowNavPipe } from "./pipes/show-nav.pipe"

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
    AdminComponent,
    RouteIsSelectedPipe,
    SettingsComponent,
    HelpComponent,
    SettingRowComponent,
    HourPipe,
    DiscordComponent,
    ShowNavPipe,
    PublicGamesComponent,
    GameDetailComponent,
    NewGameDialogComponent,
  ],
  entryComponents: [NewGameDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatRadioModule,
    MatSelectModule,
    GraphqlModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatBadgeModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
