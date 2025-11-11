import OpenAI from 'openai';
import { ARUN_RESUME_DATA } from '../data/resumeData';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.warn('OpenAI API key not found. Please set VITE_OPENAI_API_KEY in your .env file.');
}

const openai = OPENAI_API_KEY
  ? new OpenAI({
      apiKey: OPENAI_API_KEY,
      dangerouslyAllowBrowser: true, // Note: For production, use a backend proxy
    })
  : null;

// Convert resume data to a context string for the AI
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

const SYSTEM_PROMPT = getResumeContext();

// Rate limiting
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 2000; // 2 seconds between requests

// Fallback responses when API is unavailable
const getFallbackResponse = (question: string): string => {
  const lowerQ = question.toLowerCase();
  
  if (lowerQ.includes('experience') || lowerQ.includes('work')) {
    return `Arun has 20+ years of experience as a Senior Software Engineer, currently working as a Tech Lead at Cognizant for U.S. Bank. He specializes in React, TypeScript, and micro-frontend architecture. He's led the Onboarding V2 migration supporting 13,000+ partner implementations and co-built 'Merge Mind', an AI-driven code review assistant. For more details, contact him at akaish@gmail.com`;
  }
  
  if (lowerQ.includes('skill') || lowerQ.includes('technology') || lowerQ.includes('tech stack')) {
    return `Arun's key skills include: React, TypeScript, JavaScript, HTML5, CSS3, SCSS, Redux, Micro-Frontend Architecture, Java, Spring Boot, Node.js, Webpack, Vite, Docker, CI/CD (Jenkins, GitLab), and AI/ML (OpenAI GPT APIs, Prompt Engineering). He's also experienced with monitoring tools like Splunk, Kibana, and SonarQube.`;
  }
  
  if (lowerQ.includes('contact') || lowerQ.includes('email') || lowerQ.includes('reach')) {
    return `You can reach Arun at:\n📧 Email: akaish@gmail.com\n📞 Phone: +1 (905) 299-9279\n💼 LinkedIn: https://www.linkedin.com/in/akaish80\n🔗 GitHub: https://github.com/akaish80\n🌐 Portfolio: https://akaish80.github.io/portfolio/`;
  }
  
  if (lowerQ.includes('location') || lowerQ.includes('where')) {
    return `Arun is currently based in Mississauga, ON, Canada, and is willing to relocate to the USA. He's open to remote or hybrid opportunities.`;
  }
  
  if (lowerQ.includes('education') || lowerQ.includes('degree')) {
    return `Arun holds a Master of Computer Applications (MCA) in Computer Science from Madurai Kamaraj University, India (2001-2004).`;
  }
  
  if (lowerQ.includes('ai') || lowerQ.includes('project')) {
    return `Arun has built several AI projects including this portfolio chatbot using OpenAI GPT APIs, and 'Merge Mind' - an AI-driven Merge Request review assistant for U.S. Bank that leverages GPT-4 within GitLab CI/CD pipelines.`;
  }
  
  return `I'd love to tell you more about Arun's background! Ask me about his experience, skills, projects, education, or contact information. You can also reach out directly at akaish@gmail.com or LinkedIn: https://www.linkedin.com/in/akaish80`;
};

export const openaiService = {
  async sendMessage(userMessage: string): Promise<string> {
    // Check rate limiting
    const now = Date.now();
    if (now - lastRequestTime < MIN_REQUEST_INTERVAL) {
      return "Please wait a moment before sending another message. To avoid rate limits, I'm spacing out requests.";
    }
    
    if (!openai) {
      return getFallbackResponse(userMessage);
    }

    try {
      lastRequestTime = now;
      
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: 400, // Reduced to save quota
      });

      return completion.choices[0]?.message?.content || 'I apologize, but I could not generate a response.';
    } catch (error: any) {
      console.error('OpenAI API Error:', error);
      
      if (error.status === 401) {
        return "⚠️ API authentication error. Switching to fallback mode...\n\n" + getFallbackResponse(userMessage);
      } else if (error.status === 429) {
        return "⚠️ Rate limit reached. Using fallback responses...\n\n" + getFallbackResponse(userMessage);
      } else if (error.status === 403) {
        return "⚠️ API access issue (quota or billing). Using fallback mode...\n\n" + getFallbackResponse(userMessage);
      } else {
        return "⚠️ AI service temporarily unavailable. Here's what I can tell you:\n\n" + getFallbackResponse(userMessage);
      }
    }
  },
};
