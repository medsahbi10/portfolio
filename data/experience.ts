export interface Experience {
  period: string;
  role: string;
  company: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    period: 'Apr 2026 – Present',
    role: 'BI Engineer',
    company: 'Laboratoires MédiS · Nabeul, Tunisia',
    points: [
      'Developed a maintenance monitoring web app with a FastAPI backend and an Angular frontend, tracking equipment availability, MTTR, MTBF and operational KPIs',
      'Automated ingestion of GMAO (CMMS) maintenance data – work orders, downtime events, equipment history – cutting reporting prep from 4 hours/week to near-zero',
      'Designed SSIS packages loading a reliability-focused star schema of 15K+ work orders',
      'Built Power BI reporting covering 50+ equipment units, supporting root-cause analysis that helped reduce recurring failures',
    ],
  },
  {
    period: 'Feb 2025 – Jul 2025',
    role: 'AI Engineer – End-of-Studies Internship',
    company: 'Sofrecom Tunisia · Tunis, Tunisia',
    points: [
      'Fine-tuned StarCoder2 7B with LoRA/PEFT on 1,719 labeled examples to generate Gherkin tests from user stories (ROUGE-1: 0.80, ROUGE-2: 0.73)',
      'Developed the AI platform with Angular and Spring Boot: REST APIs, authentication, role-based access, conversation management and code generation workflows',
      'Designed Java and Python microservices for users, conversations, OCR and Gherkin code explanation (Mistral API, Ollama), deployed with Docker',
      'Served the model through AWS SageMaker, Lambda and API Gateway, secured the platform with Keycloak (OAuth2/OIDC, JWT), and automated data prep, training and deployment with GitLab CI/CD',
    ],
  },
  {
    period: 'Jul 2024 – Aug 2024',
    role: 'BI Engineer – Internship',
    company: 'Aziza · Ben Arous, Tunisia',
    points: [
      'Worked on the Aziza Mobile project, analyzing the activity of the Aziza SIM offer: subscriptions, customer base and phone top-ups (recharges)',
      'Explored and cleaned 30+ Excel source files in Python, then designed an SSIS data warehouse with Slowly Changing Dimensions (SCD) to track subscribers over time',
      'Developed 4 QlikView dashboards following 10+ KPIs such as new subscriptions, number of active clients and top-up activity',
    ],
  },
];
