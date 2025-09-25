import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Tại sao nên chọn Atlantic Group mà không phải một trung tâm khác?",
      answer: "Atlantic Group là hệ thống giáo dục duy nhất tại Việt Nam kết hợp hoàn hảo 3 yếu tố: (1) Phương pháp Montessori chuẩn quốc tế AMI với giáo cụ chính hãng, (2) Đội ngũ giáo viên bản ngữ có chứng chỉ TESOL/CELTA, (3) Chương trình Toán tư duy được phát triển riêng cho trẻ Việt Nam. Chúng tôi không chỉ dạy kiến thức mà còn phát triển tư duy và tính cách cho trẻ."
    },
    {
      question: "Chương trình học của Atlantic Group có bị \"nặng\" so với chương trình trên trường không?",
      answer: "Hoàn toàn không. Phương pháp Montessori tôn trọng nhịp độ tự nhiên của trẻ. Thay vì áp đặt kiến thức, chúng tôi tạo môi trường để trẻ tự khám phá. Kết quả là trẻ học hiệu quả hơn mà không bị căng thẳng. Nhiều phụ huynh chia sẻ con em họ trở nên yêu thích học tập hơn sau khi học tại Atlantic Group."
    },
    {
      question: "Sĩ số tối đa của một lớp là bao nhiêu?",
      answer: "Để đảm bảo chất lượng giáo dục cá nhân hóa, mỗi lớp học tại Atlantic Group chỉ có tối đa 12-15 học sinh với 2-3 giáo viên đồng hành. Đặc biệt, với các lớp Tiếng Anh, tỷ lệ là 1 giáo viên bản ngữ cho 6-8 học sinh để đảm bảo mỗi em đều có đủ thời gian tương tác và phát triển kỹ năng giao tiếp."
    },
    {
      question: "Làm sao tôi biết con có phù hợp với phương pháp Montessori không?",
      answer: "Phương pháp Montessori phù hợp với mọi trẻ em vì nó dựa trên khoa học về sự phát triển tự nhiên của trẻ. Tuy nhiên, để đảm bảo, Atlantic Group cung cấp buổi đánh giá miễn phí và buổi học thử nghiệm. Qua đó, chuyên gia sẽ tư vấn cụ thể về sự phù hợp và lộ trình phát triển tối ưu cho từng bé."
    },
    {
      question: "Thông tin các khóa học và mức học phí?",
      answer: "Atlantic Group có nhiều gói học phù hợp với nhu cầu của từng gia đình: (1) Gói cơ bản: 2 buổi/tuần, tập trung 1 môn học, (2) Gói tiêu chuẩn: 3 buổi/tuần, kết hợp 2 môn học, (3) Gói toàn diện: 4-5 buổi/tuần, đầy đủ 3 môn học. Học phí dao động từ 2.5-4.5 triệu/tháng tùy gói. Hiện tại có ưu đãi học bổng 25% cho học viên mới."
    },
    {
      question: "Atlantic Group có các cơ sở ở đâu?",
      answer: "Hiện tại Atlantic Group có 5 cơ sở tại Hà Nội (Cầu Giấy, Hoàng Mai) và TP.HCM (Quận 1, Quận 7, Thủ Đức). Tất cả cơ sở đều được thiết kế theo tiêu chuẩn Montessori quốc tế với không gian xanh, thoáng mát và an toàn tuyệt đối cho trẻ."
    },
    {
      question: "Thời gian học như thế nào? Có linh hoạt không?",
      answer: "Atlantic Group hiểu rằng mỗi gia đình có lịch trình khác nhau. Chúng tôi cung cấp nhiều khung giờ linh hoạt: sáng (8h-11h), chiều (14h-17h), tối (18h-20h) và cả cuối tuần. Phụ huynh có thể điều chỉnh lịch học phù hợp và bù học khi cần thiết."
    },
    {
      question: "Làm thế nào để theo dõi tiến bộ của con?",
      answer: "Atlantic Group cam kết minh bạch trong việc báo cáo tiến bộ: (1) Báo cáo học tập hàng tuần qua app mobile, (2) Video/hình ảnh hoạt động học tập của con, (3) Gặp gỡ phụ huynh định kỳ mỗi tháng, (4) Đánh giá năng lực toàn diện mỗi 3 tháng. Phụ huynh luôn được cập nhật đầy đủ về sự phát triển của con."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-atlantic-cream to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-dela-gothic mb-6">
            <span className="text-atlantic-forest">Giải Đáp</span> <span className="text-atlantic-deep-night">Thắc Mắc</span>
            <br />
            <span className="text-atlantic-forest">Thường Gặp</span>
          </h2>
          <p className="text-lg md:text-xl font-nunito text-atlantic-charcoal max-w-3xl mx-auto">
            Những câu hỏi phổ biến nhất từ phụ huynh về Atlantic Group
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg border border-atlantic-forest/10 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-atlantic-forest focus:ring-inset"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-nunito font-bold text-atlantic-deep-night pr-8 leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 bg-atlantic-forest/10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFAQ === index ? 'bg-atlantic-forest transform rotate-180' : ''
                  }`}>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-atlantic-forest" />
                    )}
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-atlantic-forest/10">
                    <p className="font-nunito text-atlantic-charcoal leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 bg-atlantic-cream/50 rounded-3xl border border-atlantic-forest/10">
          <h3 className="text-2xl font-nunito font-extrabold text-atlantic-deep-night mb-4">
            Vẫn còn thắc mắc?
          </h3>
          <p className="font-nunito text-atlantic-charcoal mb-6 max-w-2xl mx-auto">
            Đội ngũ chuyên gia tư vấn của Atlantic Group luôn sẵn sàng giải đáp mọi câu hỏi của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-atlantic-forest">
              <span className="text-sm font-nunito font-semibold">📞 Hotline: 1900 123 456</span>
            </div>
            <div className="flex items-center space-x-2 text-atlantic-deep-night">
              <span className="text-sm font-nunito font-semibold">✉️ Email: info@atlanticgroup.edu.vn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}