import { useEffect, useState } from "react"

function FetchButton() {

    const [name, setName] = useState("");
    const [myData, setData] = useState([]);


    async function fetchInfo(){
            const resp = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await resp.json();
            setData(data);
    }

    useEffect(()=>{fetchInfo();})
    
    
    return (
        <>
        <ul style={{listStyleType:"none"}}>
            {myData.map((i)=>
                {
                    return <li>Name: {i.name}</li>
                })
            }
        </ul>
        </>
    )
}



export default FetchButton