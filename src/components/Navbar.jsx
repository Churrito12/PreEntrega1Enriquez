import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div>
      <Flex>
        <Box p="4" bg="#92c9b1">
          <h3>Planterra</h3>
        </Box>
        <Spacer />
        <Box p="4" bg="#92c9b1">
          <Menu>
            <MenuButton>Inicio</MenuButton>
            <MenuList>
              <MenuItem>A</MenuItem>
              <MenuItem>B</MenuItem>
              <MenuItem>C</MenuItem>
              <MenuItem>D</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4" bg="#92c9b1">
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
