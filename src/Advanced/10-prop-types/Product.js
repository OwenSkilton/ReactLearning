import React from 'react'
import PropTypes from 'prop-types'

// The final object of the product array has no image or price thus causing an error unless proptypes is used.

const Product = ({image,name,price}) =>{
    return (
        <article className={'product'}>
            <img src={image.url} alt={name}/>
            <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
            <p>£{price}</p>
        </article>
    )
}

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

Product.defaultProps = {
    name:'default name',
    price:69.99,
    image: {url: 'https://i.redd.it/fzye4m2igm551.jpg'}
}

export default Product