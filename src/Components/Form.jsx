import React from 'react';
import { Input } from '../Components/';

function Formcomp(props) {

  

  return (
    <form className={props.classNames} method={props.formMethod} action={props.formAction} onDrop>
      < Input {...{label: 'Enter your Name', class:'text-field',name:'fname',id:'fname',type: 'text'}}  />
      < Input {...{label: 'Enter your email', class:'email-field',name:'email',id:'email',type: 'email'}}  />
    </form>
  );
}

export default Formcomp;