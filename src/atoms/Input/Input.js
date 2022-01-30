import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.css'
// https://github.com/iiison/react-form
// https://academind.com/tutorials/reactjs-a-custom-useform-hook
// https://react-hook-form.com/

const Input = (
    {
        id = 'input-1',
        type = 'text',
        value = 'akash',
        placeholder = 'Your username or email',
        className,
        style,
        onChange,
        ...props
    }) => {

    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (event) => {
        if (event && event.target)
            setInputValue(event.target.value)
    }

    return (
        <>
            {type}
            <input
                id={id}
                type={type}
                className={className}
                placeholder={placeholder}
                onInput={handleInputChange}
                onChange={onChange}
                aria-label="Your username or email"
                aria-invalid="false"
                value={inputValue}
                name="username"
                aria-required="true"
                aria-describedby="tooltip-input-1"
                style={{
                    color: 'black',
                    backgroundColor: '#f3f7f7',
                    border: '.1px dashed #c2c7d0',
                    borderRadius: '0',
                    minWidth: '320px',
                    width: '100%',
                    height: '40px',
                    outline: 'none',
                    fontSize: '18px',
                    padding: '1px 10px',
                    boxShadow: 'inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent',
                    marginBottom: '0',
                    boxSizing: 'border-box',
                    fontWeight: '400',
                    style

                }}>
            </input>
        </>

    );
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    type: 'text',
    onChange: undefined,
};

export default Input;

