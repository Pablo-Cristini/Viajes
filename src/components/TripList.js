import {  useState } from "react";
import './TripList.css'
import  useFetch  from '../hooks/useFetch'

export default function TripList() {

    const [url, setUrl] = useState('http://localhost:3000/trips')
    const { data, isPending, error } =  useFetch(url)


    return(
        <div className="trip-list">
            <h1>Trips List</h1>
            {isPending && <div>Cargando Viajes</div>}
            {error && <div>Ocurrio un error</div> }
            <ul>
                {data && data.map(trip => (
                    <li key={trip.id}>
                        <h2>{trip.title}</h2>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
            <div className="filters">
                <button onClick={() => {
                setUrl('http://localhost:3000/trips?loc=España')   
                }}>Viajes por España</button>
                <button onClick={() => {
                setUrl('http://localhost:3000/trips?loc=Francia')   
                }}>Viajes por Francia</button>
                <button onClick={() => {
                setUrl('http://localhost:3000/trips?loc=Inglaterra')   
                }}>Viajes por Inglaterra</button>
                <button onClick={() => {
                setUrl('http://localhost:3000/trips')   
                }}>Todos los viajes</button>
            </div>
        </div>
    )

}