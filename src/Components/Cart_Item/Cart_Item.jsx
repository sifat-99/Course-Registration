
import PropTypes from 'prop-types'

const Cart_Item = ({cart}) => {
    const {course_title} = cart;
    return (
            
                <li>{course_title}</li>
            
    )
}

Cart_Item.propTypes = {
    cart: PropTypes.object
}

export default Cart_Item
