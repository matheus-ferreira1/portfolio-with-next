import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor includes
      </SectionText>
      <Button>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;
