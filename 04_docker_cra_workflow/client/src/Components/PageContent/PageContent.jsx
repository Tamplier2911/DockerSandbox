import "./PageContent.css";
import React from "react";

import CardCollection from "../CardCollection/CardCollection";
import ExpandComponent from "../ExpandComponent/ExpandComponent";

import {
  ContentPageContaienr,
  ContentPageHeader,
  ContentPageSubHeader,
} from "./PageContentStyles";

const PageContent = () => {
  return (
    <ContentPageContaienr>
      <ContentPageHeader>
        This website is created for Docker and Material UI study purposes!
      </ContentPageHeader>
      <CardCollection />
      <ContentPageSubHeader>Lorem ipsum dolor sit amet!</ContentPageSubHeader>
      <ExpandComponent />
    </ContentPageContaienr>
  );
};
export default PageContent;
