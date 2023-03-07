import { Button, ListItem } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch } from '../../../../../store/hooks/typedReduxHooks';
import { removeFromCart } from '../../../../../store/reducers/cartSlice/cartSlice';
import './../Basket.scss';
type Props = {
  img: string;
  title: string;
  description: string;
  price: number;
  id: number;
  type: string;
  ProductCount: number;
};

const BasketListItem: FC<Props> = ({ img, title, description, price, id, type, ProductCount }) => {
  const dispatch = useAppDispatch();
  let productPrice = price * ProductCount;
  return (
    <ListItem className="BasketItem">
      <div className="BasketItem-img_container">
        <img
          style={{ scale: type === 'iPad' ? '1.3' : '1.5' }}
          className="BasketItem-img_container-img"
          src={img}
          alt={'ffffff'}
        />
      </div>
      <div className="BasketItem_content">
        <h6 className="BasketItem_title">{title}</h6>
        <div className="BasketItem_text">{description}</div>
        <div className="BasketItem_actions">
          <div className="BasketItem_price">
            {ProductCount > 1
              ? productPrice.toLocaleString() +
                ' Kč' +
                ` ( ${price.toLocaleString()} x ${ProductCount} )`
              : productPrice.toLocaleString() + ' Kč'}
          </div>
          <Button onClick={() => dispatch(removeFromCart(id))} variant="text">
            Delete
          </Button>
        </div>
      </div>
    </ListItem>
  );
};
//
export default BasketListItem;
