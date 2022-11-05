import PlaceIcon from "@mui/icons-material/Place";
import SquareIcon from "@mui/icons-material/Square";
import { Paper, Typography /* useTheme */, useMediaQuery, useTheme } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";

import { BoxChart } from "@/components/chats/BoxChart";
import { BubbleChart } from "@/components/chats/BubbleChart";

import { PointsBarChart } from "../../components/chats/PointsBarChart";
import { TrendPlot } from "../../components/chats/TrendPlot";
import { InstructorLayoutPage, InstructorsLayout } from "../../components/layouts/InstructorsLayout";
export type Chapter = {
  [key: string]: number[];
};
export type BoxData = {
  "Proposal Points": Chapter;
  "Question Points": Chapter;
  "Vote Points": Chapter;
};

const data: BoxData = {
  "Proposal Points": {
    "The way of the program": [20, 23, 24, 24, 24, 25, 30],
    "Variables, expressions and ...": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    Functions: [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    "Case study: interface design": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    "Conditionals and recursion": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    "Fruitful functions": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    // "Fruitfuwwel functions": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    // "1Fruiwwtful functions": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    // "1Fruwitful functions": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    // "1Frwuitful functions": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    // "1wFruitful functions": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    // "1Fwruitful functions": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
  },
  "Question Points": {
    // "The way of the program": [12, 19, 11, 13, 12, 22, 13, 4, 15, 16, 18, 19, 0, 12, 11, 19],
    // "Variables, expressions and ...": [12, 19, 11, 13, 12, 22, 13, 4, 15, 16, 18, 19, 0, 12, 11, 19],
    // Functions: [12, 19, 11, 13, 12, 22, 13, 4, 15, 16, 18, 19, 0, 12, 11, 19],
    "The way of the program": [20, 23, 24, 24, 24, 25, 30],
    "Variables, expressions and ...": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    Functions: [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    "Case study: interface design": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    "Conditionals and recursion": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    "Fruitful functions": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
  },
  "Vote Points": {
    // "The way of the program": [12, 19, 11, 13, 12, 22, 13, 4, 15, 16, 18, 19, 0, 12, 11, 19],
    // "Variables, expressions and ...": [12, 19, 11, 13, 12, 22, 13, 4, 15, 16, 18, 19, 0, 12, 11, 19],
    // Functions: [12, 19, 11, 13, 12, 22, 13, 4, 15, 16, 18, 19, 0, 12, 11, 19],
    "The way of the program": [20, 23, 24, 24, 24, 25, 30],
    "Variables, expressions and ...": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    Functions: [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    "Case study: interface design": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    "Conditionals and recursion": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
    "Fruitful functions": [20, 23, 24, 24, 24, 25, 29, 31, 31, 33, 34, 36, 36, 37, 39, 39, 40, 40, 41, 45],
  },
};

const BoxLegend = () => {
  return (
    <Box sx={{ display: "flex", gap: "16px", alignItems: "center", alignSelf: "center" }}>
      <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <SquareIcon sx={{ fill: "#EC7115", fontSize: "12px" }} />
        <Typography sx={{ fontSize: "12px" }}>Class Average</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <PlaceIcon sx={{ fill: "#EF5350", fontSize: "16px" }} />
        <Typography sx={{ fontSize: "12px" }}>Your Position</Typography>
      </Box>
    </Box>
  );
};

const Instructors: InstructorLayoutPage = ({ selectedSemester, selectedCourse }) => {
  // const pointsChartRef = useRef<(HTMLElement & SVGElement) | null>(null);

  const theme = useTheme();
  // const [screenSize, setScreenSize] = useState(null);

  const isMovil = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.only("md"));

  // useEffect(()=>{

  // })
  console.log("first", theme.breakpoints);
  // const isMovil = useMediaQuery(theme.breakpoints.values());

  // const [width, setWith] = useState(0);
  // const getWith = useCallback(ref => {
  //   if (!ref) return 0;

  //   // console.log({ ref: ref.clientWidth });
  //   setWith(ref.clientWidth);
  // }, []);

  // const getWith = useCallback(ref => {
  //   if (!ref) return 0;

  //   // console.log({ ref: ref.clientWidth });
  //   setWith(ref.clientWidth);
  // }, []);

  // useEffect(() => {}, [isSmall, isMedium]);

  return (
    <Box
      sx={{
        pb: "10px",
        maxWidth: "1384px",
        m: "auto",
        px: { xs: "10px", xl: "0px" },
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(auto, 421px) auto minmax(auto, 629px)" },
          gap: "16px",
        }}
      >
        <Paper sx={{ p: "16px" }}>
          <Typography>
            hello world {selectedSemester} + {selectedCourse}
          </Typography>
        </Paper>
        <Paper
          sx={{
            px: "32px",
            py: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "4px" }}>
            <Box>
              <Typography sx={{ fontSize: "19px" }}>Points</Typography>
              <Typography># of Students</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "12px" }}>Completion rate</Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "15px 1fr 15px 1fr",
                  alignItems: "center",
                  columnGap: "2px",
                  fontSize: "12px",
                }}
              >
                <SquareIcon fontSize="inherit" sx={{ fill: "#388E3C" }} />
                <span>{`>100%`}</span>
                <SquareIcon fontSize="inherit" sx={{ fill: "#F9E2D0" }} />
                <span>{`>10%`}</span>
                <SquareIcon fontSize="inherit" sx={{ fill: "#A7D841" }} />
                <span>{`>50%`}</span>
                <SquareIcon fontSize="inherit" sx={{ fill: "#FF8A33" }} />
                <span>{`<=100%`}</span>
              </Box>
            </Box>
          </Box>
          <Box sx={{ alignSelf: "center" }}>
            <PointsBarChart />
          </Box>
        </Paper>
        <Paper sx={{ px: "32px", py: "40px" }}>
          <Typography sx={{ fontSize: "19px", mb: "40px" }}>Vote Points</Typography>
          <BubbleChart />
        </Paper>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "16px",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: { sm: "40px 20px", md: "40px 20px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { sm: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: isMovil ? "24px" : "0px",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Typography sx={{ fontSize: "19px" }}>Chapters </Typography>
                <Typography sx={{ fontSize: "19px" }}> Proposal Points</Typography>
              </Box>
              <BoxChart
                theme={"Dark"}
                data={data["Proposal Points"]}
                width={450}
                boxHeight={25}
                margin={{ top: 10, right: 0, bottom: 20, left: 8 }}
                offsetX={150}
                offsetY={18}
                identifier="boxplot1"
              />
              {isMovil && <BoxLegend />}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                {isMovil && <Typography sx={{ fontSize: "19px" }}>Chapters </Typography>}
                <Typography sx={{ fontSize: "19px" }}> Question Points</Typography>
              </Box>
              <BoxChart
                theme={"Dark"}
                data={data["Question Points"]}
                drawYAxis={isMovil}
                width={isMovil ? 450 : 300}
                boxHeight={25}
                margin={{ top: 10, right: 0, bottom: 20, left: 10 }}
                offsetX={isMovil ? 150 : 2}
                offsetY={18}
                identifier="boxplot1"
              />
              {isMovil && <BoxLegend />}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                {isMovil && <Typography sx={{ fontSize: "19px" }}>Chapters </Typography>}
                <Typography sx={{ fontSize: "19px" }}> Vote Points</Typography>
              </Box>
              <BoxChart
                theme={"Dark"}
                data={data["Vote Points"]}
                drawYAxis={isMovil}
                width={isMovil ? 450 : 300}
                boxHeight={25}
                margin={{ top: 10, right: 0, bottom: 20, left: 10 }}
                offsetX={isMovil ? 150 : 2}
                offsetY={18}
                identifier="boxplot1"
              />
              {isMovil && <BoxLegend />}
            </Box>
          </Box>
          {!isMovil && <BoxLegend />}
        </Paper>
        <Paper
          /* ref={getWith} */ sx={{
            p: isMovil ? "10px" : isTablet ? "20px" : "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TrendPlot
            title={"New Node Points"}
            // heightTop={(354 * width) / 1045}
            // heightBottom={(160 * width) / 1045}
            heightTop={isMovil ? 150 : isTablet ? 250 : 354}
            heightBottom={isMovil ? 80 : isTablet ? 120 : 160}
            // width={WIDTH}
            width={isMovil ? 300 : isTablet ? 600 : 1045}
            scaleX={"time"}
            labelX={"Day"}
            scaleY={"linear"}
            labelY={"# of Proposals"}
            theme={"Dark"}
            x="date"
            y="num"
            trendData={[]}
          />
        </Paper>
        {/* <Paper sx={{ p: "40px" }}>
          <TrendPlot
            title={"Edit Proposals"}
            heightTop={354}
            heightBottom={160}
            width={1045}
            scaleX={"time"}
            labelX={"Day"}
            scaleY={"linear"}
            labelY={"# of Proposals"}
            theme={"Dark"}
            x="date"
            y="num"
            trendData={[]}
          />
        </Paper>

        <Paper sx={{ p: "40px" }}>
          <TrendPlot
            title={"Links"}
            heightTop={354}
            heightBottom={160}
            width={1045}
            scaleX={"time"}
            labelX={"Day"}
            scaleY={"linear"}
            labelY={"# of Proposals"}
            theme={"Dark"}
            x="date"
            y="num"
            trendData={[]}
          />
        </Paper>

        <Paper sx={{ p: "40px" }}>
          <TrendPlot
            title={"Nodes"}
            heightTop={354}
            heightBottom={160}
            width={1045}
            scaleX={"time"}
            labelX={"Day"}
            scaleY={"linear"}
            labelY={"# of Proposals"}
            theme={"Dark"}
            x="date"
            y="num"
            trendData={[]}
          />
        </Paper>

        <Paper sx={{ p: "40px" }}>
          <TrendPlot
            title={"Votes"}
            heightTop={354}
            heightBottom={160}
            width={1045}
            scaleX={"time"}
            labelX={"Day"}
            scaleY={"linear"}
            labelY={"# of Proposals"}
            theme={"Dark"}
            x="date"
            y="num"
            trendData={[]}
          />
        </Paper>

        <Paper sx={{ p: "40px" }}>
          <TrendPlot
            title={"Questions"}
            heightTop={354}
            heightBottom={160}
            width={1045}
            scaleX={"time"}
            labelX={"Day"}
            scaleY={"linear"}
            labelY={"# of Proposals"}
            theme={"Dark"}
            x="date"
            y="num"
            trendData={[]}
          />
        </Paper> */}
      </Box>
    </Box>
  );
};

// This wrapper expose the shared variables from filters
const PageWrapper = () => {
  return <InstructorsLayout>{props => <Instructors {...props} />}</InstructorsLayout>;
};
export default PageWrapper;

// const NodeBook = () => (
//   <NodeBookProvider>
//     <Dashboard />
//   </NodeBookProvider>
// );
// export default withAuthUser({
//   shouldRedirectToLogin: true,
//   shouldRedirectToHomeIfAuthenticated: false,
// })(NodeBook);
