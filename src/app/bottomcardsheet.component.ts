import {Component, Inject, Input} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {formatBarcode} from "./app.component";

/**
 * @title Bottom Sheet Overview
 */

export interface DialogData {
  name: string;
  format: any;
  value:string;
}

@Component({
  selector: 'bottom-card-sheet',
  templateUrl: 'bottomcardsheet.component.html',
  styleUrls: ['./bottomcarsheet.component.css']
})
export class BottomCardSheet {
  QrSize = 0

  formatBc = formatBarcode

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomCardSheet>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: DialogData) {
    console.log(data)

    const bp = document.querySelector(".barcodePanel")
    this.QrSize = Math.max(bp!.clientWidth, bp!.clientHeight)


  }


}
