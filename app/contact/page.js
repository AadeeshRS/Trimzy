import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto my-10 p-8 bg-amber-50 rounded-xl shadow flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-green-900 mb-2">Contact Us</h1>
      <p>
        Have questions, feedback, or need support? We'd love to hear from you!
      </p>
      <div>
        <span className="font-semibold">Email:</span>{' '}
        <a
          href="mailto:srivastavaaadeesh@gmail.com"
          className="text-green-700 underline"
        >
          srivastavaaadeesh@gmail.com
        </a>
      </div>
      <p>
        We aim to respond to all inquiries within 24 hours.
      </p>
    </div>
  )
}

export default Contact