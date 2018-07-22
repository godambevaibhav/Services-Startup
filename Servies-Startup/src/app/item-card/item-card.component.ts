import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input()
  itemCard: { name: string, price: string, desc: string };

  @Input()
  cardId: number;

  @Output()
  cardRemoveEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeCard() {
    console.log("in data card component... ", this.cardId);
    this.cardRemoveEvent.emit(this.cardId);
  }

}
