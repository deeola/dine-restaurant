import React from 'react'
import { InputField } from './Styles/TextFieldStyles'

const TextField = ({type, placeholder, value}) => {
  return (
    <InputField 
    type={type}
    placeholder={placeholder}
    value={value}
    />
  )
}

export default TextField