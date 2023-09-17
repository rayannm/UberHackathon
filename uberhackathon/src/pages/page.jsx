import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
      <Head>
        <title>Tech Support Titans</title>
      </Head>

      {/* Header */}
      <header className="bg-white text-blue-600 text-center py-4 shadow-md">
        <h1 className="text-3xl font-semibold">Tech Support Titans</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mx-4 my-8">
          {/* Resume & GitHub */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Resume & GitHub</h2>
            <div className="flex justify-between">
              <a href="https://www.virtualglobalhackathon.org/resume.pdf" className="text-blue-600 underline">Download Technical Documentation (LATEX)</a>
              <div>
                <a href="https://github.com/monek1" className="text-blue-600 underline mr-4">Monek #1 GitHub</a>
              </div>
            </div>
          </section>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Integration with Public Transport */}
            <section className="bg-black rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Integration with Public Transport</h2>
              <img src="/images/graph1.png" alt="Integration with Public Transport Graph" className="w-full h-48 object-cover rounded-lg" />
            </section>

            {/* Traffic Congestion and Travel Times */}
            <section className="bg-black rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Traffic Congestion and Travel Times</h2>
              <img src="/images/graph2.png" alt="Traffic Congestion and Travel Times Graph" className="w-full h-48 object-cover rounded-lg" />
            </section>

            {/* Environmental Impact */}
            <section className="bg-black rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Environmental Impact</h2>
              {/* Add your content here */}
            </section>

            {/* Accessibility and Inclusivity */}
            <section className="bg-black rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Accessibility and Inclusivity</h2>
              {/* Add your content here */}
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-blue-600 text-center py-4 shadow-md">
        <p className="text-lg">Created by Vinesh R., Gregory R., Rayan M., Maadhav D.</p>
      </footer>
    </div>
  )
}