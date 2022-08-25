import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from "./login/login.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatRippleModule} from "@angular/material/core";

@NgModule({
    declarations: [
        LoginComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        FlexLayoutModule,
        MatInputModule,
        MatButtonModule,
        MatRippleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
