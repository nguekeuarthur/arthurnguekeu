import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ProjectPopup } from '../components/ProjectPopup';
import { ThemeToggle } from '../components/ThemeToggle';

interface Project {
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  category?: string;
}

export function AllProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects: Project[] = [
    // Original 6 projects
    {
      title: 'E-commerce Website',
      shortDescription: 'Built a responsive e-commerce website using React, Node.js, and MongoDB.',
      description: 'A full-featured e-commerce platform with user authentication, shopping cart functionality, product catalog, and secure payment integration. The project focuses on providing a seamless shopping experience with real-time inventory updates and order tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#'
    },
    {
      title: 'Task Manager Application',
      shortDescription: 'Created a task management app with React and Firebase.',
      description: 'A collaborative task management application that enables teams to organize, track, and complete projects efficiently. Features include real-time updates, task assignments, due date tracking, and progress monitoring.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: 'https://dhoola-app-visualization.streamlit.app/'
    },
    {
      title: 'Sales Analytics Dashboard',
      shortDescription: 'Developed an interactive dashboard using Power BI.',
      description: 'An advanced analytics dashboard that transforms raw sales data into actionable insights. The dashboard includes dynamic visualizations, trend analysis, and predictive analytics to support data-driven decision making.',
      technologies: ['Power BI', 'DAX', 'SQL', 'Excel'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
      category: 'Data Analysis'
    },
    {
      title: 'Customer Segmentation Analysis',
      shortDescription: 'Applied K-means clustering for customer segmentation.',
      description: 'A machine learning project that segments customers based on their purchasing behavior and demographics. The analysis helped optimize marketing strategies and increase ROI by identifying key customer groups and their preferences.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
      category: 'Machine Learning'
    },
    {
      title: 'Stock Market Prediction Model',
      shortDescription: 'Developed a time series forecasting model using LSTM.',
      description: 'An advanced machine learning model that predicts stock market trends using LSTM neural networks. The model analyzes historical data, market indicators, and news sentiment to provide accurate price predictions.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Keras'],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
      category: 'Financial Analysis'
    },
    {
      title: 'Sentiment Analysis Tool',
      shortDescription: 'Created a sentiment analysis tool for customer feedback.',
      description: 'A natural language processing tool that analyzes customer reviews and social media mentions to gauge public sentiment. The tool provides valuable insights for product improvement and customer satisfaction monitoring.',
      technologies: ['Python', 'NLTK', 'Flask', 'SpaCy', 'Docker'],
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
      category: 'NLP'
    },
    // Additional projects
    {
      title: 'Data Visualization Dashboard',
      shortDescription: 'Interactive data visualization platform using D3.js',
      description: 'A comprehensive data visualization dashboard that transforms complex datasets into intuitive, interactive visualizations. Features include real-time data updates, customizable charts, and export capabilities.',
      technologies: ['D3.js', 'React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
      category: 'Data Visualization'
    },
    {
      title: 'Predictive Maintenance System',
      shortDescription: 'IoT-based predictive maintenance solution',
      description: 'An advanced system that uses IoT sensors and machine learning to predict equipment maintenance needs. The solution helps reduce downtime and maintenance costs through early detection of potential issues.',
      technologies: ['Python', 'TensorFlow', 'Arduino', 'AWS IoT'],
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
      category: 'IoT'
    },
    {
      title: 'Natural Language Processing API',
      shortDescription: 'REST API for text analysis and processing',
      description: 'A robust API service that provides various NLP capabilities including sentiment analysis, entity recognition, and text classification. Built with modern NLP libraries and scalable architecture.',
      technologies: ['Python', 'FastAPI', 'spaCy', 'Docker'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
      category: 'API Development'
    },
    {
      title: 'Time Series Analysis Tool',
      shortDescription: 'Advanced time series analysis and forecasting',
      description: 'A sophisticated tool for analyzing and forecasting time series data. Implements various statistical methods and machine learning algorithms for accurate predictions.',
      technologies: ['Python', 'Prophet', 'Statsmodels', 'Plotly'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
      category: 'Data Science'
    },
    {
      title: 'Healthcare Analytics Platform',
      shortDescription: 'Analytics platform for healthcare data',
      description: 'A comprehensive analytics platform designed for healthcare providers to analyze patient data, predict outcomes, and optimize treatment plans using machine learning algorithms.',
      technologies: ['Python', 'R', 'SQL', 'Tableau'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
      category: 'Healthcare'
    },
    {
      title: 'Supply Chain Optimization',
      shortDescription: 'ML-based supply chain optimization system',
      description: 'An intelligent system that optimizes supply chain operations using machine learning. Features include demand forecasting, inventory optimization, and route planning.',
      technologies: ['Python', 'OR-Tools', 'TensorFlow', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
      category: 'Operations Research'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-center dark:text-white">All Projects</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
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
      </div>

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