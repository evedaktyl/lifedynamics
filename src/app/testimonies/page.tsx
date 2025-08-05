"use client";

import React from 'react';

const testimonials = [
  {
    quote: `Celine is a captivating, dynamic and inspiring speaker. She is able to
reach out to her participants and provide them with something they can
practice in their everyday life, work or personal. Her presentations are
very easy to relate to and the group interaction kept everyone energized
and highly charged. Even the ‘toughest’ participants came out of their
shells!`,
    author: "Patricia Poh",
    role: "Property Director of MKA Group",
  },
  {
    quote: `Celine exhibits exceptional training style. Her clever use of body
language and voice intonation left an imprint in the participant's life.
She also takes time to understand the culture of the organization and
customize the training program to successfully reach out to participants.`,
    author: "Goh Choi Eng",
    role: "WW Operations Integration Manager, Hewlett-Packard Singapore (Pte) Ltd",
  },
  {
    quote: `Celine embarks on the journey by understanding all issues and
embraces them into her training programs which touches your heart
like no others. I truly and fully recommend her to any organization as
her training program is a tremendous and effective method in all
challenging times.`,
    author: "Bernard Loh",
    role: "Founder and CEO, UAT Air-Conditioning Sdn Bhd",
  },
  {
    quote: `蔡宝仁女士的讲座，切合家庭教育的主题，
涉及了家庭的功能，家长的角色，孩子的能力培养等方面，
观点新颖，资料翔实，迎合当代家庭教育的潮流和趋势。
她女士的口才一流，讲解生动有趣，不但有实例，还配有道具，
与听众之间有互动。结合讲座的主题，蔡女士还设计了很多问题，
供听众思考和解答。我听了她的讲座，确实获益匪浅。
她不但厘清了我的一些疑难问题，
还对我教育孩子有实际帮助，如：如何与孩子沟通，教育孩子的方式。

我真心感谢她，希望有更多的家长来参与讲座，一起分享我们最关心的家庭教育的观念和方法。`,
    author: "胡小雪",
    role: "崇辉小学一对孩子的家长－十八岁和十岁 (August 2011)",
    isChinese: true,
  },
  {
    quote: `Dear Celine,

I truly enjoy your talk on Resilient Parents raise Resilient Children. You’re spot on when you shared with us it is our belief system that governs how we see the world and how we react to situations. Your openness in sharing how your personal childhood and life experiences shaped your belief system resonated with many parents in the room. Some even shared their own personal unpleasant childhood experiences that they wish not to pass down to their kids. Your ability to conduct the talk at a very personal level using many life examples in English, Mandarin and Bahasa, struck a chord with those who were present in the room. Am sure, many parents like me have benefitted from your talk. We look forward to your next Parenting talk.

BR,
Ally Ng`,
    author: "Ally Ng",
    role: "Director/Co-founder of Oxbridge and Our Fun Place, Mother of 2 kids aged 10 and 6",
  },
  {
    quote: `Celine's energetic and engaging style kept our team invigorated,
challenged and in high team spirit. They came back to office fully
charged, emotionally connected, values and performance focus and
most importantly, become better persons. Our 3 days with Celine is
really one of my best investments.`,
    author: "Melvin Kiandee",
    role: "Founder of MKA Group",
  },
  {
    quote: `Please find my comments as a parent who attended your parenting talk on 22 July @ Beacon Primary School.

Raising resilient children - Strawberry & Coconut type of children, which one is yours? Celine uses very concrete, daily, easy to understand concepts and illustrations for parents to realise what type the truth of many children today. They are strawberries (so soft that can be crushed with 2 fingers) and how, we as parents transform them into a coconut (can survive all ups and downs and still taste the sweetness of life)! I've never heard this, so a great lesson I've learned. Great fun with lots of humor: enjoyable and thank you!

This is truthful and not because you are my friend so please take them genuinely.

Once again, I've not wasted my time for the talk, thank you.

God Bless!`,
    author: "Gillian",
    role: "General Manager of SEA and mother of a 10-year-old boy",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Testimonials</h1>
      {/* Masonry-style two-column flow */}
      <div
        className="columns-1 md:columns-2"
        style={{ columnGap: '1.5rem', rowGap: '1.5rem' }}
      >
        {testimonials.map((t, idx) => (
          <section
            key={idx}
            className="bg-gray-50 p-6 mb-6 rounded-lg shadow-md break-inside-avoid"
          >
            <p className="mb-4 italic whitespace-pre-line">
              {t.quote}
            </p>
            <p className="font-semibold">{t.author}</p>
            <p className="text-sm text-gray-600">{t.role}</p>
          </section>
        ))}
      </div>
    </main>
  );
}