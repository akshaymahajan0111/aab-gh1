import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';

import { home } from 'virtual:content';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <Helmet>
        <title>Hello World</title>
        <meta name="description" content="A simple Hello World page." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        className="text-center"
      >
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tight text-foreground"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {home.heading}
        </h1>
        <p
          className="mt-4 text-lg text-muted-foreground"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {home.subtext}
        </p>
      </motion.div>
    </main>
  );
}
