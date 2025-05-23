import type { PendingSupplier } from "@/types/supplier";

export const stats = [
  { title: "Submissions", value: 8 },
  { title: "Total Users", value: 150 },
  { title: "Active Posts", value: 24 },
  { title: "Reported Content", value: 2 },
];

export const pendingSuppliers: PendingSupplier[] = [
  {
    id: "1",
    title: "Supplier Name 1",
    description: "supplier",
    status: "Approve",
  },
  {
    id: "2",
    title: "Supplier Name 2",
    description: "supplier",
    status: "Approve",
  },
];

export const pendingEvents: PendingSupplier[] = [
  {
    id: "1",
    title: "Event Name 1",
    description: "Event",
    status: "Approve",
  },
  {
    id: "2",
    title: "Event Name 2",
    description: "Event",
    status: "Reject",
  },
];

export const reportedPosts = [
  {
    id: "1",
    title: "Post Title 1",
    description: "Description of post 1",
    subDescription: "Additional details about post 1",
    status: "Reported",
  },
  {
    id: "2",
    title: "Post Title 2",
    description: "Description of post 2",
    subDescription: "Additional details about post 2",
    status: "Reported",
  },
  {
    id: "3",
    title: "Post Title 3",
    description: "Description of post 3",
    subDescription: "Additional details about post 3",
    status: "Reported",
  },
];
