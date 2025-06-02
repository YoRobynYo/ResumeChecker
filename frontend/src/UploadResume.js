// UploadResume.js

import React, { useState } from 'react';

function UploadResume() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setUploading(true);
    try {
      const res = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        console.log('Upload successful:', data);

        // Open the uploaded file directly in a new tab (fixing port to 5000)
        if (data.url) {
          const fullUrl = `http://localhost:5000${data.url}`;
          window.open(fullUrl, '_blank');
        } else {
          alert('File uploaded but no URL returned.');
        }
      } else {
        const errorData = await res.json();
        console.error('Upload error:', errorData);
        alert('Upload failed: ' + (errorData.error || 'Unknown error.'));
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('Network error. Please make sure the backend is running.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Upload Resume</h2>
      <input type="file" accept=".pdf,.docx,.txt" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload to Backend'}
      </button>
    </div>
  );
}

export default UploadResume;
