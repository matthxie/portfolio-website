import FadeInOnScroll from "app/components/FadeInOnScroll";


export default function Page() {
  return (
    <section>
      <FadeInOnScroll>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi! I'm Matthew
      </h1>
      <p className="mb-4">
        {`I'm an undergraduate student at the University of Toronto. I'm specializing in Statistics
        with focus in Machine Learning and minoring in Computer Science.`}
      </p>
      <p className='mb-4'>
        {`I have an interest in advancing deep learning and AI, as well as building products that
        leverage these technologies. I have research experience quantizing Protein Language Models (PLMs)
        built using Transformer architecutres with LoRA and QLoRA. I'm also assisting with exploring novel
        prompting and agentic techniques that allow LLMs to solve more complex MDP reasoning problems.`}
      </p>
      </FadeInOnScroll>
    </section>
  )
}
