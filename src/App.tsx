import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, MapPin, Download, Database, Laptop, BookOpen, Coffee, Heart, Sparkles } from 'lucide-react';
import { Particles } from './components/Particles';
import { LocationMap } from './components/LocationMap';
import { ETLAnimation } from './components/ETLAnimation';
import { ProjectPopup } from './components/ProjectPopup';
import { ThemeToggle } from './components/ThemeToggle';


interface Project {
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  category?: string;
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const skills = [
    { name: 'Data  Science', icon: <Database className="w-6 h-6" />, items: ['Python', 'R', 'TensorFlow', 'PyTorch'] },
    { name: 'Development', icon: <Laptop className="w-6 h-6" />, items: ['Node.js', 'React', 'TypeScript', 'SQL'] },
    { name: 'Tools', icon: <Coffee className="w-6 h-6" />, items: ['Power Bi', 'VS Code', 'npm',  'Git'] }
  ];

  const achievements = [
    { icon: <Heart className="w-6 h-6 text-red-500" />, title: 'Passionate Learner', description: 'Always eager to learn new technologies and best practices' },
    { icon: <Sparkles className="w-6 h-6 text-yellow-500" />, title: '5+ Projects Completed', description: 'Successfully delivered web applications' },
    { icon: <BookOpen className="w-6 h-6 text-green-500" />, title: 'Continuous Growth', description: 'Regular participation in coding workshops' }
  ];

  const projects: Project[] = [
    {
      title: 'Data manager',
      shortDescription: 'Interactive dashboard developed with Streamlit to visualize usage data for the Dhoola application',
      description: 'The aim of this project is to visualize and analyze usage data for the Dhoola application through an interactive dashboard developed with Streamlit. It tracks key statistics related to user engagement, geographic trends, usage behavior, and much more. Designed to be flexible, quick to deploy and highly interactive, it provides a lightweight, customized solution for real-time data visualization needs.',
      technologies: ['Python', 'FPDF', 'Pandas ', 'Firebase ', 'Streamlit', 'Plotly'],
      image: 'images/streamlit.jpg',
      link: 'https://copydhoola.streamlit.app/',
      category: 'Data Analysis'
    },
    {
      title: 'Social Media Marketing',
      shortDescription: 'Professional platform for buying likes, views and followers on social networks.',
      description: 'A professional social network marketing services platform that allows users to purchase social engagement services (followers, likes, views, etc.) for different platforms. ',
      technologies: ['React', 'Vite', 'PostgreSQL', 'TypeScript', 'Tailwind CSS','Framer Motion'],
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: 'https://growths.netlify.app/',
      category: 'Websites'
    },
    {
      title: 'Professional showcase site',
      shortDescription: 'Responsive website: showcase, services, projects & interactive contact',
      description: 'A comprehensive and modern showcase site to promote your services (consulting, web/mobile development, design, AI/BI), showcase your team and your achievements, and facilitate contact. Designed mobile-first, it includes a responsive menu, dynamic carousels, attractive hero sections, statistics counters, as well as a contact form and newsletter subscription. The simple and optimized HTML/CSS/JS architecture ensures performance and maintainability.',
      technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Optimized graphic assets','Responsive UX/UI best practices and basic SEO'],
      image: 'images/timetotech.gif',
      link: 'https://timetotechs.com/',
      category: 'Websites'
    },
    {
      title: 'Customer Segmentation Analysis',
      shortDescription: 'Interactive Streamlit Dashboard: dynamic filters, visualizations, maps, exports and neat design.',
      description: 'Streamlit analysis dashboard of cleaned form responses: interactive filters, key metrics, dynamic graphs and geographic map, all in a responsive and neat interface.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn','Streamlit','Folium '],
      image: 'images/Streamlit.gif',
      link: 'https://github.com/nguekeuarthur/AnalyseDataBrian.git',
      category: 'Data Analysis'
    },
    {
      title: 'Stock Market Prediction Model',
      shortDescription: 'Power BI dashboard for managing stocks, sales, and forecasts.',
      description: 'An interactive Power BI dashboard to monitor inventory in real time, analyze sales, and forecast demand across different regions and product categories.',
      technologies: ['Power BI', 'SQL', 'Excel', 'DAX'],
      image: 'images/inventoryProject.gif',
      link: 'https://github.com/nguekeuarthur/Inventory.git',
      category: 'Financial Analysis'
    },
    // {
    //   title: 'Sentiment Analysis Tool',
    //   shortDescription: 'Created a sentiment analysis tool for customer feedback.',
    //   description: 'A natural language processing tool that analyzes customer reviews and social media mentions to gauge public sentiment. The tool provides valuable insights for product improvement and customer satisfaction monitoring.',
    //   technologies: ['Python', 'NLTK', 'Flask', 'SpaCy', 'Docker'],
    //   image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   link: '#',
    //   category: 'NLP'
    // }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Particles />
        <div className="max-w-3xl text-center relative z-10">
          <div className="mb-6 inline-block">
            <span className="px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
              Open to New Opportunities
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi! I'm <span className="text-blue-300 relative">
              Arthur Nguekeu
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-300/50"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Junior Data Analyst with a passion for extracting insights and building data-driven solutions.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/nguekeuarthur" target="_blank" rel="noopener noreferrer" 
               className="text-gray-200 hover:text-blue-300 transition-colors p-2 hover:bg-white/10 rounded-full">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/arthur-carel-nguekeu-a32886210/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-200 hover:text-blue-300 transition-colors p-2 hover:bg-white/10 rounded-full">
              <Linkedin size={24} />
            </a>
            <a href="arthur.nguekeu2000@gmail.com" 
               className="text-gray-200 hover:text-blue-300 transition-colors p-2 hover:bg-white/10 rounded-full">
              <Mail size={24} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/ArthurNguekeu.pdf" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:scale-105"
            >
              Download CV <Download size={16} className="ml-2" />
            </a>
            <a
              href="mailto:arthur.nguekeu2000@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all hover:scale-105 cursor-pointer"
            >
              Let's Connect <Mail size={16} className="ml-2" />
            </a>
          </div>
        </div>
        
        {/* ETL Animation */}
        <div className="absolute bottom-20 w-full">
          <ETLAnimation />
        </div>

        <ScrollLink to="about" smooth={true} duration={500} className="absolute bottom-10 cursor-pointer animate-bounce text-gray-200">
          <ChevronDown size={32} />
        </ScrollLink>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">{achievement.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Technologies I've been working with over the past 2 years
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
             My journey in data analytics
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform"></div>
              <img src="/images/IMG_8534.JPG"
                alt="Profile"
                className="rounded-lg shadow-lg relative z-10 transition-transform group-hover:scale-[1.02]"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I'm a data analyst with 2 years of experience analyzing data and extracting insights.
I'm passionate about data visualization, problem-solving, and learning new analytical tools.
              </p>
              
              {/* Experience Timeline */}
              <div className="relative mb-12">
                <div className="absolute left-0 w-full h-1 bg-blue-200 dark:bg-blue-900 top-4"></div>
                <div className="relative flex justify-between">
                  <div className="text-center group">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 relative z-10 group-hover:scale-110 transition-transform"></div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2025 - Present</p>
                    <p className="font-bold dark:text-white">Data Analyst</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Currently Seeking an Internship</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 relative z-10 group-hover:scale-110 transition-transform"></div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">June 2024 - September 2024</p>
                    <p className="font-bold dark:text-white">Data Analyst</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">House Innovation</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 relative z-10 group-hover:scale-110 transition-transform"></div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">October 2023 - January 2024</p>
                    <p className="font-bold dark:text-white">Data Analyst</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">IZONIE Enterprise</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I started my journey with a data analytics bootcamp and have since worked on various projects,
              focusing on data visualization and statistical analysis. I'm always eager to learn and grow as a data analyst.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">Python</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">R</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">Power Bi</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">HTML/CSS</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">Git</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">SQL</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my journey
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {project.category && (
                    <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.shortDescription}</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center group"
                    >
                      View Project <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="text-center">
            <RouterLink
              to="/all-projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
            >
              View More Projects <ExternalLink size={20} className="ml-2" />
            </RouterLink>
          </div> */}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <a 
              href="https://learn.microsoft.com/fr-fr/users/arthurnguekeu-3989/credentials/8cabac74735994b2?ref=https%3A%2F%2Fwww.linkedin.com%2F" 
              target="_blank" 
              rel="noopener noreferrer"
              >
              <img 
                src="https://images.credly.com/size/340x340/images/619f60f8-4f63-4772-910e-dc31c6f2f7e8/image.png"
                alt="Microsoft Certified: Power BI Data Analyst Associate"
                className="w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform"
              />
              <h3 className="text-xl font-bold mb-2 dark:text-white">Microsoft Certified: Power BI Data Analyst Associate</h3>
              <p className="text-gray-600 dark:text-gray-300">Issued Nov 2024</p>
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <a 
                href="https://www.credly.com/badges/8ed9da60-aa65-4a9e-a248-f96791bfa30f/linked_in?t=rl734h"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="https://images.credly.com/size/340x340/images/4e3d6f9f-55d7-4ea7-b0e6-f4d4ff543e22/image.png"
                  alt="TensorFlow Developer"
                  className="w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform"
                />
                <h3 className="text-xl font-bold mb-2 dark:text-white">Scrum Foundation Professional Certification</h3>
                <p className="text-gray-600 dark:text-gray-300">Issued Nov 2022</p>
              </a>
              
            </div>

            {/* <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <img 
                src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg"
                alt="Azure Data Scientist"
                className="w-32 h-32 mx-auto mb-4 hover:scale-105 transition-transform"
              />
              <h3 className="text-xl font-bold mb-2 dark:text-white">Azure Data Scientist</h3>
              <p className="text-gray-600 dark:text-gray-300">Issued Jun 2023</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm currently looking for new opportunities to grow and learn. Let's connect!
          </p>
          <a 
            href="mailto:arthur.nguekeu2000@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 transform mb-12"
          >
            Send me an email <Mail size={20} className="ml-2" />
          </a>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
              <MapPin size={24} className="mr-2" />
              <p className="text-lg">Suisse</p>
            </div>
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <LocationMap />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/nguekeuarthur" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/arthur-carel-nguekeu-a32886210/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:arthur.nguekeu2000@gmail.com" 
               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Arthur Nguekeu. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Project Popup */}
      {selectedProject && (
        <ProjectPopup
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
}

export default App;