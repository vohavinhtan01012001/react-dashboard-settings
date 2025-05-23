import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Post } from "@/types/post";


type PostDetailModalProps = {
  open: boolean;
  onClose: () => void;
  post: Post | null;
};

export const PostDetailModal = ({ open, onClose, post }: PostDetailModalProps) => {
  if (!post) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{post.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 pt-2">
          <p className="font-semibold">{post.description}</p>
          {post.subDescription && (
            <p className="text-sm text-muted-foreground">
              {post.subDescription}
            </p>
          )}
        </div>
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
