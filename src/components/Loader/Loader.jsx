import { InfinitySpin } from 'react-loader-spinner';
import { Spiner } from './Loader.styled';

export default function Loader() {
  return (
    <Spiner>
      <InfinitySpin width="200" color="#4fa94d" />
    </Spiner>
  );
}
