import useBGColor from "@/hooks/useBGColor";
import { Box, Image, Text } from "@gluestack-ui/themed";
import React from "react";

type Props = {};

export default function ChatHeader({}: Props) {
  const { borderColor, isDark } = useBGColor();
  return (
    <Box
      flexDirection="row"
      width={"$full"}
      p="$2"
      gap={"$4"}
      alignItems="center"
    >
      <Box
        alignItems="center"
        justifyContent="center"
        // borderWidth="$2"
        p="$2"
        borderRadius={999}
        style={{
          borderColor,
        }}
      >
        <Image
          source={require("@/assets/icons/chatbot.png")}
          width={24}
          height={24}
          alt="Icon"
        />
      </Box>

      <Box flexDirection="column">
        <Text
          size="lg"
          fontWeight={"$bold"}
          color={isDark ? "$textDark200" : "$textLight800"}
        >
          Chatbot
        </Text>
        <Text size="xs" color={isDark ? "$textDark400" : "$textLight600"}>
          Supporting Agent
        </Text>
      </Box>
    </Box>
  );
}
