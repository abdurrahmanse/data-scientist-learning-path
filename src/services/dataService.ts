import { Stage, Topic, Resource, Project, CareerPath, Certification, InterviewQuestion, FAQ, GlossaryTerm } from '../types/roadmap.types';

import stagesData from '../data/roadmap/stages.json';
import topicsData from '../data/roadmap/topics.json';
import booksData from '../data/resources/books.json';
import coursesData from '../data/resources/courses.json';
import youtubeData from '../data/resources/youtube.json';
import projectsData from '../data/resources/projects.json';
import careerPathsData from '../data/resources/career_paths.json';
import certificationsData from '../data/resources/certifications.json';
import interviewQuestionsData from '../data/resources/interview_questions.json';
import faqData from '../data/resources/faq.json';
import glossaryData from '../data/glossary/glossary.json';

// We simulate async fetching to keep the API consistent, 
// even though Vite bundles the JSON synchronously.
const simulateFetch = async <T>(data: any): Promise<T> => {
  return Promise.resolve(data as unknown as T);
};

export const dataService = {
  getStages: () => simulateFetch<Stage[]>(stagesData),
  getTopics: () => simulateFetch<Topic[]>(topicsData),
  getBooks: () => simulateFetch<Resource[]>(booksData),
  getCourses: () => simulateFetch<Resource[]>(coursesData),
  getYouTubeChannels: () => simulateFetch<Resource[]>(youtubeData),
  getProjects: () => simulateFetch<Project[]>(projectsData),
  getCareerPaths: () => simulateFetch<CareerPath[]>(careerPathsData),
  getCertifications: () => simulateFetch<Certification[]>(certificationsData),
  getInterviewQuestions: () => simulateFetch<InterviewQuestion[]>(interviewQuestionsData),
  getFAQs: () => simulateFetch<FAQ[]>(faqData),
  getGlossary: () => simulateFetch<GlossaryTerm[]>(glossaryData),
};
