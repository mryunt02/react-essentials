import React from 'react'
import { CORE_CONCEPTS } from '../data'
function CoreConcepts({ image, title, description }) {
    return (

        <li>
            <img src={image} alt="..." />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>




    )
}

export default CoreConcepts