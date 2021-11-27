import React from 'react';
import UseFetch from "./UseFetch";

// Custom hooks allow the reuse of a specific components functionality
// Encapsulated functions essentially

const url = 'https://course-api.com/javascript-store-products'

const FetchExample = () => {

    const renderLoading = () => {
        return(<h2>LOADING...</h2>)
    }

    const {loading, response} = UseFetch(url)
    return (
        <div className={'container'}>
            <h1>Custom Hooks</h1><br/><br/>
            <div className={'container'}>
                <h2>{loading ? null : "Products"}</h2>
                <section className={'products'}>
                    {loading ? renderLoading() :
                        response.map((product) => {
                            const {id, fields} = product
                            return (
                                <>
                                    <article className={'product'} key={id}>
                                        <img src={fields.image[0].url} alt={fields.company}/>
                                        <h4>{fields.name.charAt(0).toUpperCase() + fields.name.slice(1)}</h4>
                                        <p>£{fields.price/100}</p>
                                    </article>
                                </>
                            )
                        })
                    }
                </section>
            </div>
        </div>
    );
};

export default FetchExample;
