import React from "react";
import { Container, Grid, GridRow } from "semantic-ui-react";
import Doing from "../pages/Doing";
import Done from "../pages/Done";
import ToDo from "../pages/ToDo";

export default function Dashborad() {
  return (
    <div>
        <Container>
            <Grid columns={"3"}>
        <GridRow>
          <Grid.Column>
            <ToDo></ToDo>
          </Grid.Column>
          <Grid.Column>
            <Doing></Doing>
          </Grid.Column>
          <Grid.Column>
            <Done></Done>
          </Grid.Column>
        </GridRow>
      </Grid>
        </Container>
      
    </div>
  );
}
