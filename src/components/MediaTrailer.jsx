function MediaTrailer({ trailerKey }) {
  return (
    <div className="flex justify-center items-center py-10 px-3 bg-white dark:bg-black">
      <iframe
        className="w-full rounded-lg md:w-2/3 md:px-0 aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MediaTrailer;
