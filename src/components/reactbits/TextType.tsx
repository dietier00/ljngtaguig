import { useEffect, useState } from "react";
import { text } from "stream/consumers";

interface TextTypeProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TextType({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  className = "",
}: TextTypeProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentText = texts[textIndex];

    if (!isDeleting && displayedText.length < currentText.length) {
    timeout = setTimeout(() => {
      setDisplayedText(currentText.slice(0, displayedText.length + 1));
    }, typingSpeed);
  } else if (!isDeleting && displayedText.length === currentText.length) {
    timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
  } else if (isDeleting && displayedText.length > 0) {
    timeout = setTimeout(() => {
      setDisplayedText(currentText.slice(0, displayedText.length - 1));
    }, deletingSpeed);
  } else if (isDeleting && displayedText.length === 0) {
    setIsDeleting(false);
    setTextIndex((prev) => (prev + 1) % texts.length);
  }

    else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={className}>
      {displayedText}
      <span className="ml-1 inline-block">|</span>
    </span>
  );
}