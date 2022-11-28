import { createContext, useState } from "react";

const MessageContext = createContext();

const MessageProvider = ({ children }) => {

  const initialState = {
    title: "",
    hour: "",
    messageBody: "",
    onVisible: false
  };

  const [message, setMessage] = useState(initialState);

  const handleChangeMessage = (title, hour, messageBody, onVisible) => {
    setMessage({
      title,
      hour,
      messageBody,
      onVisible
    });
    handleShowMessage();
  };

  const handleShowMessage = () => {
    setTimeout(() => {
      setMessage(initialState);
    }, 5000);
  };

  const data = { message, handleChangeMessage };

  return (
    <MessageContext.Provider value={data}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageProvider };

export default MessageContext;