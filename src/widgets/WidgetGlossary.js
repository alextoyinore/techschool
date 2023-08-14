import React from 'react'

function WidgetGlossary() {
  return (
    <div>
        {/* <Loading /> */}
      <TopNavItem text='For Children' />
      <br/>
      <SearchField hintText='Search courses' />
      <br/>
      <InputField hintText='Username' />
      <br/>
      <InputField hintText='Password' type='password' />
      <br/>
      <Select data={items} hintText='Select brand...' />
      <br/>
      <TextArea hintText='Address' />
      <br/>
      <CheckBoxGroup checkBoxList={items} labelText='Select which brand(s) are American?' />
      <br/>
      <RadioGroup radioList={items} name='brands' labelText='Which is the richest brand?' />
      <br/>
      <InputField type='submit' value='Submit'/>
      <br/>
      <Button text="Button" />
      <br/>
      {/* <Button isSearch='true' />
      <br/> */}
      <OutlineButton text='Outline Button'/>
    </div>
  )
}

export default WidgetGlossary