import type { Icon } from "@tabler/icons-react";

interface HomeCardProps {
  title: string;
  Icon: Icon;
  onClick?: () => void;
}

export default function HomeCard({ title, Icon, onClick }: HomeCardProps) {
  return (
    <div
      onClick={onClick}
      className="rounded-2xl  
        shadow-md hover:shadow-xl transition-all duration-300 
        p-6 flex flex-col items-center justify-center gap-4
        text-gray-600 font-semibold text-xl cursor-pointer
        border border-gray-100 hover:-translate-y-1"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-gray-500">
        {<Icon size={28} />}
      </div>
      <span>{title}</span>
    </div>
  );
}
