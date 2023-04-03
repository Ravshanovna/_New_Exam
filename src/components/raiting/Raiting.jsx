import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";

const labels = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function HoverRating(props) {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1)
  console.log(props.state.id);

  function Ishla(params) {
    axios.put(`https://6422d0cd77e7062b3e236a04.mockapi.io/scxcvdfvcx/project1/${props.state.id}`,{
      grade:params
    })
    .then((res)=>{
      console.log(res.data);
    })
    // console.log(params);
  }

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        fontSize:25
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
          Ishla(newValue)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon   style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
