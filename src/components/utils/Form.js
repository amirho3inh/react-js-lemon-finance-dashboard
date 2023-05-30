import {
    Form,
    Input,
    Checkbox as AntCheckbox,
    Select as AntSelect,
    Button as AntButton
  } from 'antd'
  import { useState } from 'react';

  export { Form } from 'antd'
  
  export function Text ({ label, name, required, rules = [], ...props }) {
    return (
      <Form.Item label={label} name={name} rules={[{ required }, ...rules]}>
        <Input {...props} />
      </Form.Item>
    )
  }
  
  export function TextPassword ({ label, name, required, rules = [], ...props }) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
      <Form.Item label={label} name={name} rules={[{ required }, ...rules]}>
        <Input.Password
        visibilityToggle={{
          visible: passwordVisible,
          onVisibleChange: setPasswordVisible,
        }}
        {...props} />
      </Form.Item>
    )
  }
  
  export function Checkbox ({ name, children }) {
    return (
      <Form.Item name={name} valuePropName='checked'>
        <AntCheckbox>{children}</AntCheckbox>
      </Form.Item>
    )
  }
  
  export function Select ({
    name,
    label,
    required,
    rules = [],
    options = [],
    ...props
  }) {
    return (
      <Form.Item name={name} label={label} rules={[{ required }]}>
        <AntSelect allowClear {...props}>
          {options.map(({ value, name }) => (
            <AntSelect.Option key={value} value={value}>
              {name}
            </AntSelect.Option>
          ))}
        </AntSelect>
      </Form.Item>
    )
  }
  
  export function Submit ({ label = 'ذخیره', loading, ...props }) {
    return (
      <Form.Item>
        <AntButton
          type='primary'
          htmlType='submit'
          loading={loading}
          disabled={loading}
          {...props}
        >
          {label}
        </AntButton>
      </Form.Item>
    )
  }

  export function Button ({ label = 'ذخیره', type = 'primary', loading, ...props }) {
    return (
      <Form.Item>
        <AntButton
          type={type}
          loading={loading}
          disabled={loading}
          {...props}
        >
          {label}
        </AntButton>
      </Form.Item>
    )
  }