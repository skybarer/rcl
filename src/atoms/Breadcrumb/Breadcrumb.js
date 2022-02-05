import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.css'
// https://codeburst.io/build-breadcrumb-component-using-react-js-458f0196d304

const breadcrumb = {
  backgroundColor: 'white',
  // border: '1px solid rgba(0, 0, 0, 0.125)',
  // borderRadius: '0.37rem'
}

//  <div id='breadcrumb'>
//       {props.children}
//   </div>


export default function Breadcrumb(props) {

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <span className="row justify-content-center mt-4">
      <span className="breadcrumb" style={breadcrumb}>
        {
          props.crumbs.map((crumb, ci) => {
            const disabled = isLast(ci) ? 'disabled' : '';

            return (
              <span
                key={ci}
                className="breadcrumb-item align-items-center"
              >
                <span
                  className={`btn btn-link ${disabled}`}
                  onClick={() => props.selected(crumb)}
                  style={{
                    margin: '4px',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                  }}
                >
                  {crumb} /
                </span>
              </span>
            );
          })
        }
      </span>
    </span>
  );
}

Breadcrumb.propTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

Breadcrumb.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
