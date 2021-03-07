import React from 'react';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import { Transfer, CreditCard, Paypal } from './Icons';
import { RadioLabel } from './styles';

export default function Pagamento() {
  return (
    <Box>
      <Text tag="h2" fontSize="24px">
        Como será o pagamento?
      </Text>
      <Box>
        <input type="radio" name="test" value="transfer" id="transfer" />
        <RadioLabel.left htmlFor="transfer" style={{ display: 'inline-grid' }}>
          {Transfer}
          <div>Transferencia</div>
        </RadioLabel.left>

        <input type="radio" name="test" value="creditcard" id="creditcard" />
        <RadioLabel.center
          htmlFor="creditcard"
          style={{ display: 'inline-grid' }}
        >
          {CreditCard}
          <div>Cartão de Crédito</div>
        </RadioLabel.center>
        <input type="radio" name="test" value="paypal" id="paypal" />
        <RadioLabel.right htmlFor="paypal" style={{ display: 'inline-grid' }}>
          {Paypal}
          <div>Paypal</div>
        </RadioLabel.right>
      </Box>
    </Box>
  );
}
