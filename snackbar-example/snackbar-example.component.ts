import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-snackbar-example',
  templateUrl: './snackbar-example.component.html',
  styleUrls: ['./snackbar-example.component.scss']
})

export class SnackbarExampleComponent {
  horizontalPosition: MatSnackBarHorizontalPosition | undefined;
  constructor(private snackBar: MatSnackBar) {}
  @Input() myFunction!: () => void;

  ngOnInit(): void {
    
  }

  data = "This is delete dataThis is delete dataThis is delete data";

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarExampleSnackbar, {
      data: { message: this.data },
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  openSnackBar2(message: string) {
    this.snackBar.openFromComponent(SnackbarExampleSnackbarTest, {
      data: { message: message},
      horizontalPosition: "left",
      verticalPosition: "bottom",
    });
  }

}



@Component({
  selector: 'snackbar-example-snackbar',
  templateUrl: 'snackbar-example-snackbar.html',
})

export class SnackbarExampleSnackbar {
  constructor() {}
  onMyEvent() {
   alert("Button is trigger");
  }

}


@Component({
  selector: 'snackbar-example-snackbartest',
  templateUrl: 'snackbar-example-snackbartest.html',
})

export class SnackbarExampleSnackbarTest {
  constructor() {}

  onMyEvent2(){
      alert("Delete Button is triggered");
  }
}
function onMyEvent() {
  throw new Error('Function not implemented.');
}

