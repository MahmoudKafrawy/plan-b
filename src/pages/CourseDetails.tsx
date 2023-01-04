import { Button, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toPrice } from "utils/toPrice";

const CourseDetails = () => {
  const location = useLocation();

  const course = location.state?.data;

  console.log(course);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // const fetchCourses = (id) =>
  //   fetch(`https://test.plan-b-eg.com/api/Courses/GetCourseDetails?courseId=${id}`).then((res) => res.json());

  // const { isLoading, error, data } = useQuery(["courses", id], () => fetchCourses(id));
  // if (isLoading) return <>Lodaing ...</>;

  return (
    <Container maxWidth="lg">
      <Grid container sx={{ minHeight: "calc(100vh - 200px)" }}>
        <Grid item xs={12} md={6}>
          <iframe
            width="560"
            height="315"
            src={course?.promo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{ border: "none" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="column">
            <Typography fontWeight="bold">{course?.name}</Typography>
            <Typography fontWeight="300">{course?.instractorName[0]}</Typography>
            <Typography fontWeight="bold">Description</Typography>
            <Typography fontWeight="300">{course?.desc}</Typography>
            <Rating size="small" name="read-only" value={course?.rate} readOnly />
            <Typography>E£{course?.price ? toPrice(course?.price) : null}</Typography>
            <Button variant="outlined">Add to cart</Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseDetails;
