import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function Dashboard({ user }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("bookings");
  const [bookings, setBookings] = useState([]);
  const [profile, setProfile] = useState(user || {});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    // Load user's bookings
    const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const userBookings = allBookings.filter(
      (booking) => booking.userId === user.id
    );
    setBookings(userBookings);
  }, [user, navigate]);

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    // Update user in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, ...profile } : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Update current user
    localStorage.setItem("currentUser", JSON.stringify(profile));
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "active":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
            لوحة التحكم
          </h1>

          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("bookings")}
                className={`${
                  activeTab === "bookings"
                    ? "border-orange-500 text-orange-600 dark:text-orange-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
              >
                الحجوزات
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`${
                  activeTab === "profile"
                    ? "border-orange-500 text-orange-600 dark:text-orange-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
              >
                الملف الشخصي
              </button>
            </nav>
          </div>

          {/* Content */}
          {activeTab === "bookings" ? (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                حجوزاتي
              </h2>

              {bookings.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">
                  لا توجد حجوزات حالية
                </p>
              ) : (
                <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {bookings.map((booking) => (
                      <motion.li
                        key={booking.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-orange-600 dark:text-orange-400 truncate">
                              حجز رقم #{booking.id}
                            </div>
                            {/* Status indicator with enhanced colors */}
                            <div
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                booking.status
                              )}`}
                            >
                              {/* ... status text ... */}
                            </div>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                التاريخ: {booking.date}
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:mr-6">
                                الوقت: {booking.time}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                              <p>السعر: {booking.price} جنيه مصري</p>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                الملف الشخصي
              </h2>
              <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  {isEditing ? (
                    <form onSubmit={handleProfileUpdate} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          الاسم
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={profile.name}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          الاسم
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          value={profile.email}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          رقم الهاتف
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={profile.phone}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        />
                      </div>

                      {/* Similar styling for other input fields */}

                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="bg-white dark:bg-gray-700 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                        >
                          إلغاء
                        </button>
                        <button
                          type="submit"
                          className="bg-orange-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                        >
                          حفظ التغييرات
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                          معلومات المستخدم
                        </h3>
                        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <div className="px-4 py-5 bg-gray-50 dark:bg-gray-700 shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              الاسم
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                              {profile.name}
                            </dd>
                          </div>
                          <div className="px-4 py-5 bg-gray-50 dark:bg-gray-700 shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              البريد الاكتروني
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                              {profile.email}
                            </dd>
                          </div>
                          <div className="px-4 py-5 bg-gray-50 dark:bg-gray-700 shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              رقم الهاتف
                            </dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                              {profile.phone}
                            </dd>
                          </div>
                          {/* Similar styling for other profile fields */}
                        </dl>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => setIsEditing(true)}
                          className="bg-orange-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                        >
                          تعديل الملف الشخصي
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default Dashboard;
