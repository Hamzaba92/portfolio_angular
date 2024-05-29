import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';





export const routes: Routes = [
   
    
    { path: '', component: MainContentComponent},
    { path: 'privacy-policy', component: PrivacyPolicyComponent},
    { path: 'imprint', component: ImprintComponent},
    


];
