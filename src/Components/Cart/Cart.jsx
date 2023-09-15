import PropTypes from 'prop-types'
import Cart_Item from '../Cart_Item/Cart_Item';


const Cart = ({carts,credit,remainingCreditHour,cost}) => {
    // console.log(carts)
    return (

        <div className="bg-white w-[312px] flex flex-col mt-7 rounded-lg h-max gap-4 p-6"> 
            <h2 className="text-[#2F80ED] text-lg font-bold">
            Credit Hour Remaining {remainingCreditHour} hr
            </h2>
            <hr />
            <div className=" text-[20px] font-bold mb-1">
                Course Name 
                <h2 className='text-base font-normal text-[#1C1B1B99]'>
                    {
                        carts.map(cart => <Cart_Item key={cart.id} cart={cart}></Cart_Item>)
                    }
                </h2>
            </div>
            <h3 className="text-base font-semibold text-[#1C1B1B99]">Total Credit Hour: {credit}
            </h3>
            <hr />
            <h2 className="text-base font-semibold text-[#1C1B1B99]">Total Price: {cost} USD</h2>
            </div> 
        
    );
};

Cart.propTypes =
{
    carts: PropTypes.array.isRequired,
    credit: PropTypes.number,
    remainingCreditHour: PropTypes.number,
    cost: PropTypes.number,
}

export default Cart;