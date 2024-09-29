import useBGColor from "@/hooks/useBGColor";
import { ConversationType } from "@/types/types";
import { Box, Image, Text } from "@gluestack-ui/themed";

type Props = { conversation: ConversationType };

export default function ChatMsg({ conversation }: Props) {
  const { isDark } = useBGColor();

  return (
    <Box style={{ backgroundColor: "transparent" }} gap={"$2"}>
      <Box
        p={"$2"}
        rounded={"$3xl"}
        bgColor={isDark ? "$backgroundDark900" : "$backgroundLight100"}
        style={{ alignSelf: "flex-end", maxWidth: 260 }}
      >
        <Text>{conversation.queryText}</Text>
      </Box>

      <Box flexDirection="row" gap={"$2"} alignItems="flex-start">
        <Box>
          <Image
            source={require("@/assets/icons/chatbot.png")}
            width={24}
            height={24}
            alt="Icon"
          />
        </Box>
        <Box>
          <Text>{conversation.botResponse}</Text>
        </Box>
      </Box>

      <Text size="xs" color={isDark ? "$textLight400" : "$textLight600"}>
        {conversation.time && new Date(conversation.time).toDateString()}
      </Text>
    </Box>
  );
}
