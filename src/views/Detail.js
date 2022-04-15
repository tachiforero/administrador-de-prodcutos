import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

const Detail = () => {
    const [productoUnico, setProductoUnico] = useState();

    const { id } = useParams();

    const traerPorID = () => {
            axios.get("http://localhost:8000/api/product/"+id)
            .then(res=>setProductoUnico(res.data.user))
            .catch(err=>console.log("Error:", err))
    }

    useEffect(() => {
        id && traerPorID()
    }, [id]);


    return (
        <div>
            {productoUnico && <p>{productoUnico.firstName}</p>}
        </div>
    );
}

export default Detail;
