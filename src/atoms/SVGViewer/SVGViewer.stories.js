// SVGViewer.stories.js
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import SVGViewer from './SVGViewer';
import SearchBar from './../SearchBar/SearchBar';

// Import all SVG files from a folder
const reqSvgs = require.context('../../assets/icons/', true, /\.svg$/);
let svgFiles = reqSvgs.keys().map((path) => ({
  path: reqSvgs(path),
  name: path.split('/').pop(),
}));
svgFiles.sort((a, b) => a.name.localeCompare(b.name));

storiesOf('SVGViewer', module).add('SvgList', () => {

  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the SVG files based on the search query
  const filteredSvgFiles = svgFiles.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SearchBar placeholder="Search SVGs..." onChange={handleSearchChange} />
      <div style={{
        'display': 'flex',
        'justify-content': 'flex-start',
        'padding': '10px'
      }}>
        <bold>Total </bold> : {svgFiles.length}  &nbsp; <bold>Selected</bold> : {filteredSvgFiles.length}
      </div>
      <SVGViewer srcs={filteredSvgFiles} />
    </>
  );
});
