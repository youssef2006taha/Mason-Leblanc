import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

function ShowImages({ index, setIndex, arr, onClose }) {
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % arr.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + arr.length) % arr.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/10 backdrop-blur-md transition-all"
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
      >
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
          <p
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-text-muted font-mono tracking-widest"
          >
            {index + 1} / {arr.length}
          </p>
          <button
            onClick={onClose}
            className="text-primary hover:text-primary-hover cursor-pointer transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="relative w-[65vw] sm:max-w-[420px] sm:max-h-[550px] overflow-hidden">
          <img
            onClick={(e) => e.stopPropagation()}
            src={arr[index].img}
            alt={arr[index].category}
            className="rounded  w-full h-full object-cover select-none"
          />
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute w-full top-1/2 left-0 -translate-y-1/2 flex justify-between items-center px-6 pointer-events-none"
        >
          <button
            onClick={handlePrev}
            className="pointer-events-auto text-primary hover:text-primary-hover cursor-pointer p-2 transition-colors"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto text-primary hover:text-primary-hover cursor-pointer p-2 transition-colors"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowImages;