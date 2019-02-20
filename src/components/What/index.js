import React from "react";
import {
  Section,
  SectionTitle,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";
import { what } from "../../data/about";

const What = () => {
  return (
    <Section id="what">
      <SectionTitle>Always Learning</SectionTitle>
      <UnorderedList>
        <h1>My Current Learning Projects Include</h1>
        <ul>
          <li>sharpening Javascript Skills</li>
          <li>learning React Native</li>
          <li>Gatsby</li>
        </ul>
      </UnorderedList>
    </Section>
  );
};

export default What;
