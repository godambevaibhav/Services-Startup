import { Component } from '@angular/core';

// Import the Servies at root level

import {LoggingService} from './logging.servies';
import {UpdateItemsService} from './UpdateItems.servies';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService , UpdateItemsService]
})
export class AppComponent {
  title = 'app';

  //need tp be initialized
  items: { name: string, price: string, desc: string } [] = [];

  constructor(private log:LoggingService, private updateItem:UpdateItemsService) {
    //this.items.push({name:'Mobiles', price: '10,000', desc: 'Mobile description'});
    this.items = this.updateItem.getItems();// Get Array list From Service
  }

  updateItems(itemAdded :{ name: string, price: string, desc: string }) {
    //this.items.push(itemAdded);
    this.updateItem.addItems(itemAdded);
  }

  removeItem(cardId) {
   // console.log("in root component... ", cardId);
    this.log.logMessage("Remove the CardItem ",cardId);
    this.updateItem.removeItems(cardId);
    //this.items.splice(cardId, 1);
  }

}
