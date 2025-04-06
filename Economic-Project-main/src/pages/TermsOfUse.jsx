import { motion } from "framer-motion";

function TermsOfUse() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const sections = [
    {
      title: "المقدمة",
      content:
        "مرحبًا بك في موقع Speed You لتأجير الأسكوترات الكهربائية. باستخدام خدماتنا، فإنك توافق على الالتزام بالشروط المنصوص عليها أدناه. تهدف هذه الشروط إلى حماية حقوق المستخدم والشركة وضمان تجربة آمنة وممتعة للجميع.",
    },
    {
      title: "حقوق الشركة",
      content: [
        "جميع المحتويات، بما في ذلك التصميمات، العلامة التجارية، والنصوص، هي ملكية حصرية لشركة Speed You.",
        "تحتفظ الشركة بحق تعديل أو إضافة أي من الخدمات أو الشروط في أي وقت دون إشعار مسبق.",
        "الشركة غير مسؤولة عن أي أعطال تقنية أو أخطاء قد تحدث أثناء استخدام الموقع.",
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-25">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={sectionVariants} className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              سياسة الاستخدام وحقوق المستخدم
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-orange-500 mx-auto"
            />
          </motion.div>

          {/* Content Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-orange-500 dark:text-orange-400 mb-4">
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {section.content.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-orange-500 ml-2">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              )}
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            variants={sectionVariants}
            className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              تواصل معنا
            </h2>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>البريد الإلكتروني: support@speedyou.com</p>
              <p>الهاتف: 01005291205</p>
            </div>
          </motion.div>

          {/* Agreement Footer */}
          <motion.div
            variants={sectionVariants}
            className="text-center text-gray-500 dark:text-gray-400 mt-8"
          >
            باستخدامك للموقع، فإنك تقر وتوافق على جميع الشروط المذكورة أعلاه
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default TermsOfUse;
