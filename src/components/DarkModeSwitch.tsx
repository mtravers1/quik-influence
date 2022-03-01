import { useColorMode, Switch } from '@chakra-ui/react';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Switch
      _focus={{
        borderOutline: 'none',
      }}
      color="green"
      ml={3}
      mb={0}
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;
