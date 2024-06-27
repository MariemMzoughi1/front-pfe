import { Component } from '@angular/core';
import { Notifications } from '../models/notifications.request';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notification: Notifications = {
    sender: '',
    subject: '',
    body: ''
  };

  constructor() { }

  getMailtoLink(): string {
    const reciver = "mzoughimariem1@gmail.com"
    const { sender, subject, body } = this.notification;
    return `mailto:${reciver}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
