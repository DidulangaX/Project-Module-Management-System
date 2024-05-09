import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import Header from '../Components/Header';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import './DisplayMarks.css';

const MarksDisplay = ({ marksData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter marks data based on search term
  const filteredMarksData = marksData.filter(marks => {
    return (
      marks.groupId.toString().includes(searchTerm) ||
      marks.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      marks.studentId.toString().includes(searchTerm) ||
      marks.proposalMarks.toString().includes(searchTerm) ||
      marks.progress1Marks.toString().includes(searchTerm) ||
      marks.progress2Marks.toString().includes(searchTerm) ||
      marks.finalMarks.toString().includes(searchTerm)
    );
  });

  // Sort filtered marks data by group ID in ascending order
  const sortedMarksData = filteredMarksData.sort((a, b) => a.groupId - b.groupId);

  return (
    <div className="marks-display-container">
      <h2>Marks Entered by Examiners</h2>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="search-bar" 
      />
      <table>
        <thead>
          <tr>
            <th>Group ID</th>
            <th>Student Name</th>
            <th>Student ID</th>
            <th>Proposal Marks</th>
            <th>Progress 1 Marks</th>
            <th>Progress 2 Marks</th>
            <th>Final Marks</th>
          </tr>
        </thead>
        <tbody>
          {sortedMarksData.map((marks, index) => (
            <tr key={index}>
              <td>{marks.groupId}</td>
              <td>{marks.studentName}</td>
              <td>{marks.studentId}</td>
              <td>{marks.proposalMarks}</td>
              <td>{marks.progress1Marks}</td>
              <td>{marks.progress2Marks}</td>
              <td>{marks.finalMarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Proposal = () => {
  const [marksData, setMarksData] = useState([]);

  useEffect(() => {
    // Fetch marks data from backend when component mounts
    fetchMarksData();
  }, []);

  const fetchMarksData = async () => {
    try {
      // Make HTTP GET request to fetch marks data
      const response = await axios.get('/api/marks');
      setMarksData(response.data); // Update state with fetched marks data
    } catch (error) {
      console.error('Error fetching marks data:', error);
    }
  };

  return (
    <div>
      <Header/>
      <NavigationBar/>
      <MarksDisplay marksData={marksData} /> {/* Display marks data */}
      <Footer/>
    </div>
  );
};

export default Proposal;
