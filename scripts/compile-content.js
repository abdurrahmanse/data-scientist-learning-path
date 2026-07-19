import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/content/topics');
const OUTPUT_FILE = path.join(__dirname, '../src/data/roadmap/topics.json');

// Ensure output directory exists
const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Check if content directory exists
if (!fs.existsSync(CONTENT_DIR)) {
  console.log(`Content directory not found at ${CONTENT_DIR}. Creating it...`);
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

const files = fs.readdirSync(CONTENT_DIR).filter(file => file.endsWith('.md'));
const topics = [];

files.forEach(file => {
  const filePath = path.join(CONTENT_DIR, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Parse frontmatter and markdown body
  const { data, content } = matter(fileContent);
  
  topics.push({
    id: data.id || file.replace('.md', ''),
    stageId: data.stageId || '',
    title: data.title || 'Untitled',
    description: data.description || '',
    estimatedMinutes: data.estimatedMinutes || 10,
    difficulty: data.difficulty || 'Beginner',
    content: content.trim()
  });
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(topics, null, 2));
console.log(`Successfully compiled ${topics.length} topics into topics.json`);
