import React from "react";
import useBGColor from "@/hooks/useBGColor";
import { ConversationType } from "@/types/types";
import { LinkPreview } from "@flyerhq/react-native-link-preview";
import { Box, Image, Text, Link } from "@gluestack-ui/themed";

type Props = { conversation: ConversationType };

function getFileNameFromUrl(url: string) {
  // Split the URL by '/' and get the last element
  const parts = url.split("/");
  const fileName = parts.pop(); // Extracts the last part (filename)

  return fileName;
}

export default function ChatMsg({ conversation }: Props) {
  const { isDark } = useBGColor();

  // Function to extract the first link from the text
  const extractLink = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const matches = text.match(urlRegex);
    return matches ? matches[0] : null;
  };

  const link = conversation.botResponse
    ? extractLink(conversation.botResponse)
    : null;
  const textWithoutLink = conversation.botResponse
    ? conversation.botResponse.replace(link || "", "")
    : "";

  const isLinkPDF = link?.includes(".pdf");

  return (
    <Box style={{ backgroundColor: "transparent" }} gap={"$2"} mb={"$8"}>
      <Box
        p={"$2"}
        rounded={"$3xl"}
        bgColor={isDark ? "$backgroundDark900" : "$backgroundLight100"}
        style={{ alignSelf: "flex-end", maxWidth: 260 }}
      >
        <Text size="sm">{conversation.queryText}</Text>
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
        {conversation.isloading && <Text>{"Loading..."}</Text>}
        <Box>
          {/* Show text without the link */}
          <Text size="sm">{textWithoutLink}</Text>

          {/* Show link if it exists */}
          {link && (
            <Link href={link} isExternal>
              <Text size="sm" color="$blue400">
                {isLinkPDF ? getFileNameFromUrl(link) : link}
              </Text>
            </Link>
          )}
        </Box>
      </Box>

      <Text size="xs" color={isDark ? "$textLight400" : "$textLight600"}>
        {conversation.time &&
          new Date(conversation.time).toLocaleDateString() +
            " " +
            new Date(conversation.time).toLocaleTimeString()}
      </Text>
    </Box>
  );
}
