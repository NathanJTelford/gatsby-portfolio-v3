import React from "react";
import {
  Section,
  SectionTitle,
  UnderlinedLink,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";
import { textLinks } from "../../data/socialLinks";

const Who = () => {
  return (
    <Section id="who">
      <SectionTitle>Introduction</SectionTitle>
      <UnorderedList>
        <h1>
        I'm a hard working, dependable, and adaptable person.
        </h1>
        <p>I recently discovered coding, and instantly found a new passion. I've always been irresistibly drawn to challenges,
          and as a result coding became the perfect career field for me.
          

        </p>

      </UnorderedList>
    </Section>
  );
};

export default Who;
