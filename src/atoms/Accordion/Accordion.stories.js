import React from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordianItem';
import AccordionTitle from './AccordianTitle';
import AccordionContent from './AccordianContent';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';


export default {
  title: 'atoms/Accordion',
  component: Accordion,
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },

  }
};

const Template = (args) => (
  <Accordion>
    <AccordionItem>
      <AccordionTitle>
        <span>What is Lorem Ipsum?</span>
      </AccordionTitle>
      <AccordionContent>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem>
      <AccordionTitle>
        <span>Section 1</span>
      </AccordionTitle>
      <AccordionContent>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.</span>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem>
      <AccordionTitle>
        <span>Section 2</span>
      </AccordionTitle>
      <AccordionContent>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.</span>
      </AccordionContent>
    </AccordionItem>


    <AccordionItem>
      <AccordionTitle>
        <span>Section 3</span>
      </AccordionTitle>
      <AccordionContent>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.</span>
      </AccordionContent>
    </AccordionItem>

  </Accordion>
);

export const Basic = Template.bind({});
Basic.parameters = {

};

Basic.args = {

};
