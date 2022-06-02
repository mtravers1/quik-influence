import { useState, FC, useRef, ReactElement } from 'react';
import { Box, Flex, BoxProps } from '@chakra-ui/react';
import { ASDMedia } from '@alliance-software-development/asd-media-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXRay } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import loader from 'assets/loader.gif';
import { css } from '@emotion/react';
import Image from 'next/image';
import { axiosInstance } from 'utils/helpers';
import { useSelector } from 'react-redux';

const styles = css`
  & {
    position: absolute;
    right: 0;
    align-items: center;
  }
`;

const filterProps = (props: any) => {
  const { children, sectionId, data, sectionName, isImage, as, ...rest } =
    props;
  return rest;
};

interface EditableWrapperProps extends BoxProps {
  children: ReactElement | string;
  sectionId: string;
  data: any;
  sectionName: string;
  isImage?: boolean;
  setData?: Function;
}

const EditableWrapper: FC<EditableWrapperProps> = props => {
  const {
    children,
    sectionId,
    data,
    sectionName,
    isImage = false,
    setData,
  } = props;
  const { user } = useSelector((state: any) => state.auth);
  const parent = useRef<HTMLDivElement>(null);

  const [editing, setEditing] = useState({ edit: false, close: false });
  const [loading, setLoading] = useState(false);
  const startEditing = () => {
    setEditing({ edit: true, close: true });
  };

  const finishEditing: any = async (imgurl: string) => {
    showLoader(true);

    // edit API call
    const element = document.querySelector(`#${sectionName}_${sectionId}`);

    let mutatedData = { ...data };

    let object = mutatedData;
    const stack = `content__${sectionId}`.split('__') || [];

    while (stack.length > 1) {
      object = object[stack.shift() || 0];
    }

    const lastObj = stack.shift();

    console.log(lastObj);

    if (object[lastObj || 0] === element?.textContent && !isImage) {
      showLoader(false);
      return;
    }

    if (isImage) {
      object[lastObj || 0] = imgurl;
    } else {
      if (lastObj === 'values') {
        object[lastObj || 0] =
          element?.textContent?.split('\n') || element?.textContent;
      } else object[lastObj || 0] = element?.textContent;
    }

    if (!object[lastObj || 0]) {
      return;
    }

    try {
      console.log(data.content);

      await axiosInstance.patch(`/content/${data.id}`, {
        content: { ...data.content },
      });

      if (isImage) {
        showLoader(false);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }

    showLoader(false);
  };

  const showLoader = (loading: boolean) => {
    if (loading) {
      setEditing({ edit: true, close: false });
      setLoading(true);
    } else {
      setEditing({ edit: false, close: false });
      setLoading(false);
    }
  };

  const onBlur = (e: any) => {
    const leavingParent = !parent?.current?.contains(e.relatedTarget);

    if (leavingParent && editing.edit) {
      finishEditing();
    }
  };

  if (!user.admin)
    return (
      <Box position="relative" {...filterProps(props)}>
        {children}
      </Box>
    );

  return (
    <Box
      position="relative"
      {...filterProps(props)}
      className="asd-media-wrapper__editable_wrapper"
      onBlur={onBlur}
      tabIndex={-1}
      ref={parent}
    >
      <>
        <Flex
          css={styles}
          transition="0.3s ease"
          opacity={editing.edit ? '1' : '0'}
          top={editing.edit ? '-30px' : '0'}
          background="white"
          mixBlendMode="difference"
          padding="5px"
          backdropFilter="blur(2px)"
          zIndex={10}
        >
          {editing.close && (
            <FontAwesomeIcon
              style={{
                marginRight: '10px',
                width: '20px',
                fontWeight: 300,
              }}
              color="#000"
              icon={faCheck as IconProp}
              onClick={finishEditing}
            />
          )}

          <img
            src="/close.png"
            alt="Close"
            style={{ width: '10px', height: '10px' }}
          />

          {loading && (
            <Image src={loader} alt="loader" width={30} height={30} />
          )}
        </Flex>

        {isImage ? (
          <ImageSection
            sectionId={sectionId}
            sectionName={sectionName}
            children={children}
            showLoader={showLoader}
            finishEditing={finishEditing}
          />
        ) : (
          <Box
            as={props.as}
            // ...children.props,
            id={`${sectionName}_${sectionId}`}
            contentEditable={editing.edit}
            onClick={startEditing}
            suppressContentEditableWarning={true}
          >
            {children}
          </Box>
        )}
      </>
    </Box>
  );
};

interface ImageSectionProps {
  sectionName: string;
  sectionId: string;
  showLoader: Function;
  children: any;
  finishEditing: Function;
}

const ImageSection: FC<ImageSectionProps> = ({
  sectionName,
  sectionId,
  children,
  showLoader,
  finishEditing,
}) => {
  const asdMediaRef = useRef() as any;

  const translation = {
    buttons: {
      choose: {
        images: {
          one: '',
        },
      },
    },
  };

  const handleFileSelect = (file: any) => {
    showLoader(true);
  };

  const handleClick = () => {
    asdMediaRef.current?.openDialog();
  };

  const handleChange = (e: any) => {
    finishEditing(e.cdnUrl);
  };

  const handleDialogClose = () => {
    console.log('dialog close');
    showLoader(false);
  };

  return (
    <>
      <Box
        // ...children.props,
        id={`${sectionName}_${sectionId}`}
        tabIndex={-1}
        onClick={handleClick}
        cursor="pointer"
      >
        {children}
      </Box>

      <ASDMedia
        // @ts-ignore
        ref={asdMediaRef}
        publicKey={process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY as string}
        onChange={handleChange}
        onDialogClose={handleDialogClose}
        localeTranslations={translation}
        imagesOnly
        previewStep
        onFileSelect={handleFileSelect}
        clearable
      />
    </>
  );
};

export default EditableWrapper;
