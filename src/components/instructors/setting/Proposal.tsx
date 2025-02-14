import { useTheme } from "@emotion/react";
import { FilledInput, InputAdornment, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import React from "react";
type Props = {
  semester: any;
  inputsHandler: any;
  errorState: any;
};
const Proposal: FC<Props> = ({ semester, inputsHandler, errorState }) => {
  const layoutTheme: any = useTheme();

  return (
    <Box
      className="remove-arrow-buttons unselect-date-placeholder"
      sx={{ padding: "40px 40px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
    >
      <Typography variant="h3">Proposals & Practice</Typography>
      <Box>
        <Typography mt={3} variant="h4">
          This class has&nbsp;
          <FilledInput
            type="number"
            value={semester.days}
            onChange={event => inputsHandler(event, "days")}
            id="filled-adornment-weight"
            endAdornment={
              <Box style={{ marginBottom: "-18px" }}>
                <InputAdornment position="end">days</InputAdornment>
              </Box>
            }
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              "aria-label": "days",
              min: 1,
              pattern: "[0-9]",
            }}
            sx={{
              border: "none",
              paddingBottom: "10px",
              height: "40px",
              width: "100px",
            }}
            error={errorState.days}
          />
          &nbsp;in total.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <Typography variant="h3">Node Proposals</Typography>
        <hr style={{ color: "#A5A5A5" }} />
        <Box>
          <Typography mt={3} variant="h4" sx={{ lineHeight: "2.5" }}>
            From&nbsp;
            <FilledInput
              className={layoutTheme.palette.mode === "dark" ? "light-calender" : "dark-calender"}
              type="date"
              value={semester.nodeProposals.startDate}
              id="filled-adornment-weight"
              onChange={event => inputsHandler(event, "nodeProposals", "startDate")}
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "days",
              }}
              sx={{
                paddingBottom: "10px",
                height: "40px",
                width: "150px",
                borderBottom: "orange",
                color: theme =>
                  semester.nodeProposals.startDate != ""
                    ? theme.palette.mode === "dark"
                      ? "white"
                      : "black"
                    : "transparent",
              }}
              error={errorState.nodeProposalDate}
            />
            &nbsp; to &nbsp;
            <FilledInput
              type="date"
              className={layoutTheme.palette.mode === "dark" ? "light-calender" : "dark-calender"}
              value={semester.nodeProposals.endDate}
              id="filled-adornment-weight"
              onChange={event => inputsHandler(event, "nodeProposals", "endDate")}
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "days",
              }}
              sx={{
                paddingBottom: "10px",
                height: "40px",
                width: "150px",
                borderBottom: "orange",
                color: theme =>
                  semester.nodeProposals.endDate != ""
                    ? theme.palette.mode === "dark"
                      ? "white"
                      : "black"
                    : "transparent",
              }}
              error={errorState.nodeProposalDate}
            />
            &nbsp;each student can get&nbsp;
            <FilledInput
              type="number"
              value={semester.nodeProposals.numPoints}
              onChange={event => inputsHandler(event, "nodeProposals", "numPoints")}
              endAdornment={
                <Box style={{ marginBottom: "-18px" }}>
                  <InputAdornment position="end">points</InputAdornment>
                </Box>
              }
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "days",
                min: 1,
              }}
              sx={{
                paddingBottom: "10px",
                height: "40px",
                width: "120px",
                borderBottom: "orange",
              }}
            />
            &nbsp; by submitting &nbsp;
            <FilledInput
              type="number"
              value={semester.nodeProposals.numProposalPerDay}
              id="filled-adornment-weight"
              onChange={event => inputsHandler(event, "nodeProposals", "numProposalPerDay")}
              endAdornment={
                <Box style={{ marginBottom: "-18px" }}>
                  <InputAdornment position="end">propose/day</InputAdornment>
                </Box>
              }
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "days",
                pattern: "[0-9]*",
              }}
              sx={{
                paddingBottom: "10px",
                height: "40px",
                width: "170px",
                borderBottom: "orange",
              }}
            />
            &nbsp; in &nbsp;
            <FilledInput
              type="number"
              value={semester.nodeProposals.totalDaysOfCourse}
              id="filled-adornment-weight"
              onChange={event => inputsHandler(event, "nodeProposals", "totalDaysOfCourse")}
              endAdornment={
                <Box style={{ marginBottom: "-18px" }}>
                  <InputAdornment position="end">days</InputAdornment>
                </Box>
              }
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "days",
              }}
              sx={{
                paddingBottom: "10px",
                height: "40px",
                width: "110px",
                borderBottom: "orange",
              }}
              error={errorState.nodeProposalDay}
            />
            &nbsp; of the course.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <Typography variant="h3">Question Proposals</Typography>
        <hr style={{ color: "#A5A5A5" }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", alignContent: "center", alignItems: "baseline" }}>
          <Typography mt={3} variant="h4" sx={{ lineHeight: "2.5" }}>
            From&nbsp;
            <FilledInput
              type="date"
              className={layoutTheme.palette.mode === "dark" ? "light-calender" : "dark-calender"}
              value={semester.questionProposals.startDate}
              id="filled-adornment-weight"
              onChange={event => inputsHandler(event, "questionProposals", "startDate")}
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "days",
              }}
              sx={{
                paddingBottom: "10px",
                height: "40px",
                width: "150px",
                borderBottom: "orange",
                color: theme =>
                  semester.questionProposals.startDate != ""
                    ? theme.palette.mode === "dark"
                      ? "white"
                      : "black"
                    : "transparent",
              }}
              error={errorState.questionProposalDate}
            />
            &nbsp; to &nbsp;
            <FilledInput
              type="date"
              className={layoutTheme.palette.mode === "dark" ? "light-calender" : "dark-calender"}
              value={semester.questionProposals.endDate}
              id="filled-adornment-weight"
              onChange={event => inputsHandler(event, "questionProposals", "endDate")}
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "days",
              }}
              sx={{
                paddingBottom: "10px",
                height: "40px",
                width: "150px",
                borderBottom: "orange",
                color: theme =>
                  semester.questionProposals.endDate != ""
                    ? theme.palette.mode === "dark"
                      ? "white"
                      : "black"
                    : "transparent",
              }}
              error={errorState.questionProposalDate}
            />
            &nbsp;each student can get&nbsp;
            <FilledInput
              type="number"
              value={semester.questionProposals.numPoints}
              onChange={event => inputsHandler(event, "questionProposals", "numPoints")}
              endAdornment={
                <Box style={{ marginBottom: "-18px" }}>
                  <InputAdornment position="end">points</InputAdornment>
                </Box>
              }
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "days",
                min: 1,
              }}
              sx={{
                paddingBottom: "10px",
                height: "40px",
                width: "120px",
                borderBottom: "orange",
              }}
            />
            &nbsp; by submitting &nbsp;
            <FilledInput
              type="number"
              value={semester.questionProposals.numQuestionsPerDay}
              id="filled-adornment-weight"
              onChange={event => inputsHandler(event, "questionProposals", "numQuestionsPerDay")}
              endAdornment={
                <Box style={{ marginBottom: "-18px" }}>
                  <InputAdornment position="end">question/day</InputAdornment>
                </Box>
              }
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "days",
                min: 1,
              }}
              sx={{
                paddingBottom: "10px",
                height: "40px",
                width: "170px",
                borderBottom: "orange",
              }}
            />
            &nbsp; in &nbsp;
            <FilledInput
              type="number"
              value={semester.questionProposals.totalDaysOfCourse}
              id="filled-adornment-weight"
              onChange={event => inputsHandler(event, "questionProposals", "totalDaysOfCourse")}
              endAdornment={
                <Box style={{ marginBottom: "-18px" }}>
                  <InputAdornment position="end">days</InputAdornment>
                </Box>
              }
              aria-describedby="filled-weight-helper-text"
              inputProps={{
                "aria-label": "days",
                min: 1,
              }}
              sx={{
                paddingBottom: "10px",
                height: "40px",
                width: "110px",
                borderBottom: "orange",
              }}
              error={errorState.questionProposalDay}
            />
            &nbsp; of the course.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Proposal;
