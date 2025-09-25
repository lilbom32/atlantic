import { Calculator, BookHeart, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function SolutionSection() {
  const solutions = [
    {
      icon: Calculator,
      title: "TOÁN TƯ DUY MONTESSORI",
      subtitle: "Chạm, Cảm Nhận & Thấu Hiểu",
      description: "Thay vì học thuộc lòng, trẻ được tương tác trực tiếp với các giáo cụ Toán học đầy màu sắc, giúp biến những khái niệm trừu tượng trở nên hữu hình và dễ hiểu.",
      highlight: "Xây dựng nền tảng tư duy logic từ gốc rễ, giúp con tự mình khám phá ra quy luật của những con số.",
      image: "https://images.unsplash.com/photo-1738811744493-a060532f3971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYXRoZW1hdGljcyUyMGVkdWNhdGlvbiUyMGtpZHMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NTg3MTE4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bgColor: "bg-atlantic-forest",
      borderColor: "border-atlantic-forest"
    },
    {
      icon: BookHeart,
      title: "TIẾNG VIỆT SINH ĐỘNG",
      subtitle: "Thẩm Thấu Ngôn Ngữ Tự Nhiên",
      description: "Con được đắm mình trong kho tàng truyện kể, tham gia các dự án sáng tạo và trò chơi ngôn ngữ, từ đó làm giàu vốn từ và cấu trúc câu một cách tự nhiên nhất.",
      highlight: "Khơi gợi kỹ năng viết sáng tạo và diễn đạt mạch lạc, giúp con tự tin thể hiện mọi ý tưởng của mình.",
      image: "https://images.unsplash.com/photo-1611581719398-08fe2eb020c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwaGFwcHklMjBjbGFzc3Jvb20lMjBzdHVkeWluZ3xlbnwxfHx8fDE3NTg3MTE4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bgColor: "bg-atlantic-deep-night",
      borderColor: "border-atlantic-deep-night"
    },
    {
      icon: Globe,
      title: "TIẾNG ANH PHẢN XẠ",
      subtitle: "Sống Cùng Tiếng Anh, Không Chỉ Học",
      description: "Môi trường 100% Tiếng Anh với các hoạt động thực tế (dự án khoa học, nấu ăn, kịch nghệ). Con học ngôn ngữ như cách học tiếng mẹ đẻ.",
      highlight: "Tập trung vào Nghe - Nói - Tương tác, xây dựng phản xạ giao tiếp tức thì mà không cần dịch thuật trong đầu.",
      image: "https://images.unsplash.com/photo-1593442808882-775dfcd90699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2hpbGRyZW4lMjBlbmdsaXNoJTIwbGVzc29ufGVufDF8fHx8MTc1ODcxMTg3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      bgColor: "bg-atlantic-forest",
      borderColor: "border-atlantic-forest"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-atlantic-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-dela-gothic mb-6">
            <span className="text-atlantic-forest">Atlantic Group</span> Mang Đến
            <br />
            <span className="text-atlantic-deep-night">
              Giải Pháp Toàn Diện 3-Trong-1
            </span>
          </h2>
          <p className="text-lg md:text-xl font-nunito text-atlantic-charcoal max-w-3xl mx-auto leading-relaxed">
            Nơi mỗi giờ học là một hành trình khám phá, giúp con phát triển cân bằng và vững chắc
          </p>
        </div>

        {/* Solutions */}
        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
            >
              {/* Image */}
              <div className="flex-1 relative">
                <div className={`absolute inset-0 ${solution.bgColor}/20 rounded-3xl transform rotate-3`}></div>
                <div className="relative">
                  <ImageWithFallback
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className={`absolute inset-0 ${solution.bgColor}/20 rounded-3xl`}></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                {/* Icon & Title */}
                <div className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${solution.bgColor} text-white shadow-lg`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl font-nunito font-extrabold text-atlantic-deep-night mb-2">
                      {solution.title}
                    </h3>
                    <p className={`text-lg font-nunito font-semibold ${index === 0 ? 'text-atlantic-forest' : index === 1 ? 'text-atlantic-deep-night' : 'text-atlantic-forest'}`}>
                      {solution.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="font-nunito text-atlantic-charcoal leading-relaxed text-lg">
                    {solution.description}
                  </p>
                  
                  <div className={`p-4 rounded-xl ${solution.bgColor}/10 border-l-4 ${solution.borderColor}`}>
                    <p className="font-nunito text-atlantic-deep-night leading-relaxed">
                      <span className="text-lg">💡</span> {solution.highlight}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${solution.bgColor}`}></div>
                    <span className="text-sm font-nunito text-atlantic-charcoal">Học qua trải nghiệm</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${solution.bgColor}`}></div>
                    <span className="text-sm font-nunito text-atlantic-charcoal">Cá nhân hóa</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${solution.bgColor}`}></div>
                    <span className="text-sm font-nunito text-atlantic-charcoal">Phát triển tự nhiên</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${solution.bgColor}`}></div>
                    <span className="text-sm font-nunito text-atlantic-charcoal">Kết quả bền vững</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-atlantic-forest/10">
            <div className="text-3xl md:text-4xl font-dela-gothic text-atlantic-forest mb-2">95%</div>
            <p className="font-nunito text-atlantic-charcoal">Trẻ cải thiện tư duy Toán</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-atlantic-deep-night/10">
            <div className="text-3xl md:text-4xl font-dela-gothic text-atlantic-deep-night mb-2">90%</div>
            <p className="font-nunito text-atlantic-charcoal">Tự tin diễn đạt Tiếng Việt</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-atlantic-forest/10">
            <div className="text-3xl md:text-4xl font-dela-gothic text-atlantic-forest mb-2">88%</div>
            <p className="font-nunito text-atlantic-charcoal">Phản xạ Tiếng Anh tự nhiên</p>
          </div>
        </div>
      </div>
    </section>
  );
}