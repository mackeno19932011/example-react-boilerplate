import React from 'react';

import Board from 'components/Board';

function observe(receive) {
  setInterval(() => receive([
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 8),
  ]), 500);
}

class ChessPage extends React.PureComponent { // eslint-disable-line
  render() {
    return (
      <React.Fragment>
        {observe((knightPosition) => <Board knightPosition={knightPosition} />)}
        <span></span>
      </React.Fragment>
    );
  }
}

export default ChessPage;
