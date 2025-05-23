import type { Post } from "@/types/post";
import { PostItem } from "./PostItem";

type PostListProps = {
  data: Post[];
  onAction?: (post: Post) => void;
};

export const PostList = ({ data, onAction }: PostListProps) => {
  if (data.length === 0) return <p>No posts available.</p>;

  return (
    <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
      {data.map((item) => (
        <PostItem
          key={item.id}
          title={item.title}
          description={item.description}
          subDescription={item.subDescription}
          onAction={() => onAction?.(item)}
        />
      ))}
    </div>
  );
};
