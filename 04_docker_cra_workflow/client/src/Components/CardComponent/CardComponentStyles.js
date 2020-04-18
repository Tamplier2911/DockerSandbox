import styled from "styled-components";

const getSize = ({ size }) => {
  console.log(size);
  if (size === "big")
    return `
        @media only screen and (max-width: 1088px){
            grid-column: span 2;
        }
        @media only screen and (max-width: 736px){
            grid-column: span 1;
        }
    `;
  return ``;
};

export const CardComponentContainer = styled.div`
  ${getSize}
  display: grid;
`;
