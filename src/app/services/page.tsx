"use client";

import React from 'react';

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 1. Coaching & Counseling */}
        <section id="coaching-counseling" className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">1. Coaching &amp; Counseling</h2>
          <p className="mb-4">
            Personal, marriage, and family life coaching to bring clarity, healing, and growth.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Personal Mastery</li>
            <li>Marriage Coaching</li>
            <li>Parent-Child Relationship</li>
            <li>Family Counseling</li>
          </ul>
          <p>
            Rediscover harmony, deepen connection, and grow stronger together.
          </p>
        </section>

        {/* 2. Corporate Training */}
        <section id="corporate-training" className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">2. Corporate Training</h2>
          <p className="mb-4">
            Empowering teams to thrive through engaging and impactful learning.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Total Team Power</li>
            <li>Power Communication</li>
            <li>Engagement Skills</li>
          </ul>
          <p>
            Boost productivity, collaboration, and morale with tailor-made workshops.
          </p>
        </section>

        {/* 3. Parenting Workshops */}
        <section id="parenting-workshops" className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">3. Parenting Workshops</h2>
          <p className="mb-4">
            Support for both parents and students in navigating school and life challenges.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Raising Confident and Competent Children</li>
            <li>Raising Healthy, Happy, and Successful Children</li>
            <li>Helping Your Child Cope with Exam Stress</li>
          </ul>
          <p>...and more practical parenting topics.</p>
        </section>

        {/* 4. SUPER Student Workshop */}
        <section id="super-student" className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">4. SUPER Student Workshop</h2>
          <p className="mb-4">
            Equipping students with life-long learning skills and a winning mindset:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Positive &amp; Resilient Mindset</li>
            <li>Goal Setting &amp; Motivation</li>
            <li>Smart Learning Strategies</li>
            <li>Exam &amp; Time Management</li>
            <li>Stress Management</li>
          </ul>
          <p>
            Unlock your child’s potential—the SUPER way.
          </p>
        </section>
      </div>
    </main>
  );
}