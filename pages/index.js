import React from 'react';
import styled from 'styled-components';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Box } from '../src/components/foundation/layout/Box';
import FormCadastro from '../src/components/patterns/FormCadastro';

const BoxHome = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main.color};
`;

export default function Home() {
  return (
    <BoxHome>
      <Grid.Container
        backgroundColor="white"
        boxShadow="0px 0px 20px 5px rgba(0, 0, 0, 0.3)"
      >
        <FormCadastro />
      </Grid.Container>
    </BoxHome>
  );
}
