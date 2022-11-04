import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { createStyles, makeStyles } from '@mui/styles';
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Chip from "@mui/material/Chip";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  DataGrid,
  // GridCallbackDetails,
  // GridCellEditCommitParams,
  // GridRenderEditCellParams,
  GridRowsProp,
  // GridValueSetterParams,
  // MuiBaseEvent,
  // MuiEvent,
} from "@mui/x-data-grid";
import { randomTraderName, randomUpdatedDate } from "@mui/x-data-grid-generator";
import { GridActionsCellItem } from "@mui/x-data-grid-pro";
import React, { useState } from "react";

import OptimizedAvatar from "../../components/OptimizedAvatar";
import PageWrapper from "./tmp";
// const useStyles = makeStyles(() => ({
//   editableMode: {

//   },
// }));
const rows: GridRowsProp = [
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 20,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/onecademy-dev.appspot.com/o/ProfilePictures%2F5Xmi9d1H1yeRQ8giDkfjm00Fd0f2%2FWed%2C%2012%20Oct%202022%2019%3A09%3A26%20GMT_430x1300.jpeg?alt=media&token=93036b13-d3d8-45fd-86d4-2807287dc5f0",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "username",
      avatar: "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
  {
    id: 1,
    user: {
      username: "Harry Potter",
      avatar: "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
    },
    firstName: randomTraderName(),
    lastName: randomTraderName(),
    email: "samirbes@umich.edu",
    totalPoints: 10,
    corrects: 10,
    wrongs: 10,
    awards: 10,
    newPorposals: 10,
    editNodeProposals: 10,
    proposalsPoints: 10,
    questions: 10,
    questionPoints: 10,
    vote: 10,
    votePoints: 10,
    lastActivity: randomUpdatedDate(),
  },
];

export const Students = () => {
  const [tableRows, setTableRows] = useState<GridRowsProp>(rows);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [updatedTableData, setUpdatedTableData] = useState(rows);
  const [openFilter, setOpenFilter] = useState(false);
  const [editMode, setEditMode] = useState(false);
  // const [tableColumns /* , setTableColumns */] = useState(dataGridColumns({ editMode: false }));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dataGridLoading, setDataGridLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<
    {
      title: string;
      operation: string;
      value: number;
    }[]
  >([]);

  const handleOpenCloseFilter = () => setOpenFilter(!openFilter);

  const handleFilterBy = () => {
    const _tableRows = [...tableRows];
    const newTable = [];
    for (let row of _tableRows) {
      let canShow = true;
      for (let filter of filters) {
        if (filter.operation === "<") {
          if (row[filter.title] > filter.value) {
            canShow = false;
            break;
          }
        } else if (filter.operation === ">") {
          if (row[filter.title] < filter.value) {
            canShow = false;
            break;
          }
        }
      }
      if (canShow) {
        newTable.push(row);
      }
      console.log(row);
    }
    setTableRows(newTable);
    handleOpenCloseFilter();
  };

  const handleChangeFilter = (event: any) => {
    const newFilter = {
      title: event.target.value,
      operation: "<",
      value: 10,
    };
    const updateFilters = [...filters, newFilter];
    setFilters(updateFilters);
  };

  const addFilter = () => {
    const newFilter = {
      title: "",
      operation: "<",
      value: 10,
    };
    const updateFilters = [...filters, newFilter];
    setFilters(updateFilters);
  };

  const deleteFilter = (index: any) => {
    console.log(index);
    const _oldFilters = [...filters];
    _oldFilters.splice(index, 1);
    setFilters(_oldFilters);
  };
  const handleChangeOperation = () => {
    console.log("handleChangeOperation");
  };

  const filterChoices = [
    "totalPoints",
    "wrongs",
    "corrects",
    "awards",
    "newPorposals",
    "editNodeProposals",
    "proposalsPoints",
    "questions",
    "questionPoints",
    "vote",
    "votePoints",
    "lastActivity",
  ];

  const handleChangeChoice = (index: number, event: any) => {
    console.log(index);
    const _filters = [...filters];
    _filters[index] = {
      ..._filters[index],
      title: event.target.value,
    };
    setFilters(_filters);
  };

  const editFilterValue = (index: number, event: any) => {
    console.log(event.target.value);
    const _filters = [...filters];
    _filters[index] = {
      ..._filters[index],
      value: event.target.value,
    };
    setFilters(_filters);
  };
  console.log("filters", filters);
  const list = () => (
    <>
      <Box sx={{ textAlign: "right" }}>
        <IconButton onClick={handleOpenCloseFilter}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        role="presentation"
        sx={{
          width: "489px",
          display: "flex",
          flexDirection: "column",
          height: "90%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ ml: "50px", width: "400px" }}>
          <Typography sx={{ mb: "10px" }}>Filter By</Typography>

          {filters.length > 0 ? (
            <>
              {filters.map((filter, index) => {
                console.log(filter.operation);
                return (
                  <>
                    <Paper key={index} elevation={6} sx={{ mb: "13px" }}>
                      <Box sx={{ textAlign: "right" }}>
                        <IconButton onClick={() => deleteFilter(index)}>
                          <DeleteForeverIcon />
                        </IconButton>
                      </Box>
                      <Box sx={{ width: "367px", ml: "5px", mr: "10px", paddingBottom: "10px" }}>
                        <FormControl fullWidth>
                          <Select value={filter.title} onChange={event => handleChangeChoice(index, event)}>
                            {filterChoices.map((choice, index) => {
                              return (
                                <MenuItem key={index} value={choice}>
                                  {choice}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "row", paddingBottom: "25px" }}>
                        <Box sx={{ minWidth: 80, ml: "5px", mr: "10px" }}>
                          <FormControl fullWidth>
                            <Select value={filter.operation} onChange={handleChangeOperation}>
                              <MenuItem value={"<"}>{"<"}</MenuItem>
                              <MenuItem value={">"}>{">"}</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <TextField
                          sx={{ height: "5px", width: "70%" }}
                          id="outlined-basic"
                          placeholder="Enter a value"
                          variant="outlined"
                          onChange={event => editFilterValue(index, event)}
                          value={filter.value}
                        />
                      </Box>
                    </Paper>
                    <>{filters.length - 1 !== index && <>AND</>}</>
                  </>
                );
              })}
              <Box sx={{ mt: "10px" }}>
                <IconButton onClick={addFilter}>
                  <AddIcon />
                </IconButton>
                {"Add a Filter"}
              </Box>
            </>
          ) : (
            <Box sx={{ width: "367px", ml: "5px", mr: "10px", paddingBottom: "10px" }}>
              <FormControl fullWidth>
                <Select displayEmpty name="Enter a value" onChange={handleChangeFilter}>
                  {filterChoices.map((choice, index) => {
                    return (
                      <MenuItem key={index} value={choice}>
                        {choice}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          )}
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={handleFilterBy}
            sx={{
              color: theme => theme.palette.common.white,
              background: theme => theme.palette.common.orange,
              height: { xs: "40px", md: "55px" },
              width: { xs: "50%", md: "auto" },
              fontSize: 16,
              fontWeight: "700",
              marginLeft: { xs: "0px", md: "32px" },
              marginRight: "40px",
              paddingX: "30px",
              borderRadius: 1,
            }}
          >
            Filter result
          </Button>
        </Box>
      </Box>
    </>
  );

  const saveTableChanges = () => {
    // console.log(apiRef?.current?.getRowModels());
    // setTableRows([]);
    // setDataGridLoading(true);
    // setTimeout(() => {
    //   setTableRows([...updatedTableData]);
    //   setDataGridLoading(false);
    // }, 1000);
  };

  const discardTableChanges = () => {
    setEditMode(!editMode);
    setTableRows([...tableRows]);
    setUpdatedTableData([]);
  };

  // console.log({ filters, editMode });
  return (
    <>
      <PageWrapper />
      <Box className="student-dashboard" sx={{ padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: "25px 30px",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              width: "30%",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="h1" component="h2">
                Sl 106
              </Typography>
              <Typography sx={{ ml: "5px", mt: "20px", fontSize: "14.5px" }} variant="h5" component="h2">
                Fall 22
              </Typography>
            </Box>

            <Typography sx={{ fontSize: "14.5px" }} variant="h5" component="h2">
              Students: 50
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={handleOpenCloseFilter}
              sx={{
                color: theme => theme.palette.common.white,
                background: theme => theme.palette.common.orange,
                height: { xs: "40px", md: "55px" },
                width: { xs: "50%", md: "auto" },
                fontSize: 16,
                fontWeight: "700",
                my: { xs: "0px", md: "auto" },
                mt: { xs: "15px", md: "auto" },
                marginLeft: { xs: "0px", md: "32px" },
                marginRight: "40px",
                paddingX: "30px",
                borderRadius: 1,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              Filter By
            </Button>
            <TextField
              sx={{ height: "5px", width: "500px" }}
              id="outlined-basic"
              placeholder="search name or email"
              variant="outlined"
            />
            <Button
              variant="contained"
              onClick={() => setEditMode(!editMode)}
              sx={{
                color: theme => theme.palette.common.white,
                background: theme => theme.palette.common.black,
                height: { xs: "40px", md: "55px" },
                width: { xs: "50%", md: "auto" },
                fontSize: 16,
                fontWeight: "700",
                my: { xs: "0px", md: "auto" },
                mt: { xs: "15px", md: "auto" },
                marginLeft: { xs: "0px", md: "32px" },
                marginRight: "40px",
                paddingX: "30px",
                borderRadius: 1,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              <EditIcon /> Edit/Add
            </Button>

            <Drawer anchor={"right"} open={openFilter} onClose={handleOpenCloseFilter}>
              {list()}
            </Drawer>
          </Box>
        </Box>
        {filters.length > 0 && !openFilter && (
          <Stack direction="row" spacing={1}>
            {filters?.map((filter, index) => {
              return (
                <>
                  <Chip
                    key={index}
                    label={filter.title + " " + filter.operation + " " + filter.value}
                    onDelete={() => deleteFilter(index)}
                  />
                  {filters.length - 1 !== index && <Chip key={index} label={"AND"} />}
                </>
              );
            })}{" "}
          </Stack>
        )}

        <hr />
        <Box className="student-dashboard-table" sx={{ height: "500px", mt: "40px", mr: "70px", ml: "40px" }}>
          <DataGrid
            rows={tableRows.map((x, index) => {
              x.id = index;
              return x;
            })}
            columns={dataGridColumns({ editMode })}
            autoPageSize
            components={{
              LoadingOverlay: LinearProgress,
            }}
            hideFooter
            loading={dataGridLoading}
            // onCellEditCommit={(params: any, event: MuiEvent<MuiBaseEvent>, details: GridCallbackDetails) => {
            //   console.log({
            //     params,
            //     event,
            //     details,
            //   });
            //   // const updatedValue = params.value;
            //   const tableData = [...tableRows];
            //   const rowData = params?.row;
            //   const { id } = rowData;
            //   const findStudentIndex = tableData.findIndex(row => row.id === id);
            //   tableData[findStudentIndex] = rowData;
            //   setUpdatedTableData(tableData);
            // }}
            /*
        we shouldn't use this as this is for experimental purpose,
        only use if it is marked stable by MUI
      */
            // experimentalFeatures={{ newEditingApi: true }}
          />
          {editMode && (
            <Box sx={{ mt: "50px" }}>
              <Button
                variant="text"
                sx={{
                  color: theme => theme.palette.common.black,
                  backgroundColor: "#EDEDED",
                  fontSize: 16,
                  fontWeight: "700",
                  my: { xs: "0px", md: "auto" },
                  mt: { xs: "15px", md: "auto" },
                  marginLeft: { xs: "0px", md: "32px" },
                  marginRight: "40px",
                  paddingX: "30px",
                  borderRadius: 1,
                  textAlign: "center",
                  alignSelf: "center",
                }}
                onClick={() => discardTableChanges()}
              >
                Add students from a csv file
              </Button>

              <Box sx={{ textAlign: "right" }}>
                <Button
                  variant="text"
                  sx={{
                    color: theme => theme.palette.common.white,
                    fontSize: 16,
                    fontWeight: "700",
                    my: { xs: "0px", md: "auto" },
                    marginLeft: { xs: "0px", md: "32px" },
                    marginRight: "40px",
                    paddingX: "30px",
                    borderRadius: 1,
                    textAlign: "center",
                    alignSelf: "center",
                  }}
                  onClick={() => discardTableChanges()}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: theme => theme.palette.common.white,
                    background: theme => theme.palette.common.orange,
                    fontSize: 16,
                    fontWeight: "700",
                    my: { xs: "0px", md: "auto" },
                    marginLeft: { xs: "0px", md: "32px" },
                    marginRight: "40px",
                    paddingX: "30px",
                    borderRadius: 1,
                    textAlign: "center",
                    alignSelf: "center",
                  }}
                  onClick={() => saveTableChanges()}
                >
                  Save Changes
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Students;

const dataGridColumns = ({ editMode }: any) => [
  {
    field: "user",
    headerName: "",
    description: "",
    renderCell: params => {
      return (
        <>
          <OptimizedAvatar
            name={params.row.user.username}
            imageUrl={params.row.user.avatar}
            contained
            renderAsAvatar={false}
          />
        </>
      );
    },
    // valueSetter: (params: GridValueSetterParams) => ({ ...params.row, firstName: params.value }),
    width: 50,
    editable: true,
  },
  {
    field: "firstName",
    headerName: "First Name",
    description: "First Name",
    // valueSetter: (params: GridValueSetterParams) => ({ ...params.row, firstName: params.value }),
    cellClassName: () => `${editMode ? "editable-cell" : "not-editable-cell"}`,
    width: 250,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    description: "Last Name",
    cellClassName: () => `${editMode ? "editable-cell" : "not-editable-cell"}`,
    width: 200,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    description: "Email",
    cellClassName: () => `${editMode ? "editable-cell" : "not-editable-cell"}`,
    // renderEditCell: (params: GridRenderEditCellParams) => (
    //   <TextField className="edit-text" value={params.value} style={{ width: "100%" }} />
    // ),
    width: 300,
    editable: true,
  },
  {
    field: "totalPoints",
    headerName: "Total Poitns",
    description: "Total Points",
    width: 100,
    editable: false,
  },
  {
    field: "wrongs",
    headerName: "Wrongs",
    description: "Wrongs",
    width: 100,
    editable: false,
  },
  {
    field: "corrects",
    headerName: "Corrects",
    description: "Corrects",
    width: 100,
    editable: false,
  },
  {
    field: "awards",
    headerName: "Awards",
    description: "Awards",
    width: 100,
    editable: false,
  },
  {
    field: "newPorposals",
    headerName: "New Proposals",
    description: "New Proposals",
    width: 100,
    editable: false,
  },
  {
    field: "editNodeProposals",
    headerName: "Edit Node Proposals",
    description: "Edit Node Proposals",
    width: 200,
    editable: false,
  },
  {
    field: "proposalsPoints",
    headerName: "Proposals Points",
    description: "Proposals Points",
    width: 200,
    editable: false,
  },
  {
    field: "questions",
    headerName: "Questions",
    description: "Questions",
    width: 200,
    editable: false,
  },
  {
    field: "questionPoints",
    headerName: "Question Points",
    description: "Question Points",
    width: 200,
    editable: false,
  },
  {
    field: "vote",
    headerName: "Vote",
    description: "Vote",
    width: 100,
    editable: false,
  },
  {
    field: "votePoints",
    headerName: "Vote Points",
    description: "Vote Points",
    width: 100,
    editable: false,
  },
  {
    field: "lastActivity",
    headerName: "Last Activity",
    description: "Last Activity",
    type: "dateTime",
    width: 220,
    editable: false,
  },
  {
    field: "actions",
    type: "actions",
    width: editMode ? 100 : 0,
    getActions: () => [
      editMode ? (
        <>
          <GridActionsCellItem icon={<DeleteIcon sx={{ color: "red" }} />} label="Delete" />
        </>
      ) : (
        <></>
      ),
    ],
  },
];
