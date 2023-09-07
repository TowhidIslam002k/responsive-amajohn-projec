import { getShoppingCart } from "../utilities/fakedb";


const CartProduct = async () => {
    const loadedProduct = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    const products = await loadedProduct.json()

    const storedItems = getShoppingCart();
    const saveCart = [];
    for(const id in storedItems){
        const addedProduct = products.find(pd =>pd.id === id);
        if(addedProduct){
            const quantity = storedItems[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }
    return saveCart;
};

export default CartProduct;