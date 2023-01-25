import { Chip } from "@material-ui/core";
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
        <span
          style={{
            margin: "5px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Chip
            key={index}
            color="primary"
            style={{
              borderRadius: "15px",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            label={item.type}
          ></Chip>
        </span>
      ))}{" "}
    </div>
  );
}
