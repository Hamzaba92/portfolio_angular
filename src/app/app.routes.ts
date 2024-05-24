import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';





export const routes: Routes = [
    { path: 'app-about-me', component: AboutMeComponent},
    { path: 'app-my-skills', component: MySkillsComponent},

];
