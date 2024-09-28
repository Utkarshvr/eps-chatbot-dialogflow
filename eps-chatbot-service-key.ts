const dialogflowConfig = {
  type: "service_account",
  project_id: "eps-chatbot-fkgi",
  private_key_id: "3fc472ba26a40d791ba0b5ea97b9361f6fa83616",
  private_key: process.env.EXPO_PUBLIC_DIALOG_FLOW_API_KEY,
  client_email: "eps-chatbot@eps-chatbot-fkgi.iam.gserviceaccount.com",
  client_id: "116170067421966028928",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/eps-chatbot%40eps-chatbot-fkgi.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

export default dialogflowConfig;
