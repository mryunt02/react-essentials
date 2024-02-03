import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";
import { useState } from "react";


function App() {
  const [tabContent, setTabContent] = useState("")
  function handleClick(selectedButton) {
    // 4 parameters components, jsx, props, state
    setTabContent(selectedButton)

  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((listItem) => <CoreConcepts key={listItem.title} {...listItem} />)}

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent === "components"} onSelect={() => { handleClick("components") }}>Components</TabButton>
            <TabButton isSelected={tabContent === "jsx"} onSelect={() => { handleClick("jsx") }}>JSX</TabButton>
            <TabButton isSelected={tabContent === "props"} onSelect={() => { handleClick("props") }}>Props</TabButton>
            <TabButton isSelected={tabContent === "state"} onSelect={() => { handleClick("state") }}>State</TabButton>
          </menu>
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

        </section>


      </main>
    </div>
  );
}

export default App;
