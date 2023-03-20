
import axios from 'axios'
import React, { useEffect, useState } from "react"

const ListaCommenti = function(){
    // Creo lo state
    // Creo Componenti
    const [commenti, setCommenti] = useState([])
    // Creo errore
    const [errore, setErrore] = useState(null)
        
    // Creo fetchData
    const fetchData = async () => {
        try {
            const url = 'https://jsonplaceholder.typicode.com/comments/'
            const res = await axios.get(url)
            const commenti = Array.isArray(res.data) ? res.data : [res.data]
            setCommenti(commenti )
        } catch (err) {
            console.log(err)
            setErrore(err.message)
        }
    }

    // Uso i side effect (hook useEffect)
    useEffect(() => {
        // Faccio il fetching dei dati
        fetchData()
    }, [])

    
    if(errore){
        return <p>{errore}</p>
    }

    if(!commenti){
        return <p>... loading</p>
    } 


    return (<>
        <h2>Lista commenti</h2>
        <ul>
            {
                commenti.map( (item, i) => {
                    return <li key={i} style={{
                        border: '1px solid #c8c8c8', 
                        padding: '3px 6px', 
                        listStyle: 'none',
                        marginBottom: '5px', 
                        textAlign: 'left', 
                        borderRadius: '6px'}}>
                        <p>Id: {item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                    </li>
                })
            }
        </ul>
    </>)
    
}

export default ListaCommenti