import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "heading": z.string(),
      "subtext": z.string()
    })
  }
};
export type Schemas = typeof schemas;