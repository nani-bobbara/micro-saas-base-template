// TODO: Implement Button component using shadcn/ui pattern
// Install shadcn/ui and run: npx shadcn-ui@latest add button

// Placeholder until shadcn/ui is configured
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  // TODO: Add asChild prop for Radix UI composition
}

export function Button({ children, ...props }: ButtonProps) {
  // TODO: Replace with shadcn/ui Button implementation
  return <button {...props}>{children}</button>;
}
