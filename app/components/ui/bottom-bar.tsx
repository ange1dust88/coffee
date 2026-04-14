"use client";
function BottomBar() {
  return (
    <div className="bg-header-scroll px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-primary h-10 text-sm ">
        <span>Focusbrew © 2026</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:opacity-80 transition cursor-pointer"
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default BottomBar;
