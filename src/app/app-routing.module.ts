import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsermenuComponent} from './usermenu/usermenu.component';
import { MentormenuComponent } from './mentormenu/mentormenu.component';
import { UsercompletedtrainingsComponent } from './usercompletedtrainings/usercompletedtrainings.component';
import { UsercurrenttrainingsComponent } from './usercurrenttrainings/usercurrenttrainings.component';
import { MentorcurrenttrainingsComponent } from './mentorcurrenttrainings/mentorcurrenttrainings.component';
import { MentorcompletedtrainingsComponent } from './mentorcompletedtrainings/mentorcompletedtrainings.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { BlockuserComponent } from './blockuser/blockuser.component';
import { BlockmentorComponent } from './blockmentor/blockmentor.component';
import { AddedittechnologyComponent } from './addedittechnology/addedittechnology.component';
import { MentoreditskillsComponent } from './mentoreditskills/mentoreditskills.component';
import { SignupformentorComponent } from './signupformentor/signupformentor.component';
import { LoadingscreenComponent } from './loadingscreen/loadingscreen.component';
import { AddeditskillComponent } from './addeditskill/addeditskill.component';
import { AddtrainingComponent } from './addtraining/addtraining.component';
const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'signup' ,component:SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usermenu', component: UsermenuComponent},
  {path: 'mentormenu', component:MentormenuComponent},
  {path: 'usercompletedtraining', component:UsercompletedtrainingsComponent},
  {path: 'usercurrenttraining', component:UsercurrenttrainingsComponent},
  {path: 'mentorcurrenttraining',component:MentorcurrenttrainingsComponent},
  {path: 'mentorcompletedtraining', component:MentorcompletedtrainingsComponent},
  {path: 'trainerprofile', component:TrainerprofileComponent},
  {path: 'paymenthistory',component:PaymenthistoryComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'adminmenu',component:AdminmenuComponent },
  {path: 'blockuser',component:BlockuserComponent },
  {path: 'blockmentor',component:BlockmentorComponent},
  {path: 'addedittechnology',component:AddedittechnologyComponent},
  {path: 'addeditskills',component:AddeditskillComponent},
  {path: 'mentoreditskills',component:MentoreditskillsComponent},
  {path: 'signupformentor', component:SignupformentorComponent},
  {path: 'loadingscreen', component:LoadingscreenComponent},
  {path: 'addedittraining', component:AddtrainingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
