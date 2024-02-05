import React from 'react'
import { CORE_CONCEPTS } from '../data';
import CoreConcepts from './CoreConcepts';

function CoreConcept() {
    return (
        <section id="core-concepts">
            <h2>Core concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((listItem) => <CoreConcepts key={listItem.title} {...listItem} />)}

            </ul>
        </section>
    )
}

export default CoreConcept