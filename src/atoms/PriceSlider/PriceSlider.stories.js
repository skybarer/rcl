import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import PriceSlider from './PriceSlider';

storiesOf('PriceSlider', module).add('Default', () => {
  const [range, setRange] = useState([20, 80]);

  const handleRangeChange = (min, max) => {
    setRange([min, max]);
  };

  return (
    <div>
      <PriceSlider
        min={0}
        max={100}
        minValue={range[0]}
        maxValue={range[1]}
        onChange={handleRangeChange}
      />
      <div>
        Selected range: {range[0]} - {range[1]}
      </div>
    </div>
  );
});
