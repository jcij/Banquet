import React, { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
  Stack,
} from "@mui/material";
import clsx from "clsx";
import { mockImgCover } from "../../../../utils/mockImages";
import DescriptionIcon from "@mui/icons-material/Description";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import MyDropzone from "../DropZone";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import { useStyles } from './Overview.theme';



const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

function OverView() {
  const [fileList, setFileList] = useState([]);

  function addAttachment(file) {
    const maxSizeInkB = 10 * 1024;
    const kb = file.size / 1024;
    if (kb > maxSizeInkB) {
      return "File size should less than 500kB";
    }
    setFileList((fileList) => [...fileList, file]);
  }

  function getFileIcon(ext) {
    ext = ext.toLowerCase();
    if (["jpg", "png", "gif", "jpeg"].includes(ext))
      return <PhotoLibraryIcon />;
    if (["pdf"].includes(ext)) return <PictureAsPdfIcon />;
    if (["doc", "docx"].includes(ext)) return <DescriptionIcon />;
  }

  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card mb={5}>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Typography gutterBottom variant="h4" component="h2">
              E-commerce site
            </Typography>
            <Box
              component="span"
              display="inline"
              className={clsx(classes.badge_blue, classes.badge)}
            >
              In Progress
            </Box>
          </Stack>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", textAlign: "justify" }}
          >
            {/* <Typography varient="h2" component="h2" sx={{ color: '#000', fontSize: '18px' }}>Description :</Typography> */}
            Exercitationem laborum autem voluptatibus repellendus numquam odit.
            Sunt odio nam. Incidunt voluptas et consectetur et cupiditate. Est
            quasi illo rerum. Quidem voluptas amet voluptatem. Eos et
            consequatur rerum dicta doloremque pariatur. Est consequatur ex
            nihil quo animi eos iste. Laudantium quos numquam temporibus
            voluptatibus enim et atque facilis sit. Nulla doloribus occaecati
            nihil omnis error ut et odit.Assumenda beatae unde architecto cum
            praesentium rerum numquam. Vel accusantium odit. Minus voluptatibus
            eos maxime nemo. Vitae sequi inventore distinctio voluptatem in
            omnis quia aperiam porro.
          </Typography>

          <Grid container>
            <Grid item xs={12} sm={6} md={8}>
              <Box
                component="div"
                mt={3}
                display="flex"
                sx={{ alignItems: "center" }}
              >
                <Typography variant="h6" component="h6">
                  Team:{" "}
                </Typography>
                <Box component="div" display="inline" ml={1}>
                  <Box
                    component="img"
                    m={0.2}
                    display="inline"
                    src={mockImgCover(1)}
                    sx={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                  <Box
                    component="img"
                    m={0.2}
                    display="inline"
                    src={mockImgCover(2)}
                    sx={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                  <Box
                    component="img"
                    m={0.2}
                    display="inline"
                    src={mockImgCover(3)}
                    sx={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                  <Box
                    component="img"
                    m={0.2}
                    display="inline"
                    src={mockImgCover(4)}
                    sx={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="div"
                mt={3}
                display="flex"
                sx={{ alignItems: "center", float: "right" }}
              >
                <Typography variant="h6" component="h6">
                  Due Date:
                </Typography>
                <Typography variant="body1" component="h4" ml={1}>
                  {" "}
                  10 Feb 2019
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h5" component="h5" display="block" mt={5}>
            Attachment
          </Typography>
          <Divider light />
          <Grid container>
            <Grid item xs={12} sm={6} md={12} sx={{ margin: "50px 0" }}>
              <MyDropzone addAttachment={addAttachment} />
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            {fileList.map((file) => (
              <Grid item xs={12} sm={6} md={3}>
                <Box component="div" className={classes.attachFile}>
                  <Box component="div" className={classes.attachMedia}>
                    <Box component="span" className={classes.attachIcon}>
                      {getFileIcon(file.ext)}
                    </Box>
                    <Box component="div" ml={2} sx={{ position: "relative" }}>
                      <Typography
                        variant="body1"
                        component="h4"
                        className={classes.attachFileHeading}
                      >
                        <b>{file.filename}</b>{" "}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary" }}
                      >
                        3MB{" "}
                      </Typography>
                      <Box
                        varient="span"
                        component="span"
                        className={classes.closeFile}
                      >
                        <HighlightOffIcon sx={{ fontSize: "17px" }} />
                      </Box>

                      <LightTooltip
                        title="Mockup copy file 3.zip"
                        placement="top"
                        arrow
                      >
                        <img
                          src="/static/mock-images/avatars/avatar_default.jpg"
                          className={classes.AvtarImg}
                        />
                      </LightTooltip>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default OverView;
