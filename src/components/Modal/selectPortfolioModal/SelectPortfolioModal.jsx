import * as React from "react";
// css
import "./selectPortfolioModal.scss";
// library
import {
  AppBar,
  Dialog,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Slide,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
// components
import ListSearchbar from "../../Common/ListSearchbar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SelectPortfolio({
  open = false,
  setOpen,
  imageList,
  selectedData,
  onSave,
}) {
  const [selected, setSelected] = React.useState(selectedData);
  const [mount, setMount] = React.useState(false);
  const [selectedUpdate, setSelectedUpdate] = React.useState(false);
  const [searchStr, setSearchStr] = React.useState("");

  React.useEffect(() => {
    setSelected(selectedData);
    setMount(true);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (mount) {
      setSelected(selectedData);
      setMount(false);
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mount]);

  const handleClose = () => {
    setOpen(false);
    // setSelected([]);
  };

  const handleSearchChange = React.useCallback((e) => {
    e.preventDefault();
    setSearchStr(e.target.value);
  }, []);

  const handleSearchClear = React.useCallback(() => {
    setSearchStr("");
  }, []);

  const handleSearch = React.useCallback(
    (rows) => {
      try {
        // console.log("rows", rows);
        if (rows && rows.length > 0) {
          const columns = rows[0] && Object.keys(rows[0]);

          return rows.filter((row) => {
            return columns.some((column) => {
              return (
                row?.[column]
                  ?.toString()
                  .toLowerCase()
                  .indexOf(searchStr.toLowerCase()) > -1
              );
            });
          });
        } else {
          console.log("else");
        }
      } catch (error) {}
    },
    [searchStr]
  );

  const handleImageClick = (image) => {
    try {
      const newSelected = selected && selected?.length > 0 ? [...selected] : [];
      const index =
        newSelected && newSelected?.length > 0
          ? newSelected?.findIndex((item) => item.public_id === image.public_id)
          : undefined;

      if (index === undefined || index === -1) {
        newSelected?.push({
          url: image.secure_url,
          public_id: image.public_id,
        });
      } else {
        newSelected?.splice(index, 1);
      }
      setSelectedUpdate(!selectedUpdate);
      setSelected(newSelected);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (selected) {
      setSelected(selected);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUpdate]);

  const handleOnSave = () => {
    onSave(selected);
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className="selectPortfolioModal"
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Selected Images ({selected ? selected?.length : 0})
            </Typography>

            <ListSearchbar
              searchStr={searchStr}
              handleSearchChange={handleSearchChange}
              handleSearchClear={handleSearchClear}
            />

            <Button
              autoFocus
              variant="outlined"
              color="inherit"
              onClick={handleOnSave}
            >
              Save
            </Button>
          </Toolbar>
        </AppBar>
        {imageList && imageList?.length > 0 ? (
          <div className="image_picker">
            <Grid container>
              <Grid item xs={12}>
                <h4 className="title">Selected</h4>
                {handleSearch(imageList)?.map((x, i) => {
                  let isSelected =
                    selected && selected?.length > 0
                      ? selected?.find((f) => f.public_id === x?.public_id)
                      : false;
                  if (isSelected) {
                    return (
                      <div
                        className={`responsive ${isSelected ? "selected" : ""}`}
                        key={x?.public_id + i}
                        onClick={() => handleImageClick(x)}
                      >
                        <img
                          src={x?.secure_url}
                          className={`thumbnail ${
                            isSelected ? "selected" : ""
                          }`}
                          alt=""
                        />
                        <div
                          className={`checked ${isSelected ? "selected" : ""}`}
                        >
                          <div className="icon">
                            <CheckCircleRoundedIcon
                              color="primary"
                              fontSize="large"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </Grid>
              <Grid item xs={12}>
                <h4 className="title">Not Selected</h4>
                {handleSearch(imageList)?.map((x, i) => {
                  let isSelected =
                    selected && selected?.length > 0
                      ? selected?.find((f) => f.public_id === x?.public_id)
                      : false;
                  if (!isSelected) {
                    return (
                      <div
                        className={`responsive ${isSelected ? "selected" : ""}`}
                        key={x?.public_id + i}
                        onClick={() => handleImageClick(x)}
                      >
                        <img
                          src={x?.secure_url}
                          className={`thumbnail ${
                            isSelected ? "selected" : ""
                          }`}
                          alt=""
                        />
                        <div
                          className={`checked ${isSelected ? "selected" : ""}`}
                        >
                          <div className="icon">
                            <CheckCircleRoundedIcon
                              color="primary"
                              fontSize="large"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </Grid>
            </Grid>

            <div className="clear"></div>
          </div>
        ) : (
          "No Images, Upload First in Portfolio"
        )}
      </Dialog>
    </>
  );
}
