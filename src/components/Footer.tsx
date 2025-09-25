import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-atlantic-deep-night text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-dela-gothic text-atlantic-yellow mb-4">
                Atlantic Group
              </h3>
              <p className="font-nunito text-white/80 leading-relaxed">
                Hệ thống giáo dục Montessori hàng đầu Việt Nam, giúp trẻ phát triển toàn diện và tự tin vươn ra thế giới.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-atlantic-forest rounded-full flex items-center justify-center hover:bg-atlantic-forest/80 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-atlantic-coral rounded-full flex items-center justify-center hover:bg-atlantic-coral/80 transition-colors cursor-pointer">
                <Youtube className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-atlantic-yellow rounded-full flex items-center justify-center hover:bg-atlantic-yellow/80 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4 text-atlantic-deep-night" />
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-nunito font-bold text-white mb-6">Chương Trình Học</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Toán Tư Duy Montessori</a></li>
              <li><a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Tiếng Việt Sinh Động</a></li>
              <li><a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Tiếng Anh Phản Xạ</a></li>
              <li><a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Chương Trình Toàn Diện</a></li>
              <li><a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Đào Tạo Giáo Viên</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-nunito font-bold text-white mb-6">Thông Tin</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Về Atlantic Group</a></li>
              <li><a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Đội Ngũ Chuyên Gia</a></li>
              <li><a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Phương Pháp Montessori</a></li>
              <li><a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Tin Tức & Sự Kiện</a></li>
              <li><a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Tuyển Dụng</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-nunito font-bold text-white mb-6">Liên Hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-atlantic-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-nunito font-semibold text-white">1900 123 456</p>
                  <p className="font-nunito text-white/70 text-sm">Hotline tư vấn (8:00 - 22:00)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-atlantic-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-nunito font-semibold text-white">info@atlanticgroup.edu.vn</p>
                  <p className="font-nunito text-white/70 text-sm">Email hỗ trợ</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-atlantic-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-nunito font-semibold text-white">Hà Nội & TP.HCM</p>
                  <p className="font-nunito text-white/70 text-sm">5 cơ sở trên toàn quốc</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Locations */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <h4 className="text-lg font-nunito font-bold text-white mb-6 text-center">Hệ Thống Cơ Sở</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-atlantic-forest/20 rounded-xl p-6 hover:bg-atlantic-forest/30 transition-colors border border-atlantic-forest/30">
              <h5 className="font-nunito font-bold text-white mb-2">Hà Nội - Cầu Giấy</h5>
              <p className="font-nunito text-white/70 text-sm">123 Đường Cầu Giấy, Quận Cầu Giấy</p>
              <p className="font-nunito text-atlantic-yellow text-sm mt-2">📞 024 3456 7890</p>
            </div>
            <div className="bg-atlantic-forest/20 rounded-xl p-6 hover:bg-atlantic-forest/30 transition-colors border border-atlantic-forest/30">
              <h5 className="font-nunito font-bold text-white mb-2">Hà Nội - Hoàng Mai</h5>
              <p className="font-nunito text-white/70 text-sm">456 Đường Giải Phóng, Quận Hoàng Mai</p>
              <p className="font-nunito text-atlantic-yellow text-sm mt-2">📞 024 3789 0123</p>
            </div>
            <div className="bg-atlantic-forest/20 rounded-xl p-6 hover:bg-atlantic-forest/30 transition-colors border border-atlantic-forest/30">
              <h5 className="font-nunito font-bold text-white mb-2">TP.HCM - Quận 1</h5>
              <p className="font-nunito text-white/70 text-sm">789 Đường Nguyễn Huệ, Quận 1</p>
              <p className="font-nunito text-atlantic-yellow text-sm mt-2">📞 028 3456 7890</p>
            </div>
            <div className="bg-atlantic-forest/20 rounded-xl p-6 hover:bg-atlantic-forest/30 transition-colors border border-atlantic-forest/30">
              <h5 className="font-nunito font-bold text-white mb-2">TP.HCM - Quận 7</h5>
              <p className="font-nunito text-white/70 text-sm">321 Đường Nguyễn Thị Thập, Quận 7</p>
              <p className="font-nunito text-atlantic-yellow text-sm mt-2">📞 028 3789 0123</p>
            </div>
            <div className="bg-atlantic-forest/20 rounded-xl p-6 hover:bg-atlantic-forest/30 transition-colors border border-atlantic-forest/30">
              <h5 className="font-nunito font-bold text-white mb-2">TP.HCM - Thủ Đức</h5>
              <p className="font-nunito text-white/70 text-sm">654 Đường Võ Văn Ngân, TP Thủ Đức</p>
              <p className="font-nunito text-atlantic-yellow text-sm mt-2">📞 028 3012 3456</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-nunito text-white/70 text-sm text-center md:text-left">
              <p>&copy; 2024 Atlantic Group. Tất cả quyền được bảo lưu.</p>
              <p className="mt-1">Giấy phép hoạt động giáo dục số: 123456789/GDĐT</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Chính sách bảo mật</a>
              <a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Điều khoản sử dụng</a>
              <a href="#" className="font-nunito text-white/70 hover:text-atlantic-yellow transition-colors">Chính sách hoàn tiền</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}