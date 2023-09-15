
import PropTypes from 'prop-types'

const Cart_Item = ({cart}) => {
    const {course_title} = cart;
    return (
        <div>
            <h1>{course_title}</h1>
        </div>
    )
}

Cart_Item.propTypes = {
    cart: PropTypes.object
}

export default Cart_Item
