import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import colors from "./colors";
import { global } from "./global";

const defaultConfig: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config: defaultConfig,
  styles: { global: { ...global } },
  colors,
});
