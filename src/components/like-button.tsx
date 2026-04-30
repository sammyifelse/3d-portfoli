"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial like count and check if user has already liked
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch("/api/likes");
        const data = await response.json();
        setLikeCount(data.count || 0);
      } catch (error) {
        console.error("Failed to fetch likes:", error);
      }

      // Check if this device has already liked
      const hasLikedBefore = localStorage.getItem("portfolio-liked") === "true";
      setHasLiked(hasLikedBefore);
      setIsLoading(false);
    };

    fetchLikes();
  }, []);

  const handleLike = async () => {
    if (hasLiked) return; // Already liked, prevent double-like

    try {
      const response = await fetch("/api/likes", {
        method: "POST",
      });
      const data = await response.json();
      setLikeCount(data.count);
      setHasLiked(true);
      localStorage.setItem("portfolio-liked", "true");
    } catch (error) {
      console.error("Failed to like:", error);
    }
  };

  if (isLoading) return null;

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <motion.button
          onClick={handleLike}
          disabled={hasLiked}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
            hasLiked
              ? "cursor-default"
              : "cursor-pointer hover:bg-white/5 dark:hover:bg-white/10"
          }`}
          whileHover={{ scale: hasLiked ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Like this portfolio - ${likeCount} likes`}
        >
          <Heart
            size={20}
            className={`transition-all ${
              hasLiked
                ? "fill-red-500 stroke-red-500 text-red-500"
                : "stroke-current fill-none text-white dark:text-zinc-400"
            }`}
          />
          <span className="text-sm font-medium text-white dark:text-zinc-300">
            {likeCount}
          </span>
        </motion.button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="bg-zinc-900 border-zinc-700">
        <p className="text-sm">
          {hasLiked ? "You already like this portfolio! 💗" : "Like the portfolio !! Drop a like"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
