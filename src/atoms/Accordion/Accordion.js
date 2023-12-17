import React from "react";
import PropTypes from "prop-types";
import "./Accordion.css";
import css from "../../electrons/accordian.module.css";
import AccordionItem from "./AccordianItem";

const Accordion = (props) => {
  // console.log(css)
  const { children } = props;
  return (
    <div className={css.Accordion}>
      {React.Children.map(children, (item, index) => {
        if (item.type === AccordionItem) {
          return <AccordionItem {...item.props} />;
        } else {
          return item;
        }
      })}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["small", "medium", "large"]),
};

Accordion.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};

export default Accordion;
