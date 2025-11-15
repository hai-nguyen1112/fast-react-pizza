import { updateOrder } from '../../services/apiRestaurant';

export async function action({ params }) {
  const data = { priority: true };
  const { orderId } = params;
  await updateOrder(orderId, data);
  return null;
}
