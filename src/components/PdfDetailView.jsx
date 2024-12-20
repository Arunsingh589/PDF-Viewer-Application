import React from 'react';

const PdfDetailView = ({ selectedPdf, onBack }) => {
    return (
        <div className="pdf-detail">
            <button className="back-btn" onClick={onBack}>← Back</button>
            {selectedPdf && (
                <>
                    <h2>{selectedPdf.title}</h2>
                    <iframe
                        src={selectedPdf.pdfUrl}
                        title={selectedPdf.title}
                        className="pdf-viewer"
                    ></iframe>
                </>
            )}
        </div>
    );
};

export default PdfDetailView;
