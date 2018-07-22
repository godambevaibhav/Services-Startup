import { Component, 
  OnInit, 
  Output, 
  EventEmitter, 
  Input} from '@angular/core';

  import {UpdateItemsService} from '../UpdateItems.servies';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  // @Output()
  // itemAddedEvent = new EventEmitter<{ name: string, price: string, desc: string }>();

  itemName: string;
  itemPrice: string;
  itemDesc: string;

  constructor(private UpdateItem: UpdateItemsService) {
    console.log('constructor called');
   }

  ngOnInit() {
    console.log('onInit called');
  }

  onSubmit() {
    //Call servie method 
    this.UpdateItem.addItems({
      name: this.itemName,
      price: this.itemPrice,
      desc: this.itemDesc
    });

    // Emitter method 
    // this.itemAddedEvent.emit({
    //   name: this.itemName,
    //   price: this.itemPrice,
    //   desc: this.itemDesc
    // });

    this.reset();

   
  }

  reset() {
    this.itemName = '';
    this.itemPrice = '';
    this.itemDesc = '';
  }
}
