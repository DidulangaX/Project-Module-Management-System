import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import './Proposal.css'; // You can reuse the same CSS file as Proposal
import axios from 'axios';
import { Link } from 'react-router-dom';



const Progress2 = () => {
  const [groupId, setGroupId] = useState('');
  const [students, setStudents] = useState([
    { name: '', id: '', marks: '', isValid: true },
    { name: '', id: '', marks: '', isValid: true },
    { name: '', id: '', marks: '', isValid: true },
    { name: '', id: '', marks: '', isValid: true },
  ]);
  const [showValidation, setShowValidation] = useState(false);
  const [initialStudents, setInitialStudents] = useState([]);

  const handleGroupIdChange = async (event) => {
    setGroupId(event.target.value);
    if (event.target.value) {
      await fetchStudents(event.target.value);
    } else {
      setInitialStudents([]);
      setStudents([
        { name: '', id: '', marks: '', isValid: true },
        { name: '', id: '', marks: '', isValid: true },
        { name: '', id: '', marks: '', isValid: true },
        { name: '', id: '', marks: '', isValid: true },
      ]);
    }
  };

  const fetchStudents = async (groupId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/groups/${groupId}`);
      setInitialStudents(response.data.students);
      setStudents(response.data.students.map(({ name, id }) => ({ name, id, marks: '', isValid: true })));
    } catch (err) {
      console.error(err);
      // Handle error or show an error message
    }
  };


  const handleStudentChange = (event, index, field) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = event.target.value;
    setStudents(updatedStudents);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowValidation(true);
  
    // Check if any student name is filled but not the ID or marks
    const incompleteStudents = students.filter(
      (student) => student.name && (!student.id || !student.marks)
    );
  
    // Set validation state for incomplete students
    const updatedStudents = students.map((student) => {
      if (incompleteStudents.some((incomplete) => incomplete === student)) {
        return { ...student, isValid: false };
      }
      return { ...student, isValid: true };
    });
  
    setStudents(updatedStudents);
  
    // Proceed with form submission if all fields are valid
    if (groupId && !incompleteStudents.length) {
      try {
        const response = await axios.put('http://localhost:8000/api/students/progress2', {
          groupId,
          students: updatedStudents.map(({ isValid, ...student }) => ({
            ...student,
            progress2Marks: Number(student.marks), // Convert marks to a number
          })),
        });
        console.log(response.data);
        // Handle success or show a success message
      } catch (err) {
        console.error(err);
        // Handle error or show an error message
      }
    }
  };

  return (
    <div>
      <Header />
      <NavigationBar />
      <div>
        <div className="btn-container d-flex justify-content-center align-items-center">
          <Link to="/enter-marks/proposal" className="btn btn-primary btn-lg mx-2">
            Proposal
          </Link>
          <Link to="/enter-marks/progress1" className="btn btn-primary btn-lg mx-2">
            Progress 1
          </Link>
          <Link to="/enter-marks/progress2" className="btn btn-primary btn-lg mx-2">
            Progress 2
          </Link>
          <Link to="/enter-marks/final" className="btn btn-primary btn-lg mx-2">
            Final
          </Link>
        </div>
      </div>
      <div className="proposal-container">
        <h2 style={{ fontSize: '28px', color: '#124E66', marginTop: '20px', fontWeight: 'bold', textTransform: 'uppercase' }}>Enter Progress 2 Marks</h2>
        <form onSubmit={handleSubmit} className="proposal-form" noValidate>
          <div className="group-id-section">
            <label htmlFor="groupId">Group Registration ID:</label>
            <input
              type="text"
              id="groupId"
              value={groupId}
              onChange={handleGroupIdChange}
              placeholder="Enter group ID"
              required
              className={showValidation && !groupId ? 'invalid' : ''}
            />
            {showValidation && !groupId && (
              <span className="validation-message">Group ID is required.</span>
            )}
          </div>
          <div className="student-sections">
            {students.map((student, index) => (
              <div key={index} className="student-section">
                <h4>Student {index + 1}</h4>
                <div className="student-details">
                  <div>
                    <label htmlFor={`student${index}Name`}>Name:</label>
                    <input
                      type="text"
                      id={`student${index}Name`}
                      value={student.name}
                      onChange={(event) => handleStudentChange(event, index, 'name')}
                      placeholder="Enter student name"
                    />
                  </div>
                  <div>
                    <label htmlFor={`student${index}Id`}>ID:</label>
                    <input
                      type="text"
                      id={`student${index}Id`}
                      value={student.id}
                      onChange={(event) => handleStudentChange(event, index, 'id')}
                      placeholder="Enter student ID"
                      required={student.name}
                      className={showValidation && student.name && !student.id ? 'invalid' : ''}
                    />
                    {showValidation && student.name && !student.id && (
                      <span className="validation-message">Student ID is required.</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor={`student${index}Marks`}>Marks:</label>
                    <input
                      type="number"
                      id={`student${index}Marks`}
                      value={student.marks}
                      onChange={(event) => handleStudentChange(event, index, 'marks')}
                      placeholder="Enter marks"
                      required={student.name}
                      className={showValidation && student.name && !student.marks ? 'invalid' : ''}
                    />
                    {showValidation && student.name && !student.marks && (
                      <span className="validation-message">Marks are required.</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button type="submitt" className="submitt-btn">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Progress2;