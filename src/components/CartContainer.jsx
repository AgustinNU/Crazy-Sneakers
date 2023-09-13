import CartIcon from "./CartIcon";
import CartItems from "./CartItems";



const CartContainer = () => {
    return (
        <div className="bg-info-subtle rounded-circle p-3 position-relative">
            <CartIcon color="blue"/>
            <CartItems count={3}/>
        </div>
    );
};

export default CartContainer;