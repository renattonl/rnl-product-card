# Mi Paquete de NPM

## Ejemplo

```
import {ProductCard} from 'rnl-product-card'

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
```