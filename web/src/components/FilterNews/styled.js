import styled from 'styled-components';

export const FilterContainer = styled.div`
  background-color: #1f1e1e6b !important;
  box-shadow: 0px 0px 15px 0px #000000b0 !important;
  padding: 10px;
`;

export const FilterTitle = styled.h4`
  color: white;
`;

export const FieldBlock = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;

  .MuiFormControl-root {
    width: 100%;
  }
  
  * {
    color: #ffffff7a !important;

    .MuiInput-underline {
      &::before, &::after {
        border-color: #ffffff7a;
        border-bottom-color: #ffffff7a !important;
      }
      
      &:hover {
        border-color: #ffffff7a;
      }
    }
  }
`;
