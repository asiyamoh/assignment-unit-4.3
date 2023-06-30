console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//create a array and call it basket
let basket =[];

function addItem(newItem){
    //add new items to the array
    basket.push(newItem)
    return true;
}//end addItem 

//call the function to see if it works 
console.log('add milk to my basket', addItem('pop'));
console.log('add eggs to my basket', addItem('eggs'));
console.log('Basket is now',basket);

function listItems(){
    for(let i=0; i<basket.length; i++){
        console.log(basket[i], '\n');
    }//end for loop
}//end listItems 

//call the function to see if it works
console.log('What is in my basket:', listItems());






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
