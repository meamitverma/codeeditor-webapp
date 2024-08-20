import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  Text,
  MenuList,
} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "orange";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize={"lg"}>
        Language:{" "}
      </Text>
      <Menu>
        <MenuButton color={ACTIVE_COLOR} as={Button}>{language}</MenuButton>

        <MenuList bg="#110c1b">
          {languages.map(([lang, version]) => (
            <MenuItem
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "gray.900" : ""}
              _hover={{
                bg: "gray.700",
              }}
              onClick={() => onSelect(lang)}
              key={lang}
            >
              {lang}&nbsp;
              <Text as={"span"} color={"gray.600"} fontSize={"sm"}>
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
