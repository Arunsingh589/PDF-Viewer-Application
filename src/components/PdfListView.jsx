import React from 'react';

const PdfListView = ({ pdfs, onSelectPdf }) => {
    console.log('Rendering PDFs:', pdfs); // Debug log
    return (
        <div className="pdf-list">
            {pdfs.map((pdf, index) => (
                <div key={index} className="pdf-item" onClick={() => onSelectPdf(pdf)}>
                    <img
                        src={pdf.thumbnail || 'path/to/default-thumbnail.jpg'}
                        alt={pdf.name}
                        className="thumbnail"
                    />
                    <div className="details">
                        <h3>{pdf.title || 'Untitled PDF'}</h3>
                        <p>Author: {pdf.author || 'Unknown Author'}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PdfListView;
