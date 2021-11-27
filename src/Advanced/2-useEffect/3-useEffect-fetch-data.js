import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () =>{
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
        // If you were to just use setUsers(users) without the dependency array,
        // It would trigger a re-render, which would trigger the getUsers function from useEffect,
        // which would use setUsers again and cause an infinite loop of re-renders. DO NOT DO THIS YOU WILL CRASH
        // Adding the empty array dependency means only re-renders on first load thus solving the problem
        console.log({users})
    }

    useEffect(() => {
        getUsers();
    }, [])
    return (
        <div className={'container'}>
            <h1>UseEffect Fetch Data</h1><br/><br/>

            <h3>GitHub Users</h3>
            <ul className={'users'}>
                {users.map((user) => {
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
                })}
            </ul>

        </div>
    );
};

export default UseEffectFetchData;
