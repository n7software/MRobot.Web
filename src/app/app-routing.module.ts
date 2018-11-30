import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminComponent } from "./components/admin/admin.component"
import { BoostComponent } from "./components/boost/boost.component"
import { CommunityComponent } from "./components/community/community.component"
import { DesktopAppComponent } from "./components/desktop-app/desktop-app.component"
import { GamesComponent } from "./components/games/games.component"
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component"

const routes: Routes = [
  {
    path: "",
    redirectTo: "/games",
    pathMatch: "full",
  },
  {
    path: "games",
    component: GamesComponent,
    data: { title: "games" },
  },
  {
    path: "community",
    component: CommunityComponent,
    data: { title: "community" },
  },
  {
    path: "desktop-app",
    component: DesktopAppComponent,
    data: { title: "desktopApp" },
  },
  {
    path: "boost",
    component: BoostComponent,
    data: { title: "boost" },
  },
  {
    path: "admin",
    component: AdminComponent,
    data: { title: "Admin" },
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    data: { title: "pageNotFound" },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
