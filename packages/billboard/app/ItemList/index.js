import * as React from 'react';
import { css } from '@emotion/core';
import Item from '../Item';

const cardList = css`
  display: flex;
  margin: 5px;
  flex-flow: row wrap;
`;

interface Data {
  data: Array<BoardItem>;
}

interface BoardItem {
  title: string;
  description: string;
  image: string;
}

const ItemList = (props: Data) => {
  const boardList = props.data.map((boardItem: BoardItem, index: any) => (
    <Item key={index} item={boardItem} />
  ));

  return (
    <React.Fragment>
      <div css={cardList}>{boardList}</div>
    </React.Fragment>
  );
};

export default ItemList;
