import React from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useProducts } from "../../context/ProductContext";

const SideBar = () => {
  const { fetchByParams } = useProducts();

  return (
    <div>
      <Grid>
        <Paper>
          <FormControl>
            <div className="side_bar">
              <Button
                value="фото"
                onClick={(e) => fetchByParams("type", e.target.value)}
              >
                Фото
              </Button>
              <Button
                value="видео"
                onClick={(e) => fetchByParams("type", e.target.value)}
              >
                Видео
              </Button>

              <Button
                value="all"
                onClick={(e) => fetchByParams("type", e.target.value)}
              >
                все
              </Button>
            </div>
          </FormControl>
        </Paper>
      </Grid>
    </div>
  );
};

export default SideBar;
