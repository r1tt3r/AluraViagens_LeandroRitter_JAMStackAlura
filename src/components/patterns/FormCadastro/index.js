import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../commons/Button';
import { TextField } from '../../forms/TextField';
import { DateField } from '../../forms/DateField';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { cpfMask, telMask, dateMask } from '../../forms/validations/masks';
import Pagamento from '../../commons/Pagamento';
import CountryField from '../../forms/CountryField';
import { ErrorAlert } from './styles';

export default function FormCadastro() {
  const { register, handleSubmit, errors } = useForm();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const [formData, setFormData] = useState({
    local_origem: '',
    local_chegada: '',
    nome: '',
    sobrenome: '',
    pais: '',
    nascimento: '',
    cpf: '',
    email: '',
    telefone: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  }

  const onSubmit = (data) => console.log(data);

  return (
    <Box backgroundColor="white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text
          tag="h1"
          fontFamily="'Pattaya', sans-serif"
          color="#0094E8"
          fontSize={{ md: '72px', xs: '36px' }}
          paddingTop={{ xs: '20px' }}
          margin="0"
        >
          Alura Viagens
        </Text>
        <Text tag="p" fontSize="24px">
          Quando será a viagem?
        </Text>

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 3 }}>
            <DateField
              label="Data de saída"
              name="date_checkin"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 3 }}>
            <DateField
              label="Data de retorno"
              name="date_checkout"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 4 }}>
            <TextField
              label="Local de origem"
              name="local_origem"
              value={formData.local_origem}
              onChange={handleChange}
              aria-invalid={errors.name ? 'true' : 'false'}
              ref={register({ required: true })}
            />
            {errors.local_origem && errors.local_origem.type === 'required' && (
              <ErrorAlert>Esse campo é obrigatório</ErrorAlert>
            )}
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 4 }}>
            <TextField
              label="Local de chegada"
              name="local_chegada"
              value={formData.local_chegada}
              onChange={handleChange}
              aria-invalid={errors.name ? 'true' : 'false'}
              ref={register({ required: true })}
            />
            {errors.local_chegada &&
              errors.local_chegada.type === 'required' && (
                <ErrorAlert>Esse campo é obrigatório</ErrorAlert>
              )}
          </Grid.Col>
        </Grid.Row>

        <Pagamento />

        <Text tag="p" fontSize="24px">
          Quem vai viajar?
        </Text>
        <TextField
          label="Nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          ref={register({ required: true })}
        />
        {errors.nome && errors.nome.type === 'required' && (
          <ErrorAlert>Esse campo é obrigatório</ErrorAlert>
        )}

        <TextField
          label="Sobrenome"
          name="sobrenome"
          value={formData.sobrenome}
          onChange={handleChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          ref={register({ required: true })}
        />
        {errors.sobrenome && errors.sobrenome.type === 'required' && (
          <ErrorAlert>Esse campo é obrigatório</ErrorAlert>
        )}

        <Grid.Row>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <CountryField
              label="País"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
            />
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <TextField
              label="Data de nascimento"
              name="nascimento"
              value={formData.nascimento}
              onChange={(ev) => {
                setFormData({
                  ...formData,
                  nascimento: dateMask(ev.target.value),
                });
              }}
              maxLength="10"
            />
          </Grid.Col>
        </Grid.Row>
        <TextField
          label="CPF"
          name="cpf"
          value={formData.cpf}
          onChange={(ev) => {
            setFormData({
              ...formData,
              cpf: cpfMask(ev.target.value),
            });
          }}
        />

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="text"
          ref={register({
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && errors.email.type === 'required' && (
          <ErrorAlert>Esse campo é obrigatório</ErrorAlert>
        )}

        <TextField
          label="Telefone"
          name="telefone"
          value={formData.telefone}
          onChange={(ev) => {
            setFormData({
              ...formData,
              telefone: telMask(ev.target.value),
            });
          }}
          maxLength="15"
        />

        <Button
          variant="primary.main"
          type="submit"
          width={{ xs: '100%', md: 'initial' }}
          margin="20px 0"
        >
          Comprar
        </Button>
      </form>
    </Box>
  );
}
