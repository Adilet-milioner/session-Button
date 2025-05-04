import React from "react";
import ButtonStyle from "./ButtonStyle";
import styled from "styled-components";

export default function Button() {
  return (
    <div>
      <StyleDiv>
        <ButtonStyle title="outlined" variant="outlined" disabled/>
        <ButtonStyle title="contained" variant="contained" disabled/>
        <ButtonStyle title="Warning" variant="Warning" disabled/>
        <ButtonStyle title="Danger" variant="Danger" disabled/>
      </StyleDiv>
    </div>
  );
}

const StyleDiv = styled.div`
  display: flex;
  gap: 30px;
`;
