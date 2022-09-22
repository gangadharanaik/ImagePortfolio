import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card, Container } from "@mui/material";

export default function AddUpdateImage() {
  return (
    <Box
    style={{marginTop:'20px'}}
      display="flex"
      justifyContent="center"
      alignItems="center"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Card sx={{ maxWidth: 500 }} style={{paddingBottom:'10px'}}>
        <div>
          <TextField
            label="Title"
            id="outlined-size-small"
            // defaultValue="Small"
            size="small"
          />
        </div>
        <div>
          <TextField
            label="Description"
            id="outlined-size-small"
            // defaultValue="Small"
            size="small"
          />
        </div>
        <div>
          <label htmlFor="btn-upload">
            <input
              id="btn-upload"
              name="btn-upload"
              style={{ display: "none" }}
              type="file"
              // onChange={this.selectFile}
            />
            <Button className="btn-choose" variant="outlined" component="span">
              Choose Files
            </Button>
          </label>
          <div className="file-name">
            {/* {selectedFiles && selectedFiles.length > 0 ? selectedFiles[0].name : null} */}
          </div>
          {/* <Button
          className="btn-upload"
          color="primary"
          variant="contained"
          component="span"
        //   disabled={!selectedFiles}
        //   onClick={this.upload}
          >
          Upload
        </Button> */}
        </div>
      </Card>
    </Box>
  );
}
