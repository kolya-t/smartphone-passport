import React from 'react';
import {Image, List} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

import smartphones from './smartphones'

export default () => (
  <List
    divided
    selection
    size="massive"
    verticalAlign='middle'
  >
    {smartphones.map(phone =>
      <List.Item
        as={Link}
        to={`/${phone.id}`}
        key={phone.id}
      >
        <Image
          size="mini"
          src={phone.image}
        />
        <List.Content>
          {phone.diagonal}" {phone.company} {phone.model} {phone.memory} ГБ {phone.color}
        </List.Content>
      </List.Item>
    )}
  </List>
);