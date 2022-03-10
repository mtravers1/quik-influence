import { useState, FC, cloneElement, ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
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

const EditableWrapper: FC<{
  children: ReactElement;
  sectionId: string;
  data: any;
  sectionName: string;
  isImage?: boolean;
}> = ({ children, sectionId, data, sectionName, isImage = false }) => {
  const { user } = useSelector((state: any) => state.auth);

  const [editing, setEditing] = useState({ edit: false, close: false });
  const [loading, setLoading] = useState(false);
  const startEditing = () => {
    setEditing({ edit: true, close: true });
  };

  const finishEditing = async () => {
    setEditing({ edit: true, close: false });
    setLoading(true);

    // edit API call
    const element = document.querySelector(`#${sectionName}_${sectionId}`);

    let mutatedData = { ...data };

    let object = mutatedData;
    const stack = `content__${sectionId}`.split('__') || [];

    while (stack.length > 1) {
      object = object[stack.shift() || 0];
    }

    const lastObj = stack.shift();

    if (object[lastObj || 0] === element?.innerHTML) {
      setEditing({ edit: false, close: false });
      setLoading(false);
      return;
    }

    object[lastObj || 0] = element?.innerHTML;

    try {
      await axiosInstance.patch(`/content/${data.id}`, {
        content: { ...data.content },
      });
    } catch (err) {}

    setEditing({ edit: false, close: false });
    setLoading(false);
  };

  if (!user) return children;

  return (
    <Box position="relative">
      <Flex
        css={styles}
        transition="0.3s ease"
        opacity={editing.edit ? '1' : '0'}
        top={editing.edit ? '-30px' : '0'}
        background="white"
        mixBlendMode="difference"
        padding="5px"
        backdropFilter="blur(2px)"
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
          />
        )}

        <img
          src="/close.png"
          alt="Close"
          style={{ width: '10px', height: '10px' }}
        />

        {loading && <Image src={loader} alt="loader" width={30} height={30} />}
      </Flex>

      {isImage
        ? ''
        : cloneElement(children, {
            ...children.props,
            id: `${sectionName}_${sectionId}`,
            contentEditable: editing.edit,
            tabIndex: -1,
            onBlur: finishEditing,
            onClick: startEditing,
            suppressContentEditableWarning: true,
          })}
    </Box>
  );
};

export default EditableWrapper;
