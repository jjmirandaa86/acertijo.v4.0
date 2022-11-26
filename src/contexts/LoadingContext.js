import { createContext, useState } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const data = { loading, setLoading };

  return (
    <LoadingContext.Provider value={data}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider };

export default LoadingContext;