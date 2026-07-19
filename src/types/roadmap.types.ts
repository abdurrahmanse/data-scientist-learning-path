export interface Stage {
  id: string;
  order: number;
  title: string;
  description: string;
  slug: string;
  topicIds: string[];
}

export interface Topic {
  id: string;
  stageId: string;
  title: string;
  description?: string;
  estimatedMinutes?: number;
  contentMd: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  skillsGained: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface Resource {
  id: string;
  title: string;
  authorOrCreator: string;
  url: string;
  type: 'Book' | 'Course' | 'YouTube' | 'Project' | 'Other';
  price: 'Free' | 'Paid';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  relatedTopicIds: string[];
  coverImage?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  datasetUrl?: string;
  techStackIds: string[];
  relatedStageId: string;
}

export interface CareerPath {
  id: string;
  role: string;
  description: string;
  averageSalary: string;
  requiredStageIds: string[];
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  url: string;
  cost: string;
  relatedStageIds: string[];
}

export interface InterviewQuestion {
  id: string;
  category: string;
  question: string;
  answerMd: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface FAQ {
  id: string;
  question: string;
  answerMd: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  relatedTerms: string[];
}
