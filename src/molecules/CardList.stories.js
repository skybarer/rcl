import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './../atoms/Card/Card';
import Grid from './../atoms/Grid/Grid';
import Box from './../atoms/Grid/Box';
import image1 from '../assets/card/image_1.jpg';
const style = {
  border: 0,
  padding: 0,
};

storiesOf('molecules/CardList', module).add('default', () => {
  return (
    <>
      <Card>
        <Grid columns={2} templateColumns={2}>
          <Box style={style}>
            <img src={image1} alt="image1" style={{ width: '22rem' }}></img>
          </Box>
          <Box style={style}>
            <Grid columns={1} gap={1}>
              <Box style={style}>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passage..
              </Box>
              <Box style={style}>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passage..
              </Box>
              <Box style={style}>
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passage..
              </Box>
              <Box style={style}>
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passage..
              </Box>
              <Box style={style}>
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passage..
              </Box>
              <Box style={style}>
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passage..
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Card>
    </>
  );
});
