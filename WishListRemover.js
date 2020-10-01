//Removes all Flipkart wishlist items on the cart page https://www.flipkart.com/wishlist?link=home_wishlist. 
//It will only remove visible items. You might want to scroll first to make more items visible. 
//To use paste code in developer console (Ctrl+Shift+J or Cmd+Opt+J in Chrome) then press enter.
var count=0; 
function deleteFlipkartSavedItems(){
  var loaditems=document.getElementsByClassName('_1kbMJs')
  if(loaditems.length>0){
      loaditems[0].click()
      setTimeout(deleteFlipkartSavedItems,3000);
  }else {
     var item= document.getElementsByClassName('_27LgAY')
     if(item.length>0){
       item[0].click()
       document.getElementsByClassName('_2AkmmA _1WPB7I')[0].click()
       count++;
       setTimeout(deleteFlipkartSavedItems,500);
      }else{
        if(count>0){
          console.log("Removed ",count," wish list items")
        }else{
           console.log("No item found to remove, please check the url and items if you have any in wishlist")
        }
        
      }
  }
}
deleteFlipkartSavedItems()
