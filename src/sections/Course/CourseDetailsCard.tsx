import { Card, Rating, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toPrice } from "utils/toPrice";
interface CourseDetailsCardProps {
  course: any;
}

const CourseDetailsCard: React.FC<CourseDetailsCardProps> = ({ course }) => {
  const navigate = useNavigate();
  return (
    <Link to={`/courses/${course?.id}`} state={{ data: course }}>
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

export default CourseDetailsCard;
