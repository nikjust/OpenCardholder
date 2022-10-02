import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Component, Inject, Optional, ViewChild} from "@angular/core";
import {formatBarcode} from "./app.component"
import format from "@popperjs/core/lib/utils/format";
import {BarcodeFormat, Result} from "@zxing/library";
import {ZXingScannerComponent} from "@zxing/ngx-scanner";

export interface AddNewDialog {
  closeDialog(): void;
}

export interface DialogData {
  name: string;
  format:string;
  value:string;
}

@Component({
  selector: 'addnewmodal',
  templateUrl: 'app.component.addnewdialog.html',
})
export class AddNewDialog {

  // list all allowed formats
  formats: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.CODABAR,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.EAN_8,
    BarcodeFormat.ITF,
    BarcodeFormat.MAXICODE,
    BarcodeFormat.PDF_417,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.RSS_14,
    BarcodeFormat.RSS_EXPANDED,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
    BarcodeFormat.UPC_EAN_EXTENSION
  ];


  // @ViewChild('scanner') scanner!: ZXingScannerComponent;
  // ngAfterViewInit(): void {
  //   setTimeout(() => {
  //     /* we need to force the component to set the enabled formats. Binding doesn't work.
  //        Must happen after the scanner component has been initialized
  //     */
  //     // @ts-ignore
  //     this.scanner.formats = BarcodeFormat;
  //   }, 1000);
  // }

  barcodes: {[index: number]: string} = {
    0: "AZTEC",
    1: "CODABAR",
    2: "CODE39",
    3: "CODE93",
    4: "CODE128",
    5: "DATA_MATRIX",
    6: "EAN8",
    7: "EAN13",
    8: "ITF",
    9: "MAXICODE",
    10: "PDF417",
    11: "QR_CODE",
    12: "RSS14",
    13: "RSS_EXPANDED",
    14: "UPCA",
    15: "UPCE",
    16: "UPC_EAN_EXTENSION",
  }

    constructor(@Optional() public dialogRef: MatDialogRef<AddNewDialog>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data)

  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  console = console

  format: any = this.data.format;
  name: any = this.data.name;
  barcode: any = this.data.value;


  formatBarcode1 = formatBarcode
  hide: boolean = true;
  Object = Object

  mySortingFunction = (a: {key: any}, b: {key: any}) => {
    return a.key > b.key ? -1 : 1;
  }

  setBarcode(result: Result) {
    this.barcode = result.getText();
    let format1 = this.barcodes[Number(result.getBarcodeFormat().toString())]
    console.log(format1)
    this.format = format1;
    console.log(this.format)
  }



}
