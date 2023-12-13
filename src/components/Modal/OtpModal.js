import * as React from "react";
// import DialogActions from '@mui/material/DialogActions';
import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from '@mui/material/DialogTitle';
// import { Box, Typography } from '@mui/system';
import { Box, Typography, Link } from "@mui/material";
import OtpInput from "react-otp-input";
import { makeStyles } from "@mui/styles";



export const useStyles = makeStyles({
    inputSize: {
        "& input": {
          width:'2.5em !important',
          height:'2.5em',
          margin:'8px 0px',
          background:'#f6f5fa',
          border:'none',
          borderRadius:'8px'      }
    }
})


export default function ResponsiveDialog() {
  const [otp, setOtp] = React.useState("");

  const handleChange = (otp) => setOtp(otp);

  const classes = useStyles();
  return (
    <DialogContentText align="center" p={3}>
      <Box
        component="img"
        sx={{
          height: 60,
          width: 60,
          margin:'auto'
        }}
        alt="The house from the offer."
        src="https://cdn-icons-png.flaticon.com/512/1320/1320564.png"
      />
      <Box
        component="span"
        display="block"
        sx={{ fontSize: "16px", fontWeight: "600", m: 0.5 }}
      >
        Please Enter OTP
      </Box>

      <Typography>
        {" "}
        Let Google help apps determine location. This means sending{" "}
      </Typography>
      <Box
        component="div"
        className={classes.inputSize}
        sx={{ display: "table",margin:'auto' }}
      >
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          separator={<span>-</span>}
          align="center"
          sx={{ justifyContent: "center" }}
        />
      </Box>
      <Typography component="body1">
        Did'nt recieve the OTP? <Link href="#">Resent</Link>{" "}
      </Typography>
    </DialogContentText>
  );
}
