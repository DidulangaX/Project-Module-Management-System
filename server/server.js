const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const multer = require('multer');


const app = express();
const PORT = 8000;
const DB_URL = 'mongodb+srv://acadesyncuni:acadesync2000@cluster0.xkkab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Route for submitting proposal marks
app.post('/api/students/proposal', async (req, res) => {
  try {
    const { groupId, students } = req.body;
    const newStudent = new Student({ groupId, students });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route for submitting progress1 marks
app.put('/api/students/progress1', async (req, res) => {
  try {
    const { groupId, students } = req.body;

    const updatedStudents = await Student.updateMany(
      { groupId },
      {
        $set: {
          "students.$[].progress1Marks": 0, // Reset all progress1Marks to 0
        },
      }
    );

    for (const student of students) {
      await Student.updateOne(
        { groupId, "students.id": student.id },
        {
          $set: {
            "students.$.progress1Marks": Number(student.progress1Marks),
          },
        }
      );
    }

    res.status(200).json(updatedStudents);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get('/api/students/:groupId', async (req, res) => {
  console.log("group id get called");
  try {
    const { groupId } = req.params;
    const student = await Student.findOne({ groupId });
    if (!student) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Route for submitting progress2 marks
app.put('/api/students/progress2', async (req, res) => {
  try {
    const { groupId, students } = req.body;

    const updatedStudents = await Student.updateMany(
      { groupId },
      {
        $set: {
          "students.$[].progress2Marks": 0, // Reset all progress2Marks to 0
        },
      }
    );

    for (const student of students) {
      await Student.updateOne(
        { groupId, "students.id": student.id },
        {
          $set: {
            "students.$.progress2Marks": Number(student.progress2Marks),
          },
        }
      );
    }

    res.status(200).json(updatedStudents);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get('/api/students/:groupId', async (req, res) => {
  try {
    const { groupId } = req.params;
    const student = await Student.findOne({ groupId });
    if (!student) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});




// Route for submitting final marks
app.put('/api/students/final', async (req, res) => {
  try {
    const { groupId, students } = req.body;

    const updatedStudents = await Student.updateMany(
      { groupId },
      {
        $set: {
          "students.$[].finalMarks": 0, // Reset all finalMarks to 0
        },
      }
    );

    for (const student of students) {
      await Student.updateOne(
        { groupId, "students.id": student.id },
        {
          $set: {
            "students.$.finalMarks": Number(student.finalMarks),
          },
        }
      );
    }

    res.status(200).json(updatedStudents);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get('/api/students/:groupId', async (req, res) => {
  try {
    const { groupId } = req.params;
    const student = await Student.findOne({ groupId });
    if (!student) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Route for submitting StatusReport1 marks
app.put('/api/students/report1', async (req, res) => {
  try {
    const { groupId, students } = req.body;

    const updatedStudents = await Student.updateMany(
      { groupId },
      {
        $set: {
          "students.$[].report1Marks": 0, // Reset all report1Marks to 0
        },
      }
    );

    for (const student of students) {
      await Student.updateOne(
        { groupId, "students.id": student.id },
        {
          $set: {
            "students.$.report1Marks": Number(student.report1Marks),
          },
        }
      );
    }

    res.status(200).json(updatedStudents);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get('/api/students/:groupId', async (req, res) => {
  try {
    const { groupId } = req.params;
    const student = await Student.findOne({ groupId });
    if (!student) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Route for submitting StatusReport2 marks
app.put('/api/students/report2', async (req, res) => {
  try {
    const { groupId, students } = req.body;

    const updatedStudents = await Student.updateMany(
      { groupId },
      {
        $set: {
          "students.$[].report2Marks": 0, // Reset all report2Marks to 0
        },
      }
    );

    for (const student of students) {
      await Student.updateOne(
        { groupId, "students.id": student.id },
        {
          $set: {
            "students.$.report2Marks": Number(student.report2Marks),
          },
        }
      );
    }

    res.status(200).json(updatedStudents);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get('/api/students/:groupId', async (req, res) => {
  try {
    const { groupId } = req.params;
    const student = await Student.findOne({ groupId });
    if (!student) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Route for submitting LogBook marks
app.put('/api/students/logbook', async (req, res) => {
  try {
    const { groupId, students } = req.body;

    const updatedStudents = await Student.updateMany(
      { groupId },
      {
        $set: {
          "students.$[].logbookMarks": 0, // Reset all logbookMarks to 0
        },
      }
    );

    for (const student of students) {
      await Student.updateOne(
        { groupId, "students.id": student.id },
        {
          $set: {
            "students.$.logbookMarks": Number(student.logbookMarks),
          },
        }
      );
    }

    res.status(200).json(updatedStudents);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get('/api/students/:groupId', async (req, res) => {
  try {
    const { groupId } = req.params;
    const student = await Student.findOne({ groupId });
    if (!student) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



// Route for submitting Final Thesis marks
app.put('/api/students/finalthesis', async (req, res) => {
  try {
    const { groupId, students } = req.body;

    const updatedStudents = await Student.updateMany(
      { groupId },
      {
        $set: {
          "students.$[].finalthesisMarks": 0, // Reset all finalthesisMarks to 0
        },
      }
    );

    for (const student of students) {
      await Student.updateOne(
        { groupId, "students.id": student.id },
        {
          $set: {
            "students.$.finalthesisMarks": Number(student.finalthesisMarks),
          },
        }
      );
    }

    res.status(200).json(updatedStudents);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get('/api/students/:groupId', async (req, res) => {
  try {
    const { groupId } = req.params;
    const student = await Student.findOne({ groupId });
    if (!student) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Route for submitting website marks
app.put('/api/students/website', async (req, res) => {
  try {
    const { groupId, students } = req.body;

    const updatedStudents = await Student.updateMany(
      { groupId },
      {
        $set: {
          "students.$[].websiteMarks": 0, // Reset all websiteMarks to 0
        },
      }
    );

    for (const student of students) {
      await Student.updateOne(
        { groupId, "students.id": student.id },
        {
          $set: {
            "students.$.websiteMarks": Number(student.websiteMarks),
          },
        }
      );
    }

    res.status(200).json(updatedStudents);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.get('/api/students/:groupId', async (req, res) => {
  try {
    const { groupId } = req.params;
    const student = await Student.findOne({ groupId });
    if (!student) {
      return res.status(404).json({ error: 'Group not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Login route
app.post('/api/login', async (req, res) => {

  const { registrationNumber, password, role } = req.body;

  try {
    // Find user in the database
    const user = await User.findOne({ registrationNumber, password, role });

    if (user) {
      // User found, authentication successful
      res.status(200).json({ message: 'Login successful', name: user.name, registrationNumber: user.registrationNumber });
    } else {
      // User not found
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;



///Route for submit regester data

app.post('/api/register', async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error (registration number already exists)
      res.status(400).json({ error: 'Registration number already exists' });
    } else {
      res.status(400).json({ error: err.message });
    }
  }
});



// Document route

app.post('/api/upload', async (req, res) => {
  const groupId = req.body.groupId;
  const documentData = req.body.documentData;

  try {
    // Find or create the document for the given group ID
    let document = await Document.findOne({ groupId });
    if (!document) {
      document = new Document({ groupId });
    }

    // Process each document type
    for (const documentType of Object.keys(documentData)) {
      const fileData = documentData[documentType][0]; // Get the first (and only) file data

      if (fileData) {
        const newFile = new File({
          originalname: fileData.originalname,
          // Add any other necessary file data properties
        });
        await newFile.save();

        const documentTypeWithoutFiles = documentType.replace('Files', '');
        document[documentTypeWithoutFiles].push(newFile._id);
      }
    }

    await document.save();

    res.status(200).json({ message: 'Document uploaded successfully' });
  } catch (error) {
    console.error('Error uploading document:', error);
    res.status(500).json({ error: 'Failed to upload document' });
  }
});

////Student schema
const studentSchema = new mongoose.Schema({
  groupId: { type: String, required: true },
  students: [
    {
      name: { type: String, required: true },
      id: { type: String, required: true },
      proposalMarks: { type: Number, default: 0 },
      progress1Marks: { type: Number, default: 0 }, 
      progress2Marks: { type: Number, default: 0 },
      finalMarks: { type: Number, default: 0 },
      report1Marks: { type: Number, default: 0 },
      report2Marks: { type: Number, default: 0 },
      logbookMarks: { type: Number, default: 0 },
      finalthesisMarks: { type: Number, default: 0 },
      websiteMarks: { type: Number, default: 0 },
    },
  ],
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;

//Schema for user registration data
const userSchema = new mongoose.Schema({
  name: String,
  registrationNumber: String,
  contactNumber: String,
  email: String,
  password: String,
  confirmPassword: String,
  batch: String,
  specialization: String,
  role: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;


// Define a Mongoose schema for your documents
const documentSchema = new mongoose.Schema({
  groupId: String,
  TopicAssessmentForm: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
  ProjectCharter: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
  StatusDocument: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
  LogBook : [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
  ProposalDocument: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
  StatusDocument2: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
  FinalThesis: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }]


  // Add more document types as needed
});

const Document = mongoose.model('Document', documentSchema);

const fileSchema = new mongoose.Schema({
  originalname: String,
  path: String,
});

const File = mongoose.model('File', fileSchema);

// schema for reg post


const registerSchema = new mongoose.Schema({
  groupId: {
    type: String,
    required: true,
    unique: true,
  },
  nextGroupNumber: {
    type: Number,
    default: 1,
  },
  project_title: {
    type: String,
  },
  research_area: {
    type: String,
  },
  leader_name: {
    type: String,
  },
  leader_regno: {
    type: String,
  },
  research_group: {
    type: String,
  },
  supervisor: {
    type: String,
  },
  co_supervisor: {
    type: String,
  },
  name1: {
    type: String,
  },
  regnumber1: {
    type: String,
  },
  contact1: {
    type: String,
  },
  email1: {
    type: String,
  },
  batch1: {
    type: String,
  },
  specialization1: {
    type: String,
  },
  name2: {
    type: String,
  },
  regnumber2: {
    type: String,
  },
  contact2: {
    type: String,
  },
  email2: {
    type: String,
  },
  batch2: {
    type: String,
  },
  specialization2: {
    type: String,
  },
  name3: {
    type: String,
  },
  regnumber3: {
    type: String,
  },
  contact3: {
    type: String,
  },
  email3: {
    type: String,
  },
  batch3: {
    type: String,
  },
  specialization3: {
    type: String,
  },
  name4: {
    type: String,
  },
  regnumber4: {
    type: String,
  },
  contact4: {
    type: String,
  },
  email4: {
    type: String,
  },
  batch4: {
    type: String,
  },
  specialization4: {
    type: String,
  },
});
const Register = mongoose.model('RegisterPosts', registerSchema);

// module.exports = mongoose.model('RegisterPosts', registerSchema);

app.get('/api/groups/:groupId', async (req, res) => {
  try {
    const { groupId } = req.params;
    const group = await Register.findOne({ groupId });

    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    const students = [
      { name: group.name1, id: group.regnumber1 },
      { name: group.name2, id: group.regnumber2 },
      { name: group.name3, id: group.regnumber3 },
      { name: group.name4, id: group.regnumber4 },
    ].filter(student => student.name && student.id); // Filter out empty student entries

    res.status(200).json({ students });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected');
    app.listen(PORT, () => {
      console.log(`App is running on ${PORT}`);
    });
  })
  .catch((err) => console.log('DB connection error', err));

