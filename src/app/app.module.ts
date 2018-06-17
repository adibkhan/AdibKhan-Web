import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'about', component:AboutComponent },
      {path: 'blog', component:BlogComponent },
    ])
     //AngularFireModule.initializeApp(environment.firebase)
     //AngularFireDatabaseModule,
     //AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
