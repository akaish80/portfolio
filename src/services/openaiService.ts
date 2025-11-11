// Use Node.js Express server endpoint for secure API calls
// In production, this should point to your deployed backend (e.g., Render, Railway, etc.)
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3001/api/chat';

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

    try {
      lastRequestTime = now;
      
      // Call secure backend API (API key is never exposed to browser)
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      // If backend returns fallback flag or error, use fallback
      if (data.fallback || data.error) {
        console.warn('Backend API issue:', data.error);
        return "⚠️ AI service temporarily unavailable. Here's what I can tell you:\n\n" + getFallbackResponse(userMessage);
      }

      return data.response || 'I apologize, but I could not generate a response.';
    } catch (error: any) {
      console.error('API Error:', error);
      return "⚠️ Unable to connect to AI service. Here's what I can tell you:\n\n" + getFallbackResponse(userMessage);
    }
  },
};
