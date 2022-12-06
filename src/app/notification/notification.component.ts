import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  // template: '<div><p>This is a notification for this website.</p></div>',
  template: `<div class="alert alert-success text-center">
    <p>This is a notification for this website.</p>
  </div>`,
  styles: [
    '.notification_div{margin:10px 0px; padding:10px 20px; background-color:aqua; text-align:center;}',
    'p{font-size:14px; color:red;}',
  ],
})
export class NotificationComponent {}
