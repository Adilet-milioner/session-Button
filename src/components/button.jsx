import React from "react";
import ButtonStyle from "./ButtonStyle";
import styled from "styled-components";

export default function Button() {
  return (
    <div>
      <StyleDiv>
        <ButtonStyle title="outlined" variant="outlined" />
        <ButtonStyle title="contained" variant="contained" />
        <ButtonStyle title="Warning" variant="Warning" />
        <ButtonStyle title="Danger" variant="Danger" />
      </StyleDiv>
    </div>
  );
}

const StyleDiv = styled.div`
  display: flex;
  gap: 30px;
`;
