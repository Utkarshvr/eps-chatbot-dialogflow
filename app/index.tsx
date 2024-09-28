import { Box } from "@gluestack-ui/themed";
import React from "react";
import useBGColor from "../hooks/useBGColor";
import { Heading } from "@gluestack-ui/themed";
import InitializeChatCard from "@/components/InitializeChatCard";

export default function IndexScreen() {
  const { bgColor } = useBGColor();

  return (
    <Box flex={1} p="$2" bgColor={bgColor}>
      <Box gap={"$2"}>
        <Heading>Test</Heading>
        <InitializeChatCard />
      </Box>
    </Box>
  );
}
