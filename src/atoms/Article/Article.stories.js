import React from 'react';
import { Article } from './Article';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import Accordion from '../Accordion/Accordion';
import AccordionTitle from './../Accordion/AccordianTitle';
import { AccordionContent, AccordionItem } from '../Accordion';

export default {
  title: 'atoms/Article',
  component: Article,
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
    type: {
      options: ['border', 'raised', 'none'],
      control: { type: 'select' },
    },
  }
};

const Template = (args) => (
  <Article {...args} >
    <h1>Google Chrome</h1>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
  
  
    <h2>Accordian</h2>
    <Accordion >
      <AccordionItem>
        <AccordionTitle style={{
          border: 'thin solid rgb(221, 221, 221)'
        }}>
          <span>What is Lorem Ipsum?</span>
        </AccordionTitle>
        <AccordionContent>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle style={{
          border: 'thin solid rgb(221, 221, 221)'
        }}>
          <span>Section 1</span>
        </AccordionTitle >
        <AccordionContent>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.</span>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTitle style={{
          border: 'thin solid rgb(221, 221, 221)'
        }}>
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
        <AccordionTitle style={{
          border: 'thin solid rgb(221, 221, 221)'
        }}>
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
  </Article >
)

export const Basic = Template.bind({});
Basic.parameters = {
  // layout: 'fullscreen'
};

Basic.args = {
  type: 'border',
};
