export type PendingSupplier = {
    id: string;
    title: string;
    description: string;
    status: "Approve" | "Reject";
};