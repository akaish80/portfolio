import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware - Configure CORS to allow GitHub Pages
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://akaish80.github.io',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

// Resume data for AI context
const ARUN_RESUME_DATA = {
  name: 'Arun Kumar',
  title: 'Senior Software Engineer | Front-End Architect | Transitioning to Full-Stack (Java + Spring Boot) | AI & LLM Integration',
  location: 'Mississauga, ON, Canada',
  contact: {
    email: 'akaish@gmail.com',
    phone: '+1 (905) 299-9279',
    links: {
      Git: 'https://github.com/akaish80',
      LinkedIn: 'https://www.linkedin.com/in/akaish80',
      Portfolio: 'https://akaish80.github.io/portfolio/',
    },
  },
  summary: 'Senior Software Engineer with 20+ years of experience developing and optimizing enterprise-grade web applications across banking, financial, and retail domains.',
  skills: {
    frontend: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Redux', 'Accessibility (WCAG/a11y)', 'Responsive Design', 'Micro-Frontend Architecture'],
    backend: ['Java', 'Spring Boot (Hands-on Projects)', 'Node'],
    build_and_tooling: ['Webpack', 'Vite', 'Rollup', 'ESLint', 'Prettier', 'Babel'],
    monitoring_platforms: ['Splunk', 'New Relic', 'DataDog'],
    devops: ['Docker', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions'],
    cloud_containers: ['AWS', 'Azure (Learning)', 'Kubernetes (Basic)'],
    ai_ml: ['OpenAI API', 'LangChain', 'Prompt Engineering', 'Hugging Face', 'RAG Systems'],
  },
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'BMO Financial Group',
      duration: 'Feb 2017 - Present (7+ years)',
      location: 'Toronto, ON',
      project_highlights: [
        'Architected and delivered micro-frontend platform serving 2M+ users',
        'Built reusable component library (100+ components) used across 10+ internal teams',
        'Led React migration from legacy systems, improving performance by 40%',
        'Implemented real-time monitoring dashboards using Splunk and New Relic',
      ],
      key_contributions: [
        'Designed CI/CD pipelines (Jenkins + Docker), reducing deployment time by 50%',
        'Championed accessibility (WCAG 2.1 AA), ensuring inclusive user experience',
        'Mentored junior developers through code reviews and technical workshops',
        'Collaborated with Product, UX, and QA in Agile/Scrum teams',
      ],
      tech_stack: ['React', 'TypeScript', 'Redux', 'SCSS', 'Jest', 'Webpack', 'Docker', 'Jenkins', 'Splunk', 'New Relic'],
    },
  ],
  education: {
    degree: 'Bachelor of Engineering in Computer Science',
    university: 'Punjab Engineering College, Chandigarh, India',
    duration: '1998 - 2002',
  },
  ai_innovation_projects: [
    {
      name: 'AI Resume Assistant (RAG System)',
      description: 'Built a chatbot using LangChain and OpenAI API with RAG capabilities',
      highlights: [
        'Integrated semantic search over resume data',
        'Deployed as Node.js Express server',
        'Implemented conversation memory and context management',
      ],
      tech_stack: ['React', 'TypeScript', 'OpenAI API', 'LangChain', 'Node.js', 'Express'],
    },
  ],
  additional_details: {
    role_preferences: 'Full-Stack Engineer, Frontend Architect, AI/ML Engineer',
    availability: 'Available for full-time opportunities',
    current_location: 'Mississauga, ON, Canada (Open to remote/hybrid)',
  },
};

// Convert resume data to context string for AI
const getResumeContext = (): string => {
  const { name, title, location, contact, summary, skills, experience, education, additional_details, ai_innovation_projects } =
    ARUN_RESUME_DATA;

  return `
You are an AI assistant for ${name}'s professional portfolio. Answer questions about his background, skills, and experience.

# Professional Profile
Name: ${name}
Title: ${title}
Location: ${location}
Email: ${contact.email}
Phone: ${contact.phone}
Portfolio: ${contact.links.Portfolio}
LinkedIn: ${contact.links.LinkedIn}
GitHub: ${contact.links.Git}

# Summary
${summary}

# Technical Skills
**Frontend:** ${skills.frontend.join(', ')}
**Backend:** ${skills.backend.join(', ')}
**Build & Tooling:** ${skills.build_and_tooling.join(', ')}
**Monitoring:** ${skills.monitoring_platforms.join(', ')}
**DevOps:** ${skills.devops.join(', ')}
**Cloud & Containers:** ${skills.cloud_containers.join(', ')}
**AI/ML:** ${skills.ai_ml.join(', ')}

# Professional Experience

${experience
  .map(
    (exp) => `
## ${exp.role} at ${exp.company}
Duration: ${exp.duration}
Location: ${exp.location}

Project Highlights:
${exp.project_highlights.map((h) => `- ${h}`).join('\n')}

Key Contributions:
${exp.key_contributions.map((c) => `- ${c}`).join('\n')}

Tech Stack: ${exp.tech_stack.join(', ')}
`
  )
  .join('\n')}

# Education
${education.degree}
${education.university}
${education.duration}

# AI Innovation Projects

${ai_innovation_projects
  .map(
    (proj) => `
## ${proj.name}
${proj.description}

Highlights:
${proj.highlights.map((h) => `- ${h}`).join('\n')}

Tech Stack: ${proj.tech_stack.join(', ')}
`
  )
  .join('\n')}

# Additional Details
- ${additional_details.role_preferences}
- ${additional_details.availability}
- ${additional_details.current_location}

When answering questions:
1. Be friendly, professional, and concise
2. Highlight relevant experience and skills
3. Provide specific examples from his work when applicable
4. If asked about contact information, provide the email and LinkedIn
5. If you don't know something, say so honestly
`;
};

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid message' });
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    if (!OPENAI_API_KEY) {
      return res.status(500).json({
        error: 'OpenAI API key not configured',
        fallback: true,
      });
    }

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: getResumeContext() },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 400,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI API Error:', data);
      return res.status(response.status).json({
        error: data.error?.message || 'OpenAI API error',
        fallback: true,
      });
    }

    res.json({
      response: data.choices[0]?.message?.content || 'No response generated',
    });
  } catch (error: any) {
    console.error('Server error:', error);
    res.status(500).json({
      error: error.message || 'Internal server error',
      fallback: true,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 Chat endpoint: http://localhost:${PORT}/api/chat`);
});
