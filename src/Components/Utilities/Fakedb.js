// Use local Storage to manage cart data

const addToDb = id =>{
    // code duplicate na korle
    // let shoppingCart = getStoredCart();

     let shoppingCart = {};
    // get the shopping cart form local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    } 


    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        // console.log('already exists');
        const newQuantity = parseInt (quantity)+ 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);  
    }

    else{
        shoppingCart[id] = 1;

        // console.log('new item')
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


 const getStoredCart = () =>{
    let shoppingCart = {};

    // get the shopping cart form local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
 }


const removeFromDb = (id) =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
           delete shoppingCart[id];
           localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}
export {
    addToDb,
    getStoredCart,
     removeFromDb
    };