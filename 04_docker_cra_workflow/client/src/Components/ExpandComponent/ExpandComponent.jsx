import "./ExpandComponent.css";
import React, { useState } from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from "@material-ui/core";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  ExpandComponentContainer,
  ExpandComponentArrow,
} from "./ExpandComponentStyles";

const ExpandComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ExpandComponentContainer>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandComponentArrow>&#x2199;</ExpandComponentArrow>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={""}>General settings</Typography>
          <Typography className={""}>I am an expansion panel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
            Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Nulla facilisi. Phasellus
            sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam. Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandComponentArrow>&#x2199;</ExpandComponentArrow>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={""}>Users</Typography>
          <Typography className={""}>You are currently not an owner</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet. Donec placerat, lectus sed mattis semper, neque
            lectus feugiat lectus, varius pulvinar diam eros in elit.
            Pellentesque convallis laoreet laoreet. Donec placerat, lectus sed
            mattis semper, neque lectus feugiat lectus, varius pulvinar diam
            eros in elit. Pellentesque convallis laoreet laoreet. Donec
            placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet. Donec placerat, lectus sed mattis semper, neque lectus
            feugiat lectus, varius pulvinar diam eros in elit. Pellentesque
            convallis laoreet laoreet.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandComponentArrow>&#x2199;</ExpandComponentArrow>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={""}>Advanced settings</Typography>
          <Typography className={""}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue. Nunc
            vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue. Nunc
            vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue. Nunc
            vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue. Nunc
            vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandComponentArrow>&#x2199;</ExpandComponentArrow>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={""}>Personal data</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue. Nunc
            vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue. Nunc
            vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue. Nunc
            vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue. Nunc
            vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue. Nunc
            vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </ExpandComponentContainer>
  );
};

export default ExpandComponent;
