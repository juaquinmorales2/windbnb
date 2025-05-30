import { Triangle } from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center">
      <Triangle fill="#FF5A5F" color="#FF5A5F" size={32} />
      <span className="ml-2 text-[#FF5A5F] font-bold text-xl">windbnb</span>
    </div>
  );
}

export default Logo;