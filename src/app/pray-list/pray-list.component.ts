import { Component } from '@angular/core';
import { prayers } from '../prayers'
@Component({
    selector:'app-pray-list',
    templateUrl:'./pray-list.component.html'
})

export class PrayListComponent{
    prayers= prayers;

    share() {
        window.alert('The product has been shared!');
      }
       onNotify() {
        window.alert('You will be notified when the product goes on sale');
      }
}