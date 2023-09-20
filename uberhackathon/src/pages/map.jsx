import React from 'react';
import Head from 'next/head';
import "./App.css"
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default function MapPage() {
  const [startAddress, setStartAddress] = React.useState('');
  const [endAddress, setEndAddress] = React.useState('');

  const handleSelectStart = async (value) => {
    setStartAddress(value);
  };

  const handleSelectEnd = async (value) => {
    setEndAddress(value);
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
          {/* Map & Location Inputs */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Map & Location</h2>
            <div className="flex justify-between">
              <div className="w-1/2">
                <PlacesAutocomplete
                  value={startAddress}
                  onChange={setStartAddress}
                  onSelect={handleSelectStart}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                      <input {...getInputProps({ placeholder: 'Where are you?' })} className="p-2 mb-4 w-full rounded border" />
                      <div>
                        {loading ? <div>Loading...</div> : null}
                        {suggestions.map((suggestion, index) => {
                          return (
                            <div {...getSuggestionItemProps(suggestion)}>
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>

                <PlacesAutocomplete
                  value={endAddress}
                  onChange={setEndAddress}
                  onSelect={handleSelectEnd}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                      <input {...getInputProps({ placeholder: 'Where do you want to go?' })} className="p-2 mb-4 w-full rounded border" />
                      <div>
                        {loading ? <div>Loading...</div> : null}
                        {suggestions.map((suggestion, index) => {
                          return (
                            <div {...getSuggestionItemProps(suggestion)}>
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>

                {/* Submit Button */}
                <button type="submit" className="p-2 w-full rounded bg-green-600 text-white">Submit</button>
              </div>
              <div className="w-1/2">
                {/* Your map can go here */}
              </div>
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