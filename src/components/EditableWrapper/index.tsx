import { useState, FC, cloneElement, ReactElement } from 'react';
import { Box, Flex, Img } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXRay } from '@fortawesome/free-solid-svg-icons';
import loader from 'assets/loader.gif';
import { css } from '@emotion/react';
import Image from 'next/image';

const styles = css`
  & {
    position: absolute;
    right: 0;
  }
`;

const EditableWrapper: FC<{ children: ReactElement; sectionId: string }> = ({
  children,
  sectionId,
}) => {
  const [editing, setEditing] = useState({ edit: true, close: true });
  const [loading, setLoading] = useState(false);
  const startEditing = () => {
    setEditing({ edit: true, close: true });
  };

  const finishEditing = () => {
    setEditing({ edit: false, close: true });
    setLoading(true);

    // edit API call

    setEditing({ edit: false, close: false });
    setLoading(false);
  };

  return (
    <Box
      onClick={startEditing}
      tabIndex={-1}
      onBlur={finishEditing}
      position="relative"
    >
      <Flex
        css={styles}
        transition="0.3s ease"
        opacity={editing.edit ? '1' : '0'}
        top={editing.edit ? '5px' : '0'}
      >
        {editing.edit && (
          <FontAwesomeIcon
            style={{
              marginRight: '10px',
              width: '20px',
              fontWeight: 300,
            }}
            icon={faCheck}
          />
        )}
        <FontAwesomeIcon
          style={{
            width: '20px',
          }}
          icon={faXRay}
        />
        {loading && <Image src={loader} alt="loader" width={40} height={40} />}
      </Flex>

      {cloneElement(children, {
        ...children.props,
        id: sectionId,
        contentEditable: editing.edit,
      })}
    </Box>
  );
};

export default EditableWrapper;
