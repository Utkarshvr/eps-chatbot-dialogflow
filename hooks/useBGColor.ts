import { config } from "@gluestack-ui/config";
import { useColorScheme } from "react-native";

export default function useBGColor() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const bgColor = isDark
    ? config.tokens.colors.secondary950
    : config.tokens.colors.secondary0;
  const textColor = !isDark
    ? config.tokens.colors.secondary950
    : config.tokens.colors.secondary0;
  const borderColor = !isDark
    ? config.tokens.colors.borderDark100
    : config.tokens.colors.borderDark800;

  return { bgColor, textColor, borderColor, isDark };
}
