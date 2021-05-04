import { forwardRef } from "react"

import Image from "next/image"

import { ThumbUpIcon } from "@heroicons/react/outline"

const imgBaseUrl =
  process.env.RESOURCE_BASE_URL || "https://image.tmdb.org/t/p/original/"

const ShowThumbnail = forwardRef(({ show }, ref) => {
  const imgUrl =
    `${imgBaseUrl}${show.backdrop_path || show.poster_path}` ||
    `${imgBaseUrl}${show.poster_path}`

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image src={imgUrl} layout="responsive" height={1080} width={1920} />

      <div className="p-2">
        <p className="truncate max-w-md">{show.overview}</p>

        <h2 className="mt-1 text-2xl text-white transition-all ease-in-out duration-100 group-hover:font-bold">
          {show.title || show.original_name}
        </h2>

        <p className="mb-1 flex items-center opacity-0 group-hover:opacity-100">
          {show.media_type && `${show.media_type}`}
          {" • "}
          {show.release_date || show.first_air_date}
          {" • "}
          <ThumbUpIcon className="h-5 mx-2" /> {show.vote_count}
        </p>
      </div>
    </div>
  )
})

export default ShowThumbnail
