// src/components/UploadForm.js

import React, { useState } from 'react';
import axios from 'axios';

function UploadForm({ hasPaid }) {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus('');
  };

  const handleUpload = async () => {
    if (!file) return setUploadStatus('❌ Please select a file first.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadStatus('✅ Upload successful!');
      console.log('Response:', response.data);
    } catch (error) {
      setUploadStatus('❌ Upload failed.');
      console.error('Upload error:', error);
    }
  };

  return (
    <div className="space-y-4 text-sm">
      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt,.rtf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
        className="block w-full text-gray-700 bg-white border border-gray-300 rounded px-4 py-2"
        disabled={!hasPaid}
      />
      <button
        onClick={handleUpload}
        disabled={!hasPaid}
        className={`w-full px-4 py-2 rounded font-medium ${
          hasPaid
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Upload Resume
      </button>
      {uploadStatus && <p className="text-center text-gray-600 italic">{uploadStatus}</p>}
    </div>
  );
}

export default UploadForm;
