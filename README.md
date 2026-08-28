# 🤖 EPS Chatbot

> An AI-powered chatbot built for my school to help students, parents, and visitors get quick answers to common queries.

<p align="center">
  <img src="https://res.cloudinary.com/di7b9ifgh/image/upload/v1727976687/EPS_Chatbot_7e67362c09.png" alt="EPS Chatbot" width="850"/>
</p>

<p align="center">
  <a href="https://www.youtube.com/shorts/95GoLrjgOGY"
     style="display:inline-block; padding:14px 30px; border-radius:14px; background:#111827; color:#ffffff; font-size:16px; font-weight:700; text-decoration:none; border:1px solid #374151;">
    ▶&nbsp;&nbsp; Watch the Demo
  </a>
</p>

---

## 💡 What is EPS Chatbot?

**EPS Chatbot** is a conversational AI assistant built for my school to make accessing information faster and easier.

Instead of manually searching through school resources or asking staff common questions, users can interact with the chatbot and get answers through a simple conversational interface.

The project was built as a practical solution for a real-world environment rather than simply as a chatbot experiment.

---

## ✨ Features

### 💬 Conversational Interface

Interact with the chatbot naturally through a simple, mobile-friendly chat interface.

### 🧠 AI-powered Responses

Uses **Google Dialogflow** to understand user messages and determine the appropriate intent and response.

### 🎯 Intent-based Understanding

The chatbot can identify different types of queries and respond based on the user's intent rather than relying only on exact keyword matches.

### 📱 Mobile Application

Built as a cross-platform mobile application using **React Native + Expo**.

### 🏫 Built for a Real School

The chatbot was designed around actual school-related queries and information, making it a practical application of conversational AI.

---

## 🧠 How It Works

At a high level, the application follows this flow:

```text
┌──────────────┐
│     User     │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│  React Native UI │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│    Dialogflow    │
│ Intent Detection │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Response / Data  │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Chat Response  │
└──────────────────┘
```

Dialogflow handles the conversational understanding, while the mobile application provides the user-facing chat experience.

---

## 🛠️ Tech Stack

* **React Native**
* **Expo**
* **TypeScript**
* **Google Dialogflow**
* **JavaScript / Node.js ecosystem**

---

## 🎥 Demo

Watch the chatbot in action:

<p align="center">
  <a href="https://www.youtube.com/shorts/95GoLrjgOGY">
    <img src="https://res.cloudinary.com/di7b9ifgh/image/upload/v1727976687/EPS_Chatbot_7e67362c09.png" alt="Watch EPS Chatbot Demo" width="700"/>
  </a>
</p>

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

* Node.js installed
* Expo CLI / Expo environment
* A Google Dialogflow project
* The required Dialogflow credentials

### Installation

Clone the repository:

```bash
git clone https://github.com/Utkarshvr/eps-chatbot-dialogflow.git
cd eps-chatbot-dialogflow
```

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

You can then run the application on an Android emulator, iOS simulator, or a compatible physical device.

---

## 🔐 Configuration

The project requires Dialogflow credentials to communicate with the chatbot service.

**Never commit your own service account credentials or private keys to GitHub.**

Create your own Dialogflow project and configure the required credentials locally before running the application.

---

## 🌱 Open Source

This project is **open source** and available for anyone interested in learning from, improving, or adapting the implementation.

Feel free to:

* ⭐ Star the repository
* 🍴 Fork the project
* 🐛 Open issues
* 💡 Suggest improvements
* 🔧 Submit pull requests

If you build something interesting with it, I'd love to see it.

---

## 🎯 Why I Built It

I wanted to explore how conversational AI could be applied to an actual environment rather than just building another generic chatbot demo.

Building this for my school gave me the opportunity to work with:

* Conversational AI
* Intent recognition
* Mobile application development
* API/service integration
* Real-world user requirements

It was one of my early projects where **AI wasn't just the technology being experimented with — it was part of an actual product experience.**

---

## 👨‍💻 About

Built by **Utkarsh Verma**.

I'm a developer who enjoys turning ideas into real products and experimenting with technologies across **AI, web, and mobile development**.

**Portfolio:** https://uvcodes.vercel.app
**GitHub:** https://github.com/Utkarshvr

---

## 📄 License

This project is open source. See the `LICENSE` file for details.
