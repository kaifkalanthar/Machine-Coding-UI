"use client";

import Autocomplete, { OptionsType } from "@/components/Autocomplete";
import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const getPosts = (searchValue: string) => `${BASE_URL}/posts?q=${searchValue}`;

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const useDebounce = (cb: (...args: any[]) => void, delay: number = 1000) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export default function AutoCompletePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState<OptionsType[]>([]);
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");

  const debouncedValue = useDebounce((value) => {
    setDebouncedSearchValue(value);
  }, 800);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(getPosts(debouncedSearchValue));
      const posts: PostType[] = await response.json();

      setOptions(
        posts.map((post) => ({
          label: post.title,
          value: post.id.toString(),
        }))
      );
    };

    fetchPosts();
  }, [debouncedSearchValue]);
  return (
    <div className="w-full p-4">
      <Autocomplete
        options={options}
        value={searchQuery}
        handleOnInputChange={(value) => {
          setSearchQuery(value);
          debouncedValue(value);
        }}
      />
    </div>
  );
}
