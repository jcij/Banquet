import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";

const ImageLists = ({ itemData, handleDelete }) => {
  return (
    <ImageList gap={1} cols={6}>
      {itemData &&
        itemData?.length > 0 &&
        itemData?.map((item, i) => {
          //   const cols = item.featured ? 4 : 4;
          //   const rows = item.featured ? 1 : 1;
          let img = item?.url || URL.createObjectURL(item);
          return (
            <ImageListItem key={i + item?.public_id + item?.name}>
              <img
                src={img}
                // srcSet={`${img}?w=100&fit=crop&auto=format&dpr=2 2x`}
                alt=""
                loading="lazy"
                width={100}
                height={100}
              />
              <ImageListItemBar
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "#e4002b" }}
                    aria-label={`Delete image`}
                    title="Delete"
                    onClick={() => handleDelete(i, item?.public_id)}
                    className=" pointer"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                actionPosition="right"
              />
            </ImageListItem>
          );
        })}
    </ImageList>
  );
};
export default React.memo(ImageLists);
