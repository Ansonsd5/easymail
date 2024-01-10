import React from 'react';
import PropTypes from 'prop-types';

const TextInputBox = ({
  label,
  placeholder,
  value,
  onChange,
  type,
  disabled,
  isMandatory,
  maxLength,
}) => {
  return (
    <div className='p-6'>
    <div className="text-input-box   font-normal ">
      <label className="text-input-label text-left flex p-[4px]">
        {label} {isMandatory && <span className="required text-red-600">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        className="text-input w-[100%] border px-3 py-2 rounded-sm border-[#cacaca]  bg-opacity-20"
      />
    </div>
    </div>
  );
};



TextInputBox.defaultProps = {
  placeholder: '',
  value: '',
  type: 'text',
  disabled: false,
  required: false,
  maxLength: undefined,
};

export default TextInputBox;
