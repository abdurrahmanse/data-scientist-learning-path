import { Stage, Topic, Resource, Project, CareerPath, Certification, InterviewQuestion, FAQ, GlossaryTerm } from '../types/roadmap.types';

const fetchJson = async <T>(path: string): Promise<T> => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading data from ${path}:`, error);
    return [] as unknown as T;
  }
};

export const dataService = {
  getStages: () => fetchJson<Stage[]>('/src/data/roadmap/stages.json'),
  getTopics: () => fetchJson<Topic[]>('/src/data/roadmap/topics.json'),
  getBooks: () => fetchJson<Resource[]>('/src/data/resources/books.json'),
  getCourses: () => fetchJson<Resource[]>('/src/data/resources/courses.json'),
  getYouTubeChannels: () => fetchJson<Resource[]>('/src/data/resources/youtube.json'),
  getProjects: () => fetchJson<Project[]>('/src/data/resources/projects.json'),
  getCareerPaths: () => fetchJson<CareerPath[]>('/src/data/resources/career_paths.json'),
  getCertifications: () => fetchJson<Certification[]>('/src/data/resources/certifications.json'),
  getInterviewQuestions: () => fetchJson<InterviewQuestion[]>('/src/data/resources/interview_questions.json'),
  getFAQs: () => fetchJson<FAQ[]>('/src/data/resources/faq.json'),
  getGlossary: () => fetchJson<GlossaryTerm[]>('/src/data/glossary/glossary.json'),
};
