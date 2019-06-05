import React from 'react';


import {
	Sides,
	LeftSide,
	RightSideHome
  } from "../shared/styles/styled-components";
  
  import Info from "../components/Info";
  import Who from "../components/Who";
  import What from "../components/What";
  import DevStack from "../components/DevStack";
  import Projects from "../components/Projects";
  
  const Landing = () => (
	<div>
	  <Sides>
		<LeftSide>
		  <Info />
		</LeftSide>
		<RightSideHome>
		  <Projects />
		  <DevStack />
		  <Who />
		  <What />
		</RightSideHome>
	  </Sides>
	</div>
  );

  export default Landing