export default function findItemsOver(itemList, threshold) {
    var newArr = [];
    for (let i=0; i < itemList.length; i++) {
      var items = itemList[i];
      if (items.qty > threshold) {
        newArr.push(items);
      }
    }
    return newArr;
  }