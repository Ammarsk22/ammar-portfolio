import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-bg text-ink min-h-screen font-sans selection:bg-ink selection:text-bg">
      <main>
        {/* Home Section (Hero pehle se Navbar include karta hai) */}
        <Hero />

        {/* About Section */}
        <section id="about" className="min-h-screen py-24 px-6 flex flex-col items-center justify-center border-t border-edge">
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-8">About Me</h2>
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed">
              I am an Aspiring Web Developer and B.Tech student in Computer Technology at Ahinsa Institute of Technology. I have hands-on experience in building responsive cloud-based applications. I have a strong grasp of frontend technologies, PWA development, and UI/UX principles, and I am always eager to write clean code and build user-centric designs.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-24 px-6 flex flex-col items-center justify-center border-t border-edge bg-black/5">
          <div className="max-w-5xl w-full">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-16 text-center">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="p-8 border border-edge rounded-3xl bg-glass backdrop-blur-sm hover:border-ink/30 transition-colors">
                <h3 className="text-2xl font-bold mb-3">Shaikh Digital ERP</h3>
                <p className="text-ink-soft mb-6 leading-relaxed">
                  A cloud-based ERP for the flex printing industry with inventory tracking and GSTR-1 export. Engineered a dual-printing mode (A4 & Thermal) with offline-capable PWA support and WhatsApp payment reminders.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  <span className="px-3 py-1 rounded-full border border-edge">HTML/CSS/JS</span>
                  <span className="px-3 py-1 rounded-full border border-edge">Firebase</span>
                  <span className="px-3 py-1 rounded-full border border-edge">PWA</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="p-8 border border-edge rounded-3xl bg-glass backdrop-blur-sm hover:border-ink/30 transition-colors">
                <h3 className="text-2xl font-bold mb-3">Personal Expense Manager</h3>
                <p className="text-ink-soft mb-6 leading-relaxed">
                  A cloud-powered finance tracker featuring voice input for transactions, multi-account support, and visual spending analysis using Chart.js. Includes dark mode and CSV export capabilities.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  <span className="px-3 py-1 rounded-full border border-edge">Tailwind CSS</span>
                  <span className="px-3 py-1 rounded-full border border-edge">JavaScript</span>
                  <span className="px-3 py-1 rounded-full border border-edge">Chart.js</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="p-8 border border-edge rounded-3xl bg-glass backdrop-blur-sm hover:border-ink/30 transition-colors md:col-span-2 lg:col-span-1 lg:col-start-1 lg:translate-x-1/2">
                <h3 className="text-2xl font-bold mb-3">Photo Contest App</h3>
                <p className="text-ink-soft mb-6 leading-relaxed">
                  Created a contest registration site featuring real-time photo previews, strict form validation, and automatically generated participant certificates using jsPDF.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  <span className="px-3 py-1 rounded-full border border-edge">JavaScript</span>
                  <span className="px-3 py-1 rounded-full border border-edge">jsPDF</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 flex flex-col items-center justify-center border-t border-edge">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12">Technical Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'HTML5 & CSS3', 'Firebase', 'Python', 'Java', 'PWA Development', 'UI/UX Design', 'Git & GitHub'].map((skill) => (
                <span key={skill} className="px-5 py-2.5 text-sm sm:text-base border border-edge rounded-full text-ink-soft hover:text-ink hover:border-ink/50 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 flex flex-col items-center justify-center border-t border-edge bg-black/5">
          <div className="max-w-3xl w-full">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12 text-center">Experience</h2>
            
            <div className="relative border-l border-edge pl-8 ml-4 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-bg border-[4px] border-ink" />
                <h3 className="text-2xl font-bold">Virtual Software Engineer Intern</h3>
                <p className="text-ink-soft font-medium mb-3">Forage • Nov 2024</p>
                <p className="text-ink-soft leading-relaxed">
                  Completed an engineering simulation focusing on feature proposal, object creation, bug fixing, and overall system improvements.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-bg border-[4px] border-edge" />
                <h3 className="text-2xl font-bold">Virtual Solutions Architect Intern</h3>
                <p className="text-ink-soft font-medium mb-3">Forage AWS • May 2025</p>
                <p className="text-ink-soft leading-relaxed">
                  Participated in a simulation to design scalable, cloud-based hosting architectures in a mock AWS environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-[70vh] py-24 px-6 flex flex-col items-center justify-center border-t border-edge">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">Let's Connect</h2>
          <p className="text-lg text-ink-soft max-w-xl text-center mb-10">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:ammarsk200422@gmail.com" 
            className="px-8 py-4 bg-ink text-bg font-bold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Say Hello
          </a>
        </section>
        
        {/* Footer */}
        <footer className="py-8 text-center text-ink-soft text-sm border-t border-edge">
          <p>Designed & Built by Ammar Shaikh</p>
        </footer>
      </main>
    </div>
  );
}

export default App;