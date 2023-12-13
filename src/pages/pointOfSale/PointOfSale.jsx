import React, { useState } from "reactn";
//css
import "./pointOfSale.scss";
// library
import {
  Box,
  Stack,
  Typography,
  Card,
  Container,
  TextField,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
// import { isEmpty } from "lodash";
import toastr from "toastr";
// components
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import Page from "src/components/Page";
import { CustomBackdrop } from "src/components";
// utils
import { postMethod } from "src/utils/api";
// constants
import { API_URL } from "src/constants/url.constant";
import { API_STATUS_CODE, MESSAGE } from "src/constants/content.constant";
import countryOptions from "src/constants/countries";
// redux

const PointOfSale = () => {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState(null);

  const handleChange = (e, type) => {
    e && e.preventDefault();
    if (type === "file") {
      const files = [...e.target.files];
      let oldImages = formState?.images || [];
      let newImages = [];
      let err = "";
      if (files && files?.length > 5) {
        return toastr.error("Maximum files must be 5 only.");
      }
      files.forEach((file) => {
        if (!file) {
          return (err = "File does not exist.");
        }
        return newImages.push(file);
      });
      if (err) {
        toastr.error(err);
      }
      setFormState({
        ...formState,
        images: [...oldImages, ...newImages],
      });
    } else if (type === "check") {
      setFormState({
        ...formState,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event && event?.preventDefault();

    try {
      setLoading(true);
      let newData = formState;
      var response = "";
      response = await postMethod(
        API_URL.CREATE_POINTS_OF_SALE,
        newData,
        false,
        false
      );

      //   console.log("handleSubmit", response);
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        toastr.success(MESSAGE.UPDATE_SUCCESS);
        setFormState({});
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const pageTitle = "Point of Sale | CashOnex Admin";
  const subMerchantOptions = [
    { _id: 1, name: "itechcare7 3D EU (itechcare7 3D EU .)" },
  ];
  const gatewayMethodOptions = [{ _id: 1, name: "Paypal" }];
  // const countryOptions = [];
  const currencyOptions = [
    { _id: 1, name: "USD" },
    { _id: 2, name: "EUR" },
    { _id: 3, name: "GBP" },
  ];
  const cardTypeOptions = [
    { _id: 1, name: "Visa" },
    { _id: 2, name: "Mastercard" },
    { _id: 3, name: "American Express" },
  ];
  // console.log("formState", formState);
  return (
    <>
      <CustomBackdrop loading={loading}>
        <Page title={pageTitle}>
          <Container className="productForm">
            <Stack mb={5}>
              <Typography variant="h4" gutterBottom>
                Point of Sale
              </Typography>
              <Breadcrumb />
            </Stack>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Stack>
                <Typography variant="h5" gutterBottom>
                  Sub Merchant Details
                </Typography>
                <Card className="card mb-10">
                  <Container>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <FormControl required fullWidth>
                          <InputLabel id="subMerchant-label">
                            Sub Merchant
                          </InputLabel>
                          <Select
                            labelId="subMerchant-label"
                            id="subMerchant"
                            label="Sub Merchant *"
                            name="subMerchant"
                            value={formState?.subMerchant || ""}
                            onChange={handleChange}
                            required
                          >
                            <MenuItem value="">
                              <em>Select Sub Merchant</em>
                            </MenuItem>
                            {subMerchantOptions &&
                              subMerchantOptions?.length > 0 &&
                              subMerchantOptions?.map((c) => (
                                <MenuItem value={c.name} key={c._id}>
                                  {c.name}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl required fullWidth>
                          <InputLabel id="gatewayPaymentMethod-label">
                            Gateway Payment Method
                          </InputLabel>
                          <Select
                            labelId="gatewayPaymentMethod-label"
                            id="gatewayPaymentMethod"
                            label="Gateway Payment Method *"
                            name="gatewayMethod"
                            value={formState?.gatewayMethod || ""}
                            onChange={handleChange}
                            required
                          >
                            <MenuItem value="">
                              <em>Select Payment Gateway</em>
                            </MenuItem>
                            {gatewayMethodOptions &&
                              gatewayMethodOptions?.length > 0 &&
                              gatewayMethodOptions?.map((c) => (
                                <MenuItem value={c.name} key={c._id}>
                                  {c.name}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Container>
                </Card>

                <Typography variant="h5" gutterBottom>
                  User Details
                </Typography>
                <Card className="card mb-10">
                  <Container>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          type="text"
                          label="First Name"
                          name="firstName"
                          required
                          value={formState?.firstName || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Last Name"
                          name="lastName"
                          required
                          value={formState?.lastName || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Phone"
                          name="phone"
                          required
                          value={formState?.phone || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          type="email"
                          label="Email"
                          name="email"
                          required
                          value={formState?.email || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField
                          fullWidth
                          type="textarea"
                          label="Address"
                          name="address"
                          required
                          value={formState?.address || ""}
                          onChange={(e) => handleChange(e)}
                          multiline
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          fullWidth
                          type="text"
                          label="State"
                          name="state"
                          value={formState?.state || ""}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          fullWidth
                          type="text"
                          label="City"
                          name="city"
                          value={formState?.city || ""}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Zip Code"
                          name="zipCode"
                          value={formState?.zipCode || ""}
                          onChange={(e) => handleChange(e)}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <FormControl required fullWidth>
                          <InputLabel id="country-label">Country</InputLabel>
                          <Select
                            labelId="subMerchant-label"
                            id="country"
                            label="Country *"
                            name="country"
                            value={formState?.country || ""}
                            onChange={handleChange}
                            required
                          >
                            <MenuItem value="">
                              <em>Select Country</em>
                            </MenuItem>
                            {countryOptions &&
                              countryOptions?.length > 0 &&
                              countryOptions?.map((c) => (
                                <MenuItem value={c.name} key={c.code}>
                                  {c.name}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField
                          fullWidth
                          type="text"
                          label="IP Address"
                          name="ipAddress"
                          value={formState?.ipAddress || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>
                    </Grid>
                  </Container>
                </Card>

                <Typography variant="h5" gutterBottom>
                  Transaction Details
                </Typography>
                <Card className="card mb-10">
                  <Container>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Amount"
                          name="amount"
                          required
                          value={formState?.amount || ""}
                          onChange={(e) => handleChange(e)}
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl required fullWidth>
                          <InputLabel id="currency-label">Currency</InputLabel>
                          <Select
                            labelId="currency-label"
                            id="currency"
                            label="Currency *"
                            name="currency"
                            value={formState?.currency || ""}
                            onChange={handleChange}
                            required
                          >
                            <MenuItem value="">
                              <em>Select currency</em>
                            </MenuItem>
                            {currencyOptions &&
                              currencyOptions?.length > 0 &&
                              currencyOptions?.map((c) => (
                                <MenuItem value={c.name} key={c._id}>
                                  {c.name}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Container>
                </Card>

                <Typography variant="h5" gutterBottom>
                  Card Details
                </Typography>
                <Card className="card">
                  <Container>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Card Number"
                          name="cardNumber"
                          required
                          value={formState?.cardNumber || ""}
                          onChange={(e) => handleChange(e)}
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]",
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Card Name"
                          name="cardName"
                          required
                          value={formState?.cardName || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <FormControl required fullWidth>
                          <InputLabel id="cardType-label">Card Type</InputLabel>
                          <Select
                            labelId="cardType-label"
                            id="cardType"
                            label="Card Type *"
                            name="cardType"
                            value={formState?.cardType || ""}
                            onChange={handleChange}
                            required
                          >
                            <MenuItem value="">
                              <em>Select Card Type</em>
                            </MenuItem>
                            {cardTypeOptions &&
                              cardTypeOptions?.length > 0 &&
                              cardTypeOptions?.map((c) => (
                                <MenuItem value={c.name} key={c._id}>
                                  {c.name}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          type="date"
                          label="Card Expiry Date"
                          name="cardExpiryDate"
                          required
                          value={formState?.cardExpiryDate || ""}
                          onChange={(e) => handleChange(e)}
                          InputLabelProps={{ shrink: true, required: true }}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          type="number"
                          label="CVV"
                          name="cvv"
                          required
                          value={formState?.cvv || ""}
                          onChange={(e) => handleChange(e)}
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Container>
                </Card>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "15px",
                  }}
                >
                  <LoadingButton
                    size="large"
                    type="submit"
                    loading={loading}
                    variant="contained"
                  >
                    Submit
                  </LoadingButton>
                </Box>
              </Stack>
            </form>
          </Container>
        </Page>
      </CustomBackdrop>
    </>
  );
};

export default PointOfSale;
