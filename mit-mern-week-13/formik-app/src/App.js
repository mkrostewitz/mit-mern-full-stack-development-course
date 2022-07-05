import './App.css';
import {useFormik} from 'formik';
import React, { useState } from 'react';

function App() {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const success = false;

  const formik = useFormik ({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    
    validate: values => {
      let errors = {};
   
      if (!values.name) errors.name = 'Field required';
      if (!values.email) errors.email = 'Username should be an email';
      if (!values.password) errors.password = 'A password is absolutely required';

      setFormErrors(errors);
  
      return errors
    },
    onSubmit: ()  => {

      setIsSubmitting(true);

      if (Object.keys(formErrors).length === 0 && isSubmitting) {
        formik.status = 'success'
        
      } else {
        formik.status = 'error'
      };

      console.log('form: ', formik.values);
      console.log('message: ', formik.status )
      console.log('status: ', success)

      return formik
    }
  });
  return (
    
    <div>
      <form id="form" onSubmit={formik.handleSubmit} >
        <div>Name</div>
        <input id="nameField" type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div id="nameError" style={{color: 'red'}}>{formik.errors.name}</div> : null }
        <div>Email</div>
        <input id="emailField" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div> : null }
        <div>Password</div>
        <input id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div> : null }
        <div></div>
        <button id="submitBtn" type="submit" >Submit</button>
        {Object.keys(formErrors).length === 0 && formik.submitCount > 0 ? <div style={{color: 'green'}}>{'Login successfull!'}</div> : null }
      </form>
    </div>
  );
}

export default App;
