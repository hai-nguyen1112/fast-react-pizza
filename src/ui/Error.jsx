import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  return (
    <div className="m-8">
      <h1>Something went wrong 😢</h1>
      <p className="mb-2 mt-2 w-fit rounded-md bg-red-100 p-2 text-xs text-red-700">
        {error.data || error.message}
      </p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
