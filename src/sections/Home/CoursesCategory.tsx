import { Box, Card, CircularProgress, Grid, Rating, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { toPrice } from "utils/toPrice";

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
                <CourseDetails course={courses[0]} />
              </Grid>
              <Grid item xs={12} md={2.5} display="flex" justifyContent="center">
                <CourseDetails course={courses[1]} />
              </Grid>

              <Grid item xs={12} md={2.5} display="flex" justifyContent="center">
                <CourseDetails course={courses[2]} />
              </Grid>

              <Grid item xs={12} md={2.5} display="flex" justifyContent="center">
                <CourseDetails course={courses[3]} />
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

interface courseDetailsProps {
  course: any;
}
const CourseDetails: React.FC<courseDetailsProps> = ({ course }) => {
  return (
    <Link to={`/courses/${course?.id}`}>
      <Card sx={{ width: "280", "&:hover": { transform: "scale(1.05)", transition: "200ms", cursor: "pointer" } }}>
        <img src={course?.photo} style={{ objectFit: "cover", width: "280px" }} />
        <Typography fontWeight="bold">{course?.name}</Typography>
        <Typography fontWeight="300">{course?.instractorName[0]}</Typography>
        <Rating size="small" name="read-only" value={course?.rate} readOnly />
        <Typography>E£{course?.price ? toPrice(course?.price) : null}</Typography>
      </Card>
    </Link>
  );
};
