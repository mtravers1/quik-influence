import { useState, FC, cloneElement, ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXRay } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import loader from 'assets/loader.gif';
import { css } from '@emotion/react';
import Image from 'next/image';
import { axiosInstance } from 'utils/helpers';

const styles = css`
  & {
    position: absolute;
    right: 0;
  }
`;

const EditableWrapper: FC<{
  children: ReactElement;
  sectionId: string;
  data: any;
  sectionName: string;
  isImage?: boolean;
}> = ({ children, sectionId, data, sectionName, isImage = false }) => {
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
      await axiosInstance.patch(
        `/content/${data.id}`,
        {
          content: { ...data.content },
        },
        {
          headers: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsImZpcnN0TmFtZSI6IkFsbGlhbmNlIiwibGFzdE5hbWUiOiJTdXBlckFkbWluIiwicGhvbmUiOiIrMSAoOTE3KSA1ODUtMzE4MSIsImVtYWlsIjoic3VwZXJhZG1pbkBhbGxpYW5jZWRldmVsb3BtZW50LmNvbSIsInJvbGVJZCI6MSwiY3JlYXRlZEF0IjoiMjAyMi0wMS0zMFQxMjozODoxOC4zMjZaIiwidXBkYXRlZEF0IjoiMjAyMi0wMS0zMFQxMjozODoxOC4zMjZaIiwicGFzc3dvcmQiOiIkMmEkMTAkR1dkVGRjcnF5Z0RleURaR21SSnpwZTg1d2hrck5YMXdpL2tJYmhTeFpPeGpnMUhWZ0NnZlMiLCJyb2xlIjp7Im5hbWUiOiJzdXBlcmFkbWluIn0sImFkbWluQXBwcyI6W10sImlhdCI6MTY0NDY3NzU3NywiZXhwIjoxNjQ0NzYzOTc3fQ.YVyQOC89trFsSYQ3I1HNIp9ztl-70mgXTbRn-a1Yjts',
          },
        }
      );
    } catch (err) {}

    setEditing({ edit: false, close: false });
    setLoading(false);
  };

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
            icon={faCheck as IconProp}
          />
        )}
        <FontAwesomeIcon
          style={{
            width: '20px',
          }}
          icon={faXRay as IconProp}
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
