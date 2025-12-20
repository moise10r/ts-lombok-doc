interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#c41e3a] transition-colors bg-white dark:bg-gray-900">
      <div className="w-12 h-12 bg-[#c41e3a]/10 rounded-lg flex items-center justify-center mb-4 text-[#c41e3a]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
