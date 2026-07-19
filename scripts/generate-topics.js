import fs from 'fs';
import path from 'path';
import { customTopicContent } from './custom-content.js';

const TOPICS_DIR = path.resolve(process.cwd(), 'src/content/topics');

if (fs.existsSync(TOPICS_DIR)) {
  fs.rmSync(TOPICS_DIR, { recursive: true, force: true });
}
fs.mkdirSync(TOPICS_DIR, { recursive: true });

// Master curriculum definition for all 120 topics
const curriculum = {
  // Stage 0: Programming & Fundamentals
  "0": [
    { id: "topic-0-1", title: "Python Basics & Data Structures", difficulty: "Beginner", time: "10 hours", skills: ["Python", "Variables", "Lists", "Dictionaries"] },
    { id: "topic-0-2", title: "Object-Oriented Programming (OOP) in Python", difficulty: "Beginner", time: "8 hours", skills: ["Classes", "Inheritance", "Polymorphism"] },
    { id: "topic-0-3", title: "Python Virtual Environments & Package Management", difficulty: "Beginner", time: "4 hours", skills: ["pip", "conda", "venv"] },
    { id: "topic-0-4", title: "Git & GitHub for Version Control", difficulty: "Beginner", time: "6 hours", skills: ["Git", "GitHub", "Branching", "Merging"] },
    { id: "topic-0-5", title: "Command Line Basics & Shell Scripting", difficulty: "Beginner", time: "5 hours", skills: ["Bash", "CLI", "File Navigation"] },
    { id: "topic-0-6", title: "Advanced Python (Decorators, Generators)", difficulty: "Intermediate", time: "8 hours", skills: ["Decorators", "Generators", "Context Managers"] },
    { id: "topic-0-7", title: "Error Handling & Exception Management", difficulty: "Beginner", time: "4 hours", skills: ["Exceptions", "try/except", "Logging"] },
    { id: "topic-0-8", title: "Code Formatting & Linting", difficulty: "Beginner", time: "4 hours", skills: ["Flake8", "Black", "Pylint"] },
    { id: "topic-0-9", title: "Writing Unit Tests in Python", difficulty: "Intermediate", time: "8 hours", skills: ["pytest", "unittest", "TDD"] },
    { id: "topic-0-10", title: "Markdown & Documentation", difficulty: "Beginner", time: "3 hours", skills: ["Sphinx", "Markdown", "Jupyter"] }
  ],
  // Stage 1: Mathematics for Data Science
  "1": [
    { id: "topic-1-1", title: "Linear Algebra Fundamentals", difficulty: "Intermediate", time: "12 hours", skills: ["Vectors", "Matrices", "Dot Product"] },
    { id: "topic-1-2", title: "Advanced Linear Algebra", difficulty: "Intermediate", time: "15 hours", skills: ["Eigenvalues", "SVD", "PCA"] },
    { id: "topic-1-3", title: "Differential Calculus & Gradients", difficulty: "Intermediate", time: "10 hours", skills: ["Derivatives", "Chain Rule", "Gradients"] },
    { id: "topic-1-4", title: "Integral Calculus & Optimization", difficulty: "Intermediate", time: "10 hours", skills: ["Integrals", "Optimization", "Minima/Maxima"] },
    { id: "topic-1-5", title: "Discrete Mathematics for Computer Science", difficulty: "Intermediate", time: "8 hours", skills: ["Logic", "Set Theory", "Combinatorics"] },
    { id: "topic-1-6", title: "Probability Density Functions (PDF) & CDF", difficulty: "Intermediate", time: "8 hours", skills: ["PDF", "CDF", "Distributions"] },
    { id: "topic-1-7", title: "Information Theory", difficulty: "Advanced", time: "10 hours", skills: ["Entropy", "Cross-Entropy", "KL Divergence"] },
    { id: "topic-1-8", title: "Advanced Optimization Techniques", difficulty: "Advanced", time: "12 hours", skills: ["Gradient Descent", "Newtons Method"] },
    { id: "topic-1-9", title: "Graph Theory Basics", difficulty: "Intermediate", time: "8 hours", skills: ["Nodes", "Edges", "Adjacency"] },
    { id: "topic-1-10", title: "Taylor Series & Function Approximation", difficulty: "Advanced", time: "10 hours", skills: ["Taylor Series", "Maclaurin Series"] }
  ],
  // Stage 2: Statistics & Probability
  "2": [
    { id: "topic-2-1", title: "Descriptive Statistics & Data Distributions", difficulty: "Beginner", time: "8 hours", skills: ["Mean/Median/Mode", "Variance", "Normal Distribution"] },
    { id: "topic-2-2", title: "Probability Theory & Bayes' Theorem", difficulty: "Intermediate", time: "10 hours", skills: ["Probability", "Conditional Probability", "Bayes Theorem"] },
    { id: "topic-2-3", title: "Inferential Statistics & Hypothesis Testing", difficulty: "Intermediate", time: "12 hours", skills: ["P-values", "T-tests", "ANOVA"] },
    { id: "topic-2-4", title: "A/B Testing & Experimental Design", difficulty: "Advanced", time: "10 hours", skills: ["A/B Testing", "Sample Size", "Statistical Power"] },
    { id: "topic-2-5", title: "Statistical Simulation & Bootstrap Methods", difficulty: "Advanced", time: "8 hours", skills: ["Bootstrapping", "Monte Carlo", "Resampling"] },
    { id: "topic-2-6", title: "Markov Chains & Hidden Markov Models", difficulty: "Advanced", time: "12 hours", skills: ["Markov Chains", "HMMs", "Transition Matrices"] },
    { id: "topic-2-7", title: "Time Series Statistics", difficulty: "Advanced", time: "10 hours", skills: ["Autocorrelation", "Stationarity"] },
    { id: "topic-2-8", title: "Non-Parametric Statistics", difficulty: "Intermediate", time: "8 hours", skills: ["Mann-Whitney", "Kruskal-Wallis"] },
    { id: "topic-2-9", title: "Bayesian Inference & MCMC", difficulty: "Advanced", time: "15 hours", skills: ["Bayesian Stats", "MCMC", "PyMC3"] },
    { id: "topic-2-10", title: "Survival Analysis", difficulty: "Advanced", time: "10 hours", skills: ["Kaplan-Meier", "Cox Proportional Hazards"] }
  ],
  // Stage 3: Data Manipulation & Analysis
  "3": [
    { id: "topic-3-1", title: "NumPy: Numerical Computing in Python", difficulty: "Beginner", time: "8 hours", skills: ["NumPy", "Arrays", "Vectorization"] },
    { id: "topic-3-2", title: "Pandas: Series, DataFrames, and Indexing", difficulty: "Beginner", time: "10 hours", skills: ["Pandas", "DataFrames", "Indexing"] },
    { id: "topic-3-3", title: "Advanced Pandas: Grouping, Merging, and Reshaping", difficulty: "Intermediate", time: "12 hours", skills: ["GroupBy", "Merge/Join", "Pivot Tables"] },
    { id: "topic-3-4", title: "Handling Missing Data & Outliers", difficulty: "Intermediate", time: "8 hours", skills: ["Imputation", "Outlier Detection", "Data Cleaning"] },
    { id: "topic-3-5", title: "Time Series Analysis with Pandas", difficulty: "Advanced", time: "10 hours", skills: ["Datetime", "Resampling", "Rolling Windows"] },
    { id: "topic-3-6", title: "High-Performance Pandas", difficulty: "Advanced", time: "10 hours", skills: ["Vectorization", "Cython", "Numba"] },
    { id: "topic-3-7", title: "Regular Expressions (RegEx)", difficulty: "Intermediate", time: "8 hours", skills: ["RegEx", "Text Cleaning", "Pattern Matching"] },
    { id: "topic-3-8", title: "Web Scraping Basics", difficulty: "Intermediate", time: "10 hours", skills: ["BeautifulSoup", "Requests", "HTML"] },
    { id: "topic-3-9", title: "Working with APIs & JSON", difficulty: "Intermediate", time: "6 hours", skills: ["REST APIs", "JSON", "Requests"] },
    { id: "topic-3-10", title: "Handling Large Datasets", difficulty: "Advanced", time: "12 hours", skills: ["Dask", "Vaex", "Out-of-Core Processing"] }
  ],
  // Stage 4: Data Visualization (EDA)
  "4": [
    { id: "topic-4-1", title: "Matplotlib: Core Visualization Concepts", difficulty: "Beginner", time: "6 hours", skills: ["Matplotlib", "Figures", "Axes"] },
    { id: "topic-4-2", title: "Seaborn: Statistical Data Visualization", difficulty: "Beginner", time: "8 hours", skills: ["Seaborn", "Statistical Plots", "Color Palettes"] },
    { id: "topic-4-3", title: "Interactive Visualizations with Plotly & Bokeh", difficulty: "Intermediate", time: "10 hours", skills: ["Plotly", "Interactive Charts", "Bokeh"] },
    { id: "topic-4-4", title: "Geographical Data Visualization", difficulty: "Intermediate", time: "8 hours", skills: ["Folium", "GeoPandas", "Maps"] },
    { id: "topic-4-5", title: "Principles of Dashboard Design", difficulty: "Intermediate", time: "6 hours", skills: ["Dashboards", "Data Storytelling", "UI/UX"] },
    { id: "topic-4-6", title: "Network & Graph Visualization", difficulty: "Intermediate", time: "8 hours", skills: ["NetworkX", "Graph Viz"] },
    { id: "topic-4-7", title: "Advanced Color Theory & Accessibility", difficulty: "Beginner", time: "4 hours", skills: ["Color Theory", "Accessibility", "A11y"] },
    { id: "topic-4-8", title: "Building Web Dashboards with Streamlit", difficulty: "Intermediate", time: "10 hours", skills: ["Streamlit", "Web Apps"] },
    { id: "topic-4-9", title: "Interactive Apps with Dash", difficulty: "Advanced", time: "12 hours", skills: ["Dash", "Plotly Apps", "Callbacks"] },
    { id: "topic-4-10", title: "D3.js Concepts for Data Scientists", difficulty: "Expert", time: "15 hours", skills: ["D3.js", "SVG", "Data Binding"] }
  ],
  // Stage 5: SQL & Databases
  "5": [
    { id: "topic-5-1", title: "Relational Database Concepts & Schema Design", difficulty: "Beginner", time: "6 hours", skills: ["RDBMS", "Schemas", "Normalization"] },
    { id: "topic-5-2", title: "Basic SQL: SELECT, Filtering, and Sorting", difficulty: "Beginner", time: "8 hours", skills: ["SQL", "SELECT", "WHERE"] },
    { id: "topic-5-3", title: "Advanced SQL: Joins, Aggregations, and Subqueries", difficulty: "Intermediate", time: "12 hours", skills: ["JOINs", "GROUP BY", "Subqueries"] },
    { id: "topic-5-4", title: "SQL Window Functions & CTEs", difficulty: "Advanced", time: "10 hours", skills: ["Window Functions", "CTEs", "Advanced Queries"] },
    { id: "topic-5-5", title: "NoSQL Databases", difficulty: "Intermediate", time: "8 hours", skills: ["MongoDB", "NoSQL", "Document Databases"] },
    { id: "topic-5-6", title: "Database Indexing & Query Optimization", difficulty: "Advanced", time: "10 hours", skills: ["Indexing", "EXPLAIN", "Query Tuning"] },
    { id: "topic-5-7", title: "Data Warehousing Concepts", difficulty: "Intermediate", time: "8 hours", skills: ["OLAP", "OLTP", "Star Schema"] },
    { id: "topic-5-8", title: "Graph Databases", difficulty: "Advanced", time: "10 hours", skills: ["Neo4j", "Cypher"] },
    { id: "topic-5-9", title: "Time-Series Databases", difficulty: "Advanced", time: "8 hours", skills: ["InfluxDB", "TSDB"] },
    { id: "topic-5-10", title: "Cloud Data Warehouses", difficulty: "Expert", time: "12 hours", skills: ["Snowflake", "BigQuery", "Redshift"] }
  ],
  // Stage 6: Machine Learning (Intermediate)
  "6": [
    { id: "topic-6-1", title: "Introduction to Scikit-Learn & ML Workflow", difficulty: "Intermediate", time: "8 hours", skills: ["Scikit-Learn", "ML Pipeline", "Train/Test Split"] },
    { id: "topic-6-2", title: "Linear Regression & Polynomial Regression", difficulty: "Intermediate", time: "10 hours", skills: ["Linear Regression", "Polynomial Regression", "MSE"] },
    { id: "topic-6-3", title: "Logistic Regression & Classification Metrics", difficulty: "Intermediate", time: "10 hours", skills: ["Logistic Regression", "ROC-AUC", "Confusion Matrix"] },
    { id: "topic-6-4", title: "K-Nearest Neighbors (KNN) & Support Vector Machines (SVM)", difficulty: "Intermediate", time: "12 hours", skills: ["KNN", "SVM", "Kernels"] },
    { id: "topic-6-5", title: "Unsupervised Learning: K-Means & Hierarchical Clustering", difficulty: "Intermediate", time: "10 hours", skills: ["K-Means", "Hierarchical Clustering", "DBSCAN"] },
    { id: "topic-6-6", title: "Naive Bayes Classifiers", difficulty: "Intermediate", time: "6 hours", skills: ["Naive Bayes", "Text Classification"] },
    { id: "topic-6-7", title: "Regularized Regression", difficulty: "Advanced", time: "8 hours", skills: ["Ridge", "Lasso", "ElasticNet"] },
    { id: "topic-6-8", title: "Advanced Clustering", difficulty: "Advanced", time: "10 hours", skills: ["Gaussian Mixture Models", "Mean Shift"] },
    { id: "topic-6-9", title: "Feature Selection & Importance", difficulty: "Advanced", time: "10 hours", skills: ["Feature Selection", "RFE", "Mutual Information"] },
    { id: "topic-6-10", title: "Handling Imbalanced Datasets", difficulty: "Advanced", time: "8 hours", skills: ["SMOTE", "Class Weights", "Oversampling"] }
  ],
  // Stage 7: Advanced Machine Learning
  "7": [
    { id: "topic-7-1", title: "Decision Trees & Random Forests", difficulty: "Intermediate", time: "10 hours", skills: ["Decision Trees", "Random Forests", "Ensemble Methods"] },
    { id: "topic-7-2", title: "Gradient Boosting Machines", difficulty: "Advanced", time: "15 hours", skills: ["XGBoost", "LightGBM", "CatBoost"] },
    { id: "topic-7-3", title: "Model Evaluation & Hyperparameter Tuning", difficulty: "Advanced", time: "12 hours", skills: ["GridSearch", "RandomSearch", "K-Fold CV"] },
    { id: "topic-7-4", title: "Dimensionality Reduction", difficulty: "Advanced", time: "10 hours", skills: ["PCA", "t-SNE", "UMAP"] },
    { id: "topic-7-5", title: "Anomaly Detection & Recommendation Systems", difficulty: "Advanced", time: "12 hours", skills: ["Collaborative Filtering", "Isolation Forest", "Content-Based"] },
    { id: "topic-7-6", title: "Stacking & Advanced Ensemble Methods", difficulty: "Expert", time: "10 hours", skills: ["Stacking", "Voting Classifiers", "Blending"] },
    { id: "topic-7-7", title: "Advanced Recommender Systems", difficulty: "Expert", time: "15 hours", skills: ["Matrix Factorization", "ALS", "Neural RecSys"] },
    { id: "topic-7-8", title: "Multi-Class and Multi-Label Classification", difficulty: "Advanced", time: "8 hours", skills: ["One-vs-Rest", "One-vs-One", "Multi-Label"] },
    { id: "topic-7-9", title: "Automated Machine Learning (AutoML)", difficulty: "Advanced", time: "10 hours", skills: ["AutoML", "TPOT", "H2O"] },
    { id: "topic-7-10", title: "Interpretability & Explainable AI", difficulty: "Expert", time: "12 hours", skills: ["SHAP", "LIME", "Partial Dependence Plots"] }
  ],
  // Stage 8: Deep Learning (Advanced)
  "8": [
    { id: "topic-8-1", title: "Introduction to Neural Networks & Backpropagation", difficulty: "Advanced", time: "12 hours", skills: ["Neural Networks", "Backpropagation", "Activation Functions"] },
    { id: "topic-8-2", title: "Deep Learning Frameworks: PyTorch vs TensorFlow", difficulty: "Advanced", time: "10 hours", skills: ["PyTorch", "TensorFlow", "Keras"] },
    { id: "topic-8-3", title: "Optimization Algorithms", difficulty: "Advanced", time: "8 hours", skills: ["Adam", "SGD", "RMSprop"] },
    { id: "topic-8-4", title: "Regularization Techniques", difficulty: "Advanced", time: "8 hours", skills: ["Dropout", "Batch Normalization", "L1/L2"] },
    { id: "topic-8-5", title: "Building Multi-Layer Perceptrons (MLPs)", difficulty: "Advanced", time: "10 hours", skills: ["MLP", "Deep Networks", "Forward Pass"] },
    { id: "topic-8-6", title: "Advanced Neural Network Architectures", difficulty: "Expert", time: "10 hours", skills: ["Autoencoders", "Siamese Networks"] },
    { id: "topic-8-7", title: "Deep Learning for Tabular Data", difficulty: "Expert", time: "10 hours", skills: ["TabNet", "Entity Embeddings"] },
    { id: "topic-8-8", title: "Transfer Learning & Fine-Tuning", difficulty: "Expert", time: "12 hours", skills: ["Transfer Learning", "Fine-Tuning", "Pre-trained Models"] },
    { id: "topic-8-9", title: "Distributed Deep Learning Training", difficulty: "Expert", time: "15 hours", skills: ["Data Parallelism", "Horovod", "PyTorch DDP"] },
    { id: "topic-8-10", title: "Hardware Acceleration", difficulty: "Expert", time: "8 hours", skills: ["GPUs", "TPUs", "CUDA"] }
  ],
  // Stage 9: Natural Language Processing (NLP)
  "9": [
    { id: "topic-9-1", title: "Text Preprocessing", difficulty: "Intermediate", time: "8 hours", skills: ["Tokenization", "Stemming", "Lemmatization"] },
    { id: "topic-9-2", title: "Bag of Words, TF-IDF, & N-grams", difficulty: "Intermediate", time: "8 hours", skills: ["TF-IDF", "BoW", "N-grams"] },
    { id: "topic-9-3", title: "Word Embeddings", difficulty: "Advanced", time: "10 hours", skills: ["Word2Vec", "GloVe", "FastText"] },
    { id: "topic-9-4", title: "Sequence Models", difficulty: "Advanced", time: "15 hours", skills: ["RNNs", "LSTMs", "GRUs"] },
    { id: "topic-9-5", title: "Transformers, Attention Mechanisms, & LLMs", difficulty: "Expert", time: "20 hours", skills: ["Transformers", "Attention", "BERT", "GPT"] },
    { id: "topic-9-6", title: "Topic Modeling", difficulty: "Advanced", time: "10 hours", skills: ["LDA", "NMF"] },
    { id: "topic-9-7", title: "Named Entity Recognition (NER) & POS Tagging", difficulty: "Advanced", time: "10 hours", skills: ["NER", "POS Tagging", "Spacy"] },
    { id: "topic-9-8", title: "Sentiment Analysis & Text Classification", difficulty: "Advanced", time: "8 hours", skills: ["Sentiment Analysis", "Text Classification"] },
    { id: "topic-9-9", title: "Retrieval-Augmented Generation (RAG)", difficulty: "Expert", time: "15 hours", skills: ["RAG", "Vector Databases", "LangChain"] },
    { id: "topic-9-10", title: "Prompt Engineering & LLM APIs", difficulty: "Expert", time: "10 hours", skills: ["Prompt Engineering", "OpenAI API", "Few-Shot Learning"] }
  ],
  // Stage 10: Computer Vision
  "10": [
    { id: "topic-10-1", title: "Image Processing Fundamentals", difficulty: "Intermediate", time: "8 hours", skills: ["OpenCV", "PIL", "Filtering"] },
    { id: "topic-10-2", title: "Convolutional Neural Networks (CNNs) Architecture", difficulty: "Advanced", time: "12 hours", skills: ["CNNs", "Convolution", "Pooling"] },
    { id: "topic-10-3", title: "Popular CNN Architectures", difficulty: "Advanced", time: "10 hours", skills: ["ResNet", "VGG", "Inception"] },
    { id: "topic-10-4", title: "Object Detection", difficulty: "Expert", time: "15 hours", skills: ["YOLO", "Faster R-CNN", "Bounding Boxes"] },
    { id: "topic-10-5", title: "Image Segmentation & Generative Models", difficulty: "Expert", time: "15 hours", skills: ["Segmentation", "U-Net", "GANs"] },
    { id: "topic-10-6", title: "Facial Recognition & Biometrics", difficulty: "Expert", time: "12 hours", skills: ["Facial Recognition", "FaceNet", "Siamese Networks"] },
    { id: "topic-10-7", title: "Image Captioning & Multimodal Models", difficulty: "Expert", time: "15 hours", skills: ["Multimodal", "Image Captioning", "CLIP"] },
    { id: "topic-10-8", title: "Video Processing & Action Recognition", difficulty: "Expert", time: "15 hours", skills: ["Video Processing", "3D CNNs", "Action Recognition"] },
    { id: "topic-10-9", title: "3D Computer Vision & Point Clouds", difficulty: "Expert", time: "12 hours", skills: ["3D Vision", "PointNet", "LiDAR"] },
    { id: "topic-10-10", title: "Vision Transformers (ViT)", difficulty: "Expert", time: "15 hours", skills: ["Vision Transformers", "ViT", "Self-Attention in Vision"] }
  ],
  // Stage 11: Big Data & MLOps (Expert)
  "11": [
    { id: "topic-11-1", title: "Big Data Processing with Apache Spark & PySpark", difficulty: "Expert", time: "15 hours", skills: ["Spark", "PySpark", "Distributed Computing"] },
    { id: "topic-11-2", title: "Cloud Computing for Data Science", difficulty: "Expert", time: "12 hours", skills: ["AWS", "GCP", "Azure"] },
    { id: "topic-11-3", title: "Model Deployment with Flask, FastAPI, & Docker", difficulty: "Expert", time: "15 hours", skills: ["Docker", "FastAPI", "Flask", "Deployment"] },
    { id: "topic-11-4", title: "CI/CD for Machine Learning", difficulty: "Expert", time: "10 hours", skills: ["GitHub Actions", "CI/CD", "Automation"] },
    { id: "topic-11-5", title: "Model Monitoring, Logging, & Concept Drift", difficulty: "Expert", time: "10 hours", skills: ["Monitoring", "Logging", "Concept Drift"] },
    { id: "topic-11-6", title: "Apache Kafka & Real-Time Streaming", difficulty: "Expert", time: "15 hours", skills: ["Kafka", "Streaming", "Real-Time Processing"] },
    { id: "topic-11-7", title: "Workflow Orchestration", difficulty: "Expert", time: "12 hours", skills: ["Airflow", "Prefect", "DAGs"] },
    { id: "topic-11-8", title: "Feature Stores", difficulty: "Expert", time: "10 hours", skills: ["Feature Stores", "Feast", "Hopsworks"] },
    { id: "topic-11-9", title: "Model Registries", difficulty: "Expert", time: "8 hours", skills: ["MLflow", "Weights & Biases", "Model Registry"] },
    { id: "topic-11-10", title: "Serverless Deployments", difficulty: "Expert", time: "10 hours", skills: ["AWS Lambda", "Cloud Functions", "Serverless ML"] }
  ]
};

// Generate files
Object.keys(curriculum).forEach(stageStr => {
  const stageTopics = curriculum[stageStr];
  
  stageTopics.forEach((topic) => {
    const filePath = path.join(TOPICS_DIR, `${topic.id}.md`);
    
    // Format the skills array to valid JSON string array for frontmatter
    const skillsString = JSON.stringify(topic.skills);

    // Use custom content if it exists for this topic, otherwise fall back to generic template
    let contentBody = customTopicContent[topic.id];
    
    if (!contentBody) {
      contentBody = `
# ${topic.title}

Welcome to the definitive guide on **${topic.title}**.

In this highly professional module, you will learn the theoretical foundations and practical applications required to master this domain. This material is designed to transition you from a foundational understanding to an advanced, industry-ready capability.

## Core Concepts
- Concept A: Theoretical background and mathematical intuition.
- Concept B: Practical software engineering and implementation details.
- Concept C: Advanced edge cases and production considerations.

## Implementation Example
Here is a high-level pseudo-code example of how you might apply these concepts in a real-world scenario:

\`\`\`python
def execute_professional_workflow(data):
    """
    Executes the standard workflow for ${topic.title}
    """
    # Step 1: Initialization
    context = initialize_context()
    
    # Step 2: Processing
    results = process_data(data, context)
    
    # Step 3: Evaluation
    metrics = evaluate_results(results)
    
    return metrics
\`\`\`

## Key Takeaways
1. Always validate your assumptions before writing code.
2. Rely on vectorized operations and optimized libraries when dealing with large datasets.
3. Document your thought process clearly so other Data Scientists can reproduce your work.

## Next Steps
After completing this module, make sure to practice by building a small project that incorporates these skills.
`;
    }

    const markdownContent = `---
id: "${topic.id}"
stageId: "stage-${stageStr}"
title: "${topic.title}"
description: "A comprehensive guide to mastering ${topic.title}. This topic is essential for your growth as a Data Scientist."
timeToComplete: "${topic.time}"
difficulty: "${topic.difficulty}"
prerequisites: []
skillsGained: ${skillsString}
---
${contentBody}
`;

    fs.writeFileSync(filePath, markdownContent, 'utf-8');
    console.log(`Generated ${topic.id}.md`);
  });
});

console.log('Successfully generated all 120 topic files!');
