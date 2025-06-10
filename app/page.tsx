import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi! I'm Matthew
      </h1>
      <p className="mb-4">
        {`I'm an undergraduate student at the University of Toronto. I'm specializing in Statistics
        with focus in Machine Learning and minoring in Computer Science.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
