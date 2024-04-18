import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './../Card/Card';
import Grid from './../Grid/Grid';
import Table from '../../atoms/Table/Table';
import TableHeader from '../../atoms/Table/TableHeader';
import TableRow from '../../atoms/Table/TableRow';
import TableCell from '../../atoms/Table/TableCell';

// Color Palette Generator component
const ColorPaletteGenerator = ({ initialColor }) => {
  const [hexColor, setHexColor] = useState(initialColor);
  const [colorVariants, setColorVariants] = useState([]);

  const hexToRgb = (hexColor) => {
    // Remove '#' if present
    const hexColor1 = hexColor.replace('#', '');
    // Parse hexadecimal color to individual RGB components
    const r = parseInt(hexColor1.substring(0, 2), 16);
    const g = parseInt(hexColor1.substring(2, 4), 16);
    const b = parseInt(hexColor1.substring(4, 6), 16);
    // Return an object with the RGB components
    return { r, g, b };
  };

  const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  const getRGBValues = (rgbString) => {
    const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    const result = rgbString.match(regex);

    return {
      r: result[1],
      g: result[2],
      b: result[3],
    };
  };

  // Update color variants whenever hexColor changes
  useEffect(() => {
    const generateColorVariants = (hexColor) => {
      // Convert hexadecimal color to RGB
      const rgbColor = hexToRgb(hexColor);
      let colorVariants = [];
      for (let i = 0; i < 20; i++) {
        // Calculate color variant percentage for each RGB component
        const r = Math.round((i / 20) * 255 + rgbColor.r);
        const g = Math.round((i / 20) * 255 + rgbColor.g);
        const b = Math.round((i / 20) * 255 + rgbColor.b);

        // Push the RGB string with the calculated R, G, and B values
        colorVariants.push(`rgb(${r}, ${g}, ${b})`);
      }
      return colorVariants;
    };
    setColorVariants(generateColorVariants(hexColor, 16));
  }, [hexColor]);

  return (
    <div>
      <Grid rows={1} columns={2} gap={0}>
        <input
          type="color"
          value={hexColor}
          onChange={(e) => {
            setHexColor(e.target.value);
            console.log(e.target.value);
          }}
          style={{ width: '4rem', height: '4rem' }}
        />
        <span>{hexColor}</span>
      </Grid>

      {/* <Grid rows={1} columns={20} gap={0}>
        {colorVariants.map((colorVariant, index) => (
          <Grid rows={2} columns={1} gap={0}>
            <Card
              key={index}
              variant={colorVariant}
              width="2rem"
              height="2rem"
              padding="0"
            >
              {''}
            </Card>
            <span>{5 * index}%</span>
            <span>
              {rgbToHex(
                getRGBValues(colorVariant).r,
                getRGBValues(colorVariant).g,
                getRGBValues(colorVariant).b,
              )}
            </span>
          </Grid>
        ))}
      </Grid> */}
      <>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Index</TableHeader>
              <TableHeader>RGB Value</TableHeader>
              <TableHeader>HexValue</TableHeader>
              <TableHeader>Color</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {colorVariants.map((colorVariant, index) => (
              <TableRow>
                <TableCell>{index}</TableCell>
                <TableCell>{colorVariant}</TableCell>
                <TableCell>
                  {rgbToHex(
                    getRGBValues(colorVariant).r,
                    getRGBValues(colorVariant).g,
                    getRGBValues(colorVariant).b,
                  )}
                </TableCell>
                <TableCell
                  style={{ backgroundColor: colorVariant }}
                ></TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </>
    </div>
  );
};

ColorPaletteGenerator.propTypes = {
  initialColor: PropTypes.string,
};

ColorPaletteGenerator.defaultProps = {
  initialColor: '00000',
};

export default ColorPaletteGenerator;
