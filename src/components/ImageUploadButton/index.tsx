import { ASDMedia } from "@alliance-software-development/asd-media-react";
import React from "react";

const ImageUploadButton = () => {
  const [image, setImage] = React.useState("");
  const asdMediaRef: any = React.useRef();

  const translation = {
    buttons: {
      choose: {
        images: {
          one: '<div className="image">Upload photo</div>'
        }
      }
    }
  };

  return (
    <>
      <div className="image" onClick={() => asdMediaRef.current?.openDialog()}>
        <img src={image} alt="uploaded" />
      </div>
      <ASDMedia
        // @ts-ignore
        ref={asdMediaRef}
        publicKey={process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY as string}
        onChange={console.log}
        localeTranslations={translation}
        imagesOnly
        previewStep
        onFileSelect={(file: any) => {
          if (!file) {
            console.log("File removed from widget");
            return;
          }
          file.done((fileInfo: any) => {
            fileInfo['smartURL'] = `${fileInfo.cdnUrl}-/preview/-/quality/smart/`;
            setImage(fileInfo.smartURL);
          });
        }}
        clearable
      />
    </>
  );
};

export default ImageUploadButton;
