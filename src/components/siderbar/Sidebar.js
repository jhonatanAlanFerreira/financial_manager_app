import SidebarItem from "@/components/siderbar/SidebarItem";
import items from "@/components/siderbar/sidebarData.json";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
