import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there <br />
          I'm an Android Developer
        </SectionTitle>
        <SectionText>
        My name is Klejvi Kapaj. I am an Android Developer from Albania. I am well experienced in many languages like: Java, Kotlin, Dart, JavaScript aswell as using frameworks like Ionic 5 and Flutter. I love building native apps much more than hybrid apps!
        </SectionText>
        <Button href="/#test">Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;