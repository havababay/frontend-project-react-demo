import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { listStudents } from "./firebase/student";
import LinearProgress from "@mui/material/LinearProgress";

export default function StudentsList() {
  useEffect(() => {
    listStudents().then((students) => {
      setStudents(students);
      setIsLoading(false);
    });
  }, []);

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleAddStudent = () => {
    navigate("/student");
  };

  return isLoading ? (
    <Box style={{ display: "flex"}}>
      <LinearProgress
        variant="indeterminate"
        style={{ width: "100%"}}
      />
    </Box>
  ) : (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start", my: 1 }}>
        <Button variant="contained" onClick={handleAddStudent}>
          New Student
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Full Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.studentId}>
                <TableCell component="th" scope="row">
                  {student.studentId}
                </TableCell>
                <TableCell align="left">{student.fullName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
