import useBGColor from "@/hooks/useBGColor";
import {
  Box,
  Center,
  Image,
  ScrollView,
  Text,
  View,
} from "@gluestack-ui/themed";
import { useRef } from "react";
import InitializeChatCard from "./InitializeChatCard";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView as ScrollViewNative,
} from "react-native";
import ChatMsg from "./ChatMsg";
import {
  useConversation,
  useConversationAPI,
} from "@/context/ConversationContext";

type Props = {};

const screenDimensions = Dimensions.get("window");

export default function ChatConversations({}: Props) {
  const { bgColor } = useBGColor();

  const { convPermission, conversations, isLoading } = useConversation();
  const { onStartChatPress } = useConversationAPI();

  const scrollViewRef = useRef<ScrollViewNative | null>();

  if (isLoading)
    return (
      <Box
        flex={1}
        p="$2"
        bgColor={bgColor}
        alignItems="center"
        justifyContent="center"
      >
        <ActivityIndicator size={"large"} color={"#3b82f6"} />
      </Box>
    );

  if (convPermission !== "allowed")
    return (
      <Center
        position="absolute"
        top={0}
        left={0}
        zIndex={999999999999999}
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          width: screenDimensions.width,
          height: screenDimensions.height,
        }}
      >
        <InitializeChatCard onStartChatPress={onStartChatPress} />
      </Center>
    );

  if (conversations.length === 0)
    return (
      <View
        bgColor={bgColor}
        flex={1}
        p={"$4"}
        height={"$full"}
        alignItems="center"
        justifyContent="center"
      >
        <Box alignItems="center" justifyContent="center">
          <Image
            source={require("@/assets/icons/chatbot.png")}
            width={72}
            height={72}
            alt="Icon"
          />
          <Text size="sm" color="$textLight400">
            Start your first conversation with EPS Chatbot!
          </Text>
        </Box>
      </View>
    );

  return (
    <ScrollView
      bgColor={bgColor}
      flex={1}
      px={"$4"}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current &&
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
    >
      {conversations.map((conv) => (
        <ChatMsg key={conv.uuid} conversation={conv} />
      ))}
      {/* <ChatMsg
        conversation={{
          queryText: `Hello`,
          time: "Sun Sep 29 2024 19:46:07 GMT+0530 (India Standard Time)",
          botResponse: "Hello! How can I help you?",
        }}
      /> */}
    </ScrollView>
  );
}
