// OmniMind Company Configuration
// This file contains all configurable company details
// In production, these could be loaded from environment variables

export interface CompanyConfig {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  contact: {
    email: string;
    phone: string;
  };
  social: {
    linkedin: string;
    instagram: string;
    twitter: string;
    github?: string;
  };
  services: ServiceConfig[];
  demo: {
    storageType: 'GoogleSheets' | 'Airtable' | 'HubSpot';
    industries: string[];
  };
}

export interface ServiceConfig {
  id: string;
  name: string;
  description: string;
  icon: string;
  backendUrl: string;
  features: string[];
  color: 'cyan' | 'purple' | 'pink';
}

// Default configuration - can be overridden by environment variables
// Note: In Vite, environment variables must be prefixed with VITE_ to be accessible in the browser
export const companyConfig: CompanyConfig = {
  name: import.meta.env.VITE_COMPANY_NAME || 'OmniMind',
  tagline: 'The All-in-One AI Solution',
  description: 'Revolutionary AI solutions that transform your business with cutting-edge technology.',
  logo: import.meta.env.VITE_COMPANY_LOGO || '/assets/omnimind-logo.png',
  
  contact: {
    email: import.meta.env.VITE_COMPANY_EMAIL || 'contact@omnimind.ai',
    phone: import.meta.env.VITE_COMPANY_PHONE || '+1-555-0123',
  },
  
  social: {
    linkedin: import.meta.env.VITE_COMPANY_LINKEDIN || 'https://linkedin.com/company/omnimind',
    instagram: import.meta.env.VITE_COMPANY_INSTAGRAM || 'https://instagram.com/omnimind',
    twitter: import.meta.env.VITE_COMPANY_TWITTER || 'https://twitter.com/omnimind',
    github: import.meta.env.VITE_COMPANY_GITHUB || 'https://github.com/omnimind',
  },
  
  services: [
    {
      id: 'face-detection',
      name: 'Face Detection',
      description: 'Advanced computer vision for facial recognition and analysis.',
      icon: 'eye',
      backendUrl: import.meta.env.VITE_SERVICE_FACE_DETECTION_URL || 'https://your-server.com/face-detection',
      features: ['Real-time detection', 'Emotion analysis', 'Age estimation', 'Gender classification'],
      color: 'cyan',
    },
    {
      id: 'voice-agent',
      name: 'Voice Agent',
      description: 'Intelligent voice interactions with natural language processing.',
      icon: 'mic',
      backendUrl: import.meta.env.VITE_SERVICE_VOICE_AGENT_URL || 'https://your-server.com/voice-agent',
      features: ['Natural conversations', 'Multi-language support', 'Voice synthesis', 'Intent recognition'],
      color: 'purple',
    },
    {
      id: 'worker-count',
      name: 'Worker Count',
      description: 'Automated personnel monitoring and workforce analytics.',
      icon: 'users',
      backendUrl: import.meta.env.VITE_SERVICE_WORKER_COUNT_URL || 'https://your-server.com/worker-count',
      features: ['Real-time counting', 'Attendance tracking', 'Safety monitoring', 'Analytics dashboard'],
      color: 'pink',
    },
    {
      id: 'llm-assistant',
      name: 'LLM Assistant',
      description: 'Powerful AI assistant for complex reasoning and problem-solving.',
      icon: 'brain',
      backendUrl: import.meta.env.VITE_SERVICE_LLM_URL || 'https://your-server.com/llm-assistant',
      features: ['Advanced reasoning', 'Code generation', 'Document analysis', 'Creative writing'],
      color: 'cyan',
    },
  ],
  
  demo: {
    storageType: (import.meta.env.VITE_DEMO_BOOKING_STORAGE as any) || 'GoogleSheets',
    industries: [
      'Technology',
      'Healthcare',
      'Finance',
      'Manufacturing',
      'Retail',
      'Education',
      'Government',
      'Other',
    ],
  },
};

// Utility function to get service by ID
export const getServiceById = (id: string): ServiceConfig | undefined => {
  return companyConfig.services.find(service => service.id === id);
};

// Utility function to get all services by color
export const getServicesByColor = (color: ServiceConfig['color']): ServiceConfig[] => {
  return companyConfig.services.filter(service => service.color === color);
};