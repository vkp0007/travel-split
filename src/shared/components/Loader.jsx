function Loader() {

  return (

    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        py-20
      "
    >

      <div
        className="
          h-14
          w-14
          rounded-full
          border-4
          border-slate-200
          border-t-emerald-600
          animate-spin
        "
      />

      <p
        className="
          mt-5
          text-slate-500
          font-medium
        "
      >
        Loading...
      </p>

    </div>

  );
}

export default Loader;