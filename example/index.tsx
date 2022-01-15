import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffe mug - rnl'
}
const App = () => {
  return (
    <div>
      <ProductCard 
        product={product} 
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {
          ({
            reset,
            isMaxCountReached,
            maxCount,
            increaseBy,
            count,
          }) => (
            <>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons  />
            </>
          )
        }
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
