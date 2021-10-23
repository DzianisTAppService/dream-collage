import React from "react";
import { Button } from "@material-ui/core";

const UpdateDream: React.FC<TUpdateDeleteDream> = (props) => {
  const updateUser = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    window.location.href = `http://localhost:8000/dream/update/${props.id}`
  };
  return(
    <Button variant="contained" color="primary" onClick={updateUser}>Update</Button>
  )
};

export default UpdateDream;

export interface TUpdateDeleteDream {
  id: string;
}