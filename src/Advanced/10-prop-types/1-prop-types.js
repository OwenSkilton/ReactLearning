import React from 'react';
import UseFetch from '../9-custom-hooks/UseFetch'
import Product from './Product'

// If an return from an API call contains object with different contents it can be difficult to access them all
// within the same component dynamically without getting an error
// Proptypes let us avoid this by enabling a check for valid properties within the arguments
// As well as assigning default values to prevent errors

const url = 'https://course-api.com/react-prop-types-example'
const PropTypesIndex = () => {
    const { loading , response } = UseFetch(url)

    const renderLoading = () => {
        return(<h2>LOADING...</h2>)
    }

    const renderProducts = () =>{
        return(
            <div className="container">
                <h2>Products</h2>
                <section className={'products'}>
                    {response.map((product)=>{
                        return<Product key={product.id} {...product}/>
                    })}
                </section>
            </div>
        )
    }

    return (
        <div className={'container'}>
            <h1>Prop Types Index</h1><br/><br/>
            { loading ? renderLoading() : renderProducts()}
        </div>
    );
};

export default PropTypesIndex;
