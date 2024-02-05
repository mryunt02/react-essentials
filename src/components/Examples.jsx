import React from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import { useState } from 'react';
import Section from './Section';
import Tabs from './Tabs';

function Examples() {
    const [tabContent, setTabContent] = useState("")
    function handleClick(selectedButton) {
        // 4 parameters components, jsx, props, state
        setTabContent(selectedButton)

    }
    return (
        <Section title="Examples" id="examples">
            <Tabs

                buttons={
                    <>
                        <TabButton isSelected={tabContent === "components"} onSelect={() => { handleClick("components") }}
                        >Components
                        </TabButton>
                        <TabButton isSelected={tabContent === "jsx"} onSelect={() => { handleClick("jsx") }}>JSX</TabButton>
                        <TabButton isSelected={tabContent === "props"} onSelect={() => { handleClick("props") }}>Props</TabButton>
                        <TabButton isSelected={tabContent === "state"} onSelect={() => { handleClick("state") }}>State</TabButton>
                    </>}>
                {
                    !tabContent
                        ? <div>Please select a topic</div> :
                        <div id="tab-content">
                            <h3>{EXAMPLES[tabContent].title}</h3>
                            <p>{EXAMPLES[tabContent].description}</p>
                            <pre>
                                <code>
                                    {EXAMPLES[tabContent].code}
                                </code>
                            </pre>
                        </div>
                }
            </Tabs>
            <menu>

            </menu>


        </Section >
    )
}

export default Examples