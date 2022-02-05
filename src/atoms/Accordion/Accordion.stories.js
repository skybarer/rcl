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
import Divider from '../Divider/Divider';


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

    <Divider />

    <AccordionItem>
        <AccordionTitle>
          <strong>What is Lorem Ipsum?</strong>
        </AccordionTitle>
      <AccordionContent>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
      </AccordionContent>
    </AccordionItem>

    <Divider />

    <AccordionItem>
      <AccordionTitle>
        <strong>How is the free Personal Plan different from the Personal Pro and Team Plans?</strong>
      </AccordionTitle>
      <AccordionContent>
        <div class="jsx-3266548654 rich-text"><div class="jsx-2811409291 body-limit"><p class="jsx-2587855293">The biggest difference is how you can collaborate with others.</p></div><div class="jsx-2811409291 body-limit"><p class="jsx-2587855293">The free Personal Plan is designed for individual use, but allows up to 5 unique guests. These are friends, family members, and others you can invite to collaborate with you privately on any page. You can also share a page publicly and turn on commenting or editing access. In the Share menu at the top right, turn on "Share to web" then "Allow editing." Any Notion user with the link will be able to edit your page.</p></div><div class="jsx-2811409291 body-limit"><p class="jsx-2587855293">With the Personal Pro Plan, you can invite unlimited guests for private collaboration. For example, if you run your own business, you can invite all your clients to provide feedback on your work.&nbsp;</p></div><div class="jsx-2811409291 body-limit"><p class="jsx-2587855293">With the Team Plan, you can add members to your workspace so you all share and work on the same content. It also comes with more permission and admin controls so you and your teammates can work together securely. See the plan comparison chart for more details.</p></div></div>
      </AccordionContent>
    </AccordionItem>

    <Divider />

    <AccordionItem>
      <AccordionTitle>
        <strong>Section 2</strong>
      </AccordionTitle>
      <AccordionContent>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.</span>
      </AccordionContent>
    </AccordionItem>

    <Divider />

    <AccordionItem>
      <AccordionTitle>
        <strong>Section 3</strong>
      </AccordionTitle>
      <AccordionContent>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.</span>
      </AccordionContent>
    </AccordionItem>

    <Divider />

  </Accordion>
);

export const Basic = Template.bind({});
Basic.parameters = {

};

Basic.args = {

};
