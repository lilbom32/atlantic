import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-atlantic-cream">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1659048357681-2c741a05b972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG1vbnRlc3NvcmklMjBlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NTg3MTE4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Children learning with Montessori method"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-atlantic-forest/10 via-atlantic-deep-night/5 to-atlantic-forest/15"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Logo/Brand - Dela Gothic One */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-dela-gothic text-atlantic-forest mb-4">
              Atlantic Group
            </h1>
            <div className="w-32 h-1 bg-atlantic-forest mx-auto rounded-full"></div>
          </div>

          {/* Main Headline - Dela Gothic One */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-dela-gothic max-w-4xl mx-auto leading-tight">
              <span className="text-atlantic-forest">Khơi Nguồn Tư Duy</span>
              <br />
              <span className="text-atlantic-deep-night">Vươn Ra Biển Lớn</span>
            </h2>
            
            {/* Description - Nunito Sans Regular */}
            <p className="text-lg md:text-xl lg:text-2xl font-nunito text-atlantic-charcoal max-w-3xl mx-auto leading-relaxed">
              Nền tảng giáo dục Montessori đột phá, giúp trẻ làm chủ <strong className="text-atlantic-forest">Tư duy Toán học</strong>, 
              giàu <strong className="text-atlantic-deep-night">Vốn từ Tiếng Việt</strong> và tự tin <strong className="text-atlantic-forest">Phản xạ Tiếng Anh</strong> ngay từ bậc tiểu học.
            </p>
          </div>

          {/* CTA Buttons - Nunito Sans Bold theo brand guidelines */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="font-nunito font-bold bg-atlantic-yellow text-atlantic-forest hover:bg-atlantic-yellow/90 hover:text-atlantic-deep-night px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-atlantic-yellow"
            >
              ĐĂNG KÝ TRẢI NGHIỆM MIỄN PHÍ
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="font-nunito font-bold border-2 border-atlantic-deep-night text-atlantic-deep-night hover:bg-atlantic-deep-night hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Xem video giới thiệu
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12">
            <p className="text-sm font-nunito text-atlantic-charcoal mb-4">Được tin tưởng bởi hơn 1000+ phụ huynh tại Việt Nam</p>
            <div className="flex justify-center items-center space-x-8 opacity-80">
              <div className="text-xs font-nunito font-semibold bg-white text-atlantic-forest px-4 py-2 rounded-full shadow-md border border-atlantic-forest/20">✨ Chứng chỉ Montessori AMI</div>
              <div className="text-xs font-nunito font-semibold bg-white text-atlantic-deep-night px-4 py-2 rounded-full shadow-md border border-atlantic-deep-night/20">🏆 Top 10 Giáo dục 2024</div>
              <div className="text-xs font-nunito font-semibold bg-white text-atlantic-forest px-4 py-2 rounded-full shadow-md border border-atlantic-forest/20">🌟 4.9/5 Đánh giá</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements với brand colors */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-atlantic-yellow/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-atlantic-coral/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-atlantic-forest/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
}