import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, Validators} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { MentormenuComponent } from './mentormenu/mentormenu.component';
import { UsercompletedtrainingsComponent } from './usercompletedtrainings/usercompletedtrainings.component';
import { UsercurrenttrainingsComponent } from './usercurrenttrainings/usercurrenttrainings.component';
import { MentorcurrenttrainingsComponent } from './mentorcurrenttrainings/mentorcurrenttrainings.component';
import { MentorcompletedtrainingsComponent } from './mentorcompletedtrainings/mentorcompletedtrainings.component';
import { SignupformentorComponent } from './signupformentor/signupformentor.component';
import { AddedittechnologyComponent } from './addedittechnology/addedittechnology.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { BlockuserComponent } from './blockuser/blockuser.component';
import { BlockmentorComponent } from './blockmentor/blockmentor.component';
import { MentoreditskillsComponent } from './mentoreditskills/mentoreditskills.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { TrainerprofileComponent } from './trainerprofile/trainerprofile.component';
import { LoadingscreenComponent } from './loadingscreen/loadingscreen.component';
import { AddeditskillComponent } from './addeditskill/addeditskill.component';
import { AddtrainingComponent } from './addtraining/addtraining.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    UsermenuComponent,
    MentormenuComponent,
    UsercompletedtrainingsComponent,
    UsercurrenttrainingsComponent,
    MentorcurrenttrainingsComponent,
    MentorcompletedtrainingsComponent,
    SignupformentorComponent,
    AddedittechnologyComponent,
    AdminmenuComponent,
    BlockuserComponent,
    BlockmentorComponent,
    MentoreditskillsComponent,
    PaymentComponent,
    PaymenthistoryComponent,
    TrainerprofileComponent,
    LoadingscreenComponent,
    AddeditskillComponent,
    AddtrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
