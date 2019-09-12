import React, { useState } from 'react';
import './image.scss';
import imageIcon from '../Assets/Images/image.svg';
import { Input } from '../Components/';

function Image(props) {

    const [imageSrc, setImage] = useState('');
    const divStyle = {
        backgroundImage: 'url(' + props.imageSrc || imageSrc || '' + ')',
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
                props.onChange(e, props);
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const imagePlaceHolder = (
        <div className="image-placeholder">
            <img alt="img-icon" src={imageIcon} width="30px" />
            <span className="placeholder-txt">Add your image</span>
            < Input {...{onChange: selectfile, label: 'Browse', class:'uploadBtn',name:'imageUpload',id:'imageupload',type: 'file',imageValid:'image/gif, image/jpeg, image/png'}}  />
        </div>
    );
    // if(props.imageSrc) {
    //     setImage(props.imageSrc);
    // }
    return (
        <React.Fragment>
            { !props.imageSrc && !imageSrc && imagePlaceHolder}
            <div className="banner-image">
                {props.imageType === "Background" ? (
                    <div className="background-image" style={divStyle} ></div>
                ) :

                        <img alt="Image" src={props.imageSrc || imageSrc} />

                }

            </div>
        </React.Fragment>
    );


}




export default Image;