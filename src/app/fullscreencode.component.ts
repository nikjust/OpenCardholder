import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Component, Inject, Optional, ViewChild} from "@angular/core";
import {formatBarcode} from "./app.component"
import format from "@popperjs/core/lib/utils/format";
import {BarcodeFormat, Result} from "@zxing/library";
import {ZXingScannerComponent} from "@zxing/ngx-scanner";

export interface FullScreeenCode {
  closeDialog(): void;
}

export interface DialogData {
  name: string;
  format:string;
  value:string;
}

@Component({
  selector: 'fullscreencode',
  templateUrl: 'fullscreencode.component.html',
})
export class FullScreenCode {

  format: any = "QR";
  name: any;
  barcode: any;

  constructor(@Optional() public dialogRef: MatDialogRef<FullScreeenCode>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  console = console




}
