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
        <img src="https://github.com/rayannm/UberHackathon/blob/main/images/logo.png?raw=true" alt="logo" class="container"/>
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
                <a href="https://github.com/rayannm/UberHackathon" className="text-blue-600 underline mr-4" onMouseEnter={() => handleHover('Github Repository')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>Github Repository</a>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-black rounded-lg p-4" >
              <h2 onMouseEnter={() => handleHover('Integration with Public Transport')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef} className="text-xl font-semibold mb-4 text-white">Integration with Public Transport</h2>
              <p onMouseEnter={() => handleHover('For UberLand\'s transportation system to function effectively, ridesharing and public transportation must be integrated seamlessly. We can decrease the use of private vehicles by merging these two modes of transportation. Private vehicles, while useful for solitary travel, have significantly increased traffic congestion. Each private vehicle on the road in a city where the roads are already congested worsens the issue, increasing commuting times, increasing greenhouse gas emissions, and lowering overall quality of life. Private vehicles generally only carry a limited number of passengers, which results in poor space usage. ')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef} className="text-white">
              For UberLand's transportation system to function effectively, ridesharing and public transportation must be integrated seamlessly. We can decrease the use of private vehicles by merging these two modes of transportation. Private vehicles, while useful for solitary travel, have significantly increased traffic congestion. Each private vehicle on the road in a city where the roads are already congested worsens the issue, increasing commuting times, increasing greenhouse gas emissions, and lowering overall quality of life. Private vehicles generally only carry a limited number of passengers, which results in poor space usage. 
              </p>
            </section>

            <section className="bg-black rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4 text-white"  onMouseEnter={() => handleHover('Traffic Congestion and Travel Times')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>Traffic Congestion and Travel Times</h2>
              <p className='text-white'  onMouseEnter={() => handleHover('Both people and companies in UberLand are significantly impacted by traffic congestion. One of the most major repercussions is the lengthening of commutes, which can have an impact on inhabitants personal and professional lives. Economic expenses associated with traffic congestion are also significant. Longer delivery durations and missed shipments can disrupt supply chains and raise operational costs, which can result in higher product prices. Traffic congestion has an impact on the environment as well. Vehicle emissions rise on congested roads, contributing to air pollution and related health problems.')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>
              Both people and companies in UberLand are significantly impacted by traffic congestion. One of the most major repercussions is the lengthening of commutes, which can have an impact on inhabitants' personal and professional lives. Economic expenses associated with traffic congestion are also significant. Longer delivery durations and missed shipments can disrupt supply chains and raise operational costs, which can result in higher product prices. Traffic congestion has an impact on the environment as well. Vehicle emissions rise on congested roads, contributing to air pollution and related health problems.
              </p>

            </section>

            <section className="bg-black rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4 text-white"  onMouseEnter={() => handleHover('Environmental Impact')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>Environmental Impact</h2>
            </section>

            <section className="bg-black rounded-lg p-4" >
              <h2 className="text-xl font-semibold mb-4 text-white" onMouseEnter={() => handleHover('Accessibility and Inclusivity')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef}>Accessibility and Inclusivity</h2>
            <p onMouseEnter={() => handleHover('In order to render and fully compile a web page, we developed a straightforward and effective user interface using the cutting-edge JavaScript framework React.js with Next.js, which works with the native compiler of Node.js. This has advantages over plain HTML in that it loads pages more quickly, uses less memory and storage space, and loads pages more quickly. This is remarkable because not everyone has access to powerful machines that can perform the A* algorithm. This is affordable and available. The User Interfaces main objective was to excel in both visual appeal and accessibility while meeting the needs of a wide range of age demographics. This understands the need for text-to-speech capabilities, font customization, and clever color schemes to accommodate everyone. ')}
            onMouseLeave={() => handleLeave()}
            ref={sectionRef} className='text-white'>In order to render and fully compile a web page, we developed a straightforward and effective user interface using the cutting-edge JavaScript framework React.js with Next.js, which works with the native compiler of Node.js. This has advantages over plain HTML in that it loads pages more quickly, uses less memory and storage space, and loads pages more quickly. This is remarkable because not everyone has access to powerful machines that can perform the A* algorithm. This is affordable and available. The User Interface's main objective was to excel in both visual appeal and accessibility while meeting the needs of a wide range of age demographics. This understands the need for text-to-speech capabilities, font customization, and clever color schemes to accommodate everyone. </p>
            </section>

            <section className='bg-black rounded-lg p-4'>

              <h1 className='text-xl font-semibold mb-4 text-white'>Graph generated by Analysis.py</h1>
              <img src="https://github.com/rayannm/UberHackathon/blob/main/images/analysis.png?raw=true" alt="Analysis.py" className="w-full h-48 object-cover rounded-lg" />

            </section>
            <section className='bg-black rounded-lg p-4'>

            <h1 className='text-xl font-semibold mb-4 text-white'>Graph generated by peakTimeAnalysis.py</h1>
            <img src="https://github.com/rayannm/UberHackathon/blob/main/images/peakTimeAnalysis.png?raw=true" alt="peakTimeAnalysis.py" className="w-full h-48 object-cover rounded-lg" />

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
        <p className="text-lg" style={{ fontSize: `${fontSize}px` }}>Created by Vinesh Ramroop, Gregory Roudenko, Rayan Mubarak, Maadhav Deekshita</p>
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
