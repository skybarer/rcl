import React from 'react';
import PropTypes from 'prop-types';
import AccordionContent from './AccordianContent';
import AccordionTitle from './AccordianTitle';

const AccordionItem = ({ children }) => {
  const [toogleBody, setToggleBody] = React.useState(false);

  const svgClose = (
    <svg
      fill="none"
      height="9"
      viewBox="0 0 14 9"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m1 1 6 6 6-6" stroke="#000" strokeWidth="2"></path>
    </svg>
  );

  const svgOpen = (
    <svg
      className="svg"
      fill="none"
      height="14"
      viewBox="0 0 9 14"
      width="9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m1 13 6-6-6-6" stroke="#000" strokeWidth="2"></path>
    </svg>
  );

  const titileOnClick = () => {
    setToggleBody(!toogleBody);
  };

  return (
    <>
      {React.Children.map(children, (item, innerIndex) => {
        if (item.type === AccordionTitle) {
          // console.log(toogleBody)
          return (
            <AccordionTitle
              titileOnClick={titileOnClick}
              toogleBody={toogleBody}
              svgShow={toogleBody ? svgClose : svgOpen}
              {...item.props}
            />
          );
        } else if (item.type === AccordionContent) {
          return (
            <>{toogleBody ? <AccordionContent {...item.props} /> : null}</>
          );
        } else {
          return item;
        }
      })}
    </>
  );
};

AccordionItem.propTypes = {
  // type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

AccordionItem.defaultProps = {};

export default AccordionItem;
