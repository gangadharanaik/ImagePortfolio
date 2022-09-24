import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card, Container, Typography } from "@mui/material";
import { title } from "process";

export default function AddUpdateImage({ editdata }: any) {
  const [selectedFiles, setSelectedFiles] = React.useState<any[]>([]);
  React.useEffect(() => {    
    if(editdata!==undefined){
        setFormValues(editdata);
    }
  }, []);

  const [formValues, setFormValues] = React.useState({
    title: {
      value: "",
      error: false,
      errorMessage: "You must enter a title",
    },
    description: {
      value: "",
      error: false,
      errorMessage: "You must enter an description",
    },
    image: {
      value: {},
      error: false,
      errorMessage: "You must select an image file",
    },
  });
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.name == "image" ? e.target.files[0] : e.target.value;
    type ObjectKey1 = keyof typeof formValues;
    const myVar1 = name as ObjectKey1;
    if (e.target.name === "image") {
      let extension = value.name.split(".").pop();
      if (
        !(
          extension.toUpperCase() === "png".toUpperCase() ||
          extension.toUpperCase() === "jpg".toUpperCase()
        )
      ) {
        let newFormValues = {
          ...formValues,
          [myVar1]: {
            ...formValues[myVar1],
            error: true,
            errorMessage:
              "Please upload valid formate, Only jpg and png formate allowed",
          },
        };
        setFormValues(newFormValues);
        return null;
      } else {
        let newFormValues = {
          ...formValues,
          [myVar1]: {
            ...formValues[myVar1],
            value: value,
            error: false,
          },
        };
        setFormValues(newFormValues);
        return null;
      }
    }

    setFormValues({
      ...formValues,
      [name]: { ...formValues[myVar1], value },
    });
  };
  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      type ObjectKey = keyof typeof formValues;
      const myVar = currentField as ObjectKey;
      const currentValue = formValues[myVar].value;
      type ObjectKey1 = keyof typeof formValues;
      const myVar1 = currentField as ObjectKey1;

      if (currentField !== "image") {
        if (currentValue === "") {
          newFormValues = {
            ...newFormValues,
            [currentField]: {
              ...newFormValues[myVar1],
              error: true,
            },
          };
        } else {
          newFormValues = {
            ...newFormValues,
            [currentField]: {
              ...newFormValues[myVar1],
              error: false,
            },
          };
        }
      } else {
        if (Object.keys(currentValue).length === 0) {
          newFormValues = {
            ...newFormValues,
            [myVar1]: {
              ...newFormValues[myVar1],
              error: true,
            },
          };
        } else {
          newFormValues = {
            ...newFormValues,
            [myVar1]: {
              ...newFormValues[myVar1],
              error: false,
            },
          };
        }
      }
    }

    setFormValues(newFormValues);
  };
  return (
    <Box
      style={{ marginTop: "20px" }}
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
      <Card sx={{ maxWidth: 500 }} style={{ paddingBottom: "10px" }}>
        <div>
          <TextField
            label="Title"
            id="outlined-size-small"
            size="small"
            name="title"
            variant="outlined"
            fullWidth
            required
            value={formValues.title.value}
            error={formValues.title.error}
            helperText={formValues.title.error && formValues.title.errorMessage}
            onChange={(e: any) => handleChange(e)}
          />
        </div>
        <div>
          <TextField
            label="Description"
            id="outlined-size-small"
            name="description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            size="small"
            value={formValues.description.value}
            onChange={(e: any) => handleChange(e)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="btn-upload">
            <TextField
              id="btn-upload"
              name="image"
              size="small"
              style={{ display: "none" }}
              type="file"
              required
              label="Image"
              variant="outlined"
              fullWidth
              value={""}
              error={formValues.image.error}
              helperText={
                formValues.image.error && formValues.image.errorMessage
              }
              onChange={(e: any) => handleChange(e)}
            />
            <Button
              style={{ width: "97%", margin: "7px" }}
              className="btn-choose"
              variant="outlined"
              component="span"
            >
              Choose Files
            </Button>
          </label>
          <div className="file-name">
            {formValues && true ? (formValues.image.value as any).name : null}
          </div>
          {formValues.image.error && (
            <Typography
              style={{
                color: "#d32f2f",
                fontSize: "0.75rem",
                paddingLeft: "20px",
                textAlign: "left",
              }}
            >
              {formValues.image.errorMessage}
            </Typography>
          )}
        </div>
        <Button
          style={{ width: "97%", margin: "7px" }}
          className="btn-upload"
          color="primary"
          variant="contained"
          component="span"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Card>
    </Box>
  );
}
