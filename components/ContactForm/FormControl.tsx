import { spawn } from 'child_process';
import React, { ComponentProps } from 'react';
import { formatClassNames } from '../../utils';

export interface FormControlProps extends ComponentProps<'div'> {
  inputId: string
  error?: string
  labelText: string
  labelHelper?: string
}

export default function FormControl(Props: FormControlProps) {
  const {
    children,
    inputId,
    error,
    labelText,
    labelHelper
  } = Props
  return (
    <div className={formatClassNames('form-control', error ? 'error' : undefined)}>
      {Boolean(error) && <span className="error">{error}</span>}
      {children}
      <label htmlFor={inputId} className="label">
        <span className="text">{labelText}</span>
        {Boolean(labelHelper) && <span className="helper">{labelHelper}</span>}
      </label>
    </div>
  );
}
