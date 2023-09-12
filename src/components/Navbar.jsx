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
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Flex>
        <Box p="4" bg="#82d173">
          <Link to={"/"}>
            <h3>Planterra</h3>
          </Link>
        </Box>
        <Spacer />
        <Box p="4" bg="#82d173">
          <Menu>
            <MenuButton>Inicio</MenuButton>
            <MenuList>
              <MenuItem>Guias</MenuItem>
              <MenuItem>Compras</MenuItem>
              <MenuItem>Nosotros</MenuItem>
              <MenuItem>Contacto</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4" bg="#82d173">
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
