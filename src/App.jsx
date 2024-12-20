import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [pdfs, setPdfs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [error, setError] = useState(null);

  // Fetch PDF data from the API
  useEffect(() => {
    axios
      .get('https://api.npoint.io/dee51ea017d20efdfcc8')
      .then((response) => {
        const validPdfs = response.data.filter((pdf) => pdf.name && pdf.link);
        setPdfs(validPdfs);
        console.log(validPdfs);

      })
      .catch((error) => {
        setError('Failed to load PDFs. Please try again later.');
      });
  }, []);

  // Filter PDFs based on search term
  const filteredPdfs = pdfs.filter((pdf) =>
    pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle PDF click to open in reader view
  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
  };

  // Fallback image if no thumbnail is available
  const getImageUrl = (pdf) => {
    return pdf.thumbnail || `https://via.placeholder.com/100x150?text=${pdf.name}`;
  };

  return (
    <div className="app">
      <header>
        <h1>PDF Browser</h1>
        <input
          type="text"
          placeholder="Search PDFs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>
      <main>
        {error ? (
          <p className="error">{error}</p>
        ) : selectedPdf ? (
          // Reader View
          <div className="reader-view">
            <button onClick={() => setSelectedPdf(null)}>Back to List</button>
            <h2>{selectedPdf.name}</h2>
            <p><strong>Author:</strong> {selectedPdf.author || 'Unknown'}</p>
            <iframe
              src={selectedPdf.link}
              title={selectedPdf.name}
              width="100%"
              height="600px"
              frameBorder="0"
            />
          </div>
        ) : (
          // List View
          <div className="pdf-list">
            {filteredPdfs.length === 0 ? (
              <p>No PDFs available or matching your search.</p>
            ) : (
              filteredPdfs.map((pdf, index) => (
                <div key={index} className="pdf-card" onClick={() => handlePdfClick(pdf)}>
                  <img src={getImageUrl(pdf)} alt={pdf.name} />
                  <h3>{pdf.name}</h3>
                  <p>{pdf.author || 'Unknown Author'}</p>
                  <button className="open-pdf">Open PDF</button>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
