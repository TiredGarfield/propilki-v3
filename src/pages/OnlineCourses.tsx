import { Check, Star, Award, Users, Clock, BookOpen, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const courses = [
  {
    id: 1,
    title: "Online course \"Dry File Manicure: Australian Style No Cuts Eco-Friendly\"",
    subtitle: "Master the Art of Safe Manicures",
    description: "Transform your nail care routine with our comprehensive online course. Learn the revolutionary dry file technique that's taking the industry by storm.",
    features: [
      "Basic course on dry file manicure",
      "Removal of artificial coating",
      "How to become your own nail tech",
      "Unpacking"
    ],
    additionalLectures: [
      "Applying Nail Polish",
      "French Manicure",
      "From Reels"
    ],
    type: "online",
    duration: "6 weeks",
    students: 1250,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop&crop=center",
    badge: "Most Popular",
    gradient: "from-rose-500 to-pink-500"
  },
  {
    id: 2,
    title: "Offline course \"Nail Filing\"",
    subtitle: "Hands-On Professional Training",
    description: "Get personalized instruction and practice on real models in our intensive offline course.",
    features: [
      "Individual instruction with personal feedback",
      "Practice on models with varying cuticle complexity",
      "Official PROPILKI certification upon completion",
      "Techniques for attracting more clients and reducing work time"
    ],
    price: "one day – 220 euros, two days – 260 euros",
    type: "offline",
    duration: "1-2 days",
    students: 350,
    rating: 5.0,
    badge: "Certification",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    id: 3,
    title: "Offline course \"How to become your own nail tech\"",
    subtitle: "Personal Nail Care Mastery",
    description: "Perfect for busy individuals who want salon-quality results at home in just 15 minutes.",
    features: [
      "Learn perfect manicure without pain or cuts",
      "Step-by-step algorithm with personal guidance",
      "Optimal processing methods for any lifestyle",
      "Simple technique requiring minimal materials",
      "Portable tools that fit in your purse"
    ],
    price: "160 euros",
    type: "offline",
    duration: "1 day",
    students: 420,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&h=600&fit=crop&crop=center",
    badge: "Quick Results",
    gradient: "from-emerald-500 to-teal-500"
  }
];

const faqItems = [
  {
    question: "What is nail filing?",
    answer: "Nail filing is a safe and effective dry manicure technique that uses only files to process cuticles without the need for cutting tools or electric files."
  },
  {
    question: "Is nail filing safe?",
    answer: "Yes, nail filing is completely safe as it doesn't involve any cutting tools, reducing the risk of injury or infection."
  },
  {
    question: "What materials do you need?",
    answer: "You only need specialized files and interchangeable abrasives that can easily fit in your purse or pocket."
  },
  {
    question: "Can I do nail filing myself?",
    answer: "Absolutely! The technique is simple and designed to be easily learned, allowing you to do professional-quality manicures at home."
  },
  {
    question: "How can I enroll in the course?",
    answer: "You can enroll by clicking the enrollment buttons for each course or contacting us directly for more information."
  }
];

const stats = [
  { number: "2,000+", label: "Happy Students", icon: Users },
  { number: "4.9★", label: "Average Rating", icon: Star },
  { number: "95%", label: "Success Rate", icon: Award },
  { number: "24/7", label: "Support", icon: Clock }
];

const OnlineCourses = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Professional Nail Care Training</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6 tracking-tight leading-tight">
                Dry File
                <span className="block text-primary">
                  Manicure School
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                Master the revolutionary dry manicure technique with personalized instruction. 
                Safe methods, fast results — perfect for professionals and beginners alike.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg hover-lift">
                  Discover more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative scale-in">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden elegant-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=600&fit=crop&crop=center"
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 fade-in">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4 group-hover:scale-110 smooth-transition">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-light text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden elegant-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop&crop=center"
                  alt="About Yulia"
                  className="w-full h-full object-cover hover-lift"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Meet Your Instructor</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
                Let's get to know 
                <span className="block text-primary">each other!</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  My name is <span className="font-medium text-foreground">Yulia</span>, and I am an instructor in dry file manicure. My goal is to teach you a safe and effective dry manicure technique that is suitable for all skin types.
                </p>
                <p>
                  With over a decade of experience in the field, I will help you master a new technique and improve your professional approach.
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg hover-lift">
                  Contact
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                    ))}
                  </div>
                  <span className="text-sm">2,000+ happy students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Courses</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              Our Training Programs
            </h2>
          </div>

          <div className="space-y-8">
            {courses.map((course, index) => (
              <Card key={course.id} className="group relative overflow-hidden border border-border elegant-shadow hover:shadow-lg smooth-transition">
                <div className="relative p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {course.image && (
                      <div className="relative">
                        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                          <img 
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover hover-lift"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className={!course.image ? "lg:col-span-2" : ""}>
                      <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-4 leading-tight">
                        {course.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-8">{course.description}</p>
                      
                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                              <Check className="h-3 w-3 text-primary-foreground" />
                            </div>
                            <span className="text-muted-foreground leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {course.additionalLectures && (
                        <div className="mb-8 p-6 bg-muted/50 rounded-lg border border-border">
                          <p className="font-medium text-foreground mb-4">
                            Additional lectures in the online course:
                          </p>
                          <ul className="space-y-1">
                            {course.additionalLectures.map((lecture, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground">
                                ● {lecture}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-6 border-t border-border">
                        {course.price && (
                          <div>
                            <p className="text-xl font-light text-foreground">Price: {course.price}</p>
                          </div>
                        )}
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg hover-lift">
                          {course.type === "online" ? "Buy" : "Enroll"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Reviews</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              What Our Students Say
            </h2>
          </div>

          <Card className="relative p-8 lg:p-12 border border-border elegant-shadow">
            <blockquote className="text-lg text-muted-foreground font-light leading-relaxed text-center italic">
              "The course offers excellent practical skills, which is very important in this profession. Yulia shares her experience throughout the learning process, teaching how to do things correctly from the very beginning and explaining the consequences of mistakes. She is very friendly, positive, and most importantly, incredibly patient. Highly recommend!"
            </blockquote>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">FAQ</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card rounded-lg border border-border elegant-shadow overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-medium text-foreground">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 animate-accordion-down">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnlineCourses;