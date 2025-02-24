import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { IoHomeOutline } from 'react-icons/io5';

const BlogContent = {
  1: {
    title: "Revolutionizing Healthcare: AI Voice Technology's Transformative Impact",
    heroImage: "https://www.shutterstock.com/image-photo/medical-technology-doctor-use-ai-600nw-2304284475.jpg",
    author: "Dr. Elena Rodriguez",
    date: "July 15, 2024",
    readTime: "8 min read",
    tags: ["AI in Healthcare", "Voice Technology", "Medical Innovation"],
    content: [
      {
        type: 'paragraph',
        text: "The healthcare landscape is undergoing a radical transformation, driven by artificial intelligence's unprecedented capabilities. At the forefront of this revolution is AI voice technology—a breakthrough that promises to redefine patient care, administrative efficiency, and medical communication."
      },
      {
        type: 'heading',
        text: "The Current Healthcare Challenge"
      },
      {
        type: 'paragraph',
        text: "Healthcare professionals are overwhelmed. Administrative tasks consume up to 70% of their time, leaving minimal direct patient interaction. Communication barriers, documentation complexities, and multilingual challenges further exacerbate these issues."
      },
      {
        type: 'heading',
        text: "Key Innovations in AI Voice Technology"
      },
      {
        type: 'list',
        items: [
          "Real-time patient communication transcription with 99.5% accuracy",
          "Automated medical record documentation reducing manual entry by 80%",
          "Instant multilingual translation supporting 50+ languages",
          "Contextual understanding of medical terminology and patient nuances"
        ]
      },
      {
        type: 'heading',
        text: "Tangible Benefits"
      },
      {
        type: 'paragraph',
        text: "By integrating advanced natural language processing, our AI solution doesn't just automate—it enhances. Reduced administrative burden means healthcare professionals can focus on what truly matters: patient care. Our technology minimizes human error, creates personalized patient experiences, and bridges communication gaps."
      },
      {
        type: 'quote',
        text: "AI voice technology is not replacing healthcare professionals; it's empowering them to be more human. - Dr. Elena Rodriguez"
      }
    ]
  },
  2: {
    title: "Precision in AI: The Critical Role of Advanced Data Annotation",
    heroImage: "https://img.freepik.com/premium-photo/doctors-focused-hand-writes-prescription-symbolizing-precision-medical-care_1320055-12962.jpg",
    author: "Marcus Chen",
    date: "July 20, 2024",
    readTime: "7 min read",
    tags: ["Machine Learning", "Data Science", "AI Training"],
    content: [
      {
        type: 'paragraph',
        text: "Data annotation is the unsung hero of artificial intelligence—a meticulous craft that transforms raw, unstructured data into intelligent, reliable machine learning models capable of groundbreaking insights and revolutionary applications."
      },
      {
        type: 'heading',
        text: "Why Data Annotation Matters"
      },
      {
        type: 'paragraph',
        text: "In the AI ecosystem, data is not just king—it's the entire kingdom. The quality of machine learning models is directly proportional to the precision of their training data. One mislabeled data point can cascade into significant algorithmic deviations."
      },
      {
        type: 'heading',
        text: "Advanced Annotation Techniques"
      },
      {
        type: 'list',
        items: [
          "Machine learning-assisted annotation reducing manual labor by 60%",
          "Multi-stage verification processes ensuring 99.7% accuracy",
          "Domain-specific annotation strategies tailored to unique industry requirements",
          "Continuous learning models that improve annotation quality over time"
        ]
      },
      {
        type: 'heading',
        text: "Real-World Impact"
      },
      {
        type: 'paragraph',
        text: "Our cutting-edge annotation methodologies don't just label data—they understand context, nuance, and potential algorithmic implications. This approach ensures AI models achieve unprecedented levels of accuracy and reliability across various industries."
      },
      {
        type: 'quote',
        text: "In the world of AI, annotation is not a task. It\'s an art form. - Marcus Chen"
      }
    ]
  },
  3: {
    title: "Breakthrough AI Content Generation: Beyond Speed to Meaningful Communication",
    heroImage: "https://img.freepik.com/premium-photo/futuristic-laboratory-medical-professionals-conducting-advanced-tests_886588-32436.jpg",
    author: "Aria Nakamura",
    date: "July 25, 2024",
    readTime: "9 min read",
    tags: ["AI Content", "Natural Language Processing", "Creative Technology"],
    content: [
      {
        type: 'paragraph',
        text: "Content generation powered by artificial intelligence transcends mere text production. It's about crafting meaningful, contextually relevant communication that resonates, engages, and transforms audience experiences."
      },
      {
        type: 'heading',
        text: "The Content Generation Landscape"
      },
      {
        type: 'paragraph',
        text: "Traditional content creation struggles with consistency, scalability, and personalization. AI bridges these gaps, offering unprecedented capabilities to generate high-quality, tailored content across diverse domains."
      },
      {
        type: 'heading',
        text: "Reducing Hallucinations, Maximizing Quality"
      },
      {
        type: 'list',
        items: [
          "Advanced context-awareness algorithms understanding subtle communication nuances",
          "Real-time fact-checking mechanisms ensuring content accuracy",
          "Adaptive learning models that continuously refine content generation",
          "Multilingual content creation with cultural sensitivity"
        ]
      },
      {
        type: 'heading',
        text: "Ethical AI Content Generation"
      },
      {
        type: 'paragraph',
        text: "Our approach goes beyond technical capabilities. We prioritize ethical considerations, ensuring AI-generated content maintains authenticity, respects intellectual property, and serves genuine communicative purposes."
      },
      {
        type: 'quote',
        text: "AI doesn\'t replace human creativity; it amplifies and extends it. - Aria Nakamura"
      }
    ]
  },
  4: {
    title: "AI in Education: Personalized Learning at Scale",
    heroImage: "https://elearningindustry.com/wp-content/uploads/2019/12/4-Benefits-Of-AI-In-Personalized-Learning.jpg",
    author: "Dr. Sarah Thompson",
    date: "August 1, 2024",
    readTime: "8 min read",
    tags: ["AI in Education", "Personalized Learning", "EdTech"],
    content: [
      {
        type: 'paragraph',
        text: "The education sector is on the brink of a revolution, with artificial intelligence paving the way for personalized learning experiences that cater to the unique needs of every student. This transformation is not just about technology—it's about redefining how we learn and teach."
      },
      {
        type: 'heading',
        text: "The Challenge of Traditional Education"
      },
      {
        type: 'paragraph',
        text: "Traditional education systems often struggle to address the diverse learning needs of students. One-size-fits-all approaches can leave many students behind, while teachers are burdened with administrative tasks that detract from their primary role: educating."
      },
      {
        type: 'heading',
        text: "How AI is Transforming Education"
      },
      {
        type: 'list',
        items: [
          "Adaptive learning platforms that tailor content to individual student needs",
          "AI-driven analytics to track student progress and identify areas for improvement",
          "Virtual tutors providing 24/7 support and personalized feedback",
          "Automated grading systems reducing teacher workload"
        ]
      },
      {
        type: 'heading',
        text: "The Benefits of AI in Education"
      },
      {
        type: 'paragraph',
        text: "AI-powered educational tools are not just enhancing learning outcomes—they're making education more accessible and equitable. By providing personalized learning paths, AI ensures that no student is left behind, while also empowering teachers to focus on what they do best: inspiring and guiding their students."
      },
      {
        type: 'quote',
        text: "AI in education is not about replacing teachers; it's about giving them the tools to be even more effective. - Dr. Sarah Thompson"
      }
    ]
  },
  5: {
    title: "The Future of Work: AI and Human Collaboration",
    heroImage: "https://media.licdn.com/dms/image/D4D12AQGjuZbRz71a7A/article-cover_image-shrink_720_1280/0/1715692030331?e=2147483647&v=beta&t=v__SrpVtFwYZnGu-ETmaA7R0czEdBJ5zw7Hl3gKFer0",
    author: "James Carter",
    date: "August 5, 2024",
    readTime: "7 min read",
    tags: ["Future of Work", "AI Collaboration", "Workplace Innovation"],
    content: [
      {
        type: 'paragraph',
        text: "The workplace of the future is not about humans versus machines—it's about humans and machines working together to achieve more than ever before. Artificial intelligence is set to redefine how we work, collaborate, and innovate."
      },
      {
        type: 'heading',
        text: "The Changing Nature of Work"
      },
      {
        type: 'paragraph',
        text: "As automation and AI technologies advance, the nature of work is evolving. Routine tasks are increasingly being automated, freeing up human workers to focus on more complex, creative, and strategic activities."
      },
      {
        type: 'heading',
        text: "Key Areas of AI-Human Collaboration"
      },
      {
        type: 'list',
        items: [
          "AI-powered tools enhancing decision-making and problem-solving",
          "Collaborative robots (cobots) working alongside humans in manufacturing",
          "Virtual assistants streamlining administrative tasks",
          "AI-driven insights driving innovation and strategy"
        ]
      },
      {
        type: 'heading',
        text: "The Benefits of AI-Human Collaboration"
      },
      {
        type: 'paragraph',
        text: "By leveraging the strengths of both humans and AI, organizations can achieve greater efficiency, innovation, and job satisfaction. AI handles repetitive tasks and data analysis, while humans bring creativity, empathy, and strategic thinking to the table."
      },
      {
        type: 'quote',
        text: "The future of work is not about competition between humans and AI; it's about collaboration. - James Carter"
      }
    ]
  }
};

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = BlogContent[id];

  if (!blog) return <div className="text-gray-800 text-center py-20">Blog not found</div>;

  const recommendedBlogs = Object.entries(BlogContent)
    .filter(([blogId]) => blogId !== id)
    .map(([blogId, blogData]) => ({
      id: blogId,
      ...blogData
    }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-16">
      {/* Home Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          to="/features"
          className="flex items-center gap-2 bg-white/95 p-3 rounded-full shadow-md hover:bg-white hover:shadow-lg hover:scale-110 transition-all duration-300 border border-blue-100"
        >
          <IoHomeOutline className="w-6 h-6 text-indigo-600" />
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Main Blog Content */}
        <article className="bg-white shadow-xl rounded-2xl overflow-hidden mb-16 border border-purple-100/50">
          <div className="relative">
            <img 
              src={blog.heroImage} 
              alt={blog.title} 
              className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-10 bg-gradient-to-b from-white to-blue-50/20">
            <div className="flex items-center mb-6 text-gray-600 text-sm">
              <span className="mr-4 font-medium">{blog.author}</span>
              <span className="mr-4">|</span>
              <span className="mr-4">{blog.date}</span>
              <span className="mr-4">|</span>
              <span className="bg-blue-100/50 px-2 py-1 rounded-full text-blue-700">{blog.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">{blog.title}</h1>
            {blog.content.map((section, index) => {
              switch(section.type) {
                case 'paragraph':
                  return <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg font-light">{section.text}</p>;
                case 'heading':
                  return (
                    <h2 
                      key={index} 
                      className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
                    >
                      {section.text}
                    </h2>
                  );
                case 'list':
                  return (
                    <ul key={index} className="list-disc list-inside mb-6 text-gray-700 pl-6 text-lg">
                      {section.items.map((item, i) => (
                        <li key={i} className="mb-3">{item}</li>
                      ))}
                    </ul>
                  );
                case 'quote':
                  return (
                    <blockquote 
                      key={index} 
                      className="border-l-4 border-indigo-500 pl-6 py-4 my-8 italic text-gray-600 bg-blue-50/50 rounded-r-lg shadow-sm"
                    >
                      {section.text}
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </article>

        {/* Recommended Reads Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Recommended Reads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendedBlogs.map((recommendedBlog) => (
              <div 
                key={recommendedBlog.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-100/30"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/blog/${recommendedBlog.id}`);
                }}
              >
                <div className="relative">
                  <img 
                    src={recommendedBlog.heroImage}
                    alt={recommendedBlog.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 bg-indigo-500/90 px-2 py-1 rounded-full text-xs text-white">
                    {recommendedBlog.tags[0]}
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-purple-50/20">
                  <div className="flex items-center mb-4 text-sm text-gray-600">
                    <span>{recommendedBlog.author}</span>
                    <span className="mx-2">•</span>
                    <span className="bg-blue-100/50 px-2 py-1 rounded-full text-blue-700">{recommendedBlog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-indigo-600 transition-colors duration-200">
                    {recommendedBlog.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 text-base font-light">
                    {recommendedBlog.content[0].text}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {recommendedBlog.tags.slice(0, 2).map((tag, index) => (
                      <span 
                        key={index}
                        className="text-sm bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;