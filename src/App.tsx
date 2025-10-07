import { Github, Linkedin, Mail, ExternalLink, Code, Trophy, Star, Users } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "GradeSync",
      description: "Research project analyzing student engagement with grading systems. Published at SIGCSE 2025.",
      tech: ["Python", "Data Analysis", "Research"],
      icon: "📊",
      github: "#",
      award: "Published at SIGCSE 2025"
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
      title: "CourseCraft.ai",
      description: "Full-stack application that automates course calendar creation using GPT-4 and the Berkeley API.",
      tech: ["React", "Node.js", "GPT-4", "Berkeley API"],
      icon: "📅",
      github: "#",
      demo: "#"
    },
    {
      title: "DeepSafe",
      description: "Deep learning system for detecting deepfake content with high accuracy.",
      tech: ["PyTorch", "Computer Vision", "Deep Learning"],
      icon: "🔍",
      github: "#"
    },
    {
      title: "RAG Chatbot for DNA Lab",
      description: "Full-stack AI chatbot implementing Retrieval-Augmented Generation for lab assistance.",
      tech: ["Python", "LangChain", "RAG", "Vector DB"],
      icon: "🤖",
      github: "#"
    },
    {
      title: "FlowNow",
      description: "Platform designed to enhance cognitive performance and productivity through flow state techniques.",
      tech: ["React", "Node.js", "MongoDB"],
      icon: "⚡",
      github: "#"
    },
    {
      title: "Secure File Sharing System",
      description: "End-to-end encrypted file sharing system built with Golang implementing RSA and AES encryption.",
      tech: ["Golang", "Cryptography", "Security"],
      icon: "🔐",
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
      title: "MNIST & Spam Classification",
      description: "Machine learning models for handwritten digit recognition and email spam detection.",
      tech: ["Python", "TensorFlow", "ML"],
      icon: "🧠",
      github: "#"
    },
    {
      title: "Fossil Frenzy",
      description: "FIRST Robotics Competition game design. Team reached Top 100 worldwide out of 4,000+ teams.",
      tech: ["Game Design", "Robotics", "Competition"],
      icon: "🤖",
      award: "Top 100 Worldwide - FIRST Robotics"
    },
    {
      title: "Tweet Sentiment Analysis",
      description: "NLP model for detecting hate speech and analyzing sentiment in social media content.",
      tech: ["Python", "NLP", "Machine Learning"],
      icon: "💬",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00BFFF] via-[#1E90FF] to-[#4169E1]">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="mb-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Manan Bhargava
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Computer Science & Data Science @ UC Berkeley
          </p>
          <div className="flex justify-center gap-4 mb-8">
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
          </div>
        </header>

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
                <div className="bg-gradient-to-br from-[#00BFFF] to-[#1E90FF] p-6 text-center">
                  <div className="text-5xl mb-3">{project.icon}</div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 h-20">{project.description}</p>

                  {project.award && (
                    <div className="mb-4 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <Trophy className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-amber-800 font-medium">{project.award}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#00BFFF]/10 text-[#00BFFF] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex-1 bg-[#00BFFF] hover:bg-[#1E90FF] text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                      >
                        <Code size={16} />
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center text-white/80">
          <p className="text-sm">
            © 2025 Manan Bhargava. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
