"use client";

import { useEffect, useState } from "react";

const words = ["Developer", "Engineer", "UX - UI"];
const typeSpeed = 90;
const deleteSpeed = 55;
const pauseTime = 1100;

export function TypewriterTitle() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isComplete = letterCount === currentWord.length;
    const isEmpty = letterCount === 0;
    const delay = isComplete && !isDeleting ? pauseTime : isDeleting ? deleteSpeed : typeSpeed;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setLetterCount((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterCount, wordIndex]);

  return (
    <span className="inline-flex w-[9.5ch] items-center text-left">
      {words[wordIndex].slice(0, letterCount)}
      <span className="ml-2 h-[0.78em] w-[0.08em] animate-pulse bg-[#171b1d]" aria-hidden="true" />
    </span>
  );
}
