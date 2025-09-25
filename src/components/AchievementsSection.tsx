import { Brain, MessageSquare, Globe, Lightbulb, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function AchievementsSection() {
  const [activeCard, setActiveCard] = useState(0);

  const achievements = [
    {
      icon: Brain,
      title: "Tư Duy Logic Sắc Bén",
      description: "Yêu thích Toán học, có khả năng tự suy luận và giải quyết vấn đề một cách độc lập.",
      details: [
        "Hiểu bản chất của số học thay vì học thuộc công thức",
        "Tự tin giải các bài toán phức tạp",
        "Phát triển tư duy phân tích và logic"
      ],
      bgColor: "bg-atlantic-forest",
      borderColor: "border-atlantic-forest",
      textColor: "text-atlantic-forest",
      stat: "95%",
      statLabel: "Cải thiện tư duy Toán"
    },
    {
      icon: MessageSquare,
      title: "Ngôn Ngữ Linh Hoạt",
      description: "Diễn đạt Tiếng Việt trôi chảy, giàu hình ảnh. Tự tin viết nên những câu chuyện của riêng mình.",
      details: [
        "Vốn từ vựng phong phú và đa dạng",
        "Kỹ năng viết sáng tạo và logic",
        "Tự tin thuyết trình và tranh luận"
      ],
      bgColor: "bg-atlantic-deep-night",
      borderColor: "border-atlantic-deep-night",
      textColor: "text-atlantic-deep-night",
      stat: "90%",
      statLabel: "Tự tin diễn đạt"
    },
    {
      icon: Globe,
      title: "Phản Xạ Anh Ngữ Tự Nhiên",
      description: "Giao tiếp Tiếng Anh tự tin, không e ngại, sẵn sàng cho môi trường học tập quốc tế.",
      details: [
        "Phản xạ giao tiếp không cần dịch thuật",
        "Phát âm chuẩn và tự nhiên",
        "Tư duy bằng Tiếng Anh trong các tình huống"
      ],
      bgColor: "bg-atlantic-forest",
      borderColor: "border-atlantic-forest",
      textColor: "text-atlantic-forest",
      stat: "88%",
      statLabel: "Phản xạ tự nhiên"
    },
    {
      icon: Lightbulb,
      title: "Kỹ Năng Vàng Thế Kỷ 21",
      description: "Hình thành sự tập trung, tính chủ động, kỹ năng hợp tác và tư duy sáng tạo.",
      details: [
        "Khả năng tập trung cao và bền bỉ",
        "Tính chủ động trong học tập và sống",
        "Kỹ năng hợp tác và lãnh đạo nhóm"
      ],
      bgColor: "bg-atlantic-deep-night",
      borderColor: "border-atlantic-deep-night",
      textColor: "text-atlantic-deep-night",
      stat: "92%",
      statLabel: "Phát triển kỹ năng mềm"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-atlantic-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-dela-gothic mb-6">
            Sự <span className="text-atlantic-deep-night">"Lột Xác"</span> Toàn Diện
            <br />
            Của Con Cùng <span className="text-atlantic-forest">Atlantic Group</span>
          </h2>
          <p className="text-lg md:text-xl font-nunito text-atlantic-charcoal max-w-3xl mx-auto leading-relaxed">
            Những thay đổi tích cực mà phụ huynh có thể nhìn thấy rõ ràng sau khi con học tại Atlantic Group
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                activeCard === index 
                  ? `bg-white shadow-2xl scale-105 border-2 ${achievement.borderColor}` 
                  : 'bg-white shadow-lg hover:shadow-xl border border-atlantic-forest/10'
              }`}
              onClick={() => setActiveCard(index)}
              onMouseEnter={() => setActiveCard(index)}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 ${achievement.bgColor}/10 rounded-3xl transform ${activeCard === index ? 'scale-105' : 'scale-100'} transition-transform duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${achievement.bgColor} text-white shadow-lg`}>
                    <achievement.icon className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl md:text-4xl font-dela-gothic ${achievement.textColor}`}>
                      {achievement.stat}
                    </div>
                    <p className="text-sm font-nunito text-atlantic-charcoal">{achievement.statLabel}</p>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-xl md:text-2xl font-nunito font-extrabold text-atlantic-deep-night">
                    {achievement.title}
                  </h3>
                  <p className="font-nunito text-atlantic-charcoal leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Details */}
                <div className={`space-y-3 transition-all duration-500 ${
                  activeCard === index ? 'opacity-100 max-h-96' : 'opacity-70 max-h-32 overflow-hidden'
                }`}>
                  {achievement.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full ${achievement.bgColor} mt-2 flex-shrink-0`}></div>
                      <span className="font-nunito text-atlantic-charcoal text-sm leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Expand Indicator */}
                <div className={`flex items-center justify-end mt-4 text-sm transition-all duration-300 ${
                  activeCard === index ? achievement.textColor : 'text-atlantic-charcoal/60'
                }`}>
                  <span className="mr-2 font-nunito">
                    {activeCard === index ? 'Đang xem chi tiết' : 'Nhấn để xem chi tiết'}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                    activeCard === index ? 'transform rotate-90' : ''
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-atlantic-cream/50 rounded-3xl p-8 md:p-12 border border-atlantic-forest/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-nunito font-extrabold text-atlantic-deep-night mb-4">
              Câu Chuyện Thành Công Thực Tế
            </h3>
            <p className="font-nunito text-atlantic-charcoal max-w-2xl mx-auto">
              Những thay đổi tích cực mà các bậc phụ huynh chia sẻ về con em mình
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-4xl md:text-5xl">📈</div>
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-nunito font-bold text-atlantic-forest">Bé Minh An</p>
                <p className="text-sm font-nunito text-atlantic-charcoal">7 tuổi</p>
                <p className="font-nunito text-atlantic-charcoal text-sm">
                  "Từ sợ Toán thành yêu thích giải những bài toán khó trong 3 tháng"
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-4xl md:text-5xl">✨</div>
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-nunito font-bold text-atlantic-deep-night">Bé Hải Anh</p>
                <p className="text-sm font-nunito text-atlantic-charcoal">8 tuổi</p>
                <p className="font-nunito text-atlantic-charcoal text-sm">
                  "Viết truyện ngắn 500 từ và tự tin thuyết trình trước lớp"
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-4xl md:text-5xl">🌟</div>
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-nunito font-bold text-atlantic-forest">Bé Phương Linh</p>
                <p className="text-sm font-nunito text-atlantic-charcoal">6 tuổi</p>
                <p className="font-nunito text-atlantic-charcoal text-sm">
                  "Trò chuyện tự nhiên bằng Tiếng Anh với du khách nước ngoài"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}