import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <div>
      <Flex>
        <Box>
          <CheckCircleIcon />
        </Box>
        <Divider />
        <Box>
          <p>1</p>
        </Box>
      </Flex>
    </div>
  );
};

export default CartWidget;
