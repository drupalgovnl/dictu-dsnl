import defaultDocs from './_default.md?raw';
import leadDocs from './_lead.md?raw';
import readme from './README.md?raw';
import './src/index.css';
import { BADGES } from '@dictu/storybook/config/preview';

export default {
  args: {
    innerHTML:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non malesuada magna. Etiam lobortis, mauris ut euismod mattis, eros erat blandit nibh, ut finibus libero orci et elit. Quisque placerat lobortis interdum. Mauris ut tempor tellus. Curabitur lacinia mauris eget ultrices pellentesque. Aenean accumsan dui ut odio bibendum efficitur. Pellentesque consequat, orci congue cursus aliquet, risus sem tincidunt ex, porta sagittis diam dui feugiat nunc. Donec aliquet tortor sed nibh aliquet mollis.',
  },
  argTypes: {
    innerHTML: {
      control: 'text',
    },
    purpose: {
      control: 'boolean',
    },
  },
  parameters: {
    badges: [BADGES.WIP],
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ innerHTML, ...args }) => {
    const classes = ['nl-paragraph'];
    const $paragraph = document.createElement('p');

    if (args.purpose) {
      classes.push(`nl-paragraph--lead`);
    }

    $paragraph.innerText = innerHTML;
    $paragraph.classList.add(...classes);

    return $paragraph;
  },
  tags: ['autodocs'],
  title: 'Componenten/Paragraph',
};

export const Paragraph = {
  args: {
    purpose: false,
  },
  parameters: {
    docs: {
      description: {
        story: defaultDocs,
      },
    },
  },
};

export const Lead = {
  args: {
    purpose: true,
  },
  parameters: {
    docs: {
      description: {
        story: leadDocs,
      },
    },
  },
};
