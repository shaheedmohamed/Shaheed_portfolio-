import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const LazyImage = lazy(() => import("../components/LazyImage"));

const ImagePlaceholder = () => (
  <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-full h-full rounded-3xl" />
);

const AboutUs = () => {
  const teamMembers = [
    {
      name: "شهد فوزي",
      role: " R&D in IEEE ",
      image: "/Profiles/shahdfawzy.jpg",
      description: "",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/shahdfawzy2007/",
      },
    },
    {
      name: "حازم محمد",
      role: " مطور مواقع",
      image: "/Profiles/Hazem.jpg",
      description:
        " مطور مواقع متخصص في React, Tailwind CSS, Framer Motion, PHP، و MySQL. لديك خبرة في تطوير مواقع وتطبيقات ويب تركز على الأداء وتجربة المستخدم، بما في ذلك نظام مسابقات طلابية، موقع شركة أمنية، وموقع لتأجير السكوترات الكهربائية في مصر. تسعى دائمًا لتقديم حلول برمجية احترافية ",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/hazem-ezz-424498285/",
      },
    },
    {
      name: "شهيد محمد ",
      role: "رئيس قسم التكنولوجيا",
      image: "/Profiles/Shaheed.png",
      description:
        "مهندس برمجيات متخصص في تطوير التطبيقات وأنظمة إدارة الأساطيل. له خبرة واسعة في مجال التقنيات الحديثة وإنترنت الأشياء.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/shaheed-mohamed-6618b3348/",
      },
    },
    {
      name: " أميره محمد ",
      role: "  HR in IEEE ",
      image: "/Profiles/Amira.jpg",
      description: " طالبة في مدرسة وي  قسم برمجيات     ",
      socialLinks: {
        linkedin:
          "https://www.linkedin.com/in/amira-mohammed-818b78290/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: " عمر  فاروق ",
      role: "  مساعد اول ",
      image: "/Profiles/Omar.jpg",
      description: "شغال عندي",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/omar-farok-005860268/",
      },
    },
  ];
  const supporters = [
    {
      name: "Hazem",
      image: "/Supporters/bh.jpg", // Add your supporter images
      description: "الراعي الرسمي للمشروع",
    },
    {
      name: "عمر محمد فاروق",
      image: "/Supporters/bo.jpg",
      description: "شريك تنموي",
    },
    {
      name: "بلال محمد ",
      image: "/Supporters/bo1.jpg",
      description: "شريك استراتيجي",
    },
  ];

  // Create a new component for the team member card
  const TeamMemberCard = ({ member, index }) => (
    <section className="min-h-screen relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto h-full flex items-center"
      >
        <div
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full ${
            index % 2 === 0 ? "md:dir-rtl" : ""
          }`}
        >
          {/* Image Side */}
          <motion.div
            initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Suspense fallback={<ImagePlaceholder />}>
              <LazyImage
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </Suspense>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 p-4 sm:p-6 md:p-8 text-right"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {member.name}
              </h2>
              <div className="h-1 w-20 bg-orange-500 mr-0" />
              <h3 className="text-xl sm:text-2xl text-orange-500 font-semibold">
                {member.role}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {member.description}
              </p>
            </div>

            {/* Social Links */}
            {member.socialLinks.linkedin && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={member.socialLinks.linkedin}
                className="inline-flex bg-orange-500 p-2 sm:p-3 rounded-full text-white hover:bg-orange-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn profile of ${member.name}`}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <Suspense fallback={<ImagePlaceholder />}>
            <LazyImage
              src="/TeamWork.jpg"
              alt="About Us Hero"
              className="w-full h-full object-cover"
            />
          </Suspense>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-4xl mx-auto px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">فريق العمل</h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-orange-500 mx-auto mt-4 mb-6"
            />
            <p className="text-xl md:text-2xl text-gray-200">
              تعرف على الفريق المتميز الذي يقود مسيرة نجاحنا
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Member Cards */}
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={member.name} member={member} index={index} />
      ))}
      <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            شركاء النجاح
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-orange-500 mx-auto mb-8"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          ></motion.p>
        </motion.div>
      </section>

      {/* Individual Supporter Sections */}
      {supporters.map((supporter, index) => (
        <SupporterSection
          key={supporter.name || index}
          supporter={supporter}
          index={index}
        />
      ))}
    </div>
  );
};

const SupporterSection = ({ supporter, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="min-h-screen relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto h-full flex items-center"
      >
        <div
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full ${
            isEven ? "" : "md:dir-rtl"
          }`}
        >
          {/* Image Side */}
          <motion.div
            initial={{ x: isEven ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Suspense fallback={<ImagePlaceholder />}>
              <LazyImage
                src={supporter.image}
                alt={supporter.name}
                className="w-full h-full object-cover"
              />
            </Suspense>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ x: isEven ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 p-4 sm:p-6 md:p-8 text-right"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
              >
                {supporter.name}
              </motion.h2>
              <div className="h-1 w-20 bg-orange-500 mr-0" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {supporter.description}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
export default AboutUs;
