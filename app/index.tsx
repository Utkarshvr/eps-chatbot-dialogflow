import { Box } from "@gluestack-ui/themed";
import useBGColor from "../hooks/useBGColor";

import ChatHeader from "@/components/ChatHeader";
import ChatForm from "@/components/ChatForm";
import ChatConversations from "@/components/ChatConversations";

export default function IndexScreen() {
  const { bgColor } = useBGColor();

  return (
    <Box bgColor={bgColor} flex={1}>
      <ChatHeader />

      <ChatConversations />

      <ChatForm />
    </Box>
  );
}
