import { Box, Grid, Typography } from "@mui/material";
interface CoursesCategoryProps {
  courses: {}[];
}
const CoursesCategory: React.FC<CoursesCategoryProps> = ({ courses }) => {
  return (
    <Box>
      <Typography>Category</Typography>
      {courses && (
        <Grid container>
          <Grid item xs={3}>
            <CourseDetails course={courses[0]} />
          </Grid>
          <Grid item xs={3}>
            <CourseDetails course={courses[1]} />
          </Grid>
          <Grid item xs={3}>
            <CourseDetails course={courses[2]} />
          </Grid>
          <Grid item xs={3}>
            <CourseDetails course={courses[3]} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CoursesCategory;

interface courseDetailsProps {
  course: any;
}
const CourseDetails: React.FC<courseDetailsProps> = ({ course }) => {
  return (
    <Box>
      <Typography>{course?.name}</Typography>
      <img src={course?.photo} width={"200px"} />
    </Box>
  );
};
