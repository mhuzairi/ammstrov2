import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Plane, 
  BarChart3, 
  Smartphone, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Play,
  MessageSquare,
  Link,
  Calendar,
  Target,
  Award,
  Globe,
  Menu,
  X
} from 'lucide-react'
import ammstroLogo from './assets/ammstro-logo.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  // Navigation items
  const navItems = [
    { id: 'product', label: 'Product' },
    { id: 'how-it-works', label: 'How it works' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' }
  ]

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden geometric-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={ammstroLogo} alt="AMMSTRO Logo" className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">AMMSTRO</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Advancing Aviation</span>
              </div>
            </motion.div>

            {/* Navigation Links and Mobile Menu */}
            <div className="flex items-center">
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8 mr-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-200 p-2"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* CTA Button - Desktop */}
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Get Started
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 border-t border-slate-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 mt-4">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 animated-lines">
        {/* Background Animation */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          {/* Announcement Badge */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2">
              Latest funding round announcement
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionize Aviation
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Maintenance Operations
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Digital transformation for streamlined aircraft maintenance operations. 
            Join aviation companies advancing their operations with our innovative AI-powered platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg w-full sm:w-auto">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Customer Logos */}
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-slate-400 mb-6">Trusted by 100+ aviation companies worldwide</p>
            <div className="grid grid-cols-2 md:flex md:justify-center md:items-center gap-4 md:gap-8 opacity-60">
              <div className="text-lg md:text-2xl font-bold text-center">AirAsia</div>
              <div className="text-lg md:text-2xl font-bold text-center">Malaysia Airlines</div>
              <div className="text-lg md:text-2xl font-bold text-center">Garuda Indonesia</div>
              <div className="text-lg md:text-2xl font-bold text-center">Thai Airways</div>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            className="mt-16 relative px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 md:p-6 border border-slate-700 shadow-2xl">
              <div className="bg-slate-900 rounded-lg p-3 md:p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base md:text-lg font-semibold">AMMSTRO Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  <div className="bg-orange-500/20 rounded-lg p-3 md:p-4">
                    <div className="text-xl md:text-2xl font-bold text-orange-400">86.23%</div>
                    <div className="text-xs md:text-sm text-slate-400">Fleet Availability</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 md:p-4">
                    <div className="text-xl md:text-2xl font-bold text-green-400">35%</div>
                    <div className="text-xs md:text-sm text-slate-400">Cost Reduction</div>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-3 md:p-4">
                    <div className="text-xl md:text-2xl font-bold text-red-400">72</div>
                    <div className="text-xs md:text-sm text-slate-400">Active Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 relative hexagon-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">Product</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Discover our range of innovative
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                aviation maintenance tools
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore tailored solutions that meet the unique needs of your aviation business, 
              driving efficiency and productivity in every aspect of maintenance operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Cards */}
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">AI-Powered Maintenance Assistant</CardTitle>
                    <CardDescription className="text-slate-300">
                      Our AI chatbot adapts to every interaction, providing smarter maintenance 
                      recommendations with every conversation — when you need it.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">AI</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-300 mb-2">
                            "Tell me about the latest maintenance schedules for Boeing 737."
                          </p>
                          <p className="text-sm text-slate-400">
                            AI maintenance schedules are essential for building robust, 
                            scalable, and efficient aviation operations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                      <Link className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">Built-in Smart Documentation</CardTitle>
                    <CardDescription className="text-slate-300">
                      Effortlessly generate accurate, real-time maintenance records and compliance 
                      documentation with minimal effort.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">Intelligent Time Management</CardTitle>
                    <CardDescription className="text-slate-300">
                      Optimize maintenance schedules with AI-powered suggestions, ensuring you 
                      prioritize critical tasks and make the most of every maintenance window.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>

            {/* Interactive Demo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700">
                <div className="bg-slate-900 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Experience the magic of AI in aviation</h3>
                  <div className="space-y-4">
                    <div className="bg-orange-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-orange-400 font-medium">Analyzing maintenance data</span>
                        <div className="w-6 h-6 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 font-medium">Reschedule maintenance?</span>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600">
                          Yes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-900/50 circuit-lines">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-red-500/20 text-red-400 border-red-500/30">How it works</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience seamless integration of
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                AI into your maintenance workflow
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Simple setup in just a few steps",
                description: "Get started quickly with our user-friendly onboarding process that ensures you're up and running in no time.",
                icon: <Target className="w-6 h-6" />
              },
              {
                step: "02", 
                title: "Real-time processing for insights",
                description: "Experience the power of our advanced AI engine, providing you with actionable maintenance insights as they happen.",
                icon: <Zap className="w-6 h-6" />
              },
              {
                step: "03",
                title: "Ongoing support to enhance experience",
                description: "We're dedicated to your success with continuous support and feature enhancements to keep you ahead.",
                icon: <Award className="w-6 h-6" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-sm text-orange-400 font-semibold mb-2">{item.step}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">35%</div>
              <p className="text-slate-300">Our users rave about the efficiency our tools bring to their maintenance workflow.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">28%</div>
              <p className="text-slate-300">AI-powered automation has helped aviation companies reduce maintenance costs.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">9x</div>
              <p className="text-slate-300">Faster, informed decision-making with our maintenance data analysis tools.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 triangular-grid">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore features designed to enhance
              <br />
              <span className="bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent">
                your aviation maintenance operations
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Powerful tools designed for today's aviation challenges. Learn more about how we can 
              best support your needs — from small operators to major airlines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Real-time data processing",
                description: "Handle and analyze maintenance data instantly, providing actionable insights without delays."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Smart automation",
                description: "Automate repetitive maintenance tasks, freeing up time and boosting productivity across your team."
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Natural language understanding",
                description: "Understands and responds to maintenance queries in human language, making interactions intuitive."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Predictive analytics",
                description: "Anticipate maintenance needs with AI models, helping you make informed decisions before issues arise."
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Multi-platform integration",
                description: "Connect with existing aviation tools, ensuring smooth workflows and collaboration across systems."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Continuous learning",
                description: "Our AI evolves with every maintenance interaction, becoming smarter and more accurate over time."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 p-6 h-full hover:bg-slate-800/70 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900/50 animated-lines">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose the plan that fits your
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                aviation maintenance needs
              </span>
            </h2>
            <p className="text-xl text-slate-300">Get your free trial and experience the difference.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$1299",
                period: "/month",
                description: "Ideal for small aviation operators looking to streamline processes and gain valuable insights.",
                features: [
                  "Basic maintenance analytics and reporting",
                  "Up to 5 aircraft",
                  "Mobile app access",
                  "Email support"
                ],
                popular: false
              },
              {
                name: "Professional", 
                price: "$9599",
                period: "/month",
                description: "Perfect for growing aviation companies that need advanced features and support.",
                features: [
                  "Enhanced analytics and insights",
                  "Up to 25 aircraft",
                  "Integration with popular aviation apps",
                  "Priority support",
                  "Custom reporting"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "Custom solutions designed specifically for large aviation organizations with unique needs.",
                features: [
                  "Unlimited aircraft",
                  "Dedicated account manager",
                  "Comprehensive training and support",
                  "Custom integrations",
                  "SLA guarantee"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`relative p-6 h-full ${plan.popular ? 'bg-gradient-to-br from-orange-500/20 to-red-600/20 border-orange-500/50' : 'bg-slate-800/50 border-slate-700'}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <CardDescription className="text-slate-300">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' : 'bg-slate-700 hover:bg-slate-600'}`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 hexagon-bg">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-pink-500/20 text-pink-400 border-pink-500/30">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Common questions —
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
                answered
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What is your refund policy for dissatisfied customers?",
                answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our aviation maintenance platform, we'll provide a full refund within the first 30 days of your subscription."
              },
              {
                question: "Can I easily upgrade my plan later on?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "Is there a free trial available for new users?",
                answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start your trial."
              },
              {
                question: "What kind of support do you offer for users?",
                answer: "We provide 24/7 email support for all plans, priority support for Professional plans, and dedicated account management for Enterprise customers. We also offer comprehensive documentation and training resources."
              },
              {
                question: "How secure is my aviation data within your platform?",
                answer: "Security is our top priority. We use enterprise-grade encryption, comply with aviation industry standards, and undergo regular security audits. Your data is stored in secure, redundant data centers with 99.9% uptime guarantee."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{faq.question}</CardTitle>
                    <CardDescription className="text-slate-300 text-base">
                      {faq.answer}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500/20 to-red-600/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start revolutionizing your
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                aviation maintenance today
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Start your free trial today and discover the significant difference our solutions can make for your aviation operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={ammstroLogo} alt="AMMSTRO Logo" className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">AMMSTRO</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Advancing Aviation</span>
              </div>
            </div>
            <div className="text-slate-400 text-sm">
              © 2025 AMMSTRO SDN BHD. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

