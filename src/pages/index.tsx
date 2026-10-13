import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';

import { home } from 'virtual:content';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <Helmet>
        <title>Hello World</title>
        <meta name="description" content="A simple Hello World page." />
      </Helmet>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight leading-none">
          {home.heading}
        </h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          {home.subtext}
        </motion.p>
      </motion.div>
    </main>
  );
}
