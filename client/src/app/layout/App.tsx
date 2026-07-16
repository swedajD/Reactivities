import { Box, CircularProgress, Container, CssBaseline } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activity/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  // const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  const { activities, isPending } = useActivities();

  // useEffect(() => {
  //   axios
  //     .get("https://localhost:5001/api/activities")
  //     .then((response) => setActivities(response.data));
  // }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((x) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  return (
    <Box sx={{ backgroundColor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ marginTop: 3 }}>
        {!activities || isPending ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}>
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectedActivity={selectedActivity}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            close={handleFormClose}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
