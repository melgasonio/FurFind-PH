import { useState, useRef } from 'react';
import usePetReportContext from '../hooks/usePetReportContext';
import { uploadImage } from '../apis/firebase/firebaseStorage';
import { compressImage } from '../apis/imagecompression/imageCompression'

const PetReportForm = () => {
  const { dispatch } = usePetReportContext();

  const [formData, setFormData] = useState({
    name: '',
    status: 'lost',
    breed: '',
    last_seen_date: '',
    notes: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const imageInputRef = useRef(null)
  const [error, setError] = useState(null);

  // Update form state
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setImageFile(files[0]); // Save file separately
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert last_seen_date to Date object
      const lastSeenDate = new Date(formData.last_seen_date)

      // Prepare the data to be sent to the server
      const reportData = {...formData, last_seen_date: lastSeenDate}

      // Send POST request to server
      const response = await fetch('http://localhost:5000/api/petreports', {
        method: 'POST',
        body: JSON.stringify(reportData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create pet report');
      }

      const { _id } = await response.json();

      // Upload image if present
      if (imageFile) {
        // Compress image for better performance
        const compressedImage = await compressImage(imageFile)

        // Upload image
        const downloadURL = await uploadImage(compressedImage, formData.status, _id);
        console.log('Image uploaded successfully:', downloadURL);
      }

      // Reset form and dispatch action
      setFormData({ 
        name: '', 
        status: 'lost', 
        breed: '',
        last_seen_date: ''
       });
      setImageFile(null);
      if (imageInputRef.current) {
        imageInputRef.current.value = ''
      }

      setError(null);

      dispatch({ type: 'CREATE_PETREPORT', payload: { ...formData, _id } });
    } catch (submitError) {
      console.error('Error in form submission:', submitError);
      setError(submitError.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Report a Pet</h3>

      <label htmlFor="image">Upload</label>
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*"
        onChange={handleChange}
        ref={imageInputRef}
        required
      />

      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        maxLength="20"
        required
      />

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        required
      >
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select>

      <label htmlFor="breed">Breed:</label>
      <input
        id="breed"
        name="breed"
        type="text"
        value={formData.breed}
        onChange={handleChange}
        maxLength="20"
        required
      />

      <label htmlFor="last_seen_date">Last seen on:</label>
      <input
        id="last_seen_date"
        name="last_seen_date"
        type="date"
        value={formData.last_seen_date}
        onChange={handleChange}
        required
      />

      <label htmlFor="notes">Notes:</label>
      <textarea
        id="notes"
        name="notes"
        rows="4"
        cols="50"
        value={formData.notes}
        onChange={handleChange}
        maxLength="150"
      />

      <button type="submit">Report Pet</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default PetReportForm;
