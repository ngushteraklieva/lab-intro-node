class SortedList {
  constructor(items,length) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
   this.items.push(item)
   this.items.sort(function(a,b){
     return a-b
   })
   this.length = this.items.length
  }
  
  get(pos) { //4
    if (pos<this.items.length){
    for (let index = 0; index < this.items.length; index++) {
         if(pos===index){
           return this.items[index]
         } 
        } 
      } else {
      throw new Error('OutOfBounds')
    }
    } 
   //3

   max() {
     if (this.items.length>0){
      return Math.max.apply(Math, this.items)

     } else {
      throw new Error('EmptySortedList');
     }
     }
   

   min() {
   
     if (this.items.length>0){
      return Math.min.apply(Math, this.items)

     } else {
      throw new Error('EmptySortedList');
     }
     }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i]
     }
     return sum
    
    }

   avg() {

    if (this.items.length>0){
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
          sum += this.items[i]
       }
       return sum/this.items.length
     } else {
      throw new Error('EmptySortedList');
     }
   }
}

module.exports = SortedList;

