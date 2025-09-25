import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const highlightCards = [
  {
    title: "Toán tư duy Montessori",
    description: "Chạm - cảm nhận - thấu hiểu những khái niệm trừu tượng thông qua giáo cụ chuẩn AMI.",
    accent: "border-atlantic-forest",
    badge: "bg-atlantic-forest/10 text-atlantic-forest",
    tag: "Logic & Số học"
  },
  {
    title: "Tiếng Việt sinh động",
    description: "Làm giàu vốn từ và khả năng diễn đạt bằng dự án sáng tạo và kể chuyện mỗi ngày.",
    accent: "border-atlantic-deep-night",
    badge: "bg-atlantic-deep-night/10 text-atlantic-deep-night",
    tag: "Ngôn ngữ mẹ đẻ"
  },
  {
    title: "Tiếng Anh phản xạ",
    description: "Môi trường 100% tiếng Anh với giáo viên bản ngữ giúp con giao tiếp tự nhiên.",
    accent: "border-atlantic-yellow",
    badge: "bg-atlantic-yellow/20 text-atlantic-deep-night",
    tag: "Song ngữ quốc tế"
  }
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-atlantic-cream py-24 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1659048357681-2c741a05b972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG1vbnRlc3NvcmklMjBlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NTg3MTE4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Children learning with Montessori method"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-atlantic-forest/10 via-atlantic-deep-night/5 to-atlantic-forest/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main hero copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div>
                <p className="inline-flex items-center px-4 py-2 rounded-full bg-atlantic-forest/10 text-sm font-nunito font-semibold text-atlantic-forest">
                  Atlantic Group - Montessori chuẩn AMI
                </p>
                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-dela-gothic leading-tight text-atlantic-forest">
                  Khơi Nguồn Tư Duy,
                  <span className="block text-atlantic-deep-night">Vươn Ra Biển Lớn</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl lg:text-2xl font-nunito text-atlantic-charcoal leading-relaxed">
                Nền tảng giáo dục Montessori đột phá giúp trẻ làm chủ <strong className="text-atlantic-forest">Tư duy Toán học</strong>,
                giàu <strong className="text-atlantic-deep-night">Vốn từ Tiếng Việt</strong> và tự tin <strong className="text-atlantic-forest">Phản xạ Tiếng Anh</strong> ngay từ bậc tiểu học.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="font-nunito font-bold bg-atlantic-yellow text-atlantic-forest hover:bg-atlantic-yellow/90 hover:text-atlantic-deep-night px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-atlantic-yellow"
                >
                  ĐĂNG KÝ TRẢI NGHIỆM MIỄN PHÍ
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-nunito font-bold border-2 border-atlantic-deep-night text-atlantic-deep-night hover:bg-atlantic-deep-night hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Xem video giới thiệu
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Phụ huynh tin tưởng", value: "1000+" },
                { label: "Chuyên gia đồng hành", value: "50+" },
                { label: "Điểm hài lòng", value: "4.9/5" }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/80 border border-atlantic-forest/10 p-4 text-center shadow-lg backdrop-blur"
                >
                  <div className="text-3xl font-dela-gothic text-atlantic-forest">{stat.value}</div>
                  <p className="text-sm font-nunito text-atlantic-charcoal/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {highlightCards.map((item) => (
                <div
                  key={item.title}
                  className={`relative rounded-3xl bg-white/90 border ${item.accent} p-6 shadow-xl backdrop-blur transition-transform duration-300 hover:-translate-y-1`}
                >
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-nunito font-semibold ${item.badge}`}>
                    {item.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-nunito font-extrabold text-atlantic-deep-night">{item.title}</h3>
                  <p className="mt-2 text-sm font-nunito text-atlantic-charcoal leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-atlantic-forest/15 bg-atlantic-cream/70 p-6 shadow-inner">
              <p className="text-sm font-nunito text-atlantic-charcoal/80">Được chứng nhận bởi</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-atlantic-forest/20 bg-white px-4 py-3 text-center text-sm font-nunito text-atlantic-forest">
                  ✨ Montessori AMI
                </div>
                <div className="rounded-xl border border-atlantic-deep-night/20 bg-white px-4 py-3 text-center text-sm font-nunito text-atlantic-deep-night">
                  🏆 Top 10 Giáo dục 2024
                </div>
                <div className="rounded-xl border border-atlantic-yellow/30 bg-white px-4 py-3 text-center text-sm font-nunito text-atlantic-forest">
                  🌟 4.9/5 Đánh giá
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements with brand colors */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-atlantic-yellow/30 rounded-full animate-bounce" />
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-atlantic-coral/30 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-atlantic-forest/30 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
    </section>
  );
}