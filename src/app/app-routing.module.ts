import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminComponent } from "./components/admin/admin.component"
import { BoostComponent } from "./components/boost/boost.component"
import { CommunityComponent } from "./components/community/community.component"
import { DesktopAppComponent } from "./components/desktop-app/desktop-app.component"
import { DiscordComponent } from "./components/discord/discord.component"
import { GameDetailComponent } from "./components/game-detail/game-detail.component"
import { GamesComponent } from "./components/games/games.component"
import { HelpComponent } from "./components/help/help.component"
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"
import { PublicGamesComponent } from "./components/public-games/public-games.component"
import { SettingsComponent } from "./components/settings/settings.component"

const routes: Routes = [
  {
    path: "",
    redirectTo: "/games",
    pathMatch: "full",
  },
  {
    path: "games",
    component: GamesComponent,
    data: { level: 1 },
  },
  {
    path: "public-games",
    component: PublicGamesComponent,
    data: { level: 1 },
  },
  {
    path: "community",
    component: CommunityComponent,
    data: { level: 1 },
  },
  {
    path: "desktop-app",
    component: DesktopAppComponent,
    data: { level: 1 },
  },
  {
    path: "boost",
    component: BoostComponent,
    data: { level: 1 },
  },
  {
    path: "admin",
    component: AdminComponent,
    data: { level: 1 },
  },
  {
    path: "settings",
    component: SettingsComponent,
    data: { level: 1 },
  },
  {
    path: "help",
    component: HelpComponent,
    data: { level: 1 },
  },
  {
    path: "discord",
    component: DiscordComponent,
    pathMatch: "full",
  },
  {
    path: "game-detail/:id",
    component: GameDetailComponent,
    data: { level: 2 },
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    data: { level: 1 },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
