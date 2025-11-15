import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';
import pizza1 from '../../images/pizza-001.jpg';
import pizza2 from '../../images/pizza-002.jpg';
import pizza3 from '../../images/pizza-003.jpg';
import pizza4 from '../../images/pizza-004.jpg';
import pizza5 from '../../images/pizza-005.jpg';
import pizza6 from '../../images/pizza-006.jpg';

function Menu() {
  const menu = useLoaderData();
  let menuCopy = JSON.parse(JSON.stringify(menu));
  for (let i = 0; i < menuCopy.length; i++) {
    if (i === 0 || i === 6 || i === 12) menuCopy[i].pizzaImage = pizza1;
    if (i === 1 || i === 7 || i === 13) menuCopy[i].pizzaImage = pizza2;
    if (i === 2 || i === 8 || i === 14) menuCopy[i].pizzaImage = pizza3;
    if (i === 3 || i === 9 || i === 15) menuCopy[i].pizzaImage = pizza4;
    if (i === 4 || i === 10 || i === 16) menuCopy[i].pizzaImage = pizza5;
    if (i === 5 || i === 11 || i === 17) menuCopy[i].pizzaImage = pizza6;
  }

  return (
    <ul className="mb-20 divide-y divide-stone-200 px-2">
      {menuCopy.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
