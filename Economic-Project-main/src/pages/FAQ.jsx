import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showSupport, setShowSupport] = useState(false);

  const faqs = [
    {
      question: "كيف يمكنني استئجار سكوتر كهربائي؟",
      answer:
        "يمكنك استئجار سكوتر كهربائي من خلال تسجيل حساب على موقعنا، ثم اختيار المحطة المناسبة وحجز السكوتر المتاح. بعد ذلك، يمكنك استلام السكوتر من المحطة المختارة بعد تقديم بطاقة الهوية وتوقيع عقد الإيجار.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer:
        "نقبل الدفع نقداً في المحطات، وكذلك البطاقات الائتمانية (فيزا وماستركارد). قريباً سنضيف خيارات الدفع الإلكتروني مثل المحافظ الإلكترونية.",
    },
    {
      question: "هل أحتاج إلى رخصة قيادة؟",
      answer:
        "نعم، يجب أن تكون لديك رخصة قيادة سارية المفعول لاستئجار السكوتر الكهربائي. كما يجب أن يكون عمرك 18 عاماً أو أكثر.",
    },
    {
      question: "ما هو نظام التأمين المتبع؟",
      answer:
        "نوفر تأميناً شاملاً يغطي الحوادث والسرقة. يتم دفع مبلغ تأمين مسترد عند استلام السكوتر، ويتم استرداده عند إعادة السكوتر بحالة جيدة.",
    },
    {
      question: "ماذا لو تعطل السكوتر أثناء الاستخدام؟",
      answer:
        "نوفر خدمة المساعدة على الطريق على مدار الساعة. يمكنك الاتصال برقم الطوارئ المتوفر في السكوتر، وسيصل فريق الصيانة في أقرب وقت ممكن.",
    },
    {
      question: "هل يمكنني تمديد فترة الإيجار؟",
      answer:
        "نعم، يمكنك تمديد فترة الإيجار من خلال تطبيقنا أو الاتصال بخدمة العملاء، شريطة توفر السكوتر وعدم وجود حجوزات مسبقة عليه.",
    },
    {
      question: "ما هي سياسة الإلغاء؟",
      answer:
        "يمكنك إلغاء الحجز قبل 24 ساعة من موعد الاستلام مجاناً. الإلغاء قبل 12 ساعة يخضع لرسوم 25% من قيمة الحجز. الإلغاء في نفس يوم الحجز يخضع لرسوم 50%.",
    },
    {
      question: "كيف يمكنني الإبلاغ عن مشكلة؟",
      answer:
        "يمكنك الإبلاغ عن أي مشكلة من خلال الاتصال بخدمة العملاء على مدار الساعة، أو إرسال بريد إلكتروني إلى support@scooter-rental.eg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-25"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-orange-500 dark:text-orange-400">
            الأسئلة الشائعة
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-orange-500 mx-auto mt-4 mb-6"
          />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            إجابات على الأسئلة الأكثر شيوعاً حول خدمة تأجير السكوتر الكهربائي
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <button
                className="w-full px-6 py-4 text-right flex justify-between items-center focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-gray-50 dark:bg-gray-700"
                  >
                    <div className="px-6 py-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowSupport(!showSupport)}
          className="mt-8 mb-4 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 shadow-lg mx-auto block"
        >
          {showSupport ? "إخفاء الدعم" : "تحتاج مساعدة؟"}
        </motion.button>

        <AnimatePresence>
          {showSupport && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 dark:bg-gray-800 rounded-lg p-8 text-center shadow-xl">
                <h3 className="text-xl font-bold text-orange-500 dark:text-white">
                  لم تجد إجابة لسؤالك؟
                </h3>
                <p className="mt-3 text-orange-500 dark:text-orange-400">
                  فريق خدمة العملاء متاح على مدار الساعة لمساعدتك
                </p>
                <div className="mt-10 flex justify-center gap-4">
                  <Link>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="tel:+201005291205"
                      className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 shadow-lg"
                    >
                      اتصل بنا
                    </motion.a>
                  </Link>

                  <Link to="/ContactUs">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href=""
                      className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-200 shadow-lg"
                    >
                      راسلنا
                    </motion.a>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default FAQ;
