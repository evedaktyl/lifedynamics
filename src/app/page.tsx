import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
    <main className="flex flex-col">
<section className="bg-neutral-surface py-20 flex justify-center">
  <div className="max-w-4xl w-full flex flex-col items-center space-y-8 px-6">
    {/* Text Block */}
    <div className="space-y-4 text-center">
      <h1 className="font-accent font-extrabold text-5xl md:text-6xl text-accent-blue">
        EMPOWER
      </h1>
      <p className="font-body text-lg text-neutral-text">
        Your family.<br/>
        Your work.<br/>
        Your life.
      </p>
      <Link href="/book"
        className="inline-block bg-support-pink hover:bg-support-pink/90 text-neutral-dark font-semibold px-8 py-3 rounded-lg shadow-lg transition">
          Book a Session
      </Link>
    </div>

    {/* Image */}
    <div className="rounded-xl overflow-hidden border-4 border-neutral-text w-full">
      <Image
        src="/people2.png"
        alt="Family session"
        width={800}
        height={400}
        className="object-cover w-full h-auto"
      />
    </div>
  </div>
</section>



      {/* ┌──────────────────────────────────────────┐ */}
      {/* │ 2. Meet Celine Section                  │ */}
      {/* └──────────────────────────────────────────┘ */}
      <section className="bg-neutral-surface py-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <div className="w-full md:w-1/2">
            <Image
              src="/profile.jpg"
              alt="Celine Veron Chai"
              width={600}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-accent text-4xl text-neutral-dark">
              Meet Celine Veron Chai
            </h2>
            <p className="font-body text-neutral-text leading-relaxed">
              Celine is a certified family, marriage, and student coach with over
              20 years of experience helping individuals and families thrive.
              Her compassionate, evidence-based approach will empower you to
              navigate life’s challenges with clarity and confidence.
            </p>
            <Link href="/profile" className="inline-block bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg">
                Learn More
            </Link>
          </div>
        </div>
      </section>

    </main>
    </>
  )
}
