import styled from "styled-components";

export const Section = styled.div`
  positon: relative;
  width: 100%;
  height: 1500px;
  background-color: rgba(241, 241, 245, 0.6);
  z-index: 1;
`;
export const Inside = styled.div`
  position: absolute;
  width: 920px;
  height: 1300px;
  background-color: #fff;
  margin: 40px auto 62px;
  left: 0;
  right: 0;
  box-shadow: 4px 4px 25px 0px #c9c9e3;
  z-index: 0;
  font-size: 20px;
`;
