import React from 'react';

function Image(props) {
    const divStyle = {
        backgroundImage: 'url(' + props.backgroundImage || '' + ')',
        backgroundSize: Cover,
        backgroundPosition: center
    };
    return (
        <div className="banner-image">
            { props.backgroundImage ?(
            <div className="background-image" style={divStyle} ></div>
        ):
            <img src= {props.url}
                alt= {props.alt} />
        }
            
        </div>
    );
}

export default Image;