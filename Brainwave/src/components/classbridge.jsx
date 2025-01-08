import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

const ClassBridge = () => {
  const [username, setUserName] = useState("");
  const [chatActive, setChatActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [texts] = useState([
    "Code is like humor",
    "Every great developer",
    "Programming is fun",
    "Keep coding!",
    "Learning never stops",
    "Stay curious",
    "Embrace challenges",
    "Think outside the box",
    "Share your knowledge",
    "Never give up"
  ]);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    getMessage();

    socket.on("received-message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    });

    return () => {
      socket.off("received-message");
    };
  }, []);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentTextIndex]);

  const getMessage = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-messages");
      setMessages(result.data.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      const messageData = {
        message: newMessage,
        user: username,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      socket.emit("send-message", messageData);
      setNewMessage("");
    } else {
      alert("Message cannot be empty");
    }
  };

  const handleDelete = async (messageId) => {
    try {
      console.log("Delete message:", messageId); // Check if this log appears in the console

      if (!messageId) return; // Null check

      // Send request to delete message from the server
      await axios.delete(`http://localhost:5000/delete-message/${messageId}`);

      // Update local state to remove the deleted message
      const updatedMessages = messages.filter(
        (message) => message._id !== messageId
      );
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleLogout = () => {
    setChatActive(false);
    setUserName("");
    setMessages([]);
  };

  const handleStartChat = async () => {
    try {
      const response = await axios.get("http://localhost:5000/me");
      const user = response.data;
      if (user.name === username) {
        setChatActive(true);
        getMessage(); // Fetch messages after setting chat as active
      } else {
        alert("Access denied. Please enter a valid username.");
      }
    } catch (error) {
      console.error("Error checking username:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col justify-center items-center text-black"> {/* Set text color to black */}
        {chatActive ? (
          <>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full max-w-md mb-4">
              <h1 className="text-xl font-bold text-center text-black">ClassBridge</h1> {/* Set font color to black */}
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md mb-4"
              onClick={handleLogout}
            >
              Logout
            </button>
            <div
              ref={messageContainerRef}
              className="overflow-auto max-h-96 bg-gray-200 p-4 rounded-lg shadow-md mb-4 w-full max-w-md"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start mb-2 ${
                    message.user === username ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`bg-white p-3 rounded-lg shadow-md max-w-xs ${
                      message.user === username ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <span
                        className="bg-gray-400 text-white px-2 py-1 rounded-full text-sm"
                      >
                        {message.user.charAt(0).toUpperCase()}
                      </span>
                      <span className="font-semibold text-black">{message.user.slice(1)}</span> {/* Set font color to black */}
                    </div>
                    <p className="text-sm text-black">{message.message}</p> {/* Set font color to black */}
                    <p className="text-xs text-gray-500">{message.time}</p>
                    {message.user === username && (
                      <button
                        className="text-red-500 mt-1"
                        onClick={() => handleDelete(message._id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-full max-w-md mb-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 px-4 py-2 rounded-md text-white bg-gray-800" // Set text color to white and background to gray
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
              >
                Send
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center w-full max-w-md">
            <p className="text-lg mb-4 text-center text-white">{texts[currentTextIndex]}</p> {/* Set text color to white */}
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-md mb-4 w-full text-white bg-gray-800" // Set text color to white and background to gray
              placeholder="Type your username..."
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
              onClick={handleStartChat}
            >
              Start Chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassBridge;



