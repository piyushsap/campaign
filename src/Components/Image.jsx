import React, { useState, useEffect } from 'react';
import './image.scss';
import imageIcon from '../Assets/Images/image.svg';
import { Input } from '../Components/';
import {styleToObject} from './../Common/utils';

function Image(props) {

    const [imageSrc, setImage] = useState('');
    const [imageDimension, setImageDimension] = useState({});

    const backgroundStyle = {
        backgroundImage: 'url(' + props.imageSrc || imageSrc || '' + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%'
    };

    const divStyle = {
        width: imageDimension.width,
        height: imageDimension.height,
        position: 'absolute'
    }

    const selectfile = (event) => {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {

                setImage(e.target.result);
                props.onChange(e, props);
            };

            reader.readAsDataURL(event.target.files[0]);
        };
        
    };

    const getDimension = (event) => {
        let imageDim = {
            width: event.target.width,
            height: event.target.height
        }
        setImageDimension(imageDim);
        console.log(imageDimension);
    };

    const imagePlaceHolder = (
        <div className="image-placeholder">
            <img alt="img-icon" src={imageIcon} width="30px"/>
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
            <div className="banner-image" >
                {props.imageType === "Background" ? (
                    <React.Fragment>
                    <div className="banner-image" style={divStyle}>
                        <div className="background-image" style={backgroundStyle} ></div>
                    </div>
                    </React.Fragment>
                ) :

                        <img style = {{"maxWidth": "100%", ...styleToObject(props.customStyle)}} alt="Image" src={props.imageSrc || imageSrc} onLoad={getDimension} />

                }

            </div>
        </React.Fragment>
    );


}




export default Image;