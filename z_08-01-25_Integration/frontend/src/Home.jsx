import React, { useEffect, useState } from "react"




const Home = () => {

    const [userData, setUserData] = useState([])


    useEffect(() => {
        fetch("http://localhost:8080/").then((rawData) => rawData.json()).then((res) => setUserData(res))
    }, [])



    return (
        <>
           <ul>
                {/* let know about call back function */}
                {/* array.map(()=>{}) -> if we use curly bracket then we have to use return keyword */}
                {/* array.map(()=>()) -> if we use round bracket then no need to use return keyword */}
                {/* array.map(()=> ) -> if we did not write any bracket then we can write only one statement */}

                {userData.map((user)=>{
                    return <li key={user._id}>Id: {user.id} Name: {user.name} Pass: {user.passord}</li>
                })}
           </ul>
        </>
    )
}

export default Home