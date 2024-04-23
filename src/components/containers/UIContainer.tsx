interface props {
  children: React.ReactNode;
  title?: React.ReactNode;
}
function UIContainer(props: props) {
  const UITitle = () => {
    if (props.title) {
      return (
        <div className="bg-gray-700 rounded-lg font-semibold p-4 w-60 text-gray-200 max-w-screen-sm text-center mx-auto">
          <p>{props.title}</p>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="bg-gray-800 rounded-lg shadow m-4 w-full max-w-screen-xl">
      <div className="mx-auto p-4 text-sm text-gray-400 max-w-screen-lg">
        <UITitle />
        <div className="">{props.children}</div>
      </div>
    </div>
  );
}

export default UIContainer;
