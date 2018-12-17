import React from 'react';
import {Card, Table, Image, Grid} from 'semantic-ui-react'

import smartphones from './smartphones'

export default (props) => {
  const id = Number(props.match.params.id);

  if (smartphones.every(phone => phone.id !== id)) {
    return <p>Smartphone not found</p>;
  }

  const phone = smartphones.filter(phone => phone.id === id)[0];
  return (
    <Card
      centered
      fluid
    >
      <Card.Content>
        <Card.Header>
          {phone.diagonal}" {phone.company} {phone.model} {phone.memory} ГБ {phone.color}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Grid>
          <Grid.Column width={4}>
            <Image
              size='small'
              src={phone.image}
              wrapped
            />
          </Grid.Column>
          <Grid.Column width={12}>
            {phone.description}
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Card.Header>Характеристики</Card.Header>
        <Card.Description>
          <Table celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={4}>Компания</Table.Cell>
                <Table.Cell>{phone.company}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Модель</Table.Cell>
                <Table.Cell>{phone.model}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Диагональ экрана</Table.Cell>
                <Table.Cell>{phone.diagonal}"</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Встроенная память</Table.Cell>
                <Table.Cell>{phone.memory} ГБ</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Цвет</Table.Cell>
                <Table.Cell>{phone.color}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Дата выпуска</Table.Cell>
                <Table.Cell>{phone.common.year}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Поддержка 4G</Table.Cell>
                <Table.Cell>{phone.mobileConnection.lteSupport ? 'Да' : 'Нет'}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};