import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

function Spinner({ loading }) {
  return (
    <ClipLoader
      color="#3B82F6"
      loading={loading}
      size={150}
      cssOverride={override}
    />
  );
}

export default Spinner;
