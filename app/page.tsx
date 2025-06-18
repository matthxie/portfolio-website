import FadeInOnScroll from "app/components/FadeInOnScroll";
import ProjectCard from "app/components/FlipCard";


const projects = [
  {
    title: "DQN Tetris Bot",
    description: "Developed a DQN agent to play tetris on a custom-built classic Tetris environment",
    stack: ["PyTorch", "Python"],
    githubLink: "https://github.com/yourproject",
  },
  {
    title: "AI Customer Service Center",
    description: "Used ChatGPT and AWS to automatically handle customer queries.",
    stack: ["AWS", "OpenAI", "Python", "Twilio"],
    githubLink: "https://github.com/yourproject"
  },
  {
    title: "",
    description: "Used Twilio, AWS, and ChatGPT to automatically handle customer queries.",
    stack: ["AWS", "OpenAI", "Python", "Twilio"],
    githubLink: "https://github.com/yourproject"
  },
];


const experiences = [
  {
    title: "Machine Vision Engineer Intern",
    description: "Zebra Technologies",
    stack: ["C++, C#, CNN"],
    githubLink: "https://github.com/yourproject"
  },
  {
    title: "Machine Learning Research Intern",
    description: "Pardee Lab",
    stack: ["PyTorch", "Python", "Reinforcement Learning"],
    githubLink: "https://github.com/yourproject",
  },
  {
    title: "Software Developer Intern",
    description: "Fundserv Inc",
    stack: ["Angular", "TypeScript", "Java"],
    githubLink: "https://github.com/yourproject"
  },
];


export default function Page() {
  return (
      <section>
        <section className="h-screen w-full flex items-center px-12">
          <div className="max-w-4xl">
            <h1 className="mb-8 text-5xl font-semibold tracking-tighter">
              Hi! I'm Matthew
            </h1>
            <p className="mb-4">
              {`I'm an undergraduate student at the University of Toronto. I'm specializing in Statistics
              with focus in Machine Learning and minoring in Computer Science.`}
            </p>
          </div>
        </section>

        
        <section className="h-[500px] w-full flex px-12">
          <div className="max-w-3xl max-w-4xl">
            <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
              About Me
            </h1>
            <FadeInOnScroll>
            <p className="mb-4">
              {`I have an interest in deep learning and AI research and building products that
              leverage these technologies. I have research experience quantizing Protein Language Models (PLMs)
              built using Transformer architectures with LoRA and QLoRA. I'm also assisting with exploring novel
              prompting and agentic techniques that allow LLMs to solve more complex MDP reasoning problems.`}
            </p>
            </FadeInOnScroll>
          </div>
        </section>


        <section className="h-[600px] w-full px-12 py-20">
          <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
            What I'm Doing
          </h1>
          <FadeInOnScroll>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
              ))}
            </div>
          </div> 
          </FadeInOnScroll>
        </section>


        <section className="h-[600px] w-full px-12 py-20">
          <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
            My Projects
          </h1>
          <FadeInOnScroll>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
              ))}
            </div>
          </div> 
          </FadeInOnScroll>
        </section>
        
    </section>
  )
}
