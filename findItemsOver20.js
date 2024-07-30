export default function findItemsOver20(itemLists) {
    var newArr = [];
    for (let i=0; i<itemLists.length; i++) {
      var items = itemLists[i];
      if(items.qty > 20){
        newArr.push(items);
      }
    }
    return newArr;
  }