import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { type SubmitEvent } from "react";

type Props = {
  formClose: () => void;
  activity?: Activity;
  submitForm: (activity: Activity) => void;
};

export default function ActivityForm({
  formClose,
  activity,
  submitForm,
}: Props) {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    if (activity) data.id = activity.id;
    submitForm(data as unknown as Activity);
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {activity?.id ? "Edit Activity" : "Create Activity"}
      </Typography>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField name="title" label="Title" defaultValue={activity?.title} />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={3}
          value={activity?.description}
        />
        <TextField
          name="category"
          label="Category"
          defaultValue={activity?.category}
        />
        <TextField
          name="date"
          label="Date"
          type="date"
          slotProps={{ inputLabel: { shrink: true } }}
          defaultValue={activity?.date}
        />
        <TextField name="city" label="City" defaultValue={activity?.city} />
        <TextField name="venue" label="Venue" defaultValue={activity?.venue} />
        <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
          <Button onClick={formClose} color="inherit">
            Cancel
          </Button>
          <Button type="submit" color="success" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
