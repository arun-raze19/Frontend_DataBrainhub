import React, { useEffect } from "react";
import "./style.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

let apiKey;
let model;

// Initialize the API key and the model
function getAPIKey() {
  apiKey = JSON.parse(localStorage.getItem("apiKey"));
  if (apiKey == null) {
    apiKey = "AIzaSyD_rufPmQsH3OoCTbtUgw4M6meT5m6laXE"; // Default API key
    localStorage.setItem("apiKey", JSON.stringify(apiKey));
  }
  let genai = new GoogleGenerativeAI(apiKey);
  model = genai.getGenerativeModel({ model: "gemini-pro" });
}
getAPIKey();

let chatHistory = [
  {
    role: "user",
    parts: [{ text: "Act as a friendly assistant. Keep responses concise. OK?" }],
  },
  {
    role: "model",
    parts: [{ text: "Absolutely, got it! Just let me know what you need help with." }],
  },
];

// Utility functions for handling chat messages and formatting
function convertMarkdownToHTML(markdownText) {
  markdownText = markdownText.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  markdownText = markdownText.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  markdownText = markdownText.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  markdownText = markdownText.replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>');
  markdownText = markdownText.replace(/\*(.*)\*/g, '<em>$1</em>');
  markdownText = markdownText.replace(/^\s*-\s(.*)$/gim, '<ul><li>$1</li></ul>');
  markdownText = markdownText.replace(/\n/g, '<br>');
  return markdownText;
}

function updateChatHistory(role = "", msg = "") {
  const chatItemObj = {
    role: role,
    parts: [{ text: msg }],
  };
  chatHistory.push(chatItemObj);
}

function showError(txt = "") {
  const errorMsg = document.querySelector(".errorMsg");
  errorMsg.parentElement.classList.add("show");
  errorMsg.textContent = txt;
}

function hideError() {
  const errorMsg = document.querySelector(".errorMsg");
  errorMsg.textContent = "";
  errorMsg.parentElement.classList.remove("show");
}

function getTime() {
  const date = new Date();
  return `${date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;
}

function makeMsgID() {
  const id = Math.floor(Math.random() * 1000000);
  return `${id}`;
}

function makeUserMessageHTML(msg) {
  return `<div class="msg right-msg user-${makeMsgID()}">
    <div class="msg-img"></div>
    <div class="msg-bubble">
      <div class="msg-info">
        <div class="msg-info-name">User</div>
        <div class="msg-info-time">${getTime()}</div>
      </div>
      <div class="msg-text">${msg}</div>
    </div>
  </div>`;
}

function makeAIMessageHTML(id) {
  return `<div class="msg left-msg ai-${id}">
    <div class="msg-img"></div>
    <div class="msg-bubble">
      <div class="msg-info">
        <div class="msg-info-name">DBH BOT</div>
        <div class="msg-info-time">${getTime()}</div>
      </div>
      <div class="loader show"></div>
      <div class="msg-text hide"></div>
    </div>
  </div>`;
}

// Function to generate the AI response
async function generateAIMessage(ele, userMsg = "") {
  const aiMessageEle = ele.querySelector(".msg-text");
  const loaderEle = ele.querySelector(".loader");
  let text = "";

  try {
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 200,
      },
    });

    const result = await chat.sendMessage(userMsg);

    // Check if response is valid and contains a 'text' method
    const response = result.response;
    if (response && typeof response.text === "function") {
      text = await response.text();
    } else {
      text = "Error: Unable to retrieve a valid response.";
    }

    // Handle empty text response
    if (text === "") {
      text = "The response exceeds the maximum token limit of 200.";
      chatHistory[chatHistory.length - 1]?.parts.push({ text });
    }

  } catch (err) {
    text = "Please check your API key or internet connection. The page will reload in 4 seconds.";
    localStorage.removeItem("apiKey");
    setTimeout(() => {
      window.location.reload();
    }, 6000);
  }

  // Display the AI message
  aiMessageEle.innerHTML = convertMarkdownToHTML(text);
  aiMessageEle.classList.remove("hide");
  loaderEle.classList.remove("show");
}

// Function to handle sending a message
async function getResponse(userMsg) {
  const aiMsgID = makeMsgID();
  const html = makeAIMessageHTML(aiMsgID);
  const chatsContainer = document.querySelector(".chats-container");
  chatsContainer.insertAdjacentHTML("beforeend", html);
  chatsContainer.scrollTop = chatsContainer.scrollHeight;
  const aiChatEle = document.querySelector(`.ai-${aiMsgID}`);
  await generateAIMessage(aiChatEle, userMsg);
}

function sendMessage(e) {
  e.preventDefault();
  const messageInputArea = document.querySelector(".msger-input");
  const messageText = messageInputArea.value;
  const chatsContainer = document.querySelector(".chats-container");

  if (messageText === "") {
    showError("Please enter your message.");
    return;
  }

  hideError();
  const html = makeUserMessageHTML(messageText);
  chatsContainer.insertAdjacentHTML("beforeend", html);
  chatsContainer.scrollTop = chatsContainer.scrollHeight;
  messageInputArea.value = ``;
  
  setTimeout(() => {
    getResponse(messageText);
  }, 1000);
}

export default function Chatbot() {
  useEffect(() => {
    const sentMessageBtn = document.querySelector(".msger-send-btn");
    sentMessageBtn.addEventListener("click", sendMessage);

    return () => {
      sentMessageBtn.removeEventListener("click", sendMessage);
    };
  }, []);

  return (
    <div id="app">
      <div className="chat-app-container">
        <header className="header1">
          <div className="img-container">
            <img src="../assets/ai-background.webp"  />
          </div>
          <h1>DBH Chatbot</h1>
        </header>

        <main className="msger-chat">
          <div className="chats-container"></div>
        </main>

        <form className="msger-inputarea">
          <input type="text" className="msger-input" placeholder="Enter your message..." />
          <button type="submit" className="msger-send-btn">Send</button>
        </form>

        <div className="errorMsg-container">
          <span className="errorMsg"></span>
        </div>
      </div>
    </div>
  );
}




