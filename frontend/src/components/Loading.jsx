import loading from "../assets/image/loading.gif";

const Loading = () => {
  return (
    <tbody>
      <tr>
        <td colSpan="5" className="text-center">
          <img src={loading} alt="loading" />;
        </td>
      </tr>
    </tbody>
  );
};

export default Loading;
