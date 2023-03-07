import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { TabComponent } from './tab/tab.component';
import { FooterItemComponent } from './components/footer-item/footer-item.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { FooterLastItemComponent } from './components/footer-last-item/footer-last-item.component';
import { FooterIconsComponent } from './components/footer-icons/footer-icons.component';
import { AlertComponent } from './components/alert/alert.component';
import { DiscussionComponentComponent } from './components/discussion-component/discussion-component.component';
import { CoursesTileComponent } from './components/courses-tile/courses-tile.component';
import { AchievementTileComponent } from './components/achievement-tile/achievement-tile.component';
import { RatingTileComponent } from './components/rating-tile/rating-tile.component';
import { DiscussDashboardComponent } from './components/discuss-dashboard/discuss-dashboard.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';
import { IqDashboardComponent } from './components/iq-dashboard/iq-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CoursesComponent,
    DiscussionsComponent,
    TabComponent,
    FooterItemComponent,
    TilesComponent,
    FooterLastItemComponent,
    FooterIconsComponent,
    AlertComponent,
    DiscussionComponentComponent,
    CoursesTileComponent,
    AchievementTileComponent,
    RatingTileComponent,
    DiscussDashboardComponent,
    CardDashboardComponent,
    IqDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
