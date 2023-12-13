import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Link as RouterLink } from "react-router-dom";
import arrowIosForwardFill from "@iconify/icons-eva/arrow-ios-forward-fill";
// material
import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
} from "@mui/material";
// utils
import { useSelector } from "react-redux";
//
import Scrollbar from "../../Scrollbar";

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

function NewsItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ pr: 3 }}
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          component="img"
          alt={title}
          src={image}
          sx={{ width: 48, height: 48, borderRadius: 1.5 }}
        />
        <Box sx={{ minWidth: 220 }}>
          <Link
            to="projects/1"
            color="inherit"
            sx={{ textDecoration: "none" }}
            component={RouterLink}
          >
            <Typography variant="subtitle2" noWrap>
              {title}
            </Typography>
          </Link>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 550 }}
            noWrap
          >
            {description}
          </Typography>
        </Box>
        
      </Stack>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 30, height: 30, borderRadius: 50 }}
      />
    </Stack>
  );
}

export default function ActiveProject() {
  const activeProjectData = useSelector(({ project }) => project.projects);
  return (
    <Card>
      <CardHeader
        title="Active Project"
        action={
          <Box sx={{ py: 2, float: "right", display: "inline-block" }}>
            <Button
              to="/dashboard/app/projects"
              size="small"
              color="inherit"
              component={RouterLink}
              endIcon={<Icon icon={arrowIosForwardFill} />}
            >
              View all
            </Button>
          </Box>
        }
      />

      <Scrollbar sx={{ margin:"0px 24px 24px 24px" }}>
        <Stack spacing={3} sx={{ }}>
          {activeProjectData.slice(0, 6).map((news) => (
            <NewsItem key={news.title} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />
    </Card>
  );
}
