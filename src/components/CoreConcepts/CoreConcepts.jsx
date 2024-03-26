import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import Section from "../Section/Section";

const CoreConcepts = () => {
  return (
    <>
      <Section title = "CORE CONCEPTS" id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItems) => <CoreConcept key={conceptItems.title} {...conceptItems} />)}
        </ul>
      </Section>
    </>
  );
}

export default CoreConcepts;