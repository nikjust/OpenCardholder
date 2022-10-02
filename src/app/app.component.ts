import {Component} from '@angular/core';
import * as JsBarcode from "jsbarcode";
import {MatDialog} from "@angular/material/dialog";
import { AddNewDialog } from './add-new-dialog.component';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {NgxQrcodeElementTypes} from "@techiediaries/ngx-qrcode";
import {BottomCardSheet, DialogData} from "./bottomcardsheet.component";

export function formatBarcode(barcode: any, format: any): any {
  format = format.toUpperCase()
  if (format.startsWith("EAN") | format.startsWith("UPC")) {

    while (barcode.length < 14) {
      barcode += "0"
    }

    barcode.replace(/[^0-9]/g, "")
    if (format === "EAN5") {
      barcode = barcode.slice(0, 5)
    } else if (format === "EAN13") {
      barcode = barcode.slice(0, 13)
    } else if (format === "EAN8") {
      barcode = barcode.slice(0, 8)
    } else if (format === "EAN2") {
      barcode = barcode.slice(0, 2)
    } else if (format === "UPC") {
      barcode = barcode.slice(0, 11)
    } else if (format === "UPCA") {
      barcode = barcode.slice(0, 5)
    } else if (format === "UPCE") {
      barcode = barcode.slice(0, 6)
    }
  } else if (format.startsWith("CODE39")) {
    barcode = barcode.toUpperCase()
    barcode.replace(/[^-0-9A-Z.$\/\+\%[:space:]\*]/g, "")
    barcode = barcode
  } else if (format.startsWith("CODE128")) {
    barcode.replace(/[^[:ascii:]]/g, "")
    barcode = barcode
  } else if (format.startsWith("ITF")) {
    barcode = barcode.toUpperCase()
    barcode.replace(/[^0-9]/g, "")

    while (barcode.length < 14) {
      barcode += "0"
    }
    barcode = barcode.slice(0, 14)
  }
  return barcode
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog, private _bottomSheet: MatBottomSheet) {}
  ngOnInit() {navigator.mediaDevices.getUserMedia({video: true})
  this.load()
  }
  console = console;
  value = ""
  title = 'OpenPocket';

  cardList = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is card 1',
      barcode: '1234567890123',
      format: "EAN13",
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is card 2',
      barcode: '123456789000',
      format: "QRCode"
    },
  ]

  generateBarcode = JsBarcode
  NgxQrcodeElementTypes = NgxQrcodeElementTypes

  formatBarcode(barcode: any, format: any): any {
    format = format.toUpperCase()
    if (format.startsWith("EAN") | format.startsWith("UPC")) {

      while (barcode.length < 14) {
        barcode += "0"
      }

      barcode.replace(/[^0-9]/g, "")
      if (format === "EAN5") {
        barcode = barcode.slice(0, 5)
      } else if (format === "EAN13") {
        barcode = barcode.slice(0, 13)
      } else if (format === "EAN8") {
        barcode = barcode.slice(0, 8)
      } else if (format === "EAN2") {
        barcode = barcode.slice(0, 2)
      } else if (format === "UPC") {
        barcode = barcode.slice(0, 11)
      } else if (format === "UPCA") {
        barcode = barcode.slice(0, 5)
      } else if (format === "UPCE") {
        barcode = barcode.slice(0, 6)
      }
    } else if (format.startsWith("CODE39")) {
      barcode = barcode.toUpperCase()
      barcode.replace(/[^-0-9A-Z.$\/\+\%[:space:]\*]/g, "")
      barcode = barcode
    } else if (format.startsWith("CODE128")) {
      barcode.replace(/[^[:ascii:]]/g, "")
      barcode = barcode
    } else if (format.startsWith("ITF")) {
      barcode = barcode.toUpperCase()
      barcode.replace(/[^0-9]/g, "")

      while (barcode.length < 14) {
        barcode += "0"
      }
      barcode = barcode.slice(0, 14)
    }
    return barcode
  }

  Barcode(element: any, string: any, format: any) {
    console.log(string)
    console.log(format)
    string = this.formatBarcode(string, format)

    if (format === "EAN13") {
      JsBarcode(element).EAN13(string)
    } else if (format === "CODE39") {
      JsBarcode(element).CODE39(string)
    } else if (format === "CODE128") {
      JsBarcode(element).CODE128(string)
    } else if (format === "ITF") {
      JsBarcode(element).ITF(string)
    }

  }

  Expand(element:any) {
    let HighParent =  element.target.closest(".mat-expansion-panel-body")
    let toolbar = document.getElementById("toolbar")
    console.log(HighParent)
    HighParent.classList.add("expanded")
    toolbar?.classList.add("expanded")
    HighParent.parentElement.parentElement.classList.add("expanded-parent")
    HighParent.parentElement.parentElement.parentElement.classList.add("expanded-parent-parent")
    document.getElementById("bottom")!.style!.display = "none"

  }

  OpenCardSheet(data: DialogData) {
    console.log(data)
    this._bottomSheet.open(BottomCardSheet, {data: data, panelClass: "barcodePanel"});
  }

  Unexpand(){
    let elements = document.getElementsByClassName("expanded")



    for (let el of Array.from(elements)) {
      el.classList.remove("expanded")
    }
    elements = document.getElementsByClassName("expanded-parent")
    for (let el of Array.from(elements)) {
      el.classList.remove("expanded-parent")
    }
    elements = document.getElementsByClassName("expanded-parent-parent")
    for (let el of Array.from(elements)) {
      el.classList.remove("expanded-parent-parent")
    }
    document.getElementById("bottom")!.style!.display = ""
  }

  AddNewDialog(){
    console.log(document.getElementById("bottom"))
    //document.getElementById("bottom")!.style!.display = "none !important"
    let dialogRef = this.dialog.open(AddNewDialog, {
      width: '100%',
      data: {value: this.value, format: "qrcode"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      console.log(result.title != null)
      console.log(result.format != null)
      console.log(result.value != null)


      if (result.format != null && result.barcode != null && result.title != null) {
        console.log("adding")
        this.cardList.push({
          id: this.cardList.length + 1,
          title: result.title,
          description: "result.description",
          barcode: result.barcode,
          format: result.format
        })
        this.save()
      }
    });
    //document.getElementById("bottom")!.style!.display = ""
  }

  EditDialog(card: any, i: number){
    console.log(document.getElementById("bottom"))
    //document.getElementById("bottom")!.style!.display = "none !important"
    let dialogRef = this.dialog.open(AddNewDialog, {
      width: '100%',
      data: {name: card.title, format: card.format, value: card.barcode},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      console.log(result.title != null)
      console.log(result.format != null)
      console.log(result.value != null)


      if (result.format != null && result.barcode != null && result.title != null) {
        console.log("editing")

        this.cardList[i] = {
          id: card.id,
          title: result.title,
          description: "result.description",
          barcode: result.barcode,
          format: result.format
        }
        this.save()
      }
    });
    //document.getElementById("bottom")!.style!.display = ""
  }


  save() {
    localStorage.setItem("Database", JSON.stringify(this.cardList))
  }
  load() {
    const db = localStorage.getItem("Database")
    if (db) {
      this.cardList = JSON.parse(db)
    }
  }
}


