import React, {useEffect, useState} from 'react';

const url = 'https://api.github.com/users/OwenSkilton'

const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default user')

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((resp) => resp.json())
                .then((user) => {
                    setUser(user)
                    setIsLoading(false)
                })
                .catch(() => {
                    setIsError(true)
                    setIsLoading(false)
                })
        }, 1000)

    }, [])

    const renderUser = () => {
        const {login, id, avatar_url,html_url} = user
        return(
            <li id={id}>
                <img src={avatar_url} alt={login}/>
                <div>
                    <h4>{login}</h4>
                    <a href={html_url}>profile</a>
                </div>
            </li>
        )
    }

    if(isLoading){
        return(
            <div className={'container'}>
                <h1>Multiple Returns</h1><br/><br/>
                <h2>Loading.....</h2>
            </div>
        )
    }
    if (isError){
        return (
            <div className={'container'}>
                <h1>Multiple Returns</h1><br/><br/>

                <h2>{isError}</h2>
            </div>
        )
    }
    return (
        <div className={'container'}>
            <h1>Multiple Returns</h1><br/><br/>
            <h3>GitHub Users</h3>
            <ul className={'users'}>
                {renderUser()}
            </ul>
        </div>
    );

};

export default MultipleReturns;
