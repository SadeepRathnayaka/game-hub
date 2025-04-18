import { HStack, Image, Tooltip } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  onClick: () => void;
}

const NavBar = ({ onSearch, onClick }: Props) => {
  return (
    <HStack padding="10px">
      <Tooltip label="Home" placement="bottom" hasArrow>
        <Image
          src={logo}
          boxSize="60px"
          onClick={onClick}
          cursor="pointer"
          _hover={{ transform: "scale(1.05)" }} // Optional: Adds a slight zoom effect on hover
        />
      </Tooltip>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
