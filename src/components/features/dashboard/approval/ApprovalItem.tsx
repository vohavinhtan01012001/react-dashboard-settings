import { BaseItemCard } from "../../../shared/BaseItemCard";

type ApprovalAction = "Approve" | "Reject";

type ApprovalItemProps = {
  title: string;
  description: string;
  actionType: ApprovalAction;
  onAction?: (action: ApprovalAction) => void;
};

export const ApprovalItem = ({
  title,
  description,
  actionType,
  onAction,
}: ApprovalItemProps) => {
  return (
    <BaseItemCard
      title={title}
      description={description}
      actionLabel={actionType}
      onAction={() => onAction?.(actionType)}
    />
  );
};
