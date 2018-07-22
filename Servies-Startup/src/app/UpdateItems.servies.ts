export class UpdateItemsService {
  items: { name: string, price: string, desc: string } [] = [];
  getItems(){
      this.items.push({name:'Mobiles', price: '10,000', desc: 'Mobile description'});
      this.items.push({name:'Tv', price: '40,000', desc: 'Tv description'});
      this.items.push({name:'Washing Machine', price: '20,000', desc: 'Washing Machine description'});

    return this.items; // return the array object
  }

  addItems(itemAdded :{ name: string, price: string, desc: string }){
    this.items.push(itemAdded);
  }

  removeItems(cardId){
    this.items.splice(cardId, 1);
  }
}