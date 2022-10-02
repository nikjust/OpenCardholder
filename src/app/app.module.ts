import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {NgxBarcode6Module} from "ngx-barcode6";
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AddNewDialog} from "./add-new-dialog.component";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
import {FullScreenCode} from "./fullscreencode.component";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {BottomCardSheet} from "./bottomcardsheet.component";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    AddNewDialog,
    FullScreenCode,
    BottomCardSheet
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatExpansionModule,
        NgxBarcode6Module,
        NgbModule,
        NgbModalModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        ZXingScannerModule,
        NgxQRCodeModule,
        MatBottomSheetModule,
        MatMenuModule

    ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
