import { AlertTriangle, Brain, MessageCircle, BookOpen, Frown } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: Brain,
      title: "Áp lực với những con số",
      description: "Con học Toán như một cỗ máy, chỉ biết làm theo công thức mà không hiểu bản chất, dần dần thấy sợ hãi môn học này.",
      color: "text-red-500"
    },
    {
      icon: MessageCircle,
      title: "Thiếu tự tin diễn đạt",
      description: "Vốn từ Tiếng Việt của con nghèo nàn, ngại phát biểu trước đám đông, viết văn lủng củng, thiếu cảm xúc.",
      color: "text-orange-500"
    },
    {
      icon: BookOpen,
      title: "Học Tiếng Anh \"chay\"",
      description: "Con biết nhiều từ vựng, ngữ pháp nhưng lại \"đứng hình\" khi gặp người nước ngoài, không thể hình thành phản xạ giao tiếp tự nhiên.",
      color: "text-yellow-500"
    },
    {
      icon: Frown,
      title: "Mất đi niềm vui học tập",
      description: "Mỗi ngày đến trường là một nhiệm vụ nặng nề, con dần mất đi sự tò mò, chủ động và sáng tạo vốn có.",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-atlantic-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-dela-gothic text-atlantic-forest mb-6">
            Ba Mẹ Trăn Trở Vì Con...?
          </h2>
          <p className="text-lg md:text-xl font-nunito text-atlantic-charcoal max-w-3xl mx-auto">
            Những nỗi lo âu thầm kín mà mọi phụ huynh đều từng trải qua trong hành trình nuôi dạy con
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-atlantic-forest/10 hover:border-atlantic-forest/20"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${problem.color} bg-atlantic-cream group-hover:bg-atlantic-cream/70 transition-colors duration-300`}>
                <problem.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-nunito font-extrabold text-atlantic-deep-night group-hover:text-atlantic-forest transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="font-nunito text-atlantic-charcoal leading-relaxed group-hover:text-atlantic-deep-night transition-colors duration-300">
                  {problem.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-atlantic-cream/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-atlantic-charcoal mb-4">
            <div className="w-8 h-px bg-atlantic-forest/30"></div>
            <span className="text-sm font-nunito">Bạn có đang trải qua những khó khăn này?</span>
            <div className="w-8 h-px bg-atlantic-forest/30"></div>
          </div>
          <p className="text-lg font-nunito text-atlantic-charcoal max-w-2xl mx-auto">
            <strong className="text-atlantic-forest font-dela-gothic">Atlantic Group</strong> hiểu rõ những thách thức này và có giải pháp toàn diện để giúp con bạn vượt qua.
          </p>
        </div>
      </div>
    </section>
  );
}