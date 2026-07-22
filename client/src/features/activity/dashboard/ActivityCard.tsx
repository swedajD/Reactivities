import { AccessTime, Place } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router";
import { formatDate } from "../../../lib/utils/utils";

type Props = {
  activity: Activity;
};

export default function ActivityCard({ activity }: Props) {
  const isHost = false;
  const isGoing = false;
  const label = isHost ? "You the Host" : "You are going";
  const isCancelled = false;
  const color = isHost ? "secondary" : isGoing ? "warning" : "default";

  return (
    <Card elevation={5}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <CardHeader
          avatar={<Avatar sx={{ height: 80, width: 80 }} />}
          title={activity.title}
          slotProps={{
            title: {
              sx: { fontWeight: "bold", fontSize: 20 },
            },
          }}
          subheader={
            <>
              Hosted by <Link to={`/profiles/bob`}>Bob</Link>
            </>
          }
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginRight: 2,
          }}>
          {(isHost || isGoing) && <Chip label={label} color={color} />}
          {isCancelled && <Chip label="Cancelled" color="error" />}
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 3 }} />

      <CardContent sx={{ padding: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, px: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 0 }}>
            <AccessTime sx={{ marginRight: 1 }} />
            <Typography variant="body2" noWrap>
              {formatDate(activity.date)}
            </Typography>
          </Box>
          <Place sx={{ marginLeft: 3, marginRight: 1 }} />
          <Typography variant="body2">{activity.venue}</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            backgroundColor: "grey.200",
            py: 3,
            pl: 3,
          }}>
          Attendees goes here...
        </Box>
      </CardContent>
      <CardContent sx={{ paddingBottom: 2 }}>
        <Typography variant="body2">{activity.description}</Typography>
        <Button
          component={NavLink}
          to={`/activities/${activity.id}`}
          size="medium"
          variant="contained"
          sx={{ display: "flex", justifySelf: "self-end" }}>
          View
        </Button>
      </CardContent>
    </Card>
  );
}
