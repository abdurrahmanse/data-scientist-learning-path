import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { dataService } from '../services/dataService';
import { Topic } from '../types/roadmap.types';

interface ProgressContextType {
  completedTopicIds: string[];
  toggleTopic: (topicId: string) => void;
  isTopicCompleted: (topicId: string) => boolean;
  totalTopics: number;
  completedPercentage: number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [completedTopicIds, setCompletedTopicIds] = useLocalStorage<string[]>('ds-path-progress', []);
  const [totalTopics, setTotalTopics] = useState(0);

  useEffect(() => {
    dataService.getTopics().then(topics => {
      setTotalTopics(topics.length);
    });
  }, []);

  const toggleTopic = (topicId: string) => {
    setCompletedTopicIds(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId) 
        : [...prev, topicId]
    );
  };

  const isTopicCompleted = (topicId: string) => completedTopicIds.includes(topicId);

  const completedPercentage = totalTopics > 0 
    ? Math.round((completedTopicIds.length / totalTopics) * 100) 
    : 0;

  return (
    <ProgressContext.Provider value={{
      completedTopicIds,
      toggleTopic,
      isTopicCompleted,
      totalTopics,
      completedPercentage
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
