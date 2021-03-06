import React from 'react';
import {Button} from 'semantic-ui-react';


const ImageUploader = (props) => {
  return (
    <div className="main" >
      <div className="upload" >
        <Button onClick={props.getUploadWidget} >
          Add image
        </Button>
      </div>
    </div>
  );
}

export default ImageUploader;
