import React, { Component } from 'react';
import Axios from 'axios';

import DefaultImg from '../../assets/Images/logo192.png';

class UploadImages extends Component {
  // set up using react super props
  // then reestablish using redux thunk and store

  constructor(props) {
    super(props);


    this.state = {
      multerImage: DefaultImg,
      firebaseImage: DefaultImg,
      baseImage: DefaultImg,
    }
  }

  setDefaultImage(uploadType) {
    if (uploadType === 'multer') {
      this.setState({
        multerImage: DefaultImg
      });
    } else if (uploadType === 'firebase') {
      this.setState({
        firebaseImage: DefaultImg
      });
    } else {
      this.setState({
        baseImage: DefaultImg
      });
    }
  }

  // axios used in front end...revamp using action
  // folder and reducers with redux
  uploadImage(e, method) {
    let imageObj = {};

    if (method === 'multer') {
      let imageFormObj = new FormData();

      imageFormObj.append('imageName', 'multer-image-' + Date.now());
      imageFormObj.append('imageData', e.target.files[0]);

      // stores a readable instance of
      // the image being uploaded using multer
      this.setState({
        multerImage: URL.createObjectURL(e.target.files[0])
      });

      // this axios will go in an action function
      Axios.post('/api/uploads/upload', imageFormObj)
        .then((data) => {
          if (data.data.success) {
            alert('image has been successfully uploaded using multer');
            this.setDefaultImage('multer');
          }
        })
        .catch((err) => {
          alert('error while uploading image');
          this.setDefaultImage('multer');
        });
    }
  }

  render() {
    return (
      <div>
        <div className='process'>
          <h4 className='process__heading'>Use Milter to upload image</h4>
          <p className='process__details'>upload image to mongoDB using multer in node.js</p>
          <input
            type='file'
            className='process__upload-btn'
            onChange={(e) => this.uploadImage(e, 'multer')}
          />
          <img
            src={this.state.multerImage}
            alt='upload-img'
            className='process__image'
          />
        </div>
        {/* <div classname='process-upload-btn'>
          <FileBase
          type='file'
          multiple={false}
          onDone={this.getBaseFile.bind(this)} 
          />
        </div> */}
      </div>
    )
  }


};

export default UploadImages;
