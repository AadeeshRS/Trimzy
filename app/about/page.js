import React from 'react'

const About = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-amber-50 rounded-xl shadow flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-green-900 mb-2">About Trimzy</h1>
      <p>
        <span className="font-semibold">Trimzy</span> is a simple and efficient URL shortener built to help you share long links in a compact, easy-to-remember format. Whether you’re sharing on social media, in emails, or anywhere else, Trimzy makes your links cleaner and more manageable.
      </p>
      <div>
        <span className="font-semibold">Features:</span>
        <ul className="list-disc ml-6 mt-2">
          <li>Instantly generate short URLs for any link</li>
          <li>Custom short URL options</li>
          <li>Modern, user-friendly interface</li>
          <li>Open source and privacy-focused</li>
        </ul>
      </div>
      <p>
        Trimzy is built using <span className="font-semibold">Next.js</span>, <span className="font-semibold">MongoDB</span>, and <span className="font-semibold">React</span>. Our goal is to provide a fast, reliable, and secure service for everyone.
      </p>
      <p>
        <span className="font-semibold">Get started</span> by clicking the <span className="text-green-700 font-bold">Try Now</span> button above, or check out our source code on GitHub!
      </p>
    </div>
  )
}

export default About