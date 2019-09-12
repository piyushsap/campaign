import React, { useState } from 'react';
import './image.scss';
import imageIcon from '../Assets/Images/image.svg';
import { Input } from '../Components/';

function Image(props) {

    const [imageSrc, setImage] = useState([]);
    const divStyle = {
        backgroundImage: 'url(' + imageSrc || '' + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '200px',
        position: 'absolute',
        zIndex: '-1'
    };

    const selectfile = (event) => {
        console.log(event);
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
                <img alt="img-icon" src={imageIcon} width="30px" />
                <span className="placeholder-txt">Add your image</span>
                < Input {...{label: 'Browse', class:'uploadBtn',name:'imageUpload',id:'imageupload',type: 'file',imageValid:'image/gif, image/jpeg, image/png'}}  />
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