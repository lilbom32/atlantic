import { Star, Quote, Award, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function TestimonialsSection() {
  const experts = [
    {
      name: "TS. Nguyễn Thị Minh Hạnh",
      title: "Chuyên gia Montessori AMI",
      experience: "15+ năm kinh nghiệm",
      image: "https://images.unsplash.com/photo-1593442808882-775dfcd90699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2hpbGRyZW4lMjBlbmdsaXNoJTIwbGVzc29ufGVufDF8fHx8MTc1ODcxMTg3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      achievements: ["Chứng chỉ AMI 3-6", "Đào tạo 200+ giáo viên", "Tác giả 5 cuốn sách"]
    },
    {
      name: "ThS. David Johnson",
      title: "Giáo viên Tiếng Anh bản ngữ",
      experience: "10+ năm tại Việt Nam",
      image: "https://images.unsplash.com/photo-1611581719398-08fe2eb020c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwaGFwcHklMjBjbGFzc3Jvb20lMjBzdHVkeWluZ3xlbnwxfHx8fDE3NTg3MTE4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      achievements: ["TESOL Certificate", "Cambridge Examiner", "Chuyên gia phương pháp TPR"]
    },
    {
      name: "PGS. Trần Văn Nam",
      title: "Chuyên gia Tâm lý Phát triển",
      experience: "20+ năm nghiên cứu",
      image: "https://images.unsplash.com/photo-1659048357681-2c741a05b972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG1vbnRlc3NvcmklMjBlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NTg3MTE4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      achievements: ["Tiến sĩ Tâm lý học", "100+ bài báo khoa học", "Tư vấn 1000+ gia đình"]
    }
  ];

  const testimonials = [
    {
      name: "Chị Hà My",
      child: "mẹ bé Bảo An (8 tuổi)",
      content: "Từ ngày học ở Atlantic Group, con không chỉ tiến bộ về Toán mà còn hoạt ngôn hơn hẳn. Điều tôi mừng nhất là con đi học trong tâm thế vui vẻ, háo hức.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1736479494478-d1bb4fd5d09d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnRzJTIwaGFwcHklMjBjaGlsZHJlbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzU4NzExODc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlight: "Con học vui vẻ, tiến bộ rõ rệt"
    },
    {
      name: "Anh Đức Minh",
      child: "bố bé Phương Linh (6 tuổi)",
      content: "Tôi đã thử nhiều trung tâm nhưng chỉ ở Atlantic Group, con mới thực sự 'nói' được Tiếng Anh chứ không chỉ thuộc lòng. Phương pháp ở đây thật sự khác biệt.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1736479494478-d1bb4fd5d09d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnRzJTIwaGFwcHklMjBjaGlsZHJlbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzU4NzExODc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlight: "Phương pháp thực sự khác biệt"
    },
    {
      name: "Chị Thu Hằng",
      child: "mẹ bé Minh Khôi (7 tuổi)",
      content: "Ban đầu con rất sợ Toán, bây giờ thường xuyên hỏi tôi những câu hỏi toán học phức tạp. Atlantic Group đã thay đổi hoàn toàn thái độ học tập của con.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1736479494478-d1bb4fd5d09d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnRzJTIwaGFwcHklMjBjaGlsZHJlbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzU4NzExODc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlight: "Thay đổi hoàn toàn thái độ học tập"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-atlantic-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-dela-gothic mb-6">
            <span className="text-atlantic-forest">Phụ Huynh Tin Tưởng</span>,
            <br />
            <span className="text-atlantic-deep-night">Chuyên Gia Đồng Hành</span>
            <br />
            Tại <span className="text-atlantic-forest">Atlantic Group</span>
          </h2>
          <p className="text-lg md:text-xl font-nunito text-atlantic-charcoal max-w-3xl mx-auto">
            Đội ngũ chuyên gia hàng đầu và sự tin tưởng từ hàng nghìn phụ huynh
          </p>
        </div>

        {/* Experts Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-nunito font-extrabold text-atlantic-deep-night mb-4">
              Đội Ngũ Chuyên Gia Hàng Đầu
            </h3>
            <p className="font-nunito text-atlantic-charcoal max-w-2xl mx-auto">
              Những chuyên gia giáo dục được đào tạo bài bản tại các trường đại học hàng đầu thế giới
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-atlantic-forest/10">
                {/* Image */}
                <div className="relative mb-6">
                  <ImageWithFallback
                    src={expert.image}
                    alt={expert.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-atlantic-forest rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-4">
                  <div>
                    <h4 className="text-xl font-nunito font-bold text-atlantic-deep-night mb-1">{expert.name}</h4>
                    <p className="font-nunito font-semibold text-atlantic-forest mb-2">{expert.title}</p>
                    <p className="text-sm font-nunito text-atlantic-charcoal">{expert.experience}</p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {expert.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-atlantic-forest rounded-full"></div>
                        <span className="text-sm font-nunito text-atlantic-charcoal">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section với Atlantic Coral background theo brand guidelines */}
        <div className="bg-atlantic-coral/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-nunito font-extrabold text-atlantic-deep-night mb-4">
              Lời Chia Sẻ Từ Phụ Huynh
            </h3>
            <p className="font-nunito text-atlantic-deep-night max-w-2xl mx-auto">
              Những câu chuyện thành công thực tế từ các gia đình đã tin tưởng Atlantic Group
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-atlantic-coral/20">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-atlantic-forest rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-4">
                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-atlantic-yellow fill-current" />
                    ))}
                  </div>

                  {/* Highlight */}
                  <div className="bg-atlantic-forest/10 rounded-xl p-4 mb-6 border-l-4 border-atlantic-forest">
                    <p className="font-nunito font-semibold text-atlantic-deep-night text-sm italic">
                      "{testimonial.highlight}"
                    </p>
                  </div>

                  {/* Testimonial Text */}
                  <p className="font-nunito text-atlantic-charcoal leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-nunito font-bold text-atlantic-deep-night">{testimonial.name}</p>
                      <p className="text-sm font-nunito text-atlantic-charcoal">{testimonial.child}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-dela-gothic text-atlantic-forest">1000+</div>
            <p className="font-nunito text-atlantic-charcoal">Phụ huynh tin tưởng</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-dela-gothic text-atlantic-deep-night">50+</div>
            <p className="font-nunito text-atlantic-charcoal">Chuyên gia giáo dục</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-dela-gothic text-atlantic-forest">4.9/5</div>
            <p className="font-nunito text-atlantic-charcoal">Đánh giá trung bình</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-dela-gothic text-atlantic-deep-night">95%</div>
            <p className="font-nunito text-atlantic-charcoal">Hài lòng về kết quả</p>
          </div>
        </div>
      </div>
    </section>
  );
}