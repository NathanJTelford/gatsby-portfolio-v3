import React from "react";
import Link from "gatsby-link";

import {
  Sides,
  LeftSide,
  RightSideHome
} from "../shared/styles/styled-components";
import Info from "../components/Info";
import WhoAmI from "../components/WhoAmI";
import DevStack from "../components/DevStack";
import Technologies from "../components/Technologies";

const IndexPage = () => (
  <div>
    <Sides>
      <LeftSide>
        <Info />
      </LeftSide>
      <RightSideHome>
        <WhoAmI />
        <DevStack />
        <Technologies />
      </RightSideHome>
    </Sides>
  </div>
);

export default IndexPage;
