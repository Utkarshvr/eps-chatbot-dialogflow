import { NativeModules, Platform, StatusBar } from "react-native";

import { Box } from "@gluestack-ui/themed";
import useBGColor from "@/hooks/useBGColor";
import { ReactNode } from "react";

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function App({ children }: { children: ReactNode }) {
  const { bgColor } = useBGColor();

  return (
    <Box flex={1} backgroundColor={bgColor}>
      <StatusBar backgroundColor={bgColor} />
      <Box marginTop={STATUSBAR_HEIGHT} flex={1}>
        {children}
      </Box>
    </Box>
  );
}
