import { Box, Container, Grid, Typography } from "@mui/material";
import ImageSlider from "components/ImageSlider";
import { useState } from "react";
import { useQuery } from "react-query";
import CoursesCategory from "sections/Home/CoursesCategory";

const Home = () => {
  interface paramsProps {
    lang: string;
    limit: number;
    page: number;
  }
  const intialParams = {
    lang: "en",
    limit: 10,
    page: 1,
  };

  const [params, setParams] = useState<paramsProps>(intialParams);

  const fetchCourses = (params) =>
    fetch(
      `https://test.plan-b-eg.com/api/Courses/GetAllCourses?lane?lang=${params.lang}&limit=${params.limit}&page=${params.page}`
    ).then((res) => res.json());

  const { isLoading, error, data } = useQuery(["courses", params], () => fetchCourses(params));

  return (
    <Box sx={{ minHeight: "calc(100vh - 400px)" }}>
      <ImageSlider />
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", width: "100%" }} disableGutters>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <Typography sx={{ paddingLeft: "20px" }} fontWeight="500" fontSize={24}>
              Top Rated
            </Typography>
          </Grid>
          <CoursesCategory courses={data} />
          <Grid item xs={12}>
            <Typography sx={{ paddingLeft: "20px" }} fontWeight="500" fontSize={24}>
              Top selling
            </Typography>
          </Grid>
          <CoursesCategory courses={data?.slice(4, 8)} />
          <Grid item xs={12}>
            <Typography sx={{ paddingLeft: "20px" }} fontWeight="500" fontSize={24}>
              New Courses
            </Typography>
          </Grid>
          <CoursesCategory courses={data?.slice(5, 9)} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
