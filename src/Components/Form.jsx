import React from 'react';

function Form(props) {
  return (
    <form className={props.classNames} method={props.formMethod} action={props.formAction}>
      {prop.children}
    </form>
  );
}

export default Checkbox;