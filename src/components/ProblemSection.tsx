import { AlertTriangle, Brain, MessageCircle, BookOpen, Frown } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "Áp lực với những con số",
    description:
      "Con học Toán như một cỗ máy, chỉ biết làm theo công thức mà không hiểu bản chất, dần dần thấy sợ hãi môn học này.",
    accent: {
      badge: "bg-atlantic-forest/10 text-atlantic-forest",
      border: "border-atlantic-forest/30",
      shadow: "shadow-[0_20px_45px_rgba(25,104,68,0.12)]"
    }
  },
  {
    icon: MessageCircle,
    title: "Thiếu tự tin diễn đạt",
    description:
      "Vốn từ Tiếng Việt của con nghèo nàn, ngại phát biểu trước đám đông, viết văn lủng củng, thiếu cảm xúc.",
    accent: {
      badge: "bg-atlantic-deep-night/10 text-atlantic-deep-night",
      border: "border-atlantic-deep-night/30",
      shadow: "shadow-[0_20px_45px_rgba(10,44,78,0.12)]"
    }
  },
  {
    icon: BookOpen,
    title: "Học Tiếng Anh \"chay\"",
    description:
      "Con biết nhiều từ vựng, ngữ pháp nhưng lại \"đứng hình\" khi gặp người nước ngoài, không thể hình thành phản xạ giao tiếp tự nhiên.",
    accent: {
      badge: "bg-atlantic-yellow/20 text-atlantic-deep-night",
      border: "border-atlantic-yellow/30",
      shadow: "shadow-[0_20px_45px_rgba(251,243,162,0.25)]"
    }
  },
  {
    icon: Frown,
    title: "Mất đi niềm vui học tập",
    description:
      "Mỗi ngày đến trường là một nhiệm vụ nặng nề, con dần mất đi sự tò mò, chủ động và sáng tạo vốn có.",
    accent: {
      badge: "bg-atlantic-coral/20 text-atlantic-deep-night",
      border: "border-atlantic-coral/30",
      shadow: "shadow-[0_20px_45px_rgba(249,195,177,0.25)]"
    }
  }
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-atlantic-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section Header */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-atlantic-coral/30 border border-atlantic-coral/40">
              <AlertTriangle className="w-8 h-8 text-atlantic-deep-night" />
            </div>
            <h2 className="text-3xl md:text-4xl font-dela-gothic text-atlantic-forest leading-tight">
              Ba Mẹ Trăn Trở
              <span className="block text-atlantic-deep-night">Vì Con Điều Gì?</span>
            </h2>
            <p className="text-lg font-nunito text-atlantic-charcoal leading-relaxed">
              Những nỗi lo âu thầm kín mà mọi phụ huynh đều từng trải qua trong hành trình đồng hành cùng con trưởng thành.
            </p>
            <div className="rounded-3xl border border-atlantic-forest/20 bg-atlantic-cream/60 p-6">
              <p className="text-sm font-nunito text-atlantic-deep-night font-semibold uppercase tracking-wide">
                Thống kê nội bộ Atlantic Group
              </p>
              <p className="mt-3 text-sm font-nunito text-atlantic-charcoal/80">
                78% phụ huynh tìm đến chúng tôi khi con gặp ít nhất hai trong bốn vấn đề bên cạnh chương trình chính khóa.
              </p>
            </div>
          </div>

          {/* Problems Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className={`group relative h-full rounded-3xl border ${problem.accent.border} bg-white p-8 transition-all duration-300 ${problem.accent.shadow} hover:-translate-y-1 hover:shadow-2xl`}
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${problem.accent.badge}`}>
                  <problem.icon className="h-7 w-7" />
                </div>
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl md:text-2xl font-nunito font-extrabold text-atlantic-deep-night group-hover:text-atlantic-forest transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-sm md:text-base font-nunito text-atlantic-charcoal leading-relaxed">
                    {problem.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-2 text-xs font-nunito uppercase tracking-wide text-atlantic-deep-night/60">
                  <span className="h-1 w-8 rounded-full bg-atlantic-forest/40" />
                  <span>Phụ huynh chia sẻ</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-atlantic-forest/20 bg-white/70 px-6 py-8 text-center shadow-inner">
          <p className="text-base font-nunito text-atlantic-charcoal md:text-lg">
            <span className="font-dela-gothic text-atlantic-forest">Atlantic Group</span> thấu hiểu và sở hữu lộ trình cá nhân hóa để giúp con vượt qua từng thử thách này.
          </p>
        </div>
      </div>
    </section>
  );
}
