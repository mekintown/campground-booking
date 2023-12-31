"use client";
import InteractiveCard from "./InteractiveCard";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

export default function CampgroundCard({
  campName,
  imgSrc,
  campId,
  isAdmin,
  handleDelete,
}: {
  campName: string;
  imgSrc: string;
  campId: string;
  isAdmin: boolean;
  handleDelete: Function;
}) {
  return (
    <InteractiveCard>
      <div className="">
        <div className="w-full h-[200px] relative">
          <Image
            src={imgSrc}
            alt="Picture"
            fill={true}
            className="object-cover rounded-t-lg"
          />
        </div>
        {isAdmin ? (
          <div className="absolute right-0 flex flex-row">
            <Link
              href={{
                pathname: `/campgrounds/create`,
                query: {
                  campgroundId: campId,
                },
              }}
            >
              <EditIcon className="text-gray-500 mr-2 text-xl transition-transform duration-300 transform hover:animate-bounce" />
            </Link>
            <div
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleDelete(campId);
              }}
            >
              <DeleteIcon className="text-red-500 text-xl transition-transform duration-300 transform hover:animate-shake" />
            </div>
          </div>
        ) : null}
        <div className="h-[80px] w-full flex justify-center items-center">
          <p className="text-xl dark:text-white">{campName}</p>
        </div>
      </div>
    </InteractiveCard>
  );
}
