import React from 'react';
import Cards from './Cards';
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
  title: 'atoms/Cards',
  component: Cards,
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
  <>

    {/* <Cards className={args.className}>
      {args.content}
    </Cards> */}

    {
      // iterate for 1 to 6 wiht for each
      [1, 2, 3, 4, 5].map((index) => (
        <Cards
          key={index}
          className={`${args.className}-${index}`}
          style={{
            ...args.style,
            // backgroundColor: `hsl(${index * 20}, 100%, 50%)`,
          }}
        >
          {args.content}
        </Cards>
      ))
    }





  </>
);

export const Basic = Template.bind({});
Basic.parameters = {

};

Basic.args = {
  className: 'card card',
  // content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  style: {
    padding: "10px 20px",
    overflow: "auto",
    textAlign: "center",
    border: "thin solid #ccc",
  }
};
