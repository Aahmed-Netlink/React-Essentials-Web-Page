import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import { useState } from "react";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

const Examples = ({ }) => {
    // console.log("abc")

    const [selectedTopic, setSelectedTopic] = useState()

    const clickHandle = (selectedButton) => {
        // selectedButton => "Components","JSX","Props","State"
        setSelectedTopic(selectedButton)
        console.log(selectedButton)
    }

    let tabContent = <p>Please Select A Topic</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        )
    }

    return (
            <Section title="EXAMPLE" id="examples">
                <Tabs buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === 'Components'}
                            onClick={() => clickHandle('Components')}>
                            Components</TabButton>

                        <TabButton
                            isSelected={selectedTopic === 'JSX'}
                            onClick={() => clickHandle('JSX')}>
                            JSX</TabButton>

                        <TabButton
                            isSelected={selectedTopic === 'Props'}
                            onClick={() => clickHandle('Props')}>
                            Props</TabButton>

                        <TabButton
                            isSelected={selectedTopic === 'State'}
                            onClick={() => clickHandle('State')}>
                            State</TabButton>
                    </>
                }>
                    {tabContent}
                </Tabs>
            </Section>
    );
}

export default Examples;