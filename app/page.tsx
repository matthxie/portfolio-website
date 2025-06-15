import FadeInOnScroll from "app/components/FadeInOnScroll";
import ProjectCard from "app/components/ProjectCard";


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
    description: "Used ChatGPT and AWS to automatically handle customer queries.",
    stack: ["AWS", "OpenAI", "Python", "Twilio"],
    githubLink: "https://github.com/yourproject"
  },
];


export default function Page() {
  return (
      <section>
        <div className="h-screen w-full flex items-center px-12">
          <div>
            <h1 className="mb-8 text-5xl font-semibold tracking-tighter">
              Hi! I'm Matthew
            </h1>
            <p className="mb-4">
              {`I'm an undergraduate student at the University of Toronto. I'm specializing in Statistics
              with focus in Machine Learning and minoring in Computer Science.`}
            </p>
            <p className="mb-4">
              {`I have an interest in advancing deep learning and AI, as well as building products that
              leverage these technologies. I have research experience quantizing Protein Language Models (PLMs)
              built using Transformer architectures with LoRA and QLoRA. I'm also assisting with exploring novel
              prompting and agentic techniques that allow LLMs to solve more complex MDP reasoning problems.`}
            </p>
          </div>
        </div>


        <section className="h-screen w-full flex">
          <div className="max-w-3xl mx-auto px-4">
            <FadeInOnScroll>
              <h1 className="mb-8 text-5xl font-semibold tracking-tighter">
                My Projects
              </h1>
              {projects.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
              ))}
            </FadeInOnScroll>
          </div>
        </section>
        
    </section>
      
  )
}
