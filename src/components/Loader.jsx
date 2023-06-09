import { RotatingLines } from "react-loader-spinner";

function Loader({ visibility }) {
  return (
    <div>
      <RotatingLines visible={visibility} />
    </div>
  );
}
export default Loader;
