export type PendingEvent = {
    id: string;
    title: string;
    description: string;
    status: "Approve" | "Reject";
};