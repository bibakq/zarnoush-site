import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="زعفران ایرانی"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">زعفران اصیل ایرانی</h1>
              <p className="text-xl md:text-2xl mb-8">طعم و رنگ بی‌نظیر طبیعت</p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg transition-colors">
                مشاهده محصولات
              </button>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">محصولات ویژه</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product Cards */}
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={`/images/product-${item}.jpg`}
                      alt={`محصول ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">زعفران سوپر نگین</h3>
                    <p className="text-gray-600 mb-4">زعفران با کیفیت عالی و رنگدهی بالا</p>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-600 font-bold">۲,۵۰۰,۰۰۰ تومان</span>
                      <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                        افزودن به سبد
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">درباره ما</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ما با بیش از ۲۰ سال تجربه در تولید و عرضه زعفران، همواره کیفیت و اصالت را در اولویت قرار داده‌ایم. محصولات ما از بهترین مزارع زعفران ایران تهیه می‌شوند و با استانداردهای بین‌المللی تولید می‌گردند.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  تیم ما متشکل از کارشناسان مجرب در زمینه کشت و تولید زعفران است که با دقت و حساسیت بالا، محصولات را کنترل و بسته‌بندی می‌کنند.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-96"
              >
                <Image
                  src="/images/about.jpg"
                  alt="درباره ما"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 