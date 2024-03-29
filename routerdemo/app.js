import express from 'express';
import stu from './routes/student.js';
import teacher from './routes/teacher.js';
const app = express();
const port=process.env.PORT || 3000;

app.use('/student',stu);
app.use('/teacher',teacher);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});