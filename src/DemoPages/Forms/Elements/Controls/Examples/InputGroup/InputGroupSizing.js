import React from 'react';
import { InputGroup, Input, InputGroupText } from 'reactstrap';

const FormInputGroupSizing = (props) => {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroupText addonType="prepend">@lg</InputGroupText>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupText addonType="prepend">@normal</InputGroupText>
        <Input />
      </InputGroup>
      <br />
      <InputGroup size="sm">
        <InputGroupText addonType="prepend">@sm</InputGroupText>
        <Input />
      </InputGroup>
    </div>
  );
};

export default FormInputGroupSizing;
