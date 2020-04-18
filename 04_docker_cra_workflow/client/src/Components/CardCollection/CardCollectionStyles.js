import styled from "styled-components";

export const CardCollectionContainer = styled.div`
  display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;
