import{ CORE_CONCEPTS} from '../data'
import CoreConcept from "../components/CoreConcept"
import Section from './Section';
export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPTS.map((coreItem) => (
          <CoreConcept key={coreItem.title} {...coreItem} />
        ))}
      </ul>
    </Section>
  );
}
