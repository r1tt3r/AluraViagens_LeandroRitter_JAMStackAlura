import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const left = styled.label`
  display: inline-grid;
  padding: 10px;
  border: 1px solid #35b6ff;
  box-sizing: border-box;
  border-radius: 10px 0px 0px 10px;
  font-size: 12px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;

  ${breakpointsMedia({
    md: css`
      font-size: 14px;
      min-width: 155px;
      padding: 20px;
    `,
  })}
`;

const right = styled.label`
  display: inline-grid;
  padding: 10px;
  border: 1px solid #35b6ff;
  box-sizing: border-box;
  border-radius: 0px 10px 10px 0px;
  font-size: 12px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  ${breakpointsMedia({
    md: css`
      font-size: 14px;
      min-width: 155px;
      padding: 20px;
    `,
  })}
`;

const center = styled.label`
  display: inline-grid;
  padding: 10px;
  border: 1px solid #35b6ff;
  border-left: 0;
  border-right: 0;
  font-size: 12px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  ${breakpointsMedia({
    md: css`
      font-size: 14px;
      min-width: 155px;
      padding: 20px;
    `,
  })}
`;

export const RadioLabel = {
  left,
  right,
  center,
};
