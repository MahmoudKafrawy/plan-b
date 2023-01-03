import { Box, Container } from "@mui/material";
import ImageSlider from "components/ImageSlider";
import { useQuery } from "react-query";
import CoursesCategory from "sections/Home/CoursesCategory";

const Home = () => {
  const { isLoading, error, data } = useQuery("courses", () =>
    fetch("https://test.plan-b-eg.com/api/Courses/GetAllCourses?lang=en&limit=5&page=2").then((res) => res.json())
  );

  return (
    <Box sx={{ minHeight: "calc(100vh - 400px)" }}>
      <ImageSlider />
      <Container maxWidth="xl" disableGutters>
        <CoursesCategory courses={data} />
        <CoursesCategory courses={data} />
        <CoursesCategory courses={data} />
      </Container>
    </Box>
  );
};

export default Home;
