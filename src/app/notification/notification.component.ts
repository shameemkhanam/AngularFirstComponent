import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  // template: '<div><p>This is a notification for this website.</p></div>',
  template: `<div class="alert alert-success text-center mt-2" [hidden]="displayNotification">
    <p>This is a notification for this website.</p>
    <div class="close">
      <button class="btn fw-bold" (click)="closeNotification()" >X</button>
    </div>
  </div>`,
  styles: [
    '.notification_div{margin:0px 0px; padding:10px 10px; background-color:aqua; text-align:center;}',
    'p{font-size:14px; color:red; margin-bottom:0px}',
    '.close{float:right; margin-top:-30px;}',
  ],
})
export class NotificationComponent {
  displayNotification: boolean = false;
  closeNotification() {
    this.displayNotification = true;
  }
}
