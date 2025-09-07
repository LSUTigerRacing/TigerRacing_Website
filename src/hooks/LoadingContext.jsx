import { createContext, useContext, useState} from 'react';

const LoadingContext = createContext();

export const useLoadingComplete = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoadingComplete needs to be used in a LoadingProvider!');
    }
    return context;
}

export const LoadingProvider = ({children}) => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    const markLoadingComplete = () => setIsLoadingComplete(true)
    const markAnimationComplete = () => setIsAnimationComplete(true)

    const value = {
        isLoadingComplete,
        isAnimationComplete,
        isFullyComplete: isLoadingComplete && isAnimationComplete,
        markLoadingComplete,
        markAnimationComplete
    };

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
}