import React, { useState, useEffect, useCallback, useMemo} from 'react';
import UseFetch from '../9-custom-hooks/UseFetch'

const url = 'https://course-api.com/javascript-store-products'

// Every time props or state change, component re-renders
// Everytime the click the add count button it is used to set the state, the BigList and SingleProduct are thus re-rendered
// To avoid this, we can add the 'memo' method to the parent component (different to useMemo)
// memo means that only if that specific prop or state changes does it trigger a rerender
// it 'MEMOrizes' the previous instance of that component



const UseMemo = () => {
    const {response} = UseFetch(url)
    const [count, setCount]=useState(0)
    const [cart, setCart] = useState(0)

    // The memo method is now useless in this instance as the updateCart function being passed through is being 'updated' every time count changes
    // Once again to avoid this we can use useCallback
    // It essential creates the function on the first initial render and never again (unless specified in dep array)
    // So if you were to console.log cart within it (nothing in dependency array),
    // it would always be 0 and the state would never update
    // Dependency array is for everytime cart state specifically is updated, recreate the function (doesnt rerender if count is updated now)

    const updateCart = useCallback(() =>{
        setCart(cart+1)
        console.log(cart)
    }, [cart])

    // The function below is being rendered every single click as it re-renders if written like line 54
    // If it took forever to calculate it would mean every button click would take an age to update state
    // Would be nice to only run if the data param changes

    const calculateMostExpensive = (data) =>{
        console.count("Hello Moto")
        return data.reduce((total,item)=>{
            const price = item.fields.price // Get the price
            if (price >= total){total = price} // Check if lower than current total (starts at 0)
            return total //return current total
        },0)/100 // Think 0 tells it its returning an int???? and then divide final total by 100
    }

    // By using the useMemo we only run the arrow function within whenever the response param changes
    // it remembers what the previous time it ran's response looks like and runs if it is different

    const mostExpensive = useMemo(()=> calculateMostExpensive(response),[response])

    return (
        <div className={'container'}>
            <h1>Count : {count}</h1>
            <button className={'btn'} onClick={()=>{setCount(count+1)}}>Click me</button>
            <h1 style={{marginTop: "3rem"}}>Cart : {cart}</h1>
            {/* by changing the line below to the line below that. We only call this method when the response object changes */ }
            {/*<h1> Most Expensive: £{calculateMostExpensive(response)}</h1>*/}
            <h1> Most Expensive: £{mostExpensive}</h1>

            <BigList response={response} updateCart={updateCart}/>
        </div>
    );
};

const BigList = React.memo(({ response, updateCart}) => {
    useEffect(()=>{
        console.count('Big list called')
    })
    return(
        <section className={'products'}>
            {response.map((product)=>{
                return(
                    <SingleProduct key={product.id} {...product} updateCart={updateCart}/>
                )
            })}
        </section>
    )
})

const SingleProduct = ({fields, updateCart}) =>{
    useEffect(()=>{
        console.count('Single item called')
    })
    let { name, price} = fields
    price = price/100
    const image = fields.image[0].url

    return(
        <article className={'product'}>
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <p>£{price}</p>
            <button onClick={updateCart}>Add to Cart</button>
        </article>
    )
}

export default UseMemo;
