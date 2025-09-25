import { Search, MapPin, Compass, Users } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "THẤU HIỂU TIỀM NĂNG",
      description: "Chuyên gia giáo dục của chúng tôi sẽ trò chuyện và tương tác 1:1 để nắm bắt điểm mạnh, phong cách học tập và tiềm năng riêng của trẻ.",
      bgColor: "bg-atlantic-forest",
      borderColor: "border-atlantic-forest",
      highlights: ["Đánh giá tâm lý học", "Phân tích phong cách học", "Khám phá sở thích"]
    },
    {
      step: "02", 
      icon: MapPin,
      title: "THIẾT KẾ LỘ TRÌNH RIÊNG",
      description: "Xây dựng một \"tấm bản đồ học tập\" được may đo riêng, kết hợp cân bằng giữa 3 môn học để tối ưu hóa sự phát triển của con.",
      bgColor: "bg-atlantic-deep-night",
      borderColor: "border-atlantic-deep-night",
      highlights: ["Lộ trình cá nhân hóa", "Mục tiêu rõ ràng", "Phương pháp phù hợp"]
    },
    {
      step: "03",
      icon: Compass,
      title: "TRẢI NGHIỆM & KHÁM PHÁ", 
      description: "Con tham gia vào các lớp học trải nghiệm, tự do khám phá kiến thức dưới sự hướng dẫn, gợi mở của giáo viên.",
      bgColor: "bg-atlantic-forest",
      borderColor: "border-atlantic-forest",
      highlights: ["Học qua hoạt động", "Khám phá tự do", "Hướng dẫn chuyên nghiệp"]
    },
    {
      step: "04",
      icon: Users,
      title: "ĐỒNG HÀNH & BÁO CÁO",
      description: "Phụ huynh nhận báo cáo tiến bộ chi tiết định kỳ và được các chuyên gia tư vấn cách thức đồng hành hiệu quả cùng con tại nhà.",
      bgColor: "bg-atlantic-deep-night",
      borderColor: "border-atlantic-deep-night",
      highlights: ["Báo cáo chi tiết", "Tư vấn phụ huynh", "Hỗ trợ tại nhà"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-atlantic-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-dela-gothic mb-6">
            <span className="text-atlantic-forest">Lộ Trình Học Tập</span>
            <br />
            <span className="text-atlantic-deep-night">
              Cá Nhân Hóa Tại Atlantic Group
            </span>
          </h2>
          <p className="text-lg md:text-xl font-nunito text-atlantic-charcoal max-w-3xl mx-auto leading-relaxed">
            Quy trình chuyên nghiệp, bài bản được thiết kế riêng cho từng trẻ
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-atlantic-forest/30 via-atlantic-deep-night/30 via-atlantic-forest/30 to-atlantic-deep-night/30"></div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`text-6xl md:text-7xl font-dela-gothic ${index % 2 === 0 ? 'text-atlantic-forest/20' : 'text-atlantic-deep-night/20'}`}>
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-nunito font-extrabold text-atlantic-deep-night mb-2">
                        {step.title}
                      </h3>
                      <div className={`w-16 h-1 ${step.bgColor} rounded-full`}></div>
                    </div>
                  </div>

                  <p className="font-nunito text-atlantic-charcoal leading-relaxed text-lg">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {step.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${step.bgColor}`}></div>
                        <span className="font-nunito text-atlantic-charcoal">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Icon Card */}
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className={`hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 ${step.borderColor} rounded-full z-10`}></div>
                  
                  {/* Icon Container */}
                  <div className={`relative w-32 h-32 lg:w-40 lg:h-40 rounded-3xl ${step.bgColor} flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                    <step.icon className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                    
                    {/* Floating Background */}
                    <div className={`absolute inset-0 ${step.bgColor}/20 rounded-3xl transform rotate-6`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-atlantic-cream/50 rounded-3xl border border-atlantic-forest/10">
          <h3 className="text-2xl md:text-3xl font-nunito font-extrabold text-atlantic-deep-night mb-4">
            Sẵn sàng bắt đầu hành trình?
          </h3>
          <p className="font-nunito text-atlantic-charcoal mb-6 max-w-2xl mx-auto">
            Mỗi bước trong quy trình đều được thiết kế để đảm bảo con bạn phát triển toàn diện và bền vững nhất.
          </p>
          <div className="inline-flex items-center space-x-2 text-atlantic-forest">
            <span className="text-sm font-nunito font-semibold">Thời gian hoàn thành đánh giá: 45-60 phút</span>
            <div className="w-2 h-2 bg-atlantic-forest rounded-full"></div>
            <span className="text-sm font-nunito font-semibold">Miễn phí hoàn toàn</span>
          </div>
        </div>
      </div>
    </section>
  );
}