// import React, { useState } from 'react';
// import axios from 'axios';
// import './Chatbot.css'; // Ensure to import the CSS file

// const Home = () => {
//     const [chatVisible, setChatVisible] = useState(false);
//     const [messages, setMessages] = useState([]);
//     const [userInput, setUserInput] = useState('');

//     const toggleChat = () => {
//         setChatVisible(!chatVisible);
//     };

//     const sendMessage = async (event) => {
//         event.preventDefault();
//         if (userInput.trim() === '') return;

//         const userMessage = userInput;
//         setMessages([...messages, { type: 'user', text: userMessage }]);
//         setUserInput('');

//         try {
//             const response = await axios.post('http://localhost:4000/chat', { userInput: userMessage });
//             const botMessage = response.data.response;
//             setMessages([...messages, { type: 'user', text: userMessage }, { type: 'bot', text: botMessage }]);
//         } catch (error) {
//             console.error('Error:', error);
//             setMessages([...messages, { type: 'user', text: userMessage }, { type: 'bot', text: 'Error: Unable to fetch response. Please try again later.' }]);
//         }
//     };

//     return (
//         <div>
//             <div id="chatbot-icon" onClick={toggleChat}>💬</div>
//             {chatVisible && (
//                 <div id="chat-container" style={{ display: chatVisible ? 'flex' : 'none' }}>
//                     {/* <div id="chat-container"> */}
//                     <header>
//                         <h2>AI Chatbot</h2>
//                         <button id="close-chatbot" onClick={toggleChat} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'red' }}>&times;</button>
//                     </header>
//                     <div id="chat-history">
//                         {messages.map((message, index) => (
//                             <div key={index} className={message.type === 'user' ? 'user-message' : 'bot-message'}>
//                                 {message.text}
//                             </div>
//                         ))}
//                     </div>
//                     <form id="chat-form" onSubmit={sendMessage}>
//                         <input type="text" id="user-input" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Enter your message" />
//                         <button type="submit">Send</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Home;








import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Ensure to import the CSS file
import './Home.css'; // Additional CSS for the homepage
import { background } from '@chakra-ui/react';

const Home = () => {
    const [chatVisible, setChatVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const toggleChat = () => {
        setChatVisible(!chatVisible);
    };

    const sendMessage = async (event) => {
        event.preventDefault();
        if (userInput.trim() === '') return;

        const userMessage = userInput;
        setMessages([...messages, { type: 'user', text: userMessage }]);
        setUserInput('');

        try {
            const response = await axios.post('http://localhost:4000/chat', { userInput: userMessage });
            const botMessage = response.data.response;
            setMessages([...messages, { type: 'user', text: userMessage }, { type: 'bot', text: botMessage }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages([...messages, { type: 'user', text: userMessage }, { type: 'bot', text: 'Error: Unable to fetch response. Please try again later.' }]);
        }
    };

    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to Mobile Tech</h1>
            </header>
            <section className="content">
                <h2>Latest in Mobile Technology</h2>
                <p>Discover the newest advancements and trends in mobile technology. From the latest smartphones to cutting-edge mobile applications, stay informed about everything in the mobile world.</p>
                <h2>Top Features</h2>
                <ul>
                    <li>Innovative Designs</li>
                    <li>High-Performance Processors</li>
                    <li>Advanced Camera Systems</li>
                    <li>Long-lasting Battery Life</li>
                    <li>Seamless Connectivity</li>
                    <li>Innovative Designs</li>
                    <li>Innovative Designs</li>
                    <li>Innovative Designs</li>
                </ul>
            </section>
            <div id="chatbot-icon" onClick={toggleChat}>💬</div>
            {chatVisible && (
                <div id="chat-container" style={{ display: chatVisible ? 'flex' : 'none' }}>
                    <header>
                        <h1 style={{color:"green"}}>Customer Support</h1>
                        <button id="close-chatbot" onClick={toggleChat} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'green' }}>&times;</button>
                    </header>
                    <div id="chat-history">
                        {messages.map((message, index) => (
                            <div key={index} className={message.type === 'user' ? 'user-message' : 'bot-message'}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <form id="chat-form" onSubmit={sendMessage}>
                        <input type="text" id="user-input" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Enter your message" style={{padding:7,marginLeft:5,color:"black"}} />
                        <button type="submit" style={{background:"green",padding:7,marginLeft:5}}>Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Home;