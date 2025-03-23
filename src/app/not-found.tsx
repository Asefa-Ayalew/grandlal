"use client"
import { Button, Container, Text, Title } from "@mantine/core";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg"
      >
        <Title order={1} className="text-6xl font-bold text-primary-500">
          404
        </Title>
        <Text size="xl" className="mt-4 text-[#008577] dark:text-gray-300">
          Oops! The page you are looking for does not exist.
        </Text>

        <Link href="/" passHref>
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600" size="md" radius="md">
            Go Home
          </Button>
        </Link>
      </motion.div>
    </Container>
  );
}
