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

function Article(props) {
  const { article } = props;
  return (
    <div>
      <header style={{ fontWeight: 'bold' }}>{article.head}</header>
      <p style={{ marginTop: 0 }}>{article.body}</p>
    </div>
  );
}

function ForLoop() {
  return (
    <Div $for={Articles} $key={article => article.id}>
      {article => <Article article={article} />}
    </Div>
  );
}

export default ForLoop;
