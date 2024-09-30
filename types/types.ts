export interface ConversationType {
  uuid: string;
  queryText: string;
  botResponse: string | null;
  time: string;
  isloading?: boolean;
}
