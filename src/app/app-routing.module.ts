import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminComponent } from "./components/admin/admin.component"
import { BoostComponent } from "./components/boost/boost.component"
import { CommunityComponent } from "./components/community/community.component"
import { DesktopAppComponent } from "./components/desktop-app/desktop-app.component"
import { GamesComponent } from "./components/games/games.component"
import { HelpComponent } from "./components/help/help.component"
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"
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
    data: { title: "games", level: 1 },
  },
  {
    path: "community",
    component: CommunityComponent,
    data: { title: "community", level: 1 },
  },
  {
    path: "desktop-app",
    component: DesktopAppComponent,
    data: { title: "desktopApp", level: 1 },
  },
  {
    path: "boost",
    component: BoostComponent,
    data: { title: "boost", level: 1 },
  },
  {
    path: "admin",
    component: AdminComponent,
    data: { title: "admin", level: 1 },
  },
  {
    path: "settings",
    component: SettingsComponent,
    data: { title: "settings", level: 1 },
  },
  {
    path: "help",
    component: HelpComponent,
    data: { title: "help", level: 1 },
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    data: { title: "pageNotFound", level: 1 },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
