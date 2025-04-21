import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function StudentsForm() {
  const navigate = useNavigate();
  const initialValues = {
    fullName: "",
    studentId: 0,
  };

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });

    setErrors({ ...errors, [name]: !event.target.validity.valid });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedStudents = localStorage.getItem("students");
    const existingStudents = storedStudents ? JSON.parse(storedStudents) : [];

    const updatedStudents = [...existingStudents, values];

    localStorage.setItem("students", JSON.stringify(updatedStudents));

    console.log("Form submitted!", values);
    navigate("/students");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Add New Student
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1, width: "100%", maxWidth: 500 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              error={errors.fullName}
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              error={errors.studentId}
              fullWidth
              id="studentId"
              label="Student ID"
              name="studentId"
              onChange={handleChange}
              value={values.studentId}
              helperText={errors.studentId ? "Student ID must be greater than 100" : ""}
              type="number"
              slotProps={{
                htmlInput: { min: 101},
              }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Student
        </Button>
      </Box>
    </Box>
  );
}

export default StudentsForm;
