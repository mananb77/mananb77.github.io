import { Github, Linkedin, Mail, ExternalLink, Code, Trophy, Star, Users, FileText, ChevronDown, BookOpen } from 'lucide-react';

function App() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "DNA Sequencing Lab Chatbot",
      description: "AI-powered chatbot assisting researchers with DNA sequencing services. Features RAG architecture with knowledge base of proprietary MCB lab processes and data for accurate, context-aware responses.",
      tech: ["Next.js", "React", "FastAPI", "Python", "ChromaDB", "LangChain", "HuggingFace", "RAG", "Vector DB", "Tailwind CSS"],
      icon: "🧬",
      github: "https://github.com/mananb77/genai-mcb-chatbot",
      demo: "https://mananb77.github.io/genai-mcb-chatbot/",
      preview: `${import.meta.env.BASE_URL}previews/genai-chatbot.png`
    },
    {
      title: "Persona Architect",
      description: "AI-powered application that generates customized business personas. Input your business concept and interact with an AI persona tailored to your industry through an intelligent chatbot interface.",
      tech: ["React", "Lovable Cloud", "Gemini AI", "Serverless Functions", "AI Chat"],
      icon: "🎭",
      demo: "https://biz-sim-bot.lovable.app/",
      preview: `${import.meta.env.BASE_URL}previews/persona-architect.png`
    },
    {
      title: "GradeSync",
      description: "Educational Grade Management System for Multi-Platform Assessment Integration. Streamlines grade synchronization across multiple educational platforms.",
      tech: ["Python 3.11", "React 18", "FastAPI", "Grade Management", "Educational Technology"],
      icon: "📊",
      github: "https://github.com/mananb77/gradesync-demo",
      demo: "https://mananb77.github.io/gradesync-demo/",
      preview: `${import.meta.env.BASE_URL}previews/gradesync.png`,
      award: "Published at SIGCSE 2025",
      acm: "https://dl.acm.org/doi/10.1145/3641555.3705192",
      paper: `${import.meta.env.BASE_URL}gradesync-2-pager.pdf`
    },
    {
      title: "CourseCraft.ai",
      description: "Intelligent course schedule generation platform for UC Berkeley TAs and instructors. Automates calendar creation, saving hours of administrative work with AI-assisted adaptation and multiple export formats.",
      tech: ["React", "Flask", "Python", "Google Calendar API", "Material-UI", "OAuth 2.0", "Bootstrap"],
      icon: "📅",
      github: "https://github.com/mananb77/coursecraft-ai",
      demo: "https://mananb77.github.io/coursecraft-ai/demo",
      preview: `${import.meta.env.BASE_URL}previews/coursecraft-ai.png`,
      award: "1st Place - CS160: User Interface Design (Summer 2023)"
    },
    {
      title: "Secure File Sharing System",
      description: "End-to-end encrypted file sharing system built with Golang implementing RSA and AES encryption.",
      tech: ["Golang", "Cryptography", "Security"],
      icon: "🔐",
      github: "https://github.com/mananb77/file-sharing-system",
      demo: "https://mananb77.github.io/file-sharing-system/",
      preview: `${import.meta.env.BASE_URL}previews/secure-share.png`
    },
    {
      title: "DeepSafe",
      description: "Deep learning system for detecting deepfake content with high accuracy.",
      tech: ["PyTorch", "Computer Vision", "Deep Learning"],
      icon: "🔍",
      github: "#"
    },
    {
      title: "Faulty Commit Classification",
      description: "Machine learning model to classify software commits as faulty or non-faulty.",
      tech: ["Python", "Scikit-learn", "ML"],
      icon: "🐛",
      github: "#"
    },
    {
      title: "PostgreSQL vs Apache Spark",
      description: "Comprehensive comparison of data processing performance between PostgreSQL and Apache Spark.",
      tech: ["PostgreSQL", "Apache Spark", "Data Engineering"],
      icon: "⚙️",
      github: "#"
    },
    {
      title: "WalkSafe at Berkeley",
      description: "Interactive map displaying crime data to help students navigate campus safely. Won 1st place at IBM Social Good Datathon.",
      tech: ["React", "Python", "IBM Watson", "Flask"],
      icon: "🗺️",
      github: "#",
      award: "1st Place - IBM Social Good Datathon"
    },
    {
      title: "MNIST & Spam Classification",
      description: "Machine learning models for handwritten digit recognition and email spam detection.",
      tech: ["Python", "TensorFlow", "ML"],
      icon: "🧠",
      github: "#"
    },
    // {
    //   title: "Fossil Frenzy",
    //   description: "FIRST Robotics Competition game design. Team reached Top 100 worldwide out of 4,000+ teams.",
    //   tech: ["Game Design", "Robotics", "Competition"],
    //   icon: "🤖",
    //   award: "Top 100 Worldwide - FIRST Robotics"
    // },
    {
      title: "Tweet Sentiment Analysis",
      description: "NLP model for detecting hate speech and analyzing sentiment in social media content.",
      tech: ["Python", "NLP", "Machine Learning"],
      icon: "💬",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00BFFF] via-[#1e90ff] to-[#1e3a8a]">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-2xl"
            />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">
            Manan Bhargava
          </h1>
          <p className="text-2xl text-white/90 mb-10">
            Alumni of Computer Science & Data Science @ UC Berkeley
          </p>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <a
              href="https://github.com/mananb77"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/manan-bhargava"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:manan.bhargava@berkeley.edu"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={20} />
              Resume
            </a>
          </div>
          <button
            onClick={scrollToProjects}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto animate-bounce"
          >
            View Projects
            <ChevronDown size={20} />
          </button>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-16" id="projects">
        <section>
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-[#00BFFF] to-[#1e90ff] p-6 text-center">
                  <div className="text-5xl mb-3">{project.icon}</div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                {project.preview && (
                  <div className="w-full h-48 overflow-hidden bg-gray-100">
                    <img
                      src={project.preview}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 min-h-24">{project.description}</p>

                  {project.award && (
                    <div className="mb-6 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <Trophy className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-amber-800 font-medium">{project.award}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#00BFFF]/10 text-[#0096CC] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#00BFFF] hover:bg-[#0096CC] text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                        >
                          <Code size={16} />
                          View on GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          {project.title === "GradeSync" ? "View Documentation" : "Live Demo"}
                        </a>
                      )}
                    </div>
                    {(project.acm || project.paper) && (
                      <div className="flex gap-2">
                        {project.acm && (
                          <a
                            href={project.acm}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                          >
                            <BookOpen size={16} />
                            ACM Poster
                          </a>
                        )}
                        {project.paper && (
                          <a
                            href={project.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                          >
                            <FileText size={16} />
                            View PDF
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center text-white/80 pb-8">
          <p className="text-sm">
            © 2025 Manan Bhargava. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
