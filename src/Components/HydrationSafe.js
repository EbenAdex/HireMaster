import { useEffect, useState } from "react";

const HydrationSafe = ({ children }) => {
   const [isMounted, setIsMounted] = useState(false);
    
   useEffect(() => {
    setIsMounted(true);
   }, []);

   return isMounted ? children : <div>Loading...</div>;
};
 
export default HydrationSafe;