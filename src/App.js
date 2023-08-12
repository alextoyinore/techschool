import React from 'react';
import './App.css';
import '../assets/styles/Loading.css'
import Button from './widgets/Button';
import InputField from './widgets/InputField';
import Select from './widgets/Select';
import TextArea from './widgets/TextArea';
// import CheckBox from './widgets/CheckBox';
// import Radio from './widgets/Radio';
import CheckBoxGroup from './widgets/CheckBoxGroup';
import RadioGroup from './widgets/RadioGroup';
import OutlineButton from './widgets/OutlineButton';
import SearchField from './widgets/SearchField';
// import Loading from './widgets/Loading';

function App() {
  const items = ['Apple', 'Microsoft', 'Tesla',];
  return (
    <div className="App">
      {/* <Loading /> */}
      <SearchField hintText='Search courses' /><br/>
      <InputField hintText='Username' /><br/>
      <InputField hintText='Password' type='password' /><br/>
      <Select data={items} hintText='Select brand...' /><br/>
      <TextArea hintText='Address' />
      <br/>
      <CheckBoxGroup checkBoxList={items} labelText='Select which brand(s) are American?' />
      <br/>
      <RadioGroup radioList={items} name='brands' labelText='Which is the richest brand?' />
      <br/>
      <InputField type='submit' value='Submit'/>
      <br/>
      <Button text="Button" icon='fa fa-arrow-right' />
      <br/>
      {/* <Button isSearch='true' />
      <br/> */}
      <OutlineButton text='Outline Button' icon='fa fa-arrow-right'/>
    </div>
  );
}

export default App;

