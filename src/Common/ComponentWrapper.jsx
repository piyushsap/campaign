import React  from 'react';
function ComponentWrapper(props) {
    let compParent = React.createRef();
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    const handleDragEnter = (e) => {
      compParent.current.classList.add('hover');
    };
  
    const handleDragLeave = (e) => {
      compParent.current.classList.remove('hover');
    };
  
    const handleClick = (e) => {
      document.querySelectorAll('.component-container').forEach(ele => {
        ele.classList.remove('select');
      });
      compParent.current.classList.add('select');
  
      props.clickHandler(e);
  
    };
  
    return (
      <div ref={compParent} onDragOver = {(e) => handleDragOver(e)} onClick = {handleClick}
      onDragEnter = {(e) => handleDragEnter(e)} 
      onDragLeave = {(e) => handleDragLeave(e)} 
      onDrop =  {(e) => handleDragLeave(e)} 
      className ="component-container">
        {props.children}
      </div>
    )
  };

  export default ComponentWrapper;