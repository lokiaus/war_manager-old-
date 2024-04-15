interface props {
    children: React.ReactNode;
    title?: string;
}
function UIContainer(props: props) {
    const UITitle = () => {
        if (props.title) {
            return (
                <div className="bg-gray-700 rounded-lg font-semibold p-4 text-gray-200">
                    {props.title}
                </div>
            );
        } else {
            return null;
        }
    };
    return (
        <div className="bg-gray-800 rounded-lg shadow m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 text-sm text-gray-400">
                <UITitle />
                <div className="">{props.children}</div>
            </div>
        </div>
    );
}

export default UIContainer;
