import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import StarIcon from "@mui/icons-material/Star";
import { FilledInput, Grid, InputAdornment, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import React from "react";
type Props = {
  inputsHandler: any;
};
const Vote: FC<Props> = ({ inputsHandler }) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Box sx={{ padding: "40px 40px" }}>
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="h3">Votes</Typography>
            <Typography
              variant="h4"
              mt={5}
              sx={{
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Casting Votes
            </Typography>
            <Box mt={5}>
              <Typography sx={{ color: "#A5A5A5", fontSize: "0.8rem!important" }} variant="h5">
                * Note that students do not see the instructor(s)' votes on any proposals
              </Typography>
            </Box>
            <hr style={{ color: "#A5A5A5" }} />
            <Box sx={{ display: "flex", flexWrap: "wrap", alignContent: "center", alignItems: "baseline" }}>
              <Typography
                mt={3}
                variant="h4"
                sx={{
                  fontSize: "16px",
                }}
              >
                Each student will earn&nbsp;
                <FilledInput
                  id="filled-adornment-weight"
                  onChange={inputsHandler("weight")}
                  endAdornment={
                    <Box style={{ marginBottom: "-18px" }}>
                      <InputAdornment position="end">points/vote</InputAdornment>
                    </Box>
                  }
                  aria-describedby="filled-weight-helper-text"
                  inputProps={{
                    "aria-label": "days",
                  }}
                  sx={{
                    paddingBottom: "10px",
                    height: "40px",
                    width: "140px",
                    borderBottom: "orange",
                  }}
                />
                &nbsp; by casting on other's proposals, which is in agreement with the instructors(s)' vote on the same
                proposal
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", alignContent: "center", alignItems: "baseline" }}>
              <Typography
                mt={3}
                variant="h4"
                sx={{
                  fontSize: "16px",
                }}
              >
                Each student will lose&nbsp;
                <FilledInput
                  id="filled-adornment-weight"
                  onChange={inputsHandler("weight")}
                  endAdornment={
                    <Box style={{ marginBottom: "-18px" }}>
                      <InputAdornment position="end">points/vote</InputAdornment>
                    </Box>
                  }
                  aria-describedby="filled-weight-helper-text"
                  inputProps={{
                    "aria-label": "days",
                  }}
                  sx={{
                    paddingBottom: "10px",
                    height: "40px",
                    width: "140px",
                    borderBottom: "orange",
                  }}
                />
                &nbsp; by casting on other's proposals, which is in disagreement with the instructors(s)' vote on the
                same proposal
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ padding: "40px 40px" }}>
          <Box sx={{ marginTop: "50px" }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                marginTop: {
                  xs: "20px",
                  md: "110px",
                },
              }}
            >
              Getting Votes
            </Typography>
            <hr style={{ color: "#A5A5A5" }} />
            <Box sx={{ display: "flex", flexWrap: "wrap", alignContent: "center", alignItems: "baseline" }}>
              <Typography
                mt={3}
                variant="h4"
                sx={{
                  fontSize: "16px",
                }}
              >
                For every
                <CheckIcon
                  sx={{
                    color: "green",

                    marginTop: "auto",
                    marginRight: "5px",
                    marginBottom: "-5px",
                    marginLeft: "5px",
                  }}
                  fontSize="small"
                />
                a student gets from their classmates/instructor(s) on their proposals, they will earn&nbsp;
                <FilledInput
                  id="filled-adornment-weight"
                  onChange={inputsHandler("weight")}
                  endAdornment={
                    <Box style={{ marginBottom: "-18px" }}>
                      <InputAdornment position="end">points/vote</InputAdornment>
                    </Box>
                  }
                  aria-describedby="filled-weight-helper-text"
                  inputProps={{
                    "aria-label": "days",
                  }}
                  autoFocus={true}
                  sx={{
                    paddingBottom: "10px",
                    height: "40px",
                    width: "140px",
                    borderBottom: "orange",
                  }}
                />
              </Typography>
            </Box>
            <Box>
              <Typography
                mt={3}
                variant="h4"
                sx={{
                  fontSize: "16px",
                }}
              >
                For every
                <ClearIcon
                  sx={{
                    color: "red",

                    marginTop: "auto",
                    marginRight: "5px",
                    marginBottom: "-5px",
                    marginLeft: "5px",
                  }}
                  fontSize="small"
                />
                a student gets from their classmates/instructor(s) on their proposals, they will lose&nbsp;
                <FilledInput
                  id="filled-adornment-weight"
                  onChange={inputsHandler("weight")}
                  endAdornment={
                    <Box style={{ marginBottom: "-18px" }}>
                      <InputAdornment position="end">points/vote</InputAdornment>
                    </Box>
                  }
                  aria-describedby="filled-weight-helper-text"
                  inputProps={{
                    "aria-label": "days",
                  }}
                  sx={{
                    paddingBottom: "10px",
                    height: "40px",
                    width: "140px",
                    borderBottom: "orange",
                  }}
                />
              </Typography>
            </Box>
            <Box>
              <Typography
                mt={3}
                variant="h4"
                sx={{
                  fontSize: "16px",
                }}
              >
                For every
                <StarIcon
                  sx={{
                    color: "#FFE820",
                    marginTop: "auto",
                    marginRight: "5px",
                    marginBottom: "-5px",
                    marginLeft: "5px",
                  }}
                  fontSize="small"
                />
                a student gets from their instructor(s) on their proposals, they will earn&nbsp;
                <FilledInput
                  id="filled-adornment-weight"
                  onChange={inputsHandler("weight")}
                  endAdornment={
                    <Box style={{ marginBottom: "-18px" }}>
                      <InputAdornment position="end">points/vote</InputAdornment>
                    </Box>
                  }
                  aria-describedby="filled-weight-helper-text"
                  inputProps={{
                    "aria-label": "days",
                  }}
                  sx={{
                    paddingBottom: "10px",
                    height: "40px",
                    width: "140px",
                    borderBottom: "orange",
                  }}
                />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Vote;
