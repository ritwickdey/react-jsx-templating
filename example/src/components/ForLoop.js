import React from 'react';

import { Div } from 'react-jsx-templating';

const Articles = [
  {
    id: 1,
    head: 'Article 1',
    body: 'This is body of Article 1'
  },
  {
    id: 2,
    head: 'Article 2',
    body: 'This is body of Article 2'
  },
  {
    id: 3,
    head: 'Article 3',
    body: 'This is body of Article 3'
  }
];

function ForLoop() {
  return (
    <Div $for={Articles} $key={article => article.id}>
      {article => (
        <div>
          <header>{article.head}</header>
          <p>{article.body}</p>
        </div>
      )}
    </Div>
  );
}

export default ForLoop;
