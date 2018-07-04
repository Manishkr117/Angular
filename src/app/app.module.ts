import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogService } from 'src/app/providers/catalog.service';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DetailsComponent } from './catalog/details/details.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { AppRouterModule } from 'src/app/app-router.module';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HomeComponent,
    UserLoginComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,UtilsModule,FormsModule,AppRouterModule
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
