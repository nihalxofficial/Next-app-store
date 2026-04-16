
const Skeleton = () => {
    return (
        <div className="flex flex-col gap-4 w-full animate-pulse">
            <div className="h-32 w-full bg-gray-200 rounded-lg"></div>
            <div className="h-4 w-28 bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
        </div>
    );
};

export default Skeleton;