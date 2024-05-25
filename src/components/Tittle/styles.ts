import styled from "styled-components";

import{ Props } from '.';

export const Tittle = styled.h3<Props>`
  color: white;
  font-size: ${(props) => props.fontSize ? props.fontSize + 'px' : '14px'};
  font-weight: bold;
  margin-bottom: 16px;
`;
