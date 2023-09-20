import React, { useState, useRef } from 'react';
import Head from 'next/head';
import "./App.css"

export default function Home() {
  const [fontSize, setFontSize] = useState(16);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speech, setSpeech] = useState(null);
  const sectionRef = useRef(null);

  const increaseFontSize = () => {
    setFontSize(prevFontSize => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(prevFontSize => prevFontSize - 2);
  };

  const handleHover = (content) => {
    if (isSpeaking) {
      const newSpeech = new SpeechSynthesisUtterance(content);
      setSpeech(newSpeech);
      window.speechSynthesis.speak(newSpeech);
    }
  };

  const handleLeave = () => {
    window.speechSynthesis.cancel();
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const newSpeech = new SpeechSynthesisUtterance('Hover over a section to read');
      setSpeech(newSpeech);
      window.speechSynthesis.speak(newSpeech);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
      <Head>
        <title>Tech Support Titans</title>
      </Head>

      <header className="bg-white text-blue-600 text-center py-4 shadow-md">
        <h1 className="text-3xl font-semibold" onMouseEnter={() => handleHover('Tech Support Titans')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>Tech Support Titans</h1>
      </header>

      <main className="flex-grow p-4" style={{ fontSize: `${fontSize}px` }}>
        <div className="bg-white rounded-lg shadow-lg p-8 mx-4 my-8">
          <section className="mb-8" >
            <h2 className="text-2xl font-semibold mb-4" style={{ fontSize: `${fontSize}px` }} onMouseEnter={() => handleHover('Résume and Github')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>Résume & GitHub</h2>
            <div className="flex justify-between">
              <a href="https://www.virtualglobalhackathon.org/resume.pdf" className="text-blue-600 underline" onMouseEnter={() => handleHover('Click to download techincal documentation')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>Download Technical Documentation (LATEX)</a>
              <div>
                <a href="https://github.com/monek1" className="text-blue-600 underline mr-4" onMouseEnter={() => handleHover('Github Repository')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>Github Repository</a>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-black rounded-lg p-4" onMouseEnter={() => handleHover('Integration with Public Transport')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>
              <h2 className="text-xl font-semibold mb-4 text-white">Integration with Public Transport</h2>
              <img src="/images/graph1.png" alt="Integration with Public Transport Graph" className="w-full h-48 object-cover rounded-lg" />
            </section>

            <section className="bg-black rounded-lg p-4" onMouseEnter={() => handleHover('Integration with Public Transport')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>
              <h2 className="text-xl font-semibold mb-4 text-white">Traffic Congestion and Travel Times</h2>
              <img src="/images/graph2.png" alt="Traffic Congestion and Travel Times Graph" className="w-full h-48 object-cover rounded-lg" />
            </section>

            <section className="bg-black rounded-lg p-4" onMouseEnter={() => handleHover('Integration with Public Transport')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>
              <h2 className="text-xl font-semibold mb-4 text-white">Environmental Impact</h2>
            </section>

            <section className="bg-black rounded-lg p-4" onMouseEnter={() => handleHover('Integration with Public Transport')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>
              <h2 className="text-xl font-semibold mb-4 text-white">Accessibility and Inclusivity</h2>
            </section>
          </div>
        </div>
      </main>

      {/* Accessibility Button */}
      <button
        onClick={increaseFontSize}
        className="fixed bottom-2 right-4 p-2.5 text-lg bg-blue-600 text-white rounded-full shadow-lg"
      >
        Increase Font Size
      </button>
      <button
        onClick={decreaseFontSize}
        className="fixed bottom-2 left-4 p-2.5 text-lg bg-blue-600 text-white rounded-full shadow-lg"
      >
        Decrease Font Size
      </button>

      <footer className="bg-white text-blue-600 text-center py-4 shadow-md">
        <p className="text-lg" style={{ fontSize: `${fontSize}px` }}>Created by Vinesh R., Gregory R., Rayan M., Maadhav D.</p>
      </footer>

      <button
      className={`fixed top-3 left-4 p-3 ${isSpeaking ? 'bg-red-500' : 'bg-green-500'} text-lg text-white rounded-full shadow-lg`}
      onClick={toggleSpeech}
    >
      {isSpeaking ? 'Pause Speech' : 'Start Speech'}
      </button>

      <button
      className={`fixed top-3 right-4 p-3 bg-blue-600 text-lg text-white rounded-full shadow-lg`}
      href="./map"
      onClick={() => window.location.href = "./map"}
    >
      Map
      </button>

    </div>
  );
}
