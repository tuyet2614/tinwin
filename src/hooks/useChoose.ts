import {useState} from 'react';

const useChoose = (list: object[]) => {
  const [itemIsChoose, setItemIsChoose] = useState(list[0]);

  const isChoose = (item: object) => {
    setItemIsChoose(list.filter(i => i.id === item.id)[0]);
  };

  const choose = (item: object) => {
    return itemIsChoose.id == item.id;
  };

  return {
    itemIsChoose,
    isChoose,
    choose,
  };
};

export default useChoose;