import React from "react";

import {
  Section,
  SectionTitle,
  ListItem,
  UnorderedList
} from "../../shared/styles/styled-components";

import { technologies } from "../../data/technologies";
import { devstack } from "../../data/technologies";

const DevStack = () => {
  return (
    <Section id="dev-stack">
      <SectionTitle> Current dev stack/ Tools I've used </SectionTitle>
      <UnorderedList>
        {devstack.map(item => <ListItem key={item.name}>{item.name}</ListItem>)}
        <p>{technologies.join(", ")}.</p>
      </UnorderedList>
    </Section>
  );
};

export default DevStack;


