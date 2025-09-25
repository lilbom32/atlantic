import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Clock, Gift, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function FinalCTASection() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childAge: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-atlantic-forest via-atlantic-deep-night to-atlantic-forest relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-atlantic-yellow/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-atlantic-coral/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-atlantic-yellow/15 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-dela-gothic text-white mb-6 leading-tight">
            Đừng Để <span className="text-atlantic-yellow">Áp Lực Học Tập</span>
            <br />
            Lấy Đi <span className="text-atlantic-yellow">Tuổi Thơ</span> Của Con!
          </h2>
          <p className="text-lg md:text-xl font-nunito text-white/90 max-w-3xl mx-auto leading-relaxed">
            Hãy cùng <span className="text-atlantic-yellow font-dela-gothic">Atlantic Group</span> kiến tạo nền tảng vững chắc để con tự tin vươn ra thế giới
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Offer */}
          <div className="space-y-8">
            {/* Special Offer */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-atlantic-yellow/30">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-atlantic-yellow rounded-full flex items-center justify-center">
                  <Gift className="w-6 h-6 text-atlantic-forest" />
                </div>
                <div>
                  <h3 className="text-2xl font-nunito font-extrabold text-white mb-1">Ưu Đãi Đặc Biệt</h3>
                  <p className="font-nunito text-atlantic-yellow">DUY NHẤT trong tháng này</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-atlantic-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-atlantic-forest text-xs font-bold">✓</span>
                  </div>
                  <span className="font-nunito text-white">Tặng ngay <span className="text-atlantic-yellow font-semibold">Học bổng 25%</span> cho khóa học đầu tiên</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-atlantic-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-atlantic-forest text-xs font-bold">✓</span>
                  </div>
                  <span className="font-nunito text-white">01 Buổi <span className="text-atlantic-yellow font-semibold">Đánh giá Tư duy & Ngôn ngữ</span> chuyên sâu cùng chuyên gia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-atlantic-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-atlantic-forest text-xs font-bold">✓</span>
                  </div>
                  <span className="font-nunito text-white">Báo cáo chi tiết về <span className="text-atlantic-yellow font-semibold">tiềm năng và định hướng phát triển</span></span>
                </div>
              </div>

              {/* Urgency */}
              <div className="mt-6 p-4 bg-red-500/20 rounded-xl border border-red-400/30">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-300" />
                  <div>
                    <p className="text-red-200 text-sm">Chỉ dành cho 20 phụ huynh đăng ký nhanh nhất!</p>
                    <p className="text-red-100 text-xs">Còn lại: 8 suất</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h4 className="text-xl text-white">Tại sao chọn Atlantic Group?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100 text-sm">Phương pháp Montessori chuẩn quốc tế</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100 text-sm">Giáo viên bản ngữ có chứng chỉ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100 text-sm">Lớp học nhỏ, chăm sóc cá nhân</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100 text-sm">Báo cáo tiến độ định kỳ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-2">
                Nhận Tư Vấn & Ưu Đãi Ngay!
              </h3>
              <p className="text-gray-600">
                Chỉ cần 30 giây để đăng ký. Hoàn toàn miễn phí!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Tên phụ huynh *</label>
                <Input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  placeholder="Nhập họ tên của bạn"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Số điện thoại *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Nhập số điện thoại"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Nhập email của bạn"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Tuổi của bé *</label>
                <Input
                  type="number"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  placeholder="Nhập tuổi của bé"
                  min="3"
                  max="12"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full font-nunito font-bold bg-atlantic-yellow text-atlantic-forest hover:bg-atlantic-yellow/90 hover:text-atlantic-deep-night py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-atlantic-yellow"
              >
                <span className="text-lg">NHẬN TƯ VẤN & ƯU ĐÃI NGAY!</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500">
                  Bằng việc đăng ký, bạn đồng ý với điều khoản sử dụng của chúng tôi
                </p>
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                  <span>🔒 Bảo mật thông tin</span>
                  <span>📞 Gọi lại trong 24h</span>
                  <span>✨ Miễn phí hoàn toàn</span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Social Proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-200" />
              <span className="text-blue-100 text-sm">1000+ phụ huynh đã tin tưởng</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white text-xs flex items-center justify-center text-yellow-800">★</div>
                ))}
              </div>
              <span className="text-blue-100 text-sm">4.9/5 đánh giá</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}