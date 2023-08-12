import React from 'react';
import './App.css';
import Button from './widgets/Button';
import InputField from './widgets/InputField';
import Select from './widgets/Select';
import TextArea from './widgets/TextArea';
import CheckBox from './widgets/CheckBox';
import Radio from './widgets/Radio';
import CheckBoxGroup from './widgets/CheckBoxGroup';
import RadioGroup from './widgets/RadioGroup';
import OutlineButton from './widgets/OutlineButton';

function App() {
  const items = ['Apple', 'Microsoft', 'Tesla',];
  return (
    <div className="App">
      <InputField hintText='Username' />
      <InputField hintText='Password' type='password' />
      <Select data={items} hintText='Select brand...' />
      <TextArea hintText='Address' />
      <br/>
      <CheckBox preText='Apple' postText='Microsoft' />
      <br/>
      <Radio postText='Yes' />
      <br/>
      <CheckBoxGroup checkBoxList={items} />
      <br/>
      <RadioGroup radioList={items} name='brands' />
      <br/>
      <InputField type='submit' value='Submit'/>
      <br/>
      <Button text="Button" />
      <br/>
      <OutlineButton text='Outline Button' />
    </div>
  );
}

export default App;

