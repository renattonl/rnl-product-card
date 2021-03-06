import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs{
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
  initialValues?: InitialValues;
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs ) => {
  const [counter, setCounter] = useState<number>( initialValues?.count ?? value )
  const isMounted = useRef(false);
  
  const increaseBy = (val : number) => {
    let newValue = Math.max(counter + val, 0)
    if(initialValues?.maxCount){
      newValue = Math.min(newValue, initialValues.maxCount)
    }
    setCounter(newValue)
    onChange && onChange({count: newValue, product});
  }

  useEffect(() => {
    if(!isMounted.current) return;
    setCounter(value);
  }, [value])

  const reset = () => {
    setCounter(initialValues?.count ?? value);
  }

  useEffect(() => {
    isMounted.current = true;
  }, [])

  return {
    counter, 
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy, 
    reset,
  }
}