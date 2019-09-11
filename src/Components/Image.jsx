import React, { useState } from 'react';

function Image(props) {

    const [imageSrc, setImage] = useState([]);
    const divStyle = {
        backgroundImage: 'url(' + props.backgroundImage || '' + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    const selectfile = (event) => {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {

                setImage(e.target.result);
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    };
    return (
        <React.Fragment>
            <div className="image-placeholder">
                <img alt="Image" src="" />
                <span className="placeholder-txt">Add your image</span>
                <input className="btn btn-default" type="file" onChange={selectfile} accept="image/gif, image/jpeg, image/png" />
            </div>
            <div className="banner-image">
                {props.backgroundImage ? (
                    <div className="background-image" style={divStyle} ></div>
                ) :

                        <img alt="Image" src={imageSrc} />

                }

            </div>
        </React.Fragment>
    );


}



export default Image;