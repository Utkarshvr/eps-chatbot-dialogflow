import useBGColor from "@/hooks/useBGColor";
import {
  Box,
  Button,
  ButtonIcon,
  Image,
  Text,
  ThreeDotsIcon,
} from "@gluestack-ui/themed";
import React from "react";

type Props = {};

export default function ChatHeader({}: Props) {
  const { borderColor, isDark } = useBGColor();
  return (
    <Box
      flexDirection="row"
      width={"$full"}
      p="$2"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box flexDirection="row" gap={"$4"} alignItems="center">
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
            EPS Chatbot
          </Text>
          <Text size="xs" color={isDark ? "$textDark400" : "$textLight600"}>
            Supporting Agent
          </Text>
        </Box>
      </Box>

      <Button
        variant="link"
        size="lg"
        borderRadius={"$full"}
        action="secondary"
        mr={"$2"}
      >
        <ButtonIcon
          as={ThreeDotsIcon}
          h={"$5"}
          w={"$5"}
          style={{ transform: [{ rotate: "90deg" }] }}
        />
      </Button>
    </Box>
  );
}
