import { Box, CircularProgress, Grid } from "@mui/material";
import Fade from "react-reveal/Fade";
import CourseDetailsCard from "sections/Course/CourseDetailsCard";

interface CoursesCategoryProps {
  courses: any;
}
const CoursesCategory: React.FC<CoursesCategoryProps> = ({ courses }) => {
  return (
    <>
      {courses ? (
        <Box sx={{ width: "100%" }}>
          <Fade bottom>
            <Grid container justifyContent="space-between" gap={1}>
              <Grid item xs={12} md={2.5} display="flex" justifyContent="center">
                <CourseDetailsCard course={courses[0]} />
              </Grid>
              <Grid item xs={12} md={2.5} display="flex" justifyContent="center">
                <CourseDetailsCard course={courses[1]} />
              </Grid>

              <Grid item xs={12} md={2.5} display="flex" justifyContent="center">
                <CourseDetailsCard course={courses[2]} />
              </Grid>

              <Grid item xs={12} md={2.5} display="flex" justifyContent="center">
                <CourseDetailsCard course={courses[3]} />
              </Grid>
            </Grid>
          </Fade>
        </Box>
      ) : (
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "300px" }}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <CircularProgress />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CoursesCategory;
