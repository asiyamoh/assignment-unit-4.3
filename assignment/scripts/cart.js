console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//create a array and call it basket
let basket =[];

function addItem(newItem){
    //add new items to the array
    basket.push(newItem)
    return true;
}//end of addItem 

//call the addItem function to see if it works 
console.log('Add pop to my basket', addItem('pop'));
console.log('Add eggs to my basket', addItem('eggs'));
console.log('Basket is now',basket);


function listItems(){
    let space = '';
    for(let i=0; i<basket.length; i++){
        //log the items in the basket on new lines 
        space += `${basket[i] + '\n'}`; 
    }//end for loop
    console.log(space);
    return space;
}//end of listItems 

//call the listItem function to see if it works 
console.log('What is in my basket:', listItems());

function empty(){
    for(let i=0; i<=basket.length; i++){
        //empty the array 
        basket.pop();
    }//end for loop
    return true;
}//end of empty

//call the empty function to see if it works 
console.log('Is the basket now empty:', empty());
//call the array to see if it is empty 
console.log(basket);





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
