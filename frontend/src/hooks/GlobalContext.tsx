import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingState {
  isLoading: boolean;
}

// Define the context type
interface LoadingContextType {
  loadingState: LoadingState;
  startLoading: () => void;
  finishLoading: () => void;
}

// Create context with default values
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Initial state
const initialState: LoadingState = {
  isLoading: false
};

// Provider component
interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
    const [loadingState, setLoadingState] = useState<LoadingState>(initialState);

    const startLoading = () => {
        setLoadingState({
            isLoading: true
        })
    }

    //change timeout based on how long the loading animatino is
    const finishLoading = () => {
        setTimeout(() => {
            setLoadingState({
                isLoading: false
            })
        }, 400)

    }

    return (
        <LoadingContext.Provider value={{loadingState, startLoading, finishLoading }}>
        {children}
        </LoadingContext.Provider>
    );
};

// Custom hook for using the loading state
export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};