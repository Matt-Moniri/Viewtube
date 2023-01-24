import { Chip } from "@mui/material";
const filterOptions = [
  { type: "All", selected: true },
  { type: "Electronics", selected: false },
  { type: "Computers", selected: false },
  { type: "Mechanics", selected: false },
  { type: "Aeronautics", selected: false },
  { type: "Metallurgy", selected: false },
];

export default function FilterVideos() {
  return (
    <div>
      {filterOptions.map((item, index) => (
        <Chip
          key={index}
          color="primary"
          variant="contained"
          sx={{
            m: "2px",
            borderRadius: "15px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          label={item.type}
        ></Chip>
      ))}{" "}
    </div>
  );
}
