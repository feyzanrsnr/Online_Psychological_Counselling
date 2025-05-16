import { useState, useEffect } from "react";

export default function useBreakpoint(){

    const [breakpoint, setBreakpoint] = useState((getBreakpoint()))

    function getBreakpoint(){
        const width = window.innerWidth

        return{
            isMobile: width < 768,
            isTablet: width >= 768 && width < 1024,
            isDesktop: width >= 1024,
            width: width,
        }
    }

    useEffect(() => {
        function handleResize(){
            setBreakpoint(getBreakpoint())
        }

        window.addEventListener('resize', handleResize)

        //ilk mount'ta da doğru değerleri almak için çağrılır
        handleResize()

        return () => window.removeEventListener('resize',handleResize)

    },[])

    return breakpoint
}