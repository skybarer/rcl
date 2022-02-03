import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = (props) => {
    const childrenCount = React.Children.count(props.children);
    return (
        <React.Fragment>
            {
                React.Children.map(props.children, (child, index) => {
                    const isLastChild = index === childrenCount - 1;
                    const className = isLastChild && props.type === 'bottomBorder' ? 
                        'rc-list-item' : `rc-list-item ${props?.type}`;
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

