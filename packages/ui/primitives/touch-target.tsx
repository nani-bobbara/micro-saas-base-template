// TODO: Implement TouchTarget primitive
// Ensures minimum 44x44px touch targets for mobile accessibility

export interface TouchTargetProps {
  children: React.ReactNode;
  className?: string;
}

export function TouchTarget({ children, className }: TouchTargetProps) {
  // TODO: Implement touch target with minimum size constraints
  return (
    <div
      className={className}
      style={{ minWidth: 44, minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </div>
  );
}
