import { getShoppingCart } from "../utilities/fakedb";


const CartProduct = async () => {
    const loadedProduct = await fetch('http://localhost:3001/products')
    const products = await loadedProduct.json()

    const storedItems = getShoppingCart();
    const saveCart = [];
    for (const _id in storedItems) {
        const addedProduct = products.find(pd => pd._id === _id);
        if (addedProduct) {
            const quantity = storedItems[_id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }
    return saveCart;
};

export default CartProduct;