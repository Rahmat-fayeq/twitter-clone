import { DotsHorizontalIcon } from "@heroicons/react/outline";

function Trending({ result }) {
  return (
    <div className="space-y-0.5">
      <p className="text-[#6e767d] text-md font-medium  flex flex-col space-y-1 ">
        {result.tags.map((tag, index) => (
          <div
            key={index}
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 transition duration-200 ease-out flex justify-between"
          >
            <span className="tag cursor-pointer">
              <p>Trending . {tag.name}</p>
              <p className="font-medium text-white">{tag.tag}</p>
            </span>
            <span className="cursor-pointe hover:bg-white hover:bg-opacity-[0.03] px-3 py-3 rounded-full transition duration-200 ease-out">
              <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
            </span>
          </div>
        ))}
      </p>
    </div>
  );
}

export default Trending;
