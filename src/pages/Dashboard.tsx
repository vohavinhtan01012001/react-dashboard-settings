import { ApprovalList } from "@/components/features/dashboard/approval/ApprovalList";
import { PostDetailModal } from "@/components/features/dashboard/post/PostDetailModal";
import { PostList } from "@/components/features/dashboard/post/PostList";
import { StatsCard } from "@/components/shared/StatsCard";
import {
  pendingEvents,
  pendingSuppliers,
  reportedPosts,
  stats,
} from "@/mocks/dashboardData";
import type { PendingEvent } from "@/types/event";
import type { Post } from "@/types/post";
import type { PendingSupplier } from "@/types/supplier";
import { useState } from "react";

export default function Dashboard() {
  const [suppliers, setSuppliers] =
    useState<PendingSupplier[]>(pendingSuppliers);
  const [events, setEvents] = useState<PendingEvent[]>(pendingEvents);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const handleSupplierAction = (id: string, action: "Approve" | "Reject") => {
    setSuppliers((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEventAction = (id: string, action: "Approve" | "Reject") => {
    setEvents((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full ">
      <h1 className="text-3xl font-bold mb-10 max-md:text-xl">Admin Dashboard</h1>
      <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
        {stats.map((item, index) => {
          return (
            <StatsCard key={index} title={item.title} total={item.value} />
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
        <div className="flex flex-col gap-6 pt-6">
          <span className="font-semibold text-2xl max-md:text-xl">Pending Suppliers</span>
          <ApprovalList
            data={suppliers}
            onAction={handleSupplierAction}
            layout="list"
          />
        </div>
        <div className="flex flex-col gap-6 pt-6">
          <span className="font-semibold text-2xl max-md:text-xl">Pending Events</span>
          <ApprovalList
            data={events}
            onAction={handleEventAction}
            layout="list"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-6 pt-6">
          <span className="font-semibold text-2xl max-md:text-xl">Reported Posts</span>
          <PostList data={reportedPosts} onAction={handlePostClick} />
        </div>
      </div>
      <PostDetailModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        post={selectedPost}
      />
    </div>
  );
}
