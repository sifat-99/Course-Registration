
const Cart = () => {
    return (
        <div className="w-1/4 p-3">
            <div className="bg-white w-[312px]  grid gap-4 p-6">
            <h2 className="text-[#2F80ED] text-lg font-bold">
            Credit Hour Remaining 7 hr
            </h2>
            <hr />
            <h2 className=" text-[20px] font-bold mb-1">
                Course Name
            </h2>
            <hr />
            <h3 className="text-base font-semibold text-[#1C1B1B99]">Total Credit Hour: </h3>
            <hr />
            <h2 className="text-base font-semibold text-[#1C1B1B99]">Total Price:{} USD</h2>
            </div>
        </div>
    );
};

export default Cart;