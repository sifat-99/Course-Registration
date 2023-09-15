import PropTypes from 'prop-types'


const Cart = ({carts,credit,remainingCreditHour,cost}) => {
    const itemList = carts.map((course, index) => (
        <li key={index}>{course.course_title}</li>
        ));
    return (

        <div className="bg-white w-[312px] flex flex-col mt-7 rounded-lg h-max gap-4 p-6"> 
            <h2 className="text-[#2F80ED] text-lg font-bold">
            Credit Hour Remaining {remainingCreditHour} hr
            </h2>
            <hr />
            <div className=" text-[20px] font-bold mb-1">
                Course Name 
                <div>
                    <ol className='text-base mt-6 grid gap-3 list-decimal pl-4 font-normal text-[#1C1B1B99] mb-2'>
                        {itemList}
                    </ol>
                </div>
            </div>
            <h3 className="text-base  text-black font-bold">Total Credit Hour: <span className='text-[#1C1B1B99] font-semibold'>{credit}</span>
            </h3>
            <hr />
            <h2 className="text-base font-semibold text-black">Total Price: <span className='text-[#1C1B1B99] font-semibold'>{cost} USD</span></h2>
            <hr />
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