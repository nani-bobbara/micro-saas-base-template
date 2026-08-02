// TODO: Implement BottomTabs component
// Mobile-native bottom tab navigation

export interface BottomTabItem {
  label: string;
  href: string;
  // TODO: Add icon prop
}

export interface BottomTabsProps {
  items: BottomTabItem[];
}

export function BottomTabs({ items }: BottomTabsProps) {
  // TODO: Implement bottom tab navigation
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
      {items.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
