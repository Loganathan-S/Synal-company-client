import { useState } from "react";
import { Grid, Box, Paper, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { tokens } from "../../theme";
import InputController from "../../components/formControlHelper/InputController";
import {
  EmailOutlined,
  LocalPhoneOutlined,
  LocationOnOutlined,
  PublicOutlined,
  MyLocationOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { routePath } from "../../routerPath";
import { LoadingButton } from "@mui/lab";

const Register = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { handleSubmit, control } = useForm();

  const [_isLoading, _setLoading] = useState(false);

  const _validate = (data: any) => {
    _setLoading(true);
  };

  return (
    <Box m='20px' width={"600px"}>
      <Paper
        elevation={2}
        sx={{ display: "flex", p: 3, flexDirection: "column" }}
      >
        <Box>
          <Typography
            variant='h3'
            color={colors.blueAccent[300]}
            fontWeight='bold'
            sx={{ m: "0 0 5px 0" }}
          >
            Register
          </Typography>
        </Box>
        <form
          autoComplete={"off"}
          onSubmit={handleSubmit(_validate)}
          noValidate
        >
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <InputController
                inputType='text'
                label='First Name'
                inputProps={{
                  name: "firstName",
                  control: control,
                  defaultValue: "",
                  rules: {
                    required: {
                      value: true,
                      message: "Requried first name",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <InputController
                inputType='text'
                label='Last Name'
                inputProps={{
                  name: "lastName",
                  control: control,
                  defaultValue: "",
                  rules: {
                    required: {
                      value: true,
                      message: "Requried last name",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={12}>
              <InputController
                inputType='email'
                label='Email Address'
                inputProps={{
                  name: "emailAddress",
                  control: control,
                  defaultValue: "",
                  rules: {
                    required: {
                      value: true,
                      message: "Requried email address",
                    },
                  },
                }}
                placeHolder='Email Address'
                startAdornment={<EmailOutlined sx={{ marginRight: 1 }} />}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} lg={12}>
              <InputController
                inputType='text'
                label='Mobile Number'
                inputProps={{
                  name: "mobileNumber",
                  control: control,
                  defaultValue: "",
                  rules: {
                    required: {
                      value: true,
                      message: "Requried mobile number",
                    },
                  },
                }}
                placeHolder='Mobile Number'
                startAdornment={<LocalPhoneOutlined sx={{ marginRight: 1 }} />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <InputController
                inputType='text'
                label='Country'
                inputProps={{
                  name: "country",
                  control: control,
                  defaultValue: "",
                  rules: {
                    required: {
                      value: true,
                      message: "Requried Country",
                    },
                  },
                }}
                placeHolder='Country'
                startAdornment={<PublicOutlined sx={{ marginRight: 1 }} />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <InputController
                inputType='text'
                label='State'
                inputProps={{
                  name: "state",
                  control: control,
                  defaultValue: "",
                  rules: {
                    required: {
                      value: true,
                      message: "Requried state",
                    },
                  },
                }}
                placeHolder='State'
                startAdornment={<LocationOnOutlined sx={{ marginRight: 1 }} />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <InputController
                inputType='text'
                label='City'
                inputProps={{
                  name: "city",
                  control: control,
                  defaultValue: "",
                  rules: {
                    required: {
                      value: true,
                      message: "Requried City",
                    },
                  },
                }}
                placeHolder='City'
                startAdornment={<LocationOnOutlined sx={{ marginRight: 1 }} />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <InputController
                inputType='text'
                label='Pincode'
                inputProps={{
                  name: "pincode",
                  control: control,
                  defaultValue: "",
                  rules: {
                    required: {
                      value: true,
                      message: "Requried Pincode",
                    },
                  },
                }}
                placeHolder='Pincode'
                startAdornment={<MyLocationOutlined sx={{ marginRight: 1 }} />}
              />
            </Grid>
          </Grid>

          <Box
            mt={"20px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={"row"}
            flexWrap={"wrap"}
          >
            <LoadingButton
              variant={"contained"}
              color={"primary"}
              type={"submit"}
              className='px-5'
              loading={_isLoading}
            >
              Sign up
            </LoadingButton>
            <Box mt={"25px"}>
              <div style={{ fontWeight: "bolder", marginBottom: "5px" }}>
                Already have any account, &nbsp;
                <Link
                  to={routePath.auth.login}
                  className='anchorLink'
                  style={{ color: colors.blueAccent[300] }}
                >
                  Please Log in now
                </Link>
              </div>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
