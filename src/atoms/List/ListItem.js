import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = ({ type, children }) => {
    const childrenCount = React.Children.count(children);
    return (
        <React.Fragment>
            {
                React.Children.map(children, (child, index) => {
                    const isLastChild = index === childrenCount - 1;
                    const className = isLastChild && type === 'bottomBorder' ?
                        'rc-list-item' : `rc-list-item ${type}`;
                    return (
                        <li
                            className={className}
                            key={index}
                            label={index}
                        >
                            {child.props.children}
                        </li>
                    )
                })
            }
        </React.Fragment>
    )
}

ListItem.propTypes = {
    label: PropTypes.string.isRequired,
};

ListItem.defaultProps = {

}

