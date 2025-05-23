import { ApprovalItem } from "./ApprovalItem";

type Approval = {
  id: string;
  title: string;
  description: string;
  status: "Approve" | "Reject";
};

type ApprovalListProps = {
  data: Approval[];
  onAction?: (id: string, action: "Approve" | "Reject") => void;
  layout?: "grid" | "list";
};

export const ApprovalList = ({
  data,
  onAction,
  layout = "grid",
}: ApprovalListProps) => {
  if (data.length === 0) return <p>No approvals pending.</p>;

  const containerClass =
    layout === "grid" ? "grid grid-cols-2 gap-10" : "flex flex-col gap-6";

  return (
    <div className={containerClass}>
      {data.map((item) => (
        <ApprovalItem
          key={item.id}
          title={item.title}
          description={item.description}
          actionType={item.status}
          onAction={(action) => onAction?.(item.id, action)}
        />
      ))}
    </div>
  );
};
