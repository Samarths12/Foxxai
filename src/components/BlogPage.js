import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';

const BlogContent = {
  1: {
    title: "Ways AI Agents Save Time and Lots of Money for SMEs",
    heroImage: "https://www.shutterstock.com/image-photo/medical-technology-doctor-use-ai-600nw-2304284475.jpg",
    author: "ConvoLabs Team",
    date: "March 24, 2025",
    readTime: "10 min read",
    tags: ["AI for SMEs", "Cost Savings", "Efficiency"],
    content: [
      {
        type: 'paragraph',
        text: "For small and medium enterprises (SMEs) in industries like logistics, automotive, and retail, every minute and every dollar counts. You’re constantly balancing customer demands, operational challenges, and tight budgets—often with a small team wearing multiple hats. The result? Overworked staff, missed opportunities, and rising costs that threaten growth. At ConvoLabs AI, we understand these struggles. That’s why we’ve developed AI agents under our brand NamasteAI, inspired by the warmth of a 'Namaste' greeting, blending Indian hospitality with American innovation. Our technology is designed to save SMEs time and lots of money, helping you focus on what matters most—growing your business. Here’s how our AI agents make a difference, step by step."
      },
      {
        type: 'heading',
        text: "1. 24/7 Multichannel Support: Your Business Never Sleeps"
      },
      {
        type: 'paragraph',
        text: "One of the biggest challenges for SMEs is providing consistent customer support without breaking the bank. Imagine you run a retail store, and a customer calls at 2 a.m. to check on a late-night order. Or a logistics client emails on a Sunday about a delayed shipment. Hiring a 24/7 support team is expensive—salaries, training, and benefits add up quickly. ConvoLabs AI solves this with 24/7 multichannel support across voice calls, emails, texts, payments, sales, and marketing. Our AI agents act like a tireless employee who never sleeps, handling inquiries instantly. For example, a retail SME can have our AI respond to a customer’s text about product availability while simultaneously processing a payment via email and sending a marketing promo—all at the same time. This reduces customer wait times, keeps them satisfied, and cuts your staffing costs by up to 30%. You save money on hiring and time on managing schedules, allowing your business to operate seamlessly around the clock."
      },
      {
        type: 'heading',
        text: "2. Task Automation with Robotics: Let Technology Do the Heavy Lifting"
      },
      {
        type: 'paragraph',
        text: "Repetitive tasks can drain your team’s energy and time, especially in industries like logistics and automotive. For instance, a logistics SME might spend hours scheduling deliveries, tracking packages, and updating customers. In retail, manually updating inventory or processing orders can take up entire days. Our AI agents integrate seamlessly with vehicles, drones, and robotics to automate these processes, freeing your team to focus on higher-value work like strategy and customer relationships. Picture a logistics company using our AI to manage drone deliveries: the AI schedules routes, tracks packages in real-time, and sends text updates to customers—all without human intervention. In the automotive sector, our AI can serve as an in-car assistant, providing drivers with navigation updates, answering customer inquiries, and even scheduling maintenance—all hands-free. By automating these tasks, you save hours daily, reduce human errors, and lower operational costs. For example, a small logistics firm might save $2,000/month on manual labor, redirecting those funds to growth initiatives."
      },
      {
        type: 'heading',
        text: "3. Humanlike Voices for Better Customer Engagement: Build Trust, Reduce Churn"
      },
      {
        type: 'paragraph',
        text: "Customer service is the backbone of any SME, but poor experiences can lead to lost sales and unhappy clients. Imagine a customer calling your retail store, only to hear a robotic, monotone voice that frustrates them—or worse, they hang up. Our AI agents feature advanced, humanlike voices in multiple styles (professional, friendly, conversational) and languages (English, Spanish, Mandarin), ensuring natural and engaging interactions. For example, a retail customer calling about a product hears a friendly voice that not only answers their question but also suggests a related item, increasing the chance of an upsell. In logistics, a client calling about a shipment gets a professional voice providing updates in their preferred language, making them feel valued. This level of engagement reduces escalations to human staff, improves customer satisfaction, and prevents costly churn. A happy customer is a loyal customer, and loyalty means fewer losses—potentially saving you thousands in lost revenue each year."
      },
      {
        type: 'heading',
        text: "4. Auto-Improving Feedback Loop: AI That Learns and Grows with Your Business"
      },
      {
        type: 'paragraph',
        text: "Many SMEs hesitate to adopt AI because they worry about the time and cost of managing it. Traditional AI solutions often require constant updates, manual tweaks, and expensive tech support—resources most SMEs don’t have. ConvoLabs AI is different. Our AI agents come with an auto-improving feedback loop, meaning they learn and adapt to your business needs without constant oversight. Let’s say you’re a retail SME, and your customers frequently email about a specific product category, like seasonal clothing. Our AI notices this trend, prioritizes those responses, and improves its accuracy over time—all without your input. In logistics, if delivery patterns change (e.g., more evening deliveries), the AI adapts by optimizing routes based on feedback. This self-improving feature means you don’t need to hire a tech team to manage the AI, saving you both time and money. It also ensures the AI stays relevant as your business grows, delivering long-term value without additional costs."
      },
      {
        type: 'heading',
        text: "5. Affordable, Value-Based Pricing: Big Impact Without the Big Price Tag"
      },
      {
        type: 'paragraph',
        text: "One of the biggest barriers for SMEs adopting AI is the cost. Many solutions come with high upfront fees or rigid pricing that doesn’t fit a small business’s budget. At ConvoLabs AI, we believe innovation should be accessible to all. That’s why we offer early-stage, value-based pricing starting at just $500/month, tailored to deliver measurable ROI—like cost savings or sales growth—for SMEs in logistics, automotive, and retail. For example, a small automotive SME might spend $1,000/month on our AI to handle in-car customer support and marketing campaigns. In return, they save $5,000/month on staff and manual processes, plus see a 10% increase in sales from better customer engagement. Our pricing model ensures you only pay for the value you get, not a flat fee, making it a cost-effective solution that helps you grow without financial strain."
      },
      {
        type: 'heading',
        text: "6. Overcoming Common SME Challenges with AI"
      },
      {
        type: 'paragraph',
        text: "Adopting new technology can feel daunting for SMEs, especially with limited resources. You might worry about the learning curve, integration issues, or data security. At ConvoLabs AI, we’ve designed our solution to address these concerns. Learning Curve: Our AI is user-friendly, with a simple setup process and ongoing support to guide you. Integration: It seamlessly connects with your existing tools—CRMs, payment systems, robotics frameworks—so you don’t need to overhaul your operations. Data Security: We prioritize your data, working toward GDPR and HIPAA compliance to keep customer information safe across all channels. By tackling these challenges, we ensure our AI saves you time and money without adding stress."
      },
      {
        type: 'heading',
        text: "Why Partner with ConvoLabs AI?"
      },
      {
        type: 'paragraph',
        text: "At ConvoLabs AI, we’re more than a tech provider—we’re a partner in your success. Our AI agents, with their multichannel support, robotics integration, humanlike voices, and self-improving capabilities, are built to solve the unique challenges SMEs face. Whether you’re a logistics company streamlining deliveries, an automotive business enhancing in-car experiences, or a retailer boosting sales, we’re here to help you save time, reduce costs, and delight your customers. Our Indian-American roots, reflected in the 'NamasteAI' brand, bring a sense of warmth and trust to every interaction, making technology feel approachable and human."
      },
      {
        type: 'heading',
        text: "Take the First Step Toward Efficiency"
      },
      {
        type: 'paragraph',
        text: "Ready to transform your SME with AI? ConvoLabs AI is launching pilot programs in Q2 2025, targeting 5 startups or organizations, including Mentally-e—a mental health-focused startup we’re actively engaging with. Join us to experience how our AI agents can save you time and lots of money while helping your business thrive. Contact us today to learn more or sign up for our pilot program!"
      }
    ]
  },
  2: {
    title: "Revolutionizing Logistics: How AI Agents Streamline Operations",
    heroImage: "https://img.freepik.com/premium-photo/doctors-focused-hand-writes-prescription-symbolizing-precision-medical-care_1320055-12962.jpg",
    author: "ConvoLabs Team",
    date: "March 24, 2025",
    readTime: "8 min read",
    tags: ["Logistics AI", "Operational Efficiency", "Drone Integration"],
    content: [
      {
        type: 'paragraph',
        text: "Logistics SMEs face a constant battle: managing complex operations while keeping costs low and customers happy. From delayed shipments to payment disputes, operational bottlenecks can slow down your business and hurt your bottom line. At ConvoLabs AI, we’re revolutionizing logistics with our AI agents—branded as NamasteAI, a nod to Indian hospitality paired with American innovation. Our technology streamlines operations by handling payments, customer support, and drone integration, saving time, reducing costs, and boosting efficiency. Here’s how we help logistics SMEs overcome challenges and thrive in a competitive industry."
      },
      {
        type: 'heading',
        text: "1. Seamless Payment Processing: Faster Transactions, Fewer Disputes"
      },
      {
        type: 'paragraph',
        text: "Payments are the lifeblood of any logistics business, but manual processing can create bottlenecks. Late invoices, payment errors, or disputes over charges can delay operations and frustrate clients. Our AI agents automate payment processing across multiple channels, ensuring smooth, error-free transactions. For example, a logistics SME can use our AI to send an invoice via email, process a payment through a secure text link, and confirm receipt with a voice call—all in minutes. The AI also flags discrepancies (e.g., incorrect amounts) and resolves them proactively, reducing disputes. By automating payments, you save hours on manual work, improve cash flow, and keep operations running smoothly."
      },
      {
        type: 'heading',
        text: "2. 24/7 Customer Support: Keeping Clients Happy Around the Clock"
      },
      {
        type: 'paragraph',
        text: "In logistics, customer inquiries don’t stop when your office closes. A client might call at midnight to check on a shipment, or email about a delivery delay during a holiday. Hiring a 24/7 support team is costly for SMEs, but poor service can lead to lost business. Our AI agents provide 24/7 multichannel support across voice calls, emails, and texts, ensuring your clients always get answers. For instance, a client calling about a delayed package hears a humanlike voice (in English, Spanish, or Mandarin) providing real-time updates and an estimated delivery time. Meanwhile, another client texting about a tracking number gets an instant reply with a link to their shipment status. This reduces wait times, improves customer satisfaction, and saves you the cost of a large support team—potentially cutting expenses by 30%."
      },
      {
        type: 'heading',
        text: "3. Drone Integration: Automating Deliveries for Speed and Efficiency"
      },
      {
        type: 'paragraph',
        text: "Drones are transforming logistics, but managing them manually can be a bottleneck. Scheduling routes, tracking deliveries, and updating customers often require constant oversight, draining time and resources. Our AI agents integrate seamlessly with drones, automating the entire delivery process. For example, a logistics SME can use our AI to schedule drone routes based on real-time traffic and weather data, track packages in transit, and send automated text updates to customers (e.g., “Your package is 5 minutes away”). The AI also uses its auto-improving feedback loop to optimize routes over time, learning from delivery patterns to reduce fuel costs and delays. This automation saves hours of manual coordination, lowers operational costs, and speeds up deliveries—helping you stay ahead of competitors."
      },
      {
        type: 'heading',
        text: "4. Reducing Operational Bottlenecks: A Holistic Approach"
      },
      {
        type: 'paragraph',
        text: "Beyond payments, customer support, and drone integration, our AI agents tackle other logistics bottlenecks with a holistic approach. They use ultra-low latency to ensure real-time responses, critical for time-sensitive operations like last-mile delivery updates. The auto-improving feedback loop adapts to your business’s unique needs—whether it’s handling peak season demands or optimizing for new delivery zones. For instance, if your SME frequently delivers to a specific region, the AI learns to prioritize those routes, reducing delays. By streamlining these processes, our AI minimizes downtime, cuts operational costs, and ensures your logistics business runs like a well-oiled machine."
      },
      {
        type: 'heading',
        text: "Why Choose ConvoLabs AI for Logistics?"
      },
      {
        type: 'paragraph',
        text: "At ConvoLabs AI, we’re committed to helping logistics SMEs overcome operational challenges with smart, affordable technology. Our AI agents, with their multichannel support, drone integration, and humanlike voices, are designed to save you time and money while delighting your customers. Our early-stage, value-based pricing makes innovation accessible, delivering measurable ROI like cost savings and faster deliveries. The 'NamasteAI' brand reflects our Indian-American roots, bringing warmth and trust to every interaction, so your clients feel valued and supported."
      },
      {
        type: 'heading',
        text: "Take the First Step Toward Smarter Logistics"
      },
      {
        type: 'paragraph',
        text: "Ready to revolutionize your logistics operations? ConvoLabs AI is launching pilot programs in Q2 2025, targeting 5 startups or organizations, including Mentally-e—a mental health-focused startup we’re actively engaging with. Join us to experience how our AI agents can streamline your operations, reduce bottlenecks, and help your SME thrive. Contact us today to learn more or sign up for our pilot program!"
      }
    ]
  },
  3: {
    title: "Unlocking AI Power for SMEs: Auto-Improving Feedback Loops and Ultra-Low Latency",
    heroImage: "https://img.freepik.com/premium-photo/futuristic-laboratory-medical-professionals-conducting-advanced-tests_886588-32436.jpg",
    author: "ConvoLabs Team",
    date: "March 24, 2025",
    readTime: "9 min read",
    tags: ["AI Technology", "Feedback Loops", "Low Latency"],
    content: [
      {
        type: 'paragraph',
        text: "For small and medium enterprises (SMEs) in logistics, automotive, and retail, adopting AI can feel like a big leap. You want technology that works for your business—not against it. At ConvoLabs AI, we’re making AI accessible and impactful with our AI agents, branded as NamasteAI, blending Indian hospitality with American innovation. Two key features set us apart: our auto-improving feedback loop and ultra-low latency. These capabilities save time, reduce costs, and ensure seamless operations for SMEs. Let’s explore what they are, why they matter, and how they can transform your business."
      },
      {
        type: 'heading',
        text: "What is an Auto-Improving Feedback Loop?"
      },
      {
        type: 'paragraph',
        text: "An auto-improving feedback loop is a smart system built into our AI agents that allows them to learn and get better over time—without manual intervention. Think of it as an AI that grows with your business. When your SME uses our AI for tasks like customer support or robotics integration, the feedback loop collects data on how it performs. For example, if you’re a retail SME and customers frequently ask about a specific product via email, the AI notices this pattern. It then prioritizes those responses, improving its accuracy and speed for future inquiries. In logistics, if delivery patterns shift (e.g., more evening deliveries), the AI adapts by optimizing routes based on feedback, ensuring efficiency."
      },
      {
        type: 'heading',
        text: "Why SMEs Need an Auto-Improving Feedback Loop"
      },
      {
        type: 'paragraph',
        text: "SMEs often lack the resources to manage complex AI systems. Hiring tech teams for constant updates or retraining is expensive and time-consuming. Our auto-improving feedback loop eliminates this burden by making the AI self-sufficient. Here’s why it’s a game-changer for SMEs:"
      },
      {
        type: 'list',
        items: [
          "Saves Time: You don’t need to manually tweak the AI—it learns on its own. For instance, an automotive SME using our AI for in-car support doesn’t have to update responses for common driver queries; the AI improves automatically.",
          "Reduces Costs: No need for expensive tech support. A logistics SME can save thousands annually by avoiding manual AI maintenance, redirecting funds to growth.",
          "Adapts to Growth: As your business evolves, the AI keeps up. A retail SME expanding into new markets can rely on the AI to learn new customer preferences without extra effort.",
          "Improves Performance: Over time, the AI becomes more accurate and efficient, ensuring your operations run smoothly. For example, a logistics SME might see delivery times drop by 15% as the AI optimizes routes."
        ]
      },
      {
        type: 'paragraph',
        text: "This self-improving feature ensures your SME gets long-term value from AI, without the hassle or high costs of traditional solutions."
      },
      {
        type: 'heading',
        text: "Ultra-Low Latency in AI: Why It Matters for Real-Time Support"
      },
      {
        type: 'paragraph',
        text: "Latency refers to the time it takes for an AI to respond to a request. Ultra-low latency means our AI agents respond almost instantly—often in milliseconds. This speed is critical for real-time support, where delays can frustrate customers or disrupt operations. For example, in logistics, a client calling about a shipment expects an immediate update. If the AI takes too long to respond, the client may hang up, leading to dissatisfaction. Our ultra-low latency ensures responses are lightning-fast, keeping interactions seamless across voice calls, texts, and emails."
      },
      {
        type: 'heading',
        text: "Why SMEs Need Ultra-Low Latency for Real-Time Support"
      },
      {
        type: 'paragraph',
        text: "In today’s fast-paced world, customers expect instant answers, and operations demand precision. Ultra-low latency makes this possible, offering SMEs several key benefits:"
      },
      {
        type: 'list',
        items: [
          "Enhances Customer Experience: Quick responses keep customers happy. A retail SME using our AI for voice calls can answer a customer’s query about product availability in seconds, improving satisfaction and reducing escalations.",
          "Supports Time-Sensitive Operations: In logistics, real-time updates are crucial. Our AI can instantly notify a client via text about a drone delivery’s status (e.g., “Your package is 5 minutes away”), ensuring smooth operations.",
          "Improves Robotics Integration: For automotive SMEs, ultra-low latency enables in-car AI assistants to provide real-time navigation or support without lag, enhancing driver safety and experience.",
          "Reduces Downtime: Fast responses mean fewer delays in workflows. A logistics SME can process payments or handle inquiries without bottlenecks, saving time and maintaining efficiency."
        ]
      },
      {
        type: 'paragraph',
        text: "Ultra-low latency ensures your SME can deliver top-notch service and operations, even under pressure, helping you stay competitive."
      },
      {
        type: 'heading',
        text: "How These Features Work Together for SMEs"
      },
      {
        type: 'paragraph',
        text: "The auto-improving feedback loop and ultra-low latency complement each other to deliver maximum value. The feedback loop ensures the AI gets smarter over time, while ultra-low latency guarantees fast, reliable performance in the moment. For example, a logistics SME using our AI for drone deliveries benefits from both: the feedback loop optimizes routes based on past deliveries, while ultra-low latency ensures real-time customer updates during the process. This combination saves time, reduces costs, and keeps your operations running smoothly."
      },
      {
        type: 'heading',
        text: "Why Choose ConvoLabs AI?"
      },
      {
        type: 'paragraph',
        text: "At ConvoLabs AI, we’re committed to empowering SMEs with AI that’s smart, fast, and affordable. Our AI agents, with their auto-improving feedback loop and ultra-low latency, are designed to tackle the challenges SMEs face—fragmented support, inefficient workflows, and limited resources. Our early-stage, value-based pricing makes innovation accessible, delivering measurable ROI like cost savings and improved customer satisfaction. The 'NamasteAI' brand reflects our Indian-American roots, bringing warmth and trust to every interaction, so your business feels supported and valued."
      },
      {
        type: 'heading',
        text: "Join the AI Revolution Today"
      },
      {
        type: 'paragraph',
        text: "Ready to unlock the power of AI for your SME? ConvoLabs AI is launching pilot programs in Q2 2025, targeting 5 startups or organizations, including Mentally-e—a mental health-focused startup we’re actively engaging with. Join us to experience how our AI agents can save you time, reduce costs, and help your business thrive. Contact us today to learn more or sign up for our pilot program!"
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

      <div className="max-w-5xl mx-auto px-4 md:px-8"> {/* Increased from max-w-4xl to max-w-5xl */}
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
                  className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm" // Increased padding
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-12 bg-gradient-to-b from-white to-blue-50/20"> {/* Increased padding from p-10 to p-12 */}
            <div className="flex items-center mb-6 text-gray-600 text-sm">
              <span className="mr-4 font-medium">{blog.author}</span>
              <span className="mr-4">|</span>
              <span className="mr-4">{blog.date}</span>
              <span className="mr-4">|</span>
              <span className="bg-blue-100/50 px-3 py-1 rounded-full text-blue-700">{blog.readTime}</span> {/* Increased padding */}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">{blog.title}</h1> {/* Increased font size */}
            {blog.content.map((section, index) => {
              switch(section.type) {
                case 'paragraph':
                  return <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg font-light">{section.text}</p>;
                case 'heading':
                  return (
                    <h2 
                      key={index} 
                      className="text-2xl md:text-3xl font-semibold mt-10 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600" // Adjusted spacing
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
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-100/30 w-full max-w-[600px] mx-auto" // Increased width
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate(`/blog/${recommendedBlog.id}`);
                }}
              >
                <div className="relative">
                  <img 
                    src={recommendedBlog.heroImage}
                    alt={recommendedBlog.title}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110" // Increased height
                  />
                  <div className="absolute top-2 left-2 bg-indigo-500/90 px-3 py-1.5 rounded-full text-sm text-white font-medium"> {/* Increased padding */}
                    {recommendedBlog.tags[0]}
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-b from-white to-purple-50/20"> {/* Increased padding from p-6 to p-8 */}
                  <div className="flex items-center mb-4 text-sm text-gray-600">
                    <span>{recommendedBlog.author}</span>
                    <span className="mx-2">•</span>
                    <span className="bg-blue-100/50 px-3 py-1 rounded-full text-blue-700">{recommendedBlog.readTime}</span> {/* Increased padding */}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 line-clamp-2 hover:text-indigo-600 transition-colors duration-200"> {/* Increased font size */}
                    {recommendedBlog.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 text-base font-light mb-4"> {/* Added spacing */}
                    {recommendedBlog.content[0].text}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {recommendedBlog.tags.slice(0, 2).map((tag, index) => (
                      <span 
                        key={index}
                        className="text-sm bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-3 py-1.5 rounded-full font-medium" // Increased padding
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