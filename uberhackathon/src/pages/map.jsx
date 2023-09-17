import Head from 'next/head';
import styles from '../styles/globals.css';

export default function MapPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-500 via-yellow-500 to-green-500">
      <Head>
        <title>Map Navigation</title>
      </Head>

      {/* Header */}
      <header className="bg-white text-green-600 text-center py-4 shadow-md">
        <h1 className="text-3xl font-semibold">Map Navigation</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mx-4 my-8">
          <form onSubmit={handleSubmit}>
            {/* Map & Location Inputs */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Map & Location</h2>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <input type="text" placeholder="Where are you?" className="p-2 mb-4 w-full rounded border" />
                  <input type="text" placeholder="Where do you want to go?" className="p-2 mb-4 w-full rounded border" />
                  {/* Submit Button */}
                  <button type="submit" className="p-2 w-full rounded bg-green-600 text-white">Submit</button>
                </div>
                <div className="w-1/2">
                  {/* Your map can go here */}
                </div>
              </div>
            </section>
          </form>

          {/* Frame for JS/Python Output */}
          <section className="bg-black rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">JS/Python Output</h2>
            {/* Leave this section blank for your JS/Python output */}
            <div className="w-full h-48 bg-white rounded-lg">
              {/* Your image will be displayed here */}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-green-600 text-center py-4 shadow-md">
        <p className="text-lg">Created by Vinesh R., Gregory R., Rayan M., Maadhav D.</p>
      </footer>
    </div>
  );
}