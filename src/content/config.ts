import { defineCollection } from 'astro:content';

export const collections = {
  blog: defineCollection({
    type: 'content'
  })
};