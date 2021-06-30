import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './Select';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

const largeData = Array(50)
  .fill(0)
  .map((_, index) => ({
    value: `${index}`,
    label: `Item ${index}`,
  }));

function Controlled() {
  const [value, setValue] = useState(null);

  return (
    <Select
      label="Controlled"
      placeholder="Controlled"
      value={value}
      onChange={setValue}
      data={data}
      style={{ marginTop: 30 }}
    />
  );
}

storiesOf('@mantine/core/Select', module).add('General usage', () => (
  <div style={{ padding: 40, maxWidth: 300 }}>
    <Select label="Choose your favorite library/framework" placeholder="Choose value" data={data} />
    <Controlled />
    <Select
      label="Large data set"
      placeholder="Choose value"
      data={largeData}
      style={{ marginTop: 20 }}
    />
  </div>
));
