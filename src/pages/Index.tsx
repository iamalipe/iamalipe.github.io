import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const skills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Python", level: 40, category: "Backend" },
    { name: "PostgreSQL", level: 50, category: "Database" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "AWS", level: 78, category: "DevOps" },
    { name: "Docker", level: 65, category: "DevOps" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Abhiseck
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-blue-400 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Abhiseck Bhattacharya
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Crafting digital experiences with modern technologies. I build
              scalable web applications that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("skills")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition-all hover:scale-105"
              >
                View My Skills
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-slate-600 text-blue-600 hover:text-blue-700 px-8 py-3 rounded-lg text-lg transition-all hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a full-stack developer with 5+ years of experience,
                dedicated to creating impactful web applications. My specialty
                is simplifying complex problems into clean, effective solutions.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My expertise spans React for frontend development, Node.js for
                robust backends, and AWS for scalable cloud solutions. I am
                committed to crafting clean, efficient code and continuously
                learning about emerging industry trends.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-slate-800 rounded-full text-blue-400 border border-slate-700">
                  5+ Years Experience
                </span>
                <span className="px-4 py-2 bg-slate-800 rounded-full text-green-400 border border-slate-700">
                  20+ Projects Completed
                </span>
                <span className="px-4 py-2 bg-slate-800 rounded-full text-purple-400 border border-slate-700">
                  Remote Ready
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <img src="dp.jpg" alt="Abhiseck" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all hover:scale-105"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">
                    {skill.name}
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {skill.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-slate-400 text-sm mt-2 block">
                    {skill.level}%
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects. Let's create something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all hover:scale-105">
              <a href="mailto:abhiseck@outlook.com">
                <CardContent className="pt-6 text-center">
                  <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-slate-400">Abhiseck@outlook.com</p>
                </CardContent>
              </a>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all hover:scale-105">
              <a
                href="https://www.linkedin.com/in/abhiseck"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardContent className="pt-6 text-center">
                  <Linkedin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                  <p className="text-slate-400">@abhiseck</p>
                </CardContent>
              </a>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all hover:scale-105">
              <a
                href="https://github.com/iamalipe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardContent className="pt-6 text-center">
                  <Github className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">GitHub</h3>
                  <p className="text-slate-400">@iamalipe</p>
                </CardContent>
              </a>
            </Card>
          </div>

          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
          >
            <a href="mailto:abhiseck@outlook.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Abhiseck Bhattacharya. Built with React
            & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
